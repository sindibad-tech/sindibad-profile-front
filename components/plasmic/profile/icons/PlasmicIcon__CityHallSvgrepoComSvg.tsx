/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CityHallSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CityHallSvgrepoComSvgIcon(
  props: CityHallSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.906-.031c-.043.008-.086.02-.125.031A1.002 1.002 0 0024 1v3.063c-4.133.468-7.453 3.777-7.938 7.906H16a1.024 1.024 0 00-.219 0A1.042 1.042 0 0016 14.032V22.5l2-.813v-7.656h2v6.875l2-.718V14.03h2v5.375L25 19l1 .406v-5.375h2v6.156l2 .72V14.03h2v7.656l2 .813V14.03c.402.055.8-.129 1.02-.469a1.046 1.046 0 000-1.124 1.046 1.046 0 00-1.02-.47h-.063C33.453 7.84 30.134 4.532 26 4.064V1a1 1 0 00-1.094-1.031zM24.813 6c.105.016.207.016.312 0h.094c3.386.105 6.054 2.691 6.562 5.969H18.22c.511-3.29 3.191-5.88 6.593-5.969zm.062 15a1.075 1.075 0 00-.219.063l-19 7.312a1 1 0 00-.656.938V33c0 .55.45 1 1 1h1v15c0 .55.45 1 1 1h11.313c.55 0 1-.45 1-1v-5.406c0-2.254 1.464-4.313 3.656-4.719H24c3.02-.586 5.594 1.64 5.594 4.531V49c0 .55.449 1 1 1H42c.55 0 1-.45 1-1V34h1c.55 0 1-.45 1-1v-3.688a1 1 0 00-.656-.937l-19-7.313a1.006 1.006 0 00-.469-.062zM25 23.063l18 6.906V32H8.187a1.016 1.016 0 00-.406 0H7v-2.031zM9 34h32v14h-9.406v-4.594c0-4.097-3.801-7.289-7.969-6.5-.012.004-.02-.004-.031 0-3.192.606-5.282 3.555-5.282 6.688V48H9z"
        }
      ></path>
    </svg>
  );
}

export default CityHallSvgrepoComSvgIcon;
/* prettier-ignore-end */
