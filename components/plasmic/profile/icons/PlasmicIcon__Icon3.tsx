/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.59 7h8.82a1 1 0 01.902 1.433l-1.44 3a1 1 0 01-.901.567H5.029a1 1 0 01-.901-.567l-1.44-3A1 1 0 013.59 7z"
        }
        stroke={"#000"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 7l-.78-2.342A.5.5 0 015.693 4h4.612a.5.5 0 01.475.658L10 7M8 2v2m-2 8v9h4v-9m-7 9h18m1-16h-6l-1-1"
        }
        stroke={"#000"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18 3l2 2-2 2m-8 10h7a2 2 0 012 2v2"}
        stroke={"#000"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
