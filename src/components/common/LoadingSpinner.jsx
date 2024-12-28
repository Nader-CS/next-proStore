"use client";

import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = ({ width = 30, height = 30 }) => {
  return (
    <TailSpin
      visible={true}
      height={height}
      strokeWidth={2}
      width={width}
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
    />
  );
};
export default LoadingSpinner;
