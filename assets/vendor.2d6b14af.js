function W(){}function Pt(e,t){for(const r in t)e[r]=t[r];return e}function G(e){return e()}function H(){return Object.create(null)}function x(e){e.forEach(G)}function be(e){return typeof e=="function"}function At(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let A;function Ct(e,t){return A||(A=document.createElement("a")),A.href=t,e===A.href}function _e(e){return Object.keys(e).length===0}function jt(e){const t={};for(const r in e)r[0]!=="$"&&(t[r]=e[r]);return t}let C=!1;function Ee(){C=!0}function xe(){C=!1}function Se(e,t,r,i){for(;e<t;){const n=e+(t-e>>1);r(n)<=i?e=n+1:t=n}return e}function $e(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let c=0;c<t.length;c++){const f=t[c];f.claim_order!==void 0&&l.push(f)}t=l}const r=new Int32Array(t.length+1),i=new Int32Array(t.length);r[0]=-1;let n=0;for(let l=0;l<t.length;l++){const c=t[l].claim_order,f=(n>0&&t[r[n]].claim_order<=c?n+1:Se(1,n,h=>t[r[h]].claim_order,c))-1;i[l]=r[f]+1;const p=f+1;r[p]=l,n=Math.max(p,n)}const o=[],s=[];let a=t.length-1;for(let l=r[n]+1;l!=0;l=i[l-1]){for(o.push(t[l-1]);a>=l;a--)s.push(t[a]);a--}for(;a>=0;a--)s.push(t[a]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;e.insertBefore(s[l],f)}}function Pe(e,t){if(C){for($e(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function vt(e,t,r){C&&!r?Pe(e,t):(t.parentNode!==e||t.nextSibling!=r)&&e.insertBefore(t,r||null)}function Ae(e){e.parentNode.removeChild(e)}function Ce(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function Ot(){return N(" ")}function It(){return N("")}function Lt(e,t,r,i){return e.addEventListener(t,r,i),()=>e.removeEventListener(t,r,i)}function kt(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function je(e){return Array.from(e.childNodes)}function ve(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function J(e,t,r,i,n=!1){ve(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const a=e[s];if(t(a)){const l=r(a);return l===void 0?e.splice(s,1):e[s]=l,n||(e.claim_info.last_index=s),a}}for(let s=e.claim_info.last_index-1;s>=0;s--){const a=e[s];if(t(a)){const l=r(a);return l===void 0?e.splice(s,1):e[s]=l,n?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,a}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function Oe(e,t,r,i){return J(e,n=>n.nodeName===t,n=>{const o=[];for(let s=0;s<n.attributes.length;s++){const a=n.attributes[s];r[a.name]||o.push(a.name)}o.forEach(s=>n.removeAttribute(s))},()=>i(t))}function Nt(e,t,r){return Oe(e,t,r,Ce)}function Ie(e,t){return J(e,r=>r.nodeType===3,r=>{const i=""+t;if(r.data.startsWith(i)){if(r.data.length!==i.length)return r.splitText(i.length)}else r.data=i},()=>N(t),!0)}function Tt(e){return Ie(e," ")}function Mt(e,t,r,i){e.style.setProperty(t,r,i?"important":"")}let Y;function j(e){Y=e}const S=[],X=[],v=[],K=[],Le=Promise.resolve();let T=!1;function ke(){T||(T=!0,Le.then(Z))}function M(e){v.push(e)}let D=!1;const U=new Set;function Z(){if(!D){D=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];j(t),Ne(t.$$)}for(j(null),S.length=0;X.length;)X.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];U.has(t)||(U.add(t),t())}v.length=0}while(S.length);for(;K.length;)K.pop()();T=!1,D=!1,U.clear()}}function Ne(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const O=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Ut(){_.r||x(_.c),_=_.p}function Te(e,t){e&&e.i&&(O.delete(e),e.i(t))}function Rt(e,t,r,i){if(e&&e.o){if(O.has(e))return;O.add(e),_.c.push(()=>{O.delete(e),i&&(r&&e.d(1),i())}),e.o(t)}}function qt(e,t){const r={},i={},n={$$scope:1};let o=e.length;for(;o--;){const s=e[o],a=t[o];if(a){for(const l in s)l in a||(i[l]=1);for(const l in a)n[l]||(r[l]=a[l],n[l]=1);e[o]=a}else for(const l in s)n[l]=1}for(const s in i)s in r||(r[s]=void 0);return r}function Bt(e){return typeof e=="object"&&e!==null?e:{}}function Ft(e){e&&e.c()}function Vt(e,t){e&&e.l(t)}function Me(e,t,r,i){const{fragment:n,on_mount:o,on_destroy:s,after_update:a}=e.$$;n&&n.m(t,r),i||M(()=>{const l=o.map(G).filter(be);s?s.push(...l):x(l),e.$$.on_mount=[]}),a.forEach(M)}function De(e,t){const r=e.$$;r.fragment!==null&&(x(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function Ue(e,t){e.$$.dirty[0]===-1&&(S.push(e),ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function zt(e,t,r,i,n,o,s,a=[-1]){const l=Y;j(e);const c=e.$$={fragment:null,ctx:null,props:o,update:W,not_equal:n,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:H(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=r?r(e,t.props||{},(p,h,...w)=>{const u=w.length?w[0]:h;return c.ctx&&n(c.ctx[p],c.ctx[p]=u)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](u),f&&Ue(e,p)),h}):[],c.update(),f=!0,x(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){Ee();const p=je(t.target);c.fragment&&c.fragment.l(p),p.forEach(Ae)}else c.fragment&&c.fragment.c();t.intro&&Te(e.$$.fragment),Me(e,t.target,t.anchor,t.customElement),xe(),Z()}j(l)}class Wt{$destroy(){De(this,1),this.$destroy=W}$on(t,r){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!_e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Gt(e,{target:t=document.body}={}){const r=document.createElement("textarea"),i=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const n=document.getSelection();let o=!1;n.rangeCount>0&&(o=n.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}return r.remove(),o&&(n.removeAllRanges(),n.addRange(o)),i&&i.focus(),s}var $={};$.bitwise=Q;$.binaryTransfer=ee;$.unique=Re;$.random=qe;function Q(e){var t=0;if(e.length==0)return t;for(var r=0;r<e.length;r++){var i=e.charCodeAt(r);t=(t<<5)-t+i,t=t&t}return t}function ee(e,t){t=t||62;var r=[],i,n="",o=e<0?"-":"";function s(l){var c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return c[l]}for(e=Math.abs(e);e>=t;)i=e%t,e=Math.floor(e/t),r.push(s(i));e>0&&r.push(s(e));for(var a=r.length-1;a>=0;a--)n+=r[a];return o+n}function Re(e){var t=ee(Q(e),61);return t.replace("-","Z")}function qe(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",r="",i=e||8,n=0;n<i;n++){var o=Math.floor(Math.random()*t.length);r+=t.substring(o,o+1)}return r}var Be=$,R={},Fe=e=>{if(Object.prototype.toString.call(e)!=="[object Object]")return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype};Object.defineProperty(R,"__esModule",{value:!0});var te=R.valueToEstree=void 0;const Ve=Fe;function d(e,t={}){if(e===void 0)return{type:"Identifier",name:"undefined"};if(e==null)return{type:"Literal",value:null,raw:"null"};if(e===Number.POSITIVE_INFINITY)return{type:"Identifier",name:"Infinity"};if(Number.isNaN(e))return{type:"Identifier",name:"NaN"};if(typeof e=="boolean")return{type:"Literal",value:e,raw:String(e)};if(typeof e=="bigint")return e>=0?{type:"Literal",value:e,raw:`${e}n`,bigint:String(e)}:{type:"UnaryExpression",operator:"-",prefix:!0,argument:d(-e,t)};if(typeof e=="number")return e>=0?{type:"Literal",value:e,raw:String(e)}:{type:"UnaryExpression",operator:"-",prefix:!0,argument:d(-e,t)};if(typeof e=="string")return{type:"Literal",value:e,raw:JSON.stringify(e)};if(typeof e=="symbol"){if(e.description&&e===Symbol.for(e.description))return{type:"CallExpression",optional:!1,callee:{type:"MemberExpression",computed:!1,optional:!1,object:{type:"Identifier",name:"Symbol"},property:{type:"Identifier",name:"for"}},arguments:[d(e.description,t)]};throw new TypeError(`Only global symbols are supported, got: ${String(e)}`)}if(Array.isArray(e)){const r=[];for(let i=0;i<e.length;i+=1)r.push(i in e?d(e[i],t):null);return{type:"ArrayExpression",elements:r}}if(e instanceof RegExp)return{type:"Literal",value:e,raw:String(e),regex:{pattern:e.source,flags:e.flags}};if(e instanceof Date)return{type:"NewExpression",callee:{type:"Identifier",name:"Date"},arguments:[d(e.getTime(),t)]};if(e instanceof Map)return{type:"NewExpression",callee:{type:"Identifier",name:"Map"},arguments:[d([...e.entries()],t)]};if(typeof Buffer!="undefined"&&Buffer.isBuffer(e))return{type:"CallExpression",optional:!1,callee:{type:"MemberExpression",computed:!1,optional:!1,object:{type:"Identifier",name:"Buffer"},property:{type:"Identifier",name:"from"}},arguments:[d([...e.values()])]};if(e instanceof BigInt64Array||e instanceof BigUint64Array||e instanceof Float32Array||e instanceof Float64Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Set||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)return{type:"NewExpression",callee:{type:"Identifier",name:e.constructor.name},arguments:[d([...e],t)]};if(e instanceof URL||e instanceof URLSearchParams)return{type:"NewExpression",callee:{type:"Identifier",name:e.constructor.name},arguments:[d(String(e),t)]};if(t.instanceAsObject||Ve(e))return{type:"ObjectExpression",properties:Object.entries(e).map(([r,i])=>({type:"Property",method:!1,shorthand:!1,computed:!1,kind:"init",key:d(r,t),value:d(i,t)}))};throw new TypeError(`Unsupported value: ${String(e)}`)}te=R.valueToEstree=d;const{stringify:ze}=JSON;if(!String.prototype.repeat)throw new Error("String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation");if(!String.prototype.endsWith)throw new Error("String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation");const I={"||":3,"&&":4,"|":5,"??":5,"^":6,"&":7,"==":8,"!=":8,"===":8,"!==":8,"<":9,">":9,"<=":9,">=":9,in:9,instanceof:9,"<<":10,">>":10,">>>":10,"+":11,"-":11,"*":12,"%":12,"/":12,"**":13},g=17,re={ArrayExpression:20,TaggedTemplateExpression:20,ThisExpression:20,Identifier:20,PrivateIdentifier:20,Literal:18,TemplateLiteral:20,Super:20,SequenceExpression:20,MemberExpression:19,ChainExpression:19,CallExpression:19,NewExpression:19,ArrowFunctionExpression:g,ClassExpression:g,FunctionExpression:g,ObjectExpression:g,UpdateExpression:16,UnaryExpression:15,AwaitExpression:15,BinaryExpression:14,LogicalExpression:13,ConditionalExpression:4,AssignmentExpression:3,YieldExpression:2,RestElement:1};function E(e,t){const{generator:r}=e;if(e.write("("),t!=null&&t.length>0){r[t[0].type](t[0],e);const{length:i}=t;for(let n=1;n<i;n++){const o=t[n];e.write(", "),r[o.type](o,e)}}e.write(")")}function ie(e,t,r,i){const n=e.expressionsPrecedence[t.type];if(n===g)return!0;const o=e.expressionsPrecedence[r.type];return n!==o?!i&&n===15&&o===14&&r.operator==="**"||n<o:n!==13&&n!==14?!1:t.operator==="**"&&r.operator==="**"?!i:i?I[t.operator]<=I[r.operator]:I[t.operator]<I[r.operator]}function L(e,t,r,i){const{generator:n}=e;ie(e,t,r,i)?(e.write("("),n[t.type](t,e),e.write(")")):n[t.type](t,e)}function We(e,t,r,i){const n=t.split(`
`),o=n.length-1;if(e.write(n[0].trim()),o>0){e.write(i);for(let s=1;s<o;s++)e.write(r+n[s].trim()+i);e.write(r+n[o].trim())}}function y(e,t,r,i){const{length:n}=t;for(let o=0;o<n;o++){const s=t[o];e.write(r),s.type[0]==="L"?e.write("// "+s.value.trim()+`
`,s):(e.write("/*"),We(e,s.value,r,i),e.write("*/"+i))}}function Ge(e){let t=e;for(;t!=null;){const{type:r}=t;if(r[0]==="C"&&r[1]==="a")return!0;if(r[0]==="M"&&r[1]==="e"&&r[2]==="m")t=t.object;else return!1}}function q(e,t){const{generator:r}=e,{declarations:i}=t;e.write(t.kind+" ");const{length:n}=i;if(n>0){r.VariableDeclarator(i[0],e);for(let o=1;o<n;o++)e.write(", "),r.VariableDeclarator(i[o],e)}}let ne,oe,se,le,ce,ae;const B={Program(e,t){const r=t.indent.repeat(t.indentLevel),{lineEnd:i,writeComments:n}=t;n&&e.comments!=null&&y(t,e.comments,r,i);const o=e.body,{length:s}=o;for(let a=0;a<s;a++){const l=o[a];n&&l.comments!=null&&y(t,l.comments,r,i),t.write(r),this[l.type](l,t),t.write(i)}n&&e.trailingComments!=null&&y(t,e.trailingComments,r,i)},BlockStatement:ae=function(e,t){const r=t.indent.repeat(t.indentLevel++),{lineEnd:i,writeComments:n}=t,o=r+t.indent;t.write("{");const s=e.body;if(s!=null&&s.length>0){t.write(i),n&&e.comments!=null&&y(t,e.comments,o,i);const{length:a}=s;for(let l=0;l<a;l++){const c=s[l];n&&c.comments!=null&&y(t,c.comments,o,i),t.write(o),this[c.type](c,t),t.write(i)}t.write(r)}else n&&e.comments!=null&&(t.write(i),y(t,e.comments,o,i),t.write(r));n&&e.trailingComments!=null&&y(t,e.trailingComments,o,i),t.write("}"),t.indentLevel--},ClassBody:ae,StaticBlock(e,t){t.write("static "),this.BlockStatement(e,t)},EmptyStatement(e,t){t.write(";")},ExpressionStatement(e,t){const r=t.expressionsPrecedence[e.expression.type];r===g||r===3&&e.expression.left.type[0]==="O"?(t.write("("),this[e.expression.type](e.expression,t),t.write(")")):this[e.expression.type](e.expression,t),t.write(";")},IfStatement(e,t){t.write("if ("),this[e.test.type](e.test,t),t.write(") "),this[e.consequent.type](e.consequent,t),e.alternate!=null&&(t.write(" else "),this[e.alternate.type](e.alternate,t))},LabeledStatement(e,t){this[e.label.type](e.label,t),t.write(": "),this[e.body.type](e.body,t)},BreakStatement(e,t){t.write("break"),e.label!=null&&(t.write(" "),this[e.label.type](e.label,t)),t.write(";")},ContinueStatement(e,t){t.write("continue"),e.label!=null&&(t.write(" "),this[e.label.type](e.label,t)),t.write(";")},WithStatement(e,t){t.write("with ("),this[e.object.type](e.object,t),t.write(") "),this[e.body.type](e.body,t)},SwitchStatement(e,t){const r=t.indent.repeat(t.indentLevel++),{lineEnd:i,writeComments:n}=t;t.indentLevel++;const o=r+t.indent,s=o+t.indent;t.write("switch ("),this[e.discriminant.type](e.discriminant,t),t.write(") {"+i);const{cases:a}=e,{length:l}=a;for(let c=0;c<l;c++){const f=a[c];n&&f.comments!=null&&y(t,f.comments,o,i),f.test?(t.write(o+"case "),this[f.test.type](f.test,t),t.write(":"+i)):t.write(o+"default:"+i);const{consequent:p}=f,{length:h}=p;for(let w=0;w<h;w++){const u=p[w];n&&u.comments!=null&&y(t,u.comments,s,i),t.write(s),this[u.type](u,t),t.write(i)}}t.indentLevel-=2,t.write(r+"}")},ReturnStatement(e,t){t.write("return"),e.argument&&(t.write(" "),this[e.argument.type](e.argument,t)),t.write(";")},ThrowStatement(e,t){t.write("throw "),this[e.argument.type](e.argument,t),t.write(";")},TryStatement(e,t){if(t.write("try "),this[e.block.type](e.block,t),e.handler){const{handler:r}=e;r.param==null?t.write(" catch "):(t.write(" catch ("),this[r.param.type](r.param,t),t.write(") ")),this[r.body.type](r.body,t)}e.finalizer&&(t.write(" finally "),this[e.finalizer.type](e.finalizer,t))},WhileStatement(e,t){t.write("while ("),this[e.test.type](e.test,t),t.write(") "),this[e.body.type](e.body,t)},DoWhileStatement(e,t){t.write("do "),this[e.body.type](e.body,t),t.write(" while ("),this[e.test.type](e.test,t),t.write(");")},ForStatement(e,t){if(t.write("for ("),e.init!=null){const{init:r}=e;r.type[0]==="V"?q(t,r):this[r.type](r,t)}t.write("; "),e.test&&this[e.test.type](e.test,t),t.write("; "),e.update&&this[e.update.type](e.update,t),t.write(") "),this[e.body.type](e.body,t)},ForInStatement:ne=function(e,t){t.write(`for ${e.await?"await ":""}(`);const{left:r}=e;r.type[0]==="V"?q(t,r):this[r.type](r,t),t.write(e.type[3]==="I"?" in ":" of "),this[e.right.type](e.right,t),t.write(") "),this[e.body.type](e.body,t)},ForOfStatement:ne,DebuggerStatement(e,t){t.write("debugger;",e)},FunctionDeclaration:oe=function(e,t){t.write((e.async?"async ":"")+(e.generator?"function* ":"function ")+(e.id?e.id.name:""),e),E(t,e.params),t.write(" "),this[e.body.type](e.body,t)},FunctionExpression:oe,VariableDeclaration(e,t){q(t,e),t.write(";")},VariableDeclarator(e,t){this[e.id.type](e.id,t),e.init!=null&&(t.write(" = "),this[e.init.type](e.init,t))},ClassDeclaration(e,t){if(t.write("class "+(e.id?`${e.id.name} `:""),e),e.superClass){t.write("extends ");const{superClass:r}=e,{type:i}=r,n=t.expressionsPrecedence[i];(i[0]!=="C"||i[1]!=="l"||i[5]!=="E")&&(n===g||n<t.expressionsPrecedence.ClassExpression)?(t.write("("),this[e.superClass.type](r,t),t.write(")")):this[r.type](r,t),t.write(" ")}this.ClassBody(e.body,t)},ImportDeclaration(e,t){t.write("import ");const{specifiers:r}=e,{length:i}=r;let n=0;if(i>0){for(;n<i;){n>0&&t.write(", ");const o=r[n],s=o.type[6];if(s==="D")t.write(o.local.name,o),n++;else if(s==="N")t.write("* as "+o.local.name,o),n++;else break}if(n<i){for(t.write("{");;){const o=r[n],{name:s}=o.imported;if(t.write(s,o),s!==o.local.name&&t.write(" as "+o.local.name),++n<i)t.write(", ");else break}t.write("}")}t.write(" from ")}this.Literal(e.source,t),t.write(";")},ImportExpression(e,t){t.write("import("),this[e.source.type](e.source,t),t.write(")")},ExportDefaultDeclaration(e,t){t.write("export default "),this[e.declaration.type](e.declaration,t),t.expressionsPrecedence[e.declaration.type]!=null&&e.declaration.type[0]!=="F"&&t.write(";")},ExportNamedDeclaration(e,t){if(t.write("export "),e.declaration)this[e.declaration.type](e.declaration,t);else{t.write("{");const{specifiers:r}=e,{length:i}=r;if(i>0)for(let n=0;;){const o=r[n],{name:s}=o.local;if(t.write(s,o),s!==o.exported.name&&t.write(" as "+o.exported.name),++n<i)t.write(", ");else break}t.write("}"),e.source&&(t.write(" from "),this.Literal(e.source,t)),t.write(";")}},ExportAllDeclaration(e,t){e.exported!=null?t.write("export * as "+e.exported.name+" from "):t.write("export * from "),this.Literal(e.source,t),t.write(";")},MethodDefinition(e,t){e.static&&t.write("static ");const r=e.kind[0];(r==="g"||r==="s")&&t.write(e.kind+" "),e.value.async&&t.write("async "),e.value.generator&&t.write("*"),e.computed?(t.write("["),this[e.key.type](e.key,t),t.write("]")):this[e.key.type](e.key,t),E(t,e.value.params),t.write(" "),this[e.value.body.type](e.value.body,t)},ClassExpression(e,t){this.ClassDeclaration(e,t)},ArrowFunctionExpression(e,t){t.write(e.async?"async ":"",e);const{params:r}=e;r!=null&&(r.length===1&&r[0].type[0]==="I"?t.write(r[0].name,r[0]):E(t,e.params)),t.write(" => "),e.body.type[0]==="O"?(t.write("("),this.ObjectExpression(e.body,t),t.write(")")):this[e.body.type](e.body,t)},ThisExpression(e,t){t.write("this",e)},Super(e,t){t.write("super",e)},RestElement:se=function(e,t){t.write("..."),this[e.argument.type](e.argument,t)},SpreadElement:se,YieldExpression(e,t){t.write(e.delegate?"yield*":"yield"),e.argument&&(t.write(" "),this[e.argument.type](e.argument,t))},AwaitExpression(e,t){t.write("await ",e),L(t,e.argument,e)},TemplateLiteral(e,t){const{quasis:r,expressions:i}=e;t.write("`");const{length:n}=i;for(let s=0;s<n;s++){const a=i[s],l=r[s];t.write(l.value.raw,l),t.write("${"),this[a.type](a,t),t.write("}")}const o=r[r.length-1];t.write(o.value.raw,o),t.write("`")},TemplateElement(e,t){t.write(e.value.raw,e)},TaggedTemplateExpression(e,t){L(t,e.tag,e),this[e.quasi.type](e.quasi,t)},ArrayExpression:ce=function(e,t){if(t.write("["),e.elements.length>0){const{elements:r}=e,{length:i}=r;for(let n=0;;){const o=r[n];if(o!=null&&this[o.type](o,t),++n<i)t.write(", ");else{o==null&&t.write(", ");break}}}t.write("]")},ArrayPattern:ce,ObjectExpression(e,t){const r=t.indent.repeat(t.indentLevel++),{lineEnd:i,writeComments:n}=t,o=r+t.indent;if(t.write("{"),e.properties.length>0){t.write(i),n&&e.comments!=null&&y(t,e.comments,o,i);const s=","+i,{properties:a}=e,{length:l}=a;for(let c=0;;){const f=a[c];if(n&&f.comments!=null&&y(t,f.comments,o,i),t.write(o),this[f.type](f,t),++c<l)t.write(s);else break}t.write(i),n&&e.trailingComments!=null&&y(t,e.trailingComments,o,i),t.write(r+"}")}else n?e.comments!=null?(t.write(i),y(t,e.comments,o,i),e.trailingComments!=null&&y(t,e.trailingComments,o,i),t.write(r+"}")):e.trailingComments!=null?(t.write(i),y(t,e.trailingComments,o,i),t.write(r+"}")):t.write("}"):t.write("}");t.indentLevel--},Property(e,t){e.method||e.kind[0]!=="i"?this.MethodDefinition(e,t):(e.shorthand||(e.computed?(t.write("["),this[e.key.type](e.key,t),t.write("]")):this[e.key.type](e.key,t),t.write(": ")),this[e.value.type](e.value,t))},PropertyDefinition(e,t){e.static&&t.write("static "),this[e.key.type](e.key,t),t.write(" = "),this[e.value.type](e.value,t)},ObjectPattern(e,t){if(t.write("{"),e.properties.length>0){const{properties:r}=e,{length:i}=r;for(let n=0;this[r[n].type](r[n],t),++n<i;)t.write(", ")}t.write("}")},SequenceExpression(e,t){E(t,e.expressions)},UnaryExpression(e,t){if(e.prefix){const{operator:r,argument:i,argument:{type:n}}=e;t.write(r);const o=ie(t,i,e);!o&&(r.length>1||n[0]==="U"&&(n[1]==="n"||n[1]==="p")&&i.prefix&&i.operator[0]===r&&(r==="+"||r==="-"))&&t.write(" "),o?(t.write(r.length>1?" (":"("),this[n](i,t),t.write(")")):this[n](i,t)}else this[e.argument.type](e.argument,t),t.write(e.operator)},UpdateExpression(e,t){e.prefix?(t.write(e.operator),this[e.argument.type](e.argument,t)):(this[e.argument.type](e.argument,t),t.write(e.operator))},AssignmentExpression(e,t){this[e.left.type](e.left,t),t.write(" "+e.operator+" "),this[e.right.type](e.right,t)},AssignmentPattern(e,t){this[e.left.type](e.left,t),t.write(" = "),this[e.right.type](e.right,t)},BinaryExpression:le=function(e,t){const r=e.operator==="in";r&&t.write("("),L(t,e.left,e,!1),t.write(" "+e.operator+" "),L(t,e.right,e,!0),r&&t.write(")")},LogicalExpression:le,ConditionalExpression(e,t){const{test:r}=e,i=t.expressionsPrecedence[r.type];i===g||i<=t.expressionsPrecedence.ConditionalExpression?(t.write("("),this[r.type](r,t),t.write(")")):this[r.type](r,t),t.write(" ? "),this[e.consequent.type](e.consequent,t),t.write(" : "),this[e.alternate.type](e.alternate,t)},NewExpression(e,t){t.write("new ");const r=t.expressionsPrecedence[e.callee.type];r===g||r<t.expressionsPrecedence.CallExpression||Ge(e.callee)?(t.write("("),this[e.callee.type](e.callee,t),t.write(")")):this[e.callee.type](e.callee,t),E(t,e.arguments)},CallExpression(e,t){const r=t.expressionsPrecedence[e.callee.type];r===g||r<t.expressionsPrecedence.CallExpression?(t.write("("),this[e.callee.type](e.callee,t),t.write(")")):this[e.callee.type](e.callee,t),e.optional&&t.write("?."),E(t,e.arguments)},ChainExpression(e,t){this[e.expression.type](e.expression,t)},MemberExpression(e,t){const r=t.expressionsPrecedence[e.object.type];r===g||r<t.expressionsPrecedence.MemberExpression?(t.write("("),this[e.object.type](e.object,t),t.write(")")):this[e.object.type](e.object,t),e.computed?(e.optional&&t.write("?."),t.write("["),this[e.property.type](e.property,t),t.write("]")):(e.optional?t.write("?."):t.write("."),this[e.property.type](e.property,t))},MetaProperty(e,t){t.write(e.meta.name+"."+e.property.name,e)},Identifier(e,t){t.write(e.name,e)},PrivateIdentifier(e,t){t.write(`#${e.name}`,e)},Literal(e,t){e.raw!=null?t.write(e.raw,e):e.regex!=null?this.RegExpLiteral(e,t):e.bigint!=null?t.write(e.bigint+"n",e):t.write(ze(e.value),e)},RegExpLiteral(e,t){const{regex:r}=e;t.write(`/${r.pattern}/${r.flags}`,e)}},He={},Je=B;class Ye{constructor(t){const r=t??He;this.output="",r.output!=null?(this.output=r.output,this.write=this.writeToStream):this.output="",this.generator=r.generator!=null?r.generator:B,this.expressionsPrecedence=r.expressionsPrecedence!=null?r.expressionsPrecedence:re,this.indent=r.indent!=null?r.indent:"  ",this.lineEnd=r.lineEnd!=null?r.lineEnd:`
`,this.indentLevel=r.startingIndentLevel!=null?r.startingIndentLevel:0,this.writeComments=r.comments?r.comments:!1,r.sourceMap!=null&&(this.write=r.output==null?this.writeAndMap:this.writeToStreamAndMap,this.sourceMap=r.sourceMap,this.line=1,this.column=0,this.lineEndSize=this.lineEnd.split(`
`).length-1,this.mapping={original:null,generated:this,name:void 0,source:r.sourceMap.file||r.sourceMap._file})}write(t){this.output+=t}writeToStream(t){this.output.write(t)}writeAndMap(t,r){this.output+=t,this.map(t,r)}writeToStreamAndMap(t,r){this.output.write(t),this.map(t,r)}map(t,r){if(r!=null){const{type:o}=r;if(o[0]==="L"&&o[2]==="n"){this.column=0,this.line++;return}if(r.loc!=null){const{mapping:s}=this;s.original=r.loc.start,s.name=r.name,this.sourceMap.addMapping(s)}if(o[0]==="T"&&o[8]==="E"||o[0]==="L"&&o[1]==="i"&&typeof r.value=="string"){const{length:s}=t;let{column:a,line:l}=this;for(let c=0;c<s;c++)t[c]===`
`?(a=0,l++):a++;this.column=a,this.line=l;return}}const{length:i}=t,{lineEnd:n}=this;i>0&&(this.lineEndSize>0&&(n.length===1?t[i-1]===n:t.endsWith(n))?(this.line+=this.lineEndSize,this.column=0):this.column+=i)}toString(){return this.output}}function Xe(e,t){const r=new Ye(t);return r.generator[e.type](e,r),r.output}var Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",NEEDS_PARENTHESES:g,EXPRESSIONS_PRECEDENCE:re,GENERATOR:B,baseGenerator:Je,generate:Xe});function fe(e){const t={};return r(e),Object.keys(t).join(" ");function r(i){i&&typeof i.forEach=="function"?i.forEach(r):i===Object(i)?Object.keys(i).forEach(n=>{i[n]&&r(n)}):(i=i==null?"":String(i).trim(),i&&i.split(/\s+/).forEach(n=>{t[n]=!0}))}}var Ze=Object.defineProperty,Qe=Object.defineProperties,et=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,ue=(e,t,r)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,it=(e,t)=>{for(var r in t||(t={}))tt.call(t,r)&&ue(e,r,t[r]);if(pe)for(var r of pe(t))rt.call(t,r)&&ue(e,r,t[r]);return e},nt=(e,t)=>Qe(e,et(t));const{generate:ot,GENERATOR:me}=Ke,st=nt(it({},me),{Literal(e,t){e.raw!=null?t.write(e.raw.replace("<\/script>","<\\/script>")):me.Literal(e,t)}});function lt(e){return ot(te(e),{generator:st})}function ct(e){let t={hydration:null,props:{}};for(const[r,i]of Object.entries(e))if(r.startsWith("client:"))switch(t.hydration||(t.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),r){case"client:component-path":{t.hydration.componentUrl=i;break}case"client:component-export":{t.hydration.componentExport.value=i;break}default:{t.hydration.directive=r.split(":")[1],t.hydration.value=i;break}}else r==="class:list"?t.props[r.slice(0,-5)]=fe(i):t.props[r]=i;return t}async function at(e,t){const{renderer:r,astroId:i,props:n}=e,{hydrate:o,componentUrl:s,componentExport:a}=t;if(!a)throw new Error(`Unable to resolve a componentExport for "${t.displayName}"! Please open an issue.`);let l="";return r.hydrationPolyfills&&(l+=`await Promise.all([${r.hydrationPolyfills.map(f=>`
  import("${f}")`).join(", ")}]);
`),l+=r.source?`const [{ ${a.value}: Component }, { default: hydrate }] = await Promise.all([import("${s}"), import("${r.source}")]);
  return (el, children) => hydrate(el)(Component, ${lt(n)}, children);
`:`await import("${s}");
  return () => {};
`,{props:{type:"module","data-astro-component-hydration":!0},children:`import setup from 'astro/client/${o}.js';
setup("${i}", {${t.hydrateArgs?`value: ${JSON.stringify(t.hydrateArgs)}`:""}}, async () => {
  ${l}
});
`}}class ft{constructor(t,r,i,n){this.modules=r,this.hydratedComponents=i,this.hoisted=n,this.fileURL=new URL(t),this.metadataCache=new Map}resolvePath(t){return t.startsWith(".")?new URL(t,this.fileURL).pathname:t}getPath(t){const r=this.getComponentMetadata(t);return(r==null?void 0:r.componentUrl)||null}getExport(t){const r=this.getComponentMetadata(t);return(r==null?void 0:r.componentExport)||null}getAllHydratedComponentPaths(){const t=new Set;for(const r of this.hydratedComponents){const i=this.getPath(r);i&&t.add(i)}for(const{module:r}of this.modules)if(typeof r.$$metadata!="undefined")for(const i of r.$$metadata.getAllHydratedComponentPaths())t.add(i);return t}getComponentMetadata(t){if(this.metadataCache.has(t))return this.metadataCache.get(t);const r=this.findComponentMetadata(t);return this.metadataCache.set(t,r),r}findComponentMetadata(t){const r=typeof t=="string";for(const{module:i,specifier:n}of this.modules){const o=this.resolvePath(n);for(const[s,a]of Object.entries(i))if(r){if(s==="tagName"&&t===a)return{componentExport:s,componentUrl:o}}else if(t===a)return{componentExport:s,componentUrl:o}}return null}}function Ht(e,t){return new ft(e,t.modules,t.hydratedComponents,t.hoisted)}var pt=Object.defineProperty,ut=Object.defineProperties,mt=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,ht=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,ye=(e,t,r)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wt=(e,t)=>{for(var r in t||(t={}))ht.call(t,r)&&ye(e,r,t[r]);if(he)for(var r of he(t))yt.call(t,r)&&ye(e,r,t[r]);return e},dt=(e,t)=>ut(e,mt(t));async function P(e){if(e=await e,Array.isArray(e))return(await Promise.all(e.map(t=>P(t)))).join("");if(typeof e=="function")return P(e());if(typeof e=="string")return e;if(!(!e&&e!==0))return e instanceof we||Object.prototype.toString.call(e)==="[object AstroComponent]"?await V(e):e}class we{constructor(t,r){this.htmlParts=t,this.expressions=r}get[Symbol.toStringTag](){return"AstroComponent"}*[Symbol.iterator](){const{htmlParts:t,expressions:r}=this;for(let i=0;i<t.length;i++){const n=t[i],o=r[i];yield P(n),yield P(o)}}}async function gt(e,...t){return new we(e,t)}function Jt(e){return e.isAstroComponentFactory=!0,e}async function de(e,t,r){return t?P(t):r}const bt=Symbol("Astro.Fragment");function _t(e){switch(e==null?void 0:e.split(".").pop()){case"svelte":return["@astrojs/renderer-svelte"];case"vue":return["@astrojs/renderer-vue"];case"jsx":case"tsx":return["@astrojs/renderer-react","@astrojs/renderer-preact"];default:return["@astrojs/renderer-react","@astrojs/renderer-preact","@astrojs/renderer-vue","@astrojs/renderer-svelte"]}}function F(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}async function Yt(e,t,r,i,n={}){var o,s;r=await r;const a=await de(e,n==null?void 0:n.default);if(r===bt)return a;if(r&&r.isAstroComponentFactory)return await $t(e,r,i,n);if(r===null&&!i["client:only"])throw new Error(`Unable to render ${t} because it is ${r}!
Did you forget to import the component or is it possible there is a typo?`);const{renderers:l}=e._metadata,c={displayName:t},{hydration:f,props:p}=ct(i);let h="";f&&(c.hydrate=f.directive,c.hydrateArgs=f.value,c.componentExport=f.componentExport,c.componentUrl=f.componentUrl);const w=_t(c.componentUrl);if(Array.isArray(l)&&l.length===0&&typeof r!="string"){const m=`Unable to render ${c.displayName}! 

There are no \`renderers\` set in your \`astro.config.mjs\` file.
Did you mean to enable ${F(w.map(b=>"`"+b+"`"))}?`;throw new Error(m)}let u;if(c.hydrate!=="only"){for(const m of l)if(await m.ssr.check(r,p,a)){u=m;break}}else{if(c.hydrateArgs){const m=c.hydrateArgs;u=l.filter(({name:b})=>b===`@astrojs/renderer-${m}`||b===m)[0]}if(!u&&l.length===1&&(u=l[0]),!u){const m=(o=c.componentUrl)==null?void 0:o.split(".").pop();u=l.filter(({name:b})=>b===`@astrojs/renderer-${m}`||b===m)[0]}}if(u)c.hydrate==="only"?h=await de(e,n==null?void 0:n.fallback):{html:h}=await u.ssr.renderToStaticMarkup(r,p,a);else{if(c.hydrate==="only")throw new Error(`Unable to render ${c.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${c.displayName} client:only="${w.map(m=>m.replace("@astrojs/renderer-","")).join("|")}" />
`);if(typeof r!="string"){const m=l.filter(k=>w.includes(k.name)),b=l.length>1;throw m.length===0?new Error(`Unable to render ${c.displayName}!

There ${b?"are":"is"} ${l.length} renderer${b?"s":""} configured in your \`astro.config.mjs\` file,
but ${b?"none were":"it was not"} able to server-side render ${c.displayName}.

Did you mean to enable ${F(w.map(k=>"`"+k+"`"))}?`):new Error(`Unable to render ${c.displayName}!

This component likely uses ${F(w)},
but Astro encountered an error during server-side rendering.

Please ensure that ${c.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(!h&&typeof r=="string"&&(h=await V(await gt`<${r}${St(p)}>${a}</${r}>`)),(s=u==null?void 0:u.polyfills)==null?void 0:s.length)for(const m of u.polyfills)e.scripts.add({props:{type:"module"},children:`import "${m}";`});if(!f)return h.replace(/\<\/?astro-fragment\>/g,"");const z=Be.unique(`<!--${c.componentExport.value}:${c.componentUrl}-->
${h}`);return e.scripts.add(await at({renderer:u,astroId:z,props:p},c)),`<astro-root uid="${z}">${h??""}</astro-root>`}function Et(e){return r=>{let i=[...Object.entries(r)];if(i.length===0)throw new Error(`[${e.pathname}] Astro.fetchContent() no matches found.`);return i.map(([n,o])=>{if(!o.frontmatter)return;const s=new URL(n,e).pathname;return dt(wt({},o.frontmatter),{Content:o.default,content:o.metadata,file:new URL(n,e),url:s.includes("/pages/")?s.replace(/^.*\/pages\//,"/").replace(/(\/index)?\.md$/,""):void 0})}).filter(Boolean)}}function Xt(e,t){const r=new URL(e),i=Et(r);return{site:new URL(t),fetchContent:i,resolve(...n){return n.reduce((o,s)=>new URL(s,o),r).pathname}}}const ge=e=>String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;");function xt(e,t){return e==null||e===!1?"":t==="class:list"?` ${t.slice(0,-5)}="${ge(fe(e))}"`:e===!0&&t.startsWith("data-")?` ${t}`:` ${t}="${ge(e)}"`}function St(e){let t="";for(const[r,i]of Object.entries(e))t+=xt(i,r);return t}async function $t(e,t,r,i){const n=await t(e,r,i);return await V(n)}async function V(e){let t="";for await(const r of e)(r||r===0)&&(t+=r);return t}async function Kt(e,t,r){var i,n;const o=document.querySelectorAll(`astro-root[uid="${e}"]`),s=(n=(i=o[0].querySelector("astro-fragment"))==null?void 0:i.innerHTML)!=null?n:null,a=async()=>{const c=await r();for(const f of o)c(f,s)},l=new IntersectionObserver(([c])=>{!c.isIntersecting||(l.disconnect(),a())});for(const c of o)for(let f=0;f<c.children.length;f++){const p=c.children[f];l.observe(p)}}export{Vt as A,Me as B,qt as C,Bt as D,Rt as E,Ut as F,Te as G,De as H,Pt as I,jt as J,Dt as K,Wt as S,Ot as a,je as b,Nt as c,Tt as d,Ce as e,Ae as f,kt as g,Mt as h,zt as i,Ct as j,vt as k,Pe as l,Lt as m,W as n,Gt as o,Ht as p,Xt as q,Jt as r,At as s,gt as t,de as u,Yt as v,xt as w,Kt as x,Ft as y,It as z};
