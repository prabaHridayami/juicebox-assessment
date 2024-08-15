"use client";

import React, { ReactElement, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

import Walkthrough from "@/components/shared/walkthrough";
import RealityForm from "@/components/forms/reality-form";

interface TutorialProps {
  id: number;
  desc: ReactElement;
}

const tutorials: TutorialProps[] = [
  {
    id: 1,
    desc: (
      <>
        Professionals around the world shared how they feel abo
        <span className="muted">
          ut technology and I&apos;ve listened. Now it&apos;s your turn.
        </span>
      </>
    ),
  },
  {
    id: 2,
    desc: (
      <>
        I&apos;ll ask you a handful of meaningful questions&nbsp;
        <span className="muted">
          and compare your responses with people in your industry.
        </span>
      </>
    ),
  },
  {
    id: 3,
    desc: (
      <>
        You&apos;ll get insights into current industry sentiments an
        <span className="muted">
          d a reality check about technology in a few minutes. Deal? Great!
        </span>
      </>
    ),
  },
];

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
