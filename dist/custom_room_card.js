function t(t,e,i,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",b=g.reactiveElementPolyfillSupport,m=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!d(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const s=o.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,i,r=!1,o){if(void 0!==t){const s=this.constructor;if(!1===r&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,b?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,C=w.trustedTypes,k=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+S,P=`<${N}>`,T=document,z=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,j=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Y=new WeakMap,J=T.createTreeWalker(T,129);function G(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,d,c=-1,l=0;for(;l<i.length&&(n.lastIndex=l,d=n.exec(i),null!==d);)l=n.lastIndex,n===U?"!--"===d[1]?n=H:void 0!==d[1]?n=D:void 0!==d[2]?(I.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=j):void 0!==d[3]&&(n=j):n===j?">"===d[0]?(n=o??U,c=-1):void 0===d[1]?c=-2:(c=n.lastIndex-d[2].length,a=d[1],n=void 0===d[3]?j:'"'===d[3]?B:L):n===B||n===L?n=j:n===H||n===D?n=U:(n=j,o=void 0);const h=n===j&&t[e+1].startsWith("/>")?" ":"";s+=n===U?i+P:c>=0?(r.push(a),i.slice(0,c)+E+i.slice(c)+S+h):i+S+(-2===c?e:h)}return[G(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const n=t.length-1,a=this.parts,[d,c]=Z(t,e);if(this.el=X.createElement(d,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=c[s++],i=r.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?rt:tt}),r.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(I.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],z()),J.nextNode(),a.push({type:2,index:++o});r.append(t[e],z())}}}else if(8===r.nodeType)if(r.data===N)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,r){if(e===q)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const s=M(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=F(t,o._$AS(t,e.values),o,r)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);J.currentNode=r;let o=J.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(o=J.nextNode(),s++)}return J.currentNode=T,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),M(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new K(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new X(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Q(this.O(z()),this.O(z()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=F(this,t,e,0),s=!M(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const r=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=F(this,r[i+n],e,n),a===q&&(a=this._$AH[n]),s||=!M(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}s&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class rt extends tt{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??V)===q)return;const i=this._$AH,r=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new Q(e.insertBefore(z(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const dt=nt.litElementPolyfillSupport;dt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=lt,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const gt=1,ft=t=>(...e)=>({_$litDirective$:t,values:e});let _t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const bt="important",mt=" !"+bt,vt=ft(class extends _t{constructor(t){if(super(t),t.type!==gt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(mt);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?bt:""):i[t]=r}}return q}}),yt=ft(class extends _t{constructor(t){if(super(t),t.type!==gt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return q}}),$t={left:50,top:50,width:"200px",height:"auto",z_index:2,hide_card_border:!1},xt="custom-room-card",wt={light:"mdi:lightbulb",switch:"mdi:toggle-switch",fan:"mdi:fan",climate:"mdi:thermostat",cover:"mdi:window-shutter",lock:"mdi:lock",media_player:"mdi:cast",sensor:"mdi:eye",binary_sensor:"mdi:checkbox-blank-circle",camera:"mdi:video",vacuum:"mdi:robot-vacuum",input_boolean:"mdi:toggle-switch-outline",automation:"mdi:robot",script:"mdi:script-text",scene:"mdi:palette",person:"mdi:account",weather:"mdi:weather-partly-cloudy",alarm_control_panel:"mdi:shield-home",water_heater:"mdi:water-boiler",humidifier:"mdi:air-humidifier"},At={width:60,height:60,show_label:!0,show_state:!1,left:50,top:50,tap_action:{action:"toggle"},hold_action:{action:"more-info"}},Ct=n`
  :host {
    --room-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --room-card-radius: var(--ha-card-border-radius, 12px);
    --room-card-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
    --btn-size: 60px;
    --btn-bg: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.08);
    --btn-bg-active: rgba(var(--rgb-primary-color, 33, 150, 243), 0.2);
    --btn-icon-color: var(--primary-text-color, #212121);
    --btn-icon-active: var(--primary-color, #2196f3);
    --btn-label-color: var(--secondary-text-color, #727272);
    --btn-label-size: 10px;
    display: block;
  }

  ha-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--room-card-radius);
    box-shadow: var(--room-card-shadow);
    background: var(--room-card-bg);
  }

  /* ── Room container ──────────────────────────────────── */
  .room-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .room-container.aspect-ratio {
    height: 0;
  }

  .room-container.fixed-height {
    height: var(--card-height, 300px);
  }

  /* ── Background ──────────────────────────────────────── */
  .room-bg {
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  /* ── Content layer ───────────────────────────────────── */
  .room-content {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  /* ── Title overlay ───────────────────────────────────── */
  .room-title {
    position: absolute;
    top: 12px;
    left: 16px;
    z-index: 2;
    font-size: 1.2em;
    font-weight: 600;
    color: var(--primary-text-color);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }

  /* ── Entity button ───────────────────────────────────── */
  .entity-btn {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    background: var(--btn-bg);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    padding: 6px;
    transition: transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease;
    z-index: 3;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    outline: none;
  }

  .entity-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  }

  .entity-btn:active {
    transform: scale(0.95);
  }

  .entity-btn.active {
    background: var(--btn-bg-active);
  }

  .entity-btn.active ha-icon {
    color: var(--btn-icon-active);
  }

  .entity-btn.unavailable {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .entity-btn ha-icon {
    --mdc-icon-size: 24px;
    color: var(--btn-icon-color);
    transition: color 0.2s ease;
  }

  .entity-btn .btn-label {
    margin-top: 2px;
    font-size: var(--btn-label-size);
    color: var(--btn-label-color);
    text-align: center;
    line-height: 1.2;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .entity-btn .btn-state {
    font-size: 9px;
    color: var(--btn-label-color);
    opacity: 0.8;
    text-align: center;
    line-height: 1.1;
  }

  /* ── Nested card ─────────────────────────────────────── */
  .nested-card-wrapper {
    position: absolute;
    z-index: 2;
    overflow: hidden;
    border-radius: var(--ha-card-border-radius, 12px);
  }

  .nested-card-wrapper > * {
    width: 100%;
    height: 100%;
  }

  .nested-card-wrapper.no-border > ha-card,
  .nested-card-wrapper.no-border > * {
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
  }

  /* ── Ripple effect ───────────────────────────────────── */
  @keyframes ripple {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  .entity-btn .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.3);
    transform: scale(0);
    animation: ripple 0.5s ease-out;
    pointer-events: none;
  }

  /* ── Responsive ──────────────────────────────────────── */
  @media (max-width: 600px) {
    .entity-btn {
      border-radius: 10px;
    }
    .entity-btn ha-icon {
      --mdc-icon-size: 20px;
    }
    .entity-btn .btn-label {
      font-size: 9px;
    }
  }
`,kt=n`
  :host {
    display: block;
  }

  .editor-container {
    padding: 16px;
  }

  .editor-section {
    margin-bottom: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    padding-bottom: 16px;
  }

  .editor-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .section-title {
    font-size: 1em;
    font-weight: 600;
    color: var(--primary-text-color);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .section-title ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;
  }

  .form-row > * {
    flex: 1;
    min-width: 140px;
  }

  ha-textfield,
  ha-select {
    width: 100%;
  }

  .entity-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .entity-row {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 8px 12px;
  }

  .entity-row ha-entity-picker {
    flex: 1;
  }

  .entity-position {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .entity-position ha-textfield {
    width: 70px;
  }

  .add-btn,
  .remove-btn {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .add-btn {
    background: var(--primary-color);
    color: white;
    margin-top: 8px;
  }

  .add-btn:hover {
    opacity: 0.85;
  }

  .remove-btn {
    background: transparent;
    color: var(--error-color, #db4437);
  }

  .remove-btn:hover {
    background: rgba(var(--rgb-error-color, 219, 68, 55), 0.1);
  }

  .preview-box {
    position: relative;
    width: 100%;
    height: 200px;
    border: 2px dashed var(--divider-color, #ccc);
    border-radius: 8px;
    overflow: hidden;
    background: var(--secondary-background-color, #f5f5f5);
    margin-top: 8px;
  }

  .preview-dot {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: grab;
  }

  .preview-dot.entity-dot {
    background: var(--primary-color, #2196f3);
  }

  .preview-dot.card-dot {
    background: var(--warning-color, #ff9800);
    border-radius: 3px;
    width: 20px;
    height: 14px;
  }

  .preview-dot .dot-label {
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 9px;
    white-space: nowrap;
    color: var(--primary-text-color);
    background: rgba(255, 255, 255, 0.85);
    padding: 1px 4px;
    border-radius: 3px;
  }

  /* ── Nested card editor rows ───────────────────────── */
  .nested-cards-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .nested-card-row {
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 12px;
    border-left: 3px solid var(--warning-color, #ff9800);
  }

  .nested-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .nested-card-header ha-icon {
    --mdc-icon-size: 18px;
    color: var(--warning-color, #ff9800);
  }

  .nested-card-title {
    flex: 1;
    font-weight: 500;
    font-size: 0.95em;
    color: var(--primary-text-color);
  }

  .type-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }

  .type-chip {
    cursor: pointer;
    border: 1px solid var(--divider-color, #ddd);
    border-radius: 16px;
    padding: 3px 10px;
    font-size: 11px;
    background: var(--card-background-color, white);
    color: var(--primary-text-color);
    transition: all 0.15s;
  }

  .type-chip:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .type-chip.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }

  .yaml-editor {
    width: 100%;
    min-height: 80px;
    font-family: 'Roboto Mono', 'Consolas', monospace;
    font-size: 12px;
    padding: 8px;
    border: 1px solid var(--divider-color, #ddd);
    border-radius: 6px;
    background: var(--card-background-color, white);
    color: var(--primary-text-color);
    resize: vertical;
    box-sizing: border-box;
    line-height: 1.5;
  }

  .yaml-editor:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .advanced-options {
    margin-top: 8px;
  }

  .advanced-options summary {
    cursor: pointer;
    font-size: 12px;
    color: var(--secondary-text-color);
    user-select: none;
    margin-bottom: 8px;
  }

  .advanced-options summary:hover {
    color: var(--primary-text-color);
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
  }

  .checkbox-row input[type="checkbox"] {
    accent-color: var(--primary-color);
  }
`;function Et(t,e){return e?.attributes?.icon?e.attributes.icon:function(t){const e=function(t){return t.split(".")[0]}(t);return wt[e]??"mdi:help-circle"}(t)}function St(t,e,i){if(i)switch(i.action){case"toggle":t.callService("homeassistant","toggle",{},{entity_id:e});break;case"more-info":!function(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});document.querySelector("home-assistant")?.dispatchEvent(e)}(e);break;case"call-service":if(i.service){const[r,o]=i.service.split(".");t.callService(r,o,i.service_data??{},{entity_id:e})}break;case"navigate":i.navigation_path&&(window.history.pushState(null,"",i.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"url":i.url_path&&window.open(i.url_path,"_blank")}}function Nt(t){return JSON.parse(JSON.stringify(t))}window.customCards=window.customCards||[],window.customCards.push({type:xt,name:"Custom Room Card",description:"Adaptive room layout card with positioned entity buttons and custom backgrounds.",preview:!0,documentationURL:"https://github.com/your-user/custom-room-card"}),console.info("%c CUSTOM-ROOM-CARD %c v1.0.0 ","color: white; background: #2196f3; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #2196f3; background: #e3f2fd; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");let Pt=class extends at{constructor(){super(...arguments),this._nestedCards=new Map,this._holdTriggered=!1}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={show_title:!0,background_size:"cover",background_position:"center",background_opacity:1,aspect_ratio:"16/9",...t},this._nestedCards=new Map}getCardSize(){return this._config?.card_height?Math.ceil(this._config.card_height/50):6}static getConfigElement(){return document.createElement("custom-room-card-editor")}static getStubConfig(){return{title:"My Room",background_image:"",aspect_ratio:"16/9",entities:[]}}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;return(this._config?.entities??[]).some(t=>e.states[t.entity]!==this.hass.states[t.entity])}updated(t){super.updated(t),t.has("_config")&&this._config?.nested_cards?.length&&this._createNestedCards(),t.has("hass")&&this._nestedCards.forEach(t=>{t.hass=this.hass})}render(){if(!this._config||!this.hass)return W`<ha-card>Loading…</ha-card>`;const t={"room-container":!0,"aspect-ratio":!this._config.card_height,"fixed-height":!!this._config.card_height},e={};this._config.card_height?e["--card-height"]=`${this._config.card_height}px`:this._config.aspect_ratio&&(e["padding-bottom"]=this._aspectRatioPadding(this._config.aspect_ratio));const i={};this._config.background_image&&(i["background-image"]=`url('${this._config.background_image}')`),this._config.background_color&&(i["background-color"]=this._config.background_color),this._config.background_size&&(i["background-size"]=this._config.background_size),this._config.background_position&&(i["background-position"]=this._config.background_position),void 0!==this._config.background_opacity&&(i.opacity=String(this._config.background_opacity));const r=this._config.card_styles??{};return W`
      <ha-card style=${vt(r)}>
        <div class=${yt(t)} style=${vt(e)}>
          <!-- Background -->
          <div class="room-bg" style=${vt(i)}></div>

          <!-- Content layer -->
          <div class="room-content">
            <!-- Title overlay -->
            ${this._config.show_title&&this._config.title?W`<div class="room-title">${this._config.title}</div>`:V}

            <!-- Entity buttons -->
            ${(this._config.entities??[]).map(t=>this._renderEntityButton(t))}

            <!-- Nested cards -->
            ${(this._config.nested_cards??[]).map((t,e)=>this._renderNestedCard(e))}
          </div>
        </div>
      </ha-card>
    `}_renderEntityButton(t){const e=function(t){return{...At,...t}}(t),i=this.hass.states[e.entity],r=function(t){if(!t)return!1;const e=t.state;return"off"!==e&&"unavailable"!==e&&"unknown"!==e&&"idle"!==e&&"closed"!==e&&"locked"!==e&&"disarmed"!==e}(i),o=!i||"unavailable"===i.state,s=e.icon??Et(e.entity,i),n=function(t,e){return t.label?t.label:e?.attributes?.friendly_name?e.attributes.friendly_name:t.entity}(e,i),a={"entity-btn":!0,active:r,unavailable:o},d={left:`${e.left}%`,top:`${e.top}%`,width:`${e.width??60}px`,height:`${e.height??60}px`,transform:"translate(-50%, -50%)",...e.styles??{}};return W`
      <button
        class=${yt(a)}
        style=${vt(d)}
        @pointerdown=${t=>this._onPointerDown(t,e)}
        @pointerup=${()=>this._onPointerUp(e)}
        @pointercancel=${()=>this._cancelHold()}
        @contextmenu=${t=>t.preventDefault()}
        title=${n}
      >
        <ha-icon .icon=${s}></ha-icon>
        ${!1!==e.show_label?W`<span class="btn-label">${n}</span>`:V}
        ${e.show_state&&i?W`<span class="btn-state">${this.hass.formatEntityState(i)}</span>`:V}
      </button>
    `}_renderNestedCard(t){const e=this._config.nested_cards[t],i={...$t,...e},r={left:`${i.left}%`,top:`${i.top}%`,width:i.width??"200px",height:i.height??"auto",transform:"translate(-50%, -50%)","z-index":String(i.z_index??2),...i.border_radius?{"border-radius":i.border_radius,overflow:"hidden"}:{},...i.styles??{}};return W`
      <div class="nested-card-wrapper ${i.hide_card_border?"no-border":""}"
           style=${vt(r)}
           id="nested-${t}">
      </div>
    `}async _createNestedCards(){if(this._config.nested_cards){await this.updateComplete;for(let t=0;t<this._config.nested_cards.length;t++){const e=this._config.nested_cards[t],i=this.shadowRoot?.querySelector(`#nested-${t}`);if(i){i.innerHTML="";try{const r=await this._createCardElement(e.card);r&&(r.hass=this.hass,i.appendChild(r),this._nestedCards.set(t,r))}catch(e){console.error(`[custom-room-card] Failed to create nested card ${t}:`,e),i.innerHTML='<div style="color:var(--error-color);padding:8px;">Error loading card</div>'}}}}}async _createCardElement(t){const e=await(window.loadCardHelpers?.());if(e?.createCardElement){return e.createCardElement(t)}const i=t.type.startsWith("custom:")?t.type.substring(7):`hui-${t.type}-card`,r=document.createElement(i);return r.setConfig(t),r}_onPointerDown(t,e){this._holdTriggered=!1,this._holdTimer=setTimeout(()=>{this._holdTriggered=!0,e.hold_action&&St(this.hass,e.entity,e.hold_action),this._addRipple(t)},500)}_onPointerUp(t){this._cancelHold(),this._holdTriggered||St(this.hass,t.entity,t.tap_action??{action:"toggle"})}_cancelHold(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_addRipple(t){const e=t.target.closest(".entity-btn");if(!e)return;const i=e.getBoundingClientRect(),r=Math.max(i.width,i.height),o=document.createElement("span");o.classList.add("ripple"),o.style.width=o.style.height=`${r}px`,o.style.left=t.clientX-i.left-r/2+"px",o.style.top=t.clientY-i.top-r/2+"px",e.appendChild(o),o.addEventListener("animationend",()=>o.remove())}_aspectRatioPadding(t){const e=t.split("/").map(Number);return 2===e.length&&e[0]>0&&e[1]>0?e[1]/e[0]*100+"%":"56.25%"}};Pt.styles=Ct,t([pt({attribute:!1})],Pt.prototype,"hass",void 0),t([ut()],Pt.prototype,"_config",void 0),t([ut()],Pt.prototype,"_nestedCards",void 0),Pt=t([ct(xt)],Pt);let Tt=class extends at{constructor(){super(...arguments),this._dragIndex=-1,this._dragItemType="entity"}setConfig(t){this._config=Nt(t)}render(){return this._config&&this.hass?W`
      <div class="editor-container">
        <!-- General settings -->
        ${this._renderGeneralSection()}
        <!-- Background settings -->
        ${this._renderBackgroundSection()}
        <!-- Entity buttons -->
        ${this._renderEntitiesSection()}
        <!-- Nested cards -->
        ${this._renderNestedCardsSection()}
        <!-- Position preview -->
        ${this._renderPreview()}
      </div>
    `:W`<div>Loading editor…</div>`}_renderGeneralSection(){return W`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:cog"></ha-icon>
          General
        </div>
        <div class="form-row">
          <ha-textfield
            label="Title"
            .value=${this._config.title??""}
            @input=${t=>this._updateConfig("title",t.target.value)}
          ></ha-textfield>
        </div>
        <div class="form-row">
          <ha-textfield
            label="Aspect Ratio (e.g. 16/9)"
            .value=${this._config.aspect_ratio??"16/9"}
            @input=${t=>this._updateConfig("aspect_ratio",t.target.value)}
          ></ha-textfield>
          <ha-textfield
            label="Card Height (px, overrides ratio)"
            type="number"
            .value=${this._config.card_height?.toString()??""}
            @input=${t=>{const e=t.target.value;this._updateConfig("card_height",e?Number(e):void 0)}}
          ></ha-textfield>
        </div>
      </div>
    `}_renderBackgroundSection(){return W`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:image"></ha-icon>
          Background
        </div>
        <div class="form-row">
          <ha-textfield
            label="Image URL (/local/... or https://...)"
            .value=${this._config.background_image??""}
            @input=${t=>this._updateConfig("background_image",t.target.value)}
          ></ha-textfield>
        </div>
        <div class="form-row">
          <ha-textfield
            label="Background Color"
            .value=${this._config.background_color??""}
            @input=${t=>this._updateConfig("background_color",t.target.value)}
          ></ha-textfield>
          <ha-textfield
            label="Opacity (0-1)"
            type="number"
            min="0"
            max="1"
            step="0.1"
            .value=${this._config.background_opacity?.toString()??"1"}
            @input=${t=>this._updateConfig("background_opacity",Number(t.target.value))}
          ></ha-textfield>
        </div>
        <div class="form-row">
          <ha-textfield
            label="Size (cover, contain, 100%)"
            .value=${this._config.background_size??"cover"}
            @input=${t=>this._updateConfig("background_size",t.target.value)}
          ></ha-textfield>
          <ha-textfield
            label="Position (center, top left…)"
            .value=${this._config.background_position??"center"}
            @input=${t=>this._updateConfig("background_position",t.target.value)}
          ></ha-textfield>
        </div>
      </div>
    `}_renderEntitiesSection(){const t=this._config.entities??[];return W`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
          Entity Buttons
        </div>

        <div class="entity-list">
          ${t.map((t,e)=>this._renderEntityRow(t,e))}
        </div>

        <button class="add-btn" @click=${this._addEntity} title="Add entity button">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `}_renderEntityRow(t,e){return W`
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity??""}
          allow-custom-entity
          @value-changed=${t=>this._updateEntity(e,"entity",t.detail.value)}
        ></ha-entity-picker>

        <div class="entity-position">
          <ha-textfield
            label="Left %"
            type="number"
            min="0"
            max="100"
            .value=${t.left?.toString()??"50"}
            @input=${t=>this._updateEntity(e,"left",Number(t.target.value))}
          ></ha-textfield>
          <ha-textfield
            label="Top %"
            type="number"
            min="0"
            max="100"
            .value=${t.top?.toString()??"50"}
            @input=${t=>this._updateEntity(e,"top",Number(t.target.value))}
          ></ha-textfield>
        </div>

        <ha-textfield
          label="Icon"
          .value=${t.icon??""}
          @input=${t=>this._updateEntity(e,"icon",t.target.value||void 0)}
        ></ha-textfield>

        <ha-textfield
          label="Label"
          .value=${t.label??""}
          @input=${t=>this._updateEntity(e,"label",t.target.value||void 0)}
        ></ha-textfield>

        <ha-textfield
          label="W (px)"
          type="number"
          .value=${t.width?.toString()??"60"}
          @input=${t=>this._updateEntity(e,"width",Number(t.target.value)||60)}
        ></ha-textfield>

        <ha-textfield
          label="H (px)"
          type="number"
          .value=${t.height?.toString()??"60"}
          @input=${t=>this._updateEntity(e,"height",Number(t.target.value)||60)}
        ></ha-textfield>

        <button
          class="remove-btn"
          @click=${()=>this._removeEntity(e)}
          title="Remove"
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
    `}_renderNestedCardsSection(){const t=this._config.nested_cards??[];return W`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:cards-outline"></ha-icon>
          Nested Cards
        </div>

        <div class="nested-cards-list">
          ${t.map((t,e)=>this._renderNestedCardRow(t,e))}
        </div>

        <button class="add-btn" @click=${this._addNestedCard} title="Add nested card">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `}_renderNestedCardRow(t,e){const i=t.card?.type??"",r=this._cardConfigToYaml(t.card);return W`
      <div class="nested-card-row">
        <div class="nested-card-header">
          <ha-icon icon="mdi:card-outline"></ha-icon>
          <span class="nested-card-title">
            ${t.label||i||`Card #${e+1}`}
          </span>
          <button
            class="remove-btn"
            @click=${()=>this._removeNestedCard(e)}
            title="Remove card"
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>

        <div class="form-row">
          <ha-textfield
            label="Label (editor only)"
            .value=${t.label??""}
            @input=${t=>this._updateNestedCard(e,"label",t.target.value||void 0)}
          ></ha-textfield>
        </div>

        <!-- Card type selector -->
        <div class="form-row">
          <ha-textfield
            label="Card Type (e.g. button, sensor, custom:button-card)"
            .value=${i}
            @input=${i=>{const r=i.target.value,o={...t.card,type:r};this._updateNestedCard(e,"card",o)}}
          ></ha-textfield>
        </div>

        <!-- Quick type chips -->
        <div class="type-chips">
          ${["button","sensor","gauge","tile","entity","thermostat","weather-forecast","markdown"].map(r=>W`
              <button
                class="type-chip ${i===r?"active":""}"
                @click=${()=>{const i={...t.card,type:r};this._updateNestedCard(e,"card",i)}}
              >${r}</button>
            `)}
        </div>

        <!-- Card YAML configuration -->
        <div class="form-row">
          <textarea
            class="yaml-editor"
            rows="5"
            placeholder="Card YAML config (without 'type:')&#10;e.g.:&#10;entity: sensor.temperature&#10;name: My Sensor"
            .value=${r}
            @change=${t=>{const r=t.target.value,o=this._yamlToCardConfig(r,i);this._updateNestedCard(e,"card",o)}}
          ></textarea>
        </div>

        <!-- Position & Size -->
        <div class="form-row">
          <ha-textfield
            label="Left %"
            type="number"
            min="0"
            max="100"
            .value=${t.left?.toString()??"50"}
            @input=${t=>this._updateNestedCard(e,"left",Number(t.target.value))}
          ></ha-textfield>
          <ha-textfield
            label="Top %"
            type="number"
            min="0"
            max="100"
            .value=${t.top?.toString()??"50"}
            @input=${t=>this._updateNestedCard(e,"top",Number(t.target.value))}
          ></ha-textfield>
          <ha-textfield
            label="Width (px, %, auto)"
            .value=${t.width??"200px"}
            @input=${t=>this._updateNestedCard(e,"width",t.target.value||"200px")}
          ></ha-textfield>
          <ha-textfield
            label="Height (px, %, auto)"
            .value=${t.height??"auto"}
            @input=${t=>this._updateNestedCard(e,"height",t.target.value||"auto")}
          ></ha-textfield>
        </div>

        <!-- Advanced options (collapsed by default) -->
        <details class="advanced-options">
          <summary>Advanced options</summary>
          <div class="form-row">
            <ha-textfield
              label="Z-Index"
              type="number"
              .value=${t.z_index?.toString()??"2"}
              @input=${t=>this._updateNestedCard(e,"z_index",Number(t.target.value)||2)}
            ></ha-textfield>
            <ha-textfield
              label="Border Radius (CSS)"
              .value=${t.border_radius??""}
              @input=${t=>this._updateNestedCard(e,"border_radius",t.target.value||void 0)}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <label class="checkbox-row">
              <input
                type="checkbox"
                .checked=${t.hide_card_border??!1}
                @change=${t=>this._updateNestedCard(e,"hide_card_border",t.target.checked)}
              />
              Hide card border/shadow (transparent background)
            </label>
          </div>
        </details>
      </div>
    `}_renderPreview(){const t=this._config.entities??[],e=this._config.nested_cards??[];if(0===t.length&&0===e.length)return W`${V}`;const i={};return this._config.background_image&&(i["background-image"]=`url('${this._config.background_image}')`,i["background-size"]=this._config.background_size??"cover",i["background-position"]=this._config.background_position??"center",i["background-repeat"]="no-repeat",void 0!==this._config.background_opacity&&(i.opacity=String(this._config.background_opacity))),this._config.background_color&&(i["background-color"]=this._config.background_color),W`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:map-marker"></ha-icon>
          Position Preview
        </div>
        <div class="preview-box" style=${vt(i)}
             @click=${t=>this._onPreviewClick(t)}>
          <!-- Entity dots (blue) -->
          ${t.map((t,e)=>W`
              <div
                class="preview-dot entity-dot"
                style=${vt({left:`${t.left??50}%`,top:`${t.top??50}%`})}
                draggable="true"
                @dragstart=${t=>this._onDotDragStart(t,e,"entity")}
                @dragend=${t=>this._onDotDragEnd(t,e,"entity")}
              >
                <span class="dot-label">${t.label||t.entity||`E#${e+1}`}</span>
              </div>
            `)}
          <!-- Nested card dots (orange rectangles) -->
          ${e.map((t,e)=>W`
              <div
                class="preview-dot card-dot"
                style=${vt({left:`${t.left??50}%`,top:`${t.top??50}%`})}
                draggable="true"
                @dragstart=${t=>this._onDotDragStart(t,e,"card")}
                @dragend=${t=>this._onDotDragEnd(t,e,"card")}
              >
                <span class="dot-label">${t.label||t.card?.type||`C#${e+1}`}</span>
              </div>
            `)}
        </div>
      </div>
    `}_addEntity(){const t=[...this._config.entities??[]];t.push({entity:"",left:At.left,top:At.top}),this._updateConfig("entities",t)}_removeEntity(t){const e=[...this._config.entities??[]];e.splice(t,1),this._updateConfig("entities",e)}_updateEntity(t,e,i){const r=Nt(this._config.entities??[]);r[t]&&(r[t][e]=i,this._updateConfig("entities",r))}_addNestedCard(){const t=[...this._config.nested_cards??[]];t.push({card:{type:"button"},left:$t.left,top:$t.top,width:$t.width,height:$t.height}),this._updateConfig("nested_cards",t)}_removeNestedCard(t){const e=[...this._config.nested_cards??[]];e.splice(t,1),this._updateConfig("nested_cards",e)}_updateNestedCard(t,e,i){const r=Nt(this._config.nested_cards??[]);r[t]&&(r[t][e]=i,this._updateConfig("nested_cards",r))}_cardConfigToYaml(t){if(!t)return"";const e=[];for(const[i,r]of Object.entries(t))if("type"!==i&&null!=r)if("object"!=typeof r||Array.isArray(r))Array.isArray(r)?e.push(`${i}: ${JSON.stringify(r)}`):e.push(`${i}: ${r}`);else{e.push(`${i}:`);for(const[t,i]of Object.entries(r))e.push(`  ${t}: ${JSON.stringify(i)}`)}return e.join("\n")}_yamlToCardConfig(t,e){const i={type:e},r=t.split("\n");let o=null,s="";for(const t of r){const e=t.trimEnd();if(!e||e.startsWith("#"))continue;if(e.startsWith("  ")&&null!==o){const t=e.trim().match(/^([^:]+):\s*(.*)$/);t&&(o[t[1].trim()]=this._parseYamlValue(t[2].trim()));continue}const r=e.match(/^([^:]+):\s*(.*)$/);if(r){const t=r[1].trim(),e=r[2].trim();if("type"===t)continue;""===e||void 0===e?(s=t,o={},i[s]=o):(o=null,i[t]=this._parseYamlValue(e))}}return i}_parseYamlValue(t){if("true"===t)return!0;if("false"===t)return!1;if("null"===t||"~"===t)return null;if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch{}return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t.startsWith("'")&&t.endsWith("'")||t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}_updateConfig(t,e){this._config={...this._config,[t]:e},this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:this._config}});this.dispatchEvent(t)}_onDotDragStart(t,e,i){this._dragIndex=e,this._dragItemType=i,t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",`${i}:${e}`))}_onDotDragEnd(t,e,i){const r=this.shadowRoot?.querySelector(".preview-box");if(!r)return;const o=r.getBoundingClientRect(),s=Math.round(Math.min(100,Math.max(0,(t.clientX-o.left)/o.width*100))),n=Math.round(Math.min(100,Math.max(0,(t.clientY-o.top)/o.height*100)));"entity"===i?(this._updateEntity(e,"left",s),this._updateEntity(e,"top",n)):(this._updateNestedCard(e,"left",s),this._updateNestedCard(e,"top",n)),this._dragIndex=-1}_onPreviewClick(t){this._dragIndex>=0&&this._dragItemType}};Tt.styles=kt,t([pt({attribute:!1})],Tt.prototype,"hass",void 0),t([ut()],Tt.prototype,"_config",void 0),Tt=t([ct("custom-room-card-editor")],Tt);export{Pt as CustomRoomCard,Tt as CustomRoomCardEditor};
