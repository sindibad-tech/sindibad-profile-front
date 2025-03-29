/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WatchThinSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WatchThinSvgrepoComSvgIcon(
  props: WatchThinSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M204 128a75.946 75.946 0 00-32.35-62.157l-6.523-35.984A11.993 11.993 0 00153.32 20h-50.64a11.993 11.993 0 00-11.807 9.86l-6.524 35.983a75.89 75.89 0 000 124.314l6.524 35.984A11.993 11.993 0 00102.68 236h50.64a11.993 11.993 0 0011.807-9.86l6.524-35.983A75.946 75.946 0 00204 128zM98.744 31.286A3.998 3.998 0 01102.68 28h50.64a3.998 3.998 0 013.936 3.286l5.264 29.04a75.72 75.72 0 00-69.04 0zm58.512 193.428A3.998 3.998 0 01153.32 228h-50.64a3.998 3.998 0 01-3.936-3.286l-5.264-29.04a75.72 75.72 0 0069.04 0zM128 196a68 68 0 1168-68 68.077 68.077 0 01-68 68zm44-68a4 4 0 01-4 4h-40a4 4 0 01-4-4V88a4 4 0 018 0v36h36a4 4 0 014 4z"
        }
      ></path>
    </svg>
  );
}

export default WatchThinSvgrepoComSvgIcon;
/* prettier-ignore-end */
