// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicFlightCard,
  DefaultFlightCardProps
} from "./plasmic/profile/PlasmicFlightCard";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface FlightCardProps extends Omit<DefaultFlightCardProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultFlightCardProps altogether and have
// total control over the props for your component.
export interface FlightCardProps extends DefaultFlightCardProps {}

function FlightCard_(props: FlightCardProps, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicFlightCard to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicFlightCard are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all FlightCardProps here, but feel free
  // to do whatever works for you.

  return <PlasmicFlightCard root={{ ref }} {...props} />;
}

const FlightCard = React.forwardRef(FlightCard_);
export default FlightCard;
