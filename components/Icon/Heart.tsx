import React from "react";
export type SVGProps = {
  style?: React.CSSProperties,
  fill?: string,
  width: number | string,
  className?: string,
  viewBox?: string
}

const SVG = ({
  style = {},
  fill = "none",
  width = "100%",
  className = "",
  viewBox = `0 0 22 20`
}: SVGProps) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
  >
    <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69001C1 3.60001 3.49 1.10001 6.56 1.10001C8.38 1.10001 9.99 1.98001 11 3.34001C12.01 1.98001 13.63 1.10001 15.44 1.10001C18.51 1.10001 21 3.60001 21 6.69001C21 13.69 14.52 17.82 11.62 18.81Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default SVG;

{/* <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69001C1 3.60001 3.49 1.10001 6.56 1.10001C8.38 1.10001 9.99 1.98001 11 3.34001C12.01 1.98001 13.63 1.10001 15.44 1.10001C18.51 1.10001 21 3.60001 21 6.69001C21 13.69 14.52 17.82 11.62 18.81Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> */}