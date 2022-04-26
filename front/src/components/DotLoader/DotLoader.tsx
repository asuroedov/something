import React, { FC } from "react";

interface LoaderProps {
  className?: string;
}

const DotLoader: FC<LoaderProps> = ({ className }) => {
  return (
    <svg
      version="1.1"
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 200 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
      className={className}
    >
      <circle fill="#fff" stroke="none" cx="20" cy="50" r="20">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
      </circle>
      <circle fill="#fff" stroke="none" cx="85" cy="50" r="20">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
      </circle>
      <circle fill="#fff" stroke="none" cx="150" cy="50" r="20">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
      </circle>
    </svg>
  );
};

export default React.memo(DotLoader);
