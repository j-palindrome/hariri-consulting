import { jsx } from "react/jsx-runtime";
import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "@sanity/visual-editing/remix";
import { c as client } from "./server-build-C0dB6lC6.js";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "react";
import "@sanity/client/stega";
import "@portabletext/react";
import "groq";
import "pts";
import "remix-utils/client-only";
import "animejs";
import "sanity-image";
function LiveVisualEditing() {
  useLiveMode({ client });
  return /* @__PURE__ */ jsx(VisualEditing, {});
}
export {
  LiveVisualEditing as default
};
