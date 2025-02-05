"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/sig-blk-en.svg";
import Button from "@mui/material/Button";

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Link from "next/link";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../authConfig";
type Props = {
  children: React.ReactNode;
};

const LogoHeader = (props: Props) => {
  const msalInstance = new PublicClientApplication(msalConfig);

  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const handleLogin = () => {
    //   instance.loginPopup(loginRequest).catch(e => {
    //     console.log(e);
    // });

    console.log("Login Request: ", loginRequest);
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <MsalProvider instance={msalInstance}>
      <div className="p-4 border-b border-gray-200 flex justify-between">
        <Link href="/" className="w-1/3">
          <Image height={33} src={logo} alt="Logo" />
        </Link>

        {isAuthenticated ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
          >
            Sign In
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
          >
            Sign In
          </Button>
        )}
      </div>
      {props.children}
    </MsalProvider>
  );
};

export default LogoHeader;
