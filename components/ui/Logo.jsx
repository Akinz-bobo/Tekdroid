import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="text-2xl laptop:text-4xl font-[800]">
      <Link href={"/"}>{"{Tekdroid}"}</Link>
    </div>
  );
}

export default Logo;
