import {
  _ as m,
  u as b,
  o,
  c as s,
  b as t,
  t as l,
  n as p,
  r as u,
  a as h,
  R as B,
  F as g,
  e as y,
  f as F,
  d as N,
  p as E,
  g as I,
  m as v,
  h as C,
} from "./index-52a1275a.js";
import { _ as z, a as V } from "./fi-rs-angle-small-down-1e218824.js";
import { u as f } from "./productStore-f49e9491.js";
const D = {
    name: "Category",
    props: ["title", "color", "imagePath", "quantity", "id"],
    setup(i) {
      const c = b();
      function e() {
        c.push(`/categories/${i.id}`);
      }
      return { redirect: e };
    },
  },
  M = ["src"],
  H = { class: "Title" },
  L = ["textContent"],
  q = ["textContent"];
function R(i, c, e, d, a, _) {
  return (
    o(),
    s(
      "div",
      {
        class: "Category",
        style: p({ backgroundColor: e.color + "0.2)" }),
        onClick: c[0] || (c[0] = (...r) => d.redirect && d.redirect(...r)),
      },
      [
        t("img", { class: "Image", src: e.imagePath }, null, 8, M),
        t("div", H, [
          t("p1", { textContent: l(e.title) }, null, 8, L),
          t("p2", { textContent: l(e.quantity + " items") }, null, 8, q),
        ]),
      ],
      4
    )
  );
}
const T = m(D, [
  ["render", R],
  ["__scopeId", "data-v-8ef4a5b9"],
]);
const A = { props: ["color", "title"] };
function Q(i, c, e, d, a, _) {
  return (
    o(),
    s(
      "button",
      { style: p({ backgroundColor: e.color }), class: "CustomButton" },
      l(e.title),
      5
    )
  );
}
const P = m(A, [
  ["render", Q],
  ["__scopeId", "data-v-a6830d00"],
]);
const j = {
    name: "Promotion",
    props: ["color", "btnColor", "text", "imagePath"],
    components: { CustomButton: P },
  },
  Y = { class: "titles" },
  G = ["textContent"],
  J = ["src"];
function K(i, c, e, d, a, _) {
  const r = u("CustomButton");
  return (
    o(),
    s(
      "div",
      { class: "Promotion", style: p({ backgroundColor: e.color }) },
      [
        t("div", Y, [
          t("h1", { textContent: l(e.text) }, null, 8, G),
          h(
            r,
            { class: "CustomButton", color: e.btnColor, title: "Shop now →" },
            null,
            8,
            ["color"]
          ),
        ]),
        t("img", { src: e.imagePath, alt: "img", class: "Images" }, null, 8, J),
      ],
      4
    )
  );
}
const O = m(j, [["render", K]]);
const U = { props: { title: String } },
  W = ["textContent"],
  X = t(
    "div",
    { class: "menu" },
    [
      t("span", { style: { "font-weight": "bold" } }, "All"),
      t("span", null, "Milks & Dairies"),
      t("span", null, "Coffee & Teas"),
      t("span", null, "Pet Foods"),
      t("span", null, "Meats"),
      t("span", null, "Vegetables"),
      t("span", null, "Fruits"),
    ],
    -1
  );
function Z(i, c, e, d, a, _) {
  return (
    o(), s("nav", null, [t("h2", { textContent: l(e.title) }, null, 8, W), X])
  );
}
const tt = m(U, [["render", Z]]);
const et = {
    props: {
      id: Number,
      tag: String,
      image: String,
      category: Number,
      name: String,
      rate: Number,
      description: String,
      sellPrice: Number,
      discountPercentage: Number,
      discountPrice: Number,
    },
    setup(i) {
      const c = b();
      function e() {
        c.push(`/products/${i.id}`);
      }
      return { redirect: e };
    },
    methods: {
      handleButtonClick() {
        this.buttonClicked = !this.buttonClicked;
      },
    },
    data() {
      return { color: ["#3BB77E", "#FD6E6E", "#FDC040"], buttonClicked: !1 };
    },
    components: { RouterLink: B },
  },
  k = (i) => (E("data-v-cbd52d11"), (i = i()), I(), i),
  ot = { class: "card" },
  nt = { style: { margin: "1.5rem 0", position: "relative" } },
  st = { key: 3, class: "tag", style: { backgroundColor: "#3BB77E" } },
  it = ["src"],
  ct = {
    style: {
      padding: "1rem",
      display: "flex",
      "flex-direction": "column",
      "font-size": "12px",
    },
  },
  lt = k(() =>
    t(
      "p1",
      { style: { "font-weight": "bold", opacity: "0.5" } },
      "Hodo Foods",
      -1
    )
  ),
  rt = { style: { display: "flex", gap: "0.5rem", "align-items": "center" } },
  at = { style: { display: "flex", gap: "0.1rem" } },
  dt = { style: { color: "#FDC040", "font-size": "14px" } },
  _t = { style: { color: "#7E7E7E", "font-size": "14px" } },
  ut = {
    style: {
      display: "flex",
      "justify-content": "space-between",
      "flex-wrap": "wrap",
      position: "relative",
    },
  },
  mt = {
    key: 0,
    style: { display: "flex", gap: "0.2rem", "align-items": "end" },
  },
  gt = { style: { color: "#3BB77E" } },
  pt = { key: 1 },
  ht = { style: { position: "absolute", right: "0" } },
  yt = {
    key: 0,
    style: {
      display: "flex",
      "border-radius": "5px",
      "align-items": "center",
      gap: ".5rem",
      "font-weight": "500",
      color: "var(--tpgreen)",
    },
  },
  ft = k(() =>
    t(
      "div",
      { style: { display: "flex", "flex-direction": "column" } },
      [
        t("img", { style: { width: "14px" }, src: z }),
        t("img", { style: { width: "14px" }, src: V }),
      ],
      -1
    )
  ),
  vt = { key: 1 };
function Ct(i, c, e, d, a, _) {
  return (
    o(),
    s("div", ot, [
      t("div", nt, [
        e.tag == "Hot"
          ? (o(),
            s(
              "div",
              {
                key: 0,
                class: "tag",
                style: p({ backgroundColor: a.color[1] }),
              },
              l(e.tag),
              5
            ))
          : e.tag == "Sale"
          ? (o(),
            s(
              "div",
              {
                key: 1,
                class: "tag",
                style: p({ backgroundColor: a.color[2] }),
              },
              l(e.tag),
              5
            ))
          : e.tag.length == 0
          ? (o(),
            s(
              "div",
              {
                key: 2,
                class: "tag",
                style: p({ backgroundColor: a.color[4] }),
              },
              l(e.tag),
              5
            ))
          : (o(), s("div", st, l(e.tag), 1)),
      ]),
      t("img", { src: e.image }, null, 8, it),
      t("div", ct, [
        lt,
        t(
          "div",
          {
            class: "prodtitle",
            style: { "font-weight": "bold", "font-size": "14px" },
            onClick: c[0] || (c[0] = (...r) => d.redirect && d.redirect(...r)),
          },
          l(e.name),
          1
        ),
        t("div", rt, [
          t("div", at, [
            (o(!0),
            s(
              g,
              null,
              y(e.rate, (r) => (o(), s("div", dt, "★"))),
              256
            )),
            (o(!0),
            s(
              g,
              null,
              y(5 - e.rate, (r) => (o(), s("div", _t, "★"))),
              256
            )),
          ]),
          t("p3", null, l(e.rate.toFixed(1)), 1),
        ]),
        t("p3", null, l(e.description), 1),
        t("div", ut, [
          e.discountPercentage > 0
            ? (o(),
              s("div", mt, [
                t(
                  "p4",
                  gt,
                  "$" +
                    l(
                      (
                        e.sellPrice -
                        e.sellPrice * (e.discountPercentage / 100)
                      ).toFixed(2)
                    ),
                  1
                ),
                t("p5", null, "$" + l((e.sellPrice * 1).toFixed(2)), 1),
              ]))
            : (o(), s("p4", pt, "$" + l((e.sellPrice * 1).toFixed(2)), 1)),
          t("div", ht, [
            t(
              "button",
              {
                class: F({
                  clicked: a.buttonClicked,
                  notClicked: !a.buttonClicked,
                }),
                style: { padding: "0.1rem 0.9rem", "border-radius": "4px" },
                onClick:
                  c[1] ||
                  (c[1] = (...r) =>
                    _.handleButtonClick && _.handleButtonClick(...r)),
              },
              [
                a.buttonClicked
                  ? (o(), s("div", yt, [N(l(1) + " "), ft]))
                  : (o(), s("div", vt, "Add +")),
              ],
              2
            ),
          ]),
        ]),
      ]),
    ])
  );
}
const xt = m(et, [
    ["render", Ct],
    ["__scopeId", "data-v-cbd52d11"],
  ]),
  bt = new URL("./assets/fi-rs-paper-plane-1-fc863d81.svg",self.location).href;
const Pt = { name: "Showcase", components: { CustomButton: P } },
  kt = { class: "showcase" },
  $t = t("div", { class: "backgroundimagbanner" }, null, -1),
  wt = t("div", { class: "backgroundimagbannercolor" }, null, -1),
  St = { class: "showcasetitle" },
  Bt = t("h1", null, " Don't miss amazing grocery deals ", -1),
  Ft = t("h2", null, "Sign up for daily newsletter", -1),
  Nt = { style: { display: "flex" } },
  Et = { class: "subsinput" },
  It = t("img", { style: { width: "24px" }, src: bt }, null, -1),
  zt = t(
    "input",
    { type: "text", placeholder: "Your email address" },
    null,
    -1
  ),
  Vt = t("div", { class: "bannerpic" }, null, -1);
function Dt(i, c, e, d, a, _) {
  const r = u("CustomButton");
  return (
    o(),
    s("div", kt, [
      $t,
      wt,
      t("div", St, [
        Bt,
        Ft,
        t("div", Nt, [
          t("div", Et, [
            It,
            zt,
            h(r, {
              color: "var(--tpgreen)",
              title: "Subscribe",
              style: {
                "border-radius": "100px",
                position: "inherit",
                "font-size": "16px",
                padding: "0.5rem 2rem",
              },
            }),
          ]),
        ]),
      ]),
      Vt,
    ])
  );
}
const Mt = m(Pt, [["render", Dt]]);
const Ht = {
    name: "HomeView",
    setup() {
      return { myProductStore: f() };
    },
    computed: {
      ...v(f, ["promoitem"]),
      ...v(f, ["catitems"]),
      ...v(f, ["proditems"]),
    },
    methods: {
      getCountQty(i) {
        return this.proditems.reduce((c, e) => (e.category === i && c++, c), 0);
      },
    },
    data() {
      return {};
    },
    components: {
      Category: T,
      Promotion: O,
      Menu: tt,
      Product: xt,
      Showcase: Mt,
    },
  },
  Lt = { class: "CategoryList" },
  qt = { class: "PromotionList" },
  Rt = { class: "ProductList" };
function Tt(i, c, e, d, a, _) {
  const r = u("Showcase"),
    x = u("Menu"),
    $ = u("Category"),
    w = u("Promotion"),
    S = u("Product");
  return (
    o(),
    s(
      g,
      null,
      [
        h(r),
        h(x, { title: "Featured Categories" }),
        t("div", Lt, [
          (o(!0),
          s(
            g,
            null,
            y(
              i.catitems,
              (n) => (
                o(),
                C(
                  $,
                  {
                    key: n.id,
                    title: n.title,
                    color: n.color,
                    quantity: _.getCountQty(n.id),
                    imagePath: n.imagePath,
                    id: n.id,
                  },
                  null,
                  8,
                  ["title", "color", "quantity", "imagePath", "id"]
                )
              )
            ),
            128
          )),
        ]),
        t("div", qt, [
          (o(!0),
          s(
            g,
            null,
            y(
              i.promoitem,
              (n) => (
                o(),
                C(
                  w,
                  {
                    key: n.id,
                    btnColor: n.buttonColor,
                    color: n.color,
                    text: n.text,
                    imagePath: n.imagePath,
                    id: n.id,
                  },
                  null,
                  8,
                  ["btnColor", "color", "text", "imagePath", "id"]
                )
              )
            ),
            128
          )),
        ]),
        h(x, { title: "Popular Products" }),
        t("div", Rt, [
          (o(!0),
          s(
            g,
            null,
            y(
              i.proditems,
              (n) => (
                o(),
                C(
                  S,
                  {
                    image: n.image,
                    name: n.name,
                    rate: n.rate,
                    discountPercentage: n.discountPercentage,
                    tag: n.tag,
                    description: n.description,
                    sellPrice: Number(n.sellPrice),
                    id: n.id,
                  },
                  null,
                  8,
                  [
                    "image",
                    "name",
                    "rate",
                    "discountPercentage",
                    "tag",
                    "description",
                    "sellPrice",
                    "id",
                  ]
                )
              )
            ),
            256
          )),
        ]),
      ],
      64
    )
  );
}
const Yt = m(Ht, [
  ["render", Tt],
  ["__scopeId", "data-v-74a82b28"],
]);
export { Yt as default };
