import {
  _ as w,
  R as P,
  M as k,
  i as S,
  u as C,
  r as f,
  o as r,
  c as a,
  b as t,
  a as m,
  w as h,
  t as e,
  F as v,
  e as y,
  d as i,
  j as _,
  p as I,
  g as R,
  k as F,
} from "./index-52a1275a.js";
import { u as M } from "./productStore-f49e9491.js";
import { _ as b } from "./fi-rs-angle-small-right-2-b3a89b6f.js";
import { _ as N, a as V } from "./fi-rs-angle-small-down-1e218824.js";
const L = new URL("./assets/fi-rs-shopping-cart-white-8a04eb48.svg",self.location).href,
  $ = new URL("./assets/fi-rs-heart-3d9d263c.svg",self.location).href,
  z = new URL("./assets/fi-rs-shuffle-1-3041c5b8.svg",self.location).href,
  E = new URL("./assets/fi-rs-arrow-small-right2-26d63048.svg",self.location).href,
  B = new URL("./assets/p5-0e1526ff.png",self.location).href,
  D = new URL("./assets/p6-03ff8fee.png",self.location).href,
  A = new URL("./assets/p7-19265fd6.png",self.location).href,
  J = new URL("./assets/p8-b92ed42f.png",self.location).href,
  T = new URL("./assets/fi-rs-arrow-small-right-2-white-9754aecb.svg",self.location).href;
const j = {
    components: { RouterLink: P, MenuItem: k },
    setup() {
      const s = S(),
        o = C(),
        p = s.params.productId,
        d = M();
      if (0 > p > d.proditems.length) o.push("/NotFound");
      else {
        const c = d.getProd(Number(p) - 1),
          l = d.getCat(c.category - 1).title;
        return { Product: c, Category: l };
      }
    },
    data() {
      return { count: 0 };
    },
    methods: {
      inc() {
        this.count++;
      },
      dec() {
        this.count > 0 && this.count--;
      },
    },
  },
  n = (s) => (I("data-v-1039f319"), (s = s()), R(), s),
  q = { class: "Productpage" },
  H = { style: { display: "flex", gap: ".4rem", "align-items": "center" } },
  K = n(() =>
    t(
      "img",
      { src: b, style: { "margin-top": "4px", height: "12px" } },
      null,
      -1
    )
  ),
  U = n(() =>
    t(
      "img",
      { src: b, style: { "margin-top": "4px", height: "12px" } },
      null,
      -1
    )
  ),
  W = { style: { color: "var(--tpgreen)", "font-weight": "500" } },
  G = { class: "product" },
  O = { class: "productimg" },
  Q = n(() =>
    t(
      "img",
      {
        style: {
          position: "absolute",
          top: "5%",
          right: "5%",
          width: "20px",
          height: "20px",
          opacity: "0.5",
        },
        src: F,
      },
      null,
      -1
    )
  ),
  X = ["src"],
  Y = { class: "productdet" },
  Z = {
    style: {
      "font-weight": "600",
      "font-size": "40px",
      width: "auto",
      height: "auto",
      margin: "0",
      "line-height": "50px",
    },
  },
  tt = { style: { display: "flex", gap: "0.5rem", "align-items": "center" } },
  st = { style: { display: "flex", gap: "0.1rem" } },
  et = { style: { color: "#FDC040", "font-size": "14px" } },
  ot = { style: { color: "#7E7E7E", "font-size": "14px" } },
  it = { style: { display: "flex", gap: "3rem", "align-items": "baseline" } },
  rt = {
    style: {
      margin: "0",
      "font-weight": "600",
      "font-size": "40px",
      color: "var(--tpgreen)",
      width: "min-content",
    },
  },
  at = {
    style: {
      margin: "0",
      "font-weight": "600",
      "font-size": "24px",
      color: "gray",
      opacity: ".6",
      "text-decoration": "line-through",
      width: "min-content",
    },
  },
  nt = { style: { display: "flex", gap: "1rem", "margin-bottom": "5rem" } },
  dt = { class: "addproductqtn" },
  ct = { style: { display: "flex", "flex-direction": "column" } },
  lt = _(
    '<div class="custombtn" data-v-1039f319><img style="width:14px;margin-left:1rem;position:relative;top:-3%;" src="' +
      L +
      '" data-v-1039f319><button data-v-1039f319>Add To Cart</button></div><div style="display:flex;place-items:center;border:2px solid rgb(146, 145, 145,0.4);padding:1rem;border-radius:5px;opacity:0.5;cursor:pointer;" data-v-1039f319><img style="width:16px;" src="' +
      $ +
      '" data-v-1039f319></div><div style="display:flex;place-items:center;border:2px solid rgb(146, 145, 145,0.2);padding:1rem;border-radius:5px;cursor:pointer;" data-v-1039f319><img style="width:16px;" src="' +
      z +
      '" data-v-1039f319></div>',
    3
  ),
  pt = _(
    '<div style="display:flex;flex-direction:column;position:absolute;bottom:0;" data-v-1039f319><span style="width:100%;" data-v-1039f319>Vendor:<span style="margin-left:10px;opacity:0.6;" data-v-1039f319>NestMart</span></span><span style="width:100%;" data-v-1039f319>SKU:<span style="margin-left:10px;opacity:0.6;" data-v-1039f319>FJS823JWF</span></span></div>',
    1
  ),
  ut = _(
    '<div class="scrollproduct" data-v-1039f319><button class="arrow" style="background-color:rgb(231, 231, 231);top:25%;right:0;" data-v-1039f319><img src="' +
      E +
      '" data-v-1039f319></button><div style="display:flex;gap:1rem;" data-v-1039f319><img class="miniprod" src="' +
      B +
      '" data-v-1039f319><img class="miniprod" src="' +
      D +
      '" data-v-1039f319><img class="miniprod" src="' +
      A +
      '" data-v-1039f319><img class="miniprod" src="' +
      J +
      '" data-v-1039f319></div><button class="arrow" style="background-color:var(--tpgreen);top:25%;left:0;" data-v-1039f319><img src="' +
      T +
      '" style="transform:rotate(180deg);" data-v-1039f319></button></div>',
    1
  ),
  mt = { class: "desc" },
  _t = { style: { display: "flex", gap: "3rem" } },
  gt = n(() => t("button", null, "Description", -1)),
  ft = n(() => t("button", null, "Additional info", -1)),
  ht = { style: { "font-weight": "700" } },
  vt = { style: { display: "flex", "flex-direction": "column", gap: ".6rem" } };
function yt(s, o, p, d, c, l) {
  const g = f("RouterLink"),
    x = f("MenuItem");
  return (
    r(),
    a("div", q, [
      t("div", H, [
        m(
          g,
          { class: "RouterLink", to: "/" },
          { default: h(() => [i("Home")]), _: 1 }
        ),
        K,
        m(
          g,
          { class: "RouterLink", to: `/categories/${s.Product.category}` },
          { default: h(() => [i(e(s.Category), 1)]), _: 1 },
          8,
          ["to"]
        ),
        U,
        t("p", W, e(s.Product.name), 1),
      ]),
      t("div", G, [
        t("div", O, [
          Q,
          t("img", { src: s.Product.image, alt: "img" }, null, 8, X),
        ]),
        t("div", Y, [
          m(x, {
            style: {
              "background-color": "rgba(59, 183, 126, 0.20)",
              height: "min-content",
              width: "max-content",
              "padding-right": "2rem",
              color: "var(--tpgreen)",
              "border-radius": "5px",
            },
            fww: "600",
            title: "In Stock",
          }),
          t("h1", Z, e(s.Product.name), 1),
          t("div", tt, [
            t("div", st, [
              (r(!0),
              a(
                v,
                null,
                y(s.Product.rate, (u) => (r(), a("div", et, "★"))),
                256
              )),
              (r(!0),
              a(
                v,
                null,
                y(5 - s.Product.rate, (u) => (r(), a("div", ot, "★"))),
                256
              )),
            ]),
            t("span", null, [
              i("("),
              t("p3", null, e(s.Product.rate.toFixed(1)), 1),
              i(")"),
            ]),
          ]),
          t("div", it, [
            t(
              "h1",
              rt,
              "$" +
                e(
                  s.Product.sellPrice -
                    (
                      s.Product.sellPrice *
                      (s.Product.discountPercentage / 100)
                    ).toFixed(2)
                ),
              1
            ),
            t("h1", at, "$" + e(s.Product.sellPrice), 1),
          ]),
          t("p", null, e(s.Product.description), 1),
          t("div", nt, [
            t("div", dt, [
              i(e(c.count) + " ", 1),
              t("div", ct, [
                t("img", { onClick: o[0] || (o[0] = (u) => l.inc()), src: N }),
                t("img", { onClick: o[1] || (o[1] = (u) => l.dec()), src: V }),
              ]),
            ]),
            lt,
          ]),
          pt,
        ]),
      ]),
      ut,
      t("div", mt, [
        t("div", _t, [
          gt,
          ft,
          t("button", null, [
            i("Reviews "),
            t(
              "span",
              ht,
              "(" +
                e(s.Product.rate + Math.floor(Math.random() * 10) + 1) +
                ")",
              1
            ),
          ]),
        ]),
        t("div", vt, e(s.Product.description), 1),
      ]),
    ])
  );
}
const kt = w(j, [
  ["render", yt],
  ["__scopeId", "data-v-1039f319"],
]);
export { kt as default };
