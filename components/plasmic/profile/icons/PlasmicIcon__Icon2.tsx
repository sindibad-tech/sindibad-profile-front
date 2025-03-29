/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 10 14"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.875 7a4.87 4.87 0 00-2.033-3.957l-.398-2.2a.875.875 0 00-.862-.718H3.418a.875.875 0 00-.862.719l-.398 2.2a4.867 4.867 0 000 7.913l.398 2.2a.875.875 0 00.861.718h3.165a.875.875 0 00.862-.719l.398-2.2A4.87 4.87 0 009.875 7zM3.295.978a.125.125 0 01.124-.103h3.165a.125.125 0 01.125.103l.285 1.574a4.855 4.855 0 00-3.98 0l.28-1.575zm3.41 12.045a.125.125 0 01-.124.102H3.417a.125.125 0 01-.124-.102l-.286-1.575a4.855 4.855 0 003.982 0l-.283 1.575zM5 11.125a4.125 4.125 0 110-8.25 4.125 4.125 0 010 8.25zM7.875 7a.375.375 0 01-.375.375H5A.375.375 0 014.625 7V4.5a.375.375 0 11.75 0v2.125H7.5A.375.375 0 017.875 7z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
