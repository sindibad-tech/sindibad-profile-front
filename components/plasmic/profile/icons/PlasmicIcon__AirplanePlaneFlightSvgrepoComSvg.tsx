/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AirplanePlaneFlightSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AirplanePlaneFlightSvgrepoComSvgIcon(
  props: AirplanePlaneFlightSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.5 20.71l3.795-1.236M1.5 8.728l5.795-1.954M4.529 24.652l5.766-1.878M30.4 30.5h.1m-29 0h27M14.398 18.689l-1.339 3.767a.5.5 0 00.625.643l1.258-.408a.498.498 0 00.249-.181l5.854-8.01m4.552-5.786l-5.506 1.789-7.974-5.61a.477.477 0 00-.442-.066l-1.531.497a.5.5 0 00-.265.738l4.03 6.45-6.115 1.986a1.976 1.976 0 01-1.854-.333l-1.783-1.408a.497.497 0 00-.467-.079l-.97.314a.497.497 0 00-.24.783l1.948 2.532a5.015 5.015 0 005.505 1.702l19.668-6.391a1.297 1.297 0 00.834-1.638 1.325 1.325 0 00-.888-.857l-1.632-.458a3.997 3.997 0 00-2.318.049z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default AirplanePlaneFlightSvgrepoComSvgIcon;
/* prettier-ignore-end */
