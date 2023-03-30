// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jZt38kveZDTpkrHTcXsHEY
// Component: 2-0saNBo-p5-YQ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_lhp_3_30_23.module.css"; // plasmic-import: jZt38kveZDTpkrHTcXsHEY/projectcss
import sty from "./PlasmicOffer2.module.css"; // plasmic-import: 2-0saNBo-p5-YQ/css

export type PlasmicOffer2__VariantMembers = {};
export type PlasmicOffer2__VariantsArgs = {};
type VariantPropType = keyof PlasmicOffer2__VariantsArgs;
export const PlasmicOffer2__VariantProps = new Array<VariantPropType>();

export type PlasmicOffer2__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
};
type ArgPropType = keyof PlasmicOffer2__ArgsType;
export const PlasmicOffer2__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5",
  "slot6",
  "slot7"
);

export type PlasmicOffer2__OverridesType = {
  root?: p.Flex<"div">;
  image?: p.Flex<"div">;
  text?: p.Flex<"div">;
  offerH1?: p.Flex<"div">;
  offerH12?: p.Flex<"div">;
  offerP?: p.Flex<"div">;
  aCta?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultOffer2Props {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicOffer2__RenderFunc(props: {
  variants: PlasmicOffer2__VariantsArgs;
  args: PlasmicOffer2__ArgsType;
  overrides: PlasmicOffer2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"image"}
        data-plasmic-override={overrides.image}
        className={classNames(projectcss.all, sty.image)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__dnaMn)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__aCqA9)}
                displayHeight={"423px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/lhp_3_30_23/images/offersvg.svg",
                  fullWidth: 76,
                  fullHeight: 150,
                  aspectRatio: 0.503546
                }}
              />
            ),

            value: args.children
          })}
        </div>
      </div>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, sty.text)}
      >
        <div
          data-plasmic-name={"offerH1"}
          data-plasmic-override={overrides.offerH1}
          className={classNames(projectcss.all, sty.offerH1)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "SPECIAL OFFER",
            value: args.slot3,
            className: classNames(sty.slotTargetSlot3)
          })}
        </div>
        <div
          data-plasmic-name={"offerH12"}
          data-plasmic-override={overrides.offerH12}
          className={classNames(projectcss.all, sty.offerH12)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "FREE VITAMIN AIR",
            value: args.slot4,
            className: classNames(sty.slotTargetSlot4)
          })}
        </div>
        <div
          data-plasmic-name={"offerP"}
          data-plasmic-override={overrides.offerP}
          className={classNames(projectcss.all, sty.offerP)}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "Money-Back Guarantee: Better Flavor & Harder Hits or Your Money Back.",
            value: args.slot5,
            className: classNames(sty.slotTargetSlot5)
          })}
        </div>
        <p.PlasmicLink
          data-plasmic-name={"aCta"}
          data-plasmic-override={overrides.aCta}
          className={classNames(projectcss.all, projectcss.a, sty.aCta)}
          component={Link}
          onClick={async event => {
            const $steps = {};
            $steps["setVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "s9d-xUW8gLwZ4E",
                      componentUuid: "2-0saNBo-p5-YQ"
                    },
                    () =>
                      (({ variable, value, startIndex, deleteCount }) => {
                        const { objRoot, variablePath } = variable;
                        undefined;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["setVariable"] === "object" &&
              typeof $steps["setVariable"].then === "function"
            ) {
              $steps["setVariable"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariable",
                  interactionUuid: "s9d-xUW8gLwZ4E",
                  componentUuid: "2-0saNBo-p5-YQ"
                },
                $steps["setVariable"]
              );
            }
          }}
          platform={"nextjs"}
        >
          {p.renderPlasmicSlot({
            defaultContents: "CLAIM FREE PODS 👉",
            value: args.slot7,
            className: classNames(sty.slotTargetSlot7)
          })}
        </p.PlasmicLink>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__fF1Pk)}>
            {true
              ? p.renderPlasmicSlot({
                  defaultContents: "CHOOSE FLAVOR",
                  value: args.slot6,
                  className: classNames(sty.slotTargetSlot6)
                })
              : null}
          </div>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__jbqTc)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__jVerv)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <React.Fragment>
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__e5Bqn)}
                        displayHeight={"60px" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"60px" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/lhp_3_30_23/images/labelsvg.svg",
                          fullWidth: 150,
                          fullHeight: 150,
                          aspectRatio: 1
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mkgy
                        )}
                      >
                        {"Strawberry"}
                      </div>
                    </React.Fragment>
                  ),
                  value: args.slot
                })}
              </div>
            ) : null}
            <div className={classNames(projectcss.all, sty.freeBox__kLvoW)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__qqgi7)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/lhp_3_30_23/images/labelsvg2.svg",
                        fullWidth: 150,
                        fullHeight: 150,
                        aspectRatio: 1
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sS1Zq
                      )}
                    >
                      {"Vanilla"}
                    </div>
                  </React.Fragment>
                ),
                value: args.slot2
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "image", "text", "offerH1", "offerH12", "offerP", "aCta"],
  image: ["image"],
  text: ["text", "offerH1", "offerH12", "offerP", "aCta"],
  offerH1: ["offerH1"],
  offerH12: ["offerH12"],
  offerP: ["offerP"],
  aCta: ["aCta"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  image: "div";
  text: "div";
  offerH1: "div";
  offerH12: "div";
  offerP: "div";
  aCta: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOffer2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOffer2__VariantsArgs;
    args?: PlasmicOffer2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOffer2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOffer2__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicOffer2__ArgProps,
          internalVariantPropNames: PlasmicOffer2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOffer2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOffer2";
  } else {
    func.displayName = `PlasmicOffer2.${nodeName}`;
  }
  return func;
}

export const PlasmicOffer2 = Object.assign(
  // Top-level PlasmicOffer2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    image: makeNodeComponent("image"),
    text: makeNodeComponent("text"),
    offerH1: makeNodeComponent("offerH1"),
    offerH12: makeNodeComponent("offerH12"),
    offerP: makeNodeComponent("offerP"),
    aCta: makeNodeComponent("aCta"),

    // Metadata about props expected for PlasmicOffer2
    internalVariantProps: PlasmicOffer2__VariantProps,
    internalArgProps: PlasmicOffer2__ArgProps
  }
);

export default PlasmicOffer2;
/* prettier-ignore-end */
