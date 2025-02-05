import React from "react";
import PageAuth from "./PageAuth";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <PageAuth slug={slug} />;
}
