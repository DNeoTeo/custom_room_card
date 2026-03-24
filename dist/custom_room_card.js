function t(t,e,i,o){var r,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(s<3?r(a):s>3?r(e,i,a):r(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new s(i,t,o)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:d,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",m=g.reactiveElementPolyfillSupport,b=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!d(t,e),x={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=o;const s=r.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i,o=!1,r){if(void 0!==t){const s=this.constructor;if(!1===o&&(r=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[b("elementProperties")]=new Map,$[b("finalized")]=new Map,m?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,C=t=>t,k=w.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+E,N=`<${z}>`,T=document,M=()=>T.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,L=/>/g,j=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,Y=/"/g,B=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,V=T.createTreeWalker(T,129);function J(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,o=[];let r,s=2===e?"<svg>":3===e?"<math>":"",a=U;for(let e=0;e<i;e++){const i=t[e];let n,d,l=-1,c=0;for(;c<i.length&&(a.lastIndex=c,d=a.exec(i),null!==d);)c=a.lastIndex,a===U?"!--"===d[1]?a=H:void 0!==d[1]?a=L:void 0!==d[2]?(B.test(d[2])&&(r=RegExp("</"+d[2],"g")),a=j):void 0!==d[3]&&(a=j):a===j?">"===d[0]?(a=r??U,l=-1):void 0===d[1]?l=-2:(l=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?j:'"'===d[3]?Y:D):a===Y||a===D?a=j:a===H||a===L?a=U:(a=j,r=void 0);const h=a===j&&t[e+1].startsWith("/>")?" ":"";s+=a===U?i+N:l>=0?(o.push(n),i.slice(0,l)+S+i.slice(l)+E+h):i+E+(-2===l?e:h)}return[J(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Z{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const a=t.length-1,n=this.parts,[d,l]=G(t,e);if(this.el=Z.createElement(d,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=V.nextNode())&&n.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=l[s++],i=o.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?et:"?"===a[1]?it:"@"===a[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:r}),o.removeAttribute(t));if(B.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],M()),V.nextNode(),n.push({type:2,index:++r});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===z)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)n.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,o){if(e===I)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const s=P(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,o)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);V.currentNode=o;let r=V.nextNode(),s=0,a=0,n=i[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new Q(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new rt(r,this,t)),this._$AV.push(e),n=i[++a]}s!==n?.index&&(r=V.nextNode(),s++)}return V.currentNode=T,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),P(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new K(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=C(t).nextSibling;C(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(void 0===r)t=X(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const o=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=X(this,o[i+a],e,a),n===I&&(n=this._$AH[a]),s||=!P(n)||n!==this._$AH[a],n===q?t=q:t!==q&&(t+=(n??"")+r[a+1]),this._$AH[a]=n}s&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class ot extends tt{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===I)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(Z,Q),(w.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;let nt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new Q(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};nt._$litElement$=!0,nt.finalized=!0,at.litElementHydrateSupport?.({LitElement:nt});const dt=at.litElementPolyfillSupport;dt?.({LitElement:nt}),(at.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=ct,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const gt=1,ft=t=>(...e)=>({_$litDirective$:t,values:e});let _t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const mt="important",bt=" !"+mt,vt=ft(class extends _t{constructor(t){if(super(t),t.type!==gt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ft.add(t);const e="string"==typeof o&&o.endsWith(bt);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?mt:""):i[t]=o}}return I}}),yt=ft(class extends _t{constructor(t){if(super(t),t.type!==gt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return I}}),xt={left:50,top:50,width:"200px",height:"auto",z_index:2,hide_card_border:!1},$t="custom-room-card",wt={light:"mdi:lightbulb",switch:"mdi:toggle-switch",fan:"mdi:fan",climate:"mdi:thermostat",cover:"mdi:window-shutter",lock:"mdi:lock",media_player:"mdi:cast",sensor:"mdi:eye",binary_sensor:"mdi:checkbox-blank-circle",camera:"mdi:video",vacuum:"mdi:robot-vacuum",input_boolean:"mdi:toggle-switch-outline",automation:"mdi:robot",script:"mdi:script-text",scene:"mdi:palette",person:"mdi:account",weather:"mdi:weather-partly-cloudy",alarm_control_panel:"mdi:shield-home",water_heater:"mdi:water-boiler",humidifier:"mdi:air-humidifier"},Ct={width:60,height:60,show_label:!0,show_state:!1,left:50,top:50,tap_action:{action:"toggle"},hold_action:{action:"more-info"}},kt=a`
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

  .nested-card-wrapper.no-border > ha-card,
  .nested-card-wrapper.no-border > * {
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
  }

  /* ── Custom YAML card wrapper ──────────────────────────── */
  .custom-yaml-card-wrapper {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    border-radius: var(--ha-card-border-radius, 12px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: auto;
  }

  .custom-yaml-card-wrapper > * {
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
`,At=a`
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
  .upload-btn {
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

  .upload-btn {
    background: var(--primary-color);
    color: white;
    margin-left: 4px;
    flex-shrink: 0;
  }

  .upload-btn:hover {
    opacity: 0.85;
  }

  .upload-btn ha-icon {
    --mdc-icon-size: 18px;
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

  /* ── Responsive info box ──────────────────────────────── */
  .responsive-info {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
    border: 1px solid rgba(var(--rgb-primary-color, 33, 150, 243), 0.25);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 12px;
    color: var(--secondary-text-color);
    line-height: 1.5;
    margin-top: 4px;
  }

  .responsive-info ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .responsive-info strong {
    color: var(--primary-text-color);
  }

  /* ── Custom YAML cards editor ──────────────────────────── */
  .custom-yaml-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 8px;
  }

  .yaml-card-row {
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 12px;
    border-left: 3px solid var(--primary-color);
    position: relative;
  }

  .yaml-card-row .form-row {
    position: relative;
  }

  .yaml-card-row .remove-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    color: var(--error-color, #db4437);
    margin: 0;
  }

  .yaml-editor {
    width: 100%;
    font-family: 'Roboto Mono', 'Courier New', monospace;
    font-size: 12px;
    padding: 10px;
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
    box-shadow: 0 0 0 2px rgba(var(--rgb-primary-color, 33, 150, 243), 0.1);
  }

  /* ── Custom YAML card wrappers ────────────────────────── */
  .custom-yaml-card-wrapper {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;function St(t,e){return e?.attributes?.icon?e.attributes.icon:function(t){const e=function(t){return t.split(".")[0]}(t);return wt[e]??"mdi:help-circle"}(t)}function Et(t,e,i){if(i)switch(i.action){case"toggle":t.callService("homeassistant","toggle",{},{entity_id:e});break;case"more-info":!function(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});document.querySelector("home-assistant")?.dispatchEvent(e)}(e);break;case"call-service":if(i.service){const[o,r]=i.service.split(".");t.callService(o,r,i.service_data??{},{entity_id:e})}break;case"navigate":i.navigation_path&&(window.history.pushState(null,"",i.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"url":i.url_path&&window.open(i.url_path,"_blank")}}function zt(t){return JSON.parse(JSON.stringify(t))}window.customCards=window.customCards||[],window.customCards.push({type:$t,name:"Custom Room Card",description:"Adaptive room layout card with positioned entity buttons and custom backgrounds.",preview:!0,documentationURL:"https://github.com/your-user/custom-room-card"}),console.info("%c CUSTOM-ROOM-CARD %c v1.0.0 ","color: white; background: #2196f3; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #2196f3; background: #e3f2fd; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");let Nt=class extends nt{constructor(){super(...arguments),this._nestedCards=new Map,this._cardScale=1,this._holdTriggered=!1}connectedCallback(){super.connectedCallback(),this._setupResizeObserver()}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._observedContainer=void 0}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={show_title:!0,background_size:"cover",background_position:"center",background_opacity:1,aspect_ratio:"16/9",...t},this._nestedCards=new Map}getCardSize(){return this._config?.card_height?Math.ceil(this._config.card_height/50):6}static getConfigElement(){return document.createElement("custom-room-card-editor")}static getStubConfig(){return{title:"My Room",background_image:"",aspect_ratio:"16/9",entities:[]}}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;return(this._config?.entities??[]).some(t=>e.states[t.entity]!==this.hass.states[t.entity])}updated(t){if(super.updated(t),!this._observedContainer){const t=this.shadowRoot?.querySelector(".room-container");t&&this._resizeObserver&&(this._resizeObserver.observe(t),this._observedContainer=t)}t.has("_config")&&this._config?.nested_cards?.length&&this._createNestedCards(),t.has("_config")&&this._config?.custom_yaml_cards?.length&&this._createCustomYamlCards(),t.has("hass")&&this._nestedCards.forEach(t=>{t.hass=this.hass})}render(){if(!this._config||!this.hass)return W`<ha-card>Loading…</ha-card>`;const t={"room-container":!0,"aspect-ratio":!this._config.card_height,"fixed-height":!!this._config.card_height},e={"--card-scale":String(this._cardScale)};this._config.global_font_family&&(e["--global-font-family"]=this._config.global_font_family),this._config.title_style&&(this._config.title_style.font_size&&(e["--title-font-size"]=this._config.title_style.font_size*this._cardScale+"px"),this._config.title_style.text_color&&(e["--title-text-color"]=this._config.title_style.text_color)),this._config.button_label_style&&(this._config.button_label_style.font_size&&(e["--btn-label-font-size"]=`${this._config.button_label_style.font_size}px`),this._config.button_label_style.text_color&&(e["--btn-label-text-color"]=this._config.button_label_style.text_color)),this._config.button_state_style&&(this._config.button_state_style.font_size&&(e["--btn-state-font-size"]=`${this._config.button_state_style.font_size}px`),this._config.button_state_style.text_color&&(e["--btn-state-text-color"]=this._config.button_state_style.text_color)),this._config.card_height?e["--card-height"]=`${this._config.card_height}px`:this._config.aspect_ratio&&(e["padding-bottom"]=this._aspectRatioPadding(this._config.aspect_ratio));const i={};this._config.background_image&&(i["background-image"]=`url('${this._config.background_image}')`),this._config.background_color&&(i["background-color"]=this._config.background_color),this._config.background_size&&(i["background-size"]=this._config.background_size),this._config.background_position&&(i["background-position"]=this._config.background_position),void 0!==this._config.background_opacity&&(i.opacity=String(this._config.background_opacity));const o=this._config.card_styles??{};return W`
      <ha-card style=${vt(o)}>
        <div class=${yt(t)} style=${vt(e)}>
          <!-- Background -->
          <div class="room-bg" style=${vt(i)}></div>

          <!-- Content layer -->
          <div class="room-content">
            <!-- Title overlay -->
            ${this._config.show_title&&this._config.title?W`<div class="room-title">${this._config.title}</div>`:q}

            <!-- Entity buttons -->
            ${(this._config.entities??[]).map(t=>this._renderEntityButton(t))}

            <!-- Nested cards -->
            ${(this._config.nested_cards??[]).map((t,e)=>this._renderNestedCard(e))}

            <!-- Custom YAML cards -->
            ${(this._config.custom_yaml_cards??[]).map((t,e)=>this._renderCustomYamlCard(e))}
          </div>
        </div>
      </ha-card>
    `}_renderEntityButton(t){const e=function(t){return{...Ct,...t}}(t),i=this.hass.states[e.entity],o=function(t){if(!t)return!1;const e=t.state;return"off"!==e&&"unavailable"!==e&&"unknown"!==e&&"idle"!==e&&"closed"!==e&&"locked"!==e&&"disarmed"!==e}(i),r=!i||"unavailable"===i.state,s=e.icon??St(e.entity,i),a=function(t,e){return t.label?t.label:e?.attributes?.friendly_name?e.attributes.friendly_name:t.entity}(e,i),n={"entity-btn":!0,active:o,unavailable:r},d=this._cardScale,l={left:`${e.left}%`,top:`${e.top}%`,width:(e.width??60)*d+"px",height:(e.height??60)*d+"px",transform:"translate(-50%, -50%)",...e.styles??{}};return e.font_size&&(l["--btn-label-size"]=`${e.font_size}px`),e.button_background_color&&(l["background-color"]=e.button_background_color),e.button_background_image&&(l["background-image"]=`url('${e.button_background_image}')`,l["background-size"]="cover",l["background-position"]="center"),W`
      <button
        class=${yt(n)}
        style=${vt(l)}
        @pointerdown=${t=>this._onPointerDown(t,e)}
        @pointerup=${()=>this._onPointerUp(e)}
        @pointercancel=${()=>this._cancelHold()}
        @contextmenu=${t=>t.preventDefault()}
        title=${a}
      >
        <ha-icon .icon=${s}></ha-icon>
        ${!1!==e.show_label?W`<span class="btn-label">${a}</span>`:q}
        ${e.show_state&&i?W`<span class="btn-state">${this.hass.formatEntityState(i)}</span>`:q}
      </button>
    `}_renderNestedCard(t){const e=this._config.nested_cards[t],i={...xt,...e},o={left:`${i.left}%`,top:`${i.top}%`,width:this._scaleCssSize(i.width,"200px"),height:this._scaleCssSize(i.height,"auto"),transform:"translate(-50%, -50%)","z-index":String(i.z_index??2),...i.border_radius?{"border-radius":i.border_radius,overflow:"hidden"}:{},...i.styles??{}};return W`
      <div class="nested-card-wrapper ${i.hide_card_border?"no-border":""}"
           style=${vt(o)}
           id="nested-${t}">
      </div>
    `}_renderCustomYamlCard(t){return W`
      <div class="custom-yaml-card-wrapper" id="custom-yaml-${t}"></div>
    `}async _createNestedCards(){if(this._config.nested_cards){await this.updateComplete;for(let t=0;t<this._config.nested_cards.length;t++){const e=this._config.nested_cards[t],i=this.shadowRoot?.querySelector(`#nested-${t}`);if(i){i.innerHTML="";try{const o=await this._createCardElement(e.card);o&&(o.hass=this.hass,i.appendChild(o),this._nestedCards.set(t,o))}catch(e){console.error(`[custom-room-card] Failed to create nested card ${t}:`,e),i.innerHTML='<div style="color:var(--error-color);padding:8px;">Error loading card</div>'}}}}}async _createCustomYamlCards(){if(this._config.custom_yaml_cards){await this.updateComplete;for(let t=0;t<this._config.custom_yaml_cards.length;t++){const e=this._config.custom_yaml_cards[t],i=this.shadowRoot?.querySelector(`#custom-yaml-${t}`);if(i){i.innerHTML="";try{const t=this._parseYamlToConfig(e);if(!t||!t.type){i.innerHTML='<div style="color:var(--warning-color);padding:8px;">Invalid card config</div>';continue}const o=await this._createCardElement(t);o&&(o.hass=this.hass,i.appendChild(o))}catch(e){console.error(`[custom-room-card] Failed to create custom YAML card ${t}:`,e),i.innerHTML=`<div style="color:var(--error-color);padding:8px;">Error: ${e.message}</div>`}}}}}_parseYamlToConfig(t){try{const e=t.split("\n"),i={};let o=i;const r=[];for(const t of e){const e=t.trim();if(!e||e.startsWith("#"))continue;const s=t.length-t.trimStart().length,a=Math.floor(s/2);for(;r.length>a;)r.pop();o=r.length>0?r[r.length-1].obj:i;const n=e.match(/^([^:]+):\s*(.*)$/);if(n){const t=n[1].trim(),e=n[2].trim();e&&""!==e?o[t]=this._parseYamlValue(e):(o[t]={},r.push({key:t,obj:o[t]}))}}return i}catch(t){return console.error("Failed to parse YAML:",t),null}}_parseYamlValue(t){if(!t)return t;if("true"===t)return!0;if("false"===t)return!1;if("null"===t||"~"===t)return null;if(/^-?\d+(\.\d+)?$/.test(t))return Number(t);if(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'"))return t.slice(1,-1);if(t.startsWith("[")&&t.endsWith("]"))try{return JSON.parse(t)}catch{return t}if(t.startsWith("{")&&t.endsWith("}"))try{return JSON.parse(t)}catch{return t}return t}async _createCardElement(t){const e=await(window.loadCardHelpers?.());if(e?.createCardElement){return e.createCardElement(t)}const i=t.type.startsWith("custom:")?t.type.substring(7):`hui-${t.type}-card`,o=document.createElement(i);return o.setConfig(t),o}_onPointerDown(t,e){this._holdTriggered=!1,this._holdTimer=setTimeout(()=>{this._holdTriggered=!0,e.hold_action&&Et(this.hass,e.entity,e.hold_action),this._addRipple(t)},500)}_onPointerUp(t){this._cancelHold(),this._holdTriggered||Et(this.hass,t.entity,t.tap_action??{action:"toggle"})}_cancelHold(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_addRipple(t){const e=t.target.closest(".entity-btn");if(!e)return;const i=e.getBoundingClientRect(),o=Math.max(i.width,i.height),r=document.createElement("span");r.classList.add("ripple"),r.style.width=r.style.height=`${o}px`,r.style.left=t.clientX-i.left-o/2+"px",r.style.top=t.clientY-i.top-o/2+"px",e.appendChild(r),r.addEventListener("animationend",()=>r.remove())}_setupResizeObserver(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width;if(t<=0)continue;const i=this._config?.design_width??600,o=Math.max(.3,Math.min(2,t/i));Math.abs(o-this._cardScale)>.005&&(this._cardScale=o)}}))}_scaleCssSize(t,e){const i=t||e;if("auto"===i||"none"===i||"inherit"===i)return i;if(i.endsWith("%"))return i;const o=i.match(/^([\d.]+)\s*px$/i);return o?parseFloat(o[1])*this._cardScale+"px":/^[\d.]+$/.test(i)?parseFloat(i)*this._cardScale+"px":i}_aspectRatioPadding(t){const e=t.split("/").map(Number);return 2===e.length&&e[0]>0&&e[1]>0?e[1]/e[0]*100+"%":"56.25%"}};Nt.styles=kt,t([pt({attribute:!1})],Nt.prototype,"hass",void 0),t([ut()],Nt.prototype,"_config",void 0),t([ut()],Nt.prototype,"_nestedCards",void 0),t([ut()],Nt.prototype,"_cardScale",void 0),Nt=t([lt($t)],Nt);let Tt=class extends nt{constructor(){super(...arguments),this._dragIndex=-1,this._dragItemType="entity"}setConfig(t){this._config=zt(t)}render(){return this._config&&this.hass?W`
      <div class="editor-container">
        <!-- General settings -->
        ${this._renderGeneralSection()}
        <!-- Text styling section -->
        ${this._renderTextStyleSection()}
        <!-- Background settings -->
        ${this._renderBackgroundSection()}
        <!-- Entity buttons -->
        ${this._renderEntitiesSection()}
        <!-- Nested cards -->
        ${this._renderNestedCardsSection()}
        <!-- Custom YAML cards -->
        ${this._renderCustomYamlCardsSection()}
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
          <ha-textfield
            label="Global Font Family"
            .value=${this._config.global_font_family??"system-ui"}
            placeholder="e.g. Arial, Helvetica, serif, monospace"
            @input=${t=>this._updateConfig("global_font_family",t.target.value||"system-ui")}
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
        <div class="form-row">
          <ha-textfield
            label="Design Width (px)"
            type="number"
            min="100"
            max="2000"
            .value=${this._config.design_width?.toString()??"600"}
            @input=${t=>{const e=t.target.value;this._updateConfig("design_width",e?Number(e):600)}}
          ></ha-textfield>
        </div>
        <div class="responsive-info">
          <ha-icon icon="mdi:responsive"></ha-icon>
          <span>
            Responsive scaling active: entity buttons and nested cards scale
            proportionally to the card width relative to the design width
            (<strong>${this._config.design_width??600}px</strong>).
          </span>
        </div>
      </div>
    `}_renderTextStyleSection(){const t=this._config.title_style??{},e=this._config.button_label_style??{},i=this._config.button_state_style??{};return W`
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
          </div>
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
            label="Image Path (/local/... or https://...)"
            placeholder="/local/my_image.jpg"
            .value=${this._config.background_image??""}
            @input=${t=>this._updateConfig("background_image",t.target.value)}
          ></ha-textfield>
          <button 
            class="upload-btn" 
            @click=${()=>this._openImagePathDialog()}
            title="Browse or enter path"
          >
            <ha-icon icon="mdi:folder-open"></ha-icon>
          </button>
        </div>
        <p style="font-size: 0.85em; color: var(--secondary-text-color); margin: 8px 0;">
          <strong>Note:</strong> Upload images to /config/www/ in Home Assistant, then reference them as /local/filename.jpg
        </p>
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

        <!-- Button background styling -->
        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--divider-color, #e0e0e0);">
          <label style="display: block; font-size: 0.85em; color: var(--secondary-text-color); margin-bottom: 8px;">
            Button Background
          </label>
          <div class="entity-extra-row">
            <ha-textfield
              label="Background Color"
              .value=${t.button_background_color??""}
              @input=${t=>this._updateEntity(e,"button_background_color",t.target.value||void 0)}
            ></ha-textfield>
          </div>
          <div class="entity-extra-row">
            <ha-textfield
              label="Background Image URL"
              placeholder="/local/image.jpg or https://..."
              .value=${t.button_background_image??""}
              @input=${t=>this._updateEntity(e,"button_background_image",t.target.value||void 0)}
            ></ha-textfield>
          </div>
        </div>
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
    `}_renderNestedCardRow(t,e){const i=t.card?.type??"",o=this._cardConfigToYaml(t.card);return W`
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
            @input=${i=>{const o=i.target.value,r={...t.card,type:o};this._updateNestedCard(e,"card",r)}}
          ></ha-textfield>
        </div>

        <!-- Quick type chips -->
        <div class="type-chips">
          ${["button","sensor","gauge","tile","entity","thermostat","weather-forecast","markdown"].map(o=>W`
              <button
                class="type-chip ${i===o?"active":""}"
                @click=${()=>{const i={...t.card,type:o};this._updateNestedCard(e,"card",i)}}
              >${o}</button>
            `)}
        </div>

        <!-- Card YAML configuration -->
        <div class="form-row">
          <textarea
            class="yaml-editor"
            rows="5"
            placeholder="Card YAML config (without 'type:')&#10;e.g.:&#10;entity: sensor.temperature&#10;name: My Sensor"
            .value=${o}
            @change=${t=>{const o=t.target.value,r=this._yamlToCardConfig(o,i);this._updateNestedCard(e,"card",r)}}
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
    `}_renderCustomYamlCardsSection(){const t=this._config.custom_yaml_cards??[];return W`
      <div class="editor-section">
        <div class="section-title">
          <ha-icon icon="mdi:code-json"></ha-icon>
          Custom YAML Cards
        </div>

        <p style="font-size: 0.9em; color: var(--secondary-text-color); margin-bottom: 12px;">
          Add custom Lovelace cards by pasting YAML configuration. Each card will be positioned and displayed independently.
        </p>

        <div class="custom-yaml-list">
          ${t.map((t,e)=>this._renderCustomYamlRow(t,e))}
        </div>

        <button class="add-btn" @click=${this._addCustomYamlCard} title="Add custom YAML card">
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `}_renderCustomYamlRow(t,e){return W`
      <div class="yaml-card-row">
        <div class="form-row">
          <textarea
            class="yaml-editor"
            rows="6"
            placeholder="Paste your Lovelace card YAML here&#10;e.g.:&#10;type: custom:mushroom-template-card&#10;entity: light.living_room&#10;primary: Living Room Light"
            .value=${t}
            @change=${t=>{const i=t.target.value;this._updateCustomYamlCard(e,i)}}
          ></textarea>
          <button
            class="remove-btn"
            @click=${()=>this._removeCustomYamlCard(e)}
            title="Remove"
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
      </div>
    `}_renderPreview(){const t=this._config.entities??[],e=this._config.nested_cards??[];if(0===t.length&&0===e.length)return W`${q}`;const i={};return this._config.background_image&&(i["background-image"]=`url('${this._config.background_image}')`,i["background-size"]=this._config.background_size??"cover",i["background-position"]=this._config.background_position??"center",i["background-repeat"]="no-repeat",void 0!==this._config.background_opacity&&(i.opacity=String(this._config.background_opacity))),this._config.background_color&&(i["background-color"]=this._config.background_color),W`
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
    `}_addEntity(){const t=[...this._config.entities??[]];t.push({entity:"",left:Ct.left,top:Ct.top}),this._updateConfig("entities",t)}_removeEntity(t){const e=[...this._config.entities??[]];e.splice(t,1),this._updateConfig("entities",e)}_updateEntity(t,e,i){const o=zt(this._config.entities??[]);o[t]&&(o[t][e]=i,this._updateConfig("entities",o))}_updateTextStyle(t,e,i){const o=zt(this._config[t]??{});void 0===i||""===i?delete o[e]:o[e]=i;const r=0===Object.keys(o).length;this._updateConfig(t,r?void 0:o)}_addNestedCard(){const t=[...this._config.nested_cards??[]];t.push({card:{type:"button"},left:xt.left,top:xt.top,width:xt.width,height:xt.height}),this._updateConfig("nested_cards",t)}_removeNestedCard(t){const e=[...this._config.nested_cards??[]];e.splice(t,1),this._updateConfig("nested_cards",e)}_updateNestedCard(t,e,i){const o=zt(this._config.nested_cards??[]);o[t]&&(o[t][e]=i,this._updateConfig("nested_cards",o))}_openImagePathDialog(){}_addCustomYamlCard(){const t=[...this._config.custom_yaml_cards??[]];t.push(""),this._updateConfig("custom_yaml_cards",t)}_removeCustomYamlCard(t){const e=[...this._config.custom_yaml_cards??[]];e.splice(t,1),this._updateConfig("custom_yaml_cards",e)}_updateCustomYamlCard(t,e){const i=[...this._config.custom_yaml_cards??[]];i[t]&&(i[t]=e,this._updateConfig("custom_yaml_cards",i))}_cardConfigToYaml(t){if(!t)return"";const e=[];for(const[i,o]of Object.entries(t))if("type"!==i&&null!=o)if("object"!=typeof o||Array.isArray(o))Array.isArray(o)?e.push(`${i}: ${JSON.stringify(o)}`):e.push(`${i}: ${o}`);else{e.push(`${i}:`);for(const[t,i]of Object.entries(o))e.push(`  ${t}: ${JSON.stringify(i)}`)}return e.join("\n")}_yamlToCardConfig(t,e){const i={type:e},o=t.split("\n");let r=null,s="";for(const t of o){const e=t.trimEnd();if(!e||e.startsWith("#"))continue;if(e.startsWith("  ")&&null!==r){const t=e.trim().match(/^([^:]+):\s*(.*)$/);t&&(r[t[1].trim()]=this._parseYamlValue(t[2].trim()));continue}const o=e.match(/^([^:]+):\s*(.*)$/);if(o){const t=o[1].trim(),e=o[2].trim();if("type"===t)continue;""===e||void 0===e?(s=t,r={},i[s]=r):(r=null,i[t]=this._parseYamlValue(e))}}return i}_parseYamlValue(t){if("true"===t)return!0;if("false"===t)return!1;if("null"===t||"~"===t)return null;if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch{}return/^-?\d+(\.\d+)?$/.test(t)?Number(t):t.startsWith("'")&&t.endsWith("'")||t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}_updateConfig(t,e){this._config={...this._config,[t]:e},this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:this._config}});this.dispatchEvent(t)}_onDotDragStart(t,e,i){this._dragIndex=e,this._dragItemType=i,t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",`${i}:${e}`))}_onDotDragEnd(t,e,i){const o=this.shadowRoot?.querySelector(".preview-box");if(!o)return;const r=o.getBoundingClientRect(),s=Math.round(Math.min(100,Math.max(0,(t.clientX-r.left)/r.width*100))),a=Math.round(Math.min(100,Math.max(0,(t.clientY-r.top)/r.height*100)));"entity"===i?(this._updateEntity(e,"left",s),this._updateEntity(e,"top",a)):(this._updateNestedCard(e,"left",s),this._updateNestedCard(e,"top",a)),this._dragIndex=-1}_onPreviewClick(t){this._dragIndex>=0&&this._dragItemType}};Tt.styles=At,t([pt({attribute:!1})],Tt.prototype,"hass",void 0),t([ut()],Tt.prototype,"_config",void 0),Tt=t([lt("custom-room-card-editor")],Tt);export{Nt as CustomRoomCard,Tt as CustomRoomCardEditor};
