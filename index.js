!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=16)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,o){var r=o(11),n=o(12),l=o(13),c=o(15);e.exports=function(e,t){return r(e)||n(e,t)||l(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,o.apply(this,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var c=n.apply(null,r);c&&e.push(c)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var i in r)o.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=window.wp.compose},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var o=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var r,n,l=[],_n=!0,c=!1;try{for(o=o.call(e);!(_n=(r=o.next()).done)&&(l.push(r.value),!t||l.length!==t);_n=!0);}catch(e){c=!0,n=e}finally{try{_n||null==o.return||o.return()}finally{if(c)throw n}}return l}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){var r=o(14);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(6),l=o(1),c=o(7),i=o.n(c),a=o(2),u=o(5),s=o.n(u),p=o(4),f=o.n(p),d=o(8),m=o.n(d),b=o(3),v=o(9),g=o(10);function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function O(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){s()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var y=[{color:"#000"},{color:"#FFF"}],x=[{value:"px",label:"px",default:430},{value:"em",label:"em",default:20},{value:"rem",label:"rem",default:20},{value:"vw",label:"vw",default:20},{value:"vh",label:"vh",default:50}],j={top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1};function w(e){var t=e.onChange,o=e.onUnitChange,n=e.unit,c=void 0===n?"px":n,i=e.value,u=void 0===i?"":i,s=Object(r.useState)(null),p=f()(s,2),d=p[0],m=p[1],g=Object(v.useInstanceId)(b.__experimentalUnitControl),h="a8c-waves-height-input-".concat(g),O=null!==d?d:u,y="px"===c?50:0;return Object(r.createElement)(a.BaseControl,{label:Object(l.__)("Minimum height of cover","waves"),id:h},Object(r.createElement)(b.__experimentalUnitControl,{id:h,min:y,onBlur:function(){null!==d&&m(null)},onChange:function(e){var o=""!==e?parseInt(e,10):void 0;isNaN(o)&&void 0!==o?m(e):(m(null),t(o))},onUnitChange:o,step:"1",style:{maxWidth:80},unit:c,units:x,value:O}))}Object(n.registerBlockType)("a8c/waves",{title:Object(l.__)("Waves","waves"),description:Object(l.__)("Create content with waves in motion.","waves"),icon:Object(r.createElement)((function(e){return Object(r.createElement)(a.SVG,i()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),Object(r.createElement)(a.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 17.2963V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5.28452C18.5693 7.30549 16.2222 11 11.5 11C7.16667 11 5.27778 14.7778 4.5 17.2963ZM3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"}))}),null),category:"widgets",supports:{align:!0,html:!1},attributes:{complexity:{type:"integer",default:2},mouseSpeed:{type:"integer",default:20},fluidSpeed:{type:"integer",default:20},color1:{type:"string"},color2:{type:"string"},color3:{type:"string"},color4:{type:"string"},minHeight:{type:"number"},minHeightUnit:{type:"string"},previewImage:{type:"string"}},edit:function(e){var t=e.attributes,o=e.className,n=e.isSelected,c=e.setAttributes,i=window.a8cColorEffects,u=i.run,p=i.parseColor,d=i.renderPreview,v=Object(g.useDispatch)("core/block-editor").toggleSelection,h=Object(r.useState)(null),x=f()(h,2),_=x[0],S=x[1],C=Object(r.useState)(!1),E=f()(C,2),H=E[0],I=E[1],P=Object(b.useSetting)("color.palette"),M=null!=P&&P.length?P:y,U={color1:t.color1||M[0].color,color2:t.color2||M[0].color,color3:t.color3||M[1%M.length].color,color4:t.color4||M[2%M.length].color},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d(O({complexity:t.complexity,mouseSpeed:1,fluidSpeed:1,color1:p(U.color1),color2:p(U.color2),color3:p(U.color3),color4:p(U.color4)},e))};Object(r.useEffect)((function(){if(Object.entries(U).forEach((function(e){var o=f()(e,2),r=o[0],n=o[1];void 0===t[r]&&c(s()({},r,n))})),void 0===t.previewImage){var e=R();c({previewImage:e})}}),[]);var k=t.minHeightUnit?"".concat(t.minHeight).concat(t.minHeightUnit):t.minHeight,A={minHeight:_||k||void 0,backgroundImage:'url( "'.concat(t.previewImage,'" )')},B=Object(r.useRef)({complexity:t.complexity,mouseSpeed:t.mouseSpeed,fluidSpeed:t.fluidSpeed,color1:p(U.color1),color2:p(U.color2),color3:p(U.color3),color4:p(U.color4)});Object(r.useEffect)((function(){B.current.complexity=t.complexity,B.current.mouseSpeed=t.mouseSpeed,B.current.fluidSpeed=t.fluidSpeed,B.current.color1=p(U.color1),B.current.color2=p(U.color2),B.current.color3=p(U.color3),B.current.color4=p(U.color4)}),[t.complexity,t.mouseSpeed,t.fluidSpeed,U.color1,U.color2,U.color3,U.color4]);var z=Object(r.useRef)();return Object(r.useEffect)((function(){return u(z.current,B.current)}),[z.current,B.current]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(b.InspectorControls,null,Object(r.createElement)(a.PanelBody,{title:Object(l.__)("Animation","waves"),initialOpen:!0},Object(r.createElement)(a.RangeControl,{label:Object(l.__)("Complexity","waves"),value:t.complexity,onChange:function(e){var t=R({complexity:e});c({complexity:e,previewImage:t})},min:1,max:10}),Object(r.createElement)(a.RangeControl,{label:Object(l.__)("Mouse Speed","waves"),value:t.mouseSpeed,onChange:function(e){return c({mouseSpeed:e})},min:1,max:100}),Object(r.createElement)(a.RangeControl,{label:Object(l.__)("Fluid Speed","waves"),value:t.fluidSpeed,onChange:function(e){return c({fluidSpeed:e})},min:1,max:100})),Object(r.createElement)(b.PanelColorSettings,{title:Object(l.__)("Color","waves"),initialOpen:!0,colorSettings:[{label:Object(l.__)("Color 1","waves"),value:U.color1,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.color1,t=R({color1:p(e)});c({color1:e,previewImage:t})}},{label:Object(l.__)("Color 2","waves"),value:U.color2,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.color2,t=R({color2:p(e)});c({color2:e,previewImage:t})}},{label:Object(l.__)("Color 3","waves"),value:U.color3,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.color3,t=R({color3:p(e)});c({color3:e,previewImage:t})}},{label:Object(l.__)("Color 4","waves"),value:U.color4,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.color4,t=R({color4:p(e)});c({color4:e,previewImage:t})}}]}),Object(r.createElement)(a.PanelBody,{title:Object(l.__)("Dimensions","waves")},Object(r.createElement)(w,{value:_||t.minHeight,unit:t.minHeightUnit,onChange:function(e){return c({minHeight:e})},onUnitChange:function(e){return c({minHeightUnit:e})}}))),Object(r.createElement)(a.ResizableBox,{className:m()("".concat(o,"__resize-container"),{"is-resizing":H}),enable:j,onResizeStart:function(e,t,o){v(!1),c({minHeightUnit:"px"}),S(o.clientHeight)},onResize:function(e,t,o){I(!0),S(o.clientHeight)},onResizeStop:function(e,t,o){v(!0),I(!1),c({minHeight:o.clientHeight}),S(null)},minHeight:50,showHandle:n},Object(r.createElement)("div",{className:o,style:A},Object(r.createElement)("canvas",{ref:z}),Object(r.createElement)("div",{className:"".concat(o,"__inner-container")},Object(r.createElement)(b.InnerBlocks,{template:[["core/paragraph",{align:"center",fontSize:"large",placeholder:Object(l.__)("Write title…","waves")}]]})))))},save:function(e){var t=e.attributes,o={minHeight:(t.minHeightUnit?"".concat(t.minHeight).concat(t.minHeightUnit):t.minHeight)||void 0,backgroundImage:'url( "'.concat(t.previewImage,'" )')};return Object(r.createElement)("div",{style:o},Object(r.createElement)("canvas",{"data-complexity":t.complexity,"data-mouse-speed":t.mouseSpeed,"data-fluid-speed":t.fluidSpeed,"data-color1":t.color1,"data-color2":t.color2,"data-color3":t.color3,"data-color4":t.color4}),Object(r.createElement)("div",{className:"wp-block-a8c-waves__inner-container"},Object(r.createElement)(b.InnerBlocks.Content,null)))}})}]);