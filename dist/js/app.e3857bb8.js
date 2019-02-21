var VueGridLayout=function(t){function e(e){for(var n,a,o=e[0],l=e[1],h=e[2],d=0,c=[];d<o.length;d++)a=o[d],r[a]&&c.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(c.length)c.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonpVueGridLayout"]=window["webpackJsonpVueGridLayout"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var u=l;return s.push([0,"chunk-vendors"]),i()}({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("31c5"),r=i.n(n);r.a},"1e88":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"\n.vue-grid-layout{position:relative;-webkit-transition:height .2s ease;transition:height .2s ease\n}",""])},"31c5":function(t,e,i){var n=i("5fc7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("f155f63c",n,!0,{sourceMap:!1,shadowMode:!1})},"37a2":function(t,e,i){"use strict";var n=i("3839"),r=i.n(n);r.a},3839:function(t,e,i){var n=i("8581");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("60b19877",n,!0,{sourceMap:!1,shadowMode:!1})},"49ab":function(t,e,i){var n=i("ed79");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("e407743c",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",{staticStyle:{"text-align":"center"}},[t._v("Vue Grid Layout")]),i("div",[i("div",{staticClass:"layoutJSON"},[t._v("\n            Displayed as "),i("code",[t._v("[x, y, w, h]")]),t._v(":\n            "),i("div",{staticClass:"columns"},t._l(t.layout,function(e){return i("div",{key:e.i,staticClass:"layoutItem"},[i("b",[t._v(t._s(e.i))]),t._v(": ["+t._s(e.x)+", "+t._s(e.y)+", "+t._s(e.w)+", "+t._s(e.h)+"]\n                ")])}))])]),i("div",{attrs:{id:"content"}},[i("button",{on:{click:t.decreaseWidth}},[t._v("Decrease Width")]),i("button",{on:{click:t.increaseWidth}},[t._v("Increase Width")]),i("button",{on:{click:t.addItem}},[t._v("Add an item")]),i("button",{on:{click:t.changeDirection}},[t._v("Change Direction")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.draggable,expression:"draggable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.draggable)?t._i(t.draggable,null)>-1:t.draggable},on:{change:function(e){var i=t.draggable,n=e.target,r=!!n.checked;if(Array.isArray(i)){var s=null,a=t._i(i,s);n.checked?a<0&&(t.draggable=i.concat([s])):a>-1&&(t.draggable=i.slice(0,a).concat(i.slice(a+1)))}else t.draggable=r}}}),t._v(" Draggable\n        "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.resizable,expression:"resizable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.resizable)?t._i(t.resizable,null)>-1:t.resizable},on:{change:function(e){var i=t.resizable,n=e.target,r=!!n.checked;if(Array.isArray(i)){var s=null,a=t._i(i,s);n.checked?a<0&&(t.resizable=i.concat([s])):a>-1&&(t.resizable=i.slice(0,a).concat(i.slice(a+1)))}else t.resizable=r}}}),t._v(" Resizable\n        "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.mirrored,expression:"mirrored"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.mirrored)?t._i(t.mirrored,null)>-1:t.mirrored},on:{change:function(e){var i=t.mirrored,n=e.target,r=!!n.checked;if(Array.isArray(i)){var s=null,a=t._i(i,s);n.checked?a<0&&(t.mirrored=i.concat([s])):a>-1&&(t.mirrored=i.slice(0,a).concat(i.slice(a+1)))}else t.mirrored=r}}}),t._v(" Mirrored\n        "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.responsive,expression:"responsive"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.responsive)?t._i(t.responsive,null)>-1:t.responsive},on:{change:function(e){var i=t.responsive,n=e.target,r=!!n.checked;if(Array.isArray(i)){var s=null,a=t._i(i,s);n.checked?a<0&&(t.responsive=i.concat([s])):a>-1&&(t.responsive=i.slice(0,a).concat(i.slice(a+1)))}else t.responsive=r}}}),t._v(" Responsive\n        "),i("div",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[t._v("\n            Row Height: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.rowHeight,expression:"rowHeight"}],attrs:{type:"number"},domProps:{value:t.rowHeight},on:{input:function(e){e.target.composing||(t.rowHeight=e.target.value)}}}),t._v(" Col nums: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.colNum,expression:"colNum"}],attrs:{type:"number"},domProps:{value:t.colNum},on:{input:function(e){e.target.composing||(t.colNum=e.target.value)}}})]),i("grid-layout",{attrs:{layout:t.layout,"col-num":parseInt(t.colNum),"row-height":t.rowHeight,"is-draggable":t.draggable,"is-resizable":t.resizable,"is-mirrored":t.mirrored,"vertical-compact":!1,"use-css-transforms":!0,responsive:t.responsive,collisions:!1},on:{"update:layout":function(e){t.layout=e}}},t._l(t.layout,function(e){return i("grid-item",{key:e.i,attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i},on:{resize:t.resize,move:t.move,resized:t.resized,moved:t.moved}},[i("test-element",{attrs:{text:e.i}})],1)})),i("hr")],1)])},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"item",staticClass:"vue-grid-item",class:{"vue-resizable":t.resizable,resizing:t.isResizing,"vue-draggable-dragging":t.isDragging,cssTransforms:t.useCssTransforms,"render-rtl":t.renderRtl,"disable-userselect":t.isDragging,"no-touch":t.isAndroid},style:t.style},[t._t("default"),t.resizable?i("span",{ref:"handle",class:t.resizableHandleClass}):t._e()],2)},o=[];i("c5f6"),i("a481"),i("456d"),i("ac6a"),i("55dd");function l(t){for(var e,i=0,n=0,r=t.length;n<r;n++)e=t[n].y+t[n].h,e>i&&(i=e);return i}function h(t){for(var e=Array(t.length),i=0,n=t.length;i<n;i++)e[i]=u(t[i]);return e}function u(t){return JSON.parse(JSON.stringify(t))}function d(t,e){return t!==e&&(!(t.x+t.w<=e.x)&&(!(t.x>=e.x+e.w)&&(!(t.y+t.h<=e.y)&&!(t.y>=e.y+e.h))))}function c(t,e){for(var i=y(t),n=R(t),r=Array(t.length),s=0,a=n.length;s<a;s++){var o=n[s];o.static||(o=g(i,o,e),i.push(o)),r[t.indexOf(o)]=o,o.moved=!1}return r}function g(t,e,i){if(i)while(e.y>0&&!m(t,e))e.y--;var n;while(n=m(t,e))e.y=n.y+n.h;return e}function f(t,e){for(var i=y(t),n=0,r=t.length;n<r;n++){var s=t[n];if(s.x+s.w>e.cols&&(s.x=e.cols-s.w),s.x<0&&(s.x=0,s.w=e.cols),s.static)while(m(i,s))s.y++;else i.push(s)}return t}function p(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i].i===e)return t[i]}function m(t,e){for(var i=0,n=t.length;i<n;i++)if(d(t[i],e))return t[i]}function v(t,e){return t.filter(function(t){return d(t,e)})}function y(t){return t.filter(function(t){return t.static})}function b(t,e,i,n,r,s){if(e.static)return t;var a=n&&e.y>n;if("number"===typeof i&&(e.x=i),"number"===typeof n&&(e.y=n),e.moved=!0,!s)return t;var o=R(t);a&&(o=o.reverse());for(var l=v(o,e),h=0,u=l.length;h<u;h++){var d=l[h];d.moved||(e.y>d.y&&e.y-d.y>d.h/4||(t=d.static?w(t,d,e,r):w(t,e,d,r)))}return t}function w(t,e,i,n){if(n){var r={x:i.x,y:i.y,w:i.w,h:i.h,i:"-1"};if(r.y=Math.max(e.y-i.h,0),!m(t,r))return b(t,i,void 0,r.y)}return b(t,i,void 0,i.y+1)}function x(t,e,i,n){var r="translate3d("+e+"px,"+t+"px, 0)";return{transform:r,WebkitTransform:r,MozTransform:r,msTransform:r,OTransform:r,width:i+"px",height:n+"px",position:"absolute"}}function z(t,e,i,n){var r="translate3d("+-1*e+"px,"+t+"px, 0)";return{transform:r,WebkitTransform:r,MozTransform:r,msTransform:r,OTransform:r,width:i+"px",height:n+"px",position:"absolute"}}function H(t,e,i,n){return{top:t+"px",left:e+"px",width:i+"px",height:n+"px",position:"absolute"}}function W(t,e,i,n){return{top:t+"px",right:e+"px",width:i+"px",height:n+"px",position:"absolute"}}function R(t){return[].concat(t).sort(function(t,e){return t.y>e.y||t.y===e.y&&t.x>e.x?1:-1})}function k(t,e){e=e||"Layout";var i=["x","y","w","h"];if(!Array.isArray(t))throw new Error(e+" must be an array!");for(var n=0,r=t.length;n<r;n++){for(var s=t[n],a=0;a<i.length;a++)if("number"!==typeof s[i[a]])throw new Error("VueGridLayout: "+e+"["+n+"]."+i[a]+" must be a number!");if(s.i&&s.i,void 0!==s.static&&"boolean"!==typeof s.static)throw new Error("VueGridLayout: "+e+"["+n+"].static must be a boolean!")}}function $(t){return B(t)}function B(t){var e=t.target.offsetParent||document.body,i=t.offsetParent===document.body?{left:0,top:0}:e.getBoundingClientRect(),n=t.clientX+e.scrollLeft-i.left,r=t.clientY+e.scrollTop-i.top;return{x:n,y:r}}function M(t,e,i,n){var r=!N(t);return r?{deltaX:0,deltaY:0,lastX:i,lastY:n,x:i,y:n}:{deltaX:i-t,deltaY:n-e,lastX:t,lastY:e,x:i,y:n}}function N(t){return"number"===typeof t&&!isNaN(t)}var _="auto";function D(){return"undefined"!==typeof document}function C(){return"undefined"!==typeof window}function S(){if(!D())return _;var t="undefined"!==typeof document.dir?document.dir:document.getElementsByTagName("html")[0].getAttribute("dir");return t}function E(t){if(D){var e=document.getElementsByTagName("html")[0];e.setAttribute("dir",t)}else _=t}function I(t,e){C?window.addEventListener(t,e):e()}function L(t,e){C&&window.removeEventListener(t,e)}var j=i("fb3a"),T={name:"GridItem",props:{isDraggable:{type:Boolean,required:!1,default:null},isResizable:{type:Boolean,required:!1,default:null},minH:{type:Number,required:!1,default:1},minW:{type:Number,required:!1,default:1},maxH:{type:Number,required:!1,default:1/0},maxW:{type:Number,required:!1,default:1/0},x:{type:Number,required:!0},y:{type:Number,required:!0},w:{type:Number,required:!0},h:{type:Number,required:!0},i:{required:!0},dragIgnoreFrom:{type:String,required:!1,default:"a, button"},dragAllowFrom:{type:String,required:!1,default:null},resizeIgnoreFrom:{type:String,required:!1,default:"a, button"}},inject:["eventBus"],data:function(){return{cols:1,containerWidth:100,rowHeight:30,margin:[10,10],maxRows:1/0,draggable:null,resizable:null,collisions:null,useCssTransforms:!0,isDragging:!1,dragging:null,isResizing:!1,resizing:null,lastX:NaN,lastY:NaN,lastW:NaN,lastH:NaN,style:{},rtl:!1,dragEventSet:!1,resizeEventSet:!1,previousW:null,previousH:null,previousX:null,previousY:null,innerX:this.x,innerY:this.y,innerW:this.w,innerH:this.h}},created:function(){var t=this,e=this;e.updateWidthHandler=function(t){e.updateWidth(t)},e.compactHandler=function(t){e.compact(t)},e.setDraggableHandler=function(t){null===e.isDraggable&&(e.draggable=t)},e.setCollisionsHandler=function(t){null===e.collisions&&(e.collisions=t)},e.setResizableHandler=function(t){null===e.isResizable&&(e.resizable=t)},e.setRowHeightHandler=function(t){e.rowHeight=t},e.directionchangeHandler=function(){t.rtl="rtl"===S(),t.compact()},e.setColNum=function(t){e.cols=parseInt(t)},this.eventBus.$on("updateWidth",e.updateWidthHandler),this.eventBus.$on("compact",e.compactHandler),this.eventBus.$on("setDraggable",e.setDraggableHandler),this.eventBus.$on("setCollisions",e.setCollisionsHandler),this.eventBus.$on("setResizable",e.setResizableHandler),this.eventBus.$on("setRowHeight",e.setRowHeightHandler),this.eventBus.$on("directionchange",e.directionchangeHandler),this.eventBus.$on("setColNum",e.setColNum),this.rtl="rtl"===S()},beforeDestroy:function(){var t=this;this.eventBus.$off("updateWidth",t.updateWidthHandler),this.eventBus.$off("compact",t.compactHandler),this.eventBus.$off("setDraggable",t.setDraggableHandler),this.eventBus.$off("setCollisions",t.setCollisionsHandler),this.eventBus.$off("setResizable",t.setResizableHandler),this.eventBus.$off("setRowHeight",t.setRowHeightHandler),this.eventBus.$off("directionchange",t.directionchangeHandler),this.eventBus.$off("setColNum",t.setColNum),this.interactObj.unset()},mounted:function(){this.cols=this.$parent.colNum,this.rowHeight=this.$parent.rowHeight,this.containerWidth=null!==this.$parent.width?this.$parent.width:100,this.margin=void 0!==this.$parent.margin?this.$parent.margin:[10,10],this.maxRows=this.$parent.maxRows,null===this.isDraggable?this.draggable=this.$parent.isDraggable:this.draggable=this.isDraggable,null===this.isResizable?this.resizable=this.$parent.isResizable:this.resizable=this.isResizable,null===this.collisions&&(this.collisions=!0),this.useCssTransforms=this.$parent.useCssTransforms,this.createStyle()},watch:{isDraggable:function(){this.draggable=this.isDraggable},draggable:function(){var t=this;if(null!==this.interactObj&&void 0!==this.interactObj||(this.interactObj=j(this.$refs.item)),this.draggable){var e={ignoreFrom:this.dragIgnoreFrom,allowFrom:this.dragAllowFrom};this.interactObj.draggable(e),this.dragEventSet||(this.dragEventSet=!0,this.interactObj.on("dragstart dragmove dragend",function(e){t.handleDrag(e)}))}else this.interactObj.draggable({enabled:!1})},isResizable:function(){this.resizable=this.isResizable},resizable:function(){this.tryMakeResizable()},rowHeight:function(){this.createStyle()},cols:function(){this.tryMakeResizable(),this.createStyle()},containerWidth:function(){this.tryMakeResizable(),this.createStyle()},x:function(t){this.innerX=t,this.createStyle()},y:function(t){this.innerY=t,this.createStyle()},h:function(t){this.innerH=t,this.createStyle()},w:function(t){this.innerW=t,this.createStyle()},renderRtl:function(){this.tryMakeResizable(),this.createStyle()}},computed:{isAndroid:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("android")},renderRtl:function(){return this.$parent.isMirrored?!this.rtl:this.rtl},resizableHandleClass:function(){return this.renderRtl?"vue-resizable-handle vue-rtl-resizable-handle":"vue-resizable-handle"}},methods:{createStyle:function(){this.x+this.w>this.cols?(this.innerX=0,this.innerW=this.w>this.cols?this.cols:this.w):(this.innerX=this.x,this.innerW=this.w);var t,e=this.calcPosition(this.innerX,this.innerY,this.innerW,this.innerH);this.isDragging&&(e.top=this.dragging.top,this.renderRtl?e.right=this.dragging.left:e.left=this.dragging.left),this.isResizing&&(e.width=this.resizing.width,e.height=this.resizing.height),t=this.useCssTransforms?this.renderRtl?z(e.top,e.right,e.width,e.height):x(e.top,e.left,e.width,e.height):this.renderRtl?W(e.top,e.right,e.width,e.height):H(e.top,e.left,e.width,e.height),this.style=t},handleResize:function(t){var e=$(t);if(null!=e){var i,n=e.x,r=e.y,s={width:0,height:0};switch(t.type){case"resizestart":this.previousW=this.innerW,this.previousH=this.innerH,i=this.calcPosition(this.innerX,this.innerY,this.innerW,this.innerH),s.width=i.width,s.height=i.height,this.resizing=s,this.isResizing=!0;break;case"resizemove":var a=M(this.lastW,this.lastH,n,r);this.renderRtl?s.width=this.resizing.width-a.deltaX:s.width=this.resizing.width+a.deltaX,s.height=this.resizing.height+a.deltaY,this.resizing=s;break;case"resizeend":i=this.calcPosition(this.innerX,this.innerY,this.innerW,this.innerH),s.width=i.width,s.height=i.height,this.resizing=null,this.isResizing=!1;break}i=this.calcWH(s.height,s.width),i.w<this.minW&&(i.w=this.minW),i.w>this.maxW&&(i.w=this.maxW),i.h<this.minH&&(i.h=this.minH),i.h>this.maxH&&(i.h=this.maxH),i.h<1&&(i.h=1),i.w<1&&(i.w=1),this.lastW=n,this.lastH=r,this.innerW===i.w&&this.innerH===i.h||this.$emit("resize",this.i,i.h,i.w,s.height,s.width),"resizeend"!==t.type||this.previousW===this.innerW&&this.previousH===this.innerH||this.$emit("resized",this.i,i.h,i.w,s.height,s.width),this.eventBus.$emit("resizeEvent",t.type,this.i,this.innerX,this.innerY,i.h,i.w)}},handleDrag:function(t){if(!this.isResizing){var e=$(t);if(null!==e){var i,n=e.x,r=e.y,s={top:0,left:0};switch(t.type){case"dragstart":this.previousX=this.innerX,this.previousY=this.innerY;var a=t.target.offsetParent.getBoundingClientRect(),o=t.target.getBoundingClientRect();this.renderRtl?s.left=-1*(o.right-a.right):s.left=o.left-a.left,s.top=o.top-a.top,this.dragging=s,this.isDragging=!0;break;case"dragend":if(!this.isDragging)return;var l=t.target.offsetParent.getBoundingClientRect(),h=t.target.getBoundingClientRect();this.renderRtl?s.left=-1*(h.right-l.right):s.left=h.left-l.left,s.top=h.top-l.top,this.dragging=null,this.isDragging=!1;break;case"dragmove":var u=M(this.lastX,this.lastY,n,r);this.renderRtl?s.left=this.dragging.left-u.deltaX:s.left=this.dragging.left+u.deltaX,s.top=this.dragging.top+u.deltaY,this.dragging=s;break}i=(this.renderRtl,this.calcXY(s.top,s.left)),this.lastX=n,this.lastY=r,this.innerX===i.x&&this.innerY===i.y||this.$emit("move",this.i,i.x,i.y),"dragend"!==t.type||this.previousX===this.innerX&&this.previousY===this.innerY||this.$emit("moved",this.i,i.x,i.y),this.eventBus.$emit("dragEvent",t.type,this.i,i.x,i.y,this.innerH,this.innerW)}}},calcPosition:function(t,e,i,n){var r,s=this.calcColWidth();return r=this.renderRtl?{right:Math.round(s*t+(t+1)*this.margin[0]),top:Math.round(this.rowHeight*e+(e+1)*this.margin[1]),width:i===1/0?i:Math.round(s*i+Math.max(0,i-1)*this.margin[0]),height:n===1/0?n:Math.round(this.rowHeight*n+Math.max(0,n-1)*this.margin[1])}:{left:Math.round(s*t+(t+1)*this.margin[0]),top:Math.round(this.rowHeight*e+(e+1)*this.margin[1]),width:i===1/0?i:Math.round(s*i+Math.max(0,i-1)*this.margin[0]),height:n===1/0?n:Math.round(this.rowHeight*n+Math.max(0,n-1)*this.margin[1])},r},calcXY:function(t,e){var i=this.calcColWidth(),n=Math.round((e-this.margin[0])/(i+this.margin[0])),r=Math.round((t-this.margin[1])/(this.rowHeight+this.margin[1]));return n=Math.max(Math.min(n,this.cols-this.innerW),0),r=Math.max(Math.min(r,this.maxRows-this.innerH),0),{x:n,y:r}},calcColWidth:function(){var t=(this.containerWidth-this.margin[0]*(this.cols+1))/this.cols;return t},calcWH:function(t,e){var i=this.calcColWidth(),n=Math.round((e+this.margin[0])/(i+this.margin[0])),r=Math.round((t+this.margin[1])/(this.rowHeight+this.margin[1]));return n=Math.max(Math.min(n,this.cols-this.innerX),0),r=Math.max(Math.min(r,this.maxRows-this.innerY),0),{w:n,h:r}},updateWidth:function(t,e){this.containerWidth=t,void 0!==e&&null!==e&&(this.cols=e)},compact:function(){this.createStyle()},tryMakeResizable:function(){var t=this;if(null!==this.interactObj&&void 0!==this.interactObj||(this.interactObj=j(this.$refs.item)),this.resizable){var e=this.calcPosition(0,0,this.maxW,this.maxH),i=this.calcPosition(0,0,this.minW,this.minH),n={preserveAspectRatio:!0,edges:{left:!1,right:"."+this.resizableHandleClass,bottom:"."+this.resizableHandleClass,top:!1},ignoreFrom:this.resizeIgnoreFrom,restrictSize:{min:{height:i.height,width:i.width},max:{height:e.height,width:e.width}}};this.interactObj.resizable(n),this.resizeEventSet||(this.resizeEventSet=!0,this.interactObj.on("resizestart resizemove resizeend",function(e){t.handleResize(e)}))}else this.interactObj.resizable({enabled:!1})},autoSize:function(){this.previousW=this.innerW,this.previousH=this.innerH;var t=this.$slots.default[0].elm.getBoundingClientRect(),e=this.calcWH(t.height,t.width);e.w<this.minW&&(e.w=this.minW),e.w>this.maxW&&(e.w=this.maxW),e.h<this.minH&&(e.h=this.minH),e.h>this.maxH&&(e.h=this.maxH),e.h<1&&(e.h=1),e.w<1&&(e.w=1),this.innerW===e.w&&this.innerH===e.h||this.$emit("resize",this.i,e.h,e.w,t.height,t.width),this.previousW===e.w&&this.previousH===e.h||(this.$emit("resized",this.i,e.h,e.w,t.height,t.width),this.eventBus.$emit("resizeEvent","resizeend",this.i,this.innerX,this.innerY,e.h,e.w))}}},O=T,A=(i("5ed4"),i("2877")),P=Object(A["a"])(O,a,o,!1,null,null,null);P.options.__file="GridItem.vue";var Y=P.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"item",staticClass:"vue-grid-layout",style:t.mergedStyle},[t._t("default"),i("grid-item",{directives:[{name:"show",rawName:"v-show",value:t.isDragging,expression:"isDragging"}],staticClass:"vue-grid-placeholder",attrs:{x:t.placeholder.x,y:t.placeholder.y,w:t.placeholder.w,h:t.placeholder.h,i:t.placeholder.i}})],2)},Z=[];function G(t,e){for(var i=J(t),n=i[0],r=1,s=i.length;r<s;r++){var a=i[r];e>t[a]&&(n=a)}return n}function V(t,e){if(!e[t])throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint "+t+" is missing!");return e[t]}function q(t,e,i,n,r,s,a){if(e[n])return h(e[n]);for(var o=t,l=J(i),u=l.slice(l.indexOf(n)),d=0,g=u.length;d<g;d++){var p=u[d];if(e[p]){o=e[p];break}}return o=h(o||[]),c(f(o,{cols:s}),a)}function J(t){var e=Object.keys(t);return e.sort(function(e,i){return t[e]-t[i]})}var F=i("eec4"),U={name:"GridLayout",provide:function(){return{eventBus:null}},components:{GridItem:Y},props:{autoSize:{type:Boolean,default:!0},colNum:{type:Number,default:12},rowHeight:{type:Number,default:150},maxRows:{type:Number,default:1/0},margin:{type:Array,default:function(){return[10,10]}},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},isMirrored:{type:Boolean,default:!1},collisions:{type:Boolean,default:!0},useCssTransforms:{type:Boolean,default:!0},verticalCompact:{type:Boolean,default:!0},layout:{type:Array,required:!0},responsive:{type:Boolean,default:!1},breakpoints:{type:Object,default:function(){return{lg:1200,md:996,sm:768,xs:480,xxs:0}}},cols:{type:Object,default:function(){return{lg:12,md:10,sm:6,xs:4,xxs:2}}}},data:function(){return{width:null,mergedStyle:{},lastLayoutLength:0,isDragging:!1,placeholder:{x:0,y:0,w:0,h:0,i:-1},layouts:{},lastBreakpoint:null,originalLayout:null}},created:function(){var t=this;t.resizeEventHandler=function(e,i,n,r,s,a){t.resizeEvent(e,i,n,r,s,a)},t.dragEventHandler=function(e,i,n,r,s,a){t.dragEvent(e,i,n,r,s,a)},t._provided.eventBus=new n["a"],t.eventBus=t._provided.eventBus,t.eventBus.$on("resizeEvent",t.resizeEventHandler),t.eventBus.$on("dragEvent",t.dragEventHandler)},beforeDestroy:function(){this.eventBus.$off("resizeEvent",this.resizeEventHandler),this.eventBus.$off("dragEvent",this.dragEventHandler),L("resize",this.onWindowResize)},mounted:function(){this.$nextTick(function(){k(this.layout),this.originalLayout=this.layout;var t=this;this.$nextTick(function(){null===t.width&&(t.onWindowResize(),t.initResponsiveFeatures(),I("resize",t.onWindowResize)),c(t.layout,t.verticalCompact),t.updateHeight(),t.$nextTick(function(){var e=F({strategy:"scroll"});e.listenTo(t.$refs.item,function(){t.onWindowResize()})})}),I("load",t.onWindowLoad.bind(this))})},watch:{width:function(){this.$nextTick(function(){this.eventBus.$emit("updateWidth",this.width),this.updateHeight()})},layout:function(){this.layoutUpdate()},colNum:function(t){this.eventBus.$emit("setColNum",t)},rowHeight:function(){this.eventBus.$emit("setRowHeight",this.rowHeight)},isDraggable:function(){this.eventBus.$emit("setDraggable",this.isDraggable)},collisions:function(){this.eventBus.$emit("setCollisions",this.collisions)},isResizable:function(){this.eventBus.$emit("setResizable",this.isResizable)},responsive:function(){this.responsive||(this.$emit("update:layout",this.originalLayout),this.eventBus.$emit("setColNum",this.colNum)),this.onWindowResize()}},methods:{onWindowLoad:function(){var t=this;null===t.width&&(t.onWindowResize(),I("resize",t.onWindowResize)),c(t.layout,t.verticalCompact),t.updateHeight(),t.$nextTick(function(){var e=F({strategy:"scroll"});e.listenTo(t.$refs.item,function(){t.onWindowResize()})})},layoutUpdate:function(){if(void 0!==this.layout){if(this.layout.length!==this.originalLayout.length){var t=this.findDifference(this.layout,this.originalLayout);t.length>0&&(this.layout.length>this.originalLayout.length?this.originalLayout=this.originalLayout.concat(t):this.originalLayout=this.originalLayout.filter(function(e){return!t.some(function(t){return e.i===t.i})})),this.lastLayoutLength=this.layout.length,this.initResponsiveFeatures()}c(this.layout,this.verticalCompact),this.eventBus.$emit("updateWidth",this.width),this.updateHeight()}},updateHeight:function(){this.mergedStyle={height:this.containerHeight()}},onWindowResize:function(){null!==this.$refs&&null!==this.$refs.item&&void 0!==this.$refs.item&&(this.width=this.$refs.item.offsetWidth),this.eventBus.$emit("resizeEvent")},containerHeight:function(){if(this.autoSize)return l(this.layout)*(this.rowHeight+this.margin[1])+this.margin[1]+"px"},dragEvent:function(t,e,i,n,r,s){var a=p(this.layout,e);void 0!==a&&null!==a||(a={x:0,y:0}),"dragmove"===t||"dragstart"===t?(this.placeholder.i=e,this.placeholder.x=a.x,this.placeholder.y=a.y,this.placeholder.w=s,this.placeholder.h=r,this.$nextTick(function(){this.isDragging=!0}),this.eventBus.$emit("updateWidth",this.width)):this.$nextTick(function(){this.isDragging=!1}),a.x=i,a.y=n,this.layout=b(this.layout,a,i,n,!0,this.collisions),c(this.layout,this.verticalCompact),this.eventBus.$emit("compact"),this.updateHeight(),"dragend"===t&&this.$emit("layout-updated",this.layout)},resizeEvent:function(t,e,i,n,r,s){"resizestart"===t||"resizemove"===t?(this.placeholder.i=e,this.placeholder.x=i,this.placeholder.y=n,this.placeholder.w=s,this.placeholder.h=r,this.$nextTick(function(){this.isDragging=!0}),this.eventBus.$emit("updateWidth",this.width)):this.$nextTick(function(){this.isDragging=!1});var a=p(this.layout,e);void 0!==a&&null!==a||(a={h:0,w:0}),a.h=r,a.w=s,this.responsive&&this.responsiveGridLayout(),c(this.layout,this.verticalCompact),this.eventBus.$emit("compact"),this.updateHeight(),"resizeend"===t&&this.$emit("layout-updated",this.layout)},responsiveGridLayout:function(){var t=G(this.breakpoints,this.width),e=V(t,this.cols);null==this.lastBreakpoint||this.layouts[this.lastBreakpoint]||(this.layouts[this.lastBreakpoint]=h(this.layout));var i=q(this.originalLayout,this.layouts,this.breakpoints,t,this.lastBreakpoint,e,this.verticalCompact);this.layouts[t]=i,this.$emit("update:layout",i),this.lastBreakpoint=t,this.eventBus.$emit("setColNum",V(t,this.cols))},initResponsiveFeatures:function(){this.layouts={}},findDifference:function(t,e){var i=t.filter(function(t){return!e.some(function(e){return t.i===e.i})}),n=e.filter(function(e){return!t.some(function(t){return e.i===t.i})});return i.concat(n)}}},Q=U,K=(i("e279"),Object(A["a"])(Q,X,Z,!1,null,null,null));K.options.__file="GridLayout.vue";var tt=K.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"text"},[t._v("\n    "+t._s(t.text)+"\n")])},it=[],nt={name:"TestElement",props:{text:{type:String,default:"x"}},data:function(){return{}},mounted:function(){console.log("### "+this.text+" ready!")}},rt=nt,st=(i("9e01"),Object(A["a"])(rt,et,it,!1,null,null,null));st.options.__file="TestElement.vue";var at=st.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"text"},[t._v("\n    "+t._s(t.text)+"\n"),i("button",[t._v("xxx")]),i("span",{staticClass:"vue-draggable-handle"})])},lt=[],ht={name:"CustomDragElement",props:{text:{type:String,default:"x"}},data:function(){return{}},mounted:function(){console.log("### "+this.text+" ready!")}},ut=ht,dt=(i("37a2"),Object(A["a"])(ut,ot,lt,!1,null,null,null));dt.options.__file="CustomDragElement.vue";var ct=dt.exports,gt=[{x:0,y:0,w:2,h:2,i:"0",resizable:!0,draggable:!0},{x:2,y:0,w:2,h:4,i:"1",resizable:null,draggable:null},{x:4,y:0,w:2,h:5,i:"2",resizable:!1,draggable:!1},{x:6,y:0,w:2,h:3,i:"3",resizable:!1,draggable:!1},{x:8,y:0,w:2,h:3,i:"4",resizable:!1,draggable:!1},{x:10,y:0,w:2,h:3,i:"5",resizable:!1,draggable:!1},{x:0,y:5,w:2,h:5,i:"6",resizable:!1,draggable:!1},{x:2,y:5,w:2,h:5,i:"7",resizable:!1,draggable:!1},{x:4,y:5,w:2,h:5,i:"8",resizable:!1,draggable:!1},{x:6,y:4,w:2,h:4,i:"9",resizable:!1,draggable:!1},{x:8,y:4,w:2,h:4,i:"10",resizable:!1,draggable:!1},{x:10,y:4,w:2,h:4,i:"11",resizable:!1,draggable:!1},{x:0,y:10,w:2,h:5,i:"12",resizable:!1,draggable:!1},{x:2,y:10,w:2,h:5,i:"13",resizable:!1,draggable:!1},{x:4,y:8,w:2,h:4,i:"14",resizable:!1,draggable:!1},{x:6,y:8,w:2,h:4,i:"15",resizable:!1,draggable:!1},{x:8,y:10,w:2,h:5,i:"16",resizable:!1,draggable:!1},{x:10,y:4,w:2,h:2,i:"17",resizable:!1,draggable:!1},{x:0,y:9,w:2,h:3,i:"18",resizable:!1,draggable:!1},{x:2,y:6,w:2,h:2,i:"19",resizable:!1,draggable:!1}],ft={name:"app",components:{GridLayout:tt,GridItem:Y,TestElement:at,CustomDragElement:ct},data:function(){return{layout:JSON.parse(JSON.stringify(gt)),layout2:JSON.parse(JSON.stringify(gt)),draggable:!0,resizable:!0,mirrored:!1,responsive:!0,rowHeight:30,colNum:12,index:0}},mounted:function(){this.index=this.layout.length},methods:{clicked:function(){window.alert("CLICK!")},increaseWidth:function(){var t=document.getElementById("content").offsetWidth;t+=20,document.getElementById("content").style.width=t+"px"},decreaseWidth:function(){var t=document.getElementById("content").offsetWidth;t-=20,document.getElementById("content").style.width=t+"px"},removeItem:function(t){this.layout.splice(this.layout.indexOf(t),1)},addItem:function(){var t={x:0,y:0,w:2,h:2,i:this.index+"",whatever:"bbb"};this.index++,this.layout.push(t)},move:function(t,e,i){console.log("MOVE i="+t+", X="+e+", Y="+i)},resize:function(t,e,i,n,r){console.log("RESIZE i="+t+", H="+e+", W="+i+", H(px)="+n+", W(px)="+r)},moved:function(t,e,i){console.log("### MOVED i="+t+", X="+e+", Y="+i)},resized:function(t,e,i,n,r){console.log("### RESIZED i="+t+", H="+e+", W="+i+", H(px)="+n+", W(px)="+r)},changeDirection:function(){var t=S(),e="";e="rtl"===t?"ltr":"rtl",E(e)}}},pt=ft,mt=(i("034f"),i("5c64"),Object(A["a"])(pt,r,s,!1,null,null,null));mt.options.__file="App.vue";var vt=mt.exports;new n["a"]({render:function(t){return t(vt)}}).$mount("#app")},"5c64":function(t,e,i){"use strict";var n=i("49ab"),r=i.n(n);r.a},"5ed4":function(t,e,i){"use strict";var n=i("67dd"),r=i.n(n);r.a},"5fc7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"",""])},"67dd":function(t,e,i){var n=i("f2e8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("517c2041",n,!0,{sourceMap:!1,shadowMode:!1})},"80c9":function(t,e,i){var n=i("1e88");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("57e1d761",n,!0,{sourceMap:!1,shadowMode:!1})},8581:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"\n.vue-draggable-handle{position:absolute;width:20px;height:20px;top:0;left:0;background:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>\") no-repeat;background-position:100% 100%;padding:0 8px 8px 0;background-repeat:no-repeat;background-origin:content-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer\n}",""])},"86e2":function(t,e,i){var n=i("f0ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("eae99dc6",n,!0,{sourceMap:!1,shadowMode:!1})},"9e01":function(t,e,i){"use strict";var n=i("86e2"),r=i.n(n);r.a},e279:function(t,e,i){"use strict";var n=i("80c9"),r=i.n(n);r.a},ed79:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"\n#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50\n}",""])},f0ed:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"",""])},f2e8:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'\n.vue-grid-item{-webkit-transition:all .2s ease;transition:all .2s ease;-webkit-transition-property:left,top,right;transition-property:left,top,right\n}\n.vue-grid-item.no-touch{-ms-touch-action:none;touch-action:none\n}\n.vue-grid-item.cssTransforms{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;left:0;right:auto\n}\n.vue-grid-item.cssTransforms.render-rtl{left:auto;right:0\n}\n.vue-grid-item.resizing{opacity:.6;z-index:3\n}\n.vue-grid-item.vue-draggable-dragging{-webkit-transition:none;transition:none;z-index:3\n}\n.vue-grid-item.vue-grid-placeholder{background:red;opacity:.2;-webkit-transition-duration:.1s;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none\n}\n.vue-grid-item>.vue-resizable-handle{position:absolute;width:20px;height:20px;bottom:0;right:0;background:url("data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYiIGhlaWdodD0iNiI+PHBhdGggZD0iTTYgNkgwVjQuMmg0LjJWMEg2djZ6IiBvcGFjaXR5PSIuMzAyIi8+PC9zdmc+");background-position:100% 100%;padding:0 3px 3px 0;background-repeat:no-repeat;background-origin:content-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:se-resize\n}\n.vue-grid-item>.vue-rtl-resizable-handle{bottom:0;left:0;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoMTJ2MTJILTF6Ii8+PGc+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InVuZGVmaW5lZCIgc3Ryb2tlLWxpbmVqb2luPSJ1bmRlZmluZWQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGQ9Ik0xNDQuODIxLTM4LjM5M2wtMjAuMzU3LTMxLjc4NSIvPjxwYXRoIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InVuZGVmaW5lZCIgc3Ryb2tlLWxpbmVqb2luPSJ1bmRlZmluZWQiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgZD0iTS45NDctLjAxOHY5LjEyNU0tLjY1NiA5aDEwLjczIi8+PC9nPjwvc3ZnPg==);background-position:0 100%;padding-left:3px;background-repeat:no-repeat;background-origin:content-box;cursor:sw-resize;right:auto\n}\n.vue-grid-item.disable-userselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}',""])}})["default"];
//# sourceMappingURL=app.e3857bb8.js.map