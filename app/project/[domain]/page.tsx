import React from "react";

export default function Subdomain({ params }: { params: { domain: string } }) {
  return <div>Subdomain: {params.domain}</div>;
}
