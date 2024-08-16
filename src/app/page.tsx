"use client";
import LottieAnimation from "@/components/shared/lottie-animation";

import React, { useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

import Walkthrough from "@/components/shared/walkthrough";
import RealityForm from "@/components/forms/reality-form";
import Button from "@/components/ui/button";
import { useLenis, ReactLenis } from "@/libs/lenis";

export default function Home() {
  const swiperRef = useRef<SwiperRef>(null);
  const lenis = useLenis();
  const [curStep, setCurStep] = useState<number>(0);
  const [isTutorialCompleted, setIsTurotialCompleted] =
    useState<boolean>(false);

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
    const element = document.getElementById("walkthrough");
    if (element && lenis) {
      lenis.scrollTo(element, {
        duration: 0.5,
        easing: (t: number) => t,
      });
    }
  };

  return (
    <ReactLenis root>
      <section className="container">
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
      <section className="container" id="walkthrough">
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
