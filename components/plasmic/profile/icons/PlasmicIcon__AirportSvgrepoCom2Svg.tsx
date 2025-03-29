/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AirportSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AirportSvgrepoCom2SvgIcon(
  props: AirportSvgrepoCom2SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 60 60"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M59 42H21V24h8a1 1 0 001-1V13a1 1 0 00-1-1h-5V7a1 1 0 00-1-1h-7V2h2V0h-6v2h2v4H7a1 1 0 00-1 1v5H1a1 1 0 00-1 1v10a1 1 0 001 1h8v18H1a1 1 0 00-1 1v16a1 1 0 001 1h58a1 1 0 001-1V43a1 1 0 00-1-1zM19 29v13h-3V29h3zM8 8h14v4H8V8zm-6 6h26v8H2v-8zm17 10v3h-8v-3h8zm-8 5h3v13h-3V29zm43 23H44v-4h10v4zm-12 0H31v-4h11v4zm-11 2h11v4H31v-4zm-2 4H18v-4h11v4zm0-6H18v-4h11v4zm-13 0H6v-4h10v4zM6 54h10v4H6v-4zm38 4v-4h10v4H44zm14 0h-2V47a1 1 0 00-1-1H5a1 1 0 00-1 1v11H2V44h56v14z"
        }
      ></path>

      <path
        d={
          "M4 17h4v2H4zm6 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm14 9h8v7a1 1 0 001 1h4a1 1 0 001-1v-7h9a1 1 0 001-1c0-3.678-3.533-4.898-3.684-4.949A1 1 0 0056 20h-6v-7a1 1 0 00-1-1h-4a1 1 0 00-1 1v7h-3v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1v8a1 1 0 001 1zm12 6h-2v-6h2v6zm-2-18h2v6h-2v-6zm-9 4h2v3a1 1 0 001 1h15.814c.404.171 1.581.761 2.019 2H37v-6zM10 9h10v2H10z"
        }
      ></path>
    </svg>
  );
}

export default AirportSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
