"use client";
import FileList from "./homePage/FileList";
import SearchBox from "./homePage/SearchBox";

import ExportExcel from "./homePage/ExportExcel";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Header from "./components/Header";
import UnauthUser from "./components/UnauthUser";

export default function Home() {
  return (
    <>
      <Header />
      <AuthenticatedTemplate>
        <div className="p-4 px-40 xl:px-10 lg:px-10 md:px-0  sm:px-0  grid grid-cols-12 gap-5 ">
          <FileList className="col-span-8 h-[88vh] border   " />
          <div className="col-span-4 flex flex-col gap-4">
            <ExportExcel className=" " />
            <SearchBox className=" " />
          </div>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <UnauthUser />
      </UnauthenticatedTemplate>
    </>
  );
}
