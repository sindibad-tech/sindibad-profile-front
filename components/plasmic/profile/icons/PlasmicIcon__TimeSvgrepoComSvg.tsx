/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimeSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimeSvgrepoComSvgIcon(props: TimeSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M10.96 9.843l2.44 1.408c.237.138.314.45.18.682a.494.494 0 01-.68.184l-2.48-1.432A1.5 1.5 0 119 8.085V3.503C9 3.225 9.232 3 9.5 3c.276 0 .5.233.5.503v4.582a1.5 1.5 0 01.96 1.758zM9.5 19a9.5 9.5 0 100-19 9.5 9.5 0 000 19zm0-1a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
        }
      ></path>
    </svg>
  );
}

export default TimeSvgrepoComSvgIcon;
/* prettier-ignore-end */
