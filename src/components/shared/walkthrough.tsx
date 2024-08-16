import React, { ReactElement } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Button from "@/components/ui/button";
import LottieAnimation from "@/components/shared/lottie-animation";

type Props = {
  onChangeSlide: (swiper: any) => void;
  onContinue: (lastIndex: number) => void;
  swiperRef: any;
  curStep: number;
};

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
const Walkthrough = (props: Props) => {
  const { curStep, swiperRef, onChangeSlide, onContinue } = props;
  return (
    <>
      <LottieAnimation wrapperClassName="lottie-wrapper-md" />
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        onSlideChange={onChangeSlide}
        ref={swiperRef}
      >
        {tutorials.map((tutorial: TutorialProps) => (
          <SwiperSlide key={tutorial.id}>
            <h4 className="tutorial-description">{tutorial.desc}</h4>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="action-container">
        <Button
          onClick={() => onContinue(tutorials.length - 1)}
          className={`btn btn-${
            curStep === tutorials.length - 1 ? "light" : "outline"
          }`}
        >
          {curStep === tutorials.length - 1 ? "Get started" : "Continue"}
        </Button>
      </div>
    </>
  );
};

export default Walkthrough;
