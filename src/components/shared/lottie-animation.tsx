import React from "react";
import AI from "../../../public/JB2G_JAI.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface LottieAnimationProps {
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
}

const LottieAnimation = ({
  loop = true,
  autoplay = true,
  className = "",
  wrapperClassName = "",
  style,
}: LottieAnimationProps) => {
  return (
    <div className={wrapperClassName}>
      <Player
        src={AI}
        loop={loop}
        autoplay={autoplay}
        className={className}
        style={style}
      />
    </div>
  );
};

export default LottieAnimation;
