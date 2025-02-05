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

const Auth = (props: Props) => {
  const msalInstance = new PublicClientApplication(msalConfig);

  return <MsalProvider instance={msalInstance}>{props.children}</MsalProvider>;
};

export default Auth;
