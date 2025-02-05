import React, { useEffect, useState } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";

import Image from "next/image";
import logo from "../../public/images/sig-blk-en.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { callMsGraph } from "../graph";

import { loginRequest } from "../authConfig";
type Props = {};

const Header = (props: Props) => {
  const [graphData, setGraphData] = useState<any>(null);
  const { instance, accounts } = useMsal();

  const isAuthenticated = useIsAuthenticated();
  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      instance
      .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
      })
      .then((response) => {
          callMsGraph(response.accessToken).then((response) => setGraphData(response));
          console.log(response);
      });
    }
  }, [isAuthenticated]);

  return (
    <div className="p-4 border-b border-gray-200 flex justify-between">
      <Link href="/" className="w-1/3">
        <Image height={33} src={logo} alt="Logo" />
      </Link>

      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          {graphData &&("Welcome," + " " + graphData.givenName + " " + graphData.surname)}
          <Button
            variant="contained"
            color="error"
            onClick={() => handleLogout()}
          >
            Sign out
          </Button>
        </div>
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
  );
};

export default Header;
