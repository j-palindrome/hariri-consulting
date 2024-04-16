import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { RemixServer, Outlet, Meta, Links, Link, ScrollRestoration, Scripts, useLoaderData, useSearchParams, useParams } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { lazy, useEffect, useRef, useState, useMemo } from "react";
import { createClient } from "@sanity/client/stega";
import * as queryStore from "@sanity/react-loader";
import { useQuery, loadQuery } from "@sanity/react-loader";
import { PortableText } from "@portabletext/react";
import groq from "groq";
import { Pt } from "pts";
import { ClientOnly } from "remix-utils/client-only";
import anime from "animejs";
import { SanityImage } from "sanity-image";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      }
    }
  );
  if (isbot(request.headers.get("user-agent") || "")) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const styles = "/assets/index-3L2NJQlx.css";
var define_import_meta_env_default = { VITE_SANITY_STUDIO_PROJECT_ID: "nctksjox", VITE_SANITY_STUDIO_DATASET: "production", VITE_SANITY_STUDIO_URL: "undefined", VITE_SANITY_STUDIO_STEGA_ENABLED: "false", BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
console.log("INFO:", define_import_meta_env_default);
const client = createClient({
  projectId: "nctksjox",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-04-13",
  stega: {
    enabled: true,
    studioUrl: "undefined"
  }
});
const links = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
lazy(() => import("./LiveVisualEditing-BC3bgTxb.js"));
const loader$3 = () => {
  queryStore.setServerClient(client);
  return {};
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "text-[18px]", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs(
      "body",
      {
        className: `min-h-screen bg-gradient-to-br from-black to-gray-900 font-sans text-white text-base`,
        children: [
          /* @__PURE__ */ jsxs("nav", { className: "flex space-x-6 px-2 py-2 w-full h-[100px]", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", children: "Jay Reinier" }),
            /* @__PURE__ */ jsx("div", { className: "grow" }),
            /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: "portfolio" }),
            /* @__PURE__ */ jsx(Link, { to: "/bio", children: "bio" })
          ] }),
          children,
          /* @__PURE__ */ jsx(ScrollRestoration, {}),
          /* @__PURE__ */ jsx(Scripts, {})
        ]
      }
    )
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
function ViewButton({
  href,
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      className: `block w-full ${className ?? ""}`,
      children: /* @__PURE__ */ jsx("button", { className: "hover:bg-accent-light hover:border-accent-dark my-2 flex w-full justify-center rounded-lg bg-slate-800/50 py-1 font-bold transition-colors duration-300 hover:bg-slate-800/75", children })
    }
  );
}
const WORK_QUERY = groq`*[_type == "work" && slug.current == $slug][0]{..., 'imageBannerURL': imageBanner.asset->url, 'filePreviews': documentPreviews[]{..., 'fileSource': uploadSource.asset->}}`;
const loader$2 = async ({ params }) => {
  const initial = await loadQuery(WORK_QUERY, params);
  return { initial, query: WORK_QUERY, params };
};
function Works() {
  var _a;
  const { initial, query, params } = useLoaderData();
  const {
    data: work,
    loading,
    error
  } = useQuery(query, params, {
    // @ts-ignore
    initial
  });
  if (!work)
    return /* @__PURE__ */ jsx(Fragment, {});
  const to = `/portfolio/${params.role}`;
  return /* @__PURE__ */ jsxs("div", { className: "fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/50 p-8 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        to,
        preventScrollReset: true,
        className: "absolute left-0 top-0 -z-10 h-full w-full"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full h-fit max-h-full max-w-4xl cursor-default rounded-lg border border-gray-400 bg-black/20 backdrop-blur-lg overflow-y-auto", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-cover bg-center px-2 pb-2",
          style: {
            backgroundImage: `url(${work.imageBannerURL})`
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "h-[200px] w-full flex flex-col justify-center items-center space-y-2", children: [
              /* @__PURE__ */ jsx("div", { className: "top-4 z-10 text-center text-2xl font-bold drop-shadow-text bg-black/50 p-2 rounded-lg", children: work.title }),
              /* @__PURE__ */ jsx("div", { className: "text-center bg-black/50 p-2 rounded-lg", children: work.subtitle })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "rounded py-1 bg-black/50 backdrop-blur p-2", children: /* @__PURE__ */ jsx(PortableText, { value: work.description }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "z-30", children: (_a = work.filePreviews) == null ? void 0 : _a.map((x) => /* @__PURE__ */ jsx(DocumentPreview, { preview: x })) })
    ] })
  ] });
}
function DocumentPreview({
  preview
}) {
  let href;
  switch (preview.assetType) {
    case "file":
      href = preview.fileSource.url;
      break;
    case "link":
      href = preview.linkSource;
      break;
    default:
      throw new Error("unhandled type");
  }
  return preview.embed ? /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx("iframe", { className: "h-full w-full", src: href }) }) : /* @__PURE__ */ jsx(ViewButton, { href, children: preview.title ?? "View more" });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Works,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
function Section({
  children,
  title,
  className,
  innerClassName,
  fullWidth = false,
  columns = false
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `w-full my-2 flex-none space-y-2 px-8 leading-6 ${!fullWidth ? "mx-auto max-w-4xl" : ""} ${className ?? ""}`,
      children: [
        title && /* @__PURE__ */ jsx("h2", { className: "text-center text-3xl font-bold", children: title }),
        /* @__PURE__ */ jsx("div", { className: `${columns ? "flex" : ""} ${innerClassName}`, children })
      ]
    }
  );
}
const generateId = (work) => work.slug.current.replace("-", "_");
const useEventListener = (listener, func, dependencies = []) => {
  useEffect(() => {
    window.addEventListener(listener, func);
    return () => window.removeEventListener(listener, func);
  }, dependencies);
};
const BASE_URL = `https://cdn.sanity.io/images/${"nctksjox"}/${"production"}/`;
function WorksDisplay(props) {
  return /* @__PURE__ */ jsx(ClientOnly, { fallback: /* @__PURE__ */ jsx(Fragment, {}), children: () => /* @__PURE__ */ jsx(WorksDisplayClient, { ...props }) });
}
const itemWidth = 300;
const margin = 24;
function WorksDisplayClient({ works }) {
  useSearchParams();
  useParams();
  const frame = useRef(null);
  const [width, setWidth] = useState(0);
  const isTrapezoidal = works.length >= width * 2 || works.length > width && works.length % width === 0;
  const resize = () => {
    const newWidth = Math.min(
      works.length,
      Math.max(
        1,
        Math.floor(
          Math.min(window.innerWidth - itemWidth, 1e3) / (itemWidth + margin)
        )
      )
    );
    if (width !== newWidth) {
      setWidth(newWidth);
    }
  };
  useEventListener("resize", resize, [works.length, width]);
  useEffect(resize, [works]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-full pb-12",
      style: { marginLeft: isTrapezoidal ? 0 : itemWidth / 4 },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `mx-auto grid w-fit max-w-[1000px]`,
          style: {
            gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`
          },
          ref: frame,
          children: works.map((work, i) => {
            let rowNumber = Math.floor(i / width);
            return /* @__PURE__ */ jsx(Bubble, { ...{ rowNumber, work, itemWidth } });
          })
        }
      )
    }
  );
}
function Bubble({
  work,
  rowNumber
}) {
  const left = rowNumber % 2 ? itemWidth / 4 : -itemWidth / 4;
  const { title, subtitle, slug } = work;
  const frame = useRef(null);
  useEventListener(
    "mousemove",
    (ev) => {
      const position = frame.current.getBoundingClientRect();
      const toMouse = new Pt(
        position.left + position.width / 2,
        position.top + position.height / 2
      ).subtract(ev.clientX, ev.clientY);
      toMouse.scale(16 / toMouse.magnitude());
      frame.current.style.setProperty("left", `${left + toMouse.x}px`);
      frame.current.style.setProperty("top", `${toMouse.y}px`);
    },
    [left]
  );
  useEffect(() => {
    anime({
      targets: frame.current,
      scale: [0, 1],
      duration: 100
    });
  }, [work]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: frame,
      "data-spring": generateId(work),
      className: `relative flex aspect-square flex-none overflow-hidden rounded-full hover:z-10 circle`,
      style: {
        left,
        width: itemWidth,
        margin: `${margin / 2}px ${margin}px`
      },
      children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            className: "relative z-10 flex h-full w-full flex-col items-center justify-center space-y-2 px-2",
            to: slug.current,
            preventScrollReset: true,
            children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-black/50 px-1 text-center font-menu text-xl shadow-lg", children: title }),
              /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-black/50 px-1 text-center font-menu text-sm text-gray-200 shadow-lg", children: subtitle })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-full h-full absolute top-0 left-0", children: work.videoBannerURL ? /* @__PURE__ */ jsx(
          "video",
          {
            src: work.videoBannerURL,
            muted: true,
            autoPlay: true,
            loop: true,
            className: "object-cover w-full h-full"
          }
        ) : /* @__PURE__ */ jsx(
          SanityImage,
          {
            id: work.imageBanner.asset._ref,
            baseUrl: BASE_URL,
            className: "w-full h-full object-cover"
          }
        ) })
      ]
    },
    generateId(work)
  );
}
const WORKS_QUERY = groq`*[_type == 'work' && type->slug.current == $role]{..., 'videoBannerURL': videoBanner.asset->url, 'imageBannerURL': imageBanner.asset->url}`;
const ROLE_QUERY = groq`*[_type == 'category' && slug.current == $role][0]`;
const loader$1 = async ({ params }) => {
  const initial = {
    works: await loadQuery(WORKS_QUERY, params),
    role: await loadQuery(ROLE_QUERY, params)
  };
  return { initial, query: WORKS_QUERY, params };
};
function Role() {
  useSearchParams();
  const { initial, query, params } = useLoaderData();
  const { data, loading, error } = useQuery(query, params, {
    // @ts-ignore
    initial: initial.works
  });
  const {
    data: roleData,
    loading: roleLoading,
    error: roleError
  } = useQuery(query, params, {
    // @ts-ignore
    initial: initial.role
  });
  if (!data || !roleData)
    return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", { className: "*:font-sans text-center", children: /* @__PURE__ */ jsx(PortableText, { value: roleData.description }) }) }),
    /* @__PURE__ */ jsx(WorksDisplay, { works: data }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Role,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const useAnimation = (initialize, init, draw, updates = []) => {
  const props = useRef({});
  const [started, setStarted] = useState(false);
  const start = async () => {
    const newProps = await init();
    props.current = newProps;
    setStarted(true);
  };
  useEffect(() => {
    start();
  }, [initialize]);
  const updateProps = (newProps) => {
    if (newProps) {
      for (let key of Object.keys(newProps)) {
        props.current[key] = newProps[key];
      }
    }
  };
  for (let { setup, deps = [], cleanup } of updates) {
    useEffect(() => {
      if (!started)
        return;
      const newProps = setup(props.current);
      updateProps(newProps);
      return () => {
        if (cleanup)
          cleanup(props.current);
      };
    }, [started, ...deps]);
  }
  useEffect(() => {
    if (!started)
      return;
    let time = 0;
    let frameCounter;
    const animationFrame = (timeDelta) => {
      time += timeDelta / 1e3;
      const newProps = draw({ time, timeDelta }, props.current);
      updateProps(newProps);
      frameCounter = requestAnimationFrame(animationFrame);
    };
    frameCounter = requestAnimationFrame(animationFrame);
    return () => {
      frameCounter && cancelAnimationFrame(frameCounter);
    };
  }, [started]);
  return { props };
};
function Blob({ to, order }) {
  const position = useMemo(
    () => new Pt(0, -0.25).rotate2D(order / 3 * Math.PI * 2),
    []
  );
  const { role } = useParams();
  useAnimation(
    true,
    () => ({
      currentPosition: position
    }),
    () => {
    }
  );
  useEventListener("mousemove", (ev) => {
  });
  return /* @__PURE__ */ jsx(
    Link,
    {
      to,
      preventScrollReset: true,
      className: `h-[50%] min-h-[100px] aspect-square !transition-[transform,left,top,border-color] !duration-500 circle -translate-x-1/2 -translate-y-1/2 absolute hover:scale-125 hover:brightness-125 hover:z-10 ${role === to ? "scale-125 brightness-125 border-white" : "border-transparent"} border !bg-slate-700/50`,
      style: {
        left: !role ? `calc(50% + ${position.x * 100}vh)` : `${order * 33 + 16}%`,
        top: !role ? `calc(50% + ${position.y * 100}vh)` : `50%`
      },
      children: to
    }
  );
}
function Portfolio() {
  const { role, slug } = useParams();
  console.log(role);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/portfolio",
        className: `${role ? "h-[150px]" : "h-[calc(100vh-100px)]"} transition-[height] duration-500 flex items-center justify-around -mt-2 relative`,
        children: [
          /* @__PURE__ */ jsx(Blob, { to: "artist", order: 0 }),
          /* @__PURE__ */ jsx(Blob, { to: "researcher", order: 1 }),
          /* @__PURE__ */ jsx(Blob, { to: "designer", order: 2 })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Portfolio
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [{ title: "New Remix App" }];
};
function Index() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const BIO_QUERY = groq`*[_type == 'bio'][0] {
  ..., 
  'bioURL': cv.asset->url
}`;
const loader = async () => {
  return await loadQuery(BIO_QUERY);
};
function Bio() {
  const { data: bio } = useLoaderData();
  if (!bio)
    return /* @__PURE__ */ jsx(Fragment, {});
  console.log(bio);
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx("div", { className: "w-[50%] max-w-[300px] float-left mr-4 mb-4", children: /* @__PURE__ */ jsx(
      SanityImage,
      {
        id: bio.headshot.asset._ref,
        baseUrl: BASE_URL
      }
    ) }),
    /* @__PURE__ */ jsx(PortableText, { value: bio.bio }),
    bio.cv && /* @__PURE__ */ jsx(ViewButton, { href: bio.bioURL, children: "CV" })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bio,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dpq7ZBp5.js", "imports": ["/assets/jsx-runtime-7ou52q_D.js", "/assets/components-DEPq4dSd.js", "/assets/client-SjMj0teH.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-B0g1HJ5y.js", "imports": ["/assets/jsx-runtime-7ou52q_D.js", "/assets/components-DEPq4dSd.js", "/assets/client-SjMj0teH.js"], "css": [] }, "routes/portfolio.$role.$slug": { "id": "routes/portfolio.$role.$slug", "parentId": "routes/portfolio.$role", "path": ":slug", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CsMRCICD.js", "imports": ["/assets/jsx-runtime-7ou52q_D.js", "/assets/components-DEPq4dSd.js", "/assets/index-DILfQnKz.js", "/assets/index.browser-rVRsldjq.js", "/assets/ViewButton-C0LHhZvE.js"], "css": [] }, "routes/portfolio.$role": { "id": "routes/portfolio.$role", "parentId": "routes/portfolio", "path": ":role", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BSOFM9wD.js", "imports": ["/assets/jsx-runtime-7ou52q_D.js", "/assets/components-DEPq4dSd.js", "/assets/index.browser-rVRsldjq.js", "/assets/constants-CTMivA6k.js", "/assets/util-DbwWaFTe.js", "/assets/index-DILfQnKz.js"], "css": [] }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DFVso0hQ.js", "imports": ["/assets/jsx-runtime-7ou52q_D.js", "/assets/util-DbwWaFTe.js", "/assets/components-DEPq4dSd.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-BKSG3qz7.js", "imports": ["/assets/jsx-runtime-7ou52q_D.js"], "css": [] }, "routes/bio": { "id": "routes/bio", "parentId": "root", "path": "bio", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DhzNVml2.js", "imports": ["/assets/jsx-runtime-7ou52q_D.js", "/assets/index-DILfQnKz.js", "/assets/constants-CTMivA6k.js", "/assets/ViewButton-C0LHhZvE.js", "/assets/components-DEPq4dSd.js"], "css": [] } }, "url": "/assets/manifest-e1f5dcb4.js", "version": "e1f5dcb4" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/portfolio.$role.$slug": {
    id: "routes/portfolio.$role.$slug",
    parentId: "routes/portfolio.$role",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/portfolio.$role": {
    id: "routes/portfolio.$role",
    parentId: "routes/portfolio",
    path: ":role",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route4
  },
  "routes/bio": {
    id: "routes/bio",
    parentId: "root",
    path: "bio",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  assetsBuildDirectory as a,
  basename as b,
  client as c,
  entry as e,
  future as f,
  isSpaMode as i,
  mode as m,
  publicPath as p,
  routes as r,
  serverManifest as s
};
