"use client";
import LottieAnimation from "@/components/shared/lottie-animation";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

import Walkthrough from "@/components/shared/walkthrough";
import RealityForm from "@/components/forms/reality-form";
import Button from "@/components/ui/button";
import { useLenis, ReactLenis } from "@/libs/lenis";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const swiperRef = useRef<SwiperRef>(null);
  const walkthroughRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const [curStep, setCurStep] = useState<number>(0);
  const [isTutorialCompleted, setIsTurotialCompleted] =
    useState<boolean>(false);

  const lenis = useLenis();
  const onContinue = (isLast: number) => {
    if (curStep === isLast) {
      setIsTurotialCompleted(true);
    } else {
      swiperRef.current?.swiper.slideNext();
    }
  };
  const onChangeSlide = (swiper: any) => {
    setCurStep(swiper.activeIndex);
  };

  const handleClick = () => {
    const element = walkthroughRef.current;
    if (element && lenis) {
      lenis.scrollTo(element, {
        duration: 0.5,
        easing: (t: number) => t,
      });
    }
  };

  useEffect(() => {
    if (heroRef.current && lenis) {
      lenis.scrollTo(heroRef.current, {
        duration: 0.5,
        offset: -115,
        easing: (t: number) => t,
      });
    }
  }, [heroRef.current]);

  useLayoutEffect(() => {
    const heroCtx = gsap.context(() => {
      const timeln = gsap.timeline({ paused: true });

      timeln.to(
        heroRef.current,
        { autoAlpha: 0, duration: 5, ease: "none" },
        0
      );

      ScrollTrigger.create({
        animation: timeln,
        trigger: heroRef.current,
        start: "bottom center",
        end: "center top",
        scrub: true,
      });
    }, walkthroughRef);

    const ctx = gsap.context(() => {
      const timeln = gsap.timeline({ paused: true });

      timeln.fromTo(
        walkthroughRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 5, ease: "none" },
        0
      );

      ScrollTrigger.create({
        animation: timeln,
        trigger: walkthroughRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      });
    }, walkthroughRef);

    return () => {
      ctx.revert();
      heroCtx.revert();
    };
  }, []);

  return (
    <ReactLenis root>
      <section className="container" ref={heroRef}>
        <LottieAnimation wrapperClassName="lottie-wrapper" />
        <h2 className="text-center">
          Compare your thoughts on&nbsp;
          <span className="highlight">technology</span>&nbsp;with current
          industry opinions.
        </h2>
        <div className="action-container">
          <Button onClick={handleClick} className="btn btn-primary">
            Get a reality check
          </Button>
        </div>
      </section>
      <section className="container" ref={walkthroughRef}>
        {isTutorialCompleted ? (
          <RealityForm />
        ) : (
          <Walkthrough
            curStep={curStep}
            swiperRef={swiperRef}
            onContinue={onContinue}
            onChangeSlide={onChangeSlide}
          />
        )}
      </section>
    </ReactLenis>
  );
}
