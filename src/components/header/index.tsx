"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/ui/button";
import { Refresh, Previous } from "@/icons";
import styles from "@/styles/header.module.css";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className={styles.header}>
      <Button
        disabled={pathname === "/"}
        className={`btn btn-ghost ${pathname === "/" ? styles.hidden : ""}`}
        onClick={() => router.back()}
      >
        <Previous />
      </Button>
      <Link href="/">
        <h1>juicebox</h1>
      </Link>
      <Button className="btn btn-ghost" onClick={() => router.refresh()}>
        <Refresh />
      </Button>
    </header>
  );
};

export default Header;
