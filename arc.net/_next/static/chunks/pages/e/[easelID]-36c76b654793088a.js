(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{15267:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/e/[easelID]",function(){return n(4559)}])},597:function(e,t,n){var i=n(34155);n(91479);var r=n(67294),s=r&&"object"==typeof r&&"default"in r?r:{default:r};function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=void 0!==i&&i.env&&!0,isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function StyleSheet(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,r=t.optimizeForSpeed,s=void 0===r?o:r;invariant$1(isString(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",invariant$1("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var e,t=StyleSheet.prototype;return t.setOptimizeForSpeed=function(e){invariant$1("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),invariant$1(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(invariant$1(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(invariant$1(isString(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];invariant$1(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];invariant$1(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&invariant$1(isString(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i},_defineProperties(StyleSheet.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e&&_defineProperties(StyleSheet,e),StyleSheet}();function invariant$1(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var stringHash=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},a={};function computeId(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return a[i]||(a[i]="jsx-"+stringHash(e+"-"+n)),a[i]}function computeSelector(e,t){var n=e+t;return a[n]||(a[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),a[n]}var l=function(){function StyleSheetRegistry(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,r=t.optimizeForSpeed,s=void 0!==r&&r;this._sheet=i||new u({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var e=StyleSheetRegistry.prototype;return e.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var s=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[i]=s,this._instancesCounts[i]=1},e.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},e.update=function(e,t){this.add(t),this.remove(e)},e.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},e.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},e.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},e.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var r=computeId(i,n);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return computeSelector(r,e)}):[computeSelector(r,t)]}}return{styleId:computeId(i),rules:Array.isArray(t)?t:[t]}},e.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},StyleSheetRegistry}(),c=r.createContext(null);c.displayName="StyleSheetContext";var h=s.default.useInsertionEffect||s.default.useLayoutEffect,d=new l;function JSXStyle(e){var t=d||r.useContext(c);return t&&h(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}JSXStyle.dynamic=function(e){return e.map(function(e){return computeId(e[0],e[1])}).join(" ")},t.style=JSXStyle},5379:function(e,t,n){"use strict";e.exports=n(597).style},4559:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return f}});var i=n(85893),r=n(5379),s=n.n(r),o=n(9008),u=n.n(o),a=n(11163),l=n(2962),c=n(67294),h=n(58869),d=n(96920),f=!0;t.default=e=>{(0,a.useRouter)();let{url:t,ogURL:n,easelID:r,ogTitle:o}=e,{isArc:f}=(0,h.bN)(),[p,_]=(0,c.useState)();return(0,c.useEffect)(()=>{var e,t;_(!!(null===(t=window.webkit)||void 0===t?void 0:null===(e=t.messageHandlers)||void 0===e?void 0:e.MobileTabKitFirestore))},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u(),{children:void 0!==f&&(0,i.jsx)("script",{defer:!0,"event-page_type":"easel","event-is_arc":f,"data-domain":"arc.net",src:"/js/arcnet-script-no-outbound.js",className:"jsx-355407975ce6bf69"},"analytics")}),(0,i.jsx)(s(),{id:"355407975ce6bf69",children:"body{background-image:none;min-height:100%;margin:0;font-family:-apple-system,BlinkMacSystemFont,Inter,Roboto,Helvetica,Arial,sans-serif;color:black;line-height:1.5em;background-color:#fefdfe;text-rendering:optimizeSpeed;word-wrap:break-word;-webkit-font-smoothing:subpixel-antialiased}"}),(0,i.jsx)(l.PB,{title:o,noindex:!0,description:" ",canonical:"https://".concat(t,"/e/").concat(r),openGraph:{url:"https://".concat(t,"/e/").concat(r),title:o,description:" ",images:[{url:n}]}}),void 0===p?(0,i.jsx)(d.Gu,{}):p?(0,i.jsx)(d.gx,{easelID:r}):(0,i.jsx)(d.WL,{easelID:r})]})}},91479:function(){}},function(e){e.O(0,[774,888,179],function(){return e(e.s=15267)}),_N_E=e.O()}]);