import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Subdomain({
  params,
}: {
  params: { domain: string };
}) {
  const session = await getServerSession(authOptions);

  console.log(params.domain, session);

  return <div>Subdomain: {params.domain}</div>;
}
