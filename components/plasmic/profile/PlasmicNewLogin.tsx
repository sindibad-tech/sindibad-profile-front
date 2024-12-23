// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i2nNPeRNQPEP9BPre46c64
// Component: kAqzy6eR7N60

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_css from "../library/plasmic.module.css"; // plasmic-import: p1fHvJbiLdgzRrAS359KQb/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: i2nNPeRNQPEP9BPre46c64/projectcss
import sty from "./PlasmicNewLogin.module.css"; // plasmic-import: kAqzy6eR7N60/css

import AirplanePlaneFlightSvgrepoComSvgIcon from "./icons/PlasmicIcon__AirplanePlaneFlightSvgrepoComSvg"; // plasmic-import: Pd4zaT4q7XG6/icon
import CityHallSvgrepoComSvgIcon from "./icons/PlasmicIcon__CityHallSvgrepoComSvg"; // plasmic-import: NkOv02nCk4wU/icon
import DepartureAirportSvgrepoComSvgIcon from "./icons/PlasmicIcon__DepartureAirportSvgrepoComSvg"; // plasmic-import: BkpnIEzRskj9/icon

createPlasmicElementProxy;

export type PlasmicNewLogin__VariantMembers = {};
export type PlasmicNewLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewLogin__VariantsArgs;
export const PlasmicNewLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicNewLogin__ArgsType = {
  language?: string;
};
type ArgPropType = keyof PlasmicNewLogin__ArgsType;
export const PlasmicNewLogin__ArgProps = new Array<ArgPropType>("language");

export type PlasmicNewLogin__OverridesType = {
  root?: Flex__<"div">;
  duration2?: Flex__<"section">;
  days3?: Flex__<"div">;
  hours4?: Flex__<"div">;
  minutes3?: Flex__<"div">;
  image?: Flex__<"section">;
  img?: Flex__<typeof PlasmicImg__>;
  section?: Flex__<"section">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  flights2?: Flex__<"div">;
  flightIcon3?: Flex__<"svg">;
  cities2?: Flex__<"div">;
  cityIcon3?: Flex__<"svg">;
  airports2?: Flex__<"div">;
  airportIcon4?: Flex__<"svg">;
};

export interface DefaultNewLoginProps {
  language?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewLogin__RenderFunc(props: {
  variants: PlasmicNewLogin__VariantsArgs;
  args: PlasmicNewLogin__ArgsType;
  overrides: PlasmicNewLogin__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          language: (() => {
            try {
              return ("; " + `${window.document.cookie}`)
                .split("; user_lang=")
                .pop()
                .split(";")
                .shift()
                ? ("; " + `${window.document.cookie}`)
                    .split("; user_lang=")
                    .pop()
                    .split(";")
                    .shift()
                : "en";
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return '""';
              }
              throw e;
            }
          })()
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    (() => {
      try {
        return true;
      } catch (e) {
        if (
          e instanceof TypeError ||
          e?.plasmicType === "PlasmicUndefinedDataError"
        ) {
          return true;
        }
        throw e;
      }
    })() ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_library_css.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          sty.root
        )}
        dr={(() => {
          try {
            return $state.language === "ar" ? "rtl" : "ltr";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
      >
        <section
          data-plasmic-name={"duration2"}
          data-plasmic-override={overrides.duration2}
          className={classNames(projectcss.all, sty.duration2)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fVrKz
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.language === "ar"
                    ? "مدة الوقت في الطيران"
                    : "Time Spent Flying";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__duCsI)}>
            <div
              data-plasmic-name={"days3"}
              data-plasmic-override={overrides.days3}
              className={classNames(projectcss.all, sty.days3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__az0CA
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return "0";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bGmoU
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.language === "ar" ? "أيام" : "Days";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
            <div
              data-plasmic-name={"hours4"}
              data-plasmic-override={overrides.hours4}
              className={classNames(projectcss.all, sty.hours4)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4ECam
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return "0";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zjYpi
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.language === "ar" ? "ساعات" : "Hours";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
            <div
              data-plasmic-name={"minutes3"}
              data-plasmic-override={overrides.minutes3}
              className={classNames(projectcss.all, sty.minutes3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tpG6O
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return "0";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__l1YE
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.language === "ar" ? "دقائق" : "Minutes";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
          </div>
        </section>
        {(() => {
          try {
            return $ctx.fetchedData.result.flights === 0;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <section
            data-plasmic-name={"image"}
            data-plasmic-override={overrides.image}
            className={classNames(projectcss.all, sty.image)}
          >
            {(() => {
              try {
                return $ctx.fetchedData.result.flights === 0;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"50%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/profile/images/skypePicture20241222T080851147ZCopy2Png.png",
                  fullWidth: 1523,
                  fullHeight: 1197,
                  aspectRatio: undefined
                }}
              />
            ) : null}
            {(() => {
              try {
                return $ctx.fetchedData.result.flights === 0;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b3Wij
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.language === "ar"
                        ? ".للمتابعة في إحصائيات الرحلة\u060C يرجى تسجيل الدخول أولاً"
                        : "To continue on Trip Stats, please login first.";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            ) : null}
          </section>
        ) : null}
        <section
          data-plasmic-name={"section"}
          data-plasmic-override={overrides.section}
          className={classNames(projectcss.all, sty.section)}
          dr={(() => {
            try {
              return undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        >
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={"https://sindibad.iq/auth?step=regin"}
            onClick={async event => {
              const $steps = {};

              $steps["login"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          function deleteCookie(name, path = "/", domain) {
                            const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
                            const domainAttribute = domain
                              ? `; domain=${domain}`
                              : "";
                            const pathAttribute = `; path=${path}`;
                            document.cookie = `${name}=; expires=${expires}${pathAttribute}${domainAttribute}`;
                          }
                          try {
                            deleteCookie("aut_token", "/", ".sindibad.iq");
                            console.log("deleting auth cookie");
                          } catch {
                            console.log("No auth cookie");
                          }
                          let name = "external_redirect";
                          let value = "https://profile.sindibad.iq/trip-stats";
                          let path = "/";
                          const domainAttribute = `; domain=.sindibad.iq`;
                          window.document.cookie = `${name}=${window.encodeURIComponent(
                            value
                          )}; path=${path}${domainAttribute}`;
                          return console.log("External redirect set");
                        })();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["login"] != null &&
                typeof $steps["login"] === "object" &&
                typeof $steps["login"].then === "function"
              ) {
                $steps["login"] = await $steps["login"];
              }
            }}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__okTmE
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.language === "ar" ? "تسجيل الدخول" : "Login";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "New Request";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </PlasmicLink__>
          <div
            data-plasmic-name={"flights2"}
            data-plasmic-override={overrides.flights2}
            className={classNames(projectcss.all, sty.flights2)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rpuIg)}
            >
              <AirplanePlaneFlightSvgrepoComSvgIcon
                data-plasmic-name={"flightIcon3"}
                data-plasmic-override={overrides.flightIcon3}
                className={classNames(projectcss.all, sty.flightIcon3)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2Vnq5
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.language === "ar"
                        ? "عدد الرحلات"
                        : "Flights";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__h7KyI
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "0";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
          <div
            data-plasmic-name={"cities2"}
            data-plasmic-override={overrides.cities2}
            className={classNames(projectcss.all, sty.cities2)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uxog)}
            >
              <CityHallSvgrepoComSvgIcon
                data-plasmic-name={"cityIcon3"}
                data-plasmic-override={overrides.cityIcon3}
                className={classNames(projectcss.all, sty.cityIcon3)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__om3VS
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.language === "ar"
                        ? "المدن التي زرتها"
                        : "Cities Visited";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__izCvS
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "0";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
          <div
            data-plasmic-name={"airports2"}
            data-plasmic-override={overrides.airports2}
            className={classNames(projectcss.all, sty.airports2)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___813D8)}
            >
              <DepartureAirportSvgrepoComSvgIcon
                data-plasmic-name={"airportIcon4"}
                data-plasmic-override={overrides.airportIcon4}
                className={classNames(projectcss.all, sty.airportIcon4)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9MZih
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.language === "ar"
                        ? "المطارات التي زرتها "
                        : "Airports Visited";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zssf
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "0";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
        </section>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "duration2",
    "days3",
    "hours4",
    "minutes3",
    "image",
    "img",
    "section",
    "link",
    "flights2",
    "flightIcon3",
    "cities2",
    "cityIcon3",
    "airports2",
    "airportIcon4"
  ],
  duration2: ["duration2", "days3", "hours4", "minutes3"],
  days3: ["days3"],
  hours4: ["hours4"],
  minutes3: ["minutes3"],
  image: ["image", "img"],
  img: ["img"],
  section: [
    "section",
    "link",
    "flights2",
    "flightIcon3",
    "cities2",
    "cityIcon3",
    "airports2",
    "airportIcon4"
  ],
  link: ["link"],
  flights2: ["flights2", "flightIcon3"],
  flightIcon3: ["flightIcon3"],
  cities2: ["cities2", "cityIcon3"],
  cityIcon3: ["cityIcon3"],
  airports2: ["airports2", "airportIcon4"],
  airportIcon4: ["airportIcon4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  duration2: "section";
  days3: "div";
  hours4: "div";
  minutes3: "div";
  image: "section";
  img: typeof PlasmicImg__;
  section: "section";
  link: "a";
  flights2: "div";
  flightIcon3: "svg";
  cities2: "div";
  cityIcon3: "svg";
  airports2: "div";
  airportIcon4: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewLogin__VariantsArgs;
    args?: PlasmicNewLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewLogin__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewLogin__ArgProps,
          internalVariantPropNames: PlasmicNewLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewLogin";
  } else {
    func.displayName = `PlasmicNewLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicNewLogin = Object.assign(
  // Top-level PlasmicNewLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    duration2: makeNodeComponent("duration2"),
    days3: makeNodeComponent("days3"),
    hours4: makeNodeComponent("hours4"),
    minutes3: makeNodeComponent("minutes3"),
    image: makeNodeComponent("image"),
    img: makeNodeComponent("img"),
    section: makeNodeComponent("section"),
    link: makeNodeComponent("link"),
    flights2: makeNodeComponent("flights2"),
    flightIcon3: makeNodeComponent("flightIcon3"),
    cities2: makeNodeComponent("cities2"),
    cityIcon3: makeNodeComponent("cityIcon3"),
    airports2: makeNodeComponent("airports2"),
    airportIcon4: makeNodeComponent("airportIcon4"),

    // Metadata about props expected for PlasmicNewLogin
    internalVariantProps: PlasmicNewLogin__VariantProps,
    internalArgProps: PlasmicNewLogin__ArgProps
  }
);

export default PlasmicNewLogin;
/* prettier-ignore-end */
