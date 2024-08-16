"use client";

import React, { useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

import Walkthrough from "@/components/shared/walkthrough";
import RealityForm from "@/components/forms/reality-form";

export default function RealityCheck() {
  const swiperRef = useRef<SwiperRef>(null);
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

  return (
    <div className="container">
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
    </div>
  );
}
