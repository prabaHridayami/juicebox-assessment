"use client";
import React from "react";
import { useGlobalContext } from "@/contexts/GlobalContext";
import LottieAnimation from "@/components/shared/lottie-animation";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

import styles from "@/styles/result.module.css";

const Result = () => {
  const { user } = useGlobalContext();
  const router = useRouter();
  return (
    <div className="container">
      <LottieAnimation wrapperClassName="lottie-wrapper-sm" />
      <div className={styles.result_description}>
        <p>Thanks, {user}! Now, it&apos;s time to get a reality&nbsp;check.</p>
        <p>This will take 2-3 minutes.</p>
      </div>
      <div className="bottom-wrapper">
        <Button className="btn btn-light" onClick={() => router.replace("/")}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Result;
