"use client";
import LottieAnimation from "@/components/shared/lottie-animation";
import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <section className="container">
      <LottieAnimation wrapperClassName="lottie-wrapper" />
      <h2 className={styles.description}>
        Compare your thoughts on&nbsp;
        <span className={styles.highlight}>technology</span>&nbsp;with current
        industry opinions.
      </h2>
      <div className="action-container">
        <Link href="/reality-check" className="btn btn-primary">
          Get a reality check
        </Link>
      </div>
    </section>
  );
}
