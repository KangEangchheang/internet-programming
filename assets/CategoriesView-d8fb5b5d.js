import {
  _ as d,
  R as p,
  i as l,
  u,
  r as g,
  o as m,
  c as h,
  b as t,
  t as n,
  a as y,
  w as f,
  d as C,
  p as v,
  g as x,
} from "./index-52a1275a.js";
import { u as R } from "./productStore-f49e9491.js";
import { _ as c } from "./fi-rs-angle-small-right-2-b3a89b6f.js";
const b = {
    components: { RouterLink: p },
    setup() {
      const e = l(),
        r = u(),
        s = e.params.categoryId,
        a = R();
      if (0 > s > a.catitems.length) r.push("/NotFound");
      else return { Category: a.getCat(Number(s) - 1) };
    },
  },
  o = (e) => (v("data-v-bee4d03e"), (e = e()), x(), e),
  k = { class: "Categorypage" },
  w = { class: "header" },
  S = o(() => t("div", { class: "headerban" }, null, -1)),
  I = { style: { "font-weight": "600", margin: "0" } },
  N = { style: { display: "flex", gap: ".5rem", "align-items": "center" } },
  V = o(() => t("img", { src: c, style: { "margin-top": "4px" } }, null, -1)),
  L = o(() => t("p", null, "Categories", -1)),
  $ = o(() => t("img", { src: c, style: { "margin-top": "4px" } }, null, -1));
function B(e, r, s, a, i, P) {
  const _ = g("RouterLink");
  return (
    m(),
    h("div", k, [
      t("div", w, [
        S,
        t("h1", I, n(e.Category.title), 1),
        t("div", N, [
          y(
            _,
            { class: "RouterLink", to: "/" },
            { default: f(() => [C("Home")]), _: 1 }
          ),
          V,
          L,
          $,
          t("p", null, n(e.Category.title), 1),
        ]),
      ]),
    ])
  );
}
const H = d(b, [
  ["render", B],
  ["__scopeId", "data-v-bee4d03e"],
]);
export { H as default };
