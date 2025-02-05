"use client";
import React from "react";

import PageClient from "./PageClient";
import Header from "../../components/Header";

import UnauthUser from "@/app/components/UnauthUser";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
type Props = {
  slug: string;
};

const PageAuth = (props: Props) => {
  const { slug } = props;
  return (
    <>
      <Header />
      <AuthenticatedTemplate>
        <PageClient slug={slug} />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <UnauthUser />
      </UnauthenticatedTemplate>
    </>
  );
};

export default PageAuth;
