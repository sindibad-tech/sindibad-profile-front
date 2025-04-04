/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MeasureKilometerSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MeasureKilometerSvgrepoComSvgIcon(
  props: MeasureKilometerSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 76 76"}
      version={"1.1"}
      baseProfile={"full"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={"1"}
        d={
          "M19 47.5h3.167v4.75h31.666V47.5H57v7.917H19V47.5zm4.605-25.716v12.759h.059l1.034-1.707 2.927-4.254h5.409l-5.173 5.73 5.912 8.42h-5.528l-3.517-5.816-1.123 1.389v4.426h-4.396V21.784h4.396zm11.574 20.947v-9.635l-.118-4.514h3.813l.177 1.93h.09c.302-.492.813-.977 1.53-1.455.717-.478 1.7-.735 2.95-.77.96.008 1.782.226 2.467.652a3.77 3.77 0 011.505 1.744h.06c.555-.742 1.17-1.312 1.845-1.712.751-.442 1.63-.67 2.637-.685 1.409-.01 2.563.48 3.463 1.47.899.99 1.364 2.538 1.394 4.644v8.331h-4.375v-7.695c.002-1.034-.165-1.83-.5-2.39-.335-.56-.849-.843-1.542-.85-.51.011-.935.162-1.272.452a2.54 2.54 0 00-.74 1.081l-.142 1.128v8.274h-4.375v-7.955c.003-.897-.17-1.614-.52-2.152s-.895-.814-1.635-.828c-.59.022-1.064.195-1.419.52-.355.326-.6.673-.736 1.042a2.847 2.847 0 00-.182 1.128v8.245h-4.375z"
        }
      ></path>
    </svg>
  );
}

export default MeasureKilometerSvgrepoComSvgIcon;
/* prettier-ignore-end */
