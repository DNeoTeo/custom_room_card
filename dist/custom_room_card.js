function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,b=_?_.emptyScript:"",v=f.reactiveElementPolyfillSupport,g=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const r=this.constructor;if(!1===s&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,v?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,S=t=>t,C=w.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+k,P=`<${z}>`,T=document,N=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,G=T.createTreeWalker(T,129);function J(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===U?"!--"===l[1]?n=H:void 0!==l[1]?n=D:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=L):void 0!==l[3]&&(n=L):n===L?">"===l[0]?(n=o??U,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?L:'"'===l[3]?j:I):n===j||n===I?n=L:n===H||n===D?n=U:(n=L,o=void 0);const h=n===L&&t[e+1].startsWith("/>")?" ":"";r+=n===U?i+P:d>=0?(s.push(a),i.slice(0,d)+E+i.slice(d)+k+h):i+k+(-2===d?e:h)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,d]=Z(t,e);if(this.el=X.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=d[r++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),G.nextNode(),a.push({type:2,index:++o});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===z)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===F)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=M(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);G.currentNode=s;let o=G.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=G.nextNode(),r++)}return G.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),M(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=K(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=K(this,s[i+n],e,n),a===F&&(a=this._$AH[n]),r||=!M(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??V)===F)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;let at=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(N(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y},ht=(t=ct,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const ft=1,_t=t=>(...e)=>({_$litDirective$:t,values:e});let bt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const vt="important",gt=" !"+vt,mt=_t(class extends bt{constructor(t){if(super(t),t.type!==ft||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(gt);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?vt:""):i[t]=s}}return F}}),yt=_t(class extends bt{constructor(t){if(super(t),t.type!==ft||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return F}}),xt={left:50,top:50,width:"200px",height:"auto",z_index:2},$t="custom-room-card",wt={light:"mdi:lightbulb",switch:"mdi:toggle-switch",fan:"mdi:fan",climate:"mdi:thermostat",cover:"mdi:window-shutter",lock:"mdi:lock",media_player:"mdi:cast",sensor:"mdi:eye",binary_sensor:"mdi:checkbox-blank-circle",camera:"mdi:video",vacuum:"mdi:robot-vacuum",input_boolean:"mdi:toggle-switch-outline",automation:"mdi:robot",script:"mdi:script-text",scene:"mdi:palette",person:"mdi:account",weather:"mdi:weather-partly-cloudy",alarm_control_panel:"mdi:shield-home",water_heater:"mdi:water-boiler",humidifier:"mdi:air-humidifier"},St={width:60,height:60,show_label:!0,show_state:!1,left:50,top:50,tap_action:{action:"toggle"},hold_action:{action:"more-info"}},Ct=n`
  :host {
    --room-card-radius: var(--ha-card-border-radius, 12px);
    --room-card-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
    --btn-size: 60px;
    --btn-bg: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.08);
    --btn-bg-active: rgba(var(--rgb-primary-color, 33, 150, 243), 0.2);
    --btn-icon-color: var(--primary-text-color, #212121);
    --btn-icon-active: var(--primary-color, #2196f3);
    --btn-label-color: var(--secondary-text-color, #727272);
    --btn-label-font: system-ui;
    /* Global font family for all text */
    --global-font-family: system-ui;
    /* Title styling */
    --title-font-family: var(--global-font-family);
    --title-font-size: 1.2em;
    --title-text-color: var(--primary-text-color);
    /* Button label styling */
    --btn-label-font-family: var(--global-font-family);
    --btn-label-font-size: 10px;
    --btn-label-text-color: var(--secondary-text-color, #727272);
    /* Button state styling */
    --btn-state-font-family: var(--global-font-family);
    --btn-state-font-size: 9px;
    --btn-state-text-color: var(--secondary-text-color, #727272);
    display: block;
  }

  ha-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--room-card-radius);
    box-shadow: var(--room-card-shadow);
  }

  /* ── Room container ──────────────────────────────────── */
  .room-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
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
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    font-weight: 600;
    color: var(--title-text-color);
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
    border-radius: calc(12px * var(--card-scale, 1));
    background: var(--btn-bg);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    padding: calc(6px * var(--card-scale, 1));
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
    --mdc-icon-size: calc(24px * var(--card-scale, 1));
    color: var(--btn-icon-color);
    transition: color 0.2s ease;
  }

  .entity-btn .btn-label {
    margin-top: 2px;
    font-family: var(--btn-label-font-family);
    font-size: calc(var(--btn-label-font-size) * var(--card-scale, 1));
    color: var(--btn-label-text-color);
    text-align: center;
    line-height: 1.2;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .entity-btn .btn-state {
    font-family: var(--btn-state-font-family);
    font-size: calc(var(--btn-state-font-size) * var(--card-scale, 1));
    color: var(--btn-state-text-color);
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
      border-radius: calc(10px * var(--card-scale, 1));
    }
    .room-title {
      top: 8px;
      left: 10px;
    }
  }
`,At=n`
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
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 10px 12px;
    padding-right: 44px;
  }

  .entity-row > ha-entity-picker {
    width: 100%;
  }

  .entity-row > .remove-btn {
    position: absolute;
    top: 8px;
    right: 6px;
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
  .remove-btn,
  .cancel-btn {
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

  .cancel-btn {
    width: auto;
    border-radius: 6px;
    padding: 0 12px;
    color: var(--primary-text-color);
    background: var(--secondary-background-color, #f5f5f5);
  }

  .remove-btn {
    background: transparent;
    color: var(--error-color, #db4437);
  }

  .remove-btn:hover {
    background: rgba(var(--rgb-error-color, 219, 68, 55), 0.1);
  }

  .entity-extra-row {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 6px;
  }

  .entity-extra-row ha-textfield {
    flex: 1;
    min-width: 0;
  }

  .entity-extra-row ha-icon-picker {
    flex: 1;
    min-width: 0;
  }

  .color-picker {
    width: 40px;
    min-width: 40px;
    height: 40px;
    margin-top: 10px;
    padding: 2px;
    cursor: pointer;
    border: 1px solid var(--divider-color, #ddd);
    border-radius: 6px;
    background: var(--card-background-color, white);
  }

  .native-layout-info {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: var(--secondary-text-color);
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

  .card-picker {
    margin: 8px 0;
    padding: 12px;
    border: 1px solid var(--divider-color, #ddd);
    border-radius: 8px;
  }

  hui-card-element-editor,
  hui-card-picker {
    display: block;
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

`;function Et(t,e){return e?.attributes?.icon?e.attributes.icon:function(t){const e=function(t){return t.split(".")[0]}(t);return wt[e]??"mdi:help-circle"}(t)}function kt(t,e,i){if(i)switch(i.action){case"toggle":t.callService("homeassistant","toggle",{},{entity_id:e});break;case"more-info":!function(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});document.querySelector("home-assistant")?.dispatchEvent(e)}(e);break;case"call-service":if(i.service){const[s,o]=i.service.split(".");t.callService(s,o,i.service_data??{},{entity_id:e})}break;case"navigate":i.navigation_path&&(window.history.pushState(null,"",i.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"url":i.url_path&&window.open(i.url_path,"_blank")}}function zt(t){return JSON.parse(JSON.stringify(t))}window.customCards=window.customCards||[],window.customCards.push({type:$t,name:"Custom Room Card",description:"Adaptive room layout card with positioned entity buttons and nested Lovelace cards.",preview:!0,documentationURL:"https://github.com/your-user/custom-room-card"}),console.info("%c CUSTOM-ROOM-CARD %c v1.0.0 ","color: white; background: #2196f3; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #2196f3; background: #e3f2fd; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");let Pt=class extends at{constructor(){super(...arguments),this._nestedCards=new Map,this._cardScale=1,this._holdTriggered=!1}connectedCallback(){super.connectedCallback(),this._setupResizeObserver()}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._observedContainer=void 0}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={show_title:!0,...t},this._nestedCards=new Map}getCardSize(){return 6}static getConfigElement(){return document.createElement("custom-room-card-editor")}static getStubConfig(){return{title:"My Room",entities:[]}}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;return(this._config?.entities??[]).some(t=>e.states[t.entity]!==this.hass.states[t.entity])}updated(t){if(super.updated(t),!this._observedContainer){const t=this.shadowRoot?.querySelector(".room-container");t&&this._resizeObserver&&(this._resizeObserver.observe(t),this._observedContainer=t)}t.has("_config")&&this._config?.nested_cards?.length&&this._createNestedCards(),t.has("hass")&&this._nestedCards.forEach(t=>{t.hass=this.hass})}render(){if(!this._config||!this.hass)return q`<ha-card>Loading…</ha-card>`;const t={"--card-scale":String(this._cardScale)};this._config.global_font_family&&(t["--global-font-family"]=this._config.global_font_family),this._config.title_style&&(this._config.title_style.font_size&&(t["--title-font-size"]=this._config.title_style.font_size*this._cardScale+"px"),this._config.title_style.text_color&&(t["--title-text-color"]=this._config.title_style.text_color)),this._config.button_label_style&&(this._config.button_label_style.font_size&&(t["--btn-label-font-size"]=`${this._config.button_label_style.font_size}px`),this._config.button_label_style.text_color&&(t["--btn-label-text-color"]=this._config.button_label_style.text_color)),this._config.button_state_style&&(this._config.button_state_style.font_size&&(t["--btn-state-font-size"]=`${this._config.button_state_style.font_size}px`),this._config.button_state_style.text_color&&(t["--btn-state-text-color"]=this._config.button_state_style.text_color));const e=this._config.card_styles??{};return q`
      <ha-card style=${mt(e)}>
        <div class=${yt({"room-container":!0})} style=${mt(t)}>
          <!-- Content layer -->
          <div class="room-content">
            <!-- Title overlay -->
            ${this._config.show_title&&this._config.title?q`<div class="room-title">${this._config.title}</div>`:V}

            <!-- Entity buttons -->
            ${(this._config.entities??[]).map(t=>this._renderEntityButton(t))}

            <!-- Nested cards -->
            ${(this._config.nested_cards??[]).map((t,e)=>this._renderNestedCard(e))}

          </div>
        </div>
      </ha-card>
    `}_renderEntityButton(t){const e=function(t){return{...St,...t}}(t),i=this.hass.states[e.entity],s=function(t){if(!t)return!1;const e=t.state;return"off"!==e&&"unavailable"!==e&&"unknown"!==e&&"idle"!==e&&"closed"!==e&&"locked"!==e&&"disarmed"!==e}(i),o=!i||"unavailable"===i.state,r=e.icon??Et(e.entity,i),n=function(t,e){return t.label?t.label:e?.attributes?.friendly_name?e.attributes.friendly_name:t.entity}(e,i),a={"entity-btn":!0,active:s,unavailable:o},l=this._cardScale,d={left:`${e.left}%`,top:`${e.top}%`,width:(e.width??60)*l+"px",height:(e.height??60)*l+"px",transform:"translate(-50%, -50%)",...e.styles??{}};return e.font_size&&(d["--btn-label-font-size"]=`${e.font_size}px`,d["--btn-state-font-size"]=`${e.font_size}px`),q`
      <button
        class=${yt(a)}
        style=${mt(d)}
        @pointerdown=${t=>this._onPointerDown(t,e)}
        @pointerup=${()=>this._onPointerUp(e)}
        @pointercancel=${()=>this._cancelHold()}
        @contextmenu=${t=>t.preventDefault()}
        title=${n}
      >
        <ha-icon .icon=${r}></ha-icon>
        ${!1!==e.show_label?q`<span class="btn-label">${n}</span>`:V}
        ${e.show_state&&i?q`<span class="btn-state">${this.hass.formatEntityState(i)}</span>`:V}
      </button>
    `}_renderNestedCard(t){const e=this._config.nested_cards[t],i={...xt,...e},s={left:`${i.left}%`,top:`${i.top}%`,width:this._scaleCssSize(i.width,"200px"),height:this._scaleCssSize(i.height,"auto"),transform:"translate(-50%, -50%)","z-index":String(i.z_index??2),...i.border_radius?{"border-radius":i.border_radius,overflow:"hidden"}:{}};return i.styles&&Object.assign(s,i.styles),q`
      <div class="nested-card-wrapper"
           style=${mt(s)}
           id="nested-${t}">
      </div>
    `}async _createNestedCards(){if(this._config.nested_cards){await this.updateComplete;for(let t=0;t<this._config.nested_cards.length;t++){const e=this._config.nested_cards[t],i=this.shadowRoot?.querySelector(`#nested-${t}`);if(i){i.innerHTML="";try{const s=await this._createCardElement(e.card);s&&(s.hass=this.hass,i.appendChild(s),this._nestedCards.set(t,s))}catch(e){console.error(`[custom-room-card] Failed to create nested card ${t}:`,e),i.innerHTML='<div style="color:var(--error-color);padding:8px;">Error loading card</div>'}}}}}async _createCardElement(t){const e=await(window.loadCardHelpers?.());if(e?.createCardElement){return e.createCardElement(t)}const i=t.type.startsWith("custom:")?t.type.substring(7):`hui-${t.type}-card`,s=document.createElement(i);return s.setConfig(t),s}_onPointerDown(t,e){this._holdTriggered=!1,this._holdTimer=setTimeout(()=>{this._holdTriggered=!0,e.hold_action&&kt(this.hass,e.entity,e.hold_action),this._addRipple(t)},500)}_onPointerUp(t){this._cancelHold(),this._holdTriggered||kt(this.hass,t.entity,t.tap_action??{action:"toggle"})}_cancelHold(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_addRipple(t){const e=t.target.closest(".entity-btn");if(!e)return;const i=e.getBoundingClientRect(),s=Math.max(i.width,i.height),o=document.createElement("span");o.classList.add("ripple"),o.style.width=o.style.height=`${s}px`,o.style.left=t.clientX-i.left-s/2+"px",o.style.top=t.clientY-i.top-s/2+"px",e.appendChild(o),o.addEventListener("animationend",()=>o.remove())}_setupResizeObserver(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width;if(t<=0)continue;const i=600,s=Math.max(.3,Math.min(2,t/i));Math.abs(s-this._cardScale)>.005&&(this._cardScale=s)}}))}_scaleCssSize(t,e){const i=t||e;if("auto"===i||"none"===i||"inherit"===i)return i;if(i.endsWith("%"))return i;const s=i.match(/^([\d.]+)\s*px$/i);return s?parseFloat(s[1])*this._cardScale+"px":/^[\d.]+$/.test(i)?parseFloat(i)*this._cardScale+"px":i}};Pt.styles=Ct,t([pt({attribute:!1})],Pt.prototype,"hass",void 0),t([ut()],Pt.prototype,"_config",void 0),t([ut()],Pt.prototype,"_nestedCards",void 0),t([ut()],Pt.prototype,"_cardScale",void 0),Pt=t([dt($t)],Pt);const Tt=[{label:"System Default",value:"system-ui"},{label:"Roboto (Home Assistant)",value:"Roboto, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Helvetica",value:"Helvetica, Arial, sans-serif"},{label:"Segoe UI",value:"'Segoe UI', sans-serif"},{label:"Tahoma",value:"Tahoma, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Comic Sans MS",value:'"Comic Sans MS", cursive'},{label:"Georgia",value:"Georgia, serif"},{label:"Palatino",value:'"Palatino Linotype", serif'},{label:"Garamond",value:"Garamond, serif"},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Verdana",value:"Verdana, Geneva, sans-serif"},{label:"Impact",value:"Impact, sans-serif"},{label:"Lucida Console",value:'"Lucida Console", monospace'},{label:"Lucida Handwriting",value:'"Lucida Handwriting", cursive'},{label:"Serif",value:"serif"},{label:"Sans-Serif",value:"sans-serif"},{label:"Monospace",value:"monospace"},{label:"Cursive",value:"cursive"},{label:"Fantasy",value:"fantasy"},{label:"UI Sans-Serif",value:"ui-sans-serif"},{label:"UI Serif",value:"ui-serif"},{label:"UI Monospace",value:"ui-monospace"}];let Nt=class extends at{constructor(){super(...arguments),this._showNestedCardPicker=!1,this._dragIndex=-1,this._dragItemType="entity"}setConfig(t){this._config=zt(t)}render(){return this._config&&this.hass?q`
      <div class="editor-container">
        <!-- General settings -->
        ${this._renderGeneralSection()}
        <!-- Text styling section -->
        ${this._renderTextStyleSection()}
        <!-- Entity buttons -->
        ${this._renderEntitiesSection()}
        <!-- Nested cards -->
        ${this._renderNestedCardsSection()}
        <!-- Position preview -->
        ${this._renderPreview()}
      </div>
    `:q`<div>Loading editor…</div>`}_renderGeneralSection(){return q`
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
          <ha-select
            label="Global Font Family"
            .value=${this._config.global_font_family??"system-ui"}
            @value-changed=${t=>this._updateConfig("global_font_family",t.detail.value||"system-ui")}
          >
            ${Tt.map(t=>q`<mwc-list-item value=${t.value}>${t.label}</mwc-list-item>`)}
          </ha-select>
        </div>
        <p class="native-layout-info">
          La largeur et la hauteur de la carte sont gérées par Home Assistant. Le canevas s'adapte automatiquement pour le placement des éléments.
        </p>
      </div>
    `}_renderTextStyleSection(){const t=this._config.title_style??{},e=this._config.button_label_style??{},i=this._config.button_state_style??{};return q`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:format-text"></ha-icon>
          Text Styling
        </div>

        <!-- Title styling -->
        <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--divider-color, #e0e0e0);">
          <h3 style="margin: 0 0 12px 0; color: var(--primary-text-color); font-size: 0.95em;">Title</h3>
          <div class="form-row">
            <ha-textfield
              label="Font Size (px)"
              type="number"
              .value=${t.font_size?.toString()??""}
              @input=${t=>{const e=t.target.value;this._updateTextStyle("title_style","font_size",e?Number(e):void 0)}}
            ></ha-textfield>
            <ha-textfield
              label="Text Color"
              .value=${t.text_color??""}
              @input=${t=>this._updateTextStyle("title_style","text_color",t.target.value||void 0)}
            ></ha-textfield>
            <input
              class="color-picker"
              type="color"
              aria-label="Pick title color"
              .value=${this._colorPickerValue(t.text_color)}
              @input=${t=>this._updateTextStyle("title_style","text_color",t.target.value)}
            />
          </div>
        </div>

        <!-- Button label styling -->
        <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--divider-color, #e0e0e0);">
          <h3 style="margin: 0 0 12px 0; color: var(--primary-text-color); font-size: 0.95em;">Button Label</h3>
          <div class="form-row">
            <ha-textfield
              label="Font Size (px)"
              type="number"
              .value=${e.font_size?.toString()??""}
              @input=${t=>{const e=t.target.value;this._updateTextStyle("button_label_style","font_size",e?Number(e):void 0)}}
            ></ha-textfield>
            <input
              class="color-picker"
              type="color"
              aria-label="Pick button label color"
              .value=${this._colorPickerValue(e.text_color)}
              @input=${t=>this._updateTextStyle("button_label_style","text_color",t.target.value)}
            />
            <ha-textfield
              label="Text Color"
              .value=${e.text_color??""}
              @input=${t=>this._updateTextStyle("button_label_style","text_color",t.target.value||void 0)}
            ></ha-textfield>
          </div>
        </div>

        <!-- Button state styling -->
        <div>
          <h3 style="margin: 0 0 12px 0; color: var(--primary-text-color); font-size: 0.95em;">Button State</h3>
          <div class="form-row">
            <ha-textfield
              label="Font Size (px)"
              type="number"
              .value=${i.font_size?.toString()??""}
              @input=${t=>{const e=t.target.value;this._updateTextStyle("button_state_style","font_size",e?Number(e):void 0)}}
            ></ha-textfield>
            <ha-textfield
              label="Text Color"
              .value=${i.text_color??""}
              @input=${t=>this._updateTextStyle("button_state_style","text_color",t.target.value||void 0)}
            ></ha-textfield>
            <input
              class="color-picker"
              type="color"
              aria-label="Pick button state color"
              .value=${this._colorPickerValue(i.text_color)}
              @input=${t=>this._updateTextStyle("button_state_style","text_color",t.target.value)}
            />
          </div>
        </div>
      </div>
    `}_renderEntitiesSection(){const t=this._config.entities??[];return q`
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
    `}_renderEntityRow(t,e){return q`
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity??""}
          allow-custom-entity
          @value-changed=${t=>this._updateEntity(e,"entity",t.detail.value)}
        ></ha-entity-picker>

        <button
          class="remove-btn"
          @click=${()=>this._removeEntity(e)}
          title="Remove"
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </button>

        <div class="entity-extra-row">
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

        <div class="entity-extra-row">
          <ha-icon-picker
            label="Icon"
            .value=${t.icon??""}
            @value-changed=${t=>this._updateEntity(e,"icon",t.detail.value||void 0)}
          ></ha-icon-picker>

          <ha-textfield
            label="Label"
            .value=${t.label??""}
            @input=${t=>this._updateEntity(e,"label",t.target.value||void 0)}
          ></ha-textfield>
        </div>

        <div class="entity-extra-row">
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

          <ha-textfield
            label="Font (px)"
            type="number"
            min="6"
            max="48"
            .value=${t.font_size?.toString()??"10"}
            @input=${t=>this._updateEntity(e,"font_size",Number(t.target.value)||void 0)}
          ></ha-textfield>
        </div>

      </div>
    `}_renderNestedCardsSection(){const t=this._config.nested_cards??[];return q`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:cards-outline"></ha-icon>
          Nested Cards
        </div>

        <div class="nested-cards-list">
          ${t.map((t,e)=>this._renderNestedCardRow(t,e))}
        </div>

        ${this._showNestedCardPicker?q`
              <div class="card-picker">
                <hui-card-picker
                  .hass=${this.hass}
                  .lovelace=${this.lovelace??{views:[]}}
                  @config-changed=${this._addNestedCardFromPicker}
                ></hui-card-picker>
                <button class="cancel-btn" @click=${()=>this._showNestedCardPicker=!1}>
                  Cancel
                </button>
              </div>
            `:V}

        <button class="add-btn" @click=${()=>this._showNestedCardPicker=!0} title="Add nested card">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `}_renderNestedCardRow(t,e){const i=t.card?.type??"";return q`
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

        <hui-card-element-editor
          .hass=${this.hass}
          .lovelace=${this.lovelace??{views:[]}}
          .value=${t.card}
          @config-changed=${t=>this._updateNestedCard(e,"card",t.detail.config)}
        ></hui-card-element-editor>

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

        </details>
      </div>
    `}_renderPreview(){const t=this._config.entities??[],e=this._config.nested_cards??[];return 0===t.length&&0===e.length?q`${V}`:q`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:map-marker"></ha-icon>
          Position Preview
        </div>
        <div class="preview-box"
             @click=${t=>this._onPreviewClick(t)}>
          <!-- Entity dots (blue) -->
          ${t.map((t,e)=>q`
              <div
                class="preview-dot entity-dot"
                style=${mt({left:`${t.left??50}%`,top:`${t.top??50}%`})}
                draggable="true"
                @dragstart=${t=>this._onDotDragStart(t,e,"entity")}
                @dragend=${t=>this._onDotDragEnd(t,e,"entity")}
              >
                <span class="dot-label">${t.label||t.entity||`E#${e+1}`}</span>
              </div>
            `)}
          <!-- Nested card dots (orange rectangles) -->
          ${e.map((t,e)=>q`
              <div
                class="preview-dot card-dot"
                style=${mt({left:`${t.left??50}%`,top:`${t.top??50}%`})}
                draggable="true"
                @dragstart=${t=>this._onDotDragStart(t,e,"card")}
                @dragend=${t=>this._onDotDragEnd(t,e,"card")}
              >
                <span class="dot-label">${t.label||t.card?.type||`C#${e+1}`}</span>
              </div>
            `)}
        </div>
      </div>
    `}_addEntity(){const t=[...this._config.entities??[]];t.push({entity:"",left:St.left,top:St.top}),this._updateConfig("entities",t)}_removeEntity(t){const e=[...this._config.entities??[]];e.splice(t,1),this._updateConfig("entities",e)}_updateEntity(t,e,i){const s=zt(this._config.entities??[]);s[t]&&(s[t][e]=i,this._updateConfig("entities",s))}_updateTextStyle(t,e,i){const s=zt(this._config[t]??{});void 0===i||""===i?delete s[e]:s[e]=i;const o=0===Object.keys(s).length;this._updateConfig(t,o?void 0:s)}_colorPickerValue(t){return/^#[0-9a-f]{6}$/i.test(t??"")?t:"#000000"}_addNestedCardFromPicker(t){const e=t.detail?.config;if(!e?.type)return;const i=[...this._config.nested_cards??[]];i.push({card:e,left:xt.left,top:xt.top,width:xt.width,height:xt.height}),this._showNestedCardPicker=!1,this._updateConfig("nested_cards",i)}_removeNestedCard(t){const e=[...this._config.nested_cards??[]];e.splice(t,1),this._updateConfig("nested_cards",e)}_updateNestedCard(t,e,i){const s=zt(this._config.nested_cards??[]);s[t]&&(s[t][e]=i,this._updateConfig("nested_cards",s))}_updateConfig(t,e){this._config={...this._config,[t]:e},this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:this._config}});this.dispatchEvent(t)}_onDotDragStart(t,e,i){this._dragIndex=e,this._dragItemType=i,t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",`${i}:${e}`))}_onDotDragEnd(t,e,i){const s=this.shadowRoot?.querySelector(".preview-box");if(!s)return;const o=s.getBoundingClientRect(),r=Math.round(Math.min(100,Math.max(0,(t.clientX-o.left)/o.width*100))),n=Math.round(Math.min(100,Math.max(0,(t.clientY-o.top)/o.height*100)));"entity"===i?(this._updateEntity(e,"left",r),this._updateEntity(e,"top",n)):(this._updateNestedCard(e,"left",r),this._updateNestedCard(e,"top",n)),this._dragIndex=-1}_onPreviewClick(t){this._dragIndex>=0&&this._dragItemType}};Nt.styles=At,t([pt({attribute:!1})],Nt.prototype,"hass",void 0),t([pt({attribute:!1})],Nt.prototype,"lovelace",void 0),t([ut()],Nt.prototype,"_config",void 0),t([ut()],Nt.prototype,"_showNestedCardPicker",void 0),Nt=t([dt("custom-room-card-editor")],Nt);export{Pt as CustomRoomCard,Nt as CustomRoomCardEditor};
