// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue =
  | "mobileSmall"
  | "mobileBig"
  | "tablet"
  | "desktopDefault";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  mobileSmall: "(min-width:0px) and (max-width:512px)",
  mobileBig: "(max-width:768px)",
  tablet: "(max-width:1024px)",
  desktopDefault: "(max-width:1280px)",
});

export default ScreenContext;
/* prettier-ignore-end */
