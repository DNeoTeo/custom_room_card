function t(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",b=g.reactiveElementPolyfillSupport,m=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=o;const n=s.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const n=this.constructor;if(!1===o&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,b?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,E=w.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,T=`<${P}>`,M=document,R=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,N="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,J=M.createTreeWalker(M,129);function X(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":3===e?"<math>":"",r=z;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(r.lastIndex=l,c=r.exec(i),null!==c);)l=r.lastIndex,r===z?"!--"===c[1]?r=H:void 0!==c[1]?r=D:void 0!==c[2]?(I.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=j):void 0!==c[3]&&(r=j):r===j?">"===c[0]?(r=s??z,d=-1):void 0===c[1]?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?j:'"'===c[3]?B:L):r===B||r===L?r=j:r===H||r===D?r=z:(r=j,s=void 0);const h=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===z?i+T:d>=0?(o.push(a),i.slice(0,d)+C+i.slice(d)+S+h):i+S+(-2===d?e:h)}return[X(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class F{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[c,d]=Z(t,e);if(this.el=F.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=J.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=d[n++],i=o.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(I.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],R()),J.nextNode(),a.push({type:2,index:++s});o.append(t[e],R())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,o){if(e===W)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=K(t,s._$AS(t,e.values),s,o)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??M).importNode(e,!0);J.currentNode=o;let s=J.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(s=J.nextNode(),n++)}return J.currentNode=M,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Y(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new F(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new Q(this.O(R()),this.O(R()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=K(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=K(this,o[i+r],e,r),a===W&&(a=this._$AH[r]),n||=!O(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class ot extends tt{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??V)===W)return;const i=this._$AH,o=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==V&&(i===V||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(F,Q),(w.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new Q(e.insertBefore(R(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=lt,e,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const gt=1,ft=t=>(...e)=>({_$litDirective$:t,values:e});let _t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const bt="important",mt=" !"+bt,vt=ft(class extends _t{constructor(t){if(super(t),t.type!==gt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ft.add(t);const e="string"==typeof o&&o.endsWith(mt);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?bt:""):i[t]=o}}return W}}),yt=ft(class extends _t{constructor(t){if(super(t),t.type!==gt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}}),$t="custom-room-card",xt={light:"mdi:lightbulb",switch:"mdi:toggle-switch",fan:"mdi:fan",climate:"mdi:thermostat",cover:"mdi:window-shutter",lock:"mdi:lock",media_player:"mdi:cast",sensor:"mdi:eye",binary_sensor:"mdi:checkbox-blank-circle",camera:"mdi:video",vacuum:"mdi:robot-vacuum",input_boolean:"mdi:toggle-switch-outline",automation:"mdi:robot",script:"mdi:script-text",scene:"mdi:palette",person:"mdi:account",weather:"mdi:weather-partly-cloudy",alarm_control_panel:"mdi:shield-home",water_heater:"mdi:water-boiler",humidifier:"mdi:air-humidifier"},wt={width:60,height:60,show_label:!0,show_state:!1,left:50,top:50,tap_action:{action:"toggle"},hold_action:{action:"more-info"}},At=r`
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
      border-radius: 10px;
    }
    .entity-btn ha-icon {
      --mdc-icon-size: 20px;
    }
    .entity-btn .btn-label {
      font-size: 9px;
    }
  }
`,Et=r`
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
`;function kt(t,e){return e?.attributes?.icon?e.attributes.icon:function(t){const e=function(t){return t.split(".")[0]}(t);return xt[e]??"mdi:help-circle"}(t)}function Ct(t,e,i){if(i)switch(i.action){case"toggle":t.callService("homeassistant","toggle",{},{entity_id:e});break;case"more-info":!function(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});document.querySelector("home-assistant")?.dispatchEvent(e)}(e);break;case"call-service":if(i.service){const[o,s]=i.service.split(".");t.callService(o,s,i.service_data??{},{entity_id:e})}break;case"navigate":i.navigation_path&&(window.history.pushState(null,"",i.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"url":i.url_path&&window.open(i.url_path,"_blank")}}function St(t){return JSON.parse(JSON.stringify(t))}window.customCards=window.customCards||[],window.customCards.push({type:$t,name:"Custom Room Card",description:"Adaptive room layout card with positioned entity buttons and custom backgrounds.",preview:!0,documentationURL:"https://github.com/your-user/custom-room-card"}),console.info("%c CUSTOM-ROOM-CARD %c v1.0.0 ","color: white; background: #2196f3; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #2196f3; background: #e3f2fd; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");let Pt=class extends at{constructor(){super(...arguments),this._nestedCards=new Map,this._holdTriggered=!1}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={show_title:!0,background_size:"cover",background_position:"center",background_opacity:1,aspect_ratio:"16/9",...t},this._nestedCards=new Map}getCardSize(){return this._config?.card_height?Math.ceil(this._config.card_height/50):6}static getConfigElement(){return document.createElement("custom-room-card-editor")}static getStubConfig(){return{title:"My Room",background_image:"",aspect_ratio:"16/9",entities:[]}}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;return(this._config?.entities??[]).some(t=>e.states[t.entity]!==this.hass.states[t.entity])}updated(t){super.updated(t),t.has("_config")&&this._config?.nested_cards?.length&&this._createNestedCards(),t.has("hass")&&this._nestedCards.forEach(t=>{t.hass=this.hass})}render(){if(!this._config||!this.hass)return q`<ha-card>Loading…</ha-card>`;const t={"room-container":!0,"aspect-ratio":!this._config.card_height,"fixed-height":!!this._config.card_height},e={};this._config.card_height?e["--card-height"]=`${this._config.card_height}px`:this._config.aspect_ratio&&(e["padding-bottom"]=this._aspectRatioPadding(this._config.aspect_ratio));const i={};this._config.background_image&&(i["background-image"]=`url('${this._config.background_image}')`),this._config.background_color&&(i["background-color"]=this._config.background_color),this._config.background_size&&(i["background-size"]=this._config.background_size),this._config.background_position&&(i["background-position"]=this._config.background_position),void 0!==this._config.background_opacity&&(i.opacity=String(this._config.background_opacity));const o=this._config.card_styles??{};return q`
      <ha-card style=${vt(o)}>
        <div class=${yt(t)} style=${vt(e)}>
          <!-- Background -->
          <div class="room-bg" style=${vt(i)}></div>

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
    `}_renderEntityButton(t){const e=function(t){return{...wt,...t}}(t),i=this.hass.states[e.entity],o=function(t){if(!t)return!1;const e=t.state;return"off"!==e&&"unavailable"!==e&&"unknown"!==e&&"idle"!==e&&"closed"!==e&&"locked"!==e&&"disarmed"!==e}(i),s=!i||"unavailable"===i.state,n=e.icon??kt(e.entity,i),r=function(t,e){return t.label?t.label:e?.attributes?.friendly_name?e.attributes.friendly_name:t.entity}(e,i),a={"entity-btn":!0,active:o,unavailable:s},c={left:`${e.left}%`,top:`${e.top}%`,width:`${e.width??60}px`,height:`${e.height??60}px`,transform:"translate(-50%, -50%)",...e.styles??{}};return q`
      <button
        class=${yt(a)}
        style=${vt(c)}
        @pointerdown=${t=>this._onPointerDown(t,e)}
        @pointerup=${()=>this._onPointerUp(e)}
        @pointercancel=${()=>this._cancelHold()}
        @contextmenu=${t=>t.preventDefault()}
        title=${r}
      >
        <ha-icon .icon=${n}></ha-icon>
        ${!1!==e.show_label?q`<span class="btn-label">${r}</span>`:V}
        ${e.show_state&&i?q`<span class="btn-state">${this.hass.formatEntityState(i)}</span>`:V}
      </button>
    `}_renderNestedCard(t){const e=this._config.nested_cards[t],i={left:`${e.left}%`,top:`${e.top}%`,width:e.width??"auto",height:e.height??"auto",transform:"translate(-50%, -50%)"};return q`
      <div class="nested-card-wrapper" style=${vt(i)}
           id="nested-${t}">
      </div>
    `}async _createNestedCards(){if(this._config.nested_cards){await this.updateComplete;for(let t=0;t<this._config.nested_cards.length;t++){const e=this._config.nested_cards[t],i=this.shadowRoot?.querySelector(`#nested-${t}`);if(i){i.innerHTML="";try{const o=await this._createCardElement(e.card);o&&(o.hass=this.hass,i.appendChild(o),this._nestedCards.set(t,o))}catch(e){console.error(`[custom-room-card] Failed to create nested card ${t}:`,e),i.innerHTML='<div style="color:var(--error-color);padding:8px;">Error loading card</div>'}}}}}async _createCardElement(t){const e=await(window.loadCardHelpers?.());if(e?.createCardElement){return e.createCardElement(t)}const i=t.type.startsWith("custom:")?t.type.substring(7):`hui-${t.type}-card`,o=document.createElement(i);return o.setConfig(t),o}_onPointerDown(t,e){this._holdTriggered=!1,this._holdTimer=setTimeout(()=>{this._holdTriggered=!0,e.hold_action&&Ct(this.hass,e.entity,e.hold_action),this._addRipple(t)},500)}_onPointerUp(t){this._cancelHold(),this._holdTriggered||Ct(this.hass,t.entity,t.tap_action??{action:"toggle"})}_cancelHold(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_addRipple(t){const e=t.target.closest(".entity-btn");if(!e)return;const i=e.getBoundingClientRect(),o=Math.max(i.width,i.height),s=document.createElement("span");s.classList.add("ripple"),s.style.width=s.style.height=`${o}px`,s.style.left=t.clientX-i.left-o/2+"px",s.style.top=t.clientY-i.top-o/2+"px",e.appendChild(s),s.addEventListener("animationend",()=>s.remove())}_aspectRatioPadding(t){const e=t.split("/").map(Number);return 2===e.length&&e[0]>0&&e[1]>0?e[1]/e[0]*100+"%":"56.25%"}};Pt.styles=At,t([pt({attribute:!1})],Pt.prototype,"hass",void 0),t([ut()],Pt.prototype,"_config",void 0),t([ut()],Pt.prototype,"_nestedCards",void 0),Pt=t([dt($t)],Pt);let Tt=class extends at{constructor(){super(...arguments),this._dragIndex=-1}setConfig(t){this._config=St(t)}render(){return this._config&&this.hass?q`
      <div class="editor-container">
        <!-- General settings -->
        ${this._renderGeneralSection()}
        <!-- Background settings -->
        ${this._renderBackgroundSection()}
        <!-- Entity buttons -->
        ${this._renderEntitiesSection()}
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
    `}_renderBackgroundSection(){return q`
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
    `}_renderPreview(){const t=this._config.entities??[];if(0===t.length)return q`${V}`;const e={};return this._config.background_image&&(e["background-image"]=`url('${this._config.background_image}')`,e["background-size"]=this._config.background_size??"cover",e["background-position"]=this._config.background_position??"center",e["background-repeat"]="no-repeat",void 0!==this._config.background_opacity&&(e.opacity=String(this._config.background_opacity))),this._config.background_color&&(e["background-color"]=this._config.background_color),q`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:map-marker"></ha-icon>
          Position Preview
        </div>
        <div class="preview-box" style=${vt(e)}
             @click=${t=>this._onPreviewClick(t)}>
          ${t.map((t,e)=>q`
              <div
                class="preview-dot"
                style=${vt({left:`${t.left??50}%`,top:`${t.top??50}%`})}
                draggable="true"
                @dragstart=${t=>this._onDotDragStart(t,e)}
                @dragend=${t=>this._onDotDragEnd(t,e)}
              >
                <span class="dot-label">${t.label||t.entity||`#${e+1}`}</span>
              </div>
            `)}
        </div>
      </div>
    `}_addEntity(){const t=[...this._config.entities??[]];t.push({entity:"",left:wt.left,top:wt.top}),this._updateConfig("entities",t)}_removeEntity(t){const e=[...this._config.entities??[]];e.splice(t,1),this._updateConfig("entities",e)}_updateEntity(t,e,i){const o=St(this._config.entities??[]);o[t]&&(o[t][e]=i,this._updateConfig("entities",o))}_updateConfig(t,e){this._config={...this._config,[t]:e},this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:this._config}});this.dispatchEvent(t)}_onDotDragStart(t,e){this._dragIndex=e,t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",String(e)))}_onDotDragEnd(t,e){const i=this.shadowRoot?.querySelector(".preview-box");if(!i)return;const o=i.getBoundingClientRect(),s=Math.round(Math.min(100,Math.max(0,(t.clientX-o.left)/o.width*100))),n=Math.round(Math.min(100,Math.max(0,(t.clientY-o.top)/o.height*100)));this._updateEntity(e,"left",s),this._updateEntity(e,"top",n),this._dragIndex=-1}_onPreviewClick(t){this._dragIndex}};Tt.styles=Et,t([pt({attribute:!1})],Tt.prototype,"hass",void 0),t([ut()],Tt.prototype,"_config",void 0),Tt=t([dt("custom-room-card-editor")],Tt);export{Pt as CustomRoomCard,Tt as CustomRoomCardEditor};
