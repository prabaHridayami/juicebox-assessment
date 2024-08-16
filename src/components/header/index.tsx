"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import Button from "@/components/ui/button";
import { Refresh, Previous } from "@/icons";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header>
      <Button
        disabled={pathname === "/"}
        className={`btn btn-ghost ${pathname === "/" ? "hidden" : ""}`}
        onClick={() => router.back()}
      >
        <Previous />
      </Button>
      <Link href="/">
        <h1>juicebox</h1>
      </Link>
      <Button className="btn btn-ghost" onClick={() => router.push("/")}>
        <Refresh />
      </Button>
    </header>
  );
};

export default Header;
