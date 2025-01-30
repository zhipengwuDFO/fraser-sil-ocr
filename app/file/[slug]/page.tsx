
import React from "react";
import PageClient from './PageClient'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (

       <PageClient slug={slug} />
  
  );
}
