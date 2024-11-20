// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p1fHvJbiLdgzRrAS359KQb
// Component: T8QryWKJz10k

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

import ButtonButton from "../../ButtonButton"; // plasmic-import: 99pKO0LKqxZl/component
import ListListItem from "../../ListListItem"; // plasmic-import: ZyeNfPf0ahk3/component

import { useScreenVariants as useScreenVariantsj8Mi7ZgQDQt } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: J8mi7ZG-qDQt/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: p1fHvJbiLdgzRrAS359KQb/projectcss
import sty from "./PlasmicButtonDrop.module.css"; // plasmic-import: T8QryWKJz10k/css

createPlasmicElementProxy;

export type PlasmicButtonDrop__VariantMembers = {
  open: "open";
};
export type PlasmicButtonDrop__VariantsArgs = {
  open?: SingleBooleanChoiceArg<"open">;
};
type VariantPropType = keyof PlasmicButtonDrop__VariantsArgs;
export const PlasmicButtonDrop__VariantProps = new Array<VariantPropType>(
  "open"
);

export type PlasmicButtonDrop__ArgsType = {
  dir?: string;
  dropText?: string;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicButtonDrop__ArgsType;
export const PlasmicButtonDrop__ArgProps = new Array<ArgPropType>(
  "dir",
  "dropText",
  "children"
);

export type PlasmicButtonDrop__OverridesType = {
  root?: Flex__<"nav">;
  buttonButton?: Flex__<typeof ButtonButton>;
  freeBox?: Flex__<"div">;
};

export interface DefaultButtonDropProps {
  dir?: string;
  dropText?: string;
  children?: React.ReactNode;
  open?: SingleBooleanChoiceArg<"open">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButtonDrop__RenderFunc(props: {
  variants: PlasmicButtonDrop__VariantsArgs;
  args: PlasmicButtonDrop__ArgsType;
  overrides: PlasmicButtonDrop__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          dir: "rtl",
          dropText: "dropdown"
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "open",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.open
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const [isRootFocusWithin, triggerRootFocusWithinProps] = useTrigger(
    "useFocusedWithin",
    {}
  );
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    hover_root: isRootHover,
    focusWithin_root: isRootFocusWithin,
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsj8Mi7ZgQDQt()
  });

  return (
    <nav
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
        sty.root,
        { [sty.rootopen]: hasVariant($state, "open", "open") }
      )}
      data-plasmic-trigger-props={[
        triggerRootHoverProps,
        triggerRootFocusWithinProps,
        triggerRootFocusVisibleWithinProps
      ]}
    >
      <ButtonButton
        data-plasmic-name={"buttonButton"}
        data-plasmic-override={overrides.buttonButton}
        className={classNames("__wab_instance", sty.buttonButton, {
          [sty.buttonButtonopen]: hasVariant($state, "open", "open")
        })}
        color={"themeSecondary"}
        direction={(() => {
          try {
            return $props.dir;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "rtl";
            }
            throw e;
          }
        })()}
        endIcon={
          '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="currentcolor"/></svg>'
        }
        showEndIcon={
          hasVariant($state, "open", "open") &&
          hasVariant(globalVariants, "screen", "mobileSmall")
            ? undefined
            : hasVariant($state, "open", "open") &&
              hasVariant(globalVariants, "screen", "mobileBig")
            ? undefined
            : true
        }
        size={"small"}
        startIcon={
          '<svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="currentcolor"/></svg>'
        }
        text={(() => {
          try {
            return $props.dropText;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "button";
            }
            throw e;
          }
        })()}
        type={"link"}
      />

      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBox___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.freeBoxopen]: hasVariant($state, "open", "open")
        })}
        dir={(() => {
          try {
            return $props.dir;
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
        {renderPlasmicSlot({
          defaultContents: (_par =>
            !_par ? [] : Array.isArray(_par) ? _par : [_par])(
            (() => {
              try {
                return [2, 3, 4];
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <ListListItem
                className={classNames(
                  "__wab_instance",
                  sty.listListItem__slg7U
                )}
                dir={``}
                key={currentIndex}
              />
            );
          }),
          value: args.children
        })}
      </Stack__>
    </nav>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "buttonButton", "freeBox"],
  buttonButton: ["buttonButton"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "nav";
  buttonButton: typeof ButtonButton;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonDrop__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonDrop__VariantsArgs;
    args?: PlasmicButtonDrop__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonDrop__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButtonDrop__ArgsType,
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
          internalArgPropNames: PlasmicButtonDrop__ArgProps,
          internalVariantPropNames: PlasmicButtonDrop__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButtonDrop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonDrop";
  } else {
    func.displayName = `PlasmicButtonDrop.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonDrop = Object.assign(
  // Top-level PlasmicButtonDrop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonButton: makeNodeComponent("buttonButton"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicButtonDrop
    internalVariantProps: PlasmicButtonDrop__VariantProps,
    internalArgProps: PlasmicButtonDrop__ArgProps
  }
);

export default PlasmicButtonDrop;
/* prettier-ignore-end */
