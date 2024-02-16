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
  viewBox = `0 0 24 24`
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
    <path d="M21.9902 17.6236V17.6185C21.8226 15.3601 19.7462 13.6542 17.3508 13.8096C16.026 13.8936 14.8851 14.5301 14.1497 15.4594L10.5377 13.7943C10.6701 13.3513 10.7269 12.8904 10.6918 12.4219C10.6593 11.9458 10.5323 11.4926 10.343 11.075L13.6793 8.97196C14.539 9.7969 15.7638 10.2807 17.0858 10.1941C18.2376 10.1203 19.3082 9.61612 20.0707 8.79628C21.6469 7.09039 21.463 4.501 19.6516 3.01408C18.781 2.29608 17.6455 1.93962 16.4883 2.00837C14.0902 2.16877 12.2788 4.12163 12.4437 6.38003C12.4816 6.8587 12.6032 7.30936 12.7925 7.72692L9.46162 9.83C8.60187 9.00506 7.37983 8.5213 6.06046 8.60787C3.65693 8.76318 1.8455 10.716 2.01042 12.9744C2.16723 15.2328 4.24903 16.9413 6.64714 16.7885C7.79889 16.7147 8.86953 16.2156 9.63195 15.3958C9.70224 15.3118 9.77254 15.2277 9.84013 15.1412L13.4522 16.8012C13.3251 17.2417 13.2683 17.7025 13.2981 18.1812C13.463 20.4396 15.5367 22.1455 17.9402 21.9902C20.3383 21.8349 22.1497 19.882 21.9902 17.6236ZM16.6046 3.50039C17.3346 3.45456 18.0564 3.68371 18.6107 4.13691C19.1649 4.59521 19.5029 5.23683 19.5516 5.92173C19.657 7.35773 18.5053 8.60278 16.9804 8.70207C15.4583 8.80137 14.1389 7.71673 14.0335 6.28073C13.928 4.84473 15.0798 3.59968 16.6046 3.50039ZM6.54441 15.2965C5.01956 15.3958 3.70019 14.3111 3.59475 12.8802C3.48931 11.4417 4.63294 10.1992 6.16049 10.0999C6.89317 10.049 7.61775 10.2781 8.16658 10.7364C8.72083 11.1896 9.05878 11.8312 9.11285 12.5161C9.21829 13.9547 8.06655 15.1972 6.54441 15.2965ZM17.8293 20.4982C16.3099 20.5975 14.9878 19.5128 14.8824 18.0768C14.7769 16.6434 15.9287 15.4009 17.4535 15.3016C18.9811 15.2074 20.3005 16.2869 20.4059 17.7229C20.5059 19.1615 19.3569 20.404 17.8293 20.4982Z" fill="#333333" stroke="#333333" stroke-width="0.2"/>
  </svg>
);

export default SVG;
