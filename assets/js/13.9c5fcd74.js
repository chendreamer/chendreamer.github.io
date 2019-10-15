(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{200:function(e,l,v){"use strict";v.r(l);var _=v(0),r=Object(_.a)({},function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"flex-grid"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-grid","aria-hidden":"true"}},[e._v("#")]),e._v(" flex&grid")]),e._v(" "),v("h2",{attrs:{id:"flex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex","aria-hidden":"true"}},[e._v("#")]),e._v(" flex")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("display: grid | inline-grid;")])]),e._v(" "),v("ol",[v("li",[e._v("没有为父元素设置宽度，所以父元素的宽度为100%，而高度则是由子元素撑开，既高度自适应。")]),e._v(" "),v("li",[e._v("未给父元素设置宽高，但是父元素的宽高会跟根据子元素而自适应。")])])]),e._v(" "),v("li",[v("p",[e._v("容器的属性")]),e._v(" "),v("ul",[v("li",[e._v("flex-direction")]),e._v(" "),v("li",[e._v("flex-wrap")]),e._v(" "),v("li",[e._v("flex-flow")]),e._v(" "),v("li",[e._v("justify-content")]),e._v(" "),v("li",[e._v("align-items")]),e._v(" "),v("li",[e._v("align-content")])])]),e._v(" "),v("li",[v("p",[e._v("flex-direction属性决定主轴的方向（即项目的排列方向）"),v("br"),e._v(" "),v("code",[e._v("flex-direction: row | row-reverse | column | column-reverse;")])]),e._v(" "),v("ul",[v("li",[e._v("row（默认值）：主轴为水平方向，起点在左端。")]),e._v(" "),v("li",[e._v("row-reverse：主轴为水平方向，起点在右端。")]),e._v(" "),v("li",[e._v("column：主轴为垂直方向，起点在上沿。")]),e._v(" "),v("li",[e._v("column-reverse：主轴为垂直方向，起点在下沿。")])])]),e._v(" "),v("li",[v("p",[e._v("flex-wrap属性定义，如果一条轴线排不下，如何换行"),v("br"),e._v(" "),v("code",[e._v("flex-wrap: nowrap | wrap | wrap-reverse;")])]),e._v(" "),v("ul",[v("li",[e._v("nowrap（默认）：不换行。")]),e._v(" "),v("li",[e._v("wrap：换行，第一行在上方。")]),e._v(" "),v("li",[e._v("wrap-reverse：换行，第一行在下方。")])])]),e._v(" "),v("li",[v("p",[e._v("flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap"),v("br"),e._v(" "),v("code",[e._v("flex-flow: <flex-direction> || <flex-wrap>;")])])]),e._v(" "),v("li",[v("p",[e._v("justify-content属性定义了项目在主轴上的对齐方式"),v("br"),e._v(" "),v("code",[e._v("justify-content: flex-start | flex-end | center | space-between | space-around;")])]),e._v(" "),v("ul",[v("li",[e._v("flex-start（默认值）：左对齐")]),e._v(" "),v("li",[e._v("flex-end：右对齐")]),e._v(" "),v("li",[e._v("center： 居中")]),e._v(" "),v("li",[e._v("space-between：两端对齐，项目之间的间隔都相等。")]),e._v(" "),v("li",[e._v("space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])])]),e._v(" "),v("li",[v("p",[e._v("align-items属性定义项目在交叉轴上如何对齐"),v("br"),e._v(" "),v("code",[e._v("align-items: flex-start | flex-end | center | baseline | stretch;")])]),e._v(" "),v("ul",[v("li",[e._v("flex-start：交叉轴的起点对齐。")]),e._v(" "),v("li",[e._v("flex-end：交叉轴的终点对齐。")]),e._v(" "),v("li",[e._v("center：交叉轴的中点对齐。")]),e._v(" "),v("li",[e._v("baseline: 项目的第一行文字的基线对齐。")]),e._v(" "),v("li",[e._v("stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。")])])]),e._v(" "),v("li",[v("p",[e._v("align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用"),v("br"),e._v(" "),v("code",[e._v("align-content: flex-start | flex-end | center | space-between | space-around | stretch;")])]),e._v(" "),v("ul",[v("li",[e._v("flex-start：与交叉轴的起点对齐。")]),e._v(" "),v("li",[e._v("flex-end：与交叉轴的终点对齐。")]),e._v(" "),v("li",[e._v("center：与交叉轴的中点对齐。")]),e._v(" "),v("li",[e._v("space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),e._v(" "),v("li",[e._v("space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),e._v(" "),v("li",[e._v("stretch（默认值）：轴线占满整个交叉轴。")])])]),e._v(" "),v("li",[v("p",[e._v("项目的属性")]),e._v(" "),v("ul",[v("li",[e._v("order")]),e._v(" "),v("li",[e._v("flex-grow")]),e._v(" "),v("li",[e._v("flex-shrink")]),e._v(" "),v("li",[e._v("flex-basis")]),e._v(" "),v("li",[e._v("flex")]),e._v(" "),v("li",[e._v("align-self")])])]),e._v(" "),v("li",[v("p",[e._v("order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。"),v("br"),e._v(" "),v("code",[e._v("order: <integer>;")])])]),e._v(" "),v("li",[v("p",[e._v("flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。"),v("br"),e._v(" "),v("code",[e._v("flex-grow: <number>; /* default 0 */")]),v("br"),e._v("\n如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。")])]),e._v(" "),v("li",[v("p",[e._v("flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。"),v("br"),e._v(" "),v("code",[e._v("flex-shrink: <number>; /* default 1 */")]),v("br"),e._v("\n如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。\n负值对该属性无效。")])]),e._v(" "),v("li",[v("p",[e._v("flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。"),v("br"),e._v(" "),v("code",[e._v("flex-basis: <length> | auto; /* default auto */")])])]),e._v(" "),v("li",[v("p",[e._v("flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。"),v("br"),e._v(" "),v("code",[e._v("flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]")]),v("br"),e._v("\n该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。\n建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")])]),e._v(" "),v("li",[v("p",[e._v("align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。"),v("br"),e._v(" "),v("code",[e._v("align-self: auto | flex-start | flex-end | center | baseline | stretch;")]),v("br"),e._v("\n该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")])])]),e._v(" "),v("h2",{attrs:{id:"grid"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#grid","aria-hidden":"true"}},[e._v("#")]),e._v(" grid")])])},[],!1,null,null,null);l.default=r.exports}}]);