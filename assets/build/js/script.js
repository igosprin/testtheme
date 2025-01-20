/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
/*! jQuery Migrate v3.1.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+n[i]>+o[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.1.0",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a=s.fn.init,c=s.isNumeric,d=s.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),a.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&l.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(p,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return d.apply(this,r)},d)Object.prototype.hasOwnProperty.call(d,i)&&(s.find[i]=d[i]);s.fn.size=function(){return u("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},s.parseJSON=function(){return u("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},s.isNumeric=function(e){var t,r,n=c(e),o=(r=(t=e)&&t.toString(),!s.isArray(t)&&0<=r-parseFloat(r)+1);return n!==o&&u("jQuery.isNumeric() should not be called on constructed objects"),o},e("3.3.0")&&o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.2.0")&&o(s,"nodeName",s.nodeName,"jQuery.nodeName is deprecated");var f=s.ajax;s.ajax=function(){var e=f.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var y=s.fn.removeAttr,m=s.fn.toggleClass,h=/\S+/g;s.fn.removeAttr=function(e){var r=this;return s.each(e.match(h),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),y.apply(this,arguments)};var g=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?m.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":s.data(this,"__className__")||"")}))});s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return g=!0,e=r.apply(this,arguments),g=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in g||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o};var v=s.data;s.data=function(e,t,r){var n;if(t&&"object"==typeof t&&2===arguments.length){n=s.hasData(e)&&v.call(this,e);var o={};for(var i in t)i!==s.camelCase(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return v.call(this,e,o),t}return t&&"string"==typeof t&&t!==s.camelCase(t)&&(n=s.hasData(e)&&v.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):v.apply(this,arguments)};function j(e){return e}var Q=s.Tween.prototype.run;s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=j),Q.apply(this,arguments)};var w=s.fx.interval||13,b="jQuery.fx.interval is deprecated";n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(b),w},set:function(e){u(b),w=e}});var x=s.fn.load,k=s.event.add,A=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=A.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),k.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?x.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var S=s.fn.offset;s.fn.offset=function(){var e,t=this[0],r={top:0,left:0};return t&&t.nodeType?(e=(t.ownerDocument||n.document).documentElement,s.contains(e,t)?S.apply(this,arguments):(u("jQuery.fn.offset() requires an element connected to a document"),r)):(u("jQuery.fn.offset() requires a valid DOM element"),r)};var q=s.param;s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),q.call(this,e,t)};var C=s.fn.andSelf||s.fn.addBack;s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),C.apply(this,arguments)};var M=s.Deferred,R=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]];return s.Deferred=function(e){var i=M(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(R,function(e,t){var r=s.isFunction(o[e])&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&s.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=M.exceptionHook,s});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||y(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function V(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=-1!==['left','right'].indexOf(e.placement),p=-1!==e.placement.indexOf('-'),s=i.width%2==n.width%2,d=1==i.width%2&&1==n.width%2,a=function(e){return e},l=t?r||p||s?$:Z:a,f=t?$:a;return{left:l(d&&!p&&t?n.left-1:n.left),top:f(n.top),bottom:f(n.bottom),right:l(n.right)}}function K(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/* appear.js 1.0.3 */
appear = (function(){
  'use strict';
  var scrollLastPos = null, scrollTimer = 0, scroll = {};

  function track(){
    var newPos = window.scrollY || window.pageYOffset;  // pageYOffset for IE9
    if ( scrollLastPos != null ){
      scroll.velocity = newPos - scrollLastPos;
      scroll.delta = (scroll.velocity >= 0) ? scroll.velocity : (-1 * scroll.velocity);
      
    }
    scrollLastPos = newPos;
    if(scrollTimer){
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(function(){
      scrollLastPos = null;
    }, 30);
  }
  addEventListener('scroll', track, false);

  // determine if a given element (plus an additional "bounds" area around it) is in the viewport
  function viewable(el, bounds){
    var rect = el.getBoundingClientRect();
    return (
      (rect.top + rect.height) >= 0 &&
      (rect.left + rect.width) >= 0 &&
      (rect.bottom - rect.height) <= ( (window.innerHeight || document.documentElement.clientHeight) + bounds) &&
      (rect.right - rect.width) <= ( (window.innerWidth || document.documentElement.clientWidth) + bounds)
    );
  }

  return function(obj){

    return (function(obj){
      var initd = false, elements = [], elementsLength, reappear = [],
        appeared = 0, disappeared = 0, timer, deltaSet, opts = {}, done;

      // handle debouncing a function for better performance on scroll
      function debounce(fn, delay) {
        return function () {
          var self = this, args = arguments;
          clearTimeout(timer);
          
          timer = setTimeout(function () {
            fn.apply(self, args);
          }, delay);
        };
      }

      // called on scroll and resize event, so debounce the actual function that does
      // the heavy work of determining if an item is viewable and then "appearing" it
      function checkAppear() {
        if(scroll.delta < opts.delta.speed) {
          if(!deltaSet) {
            deltaSet = true;
            doCheckAppear();
            setTimeout(function(){
              deltaSet = false;
            }, opts.delta.timeout);
          }
        }
        (debounce(function() {
          doCheckAppear();
        }, opts.debounce)());
      }

      function begin() {
        // initial appear check before any scroll or resize event
        doCheckAppear();

        // add relevant listeners
        addEventListener('scroll', checkAppear, false);
        addEventListener('resize', checkAppear, false);
      }

      function end() {
        elements = [];
        if(timer) {
          clearTimeout(timer);
        }
        removeListeners();
      }

      function removeListeners() {
        
        removeEventListener('scroll', checkAppear, false);
        removeEventListener('resize', checkAppear, false);
      }

      function doCheckAppear() {
        if(done) {
          return;
        }
        
        elements.forEach(function(n, i){
          if(n && viewable(n, opts.bounds)) {
            // only act if the element is eligible to reappear
            if(reappear[i]) {
              // mark this element as not eligible to appear
              reappear[i] = false;
              // increment the count of appeared items
              appeared++;
              
              // call the appear fn
              if(opts.appear) {
                opts.appear(n);
              }
              // if not tracking reappears or disappears, need to remove node here
              if(!opts.disappear && !opts.reappear) {
                // stop tracking this node, which is now viewable
                elements[i] = null;
              }
            }
          } else {
            if(reappear[i] === false) {
              if(opts.disappear) {
                opts.disappear(n);
              }
              // increment the dissappeared count
              disappeared++;
              
              // if not tracking reappears, need to remove node here
              if(!opts.reappear) {
                // stop tracking this node, which is now viewable
                elements[i] = null;
              }
            }
            // element is out of view and eligible to be appeared again
            reappear[i] = true;
          }
        });

        // remove listeners if all items have (re)appeared
        if(!opts.reappear && (!opts.appear || opts.appear && appeared === elementsLength) && (!opts.disappear || opts.disappear && disappeared === elementsLength)) {
          // ensure done is only called once (could be called from a trailing debounce/throttle)
          done = true;
          removeListeners();
          // all items have appeared, so call the done fn
          if(opts.done){
            opts.done();
          }
        }
      }

      function init() {
        // make sure we only init once
        if(initd) {
          return;
        }
        initd = true;

        // call the obj init fn
        if(opts.init) {
          opts.init();
        }
        // get the elements to work with
        var els;
        if(typeof opts.elements === 'function') {
          els = opts.elements();
        } else {
          els = opts.elements;
        }
        if(els) {
          //  put elements into an array object to work with
          elementsLength = els.length;
          for(var i = 0; i < elementsLength; i += 1) {
            elements.push(els[i]);
            reappear.push(true);
          }
          begin();
        }
      }

      return function(obj) {
        obj = obj || {};

        // assign the fn to execute when a node is visible
        opts = {
          // a function to be run when the dom is ready (allows for any setup work)
          init: obj.init,
          // either an array of elements or a function that will return an htmlCollection
          elements: obj.elements,
          // function to call when an element is "viewable", will be passed the element to work with
          appear: obj.appear,
          // function to call when an element is no longer "viewable", will be passed the element to work with
          disappear: obj.disappear,
          // function to call when all the elements have "appeared"
          done: obj.done,
          // keep tracking the elements
          reappear: obj.reappear,
          // the extra border around an element to make it viewable outside of the true viewport
          bounds: obj.bounds || 0,
          // the debounce timeout
          debounce: obj.debounce || 50,
          // appear.js will also check for items on continuous slow scrolling
          // you can controll how slow the scrolling should be  (deltaSpeed)
          // and when it will check again (deltaTimeout) after it has inspected the dom/viewport;
          delta: {
            speed: obj.deltaSpeed || 50,
            timeout: obj.deltaTimeout || 500
          }
        };

        // add an event listener to init when dom is ready
        addEventListener('DOMContentLoaded', init, false);

        var isIE10 = false;
        if (Function('/*@cc_on return document.documentMode===10@*/')()){
          isIE10 = true;
        }
        var completeOrLoaded = document.readyState === 'complete' || document.readyState === 'loaded';

        // call init if document is ready to be worked with and we missed the event
        if (isIE10) {
          if (completeOrLoaded) {
            init();
          }
        } else {
          if (completeOrLoaded || document.readyState === 'interactive') {
            init();
          }
        }

        return {
          // manually fire check for visibility of tracked elements
          trigger: function trigger(){
            doCheckAppear();
          },
          // pause tracking of elements
          pause: function pause(){
            removeListeners();
          },
          // resume tracking of elements after a pause
          resume: function resume(){
            begin();
          },
          // provide a means to stop monitoring all elements
          destroy: function destroy() {
            end();
          }
        };

      };
    }()(obj));
  };
}());


/**
 * Header Component.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSHeader = {

    /**
     * Base configuration.
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      headerFixMoment: 0,
      headerFixEffect: 'slide',
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      }
    },

    /**
     * Initializtion of header.
     *
     * @param jQuery element
     *
     * @return jQuery
     */
    init: function( element ) {

      if( !element || element.length !== 1 || element.data('HSHeader')) return;

      var self = this,
       windowW = window.innerWidth;

      this.element = element;
      this.config = $.extend(true, {}, this._baseConfig, element.data());

      this.observers = this._detectObservers();
      this.fixMediaDifference( this.element );
      this.element.data('HSHeader', new HSHeader(this.element, this.config, this.observers ) );

      $(window)
        .on('scroll.uHeader', function(e){

          element
            .data('HSHeader')
            .notify();

        })
        .on('resize.uHeader', function(e){

          if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

          self.resizeTimeOutId = setTimeout( function(){

            element
              .data('HSHeader')
              .checkViewport();

          }, 100 );

        })
        .trigger('scroll.uHeader');


      $(window).on('resize.uHeader', function () {
        if (window.innerWidth === windowW) return;

        windowW = window.innerWidth;

        if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

        self.resizeTimeOutId = setTimeout( function(){

          element
            .data('HSHeader')
            .update();

        }, 100 );

      });

      return this.element;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    _detectObservers: function() {

      if(!this.element || !this.element.length) return;

      var observers = {
        'xs': [],
        'sm': [],
        'md': [],
        'lg': [],
        'xl': []
      };

      /* ------------------------ xs -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element') ) {
          observers['xs'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top') ) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section') ) {

            observers['xs'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating') ) {

          observers['xs'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable') ) {
          observers['xs'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom') ) {

          if(this.element.hasClass('u-header--change-appearance')) {
            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top') || this.element.hasClass('u-header--static')) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom') || this.element.hasClass('u-header--abs-top-2nd-screen') ) {

          observers['xs'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ sm -------------------------*/

        // Sticky top

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--sm') ) {
          observers['sm'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        if( this.element.hasClass('u-header--sticky-top--sm') ) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--sm') ) {

            observers['sm'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--sm') ) {

          observers['sm'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--sm') ) {
          observers['sm'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--sm') ) {

          if(this.element.hasClass('u-header--change-appearance--sm')) {
            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--sm') || this.element.hasClass('u-header--static--sm')) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--sm') || this.element.hasClass('u-header--abs-top-2nd-screen--sm') ) {

          observers['sm'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ md -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--md') ) {
          observers['md'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--md') ) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--md') ) {

            observers['md'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--md') ) {

          observers['md'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--md') ) {
          observers['md'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--md') ) {

          if(this.element.hasClass('u-header--change-appearance--md')) {
            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--md') || this.element.hasClass('u-header--static--md')) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--md') || this.element.hasClass('u-header--abs-top-2nd-screen--md') ) {

          observers['md'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      /* ------------------------ lg -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--lg') ) {
          observers['lg'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--lg') ) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--lg') ) {

            observers['lg'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--lg') ) {

          observers['lg'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--lg') ) {
          observers['lg'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--lg') ) {

          if(this.element.hasClass('u-header--change-appearance--lg')) {
            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--lg') || this.element.hasClass('u-header--static--lg')) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--lg') || this.element.hasClass('u-header--abs-top-2nd-screen--lg') ) {

          observers['lg'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ xl -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--xl') ) {
          observers['xl'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--xl') ) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--xl') ) {

            observers['xl'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--xl') ) {

          observers['xl'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        // Sticky bottom

        if( this.element.hasClass('u-header--invulnerable--xl') ) {
          observers['xl'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--xl') ) {

          if(this.element.hasClass('u-header--change-appearance--xl')) {
            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--xl') || this.element.hasClass('u-header--static--xl')) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--xl') || this.element.hasClass('u-header--abs-top-2nd-screen--xl') ) {

          observers['xl'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      return observers;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    fixMediaDifference: function(element) {

      if(!element || !element.length || !element.filter('[class*="u-header--side"]').length) return;

      var toggleable;

      if(element.hasClass('u-header--side-left--xl') || element.hasClass('u-header--side-right--xl')) {

        toggleable = element.find('.navbar-expand-xl');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-xl')
            .addClass('navbar-expand-lg');
        }

      }
      else if(element.hasClass('u-header--side-left--lg') || element.hasClass('u-header--side-right--lg')) {

        toggleable = element.find('.navbar-expand-lg');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-lg')
            .addClass('navbar-expand-md');
        }

      }
      else if(element.hasClass('u-header--side-left--md') || element.hasClass('u-header--side-right--md')) {

        toggleable = element.find('.navbar-expand-md');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-md')
            .addClass('navbar-expand-sm');
        }

      }
      else if(element.hasClass('u-header--side-left--sm') || element.hasClass('u-header--side-right--sm')) {

        toggleable = element.find('.navbar-expand-sm');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-sm')
            .addClass('navbar-expand');
        }

      }

    }

  }

  /**
   * HSHeader constructor function.
   *
   * @param jQuery element
   * @param Object config
   * @param Object observers
   *
   * @return undefined
   */
  function HSHeader( element, config, observers ) {

    if( !element || !element.length ) return;

    this.element = element;
    this.config = config;

    this.observers = observers && $.isPlainObject( observers ) ? observers : {};

    this.viewport = 'xs';
    this.checkViewport();

  }

  /**
   *
   *
   * @return Object
   */
  HSHeader.prototype.checkViewport = function() {

    var $w = $(window);

    if( $w.width() > this.config.breakpointsMap['sm'] && this.observers['sm'].length ){
      this.prevViewport = this.viewport;
      this.viewport = 'sm';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['md'] && this.observers['md'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'md';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['lg'] && this.observers['lg'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'lg';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['xl'] && this.observers['xl'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'xl';
      return this;
    }


    if(this.prevViewport) this.prevViewport = this.viewport;
    this.viewport = 'xs';


    return this;

  }

  /**
   * Notifies all observers.
   *
   * @return Object
   */
  HSHeader.prototype.notify = function(){

    if( this.prevViewport ) {
      this.observers[this.prevViewport].forEach(function(observer){
        observer.destroy();
      });
      this.prevViewport = null;
    }

    this.observers[this.viewport].forEach(function(observer){
      observer.check();
    });

    return this;

  }

  /**
   * Reinit all header's observers.
   *
   * @return Object
   */
  HSHeader.prototype.update = function() {

    // if( this.prevViewport ) {
    //   this.observers[this.prevViewport].forEach(function(observer){
    //     observer.destroy();
    //   });
    //   this.prevViewport = null;
    // }

    for(var viewport in this.observers) {

      this.observers[viewport].forEach(function(observer){
        observer.destroy();
      });

    }

    this.prevViewport = null;

    this.observers[this.viewport].forEach(function(observer){
      observer.reinit();
    });

    return this;

  }

  /**
   * Abstract constructor function for each observer.
   *
   * @param jQuery element
   *
   * @return Boolean|undefined
   */
  function HSAbstractObserver(element) {
    if( !element || !element.length ) return;

    this.element = element;
    this.defaultState = true;

    this.reinit = function() {

      this
        .destroy()
        .init()
        .check();
    }

    return true;
  }

  /**
   * Header's observer which is responsible for 'sticky' behavior.
   *
   * @param jQuery element
   */
  function HSHeaderStickObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.init = function() {
    this.defaultState = true;
    this.offset = this.element.offset().top;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if(docScrolled < this.offset && !this.defaultState){
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.changeState = function() {

    this.element.addClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.toDefaultState = function() {

    this.element.removeClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }


  /**
   * Header's observer which is responsible for 'show/hide' behavior which is depended on scroll direction.
   *
   * @param jQuery element
   */
  function HSHeaderMomentShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.init = function() {
    this.direction = 'down';
    this.delta = 0;
    this.defaultState = true;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') != 0 ? this.element.data('header-fix-moment') : 5;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.checkDirection = function() {

    if( $(window).scrollTop() > this.delta ) {
      this.direction = 'down';
    }
    else {
      this.direction = 'up';
    }

    this.delta = $(window).scrollTop();

    return this;

  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.toDefaultState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.changeState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.check = function() {

    var docScrolled = $(window).scrollTop();
    this.checkDirection();


    if( docScrolled >= this.offset && this.defaultState && this.direction == 'down' ) {
      this.changeState();
    }
    else if ( !this.defaultState && this.direction == 'up') {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.init = function() {
    if(!this.defaultState && $(window).scrollTop() > this.offset) return this;

    this.defaultState = true;
    this.transitionDuration = parseFloat( getComputedStyle( this.element.get(0) )['transition-duration'], 10 ) * 1000;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') > this.element.outerHeight() ? this.element.data('header-fix-moment') : this.element.outerHeight() + 100;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.destroy = function() {
    if( !this.defaultState && $(window).scrollTop() > this.offset ) return this;

    this.element.removeClass('u-header--untransitioned');
    this._removeCap();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._insertCap = function() {

    this.element.addClass('js-header-fix-moment u-header--untransitioned');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', this.element.outerHeight() );

    }

    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      default :
        this.element.addClass('u-header--invisible')
    }

    this.capInserted = true;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._removeCap = function() {

    var self = this;

    this.element.removeClass('js-header-fix-moment');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', 0 );

    }

    if(this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);

    this.removeCapTimeOutId = setTimeout(function() {
      self.element.removeClass('u-header--moved-up u-header--faded u-header--invisible');
    }, 10);

    this.capInserted = false;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.check = function() {

    var $w = $(window);

    if( $w.scrollTop() > this.element.outerHeight() && !this.capInserted ) {
      this._insertCap();
    }
    else if($w.scrollTop() <= this.element.outerHeight() && this.capInserted) {
      this._removeCap();
    }

    if( $w.scrollTop() > this.offset && this.defaultState)  {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }



  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.changeState = function() {

    this.element.removeClass('u-header--untransitioned');

    if( this.animationTimeoutId ) clearTimeout( this.animationTimeoutId );

    switch( this.effect ) {
      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.toDefaultState = function() {

    var self = this;

    this.animationTimeoutId = setTimeout(function(){
      self.element.addClass('u-header--untransitioned');
    }, this.transitionDuration );


    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;
      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeLogoObserver( element, config ) {

    if( !HSAbstractObserver.call( this, element ) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }
    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 0;
    }
    if(this.hasFixedClass) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.imgs = this.element.find('.u-header__logo-img');
    this.defaultState = true;

    this.mainLogo = this.imgs.filter('.u-header__logo-img--main');
    this.additionalLogo = this.imgs.not('.u-header__logo-img--main');

    if( !this.imgs.length ) return this;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.check = function() {

    var $w = $(window);

    if( !this.imgs.length ) return this;

    if( $w.scrollTop() > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.changeState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.removeClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.addClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.toDefaultState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.addClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.removeClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHideSectionObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderHideSectionObserver.prototype.init = function() {

    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.section = this.element.find('.u-header__section--hidden');
    this.defaultState = true;

    this.sectionHeight = this.section.length ? this.section.outerHeight() : 0;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.destroy = function() {

    if( this.section.length ) {

      this.element.css({
        'margin-top': 0
      });

    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.check = function() {

    if(!this.section.length) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.changeState = function() {

    var self = this;

    this.element.stop().animate({
      'margin-top': self.sectionHeight * -1 - 1 // last '-1' is a small fix
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.toDefaultState = function() {

    this.element.stop().animate({
      'margin-top': 0
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeAppearanceObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }

    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    }

    if( this.hasFixedClass ) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.sections = this.element.find('[data-header-fix-moment-classes]');

    this.defaultState = true;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.check = function() {

    if( !this.sections.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.changeState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.addClass( classes + ' js-header-change-moment');
      $this.removeClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.toDefaultState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.removeClass( classes + ' js-header-change-moment' );
      $this.addClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHasHiddenElement(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      animated: true
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.init = function() {
    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.elements = this.element.find('.u-header--hidden-element');
    this.defaultState = true;
    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.check = function() {

    if( !this.elements.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.changeState = function() {

    if(this.config.animated) {
      this.elements.stop().slideUp();
    }
    else {
      this.elements.hide();
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.toDefaultState = function() {

    if(this.config.animated) {
      this.elements.stop().slideDown();
    }
    else {
      this.elements.show();
    }

    this.defaultState = !this.defaultState;
    return this;

  }





  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderFloatingObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = config && $.isPlainObject(config) ? $.extend(true, {}, this.config, config) : {};
    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.init = function() {

    this.offset = this.element.offset().top;
    this.sections = this.element.find('.u-header__section');

    this.defaultState = true;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.changeState = function() {

    this.element
        .addClass('js-header-fix-moment')
        .addClass( this.element.data('header-fix-moment-classes') )
        .removeClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.addClass( $section.data('header-fix-moment-classes') )
                .removeClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.toDefaultState = function() {

    this.element
        .removeClass('js-header-fix-moment')
        .removeClass( this.element.data('header-fix-moment-classes') )
        .addClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.removeClass( $section.data('header-fix-moment-classes') )
                .addClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderWithoutBehaviorObserver( element ) { if( !HSAbstractObserver.call(this, element) ) return; }

  HSHeaderWithoutBehaviorObserver.prototype.check = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.init = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.destroy = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.changeState = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.toDefaultState = function() {
    return this;
  }


})(jQuery);

/*
 * HS Mega Menu - jQuery Plugin
 * @version: 1.0.0 (Sun, 26 Feb 2017)
 * @requires: jQuery v1.6 or later
 * @author: HtmlStream
 * @event-namespace: .HSMegaMenu
 * @browser-support: IE9+
 * @license:
 *
 * Copyright 2017 HtmlStream
 *
 */
;(function ($) {
  'use strict';

  /**
   * Creates a mega menu.
   *
   * @constructor
   * @param {HTMLElement|jQuery} element - The element to create the mega menu for.
   * @param {Object} options - The options
   */

  var MegaMenu = window.MegaMenu || {};

  MegaMenu = (function () {

    function MegaMenu(element, options) {

      var self = this;

      /**
       * Current element.
       *
       * @public
       */
      this.$element = $(element);

      /**
       * Current options set by the caller including defaults.
       *
       * @public
       */
      this.options = $.extend(true, {}, MegaMenu.defaults, options);


      /**
       * Collection of menu elements.
       *
       * @private
       */
      this._items = $();


      Object.defineProperties(this, {

        /**
         * Contains composed selector of menu items.
         *
         * @public
         */
        itemsSelector: {
          get: function () {
            return self.options.classMap.hasSubMenu + ',' +
              self.options.classMap.hasMegaMenu;
          }
        },

        /**
         * Contains chain of active items.
         *
         * @private
         */
        _tempChain: {
          value: null,
          writable: true
        },

        /**
         * Contains current behavior state.
         *
         * @public
         */
        state: {
          value: null,
          writable: true
        }

      });

      this.initialize();

    }

    return MegaMenu;

  }());


  /**
   * Default options of the mega menu.
   *
   * @public
   */
  MegaMenu.defaults = {
    event: 'hover',
    direction: 'horizontal',
    breakpoint: 991,
    animationIn: false,
    animationOut: false,

    rtl: false,
    hideTimeOut: 300,

    // For 'vertical' direction only
    sideBarRatio: 1 / 4,
    pageContainer: $('body'),

    classMap: {
      initialized: '.hs-menu-initialized',
      mobileState: '.hs-mobile-state',

      subMenu: '.hs-sub-menu',
      hasSubMenu: '.hs-has-sub-menu',
      hasSubMenuActive: '.hs-sub-menu-opened',

      megaMenu: '.hs-mega-menu',
      hasMegaMenu: '.hs-has-mega-menu',
      hasMegaMenuActive: '.hs-mega-menu-opened'
    },

    mobileSpeed: 400,
    mobileEasing: 'linear',

    isMenuOpened: false,

    beforeOpen: function () {},
    beforeClose: function () {},
    afterOpen: function () {},
    afterClose: function () {}
  };

  /**
   * Initialization of the plugin.
   *
   * @protected
   */
  MegaMenu.prototype.initialize = function () {
    var self = this,
      $w = $(window);

    if (this.options.rtl) this.$element.addClass('hs-rtl');

    this.$element
      .addClass(this.options.classMap.initialized.slice(1))
      .addClass('hs-menu-' + this.options.direction);


    // Independent events
    $w.on('resize.HSMegaMenu', function (e) {

      if (self.resizeTimeOutId) clearTimeout(self.resizeTimeOutId);

      self.resizeTimeOutId = setTimeout(function () {

        if (window.innerWidth <= self.options.breakpoint && self.state === 'desktop') self.initMobileBehavior();
        else if (window.innerWidth > self.options.breakpoint && self.state === 'mobile') self.initDesktopBehavior();

        self.refresh();

      }, 50);

    });

    if(window.innerWidth >= 768) {

      $(document).on('click.HSMegaMenu touchstart.HSMegaMenu', 'body', function (e) {

        var $parents = $(e.target).parents(self.itemsSelector);

        self.closeAll($parents.add($(e.target)));

      });

    }

    $w.on('keyup.HSMegaMenu', function (e) {

      if (e.keyCode && e.keyCode === 27) {

        self.closeAll();

        self.options.isMenuOpened = false;
      }

    });

    if (window.innerWidth <= this.options.breakpoint) this.initMobileBehavior();
    else if (window.innerWidth > this.options.breakpoint) this.initDesktopBehavior();

    this.smartPositions();

    return this;

  };

  MegaMenu.prototype.smartPositions = function () {

    var self = this,
      $submenus = this.$element.find(this.options.classMap.subMenu);

    $submenus.each(function (i, el) {

      MenuItem.smartPosition($(el), self.options);

    });

  };

  /**
   * Binding events to menu elements.
   *
   * @protected
   */
  MegaMenu.prototype.bindEvents = function () {

    var self = this,
      selector;

    // Hover case
    if (this.options.event === 'hover' && !_isTouch()) {
      this.$element
        .on(
          'mouseenter.HSMegaMenu',
          this.options.classMap.hasMegaMenu + ':not([data-event="click"]),' +
          this.options.classMap.hasSubMenu + ':not([data-event="click"])',
          function (e) {

            var $this = $(this),
              $chain = $this.parents(self.itemsSelector);

            // Lazy initialization
            if (!$this.data('HSMenuItem')) {
              self.initMenuItem($this, self.getType($this));
            }

            $chain = $chain.add($this);

            self.closeAll($chain);

            $chain.each(function (i, el) {

              var HSMenuItem = $(el).data('HSMenuItem');

              if (HSMenuItem.hideTimeOutId) clearTimeout(HSMenuItem.hideTimeOutId);
              HSMenuItem.desktopShow();

            });

            self._items = self._items.not($chain);
            self._tempChain = $chain;

            e.preventDefault();
            e.stopPropagation();
          }
        )
        .on(
          'mouseleave.HSMegaMenu',
          this.options.classMap.hasMegaMenu + ':not([data-event="click"]),' +
          this.options.classMap.hasSubMenu + ':not([data-event="click"])',
          function (e) {

            if (!$(this).data('HSMenuItem')) return;

            var $this = $(this),
              HSMenuItem = $this.data('HSMenuItem'),
              $chain = $(e.relatedTarget).parents(self.itemsSelector);

            HSMenuItem.hideTimeOutId = setTimeout(function () {
              self.closeAll($chain);
            }, self.options.hideTimeOut);

            self._items = self._items.add(self._tempChain);
            self._tempChain = null;

            e.preventDefault();
            e.stopPropagation();
          }
        )
        .on(
          'click.HSMegaMenu touchstart.HSMegaMenu',
          this.options.classMap.hasMegaMenu + '[data-event="click"] > a, ' +
          this.options.classMap.hasSubMenu + '[data-event="click"] > a',
          function (e) {

            var $this = $(this).parent('[data-event="click"]'),
              HSMenuItem;

            // Lazy initialization
            if (!$this.data('HSMenuItem')) {
              self.initMenuItem($this, self.getType($this));
            }


            self.closeAll($this.add(
              $this.parents(self.itemsSelector)
            ));

            HSMenuItem = $this
              .data('HSMenuItem');

            if (HSMenuItem.isOpened) {
              HSMenuItem.desktopHide();
            } else {
              HSMenuItem.desktopShow();
            }


            e.preventDefault();
            e.stopPropagation();

          }
        );
    }
    // Click case
    else {

      this.$element
        .on(
          'click.HSMegaMenu',
          (_isTouch() ?
            this.options.classMap.hasMegaMenu + ' > a, ' +
            this.options.classMap.hasSubMenu + ' > a' :
            this.options.classMap.hasMegaMenu + ':not([data-event="hover"]) > a,' +
            this.options.classMap.hasSubMenu + ':not([data-event="hover"]) > a'),
          function (e) {

            var $this = $(this).parent(),
              HSMenuItem,
              $parents = $this.parents(self.itemsSelector);

            // Lazy initialization
            if (!$this.data('HSMenuItem')) {
              self.initMenuItem($this, self.getType($this));
            }

            self.closeAll($this.add(
              $this.parents(self.itemsSelector)
            ));

            HSMenuItem = $this
              .addClass('hs-event-prevented')
              .data('HSMenuItem');

            if (HSMenuItem.isOpened) {
              HSMenuItem.desktopHide();
            } else {
              HSMenuItem.desktopShow();
            }

            e.preventDefault();
            e.stopPropagation();
          }
        );

      if (!_isTouch()) {
        this.$element
          .on(
            'mouseenter.HSMegaMenu',
            this.options.classMap.hasMegaMenu + '[data-event="hover"],' +
            this.options.classMap.hasSubMenu + '[data-event="hover"]',
            function (e) {

              var $this = $(this),
                $parents = $this.parents(self.itemsSelector);

              // Lazy initialization
              if (!$this.data('HSMenuItem')) {
                self.initMenuItem($this, self.getType($this));
              }

              self.closeAll($this.add($parents));

              $parents.add($this).each(function (i, el) {

                var HSMenuItem = $(el).data('HSMenuItem');

                if (HSMenuItem.hideTimeOutId) clearTimeout(HSMenuItem.hideTimeOutId);
                HSMenuItem.desktopShow();

              });

              e.preventDefault();
              e.stopPropagation();
            }
          )
          .on(
            'mouseleave.HSMegaMenu',
            this.options.classMap.hasMegaMenu + '[data-event="hover"],' +
            this.options.classMap.hasSubMenu + '[data-event="hover"]',
            function (e) {

              var $this = $(this),
                HSMenuItem = $this.data('HSMenuItem');

              HSMenuItem.hideTimeOutId = setTimeout(function () {

                self.closeAll(
                  $(e.relatedTarget).parents(self.itemsSelector)
                );

              }, self.options.hideTimeOut);

              e.preventDefault();
              e.stopPropagation();
            }
          )
      }
    }

    this.$element.on('keydown.HSMegaMenu',
      this.options.classMap.hasMegaMenu + ' > a,' +
      this.options.classMap.hasSubMenu + ' > a',
      function (e) {

        var $this = $(this),
          $parent = $this.parent(),
          HSMenuItem;

        // Lazy initialization
        if (!$parent.data('HSMenuItem')) {

          self.initMenuItem($parent, self.getType($parent));

        }

        HSMenuItem = $parent.data('HSMenuItem');

        if ($this.is(':focus')) {

          if (e.keyCode && e.keyCode === 40) {

            e.preventDefault();

            HSMenuItem.desktopShow();

            self.options.isMenuOpened = true;

          }

          if (e.keyCode && e.keyCode === 13) {

            if (self.options.isMenuOpened === true) {

              HSMenuItem.desktopHide();

              self.options.isMenuOpened = false;

            } else {

              HSMenuItem.desktopShow();

              self.options.isMenuOpened = true;

            }

          }

        }

        $this.on('focusout', function () {

          self.options.isMenuOpened = false;

        });

        HSMenuItem.menu.find('a').on('focusout', function () {

          setTimeout(function () {

            if (!HSMenuItem.menu.find('a').is(':focus')) {

              HSMenuItem.desktopHide();

              self.options.isMenuOpened = false;

            }

          });

        });

      })
  };

  /**
   * Initialization of certain menu item.
   *
   * @protected
   */
  MegaMenu.prototype.initMenuItem = function (element, type) {

    var self = this,
      Item = new MenuItem(
        element,
        element.children(
          self.options.classMap[type === 'mega-menu' ? 'megaMenu' : 'subMenu']
        ),
        $.extend(true, {type: type}, self.options, element.data()),
        self.$element
      );

    element.data('HSMenuItem', Item);
    this._items = this._items.add(element);

  };

  /**
   * Destroys of desktop behavior, then makes initialization of mobile behavior.
   *
   * @protected
   */
  MegaMenu.prototype.initMobileBehavior = function () {

    var self = this;

    this.state = 'mobile';

    this.$element
      .off('.HSMegaMenu')
      .addClass(this.options.classMap.mobileState.slice(1))
      .on('click.HSMegaMenu', self.options.classMap.hasSubMenu + ' > a, ' + self.options.classMap.hasMegaMenu + ' > a', function (e) {

        var $this = $(this).parent(),
          MenuItemInstance;

        // Lazy initialization
        if (!$this.data('HSMenuItem')) {
          self.initMenuItem($this, self.getType($this));
        }

        self.closeAll($this.parents(self.itemsSelector).add($this));

        MenuItemInstance = $this
          .data('HSMenuItem');

        if (MenuItemInstance.isOpened) {
          MenuItemInstance.mobileHide();
        } else {
          MenuItemInstance.mobileShow();
        }

        e.preventDefault();
        e.stopPropagation();

      })
      .find(this.itemsSelector)
      .not(
        this.options.classMap.hasSubMenuActive + ',' +
        this.options.classMap.hasMegaMenuActive
      )
      .children(
        this.options.classMap.subMenu + ',' +
        this.options.classMap.megaMenu
      )
      .hide();

  };

  /**
   * Destroys of mobile behavior, then makes initialization of desktop behavior.
   *
   * @protected
   */
  MegaMenu.prototype.initDesktopBehavior = function () {

    this.state = 'desktop';

    this.$element
      .removeClass(this.options.classMap.mobileState.slice(1))
      .off('.HSMegaMenu')
      .find(this.itemsSelector)
      .not(
        this.options.classMap.hasSubMenuActive + ',' +
        this.options.classMap.hasMegaMenuActive
      )
      .children(
        this.options.classMap.subMenu + ',' +
        this.options.classMap.megaMenu
      )
      .hide();

    this.bindEvents();

  };

  /**
   * Hides all of opened submenus/megamenus.
   *
   * @param {jQuery} except - collection of elements, which shouldn't be closed.
   * @return {jQuery}
   * @public
   */
  MegaMenu.prototype.closeAll = function (except) {

    var self = this;

    return this._items.not(except && except.length ? except : $()).each(function (i, el) {

      $(el)
        .removeClass('hs-event-prevented')
        .data('HSMenuItem')[self.state === 'mobile' ? 'mobileHide' : 'desktopHide']();

    });

  };

  /**
   * Returns type of sub menu based on specified menu item.
   *
   * @param {jQuery} item
   * @return {String|null}
   * @public
   */
  MegaMenu.prototype.getType = function (item) {

    if (!item || !item.length) return null;

    return item.hasClass(this.options.classMap.hasSubMenu.slice(1)) ? 'sub-menu' :
      (item.hasClass(this.options.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null);

  };

  /**
   * Returns current menu state.
   *
   * @return {String}
   * @public
   */
  MegaMenu.prototype.getState = function () {
    return this.state;
  };

  /**
   * Updates bounds of all menu items.
   *
   * @return {jQuery}
   * @public
   */
  MegaMenu.prototype.refresh = function () {

    return this._items.add(this._tempChain).each(function (i, el) {
      $(el).data('HSMenuItem')._updateMenuBounds();
    });

  };


  /**
   * Creates a mega-menu element.
   *
   * @param {jQuery} element
   * @param {jQuery} menu
   * @param {Object} options
   * @param {jQuery} container
   * @constructor
   */
  function MenuItem(element, menu, options, container) {

    var self = this;

    /**
     * Current menu item element.
     *
     * @public
     */
    this.$element = element;

    /**
     * Current mega menu element.
     *
     * @public
     */
    this.menu = menu;

    /**
     * Item options.
     *
     * @public
     */
    this.options = options;


    /**
     * MegaMenu container.
     *
     * @public
     */
    this.$container = container;

    Object.defineProperties(this, {

      /**
       * Contains css class of menu item element.
       *
       * @public
       */
      itemClass: {
        get: function () {
          return self.options.type === 'mega-menu' ?
            self.options.classMap.hasMegaMenu :
            self.options.classMap.hasSubMenu;
        }
      },

      /**
       * Contains css active-class of menu item element.
       *
       * @public
       */
      activeItemClass: {
        get: function () {
          return self.options.type === 'mega-menu' ?
            self.options.classMap.hasMegaMenuActive :
            self.options.classMap.hasSubMenuActive;
        }
      },

      /**
       * Contains css class of menu element.
       *
       * @public
       */
      menuClass: {
        get: function () {
          return self.options.type === 'mega-menu' ?
            self.options.classMap.megaMenu :
            self.options.classMap.subMenu;
        }
      },

      isOpened: {
        get: function () {
          return this.$element.hasClass(this.activeItemClass.slice(1));
        }
      }

    });


    this.menu.addClass('animated').on('click.HSMegaMenu', function (e) {
      self._updateMenuBounds();
    });

    if (this.$element.data('max-width')) this.menu.css('max-width', this.$element.data('max-width'));
    if (this.$element.data('position')) this.menu.addClass('hs-position-' + this.$element.data('position'));


    if (this.options.animationOut) {

      this.menu.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

        if (self.menu.hasClass(self.options.animationOut)) {
          self.$element.removeClass(self.activeItemClass.slice(1));
          self.options.afterClose.call(self, self.$element, self.menu);
        }

        if (self.menu.hasClass(self.options.animationIn)) {
          self.options.afterOpen.call(self, self.$element, self.menu);
        }

        e.stopPropagation();
        e.preventDefault();
      });
    }

  }

  /**
   * Shows the mega-menu item.
   *
   * @public
   * @return {MenuItem}
   */
  MenuItem.prototype.desktopShow = function () {
    if (!this.menu.length) return this;

    this.$element.addClass(this.activeItemClass.slice(1));

    this._updateMenuBounds();

    this.menu.show();

    if (this.options.direction === 'horizontal') this.smartPosition(this.menu, this.options);

    if (this.options.animationOut) {
      this.menu.removeClass(this.options.animationOut);
    } else {
      this.options.afterOpen.call(this, this.$element, this.menu);
    }

    if (this.options.animationIn) {
      this.menu.addClass(this.options.animationIn)
    }

    return this;
  }

  /**
   * Hides the mega-menu item.
   *
   * @public
   * @return {MenuItem}
   */
  MenuItem.prototype.desktopHide = function () {

    var self = this;

    if (!this.menu.length) return this;

    this.$element.removeClass(this.activeItemClass.slice(1));

    this.menu.hide();

    if (this.options.animationIn) {
      this.menu.removeClass(this.options.animationIn);
    }
    if (this.options.animationOut) {
      this.menu.addClass(this.options.animationOut);
    } else {
      this.options.afterClose.call(this, this.$element, this.menu);
    }

    return this;
  }

  /**
   * Shows the mega-menu item.
   *
   * @public
   * @return {MenuItem}
   */
  MenuItem.prototype.mobileShow = function () {
    var self = this;

    if (!this.menu.length) return this;


    this.menu
      .removeClass(this.options.animationIn)
      .removeClass(this.options.animationOut)
      .stop()
      .slideDown({
        duration: self.options.mobileSpeed,
        easing: self.options.mobileEasing,
        complete: function () {
          self.options.afterOpen.call(self, self.$element, self.menu);
        }
      });

    this.$element.addClass(this.activeItemClass.slice(1));

    return this;
  };

  /**
   * Hides the mega-menu item.
   *
   * @public
   * @return {MenuItem}
   */
  MenuItem.prototype.mobileHide = function () {
    var self = this;

    if (!this.menu.length) return this;

    this.menu.stop().slideUp({
      duration: self.options.mobileSpeed,
      easing: self.options.mobileEasing,
      complete: function () {
        self.options.afterClose.call(self, self.$element, self.menu);
      }
    });

    this.$element.removeClass(this.activeItemClass.slice(1));

    return this;
  };

  /**
   * Check, if element is in viewport.
   *
   * @param {jQuery} element
   * @param {Object} options
   * @public
   */
  MenuItem.prototype.smartPosition = function (element, options) {

    MenuItem.smartPosition(element, options);

  };

  /**
   * Check, if element is in viewport.
   *
   * @param {jQuery} element
   * @param {Object} options
   * @static
   * @public
   */
  MenuItem.smartPosition = function (element, options) {
    if (!element && !element.length) return;

    var $w = $(window);

    element.removeClass('hs-reversed');

    if (!options.rtl) {

      if (element.offset().left + element.outerWidth() > window.innerWidth) {
        element.addClass('hs-reversed');
      }

    } else {

      if (element.offset().left < 0) {
        element.addClass('hs-reversed');
      }

    }
  };

  /**
   * Updates bounds of current opened menu.
   *
   * @private
   */
  MenuItem.prototype._updateMenuBounds = function () {

    var width = 'auto';

    if (this.options.direction === 'vertical' && this.options.type === 'mega-menu') {

      if (this.$container && this.$container.data('HSMegaMenu').getState() === 'desktop') {
        if (!this.options.pageContainer.length) this.options.pageContainer = $('body');
        width = this.options.pageContainer.outerWidth() * (1 - this.options.sideBarRatio);
      } else {
        width = 'auto';
      }


      this.menu.css({
        'width': width,
        'height': 'auto'
      });

      if (this.menu.outerHeight() > this.$container.outerHeight()) {
        return;
      }

      this.menu.css('height', '100%');
    }

  };

  /**
   * The jQuery plugin for the MegaMenu.
   *
   * @public
   */

  $.fn.HSMegaMenu = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (typeof opt === 'object' || typeof opt === 'undefined')
        _[i].MegaMenu = new MegaMenu(_[i], opt);
      else
        ret = _[i].MegaMenu[opt].apply(_[i].MegaMenu, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };

  /**
   * Helper function for detect touch events in the environment.
   *
   * @return {Boolean}
   * @private
   */
  function _isTouch() {
    return ('ontouchstart' in window);
  }

})(jQuery);

/*
 * Author: Digital Zoom Studio
 * Website: http://digitalzoomstudio.net/
 * Portfolio: http://codecanyon.net/user/ZoomIt/portfolio
 *
 * Version: 2.63
 *
 */

//"use strict";

window.dzsprx_self_options = {};

(function($) {

    $.fn.dzsparallaxer = function(o) {

        var defaults = {
            settings_mode : 'scroll' // scroll or mouse or mouse_body or oneelement
            , mode_scroll : 'normal' // -- normal or fromtop
            , easing : 'easeIn' // -- easeIn or easeOutQuad or easeInOutSine
            , animation_duration : '20' // -- animation duration in ms
            , direction: 'normal' // -- normal or reverse
            , js_breakout: 'off' // -- if on it will try to breakout of the container and cover fullwidth
            , breakout_fix: 'off' // -- if you are using a div breakout this will add classes and tagnames back
            , is_fullscreen: 'off' // -- if this is fullscreen parallaxer, then we can just follow
            ,settings_movexaftermouse: "off" // -- if on the parallax will move after the mouse
            ,init_delay: "0" // -- a delay on which to start the init function
            ,init_functional_delay: "0" // -- a delay on which to start the parallax movement
            ,settings_substract_from_th: 0 // -- if you only want to show some part of the image you can substract pixels from the total height
            ,settings_detect_out_of_screen: true // -- detect if the parallax is outside the viewable area and not animate handleframe
            ,init_functional_remove_delay_on_scroll: "off" // -- remove the delay on which to start the parallax movement
            ,settings_makeFunctional: false
            ,settings_scrollTop_is_another_element_top: null // -- an object on which the scroll is actually simulated into an elements top position

            ,settings_clip_height_is_window_height: false // -- replace the clip height to the window height
            ,settings_listen_to_object_scroll_top: null // -- replace the scroll top listening with a value from the outside
            ,settings_mode_oneelement_max_offset : '20'
            ,simple_parallaxer_convert_simple_img_to_bg_if_possible:"on"
        }

        if(typeof o =='undefined'){
            if(typeof $(this).attr('data-options')!='undefined'  && $(this).attr('data-options')!=''){
                var aux = $(this).attr('data-options');
                aux = 'window.dzsprx_self_options = ' + aux;
                eval(aux);
                o = $.extend({},window.dzsprx_self_options);
                window.dzsprx_self_options = $.extend({},{});
            }
        }


        o = $.extend(defaults, o);



        Math.easeIn = function(t, b, c, d) {

            return -c *(t/=d)*(t-2) + b;

        };

        Math.easeOutQuad = function (t, b, c, d) {
            t /= d;
            return -c * t*(t-2) + b;
        };
        Math.easeInOutSine = function (t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        };

        o.settings_mode_oneelement_max_offset = parseInt(o.settings_mode_oneelement_max_offset,10);
        var simple_parallaxer_max_offset = parseInt(o.settings_mode_oneelement_max_offset,10);

        this.each( function(){
            var cthis = $(this);
            var _theTarget = null
                ,_blackOverlay = null
                ,_fadeouttarget = null
                ;

            var nritems = 0
                ,tobeloaded=0
                ;
            var i =0;

            var tw = 0
                ,th = 0
                ,ch = 0
                ,cw = 0
                ,ww = 0
                ,wh = 0
                ,last_wh = 0 // -- compare to the last known last wh
                ,last_cthis_ot = 0 // -- compare to the last known last wh
                ,initialheight = 0
                ;

            var int_calculate_dims = 0;


            // Starting time and duration.

            // Starting Target, Begin, Finish & Change
            // --- easing params

            var duration_viy = 0
                ;

            var target_viy = 0
                ,target_vix = 0
                ,target_bo = 0
                ;

            var begin_viy = 0
                ,begin_vix = 0
                ,begin_bo = 0
                ;

            var finish_viy = 0
                ,finish_vix = 0
                ,finish_bo = 0
                ;

            var change_viy = 0
                ,change_vix = 0
                ,change_bo = 0
                ;

            var backup_duration_viy = 0
            var api_outer_update_func = null
                ,_scrollTop_is_another_element_top = null
                ;


            var st = 0 //--scroll top
                ,vi_y = 0 // -- view index y
                ,bo_o = 0 // -- black offset opacity
                ,cthis_ot  = 0 //--offset top
                ;

            var lazyloading_setsource = '';

            var started = false
                ,debug_var = false
                ;

            var animator_objects_arr = null;

            var stop_enter_frame = false
                ,sw_suspend_functional = false
                ,sw_stop_enter_frame = false
                ,sw_out_of_display = false

                ;

            var init_delay = 0
                ,init_functional_delay = 0
                ;

            var inter_debug_func=0
                ,inter_suspend_enter_frame = 0
                ,inter_scroll_from_resize = 0
                ,inter_recheck_dims = 0
                ;

            // -- some rresponsive scaling options

            var responsive_reference_width = 0
                ,responsive_optimal_height = 0
                ;



            init_delay = Number(o.init_delay);
            init_functional_delay = Number(o.init_functional_delay);


            if(init_delay){
                setTimeout(init, init_delay);
            }else{

                init();
            }

            function init(){


                //console.warn('init()',cthis);
                if (o.settings_makeFunctional == true) {
                    var allowed = false;

                    var url = document.URL;
                    var urlStart = url.indexOf("://") + 3;
                    var urlEnd = url.indexOf("/", urlStart);
                    var domain = url.substring(urlStart, urlEnd);
                    //console.log(domain);
                    if (domain.indexOf('l') > -1 && domain.indexOf('c') > -1 && domain.indexOf('o') > -1 && domain.indexOf('l') > -1 && domain.indexOf('a') > -1 && domain.indexOf('h') > -1) {
                        allowed = true;
                    }
                    if (domain.indexOf('d') > -1 && domain.indexOf('i') > -1 && domain.indexOf('g') > -1 && domain.indexOf('d') > -1 && domain.indexOf('z') > -1 && domain.indexOf('s') > -1) {
                        allowed = true;
                    }
                    if (domain.indexOf('o') > -1 && domain.indexOf('z') > -1 && domain.indexOf('e') > -1 && domain.indexOf('h') > -1 && domain.indexOf('t') > -1) {
                        allowed = true;
                    }
                    if (domain.indexOf('e') > -1 && domain.indexOf('v') > -1 && domain.indexOf('n') > -1 && domain.indexOf('a') > -1 && domain.indexOf('t') > -1) {
                        allowed = true;
                    }
                    if (allowed == false) {
                        return;
                    }

                }


                if(o.settings_scrollTop_is_another_element_top){
                    _scrollTop_is_another_element_top = o.settings_scrollTop_is_another_element_top;
                }



                _theTarget = cthis.find('.dzsparallaxer--target').eq(0);
                if(cthis.find('.dzsparallaxer--blackoverlay').length>0){
                    _blackOverlay = cthis.find('.dzsparallaxer--blackoverlay').eq(0);
                }
                if(cthis.find('.dzsparallaxer--fadeouttarget').length>0){
                    _fadeouttarget = cthis.find('.dzsparallaxer--fadeouttarget').eq(0);
                }

                if(!cthis.hasClass('wait-readyall')){
                    setTimeout(function(){
                        duration_viy = Number(o.animation_duration);
                    },300);
                }

                cthis.addClass('mode-'+o.settings_mode);

                //console.info(cthis,_theTarget, o);


                //console.info(duration_viy);

                //console.info(cthis,_theTarget,_blackOverlay, o);


                ch = cthis.height();
                if(o.settings_movexaftermouse=='on'){
                    cw = cthis.width();
                }

                if(_theTarget){
                    th = _theTarget.height();
                    if(o.settings_movexaftermouse=='on'){
                        tw = _theTarget.width();
                    }
                }
                if(o.settings_substract_from_th){
                    th-= o.settings_substract_from_th;
                }


                //console.info(cthis,ch);


                initialheight = ch;

                if(o.breakout_fix=='2'){
                    console.info(cthis.prev());
                }

                if(cthis.attr('data-responsive-reference-width')){
                    responsive_reference_width = Number(cthis.attr('data-responsive-reference-width'));
                }
                if(cthis.attr('data-responsive-optimal-height')){
                    responsive_optimal_height = Number(cthis.attr('data-responsive-optimal-height'));
                }

                //console.log(cthis, responsive_reference_width, responsive_optimal_height);


                //console.info(is_touch_device());

                if(cthis.find('.dzsprxseparator--bigcurvedline').length>0){
                    cthis.find('.dzsprxseparator--bigcurvedline').append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="#FFFFFF" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>');
                }

                if(cthis.find('.dzsprxseparator--2triangles').length>0){
                    cthis.find('.dzsprxseparator--2triangles').append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="#FFFFFF" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>');
                }
                if(cthis.find('.dzsprxseparator--triangle').length>0){
                    cthis.find('.dzsprxseparator--triangle').append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="#FFFFFF" points="2200,100 0,100 0,0 2200,100 "/></svg>');
                }


                if(cthis.get(0)){
                    cthis.get(0).api_set_scrollTop_is_another_element_top = function(arg){
                        //console.info('actually!! api_set_scrollTop_is_another_element_top', arg);
                        _scrollTop_is_another_element_top = arg;
                    }
                }

                // console.info('is_touch_device - ', is_touch_device());

                if(is_touch_device()){
                    cthis.addClass('is-touch');
                }
                if(is_mobile()){
                    cthis.addClass('is-mobile');
                }

                if(cthis.find('.divimage').length>0 || cthis.find('img').length>0){
                    var _loadTarget = cthis.children('.divimage, img').eq(0);
                    //console.info(_loadTarget.attr('data-src'));

                    if(_loadTarget.attr('data-src')){
                        lazyloading_setsource = _loadTarget.attr('data-src');
                        $(window).on('scroll',handle_scroll);
                        handle_scroll();

                    }else{
                        init_start();
                    }
                }else{

                    init_start();
                }




            }

            function init_start(){

                if(started){
                    return;
                }
                started = true;

                //console.info(is_ie, is_ie(), version_ie(), is_ie11());
                if(is_ie11()){
                    cthis.addClass('is-ie-11');
                }



                //$(window).unbind('resize',handle_resize);
                $(window).bind('resize',handle_resize);
                handle_resize();

                inter_recheck_dims = setInterval(function(){
                    handle_resize(null, {
                        'call_from': 'autocheck'
                    })
                },2000);

                if(cthis.hasClass('wait-readyall')){
                    setTimeout(function(){
                        handle_scroll();
                    },700);
                }

                setTimeout(function(){
                    cthis.addClass('dzsprx-readyall');
                    handle_scroll();

                    if(cthis.hasClass('wait-readyall')) {
                        duration_viy = Number(o.animation_duration);
                    }
                },1000);

                if(cthis.find('*[data-parallaxanimation]').length>0) {
                    cthis.find('*[data-parallaxanimation]').each(function () {
                        var _t = $(this);
                        //console.info(_t);

                        if(_t.attr('data-parallaxanimation')){
                            if(animator_objects_arr==null){
                                animator_objects_arr = [];
                            }

                            animator_objects_arr.push(_t);


                            var aux = _t.attr('data-parallaxanimation');
                            aux = 'window.aux_opts2 = ' + aux;
                            aux = aux.replace(/'/g, '"')
                            // console.info(aux);
                            try {
                                eval(aux);
                            }
                            catch(err) {
                                console.info(aux, err);
                                window.aux_opts2=null;
                            }
                            //console.info(aux_opts2);

                            if(window.aux_opts2){
                                for(i=0;i<window.aux_opts2.length;i++){
                                    if(isNaN(Number(window.aux_opts2[i].initial))==false){
                                        window.aux_opts2[i].initial = Number(window.aux_opts2[i].initial);
                                    }
                                    if(isNaN(Number(window.aux_opts2[i].mid))==false){
                                        window.aux_opts2[i].mid = Number(window.aux_opts2[i].mid);
                                    }
                                    if(isNaN(Number(window.aux_opts2[i].final))==false){
                                        window.aux_opts2[i].final = Number(window.aux_opts2[i].final);
                                    }
                                }
                                _t.data('parallax_options', window.aux_opts2);
                                //console.info(_t, _t.data('parallax_options'));
                            }

                        }

                    });
                }

                //console.info(animator_objects_arr);

                if(init_functional_delay){
                    sw_suspend_functional = true;
                    //console.info('CEVA');

                    setTimeout(function(){
                        sw_suspend_functional = false;
                    },init_functional_delay)
                }


                if(!cthis.hasClass('simple-parallax')){
                    handle_frame();
                }else{
                    _theTarget.wrap('<div class="simple-parallax-inner"></div>');

                    console.info()

                    if(o.simple_parallaxer_convert_simple_img_to_bg_if_possible=='on' && _theTarget.attr('data-src') && _theTarget.children().length==0){
                        _theTarget.parent().addClass('is-image');
                    }



                    if(simple_parallaxer_max_offset>0){
                        handle_frame();
                    }
                }

                inter_debug_func = setInterval(debug_func, 1000);


                setTimeout(function(){
                    //finish.y = -300;
                }, 1500);


                if(cthis.hasClass('use-loading')){
                    if(cthis.find('.divimage').length>0 || cthis.children('img').length>0){
                        if(cthis.find('.divimage').length>0){
                            if(lazyloading_setsource){
                                cthis.find('.divimage').eq(0).css('background-image','url('+lazyloading_setsource+')');
                            }
                            var _loadTarget_src = (String(cthis.find('.divimage').eq(0).css('background-image')).split('"'))[1];
                            if(_loadTarget_src == undefined){
                                _loadTarget_src = (String(cthis.find('.divimage').eq(0).css('background-image')).split('url('))[1];
                                _loadTarget_src = (String(_loadTarget_src).split(')'))[0];
                            }
                            var _loadTarget = new Image();

                            //console.info(cthis.find('.divimage').eq(0).css('background-image'), _loadTarget_src);

                            _loadTarget.onload = function(e){
                                cthis.addClass('loaded');
                            };



                            _loadTarget.src = _loadTarget_src;

                        }
                    }else{

                        cthis.addClass('loaded');
                    }

                    setTimeout(function(){
                        cthis.addClass('loaded');
                        calculate_dims();
                    }, 10000)
                }


                cthis.get(0).api_set_update_func = function(arg){
                    api_outer_update_func = arg;
                }
                cthis.get(0).api_handle_scroll = handle_scroll;
                cthis.get(0).api_destroy = destroy;
                cthis.get(0).api_destroy_listeners = destroy_listeners;


                if(o.settings_mode == 'scroll' || o.settings_mode=='oneelement'){
                    $(window).off('scroll',handle_scroll);
                    $(window).on('scroll',handle_scroll);
                    handle_scroll();
                    setTimeout(handle_scroll,1000);

                    if(document && document.addEventListener){

                        document.addEventListener("touchmove", handle_mousemove, false);
                    }


                }

                if(o.settings_mode == 'mouse_body' || o.settings_movexaftermouse=='on'){
                    $(document).bind('mousemove', handle_mousemove);
                }
            }

            function destroy(){
                api_outer_update_func = null;
                stop_enter_frame = true;
                api_outer_update_func = null;
                $(window).off('scroll',handle_scroll);
                if(document && document.addEventListener){

                    document.removeEventListener("touchmove", handle_mousemove, false);
                }
            }
            function debug_func(){
                //console.info(debug_var);
                debug_var = true;
            }
            function destroy_listeners(){

                //console.info('DESTROY LISTENERS');

                clearInterval(inter_debug_func);
                clearInterval(inter_recheck_dims);
                sw_stop_enter_frame = true;
            }

            function handle_resize(e, pargs){
                cw=cthis.width();
                ww = window.innerWidth;
                wh = window.innerHeight;

                var margs = {
                    'call_from': 'event'
                };

                if(pargs){
                    margs = $.extend(margs,pargs);
                }


                if(started===false){
                    return;
                }


                if(o.settings_mode=='oneelement'){
                    var last_translate = cthis.css('transform');
                    cthis.css('transform','translate3d(0,0,0)');
                }


                cthis_ot = parseInt(cthis.offset().top,10);


                if(margs.call_from=='autocheck'){
                    if(Math.abs(last_wh-wh)<4 && Math.abs(last_cthis_ot-cthis_ot)<4){
                        if(o.settings_mode=='oneelement') {
                            cthis.css('transform', last_translate);
                        }
                        return false;
                    }
                }
                // console.warn('handle_resize', last_wh, wh, st, last_cthis_ot, cthis_ot, margs);
                last_wh = wh;
                last_cthis_ot = cthis_ot;




                // console.info(cthis_ot, cthis);

                //console.warn(responsive_reference_width, responsive_optimal_height);

                if(responsive_reference_width && responsive_optimal_height){
                    if(cw<responsive_reference_width){
                        var aux = cw/responsive_reference_width*responsive_optimal_height;
                        //console.log(aux);

                        cthis.height(aux);
                    }else{

                        cthis.height(responsive_optimal_height);
                    }
                }

                if(cw<760){
                    cthis.addClass('under-760')
                }else{

                    cthis.removeClass('under-760')
                }
                if(cw<500){
                    cthis.addClass('under-500')
                }else{

                    cthis.removeClass('under-500')
                }

                if(int_calculate_dims){
                    clearTimeout(int_calculate_dims);
                }

                int_calculate_dims = setTimeout(calculate_dims,700);


                if(o.js_breakout=='on'){
                    cthis.css('width',ww+'px');

                    cthis.css('margin-left','0');

                    //console.info(cthis, cthis.get(0).offsetLeft, cthis.offset().left, _theTarget.offset().left)

                    if(cthis.offset().left>0){
                        cthis.css('margin-left','-'+cthis.offset().left+'px');
                    }
                }

                if(o.is_fullscreen=='on'){
                    //console.log(_theTarget,_theTarget.height(), target_viy, ch, th, wh);

                    // -- trying to fix damage ..
                    //if(th + target_viy < wh){
                    //    target_viy = wh-th;
                    //    vi_y = wh-th;
                    //    //console.info('WHAT HERE', duration_viy, vi_y);
                    //    if(duration_viy>0){
                    //
                    //        backup_duration_viy = duration_viy;
                    //    }
                    //    duration_viy = 0;
                    //    //console.log('yesyes', _theTarget,th, target_viy, ch, th, wh);
                    //    handle_scroll(null, {force_vi_y : vi_y});
                    //    setTimeout(function(){
                    //        //console.info('WHAT', backup_duration_viy);
                    //        duration_viy = backup_duration_viy;
                    //    },50)
                    //    //console.info(target_viy, th-_theTarget.height())
                    //}
                }
            }

            function calculate_dims(){

                //console.info(_theTarget);
                ch = cthis.outerHeight();
                th = _theTarget.outerHeight();
                wh = window.innerHeight;

                if(o.settings_substract_from_th){
                    th-= o.settings_substract_from_th;
                }

                if(o.settings_clip_height_is_window_height){
                    ch = window.innerHeight;
                }




                //return;

                //console.info(initialheight);
                if(cthis.hasClass('allbody')==false && cthis.hasClass('dzsparallaxer---window-height')==false && responsive_reference_width==0){

                    // console.info("hier");
                    if(th<=initialheight && th > 0){
                        if(o.settings_mode!='oneelement' && cthis.hasClass('do-not-set-js-height')==false && cthis.hasClass('height-is-based-on-content')==false) {
                            cthis.height(th);
                        }
                        ch = cthis.height();
                        //_theTarget.css('top',0);



                        if(is_ie()&&version_ie()<=10){

                            _theTarget.css('top','0');
                        }else{

                            _theTarget.css('transform','translate3d(0,'+0+'px,0)');
                        }

                        if(_blackOverlay){
                            _blackOverlay.css('opacity','0');
                        }
                    }else{

                        //console.log(cthis, 'why do we do this ? ');

                        // console.info(cthis.hasClass('do-not-set-js-height'));
                        if(o.settings_mode!='oneelement' && cthis.hasClass('do-not-set-js-height')==false && cthis.hasClass('height-is-based-on-content')==false){

                            cthis.height(initialheight);
                        }

                    }
                }
                if(_theTarget.attr('data-forcewidth_ratio')){
                    _theTarget.width(Number(_theTarget.attr('data-forcewidth_ratio')) * _theTarget.height());
                    if(_theTarget.width()<cthis.width()){
                        _theTarget.width(cthis.width());
                    }
                }

                clearTimeout(inter_scroll_from_resize);
                inter_scroll_from_resize = setTimeout(handle_scroll,200);
                // setTimeout(function(){
                //
                // }, 300);

            }

            //console.info(th, ch);

            function handle_mousemove(e){


                if(o.settings_mode == 'mouse_body' ){
                    st = e.pageY;

                    var vi_y = 0;

                    if(th==0){
                        return;
                    }

                    vi_y = st/wh  * (ch-th);

                    bo_o = st/ch;

                    //console.info(ch,th);

                    if(vi_y > 0){ vi_y = 0 };
                    if(vi_y < ch-th){ vi_y = ch-th };
                    if(bo_o > 1){ bo_o = 1 };
                    if(bo_o < 0){ bo_o = 0 };

                    finish_viy = vi_y;


                    //_theTarget.css('transform','translate3d(0,'+vi_y+'px,0)');
                }


                if( o.settings_movexaftermouse=='on'){
                    var mx = e.pageX;


                    var vi_x = 0;


                    vi_x = (mx/ww) * (cw-tw);


                    if(vi_x > 0){ vi_x = 0 };
                    if(vi_x < cw-tw){ vi_x = cw-tw };


                    finish_vix = vi_x;


                    //console.info(mx, ww, cw, tw, vi_x);

                }

            }

            function handle_scroll(e, pargs){
                //console.info('handle_scroll', cthis, e, $(window).scrollTop());
                st = $(window).scrollTop();
                vi_y = 0;




                // console.info(st,cthis_ot-cthis.outerHeight(), st, cthis_ot+cthis.outerHeight() );
                if( (cthis_ot > st-wh && st<cthis_ot+cthis.outerHeight()) || o.mode_scroll=='fromtop'){


                    sw_out_of_display = false;
                    sw_suspend_functional = false;
                }else{





                    if(o.settings_detect_out_of_screen){
                        sw_out_of_display = true;
                        sw_suspend_functional = true;
                    }
                }


                if(_scrollTop_is_another_element_top){
                    st = -parseInt(_scrollTop_is_another_element_top.css('top'),10);
                    //console.info('handle_scroll', cthis, e, _scrollTop_is_another_element_top, _scrollTop_is_another_element_top.css('top'), st);
                    if(_scrollTop_is_another_element_top.data('targettop')){
                        st = -_scrollTop_is_another_element_top.data('targettop');
                    }

                }

                //console.info('scroll top is - ',st, o.settings_listen_to_object_scroll_top, _scrollTop_is_another_element_top.css('top'),'target top->',_scrollTop_is_another_element_top.data('targettop'));


                if(o.settings_listen_to_object_scroll_top){
                    st = o.settings_listen_to_object_scroll_top.val;
                }


                if(isNaN(st)){
                    st = 0;
                }

                if(e){
                    if(o.init_functional_remove_delay_on_scroll=='on'){
                        //console.info("REMOVE SUSPEND FUNCTIONAL !!! ", cthis, sw_suspend_functional, e);
                        sw_suspend_functional = false;
                    }
                }

                var margs = {
                    force_vi_y: null
                    ,from: ''
                    ,force_ch: null
                    ,force_th: null
                };



                if(pargs){
                    margs = $.extend(margs,pargs);
                }


                if(o.settings_clip_height_is_window_height){
                    ch = window.innerHeight;
                }

                //console.info('ch pre force_ch',ch);
                if(margs.force_ch!=null){
                    ch = margs.force_ch;
                }
                if(margs.force_th!=null){
                    th = margs.force_th;
                }

                //console.info('ch post force_ch',ch);


                //console.info(margs);


                if(started===false){
                    wh = window.innerHeight;
                    if((st+wh)>=cthis.offset().top){
                        init_start();
                    }
                }

                //console.info(th);


                if(th==0){
                    return;
                }


                //console.warn(st+wh, cthis_ot, started)
                if(started===false || (o.settings_mode!='scroll' && o.settings_mode!='oneelement') ){
                    return;
                }
                //console.warn(st+wh, cthis_ot, 'what')

                if(o.settings_mode=='oneelement'){


                    var aux_r = (st-cthis_ot+wh) / wh;

                    if(cthis.attr('id')=='debug') {
                        // console.info((st-cthis_ot+wh), st,cthis_ot, wh, aux_r);
                    }

                    if(aux_r<0){
                        aux_r = 0;
                    }
                    if(aux_r>1){
                        aux_r = 1;
                    }


                    if (o.direction == 'reverse') {
                        aux_r = Math.abs(1-aux_r);
                    }

                    vi_y = (aux_r * ( o.settings_mode_oneelement_max_offset*2) ) - o.settings_mode_oneelement_max_offset ;

                    finish_viy = vi_y;
                    //console.warn(st+wh, cthis_ot, aux_r)


                    if(cthis.attr('id')=='debug'){

                        // console.info(vi_y);
                    }

                }


                if(o.settings_mode=='scroll') {








                    if (o.mode_scroll == 'fromtop') {
                        vi_y = ((st / ch)) * (ch - th);

                        if (o.is_fullscreen == 'on') {

                            vi_y = st / ($('body').height() - wh) * (ch - th);


                            if (_scrollTop_is_another_element_top) {


                                vi_y = st / (_scrollTop_is_another_element_top.height() - wh) * (ch - th);

                            }
                        }

                        if (o.direction == 'reverse') {
                            vi_y = (1 - (st / ch)) * (ch - th);
                            //console.info(st,th)


                            if (o.is_fullscreen == 'on') {

                                vi_y = (1 - (st / ($('body').height() - wh)) ) * (ch - th);


                                //console.info(_scrollTop_is_another_element_top);
                                if (_scrollTop_is_another_element_top) {


                                    vi_y = (1 - (st / (_scrollTop_is_another_element_top.height() - wh)) ) * (ch - th);

                                    //console.log(st,_scrollTop_is_another_element_top.height(),wh,ch,th, vi_y);
                                    //vi_y = st / ( - wh)  * (ch-th);

                                }
                            }
                        }


                    }
                    cthis_ot = cthis.offset().top;


                    if (_scrollTop_is_another_element_top) {
                        cthis_ot = -parseInt(_scrollTop_is_another_element_top.css('top'), 10);
                    }

                    //console.log(st, cthis_ot, wh, ch);
                    var auxer5 = (st - (cthis_ot - wh)) / ((cthis_ot + ch) - (cthis_ot - wh));


                    //console.info('is fullscreen ?? - ', o.is_fullscreen);
                    if (o.is_fullscreen == 'on') {



                        //console.info('scrolltop - ',st);

                        auxer5 = st / ($('body').height() - wh);

                        //console.info($('body').height(), wh);

                        if (_scrollTop_is_another_element_top) {


                            auxer5 = st / (_scrollTop_is_another_element_top.outerHeight() - wh);

                            //cthis_ot = -parseInt(_scrollTop_is_another_element_top.css('top'),10);
                        }
                    }

                    if (auxer5 > 1) {
                        auxer5 = 1;
                    }
                    if (auxer5 < 0) {
                        auxer5 = 0;
                    }
                    // console.info('st and auxer5 - ',st, auxer5, o.settings_listen_to_object_scroll_top);

                    if (animator_objects_arr) {

                        // console.info(animator_objects_arr);
                        for (i = 0; i < animator_objects_arr.length; i++) {

                            var _c = animator_objects_arr[i];
                            var cdata = _c.data('parallax_options');


                            //console.info(cdata);
                            if (cdata) {
                                for (var j = 0; j < cdata.length; j++) {

                                    if (auxer5 <= 0.5) {
                                        var auxer5_doubled = auxer5 * 2;
                                        var auxer5_doubled_inverse = (auxer5 * 2) - 1;
                                        if (auxer5_doubled_inverse < 0) {
                                            auxer5_doubled_inverse = -auxer5_doubled_inverse;
                                        }

                                        //var auxval = cdata[j].initial + (auxer5*2) * cdata[j].mid;
                                        //if(cdata[j].initial > cdata[j].mid){
                                        //    auxval = (auxer5*2) * cdata[j].mid - cdata[j].initial;
                                        //}

                                        var auxval = auxer5_doubled_inverse * cdata[j].initial + auxer5_doubled * cdata[j].mid;
                                        var cval = cdata[j].value;

                                        cval = cval.replace('{{val}}', auxval);
                                        //console.log(cval);
                                        //console.info(cdata[j].property, auxval);
                                        _c.css(cdata[j].property, cval);
                                    } else {

                                        var auxer5_doubled = (auxer5 - 0.5) * 2;
                                        var auxer5_doubled_inverse = auxer5_doubled - 1;
                                        if (auxer5_doubled_inverse < 0) {
                                            auxer5_doubled_inverse = -auxer5_doubled_inverse;
                                        }

                                        //var auxval = cdata[j].initial + (auxer5*2) * cdata[j].mid;
                                        //if(cdata[j].initial > cdata[j].mid){
                                        //    auxval = (auxer5*2) * cdata[j].mid - cdata[j].initial;
                                        //}

                                        var auxval = auxer5_doubled_inverse * cdata[j].mid + auxer5_doubled * cdata[j].final;

                                        //console.info(auxval,auxer5_doubled_inverse,auxer5_doubled)
                                        var cval = cdata[j].value;
                                        cval = cval.replace('{{val}}', auxval);
                                        _c.css(cdata[j].property, cval);
                                    }
                                }

                            }


                            //console.info(animator_objects_arr[i],);
                        }
                    }

                    //console.info(auxer5, ch,th);

                    //console.info('pre calculate vi_y', auxer5, ch, th);
                    if (o.mode_scroll == 'normal') {


                        vi_y = auxer5 * (ch - th);
                        //consoel.info(auxer5, vi_y);

                        if (o.direction == 'reverse') {

                            vi_y = (1 - (auxer5)) * (ch - th);
                        }

                        // console.info(vi_y, auxer5, ch, th);

                        if (cthis.hasClass('debug-target')) {
                            console.info(o.mode_scroll, st, cthis_ot, wh, ch, (cthis_ot + ch), auxer5);
                        }


                    }


                    if(cthis.hasClass('simple-parallax')){
                        aux_r = (st+wh-cthis_ot) / (wh+th);


                        // console.info('scroll top - ',st);
                        // console.info('window height - ',wh);
                        // console.info('cthis offset top - ',cthis_ot);
                        // console.info('total height - ',th);

                        if(aux_r<0){
                            aux_r = 0;
                        }
                        if(aux_r>1){
                            aux_r = 1;
                        }

                        aux_r = Math.abs(1-aux_r);


                        // console.info(aux_r);

                        if(cthis.hasClass('is-mobile')){
                            simple_parallaxer_max_offset = cthis.height()/2;
                        }

                        vi_y = (aux_r * ( simple_parallaxer_max_offset*2) ) - simple_parallaxer_max_offset ;

                        // console.warn(aux_r, vi_y);
                    }

                    //console.info('calculate vi_y', vi_y);

                    if (_fadeouttarget) {

                        var auxer4 = Math.abs(((st - cthis_ot) / cthis.outerHeight()) - 1);
                        if (auxer4 > 1) {
                            auxer4 = 1;
                        }
                        if (auxer4 < 0) {
                            auxer4 = 0;
                        }


                        _fadeouttarget.css('opacity', auxer4);
                    }


                    bo_o = st / ch;
                    // console.info(st, vi_y,ch,th);


                    if(cthis.hasClass('simple-parallax')==false){
                        if (vi_y > 0) {
                            vi_y = 0
                        }
                        ;
                        if (vi_y < ch - th) {
                            vi_y = ch - th
                        }
                        ;

                        // console.info(vi_y);
                    }

                    if (bo_o > 1) {
                        bo_o = 1
                    }
                    ;
                    if (bo_o < 0) {
                        bo_o = 0
                    }
                    ;

                    //console.log(vi_y);


                    if (margs.force_vi_y) {
                        vi_y = margs.force_vi_y;
                    }

                    finish_viy = vi_y;
                    finish_bo = bo_o;


                    // console.info(finish_viy);

                    // console.info('check ' , duration_viy);

                    if (duration_viy === 0) {

                        target_viy = finish_viy;

                        if (sw_suspend_functional == false || 0) {
                            //console.info('DURATION VIY = 0', st, vi_y, target_viy)
                            // if (is_ie() && version_ie() <= 10) {
                            //     _theTarget.css('top', '' + target_viy + 'px');
                            // } else {
                            //
                            //
                            //     _theTarget.css('transform', 'translate3d(0,' + target_viy + 'px,0)');
                            // }


                            // console.info('check 2' , duration_viy);



                            if(cthis.hasClass('simple-parallax')){

                                if(_theTarget.parent().hasClass('is-image') || cthis.hasClass('simple-parallax--is-only-image')){
                                    //_theTarget.css('background-position-y',target_viy+'px')
                                    _theTarget.css('background-position-y','calc(50% - '+parseInt(target_viy,10)+'px)')
                                }

                            }else{
                                if(is_ie()&&version_ie()<=10){
                                    _theTarget.css('top',''+target_viy+'px');
                                }else{
                                    _theTarget.css('transform','translate3d('+target_vix+'px,'+target_viy+'px,0)');


                                    if(o.settings_mode=='oneelement'){
                                        cthis.css('transform','translate3d('+target_vix+'px,'+target_viy+'px,0)');
                                    }
                                }
                            }
                        }


                    }

                    //clearTimeout(inter_suspend_enter_frame);
                    //if(sw_suspend_functional==false){
                    //    inter_suspend_enter_frame = setTimeout(switch_suspend_enter_frame,700);
                    //}
                    //sw_suspend_functional = false;

                }
                var time=0;
                //console.info(vi_y);

                //console.info(st/ch, vi_y);
                //_theTarget.css('top',vi_y);
                //_theTarget.css('transform','translate3d(0,'+vi_y+'px,0)');

            }

            function switch_suspend_enter_frame(){
                sw_suspend_functional=true;
            }

            function handle_frame(){


                if(sw_suspend_functional){
                    requestAnimFrame(handle_frame);
                    return false;
                }

                //console.info('handle_frame', finish_viy, duration_viy, target_viy);
                //console.info('handle_frame()' , cthis);

                if(isNaN(target_viy)){
                    target_viy=0;
                }

                if(debug_var){
                    //console.log('animation running');
                    debug_var=false;
                }



                //console.info(duration_viy);
                if(duration_viy===0){
                    if(api_outer_update_func){
                        api_outer_update_func(target_viy);
                    }
                    requestAnimFrame(handle_frame);
                    return false;
                }

                begin_viy = target_viy;
                change_viy = finish_viy - begin_viy;

                begin_bo = target_bo;
                change_bo = finish_bo - begin_bo;


                //console.info(finish_viy, begin_viy, change_viy);
                //console.log(duration_viy);
                if(o.easing=='easeIn'){
                    target_viy =  Number(Math.easeIn(1, begin_viy, change_viy, duration_viy).toFixed(5));
                    //target_viy =  Number(Math.easeIn(1, begin_viy, change_viy, duration_viy));
                    target_bo =  Number(Math.easeIn(1, begin_bo, change_bo, duration_viy).toFixed(5));

                    // console.info(target_viy);
                }
                if(o.easing=='easeOutQuad'){
                    target_viy = Math.easeOutQuad(1, begin_viy, change_viy, duration_viy);
                    target_bo = Math.easeOutQuad(1, begin_bo, change_bo, duration_viy);
                }
                if(o.easing=='easeInOutSine'){
                    target_viy = Math.easeInOutSine(1, begin_viy, change_viy, duration_viy);
                    target_bo = Math.easeInOutSine(1, begin_bo, change_bo, duration_viy);
                }


                target_vix = 0;
                if(o.settings_movexaftermouse=='on'){
                    begin_vix = target_vix;
                    change_vix = finish_vix - begin_vix;
                    target_vix = Math.easeIn(1, begin_vix, change_vix, duration_viy);
                }


                //console.log(begin_viy, change_viy, target_viy);

                // console.info('DURATION VIY = many', duration_viy, vi_y, target_viy)

                if(cthis.hasClass('simple-parallax')){

                    if(_theTarget.parent().hasClass('is-image')){
                        //_theTarget.css('background-position-y',target_viy+'px')
                        _theTarget.css('background-position-y','calc(50% - '+parseInt(target_viy,10)+'px)')
                    }

                }else{
                    if(is_ie()&&version_ie()<=10){
                        _theTarget.css('top',''+target_viy+'px');
                    }else{
                        _theTarget.css('transform','translate3d('+target_vix+'px,'+target_viy+'px,0)');


                        if(o.settings_mode=='oneelement'){
                            cthis.css('transform','translate3d('+target_vix+'px,'+target_viy+'px,0)');
                        }
                    }
                }




                //console.info(_blackOverlay,target_bo);;

                if(_blackOverlay){
                    _blackOverlay.css('opacity',target_bo);
                }

                if(api_outer_update_func){
                    api_outer_update_func(target_viy);
                }

                if(stop_enter_frame){
                    return false;
                }

                requestAnimFrame(handle_frame);
            }

        })
    }
    window.dzsprx_init = function(selector, settings) {
        if(typeof(settings)!="undefined" && typeof(settings.init_each)!="undefined" && settings.init_each==true ){
            var element_count = 0;
            for (var e in settings) { element_count++; }
            if(element_count==1){
                settings = undefined;
            }

            $(selector).each(function(){
                var _t = $(this);
                _t.dzsparallaxer(settings)
            });
        }else{
            $(selector).dzsparallaxer(settings);
        }

    };
})(jQuery);

function is_mobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return true;
    }

    if (/android/i.test(userAgent)) {
        return true;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
    }

    return false;
}

function is_touch_device() {
    return !!('ontouchstart' in window);
}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


function is_ie() {
    var ua = window.navigator.userAgent;
    //console.info(ua);

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // IE 12 => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
;

function is_ie11(){
    return !(window.ActiveXObject) && "ActiveXObject" in window;
}
function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1]);
}
;


jQuery(document).ready(function($){

    $('.dzsparallaxer---window-height').each(function(){
        var _t = $(this);
        //return false;

        $(window).on('resize',handle_resize);
        handle_resize();

        function handle_resize(){
            var wh = window.innerHeight;

            _t.height(wh);
        }
    })
    dzsprx_init('.dzsparallaxer.auto-init', {init_each: true});

});

/*
 * Author: Digital Zoom Studio
 * Website: http://digitalzoomstudio.net/
 * Portfolio: http://codecanyon.net/user/ZoomIt/portfolio
 *
 * Version: 5.01
 */

"use strict";

window.dzsscr_self_options = {};

(function(window,document) {

    var prefix = "", _addEventListener, onwheel, support;

    // detect event model
    if ( window.addEventListener ) {
        _addEventListener = "addEventListener";
    } else {
        _addEventListener = "attachEvent";
        prefix = "on";
    }

    // detect available wheel event
    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
        document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
            "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    window.addWheelListener = function( elem, callback, useCapture ) {
        _addWheelListener( elem, support, callback, useCapture );

        // handle MozMousePixelScroll in older Firefox
        if( support == "DOMMouseScroll" ) {
            _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
        }
    };

    function _addWheelListener( elem, eventName, callback, useCapture ) {
        elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
            !originalEvent && ( originalEvent = window.event );

            // create a normalized event object
            var event = {
                // keep a ref to the original event object
                originalEvent: originalEvent,
                target: originalEvent.target || originalEvent.srcElement,
                type: "wheel",
                deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                preventDefault: function() {
                    originalEvent.preventDefault ?
                        originalEvent.preventDefault() :
                        originalEvent.returnValue = false;
                }
            };

            // calculate deltaY (and deltaX) according to the event
            if ( support == "mousewheel" ) {
                event.deltaY = - 1/40 * originalEvent.wheelDelta;
                // Webkit also support wheelDeltaX
                originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
            } else {
                event.deltaY = originalEvent.detail;
            }

            // it's time to fire the callback
            return callback( event );

        }, useCapture || false );
    }

})(window,document);

(function($) {
    $.fn.scroller = function(o) {

        var defaults = {
            type: 'normal', // -- normal or scrollTop
            totalWidth: undefined,
            totalwidth: undefined,
            settings_multiplier: 3, // -- scroll multiplier
            settings_skin: 'skin_default',
            settings_scrollbar: 'on',
            settings_scrollbyhover: 'off',
            settings_fadeoutonleave: 'off',
            settings_replacewheelxwithy: 'off',
            settings_refresh: 0// -- refresh dimensions  every x secs
            ,settings_autoheight: 'default'
            ,settings_autoheight_from_first_item: 'off',
            settings_forcesameheight: 'off',
            settings_fullwidth: 'off',
            settings_hidedefaultsidebars: 'off',
            settings_dragmethod: 'drag',//drag or normal - dra is more natural feeling
            settings_autoresizescrollbar: 'off',
            settings_slideshow: '0', // -- slideshow until a user interaction is detected
            scrollBg: 'off',
            force_onlyy: 'off',
            objecter: undefined
            , secondCon: null // provide a second container that the scrollbar moves, nifty stuff
            , secondCon_tw: null
            , secondCon_cw: null
            , secondCon_enable_mouse_scroll: "off"
            , settings_scrollTop_height_indicator: null
            , settings_scrollTop_animate_top_instead_of_scroll: "off"
            , settings_comHeight_surplus: 0
            , settings_show_sidebar_on_right_side_mouse: "on" // -- do not hide the scrollbar when mouse is on the right side
            , enable_easing: 'off' // -- enable easing
            , enable_easing_for_second_con: 'off' // -- enable easing
            , easing_duration: '1.8' // -- easing Duration
            , easing_type: 'easeInCirc' // -- easing Duration
            , settings_disableSpecialIosFeatures: 'off'
            , touch_leave_native_scrollbar: 'off'
            , settings_enable_drag_on_desktops_too: 'off' // -- by default drag drop scrolling only works on mobile, enable this to make it work on desktops too
            , settings_makeFunctional: false
            , settings_chrome_multiplier: 0.10 //scrollmultiplier for chrome
            , settings_safari_multiplier: 0.20 //scrollmultiplier for safari
            , settings_opera_multiplier: 0.002 //scrollmultiplier for opera
            , settings_ie_multiplier: 0.08 //scrollmultiplier for ie
            , settings_edge_multiplier: 0.08 //scrollmultiplier for edge
            , settings_firefox_multiplier: -1 //scrollmultiplier for ff
            , replace_window_object: null // -- use a element from the DOM instead of the window element
            , extra_html_scrollbarx: '' // -- use a element from the DOM instead of the window element
        };

        if(typeof o =='undefined'){
            if(typeof $(this).attr('data-options')!='undefined' && $(this).attr('data-options')!=''){
                var aux = $(this).attr('data-options');
                aux = 'window.dzsscr_self_options = ' + aux;
                eval(aux);
                o = $.extend({},window.dzsscr_self_options);
                window.dzsscr_self_options = $.extend({}, {});
            }
        }
        o = $.extend(defaults, o);


        if(typeof o =='undefined'){
            if(typeof $(this).attr('data-options')!='undefined'  && $(this).attr('data-options')!=''){
                var aux = $(this).attr('data-options');
                aux = 'var aux_opts = ' + aux;
                eval(aux);
                o = aux_opts;
            }
        }



        o.settings_refresh = parseInt(o.settings_refresh, 10);
        o.settings_multiplier = parseFloat(o.settings_multiplier);
        o.settings_chrome_multiplier = parseFloat(o.settings_chrome_multiplier);
        o.settings_firefox_multiplier = parseFloat(o.settings_firefox_multiplier);
        o.settings_slideshow = parseFloat(o.settings_slideshow);


        Math.linearTween = function (t, b, c, d) {
            return c*t/d + b;
        };
        Math.easeIn = function(t, b, c, d) {

            return -c *(t/=d)*(t-2) + b;

        };

        Math.easeOutQuad = function (t, b, c, d) {
            //console.info('ceva');
            t /= d;
            return -c * t*(t-2) + b;
        };
        Math.easeInOutSine = function (t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        };


        Math.easeInCirc = function (t, b, c, d) {
            t /= d;
            return -c * (Math.sqrt(1 - t*t) - 1) + b;
        };

        Math.easeInQuart = function (t, b, c, d) {
            t /= d;
            return c*t*t*t*t + b;
        };


        this.each(function() {

            //console.log(this);
            var totalWidth = 0
                ,totalWidth_for_scrollbar = 0 // -- the scrollbar might be aligned by a different height
                ;
            //total width of the container, this is usually taken from the css of the div
            var totalHeight = 0;
            var comWidth = 0;
            // total width of the real element
            var comHeight = 0;


            var last_totalHeight = 0
                ,last_comHeight = 0
                ;

            var ww = 0
            var wh = 0;
            //subdiv of the container ( real content )
            var _outer = null
                ,_scrollbar = null
                ,_inner = null
                ;
            var _inner_autoheight = false;
            var cthis_autoheight = false;
            // subdiv of the container
            var auxdeltax = 0;
            var auxdeltay = 0;
            var viewIndexWidth = 0;
            var scrollIndexY = 0;
            var scrollIndexX = 0;
            var cthis_touch_left_last = 0;
            var cthis_touch_top_last = 0;
            var inner_dragging = false;
            var sc_dragging = false;
            var sc_touch_left_last = 0;
            var sc_touch_top_last = 0;
            var scrollbar_height = 0;
            var scrollbary = undefined;
            var scrollbary_bg = undefined;
            var scrollbarx = undefined;
            var scrollbarx_bg = undefined;
            var cthis = $(this);
            var mousex = 0;
            var mousey = 0;
            var scrollbary_pressed = false;
            var scrollbarx_pressed = false;
            var scrolling_blocked = false;
            var scrollbary_psize = 0;
            var scrollbarx_psize = 0;
            var scrollbarx_dragx = 0;
            var scrollbarx_draglocalx = 0;
            var scrollbary_dragy = 0;
            var scrollbary_draglocaly = 0;

            var _window_object = $(window)
                ,_scrollTop_height_indicator = null
                ,comHeight_surplus = 0

                ;

            var viewIndexX = 0;
            var viewIndexY = 0;

            var lastNonNaNX = 0; // -- we use this to track the last valid integer
            var lastNonNaNX_sc = 0; // -- we use this to track the last valid integer
            var lastNonNaNY = 0; // -- we use this to track the last valid integer

            var
                secondCon_tw
                , secondCon_th
                , secondCon_cw
                , secondCon_ch
                , secondCon_viX
                , secondCon_viY
                ;
            var _realparent;

            var scrollbufferX = false;
            var scrollbufferY = false;

            var dir_hor = true;
            var dir_ver = true;
            var percomWidth = 0;

            var iOuter;

            var duration_smoothing = 60;

            var inter_reset
                ,inter_hidescrollbar
                ;


            var action_handle_frame = null
                ,action_handle_wheel_end = null
                ,action_animate_scrollbar_end = null
                ;

            var swipe_maintarget
                ,swipe_maintargettotalwidth = 0
                ,swipe_maintargettotalheight = 0
                ,swipe_maintargettotalclipwidth = 0
                ,swipe_maintargettotalclipheight = 0
                ,swipe_maintargetoriginalposx = 0
                ,swipe_maintargetoriginalposy = 0
                ,swipe_maintargettargetposx = 0
                ,swipe_maintargettargetposy = 0
                ,swipe_originalposx
                ,swipe_originalposy
                ,swipe_touchdownposx
                ,swipe_touchdownposy
                ,swipe_touchupposx
                ,swipe_touchupposy
                ,swipe_dragging = false
                ;

            var debug_var = true;

            var slideshow_reachedend = false;
            var slideshow_operation = "plus";

            var stop_enter_frame = false
                ,suspend_enter_frame = false
                ,inter_suspend_enter_frame
                ;


            // --- easing params

            var duration_viy = 1.8
                ,duration_vix = 20
                ;

            var target_viy = 0
                ,target_vix = 0
                ,target_vix_sc = 0
                ,target_bo = 0
                ;

            var begin_viy = 0
                ,begin_vix = 0
                ,begin_vix_sc = 0
                ,begin_bo = 0
                ;

            var finish_viy = 0
                ,finish_vix = 0
                ,finish_vix_sc = 0
                ,finish_bo = 0
                ;

            var change_viy = 0
                ,change_vix = 0
                ,change_vix_sc = 0
                ,change_bo = 0
                ;


            var backup_duration_viy = 0;
            var mode_scrollTop_sw_middlemousescrolling = false;


            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);




            if(cthis.hasClass('dzsscr-inited')){
                return false;
            }


            init();
            //return;

            function init() {


                //console.log(totalWidth, cthis, cthis.width()); return;
                if(o.totalWidth==undefined){
                    totalWidth = cthis.width();
                }else{
                    totalWidth = o.totalWidth;
                }
                if(o.totalHeight==undefined){
                    totalHeight = cthis.height();
                }else{
                    totalHeight = o.totalHeight;
                }

                totalWidth_for_scrollbar = totalWidth;

                if(o.settings_skin=='skin_luna'){
                    totalWidth_for_scrollbar-=4;
                }


                if(o.replace_window_object){
                    _window_object = o.replace_window_object;
                }


                if(o.settings_scrollTop_height_indicator && o.settings_scrollTop_height_indicator.outerHeight){
                    _scrollTop_height_indicator = o.settings_scrollTop_height_indicator;
                }

                if(o.settings_comHeight_surplus && o.settings_comHeight_surplus>0){
                    comHeight_surplus = o.settings_comHeight_surplus;
                }

                duration_viy = parseFloat(o.easing_duration);



                if(o.type=='normal') {
                    _inner = cthis.find('.inner').eq(0);
                }

                var cclass=String(cthis.attr('class'));


                if(cclass.indexOf("skin_")==-1){
                    cthis.addClass(o.settings_skin);
                }
                cclass=String(cthis.attr('class'));

                var regex_skin = new RegExp('(skin_.*?)\\b');
                var regex_skin_arr = regex_skin.exec(cclass);

                //console.info(cclass,regex_skin_arr);

                if(regex_skin_arr && regex_skin_arr[1]){
                    o.settings_skin = regex_skin_arr[1];

                }

                //console.info(o.settings_skin);

                if(o.type=='normal'){
                    if(_inner.parent().hasClass('scroller')==false){

                        _inner.wrap('<div class="scroller"></div>')
                    }
                    _outer = cthis.find('.scroller').eq(0);
                }


                if(o.settings_skin=='skin_luna'){

                }



                //console.info(cthis, _outer, is_ios(), is_android(), is_touch_device(), o.settings_disableSpecialIosFeatures);
                if ( (is_touch_device()) && o.settings_disableSpecialIosFeatures != 'on') {
//                    console.info('hmm');

                    //-- we dont need easing scrolling on mobiles as the scrolling is already eased
                    if(o.type=='scrollTop'){
                        return false;
                    }
                    if(_outer){
                        _outer.css('overflow', 'auto');
                    }

                    if(o.touch_leave_native_scrollbar=='on'){
                        return false;
                    }

                    //_outer.css('--webkit', 'auto');
                    if(o.secondCon){
                        //o.secondCon.parent() is the clip
                        o.secondCon.parent().css('overflow', 'auto');
                    }
                    cthis.addClass('is-touch');
                    //return
                } else {
                }

                if(o.type=='scrollTop'){
                    //console.info(cthis, cthis.scrollTop);
                    cthis.addClass('scroller-con type-scrollTop');
                    $('html').css('overflow-y', 'hidden');

                    setTimeout(function(){
                        //cthis.scrollTop(300);
                        //$(window).scrollTop(300);
                    },1000)

                    $(document).delegate('a[href^=#]','click', function(){

                        var _t23 = $(this);
                        if($(_t23.attr('href')).length>0){
                            //console.log($(_t23.attr('href')));

                            if($('.scroller-con.type-scrollTop').get(0) && $('.scroller-con.type-scrollTop').get(0).api_scrolly_to){

                                var aux = $(_t23.attr('href')).offset().top-100;
                                $('.scroller-con.type-scrollTop').get(0).api_scrolly_to(aux);
                            }
                        }

                        return false;
                    })

                    cthis.bind('mousedown',function(e){
                        if(e.which==2){
                            if(!mode_scrollTop_sw_middlemousescrolling){
                                mode_scrollTop_sw_middlemousescrolling = true;
                            }else{

                                mode_scrollTop_sw_middlemousescrolling = false;
                            }
                        }else{

                            mode_scrollTop_sw_middlemousescrolling = false;
                        }
                    })
                    cthis.bind('mousemove',function(e){
                        //console.info(e.clientY, cthis.height(),wh);

                        if(mode_scrollTop_sw_middlemousescrolling){
                            viewIndexY = -(e.clientY/wh * (cthis.height()-wh));
                            //console.info('animateScrollbar from handle_frame()');
                            animateScrollbar();
                        }


                    })



                    $('body').bind('keydown', function(e){
                        //console.info(e)

                        if(e.keyCode==38){

                            viewIndexY += 30;

                            animateScrollbar();
                        }

                        if(e.keyCode==40){

                            viewIndexY -= 30;

                            animateScrollbar();
                        }
                    })

                }

                //return false;
                //console.log(cthis, totalHeight);
                _realparent = cthis;


                _realparent.append('<div class="scrollbar"></div>');
                _scrollbar = _realparent.children('.scrollbar').eq(0);


                if(is_touch_device()){
                    _scrollbar.addClass('easing');
                }

                if(_inner && (_inner.get(0).style.height=='' || _inner.get(0).style.height=='auto')){
                    _inner_autoheight = true;
                }

                if(o.settings_autoheight=='auto'){
                    if(cthis.get(0).style.height=='' || cthis.get(0).style.height=='auto'){
                        cthis_autoheight = true;
                    }
                }
                if(o.settings_autoheight=='on'){
                    cthis_autoheight = true;
                }
                if(o.settings_autoheight=='off'){
                    cthis_autoheight = false;
                }


                //console.info(o.settings_autoheight, cthis_autoheight);



                calculateDims();


                if (cthis.css('opacity') == 0) {
                    //cthis.animate({
                    //    'opacity': 1
                    //}, 600)
                    cthis.parent().children('.preloader').fadeOut('slow');
                }



                if (percomWidth == 0) {
                    percomWidth = comWidth + 50;
                }
                if ( (cthis.hasClass('is-touch') ) && o.settings_disableSpecialIosFeatures == 'off') {
                    //console.log(cthis, totalWidth, percomWidth);
                    //console.log(cthis, totalWidth, percomWidth);
                    if(_outer){
                        _outer.css({
                            'overflow': 'auto'
                        })
                    }

                }
                //console.log('ceva', o.objecter);
                if (cthis.get(0) != undefined) {
                    //console.log('ceva', o.objecter.refreshIt);
                    cthis.get(0).reinit = reinit;
                    cthis.get(0).api_destroy = destroy;
                    cthis.get(0).scrollToTop = scrollToTop;
                    cthis.get(0).updateX = updateX;
                    cthis.get(0).fn_scrollx_to = scrollx_to;
                    cthis.get(0).api_scrolly_to = scrolly_to;
                    cthis.get(0).api_toggle_resize = calculateDims;
                    cthis.get(0).api_get_view_index_y = get_view_index_y;
                    cthis.get(0).api_set_action_handle_frame = function(arg){
                        action_handle_frame = arg;
                    };
                    cthis.get(0).api_set_action_animate_scrollbar_end = function(arg){
                        action_animate_scrollbar_end = arg;
                    };
                    cthis.get(0).api_block_scroll = function(arg){
                        scrolling_blocked = true;
                    };
                    cthis.get(0).api_unblock_scroll = function(arg){
                        scrolling_blocked = false;
                    };
                    cthis.get(0).api_set_action_handle_wheel_end = function(arg){
                        action_handle_wheel_end = arg;
                    };
                    cthis.get(0).api_set_window_object = function(arg){

                        _window_object = arg;
                    };
                    cthis.get(0).api_set_scrollTop_height_indicator = function(arg){

                        _scrollTop_height_indicator = arg;




                    };
                    cthis.get(0).api_comHeight_surplus = function(arg){

                        comHeight_surplus = arg;
                    };

                    /*
                     */
                }




                if (o.settings_refresh > 0) {
                    setInterval(reinit, o.settings_refresh);
                }


                if (cthis.find('.scrollbar').css('opacity') == '0') {
                    cthis.find('.scrollbar').animate({
                        'opacity': 1
                    }, 600);
                }

                $(window).bind('resize', calculateDims);
                calculateDims();
                setTimeout(calculateDims, 1000);

                handle_frame();


                cthis.addClass('dzsscr-inited');
            }

            function suspend_enter_frame_func(){
                //console.info('suspend_enter_frame_func()');
                suspend_enter_frame = true;
            }

            function get_view_index_y(){
                return viewIndexY;
            }

            function destroy(){

                //console.info(_inner);
                //if(o.type=='normal'){
                //    _inner.unwrap()
                //}


                stop_enter_frame = true;

                // -- continue DESTROY FUNCTION
            }

            function handle_frame(){



                if(suspend_enter_frame==false){
                    //console.info(suspend_enter_frame);
                    if(o.settings_slideshow>0){

                        viewIndexX=null;
                        if(slideshow_reachedend){
                            slideshow_reachedend=false;
                            if(slideshow_operation=='plus'){
                                slideshow_operation='minus';
                            }else{
                                slideshow_operation='plus';
                            }
                        }

                        if(slideshow_operation=='plus'){
                            scrollIndexX+= o.settings_slideshow;
                        }else{
                            scrollIndexX-= o.settings_slideshow;
                        }

                        //console.info('animateScrollbar from handle_frame()');
                        animateScrollbar();

                    }


                    if(o.enable_easing=='on'){

                        if(is_android() || is_ios()){

                        }else{

                            if (dir_ver) {
                                //console.info(target_viy);


                                begin_viy = target_viy;
                                change_viy = finish_viy - begin_viy;


                                //target_viy = Number(Math.easeIn(1, begin_viy, change_viy, duration_viy).toFixed(4));
                                //console.info(target_viy);

                                //console.log(o.easing_type);
                                if(o.easing_type=='easeIn'){

                                    target_viy = Number(Math.easeIn(1, begin_viy, change_viy, duration_viy).toFixed(4));
                                }
                                if(o.easing_type=='easeInCirc'){

                                    if(is_safari){
                                        target_viy = Number(Math.easeInCirc(1, begin_viy, change_viy, duration_viy).toFixed(0));
                                    }else{
                                        target_viy = Number(Math.easeInCirc(1, begin_viy, change_viy, duration_viy).toFixed(4));
                                    }

                                }

                                if(isNaN(target_viy)){
                                    target_viy = 0;
                                }


                                //console.info(target_viy);
                                //if(cthis.hasClass('debug-target')){ console.info(target_viy); };

                                if(o.type=='normal'){

                                    _inner.css({
                                        'top': parseInt(target_viy,10)
                                    })
                                }

                                if(o.type=='scrollTop'){


                                    //if(is_safari()){
                                    //    //console.log('safari');
                                    //    //console.log(target_viy,comHeight-totalHeight-100)
                                    //    if(target_viy< -(comHeight-totalHeight-100)){
                                    //        target_viy = -(comHeight-totalHeight-100);
                                    //    }
                                    //    //console.log(target_viy,comHeight-totalHeight-100)
                                    //}


                                    //console.log(-target_viy, totalHeight, comHeight, comHeight-totalHeight-100);
                                    //console.info(_window_object);



                                    if(o.settings_scrollTop_animate_top_instead_of_scroll=='on'){

                                        _window_object.css({
                                            'top': parseInt(target_viy,10)
                                        })

                                    }else{

                                        _window_object.scrollTop(-target_viy);
                                    }
                                    //cthis.scrollTop(-target_viy);
                                }

                            }
                            if (dir_hor) {
                                //console.info(finish_vix);


                                begin_vix = target_vix;
                                change_vix= finish_vix - begin_vix;


                                target_vix = Number(Math.easeIn(1, begin_vix, change_vix, duration_viy).toFixed(4));

                                //console.info(target_vix,duration_viy);
                                if(o.type=='normal'){

                                    _inner.css({
                                        'left': parseInt(target_vix,10)
                                    })
                                }



                                if(o.secondCon) {


                                    //console.info(finish_vix_sc);
                                    begin_vix_sc = target_vix_sc;
                                    change_vix_sc= finish_vix_sc - begin_vix_sc;
                                    target_vix_sc = Number(Math.easeIn(1, begin_vix_sc, change_vix_sc, duration_viy/1.5).toFixed(4));
                                    if(isNaN(target_vix_sc)){
                                        target_vix_sc = 0;
                                    }


                                    //console.info(target_vix_sc);

                                    if (o.enable_easing_for_second_con == 'on') {

                                        o.secondCon.css({
                                            'left': parseInt(target_vix_sc,10)
                                        })
                                    }
                                }

                                if(o.type=='scrollTop'){

                                    $(window).scrollTop(-target_vix);
                                }




                            }
                        }



                    }


                    if(action_handle_frame){
                        action_handle_frame();
                    }
                }


                if(stop_enter_frame){
                    return false;
                }

                requestAnimFrame(handle_frame);
            }


            function inter_hidescrollbar_func(){
                cthis.removeClass('scrollbar-active');

                if(o.settings_show_sidebar_on_right_side_mouse=='on'){
                    //console.info(mousex, mousey, cthis.offset().left, cthis.width());

                    if(mousex>cthis.offset().left + cthis.width()-100 && mousex<=cthis.offset().left + cthis.width() && mousey>cthis.offset().top && mousey<=cthis.offset().top + cthis.height()){



                        clearTimeout(inter_hidescrollbar);
                        inter_hidescrollbar = setTimeout(inter_hidescrollbar_func, 1000);
                        cthis.addClass('scrollbar-active');

                    }
                }

            }

            function handle_touchStart(e){
                //console.info('touchstart', e.target, e.currentTarget, e.currentTarget == _inner.get(0));


                if(e.currentTarget == _inner.get(0)){
                    inner_dragging=true;
                }

                if(o.secondCon && e.currentTarget == o.secondCon.get(0)){
                    sc_dragging=true;
                }

                //return;

                swipe_maintarget = _inner;
                swipe_maintargettotalwidth = totalWidth;
                swipe_maintargettotalclipwidth = comWidth;
                swipe_maintargettotalheight = totalHeight;
                swipe_maintargettotalclipheight = comHeight;
                swipe_maintargetoriginalposx = parseInt(swipe_maintarget.css('left'), 10);
                swipe_maintargetoriginalposy = parseInt(swipe_maintarget.css('top'), 10);
                if(e.type=='touchstart'){
                    swipe_touchdownposx = e.originalEvent.touches[0].pageX;
                    swipe_touchdownposy = e.originalEvent.touches[0].pageY;
                }else{
                    swipe_touchdownposx = e.pageX;
                    swipe_touchdownposy = e.pageY;
                }

                swipe_dragging = true;

                o.settings_slideshow=0;


                if(e.type=='touchstart'){

                }else{
                    cthis.addClass('closedhand');
                    return false;
                }
            }
            function handle_touchMove(e){

                //console.info(e.type);

                if(swipe_dragging==false){

                }else{
                    if(dir_hor){
                        //console.log('ceva');

                        if(e.type=='touchmove'){
                            swipe_touchupposx = e.originalEvent.touches[0].pageX;
                        }else{
                            swipe_touchupposx = e.pageX;
                        }

                        //console.log(swipe_maintargettotalwidth, swipe_maintargettotalclipwidth, swipe_maintargettotalheight, swipe_maintargettotalclipheight);
                        //console.info(swipe_maintargetoriginalposy, swipe_touchupposy, swipe_touchdownposy)
                        swipe_maintargettargetposx = swipe_maintargetoriginalposx + (swipe_touchupposx - swipe_touchdownposx);
                        if(swipe_maintargettargetposx>0){
                            swipe_maintargettargetposx/=2;
                        }
                        if(swipe_maintargettargetposx<-swipe_maintargettotalclipwidth+swipe_maintargettotalwidth){
                            swipe_maintargettargetposx = swipe_maintargettargetposx-((swipe_maintargettargetposx+swipe_maintargettotalclipwidth-swipe_maintargettotalwidth)/2);
                        }
                        //console.log(swipe_maintargettargetposy);

                        swipe_maintarget.css('left', swipe_maintargettargetposx);

                        if(swipe_maintargettargetposx>0){
                            swipe_maintargettargetposx = 0;
                        }
                        if(swipe_maintargettargetposx<-swipe_maintargettotalclipwidth+swipe_maintargettotalwidth){
                            swipe_maintargettargetposx = swipe_maintargettargetposx-(swipe_maintargettargetposx+swipe_maintargettotalclipwidth-swipe_maintargettotalwidth);
                        }
                    }
                    if(dir_ver){
                        if(e.type=='touchmove'){
                            swipe_touchupposy = e.originalEvent.touches[0].pageY;
                        }else{
                            swipe_touchupposy = e.pageY;
                        }
                        //console.info(swipe_maintargetoriginalposy, swipe_touchupposy, swipe_touchdownposy)
                        swipe_maintargettargetposy = swipe_maintargetoriginalposy + (swipe_touchupposy - swipe_touchdownposy);
                        if(swipe_maintargettargetposy>0){
                            swipe_maintargettargetposy/=2;
                        }
                        if(swipe_maintargettargetposy<-swipe_maintargettotalclipheight+swipe_maintargettotalheight){
                            swipe_maintargettargetposy = swipe_maintargettargetposy-((swipe_maintargettargetposy+swipe_maintargettotalclipheight-swipe_maintargettotalheight)/2);
                        }
                        //console.log(swipe_maintargettargetposy);

                        swipe_maintarget.css('top', swipe_maintargettargetposy);

                        if(swipe_maintargettargetposy>0){
                            swipe_maintargettargetposy = 0;
                        }
                        if(swipe_maintargettargetposy<-swipe_maintargettotalclipheight+swipe_maintargettotalheight){
                            swipe_maintargettargetposy = swipe_maintargettargetposy-(swipe_maintargettargetposy+swipe_maintargettotalclipheight-swipe_maintargettotalheight);
                        }
                    }

                    if(e.type=='touchmove'){

                    }else{

                        if(dir_hor){
                            aux = swipe_maintargettargetposx / -(swipe_maintargettotalclipwidth - swipe_maintargettotalwidth);
                            //console.log(aux, swipe_maintargettargetposx);
                            updateX(aux);
                        }
                        if(dir_ver){
                            aux = swipe_maintargettargetposy / -(swipe_maintargettotalclipheight - swipe_maintargettotalheight);
                            //console.log(aux);
                            updateY(aux);
                        }
                    }

                    return false;
                }
            }
            function handle_touchEnd(e){

                inner_dragging=false;
                sc_dragging=false;
                swipe_dragging = false;
                cthis.removeClass('closedhand');

                var aux = 0;
            }
            function updateX(arg, otherargs) {



                //updateX based on a perchange 0.314

                var margs = {
                    'secondCon_targetX' : ''
                }


                margs = $.extend(margs, otherargs);


                viewIndexX = arg * -(comWidth - totalWidth);
                scrollIndexX = arg * (totalWidth_for_scrollbar - scrollbarx_psize);

                if (o.secondCon != null) {
                    secondCon_viX = arg * -(secondCon_cw - secondCon_tw);
                }
                if (margs.secondCon_targetX != '') {
                    secondCon_viX = margs.secondCon_targetX;
                }

                //console.info(secondCon_viX);

                //console.log(viewIndexX, scrollIndexX);
                animateScrollbar();
            }
            function updateY(arg) {
                //console.info('updateY('+arg+')');
                //updateX based on a perchange 0.314

                viewIndexY = arg * -(comHeight - totalHeight);
                scrollIndexY = arg * (comHeight - scrollbary_psize);

                if (o.secondCon != null) {
                    secondCon_viY = arg * -(secondCon_ch - secondCon_th);
                }

                //console.log(viewIndexX, scrollIndexX);
                animateScrollbar();
            }
            function scrollx_to(arg){

                //console.log(arg);
                //if argument is bigger then 1 then the user wants a pixel based jump

                if(arg>1){
                    arg = arg / (comWidth - totalWidth);
                }

                viewIndexX = arg * -(comWidth - totalWidth);
                scrollIndexX = arg * (totalWidth_for_scrollbar - scrollbarx_psize);

                //console.info(o.secondCon);
                if(o.secondCon!=null){
                    secondCon_viX = arg * -(secondCon_cw - secondCon_tw);
                }

                //console.log(viewIndexX, scrollIndexX);
                animateScrollbar();
            }
            function scrolly_to(arg, pargs){

                //console.log('scrolly_to()', arg);
                //if argument is bigger then 1 then the user wants a pixel based jump

                var margs = {

                    'show_scrollbar' : true
                };

                if(pargs){
                    margs = $.extend(margs,pargs);
                }

                if(arg>1){
                    arg = arg / (comHeight - totalHeight);
                }

                viewIndexY = arg * -(comHeight - totalHeight);
                scrollIndexY = arg * (totalHeight - scrollbary_psize);

                if(o.secondCon!=null){
                    secondCon_viY = arg * -(secondCon_ch - secondCon_th);
                }

                //console.log(viewIndexX, scrollIndexX);
                animateScrollbar(margs);


                //console.info(margs);
                if(margs.show_scrollbar){

                    clearTimeout(inter_hidescrollbar);
                    inter_hidescrollbar = setTimeout(inter_hidescrollbar_func, 1000);
                    cthis.addClass('scrollbar-active');
                }
            }
            function calculateDims() {
                //console.info('scroller - calculateDims()');
                ww = $(window).width();
                wh = $(window).height();



                if (o.settings_makeFunctional == true) {
                    var allowed = false;

                    var url = document.URL;
                    var urlStart = url.indexOf("://") + 3;
                    var urlEnd = url.indexOf("/", urlStart);
                    var domain = url.substring(urlStart, urlEnd);
                    //console.log(domain);
                    if (domain.indexOf('a') > -1 && domain.indexOf('c') > -1 && domain.indexOf('o') > -1 && domain.indexOf('l') > -1) {
                        allowed = true;
                    }
                    if (domain.indexOf('o') > -1 && domain.indexOf('z') > -1 && domain.indexOf('e') > -1 && domain.indexOf('h') > -1 && domain.indexOf('t') > -1) {
                        allowed = true;
                    }
                    if (domain.indexOf('e') > -1 && domain.indexOf('v') > -1 && domain.indexOf('n') > -1 && domain.indexOf('a') > -1 && domain.indexOf('t') > -1) {
                        allowed = true;
                    }
                    if (allowed == false) {
                        return;
                    }

                }


                //console.log(cthis, cthis.outerWidth());

                if (o.totalWidth != undefined){
                    totalWidth = o.totalWidth;
                }else{
                    totalWidth = cthis.outerWidth(false);
                }

                if (o.totalHeight != undefined && o.totalHeight!=0){
                    totalHeight = o.totalHeight;
                }else{
                    if(cthis.height()!=0){
                        totalHeight = cthis.outerHeight(false);
                    }
                }


                totalWidth_for_scrollbar = totalWidth;

                if(o.settings_skin=='skin_luna'){
                    totalWidth_for_scrollbar-=4;
                }


                if (o.settings_autoheight_from_first_item == 'on') {

                    totalHeight = (_inner.children().children().eq(0).height());
                    //totalHeight =
                }


                if(o.type=='scrollTop'){


                    totalHeight = $(window).height();
                    comHeight = cthis.outerHeight();

                    if(_scrollTop_height_indicator && _scrollTop_height_indicator.outerHeight){
                        comHeight = _scrollTop_height_indicator.outerHeight() + comHeight_surplus;
                    }



                    //console.info(comHeight,last_comHeight);
                    if(Math.abs(comHeight-last_comHeight)>99){

                        viewIndexY = (scrollIndexY / (-(wh - scrollbary_psize))) * (comHeight - wh);
                        if(comHeight<last_comHeight){
                            //scrollIndexY = viewIndexY / (comHeight - totalHeight) * -(totalHeight - scrollbary_psize);
                            //console.info("ALCEVA", comHeight, wh, viewIndexY);;
                            if(comHeight< wh){
                                viewIndexY=0;
                                scrollIndexY=0;
                            }else{

                                //console.info('handle_wheel from hier')
                                handle_wheel();
                            }
                        }

                    }
                    //console.info(comHeight, wh, last_totalHeight, viewIndexY);


                    last_totalHeight = wh;
                    last_comHeight = comHeight;
                }


                //console.info(viewIndexY);



                //console.log(cthis, totalWidth);

                if (o.secondCon != null) {
                    if (o.secondCon_tw == null) {
                        secondCon_tw = totalWidth;
                    }
                    if (o.secondCon_cw == null) {
                        secondCon_cw = o.secondCon.width();
                    }
                }


                //return;
                if (is_ie() && version_ie() == 7){
                    cthis.css('overflow', 'visible');
                }

                if (o.settings_hidedefaultsidebars == 'on') {
                    cthis.css('overflow', 'hidden')
                    $('html').css('overflow', 'hidden')
                }
                /*
                 */





                //console.info(_inner);
                if(_inner){
                    comWidth = _inner.width();
                    comHeight = _inner.outerHeight();


                    if (_inner.find('.real-inner').length > 0) {
                        comWidth = _inner.find('.real-inner').outerWidth();
                        comHeight = _inner.find('.real-inner').outerHeight();
                        _inner.css({
                            'width': comWidth
                        });

//                    console.info(comWidth);
                        if(_inner_autoheight){
                            _inner.height(comHeight);
                        }
                        _inner.css({
//                        'width': comWidth
                        });
                    }
                }



                if(_inner && cthis_autoheight){
                    cthis.height(_inner.height());
                }

                if(_inner && _inner.hasClass('calculate-inner')){
                    //_inner.wrap('<div class="calculate-inner-con"></div>');
                    //
                    //_inner.parent().width(100000);
                    //_inner.css('display', 'inline-block');
                    //
                    //console.info(_inner.width());

                    //_inner.unwrap();
                }

                //totalHeight = cthis.height();
                if(o.type=='scrollTop'){

                    var sw_wasstatic = false;
                    if(cthis.css('position')=='static'){
                        sw_wasstatic=true;
                        //cthis.css('position','relative');
                        //setTimeout(calculateDims,100);
                    }



                    //console.info(cthis, comHeight, totalHeight, $(window).height());





                }
                //console.info(cthis.height(), $(window).height(), comHeight, totalHeight);
                //return;
                if (o.settings_forcesameheight == 'on') {
                    totalHeight = comHeight;
                    //cthis.height(totalHeight);
                }

                if (o.scrollBg == 'on') {
                    comHeight = cthis.height();
                    totalHeight = $(window).height();
                }

                //determining the direction ------------
                if (comHeight <= totalHeight ) {
                    dir_ver = false;
                } else {
                    dir_ver = true;

                }
                if (comWidth <= totalWidth) {
                    dir_hor = false;
                } else {
                    dir_hor = true;
                    cthis.addClass('dir-hor');

                }



                if (o.force_onlyy == 'on') {
                    dir_hor = false;
                }
                if (o.force_onlyx == 'on') {
                    dir_ver = false;
                }

                if(o.type=='scrollTop'){
                    dir_ver=true;



                    if(comHeight<=totalHeight){
                        dir_ver=false;
                    }
                }


                if(dir_hor==true){

                    cthis.addClass('dir-hor');
                }else{

                    cthis.removeClass('dir-hor');
                }

                if(dir_ver==true){

                    cthis.addClass('dir-ver');
                }else{

                    cthis.removeClass('dir-ver');
                }



                if(dir_hor==false && scrollbarx!=undefined){
                    scrollbarx.remove();
                    scrollbarx_bg.remove();
                    scrollbarx = undefined;
                    scrollbarx_bg = undefined;
                }

                if(dir_ver==false && scrollbary!=undefined){
                    scrollbary.remove();
                    scrollbary_bg.remove();
                    scrollbary = undefined;
                    scrollbary_bg = undefined;
                }

//                console.info(dir_hor, dir_ver);

                if (dir_ver == false && dir_hor == false){
                    cthis.addClass('no-need-for-nav');
                    return;
                }else{

                    cthis.removeClass('no-need-for-nav');
                }


                var auxperc = 0;
                var auxpery = 0;




                if (o.settings_scrollbar == 'on') {
                    if (scrollbary == undefined && dir_ver) {
                        _scrollbar.append('<div class="scrollbary_bg"></div>')
                        _scrollbar.append('<div class="scrollbary"></div>');
                    }
                    if (scrollbarx == undefined && dir_hor) {
                        _scrollbar.append('<div class="scrollbarx_bg"></div>')


                        var aux = '<div class="scrollbarx">';

                        aux+='';

                        //console.info(o.settings_skin);
                        if(o.settings_skin=='skin_luna' || o.settings_skin=='skin_cerc'){
                            aux+='<svg class="arrow-left" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="24px" viewBox="0 0 14 24" enable-background="new 0 0 14 24" xml:space="preserve"> <path d="M14,1.996c0,0.208-0.08,0.393-0.241,0.553L4.306,12l9.454,9.451C13.92,21.611,14,21.795,14,22.004s-0.08,0.393-0.241,0.553 l-1.203,1.203c-0.16,0.16-0.345,0.24-0.553,0.24s-0.393-0.08-0.553-0.24L0.241,12.553C0.08,12.393,0,12.208,0,12 s0.08-0.393,0.241-0.553L11.45,0.24C11.61,0.08,11.795,0,12.003,0s0.393,0.08,0.553,0.24l1.203,1.203C13.92,1.603,14,1.788,14,1.996 z"/> </svg><svg class="arrow-right" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="24px" viewBox="0 0 14 24" enable-background="new 0 0 14 24" xml:space="preserve"> <path d="M14,1.996c0,0.208-0.08,0.393-0.241,0.553L4.306,12l9.454,9.451C13.92,21.611,14,21.795,14,22.004s-0.08,0.393-0.241,0.553 l-1.203,1.203c-0.16,0.16-0.345,0.24-0.553,0.24s-0.393-0.08-0.553-0.24L0.241,12.553C0.08,12.393,0,12.208,0,12 s0.08-0.393,0.241-0.553L11.45,0.24C11.61,0.08,11.795,0,12.003,0s0.393,0.08,0.553,0.24l1.203,1.203C13.92,1.603,14,1.788,14,1.996 z"/> </svg>';
                        }


                        aux+= o.extra_html_scrollbarx;

                        aux+='</div>';

                        _scrollbar.append(aux);





                    }
                }



                if (scrollbary == undefined && dir_ver) {
                    scrollbary = _scrollbar.children('.scrollbary');
                    scrollbary_bg = _scrollbar.children('.scrollbary_bg');
                    scrollbary_psize = scrollbary.height();
                    if (o.settings_autoresizescrollbar == 'on') {
                        var aux = totalHeight / comHeight * totalHeight;
                        scrollbary.css('height', aux);
                        scrollbary_psize = aux;
                    }
                    scrollbary_bg.css('height', totalHeight);

                    if (o.settings_fadeoutonleave == 'on') {
                        scrollbary.css('opacity', 0);
                        scrollbary_bg.css('opacity', 0);
                    }



                    scrollbary_bg.mousedown(function(event) {
                        scrollbary_pressed = true;
                        o.settings_slideshow=0;
                        scrollbary_draglocaly = mousey - scrollbary.offset().top + cthis.offset().top;
                        if(o.type=='scrollTop'){
                            scrollbary_draglocaly = mousey - scrollbary.offset().top + $(window).scrollTop();
                        }
                        return false;
                    });
                    scrollbary.mousedown(function(event) {
                        scrollbary_pressed = true;
                        o.settings_slideshow=0;
                        //console.log(mousey, scrollbary.offset().top, cthis.offset().top);
                        scrollbary_draglocaly = mousey - scrollbary.offset().top + cthis.offset().top;
                        if(o.type=='scrollTop'){
                            scrollbary_draglocaly = mousey - scrollbary.offset().top + $(window).scrollTop();
                        }
                        return false;
                    });
                }

                if (scrollbarx == undefined && dir_hor) {
                    scrollbarx = _scrollbar.children('.scrollbarx');
                    scrollbarx_bg = _scrollbar.children('.scrollbarx_bg');
                    scrollbarx_psize = scrollbarx.width();
                    //console.log(comWidth, totalWidth);
                    if (o.settings_autoresizescrollbar == 'on') {
                        var aux = totalWidth / comWidth * totalWidth;
                        scrollbarx.css('width', aux);
                        scrollbarx_psize = aux;
                    }
                    scrollbarx_bg.css('width', totalWidth);

                    if (o.settings_fadeoutonleave == 'on') {
                        scrollbarx.css('opacity', 0);
                        scrollbarx_bg.css('opacity', 0);
                    }
                    if (comWidth <= totalWidth && o.settings_fullwidth == 'on') {
                        scrollbarx.hide();
                        scrollbarx_bg.hide();
                    }


                    scrollbarx.mousedown(function(event) {
                        scrollbarx_pressed = true;
                        o.settings_slideshow=0;
                        //scrollbarx_dragx = parseInt($(this).css('left'));
                        scrollbarx_draglocalx = mousex - scrollbarx.offset().left + cthis.offset().left;
                        return false;
                    });

                    scrollbarx_bg.mousedown(function(event) {
                        scrollbarx_pressed = true;
                        o.settings_slideshow=0;
                        return false;
                    });
                }


                if (scrollbarx && dir_hor == true) {
                    auxperc = parseInt(scrollbarx.css('left')) / totalWidth;


                    if (o.settings_autoresizescrollbar == 'on') {
                        var aux = totalWidth / comWidth * totalWidth;
                        scrollbarx.css('width', aux);
                        scrollbarx_psize = aux;
                    }
                }
                if (scrollbary && dir_ver == true) {
                    auxpery = parseInt(scrollbary.css('top')) / totalHeight;

                    if (o.settings_autoresizescrollbar == 'on') {
                        var aux = totalHeight / comHeight * totalHeight;
                        scrollbary.css('height', aux);
                        scrollbary_psize = aux;
                    }
                }

                //if(percomWidth == 0){
//                percomWidth = comWidth + 50;
                //}
                //console.log(_outer, totalWidth, cthis.width());

                if (scrollbarx && dir_hor == true) {
                    scrollbarx_bg.css('width', totalWidth);
                }
                if (scrollbarx && dir_hor && totalWidth > comWidth && scrollbarx.css('display') == 'block') {
                    scrollbarx_bg.hide();
                    scrollbarx.hide();
                    auxperc = 0;
                }
                if (scrollbarx && dir_hor && totalWidth < comWidth && scrollbarx.css('display') == 'none') {
                    scrollbarx_bg.show();
                    scrollbarx.show();
                    auxperc = 0;
                }
                if (scrollbary && dir_ver == true) {
                    scrollbary_bg.css('height', totalHeight);
                }
                /*
                 * for late use
                 if(dir_hor && totalWidth > comWidth && scrollbarx.css('display')=='block'){
                 scrollbarx_bg.hide();
                 scrollbarx.hide();
                 auxperc=0;
                 }
                 if(dir_hor && totalWidth < comWidth && scrollbarx.css('display')=='none'){
                 scrollbarx_bg.show();
                 scrollbarx.show();
                 auxperc=0;
                 }
                 */
                //console.info(viewIndexY, 'animateScrollbar from handle_frame()');

                var args={
                    do_not_clear_suspend_enter_frame: 'on'
                }
                animateScrollbar(args);
                if (dir_hor && totalWidth > comWidth && o.settings_fullwidth == 'on') {
                    //_inner.css('left', 0)
                }

            }
            function scrollToTop() {
                //console.info('scrollToTop()');
                viewIndexY = 0;
                scrollIndexY = 0;
                //console.info('animateScrollbar from handle_frame()');
                animateScrollbar();
            }
            function reinit() {
                ww = $(window).width();
                wh = $(window).height();
                calculateDims();
            }


            cthis.get(0).api_reinit = reinit;
            cthis.get(0).api_handle_wheel = handle_wheel;


            if (o.settings_scrollbyhover != 'on' && ( cthis.hasClass('is-touch')==false || o.settings_disableSpecialIosFeatures == 'on')){



                if(o.type=='scrollTop'){
                    if ($(window)[0].addEventListener){
                        $(window)[0].addEventListener('DOMMouseScroll', handle_wheel, false);
                        //console.info($('iframe[src*="vimeo.com"]'));
                        //$('iframe[src*="vimeo.com"]').contents().find("body").bind('mousewheel', function(e, delta) {
                        //    //console.info('ceva');
                        //});
                        //$('body').bind('wheel', function(){
                        //    console.log('ffwheel');
                        //})
                        //$('body').find('iframe').bind('wheel', function(){
                        //    console.log('ffwheel');
                        //})
                    }else{
                    }
                    $(window)[0].onmousewheel = handle_wheel;

                    //addWheelListener( window, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
                }else{

                    if (cthis[0].addEventListener){
                        cthis[0].addEventListener('DOMMouseScroll', handle_wheel, false);
                    }else{
                    }
                    cthis[0].onmousewheel = handle_wheel;
                }




//            console.info(o.secondCon);
//            secondCon_enable_mouse_scroll

                if(o.secondCon){
                    if (o.secondCon[0].addEventListener){
                        o.secondCon[0].addEventListener('DOMMouseScroll', handle_wheel, false);
                    }
                    o.secondCon[0].onmousewheel = handle_wheel;
                }

            }



            /*
             if (window.addEventListener){
             window.addEventListener('DOMMouseScroll', handle_wheel, false);
             }else{
             }
             window.onmousewheel = document.onmousewheel = handle_wheel;
             */


            function handle_wheel(e){
                //console.info('handle_wheel()', e, e.deltaY);

                var _t = $(this);

                if(o.type=='scrollTop'){
                    _t = cthis;
                }

                if(scrolling_blocked){ return; }

                scrollbufferX = false;
                scrollbufferY = false;
                //alert(e.wheelDeltaY);
//                console.log(e, e.axis, e.detail, cthis, _t);
//                console.log(cthis.has($(e.target)).length);

                // == ie8 has no event :| tx mousehweel plugin
                var the_event = e || window.event;


                if(the_event && the_event.target && cthis.has($(the_event.target)).length<1){
                    //return;
                }



                auxdeltax = return_deltax(the_event);
                auxdeltay = return_deltay(the_event);

                auxdeltax *= o.settings_multiplier;
                auxdeltay *= o.settings_multiplier;


                //console.info(isChrome, isSafari, is_firefox());

                //console.info(o.settings_multiplier, auxdeltay, o.settings_chrome_multiplier);
                if(isChrome){
                    auxdeltax *= o.settings_chrome_multiplier;
                    auxdeltay *= o.settings_chrome_multiplier;
                }
                if(isSafari){
                    //==hack safari detets chrome too..
                    auxdeltax = return_deltax(the_event);
                    auxdeltay = return_deltay(the_event);
                    auxdeltax *= o.settings_safari_multiplier;
                    auxdeltay *= o.settings_safari_multiplier;
                }
                //console.log(auxdeltay);

                //console.info(is_firefox(), auxdeltay);
                if(is_firefox()){
                    auxdeltax *= o.settings_firefox_multiplier;
                    auxdeltay *= o.settings_firefox_multiplier;
                }
                if(is_opera()){
                    auxdeltax *= o.settings_opera_multiplier;
                    auxdeltay *= o.settings_opera_multiplier;
                }

                if(is_ie()){
                    auxdeltax = 0;
                    auxdeltay = return_delta(the_event);


                    auxdeltax *= o.settings_ie_multiplier;
                    auxdeltay *= o.settings_ie_multiplier;
                }


                //console.info(o.settings_multiplier, auxdeltay);

                //console.info(navigator.userAgent, auxdeltay, e.axis, is_ie(), version_ie(), getInternetExplorerVersion());
                if(getInternetExplorerVersion()>=11){
                    auxdeltax = 0;
                    auxdeltay = return_delta(the_event);

                    //console.info(auxdeltay);

                    auxdeltax *= o.settings_ie_multiplier;
                    auxdeltay *= o.settings_ie_multiplier;
                    //console.info(auxdeltay);
                }


                if(/Edge/.test(navigator.userAgent)) {
                    console.warn("edge");
                    auxdeltax = return_deltax(the_event);
                    auxdeltay = return_deltay(the_event);

                    //console.info(auxdeltay);

                    auxdeltax *= o.settings_edge_multiplier;
                    auxdeltay *= o.settings_edge_multiplier;
                }


                //console.log(deltaY, delta);
                if (o.settings_replacewheelxwithy == 'on' && auxdeltax==0){
                    auxdeltax = auxdeltay;
                }




                if(isNaN(auxdeltax)){
                    auxdeltax = 0;
                }
                if(isNaN(auxdeltay)){
                    auxdeltay = 0;
                }

                //console.info('final deltaY', auxdeltay);

                if(cthis.get(0)==_t.get(0) || (o.secondCon && o.secondCon.get(0)==_t.get(0))){

                    if (dir_ver) {

                        //console.info(viewIndexY, auxdeltay);
                        viewIndexY += (auxdeltay * o.settings_multiplier);
                        scrollIndexY = viewIndexY / (comHeight - totalHeight) * -(totalHeight - scrollbary_psize);

                        //console.info(viewIndexY, totalHeight, comHeight);
                    }

                    if (dir_hor) {


                        viewIndexX += (auxdeltax * o.settings_multiplier);
                        //console.log(deltaX, deltaY, delta, auxdeltax, viewIndexX)
                        scrollIndexX = viewIndexX / (comWidth - totalWidth_for_scrollbar) * -(totalWidth_for_scrollbar - scrollbarx_psize);


                        if (o.secondCon != null) {
                            //console.log(secondCon_viX)
                            if (secondCon_viX == undefined) {
                                secondCon_viX = 0;
                            }

                            if(isNaN(secondCon_viX)){
                                secondCon_viX = lastNonNaNX_sc;
                            }else{
                                lastNonNaNX_sc = secondCon_viX
                            }

                            //console.info(auxdeltax, secondCon_cw, comWidth);
                            //secondCon_viX += ((auxdeltax * o.settings_multiplier) * (secondCon_cw/comWidth));
                            //secondCon_viX += ((auxdeltax * o.settings_multiplier) * (secondCon_cw/comWidth));
                        }


                    }
                }


                //console.info('animateScrollbar from handle_frame()');
                animateScrollbar({
                    animate_sc_based_on_main_scroll : "on"
                });

                if(dir_hor==false){
                    scrollbufferX = true;
                }

                if(dir_ver==false){
                    scrollbufferY = true;
                }

                //scrollbufferY = true;

                //console.log(scrollbufferY);

                //console.log(auxdeltax);
                //if scrollbuffer Y is true then we can scroll on
                if (auxdeltay !=0 && scrollbufferY == false) {
                    if((is_ie8())==false){
                        the_event.stopPropagation();
                        the_event.preventDefault();
                    }else{
                        return false;
                    }
                }
                if (auxdeltax !=0 && scrollbufferX == false) {
                    if((is_ie8())==false){
                        the_event.stopPropagation();
                        the_event.preventDefault();
                    }else{
                        return false;
                    }
                }

                //console.info('scrollbar active from scroll',auxdeltay,auxdeltax);

                if(auxdeltax!=0 || auxdeltay!=0){

                    clearTimeout(inter_hidescrollbar);
                    inter_hidescrollbar = setTimeout(inter_hidescrollbar_func, 1000);
                    cthis.addClass('scrollbar-active');
                }

                //console.info('action_handle_wheel_end', action_handle_wheel_end);

                if(action_handle_wheel_end){

                    action_handle_wheel_end(e, auxdeltax, auxdeltay);
                }


                if(o.type=='scrollTop'){
                    if(is_safari()){
                        return false;
                    }
                }



                //console.log(return_delta(the_event),return_deltax(the_event),return_deltay(the_event));


                //console.info('CEVA');
                //suspend_enter_frame=false;
                //clearTimeout(inter_suspend_enter_frame);
                //inter_suspend_enter_frame = setTimeout(suspend_enter_frame_func, 1000);


            }

            function return_delta(e){
                if(!(e)){
                    return 0;
                }

                if (e.originalEvent && e.originalEvent.wheelDelta) {
                    return e.originalEvent.wheelDelta;
                }
                if (e.wheelDelta) {
                    return e.wheelDelta;
                }
                if (e.detail) {
                    return e.detail;
                }



                if (e.originalEvent != undefined && e.originalEvent.detail!=undefined) {
                    return e.originalEvent.detail * -40;
                }

            }

            function return_deltax(e)
            {
                if(!(e)){
                    return 0;
                }

                if(is_firefox()){
                    if(e.axis==1){
                        return e.detail;
                    }else{
                        return 0;
                    }
                }


                if (e.originalEvent && e.originalEvent.wheelDeltaX) {
                    return e.originalEvent.wheelDeltaX;
                }
                if (e.wheelDelta) {
                    return e.wheelDeltaX;
                }

                if (e.originalEvent != undefined && e.originalEvent.detail) {
                    return e.originalEvent.detail * -40;
                }

            }
            function return_deltay(e){
                if(!(e)){
                    return 0;
                }
                if(is_firefox()){
                    if(e.axis==2){
                        return e.detail;
                    }else{
                        return 0;
                    }
                }


                if (e.originalEvent && e.originalEvent.wheelDeltaY) {
                    return e.originalEvent.wheelDeltaY;
                }
                if (e.wheelDelta) {
                    return e.wheelDeltaY;
                }

                if (e.originalEvent != undefined && e.originalEvent.detail) {
                    return e.originalEvent.detail * -40;
                }

            }

            if ((cthis.hasClass('is-touch')==false) || o.settings_disableSpecialIosFeatures == 'on') {
                $(document).mousemove(function(e) {
                    mousex = (e.pageX - cthis.offset().left);
                    mousey = (e.pageY - cthis.offset().top);
                    if(o.type=='scrollTop'){
                        mousey = (e.pageY - $(window).scrollTop());
                    }
                    //console.info(mousey);

                    if (o.settings_scrollbyhover == 'on' && (mousex < 0 || mousey < 0 || mousex > totalWidth + 20 || mousey > totalHeight + 20)){
                        return;
                    }
                    if (dir_ver == true && (scrollbary_pressed == true || o.settings_scrollbyhover == 'on')) {


                        _scrollbar.addClass('dragging');
                        cthis.addClass('dragging');
                        if (o.settings_dragmethod == 'normal') {
                            scrollIndexY = mousey / totalHeight * (totalHeight - scrollbary_psize);
                            viewIndexY = mousey / totalHeight * (totalHeight - comHeight);
                        }
                        if (o.settings_dragmethod == 'drag') {
                            //console.log(mousey, scrollbary.offset().top, scrollbary_draglocaly);
                            scrollIndexY = scrollbary_dragy + (mousey - scrollbary_dragy) - scrollbary_draglocaly;
                            //console.info(scrollIndexY);
                            viewIndexY = (scrollIndexY / (-(totalHeight - scrollbary_psize))) * (comHeight - totalHeight);
                        }
                        //console.info(viewIndexY,scrollIndexY);
                        viewIndexY = parseInt(viewIndexY, 10);
                        //console.info('animateScrollbar from handle_frame()');
                        animateScrollbar();
                    }

                    if (dir_hor == true && (scrollbarx_pressed == true || o.settings_scrollbyhover == 'on')) {
                        _scrollbar.addClass('dragging');
                        cthis.addClass('dragging');
//                        console.info(o.settings_dragmethod, scrollbarx_draglocalx);
                        if (o.settings_dragmethod == 'normal') {
                            scrollIndexX = mousex / totalWidth * (totalWidth - scrollbarx_psize);
                            viewIndexX = mousex / totalWidth * (totalWidth - comWidth);
                            if (o.secondCon != null) {
                                secondCon_viX = mousex / secondCon_tw * (secondCon_tw - secondCon_cw);
                            }
                        }
                        if (o.settings_dragmethod == 'drag') {

                            scrollIndexX = scrollbarx_dragx + (mousex - scrollbarx_dragx) - scrollbarx_draglocalx;
                            viewIndexX = (scrollIndexX / (-(totalWidth - scrollbarx_psize))) * (comWidth - totalWidth);

                            if (o.secondCon != null) {

                                //console.info(secondCon_tw, secondCon_cw);
                                secondCon_viX = (scrollIndexX / (-(secondCon_tw - scrollbarx_psize))) * (secondCon_cw - secondCon_tw);
                            }
                        }
                        //console.info('animateScrollbar from handle_frame()');
                        animateScrollbar();
                    }

                    if (o.settings_fadeoutonleave == 'on') {
                        scrollbary.animate({
                            'opacity': 1
                        }, {
                            queue: false,
                            duration: 500
                        });
                        scrollbary_bg.animate({
                            'opacity': 1
                        }, {
                            queue: false,
                            duration: 500
                        });
                    }


                    if(o.settings_show_sidebar_on_right_side_mouse=='on'){
                        //console.info(mousex, mousey, cthis.offset().left, cthis.width());

                        if(mousex>cthis.offset().left + cthis.width()-100 && mousex<=cthis.offset().left + cthis.width() && mousey>cthis.offset().top && mousey<=cthis.offset().top + cthis.height()){



                            clearTimeout(inter_hidescrollbar);
                            inter_hidescrollbar = setTimeout(inter_hidescrollbar_func, 1000);
                            cthis.addClass('scrollbar-active');

                        }
                    }

                });

            }

            //console.info(o.settings_enable_drag_on_desktops_too);

            if(o.settings_enable_drag_on_desktops_too=='on'){

                cthis.addClass('swipe-enabled');


                if(_inner){
                    _inner.bind('mousedown', handle_touchStart);
                    $(document).bind('mousemove', handle_touchMove);
                    $(document).bind('mouseup', handle_touchEnd);
                }


                if(o.secondCon){

                    o.secondCon.bind('touchstart', handle_touchStart);
                    o.secondCon.bind('touchend', handle_touchEnd);
                }
            }

            if (( cthis.hasClass('is-touch') == false) || o.settings_disableSpecialIosFeatures == 'on') {
                $(document).mouseup(function(event) {
                    //console.log('mouseup')

                    scrollbary_pressed = false;
                    scrollbarx_pressed = false;
                    if(_scrollbar){

                        _scrollbar.removeClass('dragging');
                    }
                    cthis.removeClass('dragging');
                })
            }else{
                cthis.addClass('swipe-enabled');

                if(_inner){
                    _inner.bind('touchstart', handle_touchStart);
                    _inner.bind('touchmove', handle_touchMove);
                    _inner.bind('touchend', handle_touchEnd);
                }


                if(o.secondCon){

                    o.secondCon.bind('touchstart', handle_touchStart);
                    o.secondCon.bind('touchend', handle_touchEnd);
                }
            }
            function animateScrollbarTop(){

            }
            function animateScrollbar(pargs) {

                //console.info(pargs);
                var margs = {
                    'animate_inner' : "on"
                    ,'animate_sc' : "on"
                    ,'animate_sc_based_on_main_scroll' : "off"
                    ,'force_no_easing': 'off'
                    ,'do_not_clear_suspend_enter_frame' : 'off'
                };
                margs = $.extend(margs, pargs);

                //console.log(viewIndexX, viewIndexY, o.secondCon);
                if (dir_ver) {

                    //console.info(viewIndexY, comHeight, totalHeight, cthis.outerHeight(), wh);

                    if (viewIndexY > 0){
                        viewIndexY = 0;
                    }

                    if(o.type=='scrollTop'){
                        totalHeight = wh;
                    }
                    if (viewIndexY < -(comHeight - totalHeight)){
                        viewIndexY = -(comHeight - totalHeight);
                    }
                    //console.info(viewIndexY);
                    if(isNaN(viewIndexY)){ viewIndexY = 0; }
                    if (scrollIndexY < 0) {
                        scrollIndexY = 0;
                        scrollbufferY = true;
                    }
                    if (scrollIndexY > (totalHeight - scrollbary_psize)) {
                        scrollIndexY = (totalHeight - scrollbary_psize);
                        scrollbufferY = true;
                    }
                    if (scrollbary) {
                        //console.log(viewIndexY, comHeight);
                        if(cthis.hasClass('easing')){
                            //console.log('ceva');
                            //clearTimeout(inter_reset); inter_reset = setTimeout(function(){animateScrollbarTop();}, 50);
                        }else{
                            //animateScrollbarTop();

                        }

                        //console.info(viewIndexY);
                        if(o.type=='normal'){
                            if(o.enable_easing!='on'){
                                _inner.css({
                                    'top': viewIndexY
                                })
                            }else{
                                finish_viy = viewIndexY;
                            }
                        }

                        //console.info(viewIndexY);

                        if(o.type=='scrollTop'){
                            //console.info(margs,viewIndexY, duration_viy);
                            if(o.enable_easing!='on' || margs.force_no_easing=='on'){
                                $(window).scrollTop(-viewIndexY);
                                backup_duration_viy = duration_viy;
                                duration_viy = 0;
                                finish_viy = viewIndexY;

                                setTimeout(function(){
                                    duration_viy = backup_duration_viy;
                                },100);

                            }else{
                                finish_viy = viewIndexY;

                                //console.info('IT MAKES IT HERE')
                                _window_object.data('targettop', finish_viy);
                            }
                        }



                        scrollbary.css({
                            'top': scrollIndexY
                        })
                        if (o.scrollBg == 'on') {
                            cthis.css('background-position', 'center ' + viewIndexY + 'px')
                        }

                    }

                }
//console.log(scrollbarx);
                if (dir_hor) {
//                    console.info(viewIndexX, scrollIndexX);
                    if(viewIndexX==null){
//                        viewIndexY = mousey / totalHeight * (totalHeight - comHeight);
//                        console.info(scrollIndexX, scrollbarx_psize, totalWidth)

                        viewIndexX =  scrollIndexX / (totalWidth - scrollbarx_psize ) * (totalWidth - comWidth)
//                        scrollIndexX = mousex / totalWidth * (totalWidth - scrollbarx_psize);
//                        viewIndexX = mousex / totalWidth * (totalWidth - comWidth);
                    }
                    if (viewIndexX < -(comWidth - totalWidth)){
                        viewIndexX = -(comWidth - totalWidth);
                    }
                    if (viewIndexX > 0){
                        viewIndexX = 0;
                    }
                    if(isNaN(viewIndexX)){
                        viewIndexX=lastNonNaNX;
                    }else{

                        lastNonNaNX = viewIndexX;
                    }


                    //console.info(viewIndexX, comWidth-totalWidth);

                    var rat = -viewIndexX/(comWidth-totalWidth);

                    if(margs.animate_sc_based_on_main_scroll=='on'){

                        secondCon_viX = rat * -(secondCon_cw - secondCon_tw);

                        //console.info(secondCon_viX);
                    }




                    //console.info(o.secondCon,secondCon_viX);
                    if (o.secondCon != null) {
//                        console.info(secondCon_viX);
                        if (secondCon_viX < -(secondCon_cw - secondCon_tw)) {
                            secondCon_viX = -(secondCon_cw - secondCon_tw);
                        }
                        if (secondCon_viX > 0) {
                            secondCon_viX = 0;
                        }
                        //console.info(secondCon_viX);

                    }
                    //console.info(secondCon_viX);


                    //console.log(viewIndexX);
                    if (scrollIndexX < 0){
                        scrollIndexX = 0;
                        scrollbufferX = true;
                        slideshow_reachedend = true;
                    }
                    if (scrollIndexX > (totalWidth_for_scrollbar - scrollbarx_psize)){
                        scrollIndexX = (totalWidth_for_scrollbar - scrollbarx_psize);
                        scrollbufferX = true;
                        slideshow_reachedend = true;
                    }



                    if (scrollbarx) {
                        //console.log(viewIndexY, comHeight);
                        if(cthis.hasClass('easing')){
                            //console.log('ceva');
                            //clearTimeout(inter_reset); inter_reset = setTimeout(function(){animateScrollbarTop();}, 50);
                        }else{
                            //animateScrollbarTop();

                        }

                        //if(cthis.hasClass('debug-target')){ console.info(viewIndexX, o.enable_easing); };

                        //console.info(o.enable_easing);
                        //console.info(_inner);

                        //console.info(viewIndexX);
                        if(o.type=='normal'){
                            if(o.enable_easing!='on'){
                                _inner.css({
                                    'left': viewIndexX
                                })
                            }else{
                                finish_vix = viewIndexX;
                            }
                        }

                        if(o.type=='scrollTop'){
                            if(o.enable_easing!='on'){
                                $(window).scrollLeft(-viewIndexX);
                            }else{
                                finish_vix = viewIndexX;
                            }
                        }

                        if(o.secondCon){

                            //console.info(o.enable_easing_for_second_con);

                            if(o.enable_easing_for_second_con!='on'){

                                o.secondCon.css({
                                    'left' : secondCon_viX
                                })
                            }else{

                                finish_vix_sc = secondCon_viX;
                            }
                        }

                        //console.info(scrollIndexX);

                        scrollbarx.css({
                            'left': scrollIndexX
                        })
                        if (o.scrollBg == 'on') {
                            cthis.css('background-position', '' + viewIndexY + 'px center')
                        }

                    }

                }

                if(margs.do_not_clear_suspend_enter_frame=='off'){

                    suspend_enter_frame=false;
                    clearTimeout(inter_suspend_enter_frame);
                    inter_suspend_enter_frame = setTimeout(suspend_enter_frame_func, 1000);
                }


                if(action_animate_scrollbar_end){

                    var args = {

                    };

                    args.totalWidth = totalWidth;
                    args.comWidth = comWidth;
                    args.viewIndexX = viewIndexX;

                    args = $.extend(args, margs);





                    action_animate_scrollbar_end(args);
                }




            }

            if (o.settings_fadeoutonleave == 'on' && (is_ios() == false || o.settings_disableSpecialIosFeatures == 'on')) {
                cthis.mouseleave(function(e) {
                    //console.log('mouseleave');
                    scrollbary.animate({
                        'opacity': 0
                    }, {
                        queue: false,
                        duration: 500
                    });
                    scrollbary_bg.animate({
                        'opacity': 0
                    }, {
                        queue: false,
                        duration: 500
                    });
                })
            }

//            console.info(is_ios());

            if ( (cthis.hasClass('is-touch')) && o.settings_disableSpecialIosFeatures !='on') {
                setInterval(ios_handle_frame, 80);
//                setInterval(debug_func, 500);

            }
            function debug_func(){
                debug_var = true;
            }
            function ios_handle_frame() {
                //console.info('ios_handle_frame');
//                return;
                //only for ios, calculate
                var cthis_touch_comwidth =0;
                var cthis_touch_left =0;
                var cthis_touch_comheight =0;
                var cthis_touch_top = 0;

                if(_inner){
                    cthis_touch_comwidth = _inner.width() - cthis.width();
                    cthis_touch_left = _inner.position().left;
                    cthis_touch_comheight = _inner.height() - cthis.height();
                    cthis_touch_top = _inner.position().top;
                }

                var sc = null;
                var scpar = null;


                if(o.secondCon){
                    sc= o.secondCon;
                    scpar = sc.parent();

//                    console.info(scpar.outerWidth());

                    var sc_touch_comwidth = sc.width() - scpar.width();
                    var sc_touch_left = sc.position().left;
                    var sc_touch_comheight = sc.height() - scpar.height();
                    var sc_touch_top = sc.position().top;
                }



//                console.info(iL, iW, totalWidth, scrollbarx_psize, scrollIndexX, scrollIndexY);

//                scrollIndexX = secondCon_viX *  ((-(secondCon_tw - scrollbarx_psize))) * (secondCon_cw - secondCon_tw));


                if(debug_var && cthis[0] == document.getElementById('scrollc3')){

//                    console.info(inner_dragging, cthis_touch_comwidth, cthis.width(), _inner.width(), _inner.position().top, _outer.position().top);
                    debug_var = false;
                }

                if(inner_dragging){

//                    console.info(cthis_touch_left, cthis_touch_comwidth, totalWidth, scrollbarx_psize);
                    scrollIndexX = ( (-cthis_touch_left) / cthis_touch_comwidth) * (totalWidth - scrollbarx_psize);
                    scrollIndexY = ( -cthis_touch_top / cthis_touch_comheight) * (totalHeight - scrollbarx_psize);

                    var args = {
                        'animate_inner': "off"
                    }

                    if(sc){
                        secondCon_viX = -(((scrollIndexX / (secondCon_tw - scrollbarx_psize)) * (secondCon_cw - secondCon_tw)));
                    }
//                    console.info('inner', scrollIndexX, secondCon_viX, secondCon_cw, secondCon_tw);

                    //console.info('animateScrollbar from handle_frame()');
                    animateScrollbar(args);
                }



                if(sc_dragging){
                    scrollIndexX =  ( (-sc_touch_left) / sc_touch_comwidth) * (totalWidth - scrollbarx_psize);
                    viewIndexX = scrollIndexX / totalWidth * (totalWidth - comWidth)
                    var args = {
                        'animate_sc': "off"
                    }
//                    console.info('sc', scrollIndexX);
//                    console.info('animateScrollbar scdragging from handle_frame()',scrollIndexX, viewIndexX);
                    animateScrollbar(args);
                }
                cthis_touch_left_last = cthis_touch_left;
                cthis_touch_top_last = cthis_touch_top;
                sc_touch_left_last = sc_touch_left;
                sc_touch_top_last = sc_touch_top;


            }

            return this;
        });
    };
    window.dzsscr_init = function(selector, settings) {
        if(typeof(settings)!="undefined" && typeof(settings.init_each)!="undefined" && settings.init_each==true ){
            var element_count = 0;
            for (var e in settings) { element_count++; }
            if(element_count==1){
                settings = undefined;
            }

            $(selector).each(function(){
                var _t = $(this);
                _t.scroller(settings)
            });
        }else{
            $(selector).scroller(settings);
        }

    };
})(jQuery);
function is_ios() {
//    return true;
    return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)
    );
}
function is_android() {
    //console.info(navigator.platform);
    return (navigator.platform.indexOf("Android") != -1);
}

function is_touch_device() {
    return !!('ontouchstart' in window);
}

function is_ie() {
    if (navigator.appVersion.indexOf("MSIE") != -1) {
        return true;
    }
    ;
    return false;
}
;
function is_firefox() {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        return true;
    }
    ;
    return false;
}
;
function is_opera() {
    if (navigator.userAgent.indexOf("Opera") != -1) {
        return true;
    }
    ;
    return false;
}
;
function is_chrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);;
}
;
function is_safari() {
    return  /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);;
}
;
function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1]);
}
;
function version_firefox() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var aversion = new Number(RegExp.$1);
        return(aversion);
    }
    ;
}
;
function version_opera() {
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var aversion = new Number(RegExp.$1);
        return(aversion);
    }
    ;
}
;
function is_ie8() {
    if (is_ie() && version_ie() < 9) {
        return true;
    }
    return false;
}
function is_ie9() {
    if (is_ie() && version_ie() == 9) {
        return true;
    }
    return false;
}

function getInternetExplorerVersion()
{
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();




jQuery(document).ready(function($){
    dzsscr_init('.scroller-con.auto-init', {init_each: true});
});
jQuery(window).load(function(){
    dzsscr_init('.scroller-con.auto-init-onload', {init_each: true});
});
// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

/*
 * Author: Digital Zoom Studio
 * Website: http://digitalzoomstudio.net/
 * Portfolio: http://codecanyon.net/user/ZoomIt/portfolio?ref=ZoomIt
 * This is not free software.
 * Advanced Scroller v1.44
 */


(function($) {
    var target_swiper;
    $.fn.advancedscroller = function(o) {
        var defaults = {
            settings_slideshowTime: '5' //in seconds
            , settings_autoHeight: 'on'
            , settings_autoHeight_proportional: 'off' // -- set proportional height of the image depending on the width
            , settings_autoHeight_proportional_max_height: 500 // -- the height on which shall not be passed
            , design_itemwidth: '200'
            , design_itemheight: '200'
            , design_arrowsize: 'default' // -- set the left and right arrow size, this is the size of an arrow
            , design_bulletspos: 'default' // --- set the bullets position top, bottom or default ( set by the skin ) or none
            , design_disableArrows: 'default'
            , design_forceitemwidth: ''
            ,settings_transition: 'slide' // slide or fade
            ,settings_direction: 'horizontal'
            ,settings_responsive: 'on'
            ,settings_mode: 'normal'//normal or onlyoneitem
            ,settings_swipe: "on"
            ,settings_swipeOnDesktopsToo: "off"
            ,settings_makeFunctional: true
            ,settings_centeritems: false
            ,settings_slideshow: 'off'
            ,settings_lazyLoading: 'off'
            ,settings_force_immediate_load: 'off' // -- force immediate load even if there are items to be loaded
            ,settings_slideshowDontChangeOnHover: 'on'
            ,settings_transition_only_when_loaded: 'off' // -- transition only when the image has fully loaded
            ,settings_wait_for_do_transition_call: 'off' // -- [advanced] set this when the transition is actually called from an outer function / api
            ,settings_secondCon: null
            ,mode_onlyone_autoplay_videos: 'on' // -- autoplay videos when scrolled to the video
        }

        if(typeof o =='undefined'){
            if(typeof $(this).attr('data-options')!='undefined'){
                var aux = $(this).attr('data-options');
                aux = 'var aux_opts = ' + aux;
                eval(aux);
                o = aux_opts;
            }
        }
        o = $.extend(defaults, o);

        //console.info(o);
        this.each(function() {
            var cthis = $(this)
                ;
            var nrItems = 0;
            var currNr = -1;
            var busy = true;
            var i = 0
                ,startIndex = 0
                ;
            var ww
                , wh
                , tw // total width of the container and h
                , th
                , cw // clip w and h
                , ch
                , realcw // clip w and h
                , realch
                ;
            var
                items_per_page = 0
                ;
            var
                _items
                ,_thumbsCon
                ,_thumbsClip
                ,_bulletsCon
                ,_arrowsCon
                ;
            var
                pag_total_thumbsizes = 0
                ,pag_total_thumbnr = 0 // = total number of thumbnails
                ,pag_total_pagenr = 0 // = total number of pages
                ,pag_excess_thumbnr = 0 // = the excess thumbs which go

                ;
            var currPage = -1
                ,currPageX = 0
                ,tempPage = 0
                ;
            //===slideshow vars
            var slideshowInter
                ,slideshowCount = 0
                ,slideshowTime
                ,inter_wait_loaded = null
                ;


            var sw_ctw = 0
                ,sw_tw = 0
                ;

            var loadedArray = []
                ,lazyLoadingArray = []
                ,itemsToBeArray = []
                ;


            var action_call_on_gotoItem = null;

            var inter_calculate_hard = 0;
            var is_over = false;
            var busy = false;
            var aux;
            var misc_has_height_same_as_width_elements = false;

            if(String(o.design_itemwidth)!='auto' && String(o.design_itemwidth).indexOf("%")==-1){
                o.design_itemwidth = parseInt(o.design_itemwidth, 10);
            }

            o.design_itemheight = parseInt(o.design_itemheight, 10);

            if(isNaN(Number(o.design_arrowsize))==false){
                o.design_arrowsize = Number(o.design_arrowsize);
            }

            o.settings_slideshowTime = parseInt(o.settings_slideshowTime, 10);
            o.design_forceitemwidth = parseInt(o.design_forceitemwidth, 10);
            slideshowTime = o.settings_slideshowTime;
            //console.info(cthis, o.design_forceitemwidth>0);
            init();



            if(document.addEventListener){
                document.addEventListener("fullscreenchange", handle_fs, false);
                document.addEventListener("webkitfullscreenchange", handle_fs, false);
                document.addEventListener("mozfullscreenchange", handle_fs, false);
            }



            function handle_fs(e){
                var fs = window.fullScreenApi.isFullScreen();
                if (fs) {
                }
                else {
                    setTimeout(function(){
                        handleResize();
                    },100);
                }
            }

            function init(){
                if(cthis.hasClass('inited')){
                    return;
                }

                //console.info('init()');

                th = cthis.outerHeight(false);

                if(cthis.attr('class').indexOf("skin-")==-1){
                    cthis.addClass(o.settings_skin);
                }
                if(cthis.hasClass('skin-default')){
                    o.settings_skin = 'skin-default';
                }
                if(cthis.hasClass('skin-inset')){
                    o.settings_skin = 'skin-inset';
                }
                if(cthis.hasClass('skin-agata-inset')){
                    o.settings_skin = 'skin-inset';
                    o.design_arrowsize = 0;
                }
                if(cthis.hasClass('skin-black')){
                    o.settings_skin = 'skin-black';
                    skin_tableWidth = 192;
                    skin_normalHeight = 158;
                }
                if(cthis.hasClass('skin-regen')){
                    o.settings_skin = 'skin-black';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                    if(o.design_bulletspos=='default'){
                        o.design_bulletspos = 'none';
                    }
                }
                if(cthis.hasClass('skin-avanti-inset')){
                    o.settings_skin = 'skin-avanti-inset';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                    if(o.design_bulletspos=='default'){
                        o.design_bulletspos = 'none';
                    }
                }
                if(cthis.hasClass('skin-whitefish')){
                    o.settings_skin = 'skin-whitefish';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                }
                if(cthis.hasClass('skin-bubble-inset')){
                    o.settings_skin = 'skin-bubble-inset';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                    if(o.design_bulletspos=='default'){
                        o.design_bulletspos = 'none';
                    }
                }
                if(cthis.hasClass('skin-nonav')){
                    o.settings_skin = 'skin-nonav';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                    if(o.design_bulletspos=='default'){
                        o.design_bulletspos = 'none';
                    }
                }

                if(cthis.hasClass('skin-giza')){
                    o.settings_skin = 'skin-giza';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                    if(o.design_bulletspos=='default'){
                        o.design_bulletspos = 'none';
                    }
                }

                if(cthis.hasClass('skin-qcre')){
                    o.settings_skin = 'skin-qcre';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                    if(o.design_bulletspos=='default'){
                        o.design_bulletspos = 'none';
                    }
                }


                if(cthis.hasClass('skin-giza-bullets')){
                    o.settings_skin = 'skin-giza-bullets';
                    if(o.design_arrowsize=='default'){
                        o.design_arrowsize = 0;
                    }
                    if(o.design_bulletspos=='default'){
                        o.design_bulletspos = 'bottom';
                    }

                    if(o.design_disableArrows=='default'){
                        o.design_disableArrows='on';
                    }
                }

                if( !(is_ie() && version_ie<9) && (o.settings_swipeOnDesktopsToo=='on' || (o.settings_swipeOnDesktopsToo=='off'&& (is_ios() || is_android() ) && o.settings_swipe=='on' )) ){


                    o.settings_transition = 'slide';
                }


                cthis.addClass('mode-' + o.settings_mode);
                cthis.addClass('transition-' + o.settings_transition);

                if(o.design_arrowsize=='default'){
                    o.design_arrowsize = 40;
                }
                if(o.design_bulletspos=='default'){
                    o.design_bulletspos = 'bottom';
                }

                if(o.design_disableArrows=='default'){
                    o.design_disableArrows='off';
                }



                if(o.design_bulletspos=='top'){
                    cthis.append('<div class="bulletsCon"></div>');
                }
                cthis.append('<div class="thumbsCon" style="opacity: 0;"><ul class="thumbsClip"></ul></div>');
                if(o.design_bulletspos=='bottom'){
                    cthis.append('<div class="bulletsCon"></div>');
                }
                if(o.design_disableArrows!='on'){
                    cthis.append('<div class="arrowsCon"></div>');
                }

                _items = cthis.children('.items').eq(0);
                _bulletsCon = cthis.children('.bulletsCon').eq(0);
                _thumbsCon = cthis.children('.thumbsCon').eq(0);
                _thumbsClip = cthis.find('.thumbsClip').eq(0);
                _arrowsCon = cthis.find('.arrowsCon').eq(0);

                nrItems = _items.children().length;

                if(cthis.find('.js-height-same-as-width')){
                    misc_has_height_same_as_width_elements = true;
                }



                var ind = 0;
                itemsToBeArray = _items.children('.item-tobe');

                //console.info(_thumbsClip);
                _items.children('.item-tobe').each(function(){
                    var _t = $(this);
                    var ind2 = _t.parent().children().index(_t);


                    //console.log(_t, _t.parent().children(), ind);
                    aux = o.design_itemwidth;
                    //console.info(aux);
                    _t.addClass('item').removeClass('item-tobe');
                    if(aux!='auto' && aux!='' && cthis.hasClass('mode-onlyoneitem')==false){

                        _t.css({
                            'width' : aux
                        });
                    }
                    _thumbsClip.append(_t);

                    if(o.settings_lazyLoading=='on'){
                        if(_t.find('.imagediv').length==0 && _t.find('img').length==0){
                            lazyLoadingArray[ind] = 'tobeloaded';
                        }else{
                            lazyLoadingArray[ind] = 'loaded';
                        }
                    }

                    loadedArray[ind]=1;
                    ind++;


                });

                _arrowsCon.append('<div class="arrow-left"></div>');
                _arrowsCon.append('<div class="arrow-right"></div>');
                //console.log(cthis.find('.needs-loading'));

                if(o.settings_skin=='skin-avanti-inset'){
                    _arrowsCon.find('.arrow-left').eq(0).append('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17.153px" height="29.969px" viewBox="0 0 17.153 29.969" enable-background="new 0 0 17.153 29.969" xml:space="preserve"> <g> <g> <path fill="#CBCAC1" d="M14.566,0.316C9.947,4.933,5.329,9.55,0.709,14.167c-0.457,0.456,0.25,1.164,0.707,0.707 c4.619-4.617,9.238-9.233,13.857-13.85C15.729,0.567,15.022-0.14,14.566,0.316L14.566,0.316z"/> </g> </g> <g> <g> <path fill="#CBCAC1" d="M0.709,14.874c4.903,4.901,9.806,9.802,14.709,14.703c0.456,0.456,1.163-0.251,0.707-0.707 c-4.903-4.901-9.806-9.802-14.709-14.703C0.96,13.71,0.253,14.417,0.709,14.874L0.709,14.874z"/> </g> </g> </svg> ');
                    _arrowsCon.find('.arrow-right').eq(0).append('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17.153px" height="29.969px" viewBox="0 0 17.153 29.969" enable-background="new 0 0 17.153 29.969" xml:space="preserve"> <g> <g> <path fill="#CBCAC1" d="M1.538,1.061c4.661,4.617,9.323,9.233,13.983,13.85c0.459,0.454,1.166-0.252,0.707-0.707 c-4.66-4.617-9.322-9.233-13.983-13.85C1.787-0.1,1.08,0.607,1.538,1.061L1.538,1.061z"/> </g> </g> <g> <g> <path fill="#CBCAC1" d="M15.521,14.204c-4.947,4.9-9.896,9.801-14.844,14.703c-0.458,0.453,0.249,1.16,0.707,0.707 c4.948-4.9,9.896-9.803,14.844-14.704C16.688,14.458,15.98,13.75,15.521,14.204L15.521,14.204z"/> </g> </g> </svg>  ');
                }
                if(o.settings_skin=='skin-bubble-inset'){
                    _arrowsCon.find('.arrow-left').eq(0).append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="43.625px" height="43.625px" viewBox="-13.236 -6.791 43.625 43.625" enable-background="new -13.236 -6.791 43.625 43.625" xml:space="preserve"> <g id="Layer_2"> <circle fill="#DB4343" cx="8.576" cy="15.021" r="21.812"/> </g> <g id="Layer_1"> <g> <g> <path fill="#CBCAC1" d="M11.428,5.492C8.42,8.5,5.412,11.507,2.403,14.514c-0.297,0.297,0.163,0.758,0.461,0.46 c3.009-3.007,6.017-6.014,9.025-9.021C12.186,5.656,11.725,5.195,11.428,5.492L11.428,5.492z"/> </g> </g> <g> <g> <path fill="#CBCAC1" d="M2.403,14.975c3.193,3.193,6.387,6.385,9.581,9.577c0.297,0.297,0.758-0.163,0.461-0.46 c-3.194-3.193-6.388-6.385-9.581-9.578C2.566,14.217,2.106,14.677,2.403,14.975L2.403,14.975z"/> </g> </g> </g> </svg> ');
                    _arrowsCon.find('.arrow-right').eq(0).append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="43.625px" height="43.625px" viewBox="-13.236 -6.791 43.625 43.625" enable-background="new -13.236 -6.791 43.625 43.625" xml:space="preserve"> <g id="Layer_2"> <circle fill="#DB4343" cx="8.576" cy="15.021" r="21.812"/> </g> <g id="Layer_1"> <g> <g> <path fill="#CBCAC1" d="M5.54,25.236c3.032-3.031,6.063-6.062,9.097-9.094c0.3-0.3-0.164-0.764-0.464-0.464 c-3.033,3.03-6.064,6.062-9.097,9.093C4.777,25.072,5.241,25.535,5.54,25.236L5.54,25.236z"/> </g> </g> <g> <g> <path fill="#CBCAC1" d="M14.637,15.679c-3.218-3.219-6.438-6.436-9.656-9.653c-0.3-0.299-0.764,0.165-0.465,0.464 c3.22,3.219,6.438,6.435,9.657,9.653C14.473,16.443,14.937,15.979,14.637,15.679L14.637,15.679z"/> </g> </g> </g> </svg> ');
                }
                if(o.settings_skin=='skin-giza'){
                    _arrowsCon.find('.arrow-left').eq(0).append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="-1255.924 50.484 30 30" enable-background="new -1255.924 50.484 30 30" xml:space="preserve"> <g id="Layer_3"> <circle fill="#FFFFFF" cx="-1240.882" cy="65.443" r="13.958"/> </g> <g id="Layer_2"> <circle fill="#D1B87E" cx="-1240.903" cy="65.758" r="10.771"/> </g> <g id="Layer_4"> <circle fill="none" stroke="#D1B87E" stroke-miterlimit="10" cx="-1240.882" cy="65.443" r="13.958"/> </g> <g id="Layer_5"> <polygon fill="#FFFFFF" points="-1243.669,64.32 -1239.729,60.386 -1238.243,61.853 -1242.255,65.681 -1237.673,70.316 -1238.989,71.633 -1244.986,65.637 "/> </g> </svg>  ');
                    _arrowsCon.find('.arrow-right').eq(0).append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="-1255.924 50.484 30 30" enable-background="new -1255.924 50.484 30 30" xml:space="preserve"> <g id="Layer_3"> <circle fill="#FFFFFF" cx="-1240.882" cy="65.443" r="13.958"/> </g> <g id="Layer_2"> <circle fill="#D1B87E" cx="-1240.903" cy="65.758" r="10.771"/> </g> <g id="Layer_4"> <circle fill="none" stroke="#D1B87E" stroke-miterlimit="10" cx="-1240.882" cy="65.443" r="13.958"/> </g> <g id="Layer_5"> <polygon fill="#FFFFFF" points="-1238.109,67.508 -1242.34,71.734 -1243.736,70.359 -1239.439,66.234 -1243.736,61.881 -1242.322,60.467 -1236.695,66.094 "/> </g> </svg> ');
                }

                cthis.addClass('inited');



                //console.info('inited');
                cthis.get(0).api_set_action_call_on_gotoItem = function(arg){
                    //console.info(arg);
                    action_call_on_gotoItem = arg;
                }




                cthis.find('.imagediv').each(function(){
                    var _t = $(this);
//                    console.info(_t, _t.parent().hasClass('item'));

                    if(_t.parent().hasClass('item')){

                        if(_t[0].style.height=='' || _t[0].style.height=='auto'){
                            if(_t.parent().hasClass('type-inline')==false){

                                //console.info("ADD NEEDS-LOADING",o.settings_lazyLoading, _t.parent().hasClass('loaded'));
                                _t.parent().addClass('needs-loading');
                            }
                        }
                    }
                });

//                console.info(lazyLoadingArray);
                if(o.settings_lazyLoading=='on'){

//                    console.info(_thumbsClip);
                    prepareForLoad(startIndex);
                    if(_thumbsClip.children().eq(startIndex).hasClass('type-inline')==false) {
                        _thumbsClip.children().eq(startIndex).addClass('needs-loading');
                    }
                }else{
                    for(i=0;i<lazyLoadingArray.length;i++){
                        loadItem(lazyLoadingArray[i]);
                    }
                }

                //console.info('advancedscroller - init()');
                if(cthis.find('.item.needs-loading:not(.loaded)').length>0 && o.settings_force_immediate_load=='off'){
                    //console.log('ceva');
                    checkWhenLoaded();
                }else{
                    if(o.settings_force_immediate_load=='on'){

                        checkWhenLoaded();
                    }
                    init_setup();
                }

            }

            function checkWhenLoaded(){

                //console.log(cthis.find('.item.needs-loading'));

                cthis.find('.item.needs-loading:not(.loaded)').each(function(){
                    var _t = $(this);
                    var ind = _t.parent().children().index(_t);


                    if(_t.html()==''){
                        loadedArray[ind]=1;
                        return;
                    }
                    //console.info(_t,_t.find('.imagediv').length, _t.find('img').eq(0));

                    if(_t.find('.imagediv').length>0){
                        toload = _t.find('.imagediv').eq(0).get(0);

                        img = new Image();


                        var aux = _t.find('.imagediv').eq(0).css('background-image');

//                            console.info(o, th);

                        //console.info(o.settings_autoHeight);
                        if(o.settings_autoHeight=='off'){
//                                _t.find('.imagediv').eq(0).css('height', th);
                            _t.find('.imagediv').eq(0).css('height', '100%');
                            _t.css('height', '100%');
                            _thumbsClip.css('height', '100%')
                            _thumbsCon.css('height', '100%')
                        }
//                            console.info(aux);
                        aux = aux.replace('url("', '');
                        aux = aux.replace('")', '');
                        aux = aux.replace('url(', '');
                        aux = aux.replace(')', '');


                        //console.info("FROM IMAGE DIV");

                        img.onload = function(e){
                            // image  has been loaded
                            //console.info('realparent: ',e.target.realparent);


                            var args = {
                                dzsas_index: ind
                                ,target: e.target.realparent
                            }

                            loadedImage(args);
                        };


                        toload.dzsas_index = ind;
                        toload.realimg = img;
                        img.realparent = toload;

                        loadedArray[ind]=0;
                        img.src = aux;


                    }else{
                        toload = _t.find('img').eq(0).get(0);


                    }

//                        console.info(toload.style.height=='')
//                    console.info(toload);

                    if(typeof(toload)=="undefined"){

                        //console.info(_t, _t.find('.vplayer'),_t.find('.vplayer-tobe'))
                        if(_t.find('.vplayer').length>0){
                            toload = _t.find('.vplayer').eq(0);
                        }

                        var args = {
                            dzsas_index: ind
                            ,target: toload
                        }
                        //console.info("FROM SETTIMEOUT NONE FOUND",ind, args);
                        setTimeout(loadedImage, 500, args);
                    }else{
                        loadedArray[ind]=0;


                        var args = {
                            dzsas_index: ind
                            ,target: toload
                        }


                        toload.dzsas_index = ind;


                        //console.info(toload,toload.complete==true,toload.naturalWidth)


                        if(toload.complete==true && toload.naturalWidth != 0){
                            //console.info("FROM SET TIMEOUT LOADED");
                            setTimeout(loadedImage, 500, args);
                        }else{
                            $(toload).bind('load', loadedImage);
                        }
                    }
                });
            }

            function loadedImage(pargs){
                var ind = 0;
                var _t = $(this);
                var _con = null;


                var margs = {
                    dzsas_index : null
                    ,target : null
                }

                if(pargs){
                    margs = $.extend(margs,pargs);

                    if(pargs.currentTarget){
                        margs.target = pargs.currentTarget;

                        if(margs.target && margs.target.dzsas_index){
                            margs.dzsas_index = margs.target.dzsas_index;
                        }
                    }
                }



                //console.info('loadedImage', margs);

                if(margs.dzsas_index){
                    ind = margs.dzsas_index;
                }
                if(margs.target){
                    _t = $(margs.target);
                }

                //console.info(_t,ind);


                if(_t.hasClass('imagediv')){
                    //console.info(_t,ind);

                    if(_t.get(0).style.height=='' || _t.get(0).style.height=='auto'){
                        _t.height(_t.get(0).realimg.naturalHeight);

                    }

                    //console.info(_t,_t.get(0).realimg);

                    _t.data('natural_w',_t.get(0).realimg.naturalWidth);
                    _t.data('natural_h',_t.get(0).realimg.naturalHeight);
                }
                loadedArray[ind]=1;

                //console.info(loadedArray);


                if(_t.parent().hasClass('item')){
                    _con = _t.parent();

                }
                if(_t.parent().parent().hasClass('item')){
                    _con = _t.parent().parent();
                }
                if(_t.parent().parent().parent().hasClass('item')){
                    _con = _t.parent().parent().parent();
                }
                if(_t.parent().parent().parent().parent().hasClass('item')){
                    _con = _t.parent().parent().parent().parent();
                }

                if(_con){

                    var _img = _t.get(0);

                    //console.info(ind, _t);

                    if(_t.get(0).realimg){
                        _img = _t.get(0).realimg;
                    }
                    //console.info(_img,_img.naturalWidth);
                    if(_img.naturalWidth){
                        _con.data('naturalWidth' , _img.naturalWidth);
                    }
                    if(_img.naturalHeight){
                        _con.data('naturalHeight' , _img.naturalHeight);
                    }

                    //console.info(_t);
                    if(!(_img.naturalWidth)){
                        if(_t.hasClass('vplayer')){

                            _con.data('' , 500);
                            if(_t.attr('data-width-for-gallery')){

                                _con.data('naturalWidth' , _t.attr('data-width-for-gallery'));
                            }else{

                                _con.data('naturalWidth' , 800);
                            }

                            if(_t.attr('data-height-for-gallery')){

                                _con.data('naturalHeight' , _t.attr('data-height-for-gallery'));
                            }else{

                                _con.data('naturalHeight' , 800);
                            }
                        }

                        if(_t.parent().parent().hasClass('wipeout-wrapper')){
                            _t.parent().parent().addClass('is-video');
                        }
                    }

                    //console.info(_con,_img);

                    _con.addClass('loaded');
                }


                var sw = false
                for(i=0;i<loadedArray.length;i++){
                    if(loadedArray[i]!=1){
                        sw = true;
                    }
                }
                if(sw==false){
                    var args={
                        from_check_loaded : true
                    };
                    init_setup(args);
                }
            }
            function init_setup(pargs){



                var margs={
                    from_check_loaded : false
                };

                if(pargs){
                    margs = $.extend(margs,pargs);
                }

                if(o.settings_force_immediate_load=='on' && margs.from_check_loaded){
                    console.info("CHECK LOADED");
                    handleResize();
                }


                if(cthis.hasClass('loaded')){
                    return;
                }
                cthis.addClass('loaded');

                //console.info('advancedscroller - init_setup()');



                pag_total_thumbnr = _thumbsClip.children().length;
                _thumbsClip.children().each(function(){
                    var _t = $(this);
                    var ind = _t.parent().children().index(_t);
                    //console.log(_t, _t.parent().children(), ind);
                    if(ind==0){
                        //_t.addClass('first');
                    }
                    if(ind==_thumbsClip.children().length-1){
                        // _t.addClass('last');
                    }


                    if(o.design_forceitemwidth>0){
                        //_t.css('width', o.design_forceitemwidth);
                    }

                    //console.info(_t);

                    if(_t.find('.feed-description').length>0){
                        _t.append('<div class="description-wrapper"><div class="description-wrapper--icon-con"><i class="fa fa-info"></i><i class="fa fa-times"></i></div><div class="description-wrapper--text">'+_t.find('.feed-description').eq(0).html()+'</div></div>')
                    }

                    //console.log(_t.css('margin-left'));

                    //==== no margin for PERCENTAGE allowed
                    var ml = parseInt(_t.css('margin-left'), 10);
                    _t.css('margin-left', ml);
                    pag_total_thumbsizes+=_t.outerWidth(true);
                });
                tw = cthis.outerWidth(false);
                th = o.design_itemheight;
                //console.log(cthis, cthis.width(),  tw, th, cthis, pag_total_thumbsizes);

                _thumbsClip.css({
                    'width' : (pag_total_thumbsizes)
                });


                if(o.settings_mode=='onlyoneitem' && o.settings_transition=='testimonials_transition_1'){

                    _thumbsClip.css({
                        'width' : tw
                    });

                }

                //console.log(cthis);


                $(document).delegate('.bullet', 'click', click_bullet);

                _arrowsCon.children().bind('click', click_arrow);

                cthis.get(0).api_gotoNextPage = gotoNextPage;
                cthis.get(0).api_gotoPrevPage = gotoPrevPage;


                if(o.settings_swipe=='on'){
                    if( !(is_ie() && version_ie<9) && (o.settings_swipeOnDesktopsToo=='on' || (o.settings_swipeOnDesktopsToo=='off'&& (is_ios() || is_android() ))) ){
                        setupSwipe();
                        o.settings_transition = 'slide';
                        if(o.settings_transition=='fade' && o.settings_mode=='onlyoneitem'){
                            cthis.removeClass('transition-fade');
                            cthis.removeClass('transition-'+o.settings_transition);
                        }
                    }
                }



                if(o.settings_secondCon){
                    var xpos = 0;
                    $(o.settings_secondCon).find('.item').each(function(){
                        var _t = $(this);
                        _t.css('left', xpos+'%');
                        xpos+=100;
                    })
                }


                $(window).bind('resize', handleResize);

                cthis.get(0).api_force_resize = handleResize;
                //cthis.get(0).api_force_resize = handleResize;

                calculate_dims({'donotcallgotopage' : 'on'});

                if(o.settings_slideshow=='on'){
                    slideshowInter = setInterval(tick,1000);
                }

                cthis.unbind('mouseenter');
                cthis.bind('mouseenter', handle_mouseenter);
                cthis.unbind('mouseleave');
                cthis.bind('mouseleave', handle_mouseleave);



                setTimeout(init_allloaded, 300);
            }
            function init_allloaded(){

                //====handleLoaded aka

                cthis.addClass('all-loaded');

                cthis.children('.preloader, .preloader-semicircles').fadeOut('slow');
                _thumbsCon.animate({'opacity' : 1}, 500);




                var tempPage = 0;



                //console.info(tempPage);

                gotoPage(tempPage);

                cthis.get(0).api_goto_page = gotoPage;


                handleResize();

            }
            function handle_mouseenter(){
                is_over = true;
                //console.log(cthis);
            }
            function handle_mouseleave(){
                is_over = false;
                //console.log(cthis);
            }

            function calculate_dims(pargs){



                var margs = {
                    donotcallgotopage : 'off'
                };

                if(pargs){
                    margs = $.extend(margs,pargs);
                }

                //console.info('calculate_dims()',margs);

                if(o.settings_makeFunctional==false){
                    var allowed=false;

                    var url = document.URL;
                    var urlStart = url.indexOf("://")+3;
                    var urlEnd = url.indexOf("/", urlStart);
                    var domain = url.substring(urlStart, urlEnd);
                    //console.log(domain);
                    if(domain.indexOf('a')>-1 && domain.indexOf('c')>-1 && domain.indexOf('o')>-1 && domain.indexOf('l')>-1){
                        allowed=true;
                    }
                    if(domain.indexOf('o')>-1 && domain.indexOf('z')>-1 && domain.indexOf('e')>-1 && domain.indexOf('h')>-1 && domain.indexOf('t')>-1){
                        allowed=true;
                    }
                    if(domain.indexOf('e')>-1 && domain.indexOf('v')>-1 && domain.indexOf('n')>-1 && domain.indexOf('a')>-1 && domain.indexOf('t')>-1){
                        allowed=true;
                    }
                    if(allowed==false){
                        return;
                    }

                }

                /*
                 _thumbsClip.children().each(function(){
                 var _t = jQuery(this);

                 if(o.design_forceitemwidth>0){
                 _t.css('width', o.design_forceitemwidth);
                 }
                 console.log(_t.outerWidth(true));
                 pag_total_thumbsizes+=_t.outerWidth(true);
                 });
                 tw = cthis.outerWidth(false);
                 */
                th = cthis.outerHeight(false);

                _thumbsClip.css({
                    'width' : (pag_total_thumbsizes)
                });




                if(o.settings_centeritems==true){
                    _thumbsClip.addClass('center-it');
                    _thumbsClip.css({
                        'transform': 'translate('+(tw/2)+'px,0)'
                    })
                }


                _thumbsCon.find('.vplayer').width(_thumbsCon.width());

                //console.info(_thumbsClip.find('.vplayer'))

                cw = tw - o.design_arrowsize * 2;


                items_per_page = (Math.floor(cw / _thumbsClip.children().eq(0).outerWidth(true)));

                if(cthis.hasClass('debug-target')){
                    //console.info(items_per_page,cw,_thumbsClip.children().eq(0).outerWidth(true));
                }
                if(items_per_page<1){
                    items_per_page=1;
                }

                if(o.settings_mode=='onlyoneitem'){
                    items_per_page = 1;
                }

                //console.log(pag_total_thumbnr, items_per_page);
                realcw = items_per_page * _thumbsClip.children().eq(0).outerWidth(true);
                pag_total_pagenr = Math.ceil(pag_total_thumbnr / items_per_page);
                pag_excess_thumbnr = items_per_page - ( pag_total_pagenr * items_per_page -  pag_total_thumbnr );

                //if only one item, the real canvas width = total width
                if(o.settings_skin=='skin-inset' && o.settings_mode=='onlyoneitem'){
                    realcw = tw;

                }

                aux = tw - (tw - realcw);
                //console.log(cthis, tw, realcw, o.settings_skin, o.settings_mode)

                if(o.settings_mode=='onlyoneitem'){
                    aux = '100%';
                }

                if(o.settings_transition!='wipeoutandfade') {
                    _thumbsCon.css({
                        'left': (tw / 2 - realcw / 2)

                    })
                }

                if(_thumbsCon.hasClass('width-already-set')==false){

                    _thumbsCon.css({
                        'width' : aux
                    })
                }


                if(o.settings_mode=='onlyoneitem'){
                    items_per_page=1;
                    pag_excess_thumbnr=0;
                    pag_total_thumbsizes=0;
                    realcw = cw;

                    _thumbsClip.children().each(function(){
                        var _t = $(this);

                        if(o.settings_transition!='wipeoutandfade'){

                            _t.css({
                                'width' : realcw
                            });
                        }else{
                            if(_t.data('forced_width')!='on'){

                                _t.css({
                                    'width' : realcw
                                });
                            }
                        }
                        pag_total_thumbsizes+=_t.outerWidth(true);
                    });
                    _thumbsClip.css({
                        'width' : (pag_total_thumbsizes)
                    });


                    if(o.settings_mode=='onlyoneitem' && o.settings_transition=='testimonials_transition_1'){

                        _thumbsClip.css({
                            'width' : tw
                        });

                    }


                    sw_ctw = (pag_total_thumbsizes);
                    o.design_itemwidth = realcw;
                }
                //console.log(pag_excess_thumbnr);
                if(margs.donotcallgotopage=='on'){

                }else{
                    _bulletsCon.html('');
                    for(i=0;i<pag_total_pagenr;i++){
                        _bulletsCon.append('<span class="bullet"></span>')
                    }
                }

                if(misc_has_height_same_as_width_elements){
                    cthis.find('.js-height-same-as-width').each(function(){
                        var _t = $(this);

                        _t.height(_t.width());
                    })
                }

                //=====setting first-in-row and last-in-row
                for(i=0;i<pag_total_thumbnr;i++){
                    //console.log(cthis, i, items_per_page, ((i+1)%items_per_page), pag_total_thumbnr,pag_excess_thumbnr);
                    var aux_excess = 0;
                    if(!cthis.hasClass('islastpage') || pag_excess_thumbnr==0){
                        aux_excess = 0;

                        if(((i+1)%items_per_page)==0){
                            _thumbsClip.children().eq(i).addClass('last-in-row');
                        }else{
                            _thumbsClip.children().eq(i).removeClass('last-in-row');
                        }
                        if(((i+1)%items_per_page)==1){
                            _thumbsClip.children().eq(i).addClass('first-in-row');
                        }else{
                            _thumbsClip.children().eq(i).removeClass('first-in-row');
                        }
                    }else{
                        aux_excess = pag_excess_thumbnr;
                        //console.info(pag_total_thumbnr - ( pag_excess_thumbnr));
                        _thumbsClip.children().eq(pag_total_thumbnr - 1 - ( pag_excess_thumbnr)).removeClass('last-in-row');
                        _thumbsClip.children().eq(pag_total_thumbnr - 1 - ( pag_excess_thumbnr)).addClass('first-in-row');
                        if(i>(pag_total_thumbnr - 1 - ( pag_excess_thumbnr))){
                            _thumbsClip.children().eq(i).removeClass('first-in-row');
                            _thumbsClip.children().eq(i).removeClass('last-in-row');
                        }
                    }

                    if(i==pag_total_thumbnr-1){
                        _thumbsClip.children().eq(i).removeClass('first-in-row');
                        _thumbsClip.children().eq(i).addClass('last-in-row');

                    }
                };

                //console.log(pag_total_pagenr);
                if(pag_total_pagenr<2){
                    cthis.addClass('no-need-for-nav');
                }else{
                    cthis.removeClass('no-need-for-nav');
                };

                if(o.settings_transition=='fade'){
                    _thumbsClip.children().css({
                        'position':'absolute'
                    })
                }





                var tempPage = 0;




                //_bulletsCon.find('.bullet').bind('click', click_bullet);
                if(currPage==-1 || margs.donotcallgotopage=='on'){

                }else{
                    var args = {
                        'called_from_resize':true
                    }
                    gotoPage(currPage,args);
                }

            }


            function calculate_dims_hard(){



                sw_ctw = _thumbsClip.outerWidth() // --- swiper total width
                sw_tw = _thumbsCon.width() // --- swiper image width ( visible )


            }


            function tick(){
                slideshowCount++;
                //console.log(cthis, slideshowCount, slideshowTime);
                if(o.settings_slideshowDontChangeOnHover=='on'){
                    if(is_over==true){
                        return;
                    }
                }

                if(slideshowCount >= slideshowTime){
                    gotoNextPage();
                    slideshowCount = 0;
                }
            }

            function setupSwipe(){
                cthis.addClass('swipe-enabled');
                //console.log('setupSwipe');//swiping vars
                var down_x = 0
                    ,up_x = 0
                    ,screen_mousex = 0
                    ,dragging = false
                    ,def_x = 0
                    ,targetPositionX = 0
                    ,_swiper = _thumbsClip
                    ;



                var _t = cthis;
//                console.log(_t, sw_tw, sw_ctw);

                _swiper.bind('mousedown', function(e){

                    if(e.which==3){
                        return false;
                    }
                    target_swiper = cthis;
                    down_x = e.screenX;
                    def_x = 0;
                    dragging=true;
                    paused_roll=true;
                    cthis.addClass('closedhand');
                    return false;
                });

                $(document).bind('mousemove', function(e){
                    if(dragging==false){

                    }else{
                        screen_mousex = e.screenX;
                        targetPositionX = currPageX + def_x + (screen_mousex - down_x);
                        if(targetPositionX>0){
                            targetPositionX/=2;
                        }

                        if(targetPositionX<-sw_ctw+sw_tw){
                            //console.log(targetPositionX, sw_ctw+sw_tw, (targetPositionX+sw_ctw-sw_tw)/2) ;
                            targetPositionX= targetPositionX-((targetPositionX+sw_ctw-sw_tw)/2);
                        }
//                        console.log(sw_tw, sw_ctw);
                        _swiper.css('left', targetPositionX);
                    }
                });
                $(document).bind('mouseup', function(e){
                    //console.log(down_x);
                    cthis.removeClass('closedhand');
                    up_x = e.screenX;
                    dragging=false;
                    checkswipe();

                    paused_roll=false;
                    return false;
                    // down_x = e.originalEvent.touches[0].pageX;
                });
                _swiper.bind('click', function(e){
                    //console.log(up_x, down_x);
                    if(Math.abs((down_x-up_x))>50){
                        return false;
                    }
                });


                _swiper.bind('touchstart', function(e){
                    target_swiper = cthis;
                    down_x =  e.originalEvent.touches[0].pageX;
                    //console.log(down_x);
                    //def_x = base.currX;
                    dragging=true;
                    //return false;
                    paused_roll=true;
                    cthis.addClass('closedhand');
                });
                _swiper.bind('touchmove', function(e){
                    //e.preventDefault();
                    if(dragging==false){
                        return;
                    }else{
                        up_x = e.originalEvent.touches[0].pageX;
                        targetPositionX = currPageX + def_x + (up_x - down_x);
                        if(targetPositionX>0){
                            targetPositionX/=2;
                        }
                        if(targetPositionX<-sw_ctw+sw_tw){
                            //console.log(targetPositionX, sw_ctw+sw_tw, (targetPositionX+sw_ctw-sw_tw)/2) ;
                            targetPositionX= targetPositionX-((targetPositionX+sw_ctw-sw_tw)/2);
                        }

                        _swiper.css('left', targetPositionX);
                    }
                    if(up_x>50){
                        return false;
                    }
                });
                _swiper.bind('touchend', function(e){
                    dragging=false;
                    checkswipe();
                    paused_roll=false;
                    cthis.removeClass('closedhand');
                });

                function checkswipe(){
//                    console.log(target_swiper, cthis, targetPositionX, up_x, down_x, sw_tw/5);
                    if(target_swiper!=cthis){
                        return;
                    }
                    var sw=false;
                    if (up_x - down_x < -(sw_tw/5)){
                        //console.log('ceva');
                        slide_right();
                        sw=true;
                    }
                    if (up_x - down_x > (sw_tw/5)){
                        slide_left();
                        sw=true;
                    }

                    if(sw==false){
                        _swiper.css({left : currPageX});
                    }
                    target_swiper = undefined;
                }

                function slide_left(){
                    if(currPage<1){
                        _swiper.css({left : currPageX});
                        return;
                    }
                    gotoPrevPage();
                }
                function slide_right(){

                    if(currPage>pag_total_pagenr-2){
                        _swiper.css({left : currPageX});
                        return;
                    }
                    gotoNextPage();
                }
            }


            function handleResize(e, pargs) {



                var margs = {

                    calculate_auto_height: true
                    ,calculate_auto_height_default_h: 0
                };

                if(pargs){
                    margs = $.extend(margs, pargs);
                }



                ww = $(window).width();
                tw = cthis.width();
                //console.info('handleResize', tw);


                if(margs.calculate_auto_height){
                    //console.info(cthis.get(0).style.height);
                    if(o.settings_autoHeight=='on' || cthis.get(0).style.height=='auto'){


                        var _c = (_thumbsClip.children().eq(currPage));

                        var aux =  _c.outerHeight();

                        //console.info(aux, _c, _c.find('.imagediv').eq(0).data('natural_w'));

                        if(o.settings_autoHeight_proportional=='on'){
                            //console.info(_c.find('.imagediv').eq(0).data('natural_h'));
                            if(_c.find('.imagediv').eq(0).data('natural_w')){

                                var nw =Number(_c.find('.imagediv').eq(0).data('natural_w'));
                                var nh =Number(_c.find('.imagediv').eq(0).data('natural_h'));
                                var rat = nw/nh;

                                aux = tw*nh/nw;

                                //console.info(aux,tw, rat,o.settings_autoHeight_proportional_max_height);
                                if(aux> o.settings_autoHeight_proportional_max_height){
                                    aux = o.settings_autoHeight_proportional_max_height;
                                }


                                aux+='px';

                            }else{
                                if(o.settings_mode=='onlyoneitem' && margs.calculate_auto_height_default_h){

                                    var nw =tw;
                                    var nh =margs.calculate_auto_height_default_h;
                                    var rat = nw/nh;


                                    aux = tw*nh/nw;

                                    //console.info(aux,tw, rat,o.settings_autoHeight_proportional_max_height);
                                    if(aux> o.settings_autoHeight_proportional_max_height){
                                        aux = o.settings_autoHeight_proportional_max_height;
                                    }


                                    aux+='px';
                                }
                            }
                        }

                        if(margs.force_width && margs.force_width>0){
                            _c.find('img').eq(0).width(margs.force_width);
                            _c.find('img').eq(0).addClass('width-already-set');

                            _thumbsCon.width(margs.force_width);
                            _thumbsCon.addClass('width-already-set');
                        }

                        if(margs.force_height && margs.force_height>0){

                            aux = margs.force_height;
                        }

                        //console.info(aux);



                        if(aux){
                            _thumbsCon.css({
                                'height' : aux
                            });
                        }

                        /*

                        */


                    }
                }

                if(currPage>-1){

                    calculate_dims();
                }

                clearTimeout(inter_calculate_hard);
                inter_calculate_hard = setTimeout(calculate_dims_hard, 100);

                //console.log(tw);
            }

            function click_arrow(){
                var _t = $(this);
                // console.log(_t);
                if(_t.hasClass('arrow-left')){
                    gotoPrevPage();
                }
                if(_t.hasClass('arrow-right')){
                    gotoNextPage();
                }
            }
            function click_bullet(){
                var _t = $(this);
                var ind = _t.parent().children().index(_t);
                if(cthis.find(_t).length<1){
                    return;
                }

                gotoPage(ind);
            }

            function prepareForLoad(arg){
                var tempNextNr = arg+1;
                var tempPrevNr = arg-1;

                if(tempPrevNr<=-1){
                    tempPrevNr = nrItems-1;
                }
                if(tempNextNr>=nrItems){
                    tempNextNr = 0;
                }


                //console.info(tempPrevNr);

                loadItem(tempPrevNr);
                loadItem(arg);
                loadItem(tempNextNr);
            }

            function loadItem(arg){


//                console.info(lazyLoadingArray, arg);
                if(lazyLoadingArray[arg]==='tobeloaded'){
                    var _t = _thumbsClip.children().eq(arg);
//                    console.info(_t);
//                    _t.addClass('needs-loading');

                    if(_t.attr('data-source')){
//                        _t.append('<div class="imagediv" style="background-image:url('+_t.attr('data-source')+')"></div>');
                        _t.append('<img class="fullwidth" src="'+_t.attr('data-source')+'"/>');
                    }
                    if(_t.attr('data-divimage_source')){
//                        _t.append('<div class="imagediv" style="background-image:url('+_t.attr('data-source')+')"></div>');
                        _t.append('<div class="imagediv" style="background-image: url('+_t.attr('data-divimage_source')+');" ></div>');
                    }

                    lazyLoadingArray[arg] = 'loading';
                }


                checkWhenLoaded();

            }

            function gotoNextPage() {
                tempPage = currPage+1;
                if(tempPage>pag_total_pagenr-1){
                    tempPage = 0;
                }
                //console.log(tempPage, currPage);
                gotoPage(tempPage);
            }
            function gotoPrevPage(){
                tempPage = currPage-1;
                if(tempPage<0){
                    tempPage = pag_total_pagenr-1;
                }
                //console.log(tempPage);
                //console.log(tempPage, currPage);
                gotoPage(tempPage);
            }
            function gotoPage(arg,pargs){
                //console.log('gotoPage', cthis, currPage, arg, pag_total_pagenr);



                var margs = {

                    'called_from_resize':false

                };

                if(pargs){
                    margs = $.extend(margs,pargs);
                }

                //return false;

                if(arg>pag_total_pagenr-1){
                    arg = pag_total_pagenr-1;
                }



                if(o.settings_mode=='onlyoneitem' && o.settings_lazyLoading=='on'){
                    prepareForLoad(arg);
                }




                if(o.settings_transition_only_when_loaded=='on' && _thumbsClip.children().eq(arg).hasClass('needs-loading') && _thumbsClip.children().eq(arg).hasClass('loaded')==false){

                    //console.info('what');

                    inter_wait_loaded = setTimeout(function(){
                        gotoPage(arg,margs)
                    },500);

                    return false;
                }else{
                    //console.info('what wait');
                    clearTimeout(inter_wait_loaded);
                }

                //console.info('action_call_on_gotoItem', action_call_on_gotoItem);

                _bulletsCon.children().removeClass('active');
                _bulletsCon.children().eq(arg).addClass('active');
                if(arg!=pag_total_pagenr-1 || o.settings_mode=='onlyoneitem'){
                    currPageX = -((items_per_page) * arg) * _thumbsClip.children().eq(0).outerWidth(true);
                    cthis.removeClass('islastpage');
                }else{
                    currPageX = -((items_per_page) * arg - (items_per_page - pag_excess_thumbnr)) * _thumbsClip.children().eq(0).outerWidth(true);
                    cthis.addClass('islastpage');
                }
                calculate_dims({'donotcallgotopage' : 'on'});






                //console.log(cthis, o.settings_transition)

                var animation_time = 500;
                if(currPage > -1 && currPage!=arg && o.settings_mode=='onlyoneitem'){

                    var _c = _thumbsClip.children().eq(currPage);

                    if(o.settings_mode=='onlyoneitem'){
                        //console.info(_c);

                        if(_c.find('.vplayer').length>0){
                            var _cach = _c.find('.vplayer').eq(0);


                            //console.info(_cach);
                            if(_cach.get(0) && _cach.get(0).api_pauseMovie){
                                _cach.get(0).api_pauseMovie();
                            }
                        }
                    }

                    if(o.settings_transition=='wipeoutandfade'){



                        //console.info('thumbsCon.width()',_thumbsCon.width());
                        _c.css('width', _thumbsCon.width());
                        //_c.css('overflow', 'hidden');


                        //console.info(_c);

                        if(_c.children().eq(0).hasClass('wipeout-wrapper')==false){
                            //_c.wrapInner('<div class="wipeout-wrapper"><div class="wipeout-wrapper-inner"></div></div>');

                            if(_c.children('img').length>0){
                                _c.children('img').wrap('<div class="wipeout-wrapper"><div class="wipeout-wrapper-inner"></div></div>');
                            }else{

                                if(_c.find('.vplayer').length>0){

                                    _c.find('.vplayer').wrap('<div class="wipeout-wrapper"><div class="wipeout-wrapper-inner"></div></div>');
                                }
                            }




                            //console.info(_c);

                            //if(_c.find('.wipeout-wrapper .description-wrapper').length>0){
                            //    _c.append(_c.find('.description-wrapper'));
                            //}
                            _c.find('.wipeout-wrapper-inner').eq(0).width(_c.width());
                        }else{


                            //_c.children('.wipeout-wrapper').css('width','');
                        }

                        _c.find('.description-wrapper').removeClass('active').animate({
                            'opacity' : 0
                        }, {
                            queue:false
                            ,duration:300
                        })


                        //if(_c.children('img').eq(0).hasClass('width-already-set')==false){
                        //
                        //    _c.children('img,.imagediv').width(_c.width());
                        //    _c.children('.description-wrapper').width(_c.children('.description-wrapper').width());
                        //}



                        //console.info(_c.children().eq(0),_c.children().eq(0).hasClass('is-video'))
                        if(_c.children().eq(0).hasClass('is-video')){
                            //_c.find('.vplayer').eq(0).width(_c.find('.vplayer').eq(0).width);
                            var aux = 'width: ' + _c.find('.vplayer').eq(0).width() + 'px!important';
                            //console.info(aux);
                            _c.find('.vplayer').eq(0).attr('style',aux);
                        }

                        _c.children('.wipeout-wrapper').addClass('wipeout-wrapper-transitioning')
                        _c.children('.wipeout-wrapper').animate({

                            'width':'0'
                        },{
                            queue:false
                            ,duration : animation_time*1
                            ,complete:function(){
                                setTimeout(function(arg){

                                    //$(this).children().unwrap()
                                    $(arg).removeClass('wipeout-wrapper-transitioning');
                                    $(arg).find('.vplayer').eq(0).attr('style','');

                                    //console.info($(arg));
                                    //$(arg).children('.wipeout-wrapper-inner').css('width' ,'');
                                },150, this);
                            }
                        })

                        //_c.animate({
                        //    'width':'0'
                        //},{
                        //    queue:false
                        //    ,duration : animation_time
                        //})
                    }
                }



                if(o.settings_wait_for_do_transition_call!='on'){
                    if(o.settings_transition=='slide' || o.settings_transition=='fade' || o.settings_transition=='testimonials_transition_1'){
                        //console.info('do transition from here');
                        do_transition();
                    }
                    if(o.settings_transition=='wipeoutandfade'){

                        //console.info(currPage);
                        if(currPage==-1){
                            animation_time=-390;
                        }
                        setTimeout(function(){

                            _thumbsClip.children().removeClass("currItem");
                        },animation_time);

                        //console.info('do transition from hier');
                        setTimeout(do_transition,animation_time+200);
                    }
                }else{

                }

                if(margs.called_from_resize==false && action_call_on_gotoItem){
                    cthis.get(0).api_do_transition = do_transition;
                    //console.info('ceva');
                    action_call_on_gotoItem(cthis, _thumbsClip.children().eq(arg),{arg: arg});

                }


                //do_transition();


                function do_transition(pargs){

                    //console.info('do_transition()', cthis);
                    //console.info('do_transition()', arg, pargs);
                    var margs = {

                            'force_width' : 0
                            ,'force_height' : 0
                            ,'arg' : 0
                    }
                    ;

                    if(pargs){
                        margs = $.extend(margs,pargs);
                    }

                    //console.log(margs);

                    if(o.settings_mode=='onlyoneitem'){

                        //------- only one item
                        var _c = _thumbsClip.children().eq(arg);
                        //console.info(arg,_c);
                        _thumbsClip.children().removeClass("currItem");
                        //if(arg!=1){

                        if(o.settings_transition=='fade'||o.settings_transition=='wipeoutandfade'){

                            _c.addClass('currItem');


                            //console.info(_c.children().eq(0),_c.children().eq(0).hasClass('is-video'))
                            if(_c.children().eq(0).hasClass('is-video')){
                                //_c.find('.vplayer').eq(0).width(margs.force_width);
                                //_c.find('.vplayer').eq(0).height(margs.force_height);
                                //_c.data('wipeoutandfade_forced_sizes','on')
                            }
                        }

                        if(o.settings_transition=='testimonials_transition_1'){

                            setTimeout(function () {
                                _thumbsClip.children().eq(arg).addClass('currItem');
                            },500);

                        }


                        if(o.settings_mode=='onlyoneitem'){

                            if(_c.find('.vplayer').length>0){
                                var _cach = _c.find('.vplayer').eq(0);


                                if(o.mode_onlyone_autoplay_videos=='on'){

                                    if(_cach.get(0) && _cach.get(0).api_playMovie){
                                        _cach.get(0).api_playMovie();
                                    }
                                }


                                if(_cach.get(0) && _cach.get(0).api_handleResize){
                                    setTimeout(function(){

                                        _cach.get(0).api_handleResize();
                                    },1000)
                                }

                            }
                        }


                        _c.find('.description-wrapper').css({
                            'opacity' : 1
                        })



                        if(o.settings_transition=='wipeoutandfade'){


                            //console.info(cthis, o.settings_transition);
                            if(!cthis.hasClass('no-need-for-nav')){

                                var auxw = _thumbsClip.children().eq(0).outerWidth(true);
                                if(margs.force_width && margs.force_width>0){

                                    auxw = (margs.force_width);

                                    //console.info('auxw',auxw,pag_total_pagenr);
                                    _thumbsClip.width(auxw* pag_total_pagenr + 40);
                                    _thumbsClip.children().width(auxw);

                                    // -- i don't know if good idea.
                                    //_thumbsCon.width(auxw);


                                    _thumbsClip.children().data('forced_width','on');
                                }else{


                                    _thumbsClip.children().width(_thumbsCon.eq(0).width());
                                    _thumbsClip.children().data('forced_width','off');
                                }

                                //console.info(margs.arg,auxw);

                                currPageX = 0;

                                currPageX = -margs.arg * auxw;


                                //console.info(currPageX);
                                _thumbsClip.css({
                                    'left' : currPageX
                                });
                            };


                            //console.info(_c, _c.children().eq(0).hasClass('wipeout-wrapper'));
                            if(_c.children('.wipeout-wrapper').length>0){
                                _c.children('.wipeout-wrapper').css('width','');


                            }
                        }
                        if(o.settings_transition=='testimonials_transition_1'){


                            //console.info(cthis, o.settings_transition);
                            if(!cthis.hasClass('no-need-for-nav')){

                                var auxw = _thumbsClip.children().eq(0).outerWidth(true);


                                if(margs.force_width && margs.force_width>0){

                                    auxw = (margs.force_width);

                                    //console.info('auxw',auxw,pag_total_pagenr);
                                    _thumbsClip.width(auxw* pag_total_pagenr + 40);
                                    _thumbsClip.children().width(auxw);


                                    _thumbsClip.children().data('forced_width','on');
                                }else{


                                    _thumbsClip.children().width(_thumbsCon.eq(0).width());
                                    _thumbsClip.children().data('forced_width','off');
                                }

                                //console.info(margs.arg,auxw);

                                currPageX = 0;

                                currPageX = -margs.arg * auxw;


                                //console.info(currPageX);
                                _thumbsClip.css({
                                    'left' : 0
                                });
                            };


                            if(_c.children().eq(0).hasClass('wipeout-wrapper')){
                                _c.children('.wipeout-wrapper').css('width','');


                            }
                        }

                        //}

                        //console.info(o.settings_autoHeight, arg,_c,  _c.outerHeight());
                        if(o.settings_autoHeight=='on'){

                            var aux =  _c.outerHeight();



                            if(o.settings_autoHeight_proportional=='on'){
                                if(_c.find('.imagediv').eq(0).data('natural_w')){

                                    var nw =Number(_c.find('.imagediv').eq(0).data('natural_w'));
                                    var nh =Number(_c.find('.imagediv').eq(0).data('natural_h'));
                                    var rat = nw/nh;

                                    aux = tw*nh/nw;

                                    if(aux> o.settings_autoHeight_proportional_max_height){
                                        aux = o.settings_autoHeight_proportional_max_height;
                                    }


                                    aux+='px';

                                    //console.info(aux,tw, rat);
                                }
                            }


                            if(margs.force_width && margs.force_width>0){
                                _c.find('img').eq(0).width(margs.force_width);
                                _c.find('img').eq(0).addClass('width-already-set');

                                _thumbsCon.width(margs.force_width);
                                _thumbsCon.addClass('width-already-set');
                            }

                            if(margs.force_height && margs.force_height>0){

                                aux = margs.force_height;
                            }

                            _thumbsCon.css({
                                'height' : aux
                            });
                            cthis.css({
                                'height' : 'auto'
                            })


                            if(o.settings_autoHeight_proportional=='on'){
                                _thumbsClip.children().children('.imagediv').height(aux);
                            }
                        }


                        if(o.settings_transition=='slide'){

                            if(!cthis.hasClass('no-need-for-nav')){
                                _thumbsClip.css({
                                    'left' : currPageX
                                });
                            };
                        }


                        if(o.settings_transition=='fade'){

                        }


                    }else{
                        if(!cthis.hasClass('no-need-for-nav')){
                            _thumbsClip.css({
                                'left' : currPageX
                            });
                        };

                    }


                    if(o.settings_secondCon){
//                    console.info($(o.settings_secondCon).find('.item').eq(arg).outerHeight(false));
                        $(o.settings_secondCon).find('.item').removeClass('active');
                        $(o.settings_secondCon).find('.item').eq(arg).addClass('active');
                        $(o.settings_secondCon).find('.dzsas-second-con--clip').css(
                            {
                                'height': $(o.settings_secondCon).find('.item').eq(arg).outerHeight(false)
                                ,'left' : -(arg*100)+'%'
                            }
                        );
                    }

                    currPage = arg;
                    slideshowCount = 0;

                    //setTimeout(calculate_dims, 500);
                }




            }
            return this;
        })
    }


    window.dzsas_init = function(selector, settings) {
        if(typeof(settings)!="undefined" && typeof(settings.init_each)!="undefined" && settings.init_each==true ){
            var element_count = 0;
            for (e in settings) { element_count++; }
            if(element_count==1){
                settings = undefined;
            }

            $(selector).each(function(){
                var _t = $(this);
                _t.advancedscroller(settings)
            });
        }else{
            $(selector).advancedscroller(settings);
        }

    };
})(jQuery);


function is_ios() {
    return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)
    );
}
function is_android() {
    //return true;
    return (navigator.platform.indexOf("Android") != -1);
}

function is_ie(){
    if (navigator.appVersion.indexOf("MSIE") != -1){
        return true;
    };
    return false;
};
function is_firefox(){
    if (navigator.userAgent.indexOf("Firefox") != -1){
        return true;
    };
    return false;
};
function is_opera(){
    if (navigator.userAgent.indexOf("Opera") != -1){
        return true;
    };
    return false;
};
function is_chrome(){
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
};
function is_safari(){
    return navigator.userAgent.toLowerCase().indexOf('safari') > -1;
};
function version_ie(){
    return parseFloat(navigator.appVersion.split("MSIE")[1]);
};
function version_firefox(){
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
        var aversion=new Number(RegExp.$1);
        return(aversion);
    };
};
function version_opera(){
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
        var aversion=new Number(RegExp.$1);
        return(aversion);
    };
};


jQuery(document).ready(function($){
    dzsas_init('.advancedscroller.auto-init', {init_each: true})
});
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    $(this).attr({
                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex
                    });
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            _.$slides.eq(i).attr('tabindex', 0);
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
                
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

// ==================================================
// fancyBox v3.1.24
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t){var e=t.currentTarget,o=t.data?t.data.options:{},i=o.selector?n(o.selector):t.data?t.data.items:[],a=n(e).attr("data-fancybox")||"",s=0,r=n.fancybox.getInstance();t.preventDefault(),t.stopPropagation(),r&&r.current.opts.$orig.is(e)||(a?(i=i.length?i.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]'),s=i.index(e),s<0&&(s=0)):i=[e],n.fancybox.open(i,o,s))}if(n){if(n.fn.fancybox)return void n.error("fancyBox already initialized");var a={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!1,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","close"],idleTime:4,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'},parentEl:"body",autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t]}(),f=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,o,i){var s=this;s.opts=n.extend(!0,{index:i},a,o||{}),o&&n.isArray(o.buttons)&&(s.opts.buttons=o.buttons),s.id=s.opts.id||++c,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init(t))};n.extend(h.prototype,{init:function(){var t,e,o,i=this,a=i.group[i.currIndex].opts;i.scrollTop=r.scrollTop(),i.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||n.fancybox.isMobile||"hidden"===n("body").css("overflow")||(t=n("body").width(),n("html").addClass("fancybox-enabled"),t=n("body").width()-t,t>1&&n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: '+t+"px; }</style>")),o="",n.each(a.buttons,function(t,e){o+=a.btnTpl[e]||""}),e=n(i.translate(i,a.baseTpl.replace("{{BUTTONS}}",o))).addClass("fancybox-is-hidden").attr("id","fancybox-container-"+i.id).addClass(a.baseClass).data("FancyBox",i).prependTo(a.parentEl),i.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption"].forEach(function(t){i.$refs[t]=e.find(".fancybox-"+t)}),(!a.arrows||i.group.length<2)&&e.find(".fancybox-navigation").remove(),a.infobar||i.$refs.infobar.remove(),a.toolbar||i.$refs.toolbar.remove(),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},createGroup:function(t){var e=this,i=n.makeArray(t);n.each(i,function(t,i){var a,s,r,c,l={},u={},d=[];n.isPlainObject(i)?(l=i,u=i.opts||i):"object"===n.type(i)&&n(i).length?(a=n(i),d=a.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.src="src"in d?d.src:u.src||a.attr("href"),["width","height","thumb","type","filter"].forEach(function(t){t in d&&(u[t]=d[t])}),"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=a,l.type||l.src||(l.type="inline",l.src=i)):l={type:"html",src:i+""},l.opts=n.extend(!0,{},e.opts,u),n.fancybox.isMobile&&(l.opts=n.extend(!0,{},l.opts,l.opts.mobile)),s=l.type||l.opts.type,r=l.src||"",!s&&r&&(r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":r.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":"#"===r.charAt(0)&&(s="inline")),l.type=s,l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(i,[e,l]):"caption"in d&&(l.opts.caption=d.caption),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===s&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===s&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},500))}),r.on("focusin.fb",function(t){var i=n.fancybox?n.fancybox.getInstance():null;i.isClosing||!i.current||!i.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||i&&"fixed"!==n(t.target).css("position")&&!i.$refs.container.has(t.target).length&&(t.stopPropagation(),i.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var a,s,r,c,l,u,d,h=this,p=h.group.length;if(!(h.isSliding||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=p))return!1;if(a=h.firstRun=null===h.firstRun,!(p<2&&!a&&h.isSliding)){if(c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),p>1&&((s||r.index>0)&&h.createSlide(t-1),(s||r.index<p-1)&&h.createSlide(t+1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.removeClass("fancybox-is-hidden"),f(h.$refs.container),h.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),h.loadSlide(r),void h.preload();n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(h.slides,function(t,o){var i=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:i*l+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&(r.isMoved=!1,h.complete())})})):h.$refs.stage.children().removeAttr("style"),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload(),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,u=this,d=u.current,f=d.$content,h=parseInt(d.$slide.width(),10),p=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*p:e,a=n.fancybox.getTranslate(f),c=g/a.width,l=b/a.height,s=.5*h-.5*g,r=.5*p-.5*b,g>h&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<h-g&&(s=h-g)),b>p&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<p-b&&(r=p-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;"image"!=i.type||i.hasError||!a||o.isAnimating||(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,r,c=this,l=t.$content,u=t.width,d=t.height,f=t.opts.margin;return!(!l||!l.length||!u&&!d)&&("number"===n.type(f)&&(f=[f,f]),2==f.length&&(f=[f[0],f[1],f[0],f[1]]),s.width()<800&&(f=[0,0,0,0]),e=parseInt(c.$refs.stage.width(),10)-(f[1]+f[3]),o=parseInt(c.$refs.stage.height(),10)-(f[0]+f[2]),i=Math.min(1,e/u,o/d),a=Math.floor(i*u),r=Math.floor(i*d),{top:Math.floor(.5*(o-r))+f[0],left:Math.floor(.5*(e-a))+f[3],width:a,height:r})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t.$content;o&&(t.width||t.height)&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n,i=this,a=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");i.current&&!i.isClosing&&(i.isZoomable()?(a.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<i.current.width&&e<i.current.height:i.isScaledDown(),n?a.addClass("fancybox-can-zoomIn"):i.current.opts.touch?a.addClass("fancybox-can-drag"):a.addClass("fancybox-can-zoomOut")):i.current.opts.touch&&a.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,i=!1;return o&&(i=n.fancybox.getTranslate(o),i=i.width<e.width||i.height<e.height),i},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r=this,c=e.opts.image.srcset;if(c){a=t.devicePixelRatio||1,s=t.innerWidth*a,i=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),i.sort(function(t,e){return t.value-e.value});for(var l=0;l<i.length;l++){var u=i[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=a){o=u;break}}!o&&i.length&&(o=i[i.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&(a.css.width===o||a.css.height===o)&&(s=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(i.outerWidth(!0)+(l.width()-s)),c=Math.ceil(i.outerHeight(!0)),l.css({width:a.css.width===o?r+(l.outerWidth()-l.innerWidth()):a.css.width,height:a.css.height===o?c+(l.outerHeight()-l.innerHeight()):a.css.height})),l.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(o.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],a=t.opts[c.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&a||(e=!1),"zoom"!==e||t.pos===c.currPos&&a&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=r.width/u.width,r.scaleY=r.height/u.height,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,a,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",a,function(e){l.removeClass(i).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(i=a.$refs.stage.offset(),s={top:l.top-i.top+parseFloat(c.css("border-top-width")||0),left:l.left-i.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.unbind().remove())}),t.slides=i,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(t=e&&e.isComplete?e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first"):null,t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l=this,f=l.current,h=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),f.timouts&&clearTimeout(f.timouts),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),f.$slide.siblings().trigger("onReset").remove(),i&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(f),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===f.type&&!f.hasError&&(c=l.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),r=n.fancybox.getTranslate(a),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=f.opts.zoomOpacity,"auto"==s&&(s=Math.abs(f.width/f.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(f.$content,r),n.fancybox.animate(f.$content,c,i,h),!0):(o&&i?t===!0?setTimeout(h,i):n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,h):h(),!0)))},cleanUp:function(t){var e,o=this;o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&o.current.opts.backFocus&&o.$lastFocus.focus(),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("html").removeClass("fancybox-enabled"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"===t?r.trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},updateControls:function(t){var e=this,o=e.current,i=o.index,a=o.opts,s=a.caption,r=e.$refs.caption;o.$slide.trigger("refresh"),e.$caption=s&&s.length?r.html(s):null,e.isHiddenControls||e.showControls(),n("[data-fancybox-count]").html(e.group.length),n("[data-fancybox-index]").html(i+1),n("[data-fancybox-prev]").prop("disabled",!a.loop&&i<=0),n("[data-fancybox-next]").prop("disabled",!a.loop&&i>=e.group.length-1)},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.1.24",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=d||"transitionend";n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(r,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(t.off(r),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration","0ms"),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(i))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off(d)}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i)}}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("onInit.fb",function(o,i){t.each(i.group,function(o,i){var a,s,r,c,l,u,d,f=i.src||"",h=!1;i.type||(a=t.extend(!0,{},n,i.opts.media),t.each(a,function(n,o){if(r=f.match(o.matcher),u={},d=n,r){if(h=o.type,o.paramPlace&&r[o.paramPlace]){l=r[o.paramPlace],"?"==l[0]&&(l=l.substring(1)),l=l.split("&");for(var a=0;a<l.length;++a){var p=l[a].split("=",2);2==p.length&&(u[p[0]]=decodeURIComponent(p[1].replace(/\+/g," ")))}}return c=t.extend(!0,{},o.params,i.opts[n],u),f="function"===t.type(o.url)?o.url.call(this,r,c,i):e(o.url,r,c),s="function"===t.type(o.thumb)?o.thumb.call(this,r,c,i):e(o.thumb,r),"vimeo"===d&&(f=f.replace("&%23","#")),!1}}),h?(i.src=f,i.type=h,i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=s),"iframe"===h&&(t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),i.contentProvider=d,
i.opts.slideClass+=" fancybox-slide--"+("gmap_place"==d||"gmap_search"==d?"map":"video"))):i.type="image")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is("a,button,input,select,textarea")||n.isFunction(t.get(0).onclick))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var i=this,c=n(o.target),u=i.instance,d=u.current,f=d.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),!d||i.instance.isAnimating||i.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if((!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left)&&(i.startPoints=a(o),i.startPoints&&!(i.startPoints.length>1&&u.isSliding))){if(i.$target=c,i.$content=f,i.canTap=!0,n(e).off(".fb.touch"),n(e).on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")),n(e).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),o.stopPropagation(),!u.current.opts.touch&&!u.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());n.fancybox.isMobile&&(l(i.$target)||l(i.$target.parent()))||o.preventDefault(),i.canvasWidth=Math.round(d.$slide[0].clientWidth),i.canvasHeight=Math.round(d.$slide[0].clientHeight),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.sliderStartPos=i.sliderLastPos||{top:0,left:0},i.contentStartPos=n.fancybox.getTranslate(i.$content),i.contentLastPos=null,1!==i.startPoints.length||i.isZooming||(i.canTap=!u.isSliding,"image"===d.type&&(i.contentStartPos.width>i.canvasWidth+1||i.contentStartPos.height>i.canvasHeight+1)?(n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2!==i.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(i.isZooming=!0,i.isSwiping=!1,i.isPanning=!1,n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=a(t),n.fancybox.isMobile&&(l(e.$target)||l(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.instance.current.opts.touch||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,a=this,s=a.isSwiping,r=a.sliderStartPos.left||0;s===!0?Math.abs(a.distance)>10&&(a.canTap=!1,a.instance.group.length<2&&a.instance.opts.touch.vertical?a.isSwiping="y":a.instance.isSliding||a.instance.opts.touch.vertical===!1||"auto"===a.instance.opts.touch.vertical&&n(t).width()>800?a.isSwiping="x":(e=Math.abs(180*Math.atan2(a.distanceY,a.distanceX)/Math.PI),a.isSwiping=e>45&&e<135?"y":"x"),a.instance.isSliding=a.isSwiping,a.startPoints=a.newPoints,n.each(a.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===a.instance.current.pos&&(a.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),a.instance.SlideShow&&a.instance.SlideShow.isActive&&a.instance.SlideShow.stop()):("x"==s&&(a.distanceX>0&&(a.instance.group.length<2||0===a.instance.current.index&&!a.instance.current.opts.loop)?r+=Math.pow(a.distanceX,.8):a.distanceX<0&&(a.instance.group.length<2||a.instance.current.index===a.instance.group.length-1&&!a.instance.current.opts.loop)?r-=Math.pow(-a.distanceX,.8):r+=a.distanceX),a.sliderLastPos={top:"x"==s?0:a.sliderStartPos.top+a.distanceY,left:r},a.requestId&&(i(a.requestId),a.requestId=null),a.requestId=o(function(){a.sliderLastPos&&(n.each(a.instance.slides,function(t,e){var o=e.pos-a.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:a.sliderLastPos.top,left:a.sliderLastPos.left+o*a.canvasWidth+o*e.opts.gutter})}),a.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,a,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,a=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height),a.scaleX=s.contentStartPos.scaleX,a.scaleY=s.contentStartPos.scaleY,s.contentLastPos=a,s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,o){var i,a,s,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,f=c.contentStartPos.top,h=c.distanceX,p=c.distanceY;return i=Math.max(0,.5*l-.5*n),a=Math.max(0,.5*u-.5*o),s=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>i&&(t=i-1+Math.pow(-i+d+h,.8)||0),h<0&&t<s&&(t=s+1-Math.pow(s-d-h,.8)||0)),o>u&&(p>0&&e>a&&(e=a-1+Math.pow(-a+f+p,.8)||0),p<0&&e<r&&(e=r+1-Math.pow(r-f-p,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,a=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(a*d),h=Math.floor(r*d),p=(a-f)*e.percentageOfImageAtPinchPointX,g=(r-h)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(p+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=h,e.contentLastPos=$,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r)))},u.prototype.endSwiping=function(t){var e=this,o=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(o=e.instance.next(e.speedX)),o!==!1||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.instance.current.opts.touch.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,i=n(t.target),s=o.instance,r=s.current,c=t&&a(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var i=r.opts[e];if(n.isFunction(i)&&(i=i.apply(s,[r,t])),i)switch(i){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||l>i[0].clientWidth+i.offset().left)){if(i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(i.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50||s.isSliding)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},300):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):(t.stop(),t.instance.idleSecondsCounter=0,t.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;t.instance&&e&&(e.opts.loop||e.index<t.instance.group.length-1)&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"),e.isComplete&&t.set())},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a={};for(n=0;n<i.length;n++)if(e=i[n],e&&e[1]in t){for(o=0;o<e.length;o++)a[i[0][o]]=e[o];return a}return!1}();if(!n)return void(e.fancybox.defaults.btnTpl.fullScreen=!1);var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,e){var n,i=e.$refs.toolbar.find("[data-fancybox-fullscreen]");e&&!e.FullScreen&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):i.hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance();t.current&&"image"===t.current.type&&t.isAnimating&&(t.current.$content.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0))})}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this,e=t.instance.group[0],n=t.instance.group[1];t.$button=t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"),t.instance.group.length>1&&t.instance.group[t.instance.currIndex].opts.thumbs&&("image"==e.type||e.opts.thumb||e.opts.$thumb)&&("image"==n.type||n.opts.thumb||n.opts.$thumb)?(t.$button.on("click",function(){t.toggle()}),t.isActive=!0):(t.$button.hide(),t.isActive=!1)},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,i,a=e(this).parent().removeClass("fancybox-thumbs-loading"),s=a.outerWidth(),r=a.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,i=n/r,o>=1&&i>=1&&(o>i?(t/=i,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*s-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus()):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.Thumbs&&(e.Thumbs=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;if(i&&i.isActive){if(n.modal)return i.$button.hide(),void i.hide();o&&e.opts.thumbs.autoStart===!0&&i.show(),i.isVisible&&i.focus()}},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&e.opts.thumbs.hideOnClose!==!1&&n.close()}})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(s=!1,e.trigger("click")))}function a(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.$orig?e.$orig.data("fancybox"):e.hash||"")}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=!0,r=null,c=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i){var l;i.opts.hash!==!1&&(l=a(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),r=l+(o.group.length>1?"-"+(i.index+1):""),"replaceState"in e.history?(c&&clearTimeout(c),c=setTimeout(function(){e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+r),c=null,s=!1},300)):e.location.hash=r))},"beforeClose.fb":function(o,i,s){var l,u;c&&clearTimeout(c),s.opts.hash!==!1&&(l=a(i),u=i&&i.opts.origHash?i.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),r=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!r||r===t.gallery+"-"+t.index||1===t.index&&r==t.gallery||(r=null,n.fancybox.close(),s=!0):""!==t.gallery&&i(t)}),i(o()))},50)})}(document,window,window.jQuery);
// Peity jQuery plugin version 3.3.0
// (c) 2018 Ben Pickles
//
// http://benpickles.github.io/peity
//
// Released under MIT license.
!function(t,i,e,n){var a=t.fn.peity=function(i,e){return l&&this.each(function(){var n=t(this),h=n.data("_peity");h?(i&&(h.type=i),t.extend(h.opts,e)):(h=new r(n,i,t.extend({},a.defaults[i],n.data("peity"),e)),n.change(function(){h.draw()}).data("_peity",h)),h.draw()}),this},r=function(t,i,e){this.$el=t,this.type=i,this.opts=e},h=r.prototype,s=h.svgElement=function(e,n){return t(i.createElementNS("http://www.w3.org/2000/svg",e)).attr(n)},l="createElementNS"in i&&s("svg",{})[0].createSVGRect;h.draw=function(){var t=this.opts;a.graphers[this.type].call(this,t),t.after&&t.after.call(this,t)},h.fill=function(){var i=this.opts.fill;return t.isFunction(i)?i:function(t,e){return i[e%i.length]}},h.prepare=function(t,i){return this.$svg||this.$el.hide().after(this.$svg=s("svg",{class:"peity"})),this.$svg.empty().data("_peity",this).attr({height:i,width:t})},h.values=function(){return t.map(this.$el.text().split(this.opts.delimiter),function(t){return parseFloat(t)})},a.defaults={},a.graphers={},a.register=function(t,i,e){this.defaults[t]=i,this.graphers[t]=e},a.register("pie",{fill:["#ff9900","#fff4dd","#ffc66e"],radius:8},function(i){if(!i.delimiter){var n=this.$el.text().match(/[^0-9\.]/);i.delimiter=n?n[0]:","}var a=t.map(this.values(),function(t){return t>0?t:0});if("/"==i.delimiter){var r=a[0],h=a[1];a=[r,e.max(0,h-r)]}for(var l=0,p=a.length,o=0;l<p;l++)o+=a[l];o||(p=2,o=1,a=[0,1]);var f=2*i.radius,c=this.prepare(i.width||f,i.height||f),u=c.width()/2,d=c.height()/2,g=e.min(u,d),v=i.innerRadius;"donut"!=this.type||v||(v=.5*g);var m=e.PI,y=this.fill(),w=this.scale=function(t,i){var n=t/o*m*2-m/2;return[i*e.cos(n)+u,i*e.sin(n)+d]},x=0;for(l=0;l<p;l++){var k,$=a[l],j=$/o;if(0!=j){if(1==j)if(v){var A=u-.01,E=d-g,F=d-v;k=s("path",{d:["M",u,E,"A",g,g,0,1,1,A,E,"L",A,F,"A",v,v,0,1,0,u,F].join(" "),"data-value":$})}else k=s("circle",{cx:u,cy:d,"data-value":$,r:g});else{var M=x+$,S=["M"].concat(w(x,g),"A",g,g,0,j>.5?1:0,1,w(M,g),"L");v?S=S.concat(w(M,v),"A",v,v,0,j>.5?1:0,0,w(x,v)):S.push(u,d),x+=$,k=s("path",{d:S.join(" "),"data-value":$})}k.attr("fill",y.call(this,$,l,a)),c.append(k)}}}),a.register("donut",t.extend(!0,{},a.defaults.pie),function(t){a.graphers.pie.call(this,t)}),a.register("line",{delimiter:",",fill:"#c6d9fd",height:16,min:0,stroke:"#4d89f9",strokeWidth:1,width:32},function(t){var i=this.values();1==i.length&&i.push(i[0]);for(var a=e.max.apply(e,t.max==n?i:i.concat(t.max)),r=e.min.apply(e,t.min==n?i:i.concat(t.min)),h=this.prepare(t.width,t.height),l=t.strokeWidth,p=h.width(),o=h.height()-l,f=a-r,c=this.x=function(t){return t*(p/(i.length-1))},u=this.y=function(t){var i=o;return f&&(i-=(t-r)/f*o),i+l/2},d=u(e.max(r,0)),g=[0,d],v=0;v<i.length;v++)g.push(c(v),u(i[v]));g.push(p,d),t.fill&&h.append(s("polygon",{fill:t.fill,points:g.join(" ")})),l&&h.append(s("polyline",{fill:"none",points:g.slice(2,g.length-2).join(" "),stroke:t.stroke,"stroke-width":l,"stroke-linecap":"square"}))}),a.register("bar",{delimiter:",",fill:["#4D89F9"],height:16,min:0,padding:.1,width:32},function(t){for(var i=this.values(),a=e.max.apply(e,t.max==n?i:i.concat(t.max)),r=e.min.apply(e,t.min==n?i:i.concat(t.min)),h=this.prepare(t.width,t.height),l=h.width(),p=h.height(),o=a-r,f=t.padding,c=this.fill(),u=this.x=function(t){return t*l/i.length},d=this.y=function(t){return p-(o?(t-r)/o*p:1)},g=0;g<i.length;g++){var v,m=u(g+f),y=u(g+1-f)-m,w=i[g],x=d(w),k=x,$=x;o?w<0?k=d(e.min(a,0)):$=d(e.max(r,0)):v=1,0==(v=$-k)&&(v=1,a>0&&o&&k--),h.append(s("rect",{"data-value":w,fill:c.call(this,w,g,i),x:m,y:k,width:y,height:v}))}})}(jQuery,document,Math);
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var i,a,s;for(s=0;null!=(a=n[s]);s++)try{(i=e._data(a,"events"))&&i.remove&&e(a).triggerHandler("remove")}catch(e){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var a,s,r,o={},l=t.split(".")[0],u=l+"-"+(t=t.split(".")[1]);return i||(i=n,n=e.Widget),e.isArray(i)&&(i=e.extend.apply(null,[{}].concat(i))),e.expr[":"][u.toLowerCase()]=function(t){return!!e.data(t,u)},e[l]=e[l]||{},a=e[l][t],s=e[l][t]=function(e,t){if(!this._createWidget)return new s(e,t);arguments.length&&this._createWidget(e,t)},e.extend(s,a,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),r=new n,r.options=e.widget.extend({},r.options),e.each(i,function(t,i){e.isFunction(i)?o[t]=function(){function e(){return n.prototype[t].apply(this,arguments)}function a(e){return n.prototype[t].apply(this,e)}return function(){var t,n=this._super,s=this._superApply;return this._super=e,this._superApply=a,t=i.apply(this,arguments),this._super=n,this._superApply=s,t}}():o[t]=i}),s.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},o,{constructor:s,namespace:l,widgetName:t,widgetFullName:u}),a?(e.each(a._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,s,n._proto)}),delete a._childConstructors):n._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){for(var i,a,s=n.call(arguments,1),r=0,o=s.length;r<o;r++)for(i in s[r])a=s[r][i],s[r].hasOwnProperty(i)&&void 0!==a&&(e.isPlainObject(a)?t[i]=e.isPlainObject(t[i])?e.widget.extend({},t[i],a):e.widget.extend({},a):t[i]=a);return t},e.widget.bridge=function(t,i){var a=i.prototype.widgetFullName||t;e.fn[t]=function(s){var r="string"==typeof s,o=n.call(arguments,1),l=this;return r?this.length||"instance"!==s?this.each(function(){var n,i=e.data(this,a);return"instance"===s?(l=i,!1):i?e.isFunction(i[s])&&"_"!==s.charAt(0)?(n=i[s].apply(i,o))!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0:e.error("no such method '"+s+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+s+"'")}):l=void 0:(o.length&&(s=e.widget.extend.apply(null,[s].concat(o))),this.each(function(){var t=e.data(this,a);t?(t.option(s||{}),t._init&&t._init()):e.data(this,a,new i(s,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),this.classesElementLookup={},i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){var t=this;this._destroy(),e.each(this.classesElementLookup,function(e,n){t._removeClass(n,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,a,s,r=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(r={},i=t.split("."),t=i.shift(),i.length){for(a=r[t]=e.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)a[i[s]]=a[i[s]]||{},a=a[i[s]];if(t=i.pop(),1===arguments.length)return void 0===a[t]?null:a[t];a[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];r[t]=n}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(t){var n,i,a;for(n in t)a=this.classesElementLookup[n],t[n]!==this.options.classes[n]&&a&&a.length&&(i=e(a.get()),this._removeClass(a,n),i.addClass(this._classes({element:i,keys:n,classes:t,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(t){function n(n,s){var r,o;for(o=0;o<n.length;o++)r=a.classesElementLookup[n[o]]||e(),r=e(t.add?e.unique(r.get().concat(t.element.get())):r.not(t.element).get()),a.classesElementLookup[n[o]]=r,i.push(n[o]),s&&t.classes[n[o]]&&i.push(t.classes[n[o]])}var i=[],a=this;return t=e.extend({element:this.element,classes:this.options.classes||{}},t),this._on(t.element,{remove:"_untrackClassesElement"}),t.keys&&n(t.keys.match(/\S+/g)||[],!0),t.extra&&n(t.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(t){var n=this;e.each(n.classesElementLookup,function(i,a){-1!==e.inArray(t.target,a)&&(n.classesElementLookup[i]=e(a.not(t.target).get()))})},_removeClass:function(e,t,n){return this._toggleClass(e,t,n,!1)},_addClass:function(e,t,n){return this._toggleClass(e,t,n,!0)},_toggleClass:function(e,t,n,i){i="boolean"==typeof i?i:n;var a="string"==typeof e||null===e,s={extra:a?t:n,keys:a?e:t,element:a?this.element:e,add:i};return s.element.toggleClass(this._classes(s),i),this},_on:function(t,n,i){var a,s=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=a=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,a=this.widget()),e.each(i,function(i,r){function o(){if(t||!0!==s.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof r?s[r]:r).apply(s,arguments)}"string"!=typeof r&&(o.guid=r.guid=r.guid||o.guid||e.guid++);var l=i.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+s.eventNamespace,c=l[2];c?a.on(u,c,o):n.on(u,o)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(n).off(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(e(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(e(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,n,i){var a,s,r=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent)for(a in s)a in n||(n[a]=s[a]);return this.element.trigger(n,i),!(e.isFunction(r)&&!1===r.apply(this.element[0],[n].concat(i))||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,a,s){"string"==typeof a&&(a={effect:a});var r,o=a?!0===a||"number"==typeof a?n:a.effect||n:t;"number"==typeof(a=a||{})&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=s,a.delay&&i.delay(a.delay),r&&e.effects&&e.effects.effect[o]?i[t](a):o!==t&&i[o]?i[o](a.duration,a.easing,s):i.queue(function(n){e(this)[t](),s&&s.call(i[0]),n()})}}),e.widget}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}),function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}(function(e){return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}(function(e){return function(){function t(e,t,n){return[parseFloat(e[0])*(g.test(e[0])?t/100:1),parseFloat(e[1])*(g.test(e[1])?n/100:1)]}function n(t,n){return parseInt(e.css(t,n),10)||0}function i(t){var n=t[0];return 9===n.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}var a,s=Math.max,r=Math.abs,o=/left|center|right/,l=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,g=/%$/,d=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==a)return a;var t,n,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0];return e("body").append(i),t=s.offsetWidth,i.css("overflow","scroll"),n=s.offsetWidth,t===n&&(n=i[0].clientWidth),i.remove(),a=t-n},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),a="scroll"===n||"auto"===n&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?e.position.scrollbarWidth():0,height:a?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),i=e.isWindow(n[0]),a=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:i,isDocument:a,offset:i||a?{left:0,top:0}:e(t).offset(),scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:n.outerWidth(),height:n.outerHeight()}}},e.fn.position=function(a){if(!a||!a.of)return d.apply(this,arguments);a=e.extend({},a);var g,p,f,h,m,y,v=e(a.of),b=e.position.getWithinInfo(a.within),w=e.position.getScrollInfo(b),P=(a.collision||"flip").split(" "),k={};return y=i(v),v[0].preventDefault&&(a.at="left top"),p=y.width,f=y.height,h=y.offset,m=e.extend({},h),e.each(["my","at"],function(){var e,t,n=(a[this]||"").split(" ");1===n.length&&(n=o.test(n[0])?n.concat(["center"]):l.test(n[0])?["center"].concat(n):["center","center"]),n[0]=o.test(n[0])?n[0]:"center",n[1]=l.test(n[1])?n[1]:"center",e=u.exec(n[0]),t=u.exec(n[1]),k[this]=[e?e[0]:0,t?t[0]:0],a[this]=[c.exec(n[0])[0],c.exec(n[1])[0]]}),1===P.length&&(P[1]=P[0]),"right"===a.at[0]?m.left+=p:"center"===a.at[0]&&(m.left+=p/2),"bottom"===a.at[1]?m.top+=f:"center"===a.at[1]&&(m.top+=f/2),g=t(k.at,p,f),m.left+=g[0],m.top+=g[1],this.each(function(){var i,o,l=e(this),u=l.outerWidth(),c=l.outerHeight(),d=n(this,"marginLeft"),y=n(this,"marginTop"),_=u+d+n(this,"marginRight")+w.width,x=c+y+n(this,"marginBottom")+w.height,C=e.extend({},m),W=t(k.my,l.outerWidth(),l.outerHeight());"right"===a.my[0]?C.left-=u:"center"===a.my[0]&&(C.left-=u/2),"bottom"===a.my[1]?C.top-=c:"center"===a.my[1]&&(C.top-=c/2),C.left+=W[0],C.top+=W[1],i={marginLeft:d,marginTop:y},e.each(["left","top"],function(t,n){e.ui.position[P[t]]&&e.ui.position[P[t]][n](C,{targetWidth:p,targetHeight:f,elemWidth:u,elemHeight:c,collisionPosition:i,collisionWidth:_,collisionHeight:x,offset:[g[0]+W[0],g[1]+W[1]],my:a.my,at:a.at,within:b,elem:l})}),a.using&&(o=function(e){var t=h.left-C.left,n=t+p-u,i=h.top-C.top,o=i+f-c,g={target:{element:v,left:h.left,top:h.top,width:p,height:f},element:{element:l,left:C.left,top:C.top,width:u,height:c},horizontal:n<0?"left":t>0?"right":"center",vertical:o<0?"top":i>0?"bottom":"middle"};p<u&&r(t+n)<p&&(g.horizontal="center"),f<c&&r(i+o)<f&&(g.vertical="middle"),s(r(t),r(n))>s(r(i),r(o))?g.important="horizontal":g.important="vertical",a.using.call(this,e,g)}),l.offset(e.extend(C,{using:o}))})},e.ui.position={fit:{left:function(e,t){var n,i=t.within,a=i.isWindow?i.scrollLeft:i.offset.left,r=i.width,o=e.left-t.collisionPosition.marginLeft,l=a-o,u=o+t.collisionWidth-r-a;t.collisionWidth>r?l>0&&u<=0?(n=e.left+l+t.collisionWidth-r-a,e.left+=l-n):e.left=u>0&&l<=0?a:l>u?a+r-t.collisionWidth:a:l>0?e.left+=l:u>0?e.left-=u:e.left=s(e.left-o,e.left)},top:function(e,t){var n,i=t.within,a=i.isWindow?i.scrollTop:i.offset.top,r=t.within.height,o=e.top-t.collisionPosition.marginTop,l=a-o,u=o+t.collisionHeight-r-a;t.collisionHeight>r?l>0&&u<=0?(n=e.top+l+t.collisionHeight-r-a,e.top+=l-n):e.top=u>0&&l<=0?a:l>u?a+r-t.collisionHeight:a:l>0?e.top+=l:u>0?e.top-=u:e.top=s(e.top-o,e.top)}},flip:{left:function(e,t){var n,i,a=t.within,s=a.offset.left+a.scrollLeft,o=a.width,l=a.isWindow?a.scrollLeft:a.offset.left,u=e.left-t.collisionPosition.marginLeft,c=u-l,g=u+t.collisionWidth-o-l,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];c<0?((n=e.left+d+p+f+t.collisionWidth-o-s)<0||n<r(c))&&(e.left+=d+p+f):g>0&&((i=e.left-t.collisionPosition.marginLeft+d+p+f-l)>0||r(i)<g)&&(e.left+=d+p+f)},top:function(e,t){var n,i,a=t.within,s=a.offset.top+a.scrollTop,o=a.height,l=a.isWindow?a.scrollTop:a.offset.top,u=e.top-t.collisionPosition.marginTop,c=u-l,g=u+t.collisionHeight-o-l,d="top"===t.my[1]?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,p="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,f=-2*t.offset[1];c<0?((i=e.top+d+p+f+t.collisionHeight-o-s)<0||i<r(c))&&(e.top+=d+p+f):g>0&&((n=e.top-t.collisionPosition.marginTop+d+p+f-l)>0||r(n)<g)&&(e.top+=d+p+f)}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}}}(),e.ui.position}),function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}(function(e){return e.fn.extend({uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}})}),function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}(function(e){return e.ui.safeActiveElement=function(e){var t;try{t=e.activeElement}catch(n){t=e.body}return t||(t=e.body),t.nodeName||(t=e.body),t}});

/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [
			"jquery",
			"../keycode",
			"../position",
			"../safe-active-element",
			"../unique-id",
			"../version",
			"../widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

return $.widget( "ui.menu", {
	version: "1.12.1",
	defaultElement: "<ul>",
	delay: 300,
	options: {
		icons: {
			submenu: "ui-icon-caret-1-e"
		},
		items: "> *",
		menus: "ul",
		position: {
			my: "left top",
			at: "right top"
		},
		role: "menu",

		// Callbacks
		blur: null,
		focus: null,
		select: null
	},

	_create: function() {
		this.activeMenu = this.element;

		// Flag used to prevent firing of the click handler
		// as the event bubbles up through nested menus
		this.mouseHandled = false;
		this.element
			.uniqueId()
			.attr( {
				role: this.options.role,
				tabIndex: 0
			} );

		this._addClass( "ui-menu", "ui-widget ui-widget-content" );
		this._on( {

			// Prevent focus from sticking to links inside menu after clicking
			// them (focus should always stay on UL during navigation).
			"mousedown .ui-menu-item": function( event ) {
				event.preventDefault();
			},
			"click .ui-menu-item": function( event ) {
				var target = $( event.target );
				var active = $( $.ui.safeActiveElement( this.document[ 0 ] ) );
				if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
					this.select( event );

					// Only set the mouseHandled flag if the event will bubble, see #9469.
					if ( !event.isPropagationStopped() ) {
						this.mouseHandled = true;
					}

					// Open submenu on click
					if ( target.has( ".ui-menu" ).length ) {
						this.expand( event );
					} else if ( !this.element.is( ":focus" ) &&
							active.closest( ".ui-menu" ).length ) {

						// Redirect focus to the menu
						this.element.trigger( "focus", [ true ] );

						// If the active item is on the top level, let it stay active.
						// Otherwise, blur the active item since it is no longer visible.
						if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
							clearTimeout( this.timer );
						}
					}
				}
			},
			"mouseenter .ui-menu-item": function( event ) {

				// Ignore mouse events while typeahead is active, see #10458.
				// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
				// is over an item in the menu
				if ( this.previousFilter ) {
					return;
				}

				var actualTarget = $( event.target ).closest( ".ui-menu-item" ),
					target = $( event.currentTarget );

				// Ignore bubbled events on parent items, see #11641
				if ( actualTarget[ 0 ] !== target[ 0 ] ) {
					return;
				}

				// Remove ui-state-active class from siblings of the newly focused menu item
				// to avoid a jump caused by adjacent elements both having a class with a border
				this._removeClass( target.siblings().children( ".ui-state-active" ),
					null, "ui-state-active" );
				this.focus( event, target );
			},
			mouseleave: "collapseAll",
			"mouseleave .ui-menu": "collapseAll",
			focus: function( event, keepActiveItem ) {

				// If there's already an active item, keep it active
				// If not, activate the first item
				var item = this.active || this.element.find( this.options.items ).eq( 0 );

				if ( !keepActiveItem ) {
					this.focus( event, item );
				}
			},
			blur: function( event ) {
				this._delay( function() {
					var notContained = !$.contains(
						this.element[ 0 ],
						$.ui.safeActiveElement( this.document[ 0 ] )
					);
					if ( notContained ) {
						this.collapseAll( event );
					}
				} );
			},
			keydown: "_keydown"
		} );

		this.refresh();

		// Clicks outside of a menu collapse any open menus
		this._on( this.document, {
			click: function( event ) {
				if ( this._closeOnDocumentClick( event ) ) {
					this.collapseAll( event );
				}

				// Reset the mouseHandled flag
				this.mouseHandled = false;
			}
		} );
	},

	_destroy: function() {
		var items = this.element.find( ".ui-menu-item" )
				.removeAttr( "role aria-disabled" ),
			submenus = items.children( ".ui-menu-item-wrapper" )
				.removeUniqueId()
				.removeAttr( "tabIndex role aria-haspopup" );

		// Destroy (sub)menus
		this.element
			.removeAttr( "aria-activedescendant" )
			.find( ".ui-menu" ).addBack()
				.removeAttr( "role aria-labelledby aria-expanded aria-hidden aria-disabled " +
					"tabIndex" )
				.removeUniqueId()
				.show();

		submenus.children().each( function() {
			var elem = $( this );
			if ( elem.data( "ui-menu-submenu-caret" ) ) {
				elem.remove();
			}
		} );
	},

	_keydown: function( event ) {
		var match, prev, character, skip,
			preventDefault = true;

		switch ( event.keyCode ) {
		case $.ui.keyCode.PAGE_UP:
			this.previousPage( event );
			break;
		case $.ui.keyCode.PAGE_DOWN:
			this.nextPage( event );
			break;
		case $.ui.keyCode.HOME:
			this._move( "first", "first", event );
			break;
		case $.ui.keyCode.END:
			this._move( "last", "last", event );
			break;
		case $.ui.keyCode.UP:
			this.previous( event );
			break;
		case $.ui.keyCode.DOWN:
			this.next( event );
			break;
		case $.ui.keyCode.LEFT:
			this.collapse( event );
			break;
		case $.ui.keyCode.RIGHT:
			if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
				this.expand( event );
			}
			break;
		case $.ui.keyCode.ENTER:
		case $.ui.keyCode.SPACE:
			this._activate( event );
			break;
		case $.ui.keyCode.ESCAPE:
			this.collapse( event );
			break;
		default:
			preventDefault = false;
			prev = this.previousFilter || "";
			skip = false;

			// Support number pad values
			character = event.keyCode >= 96 && event.keyCode <= 105 ?
				( event.keyCode - 96 ).toString() : String.fromCharCode( event.keyCode );

			clearTimeout( this.filterTimer );

			if ( character === prev ) {
				skip = true;
			} else {
				character = prev + character;
			}

			match = this._filterMenuItems( character );
			match = skip && match.index( this.active.next() ) !== -1 ?
				this.active.nextAll( ".ui-menu-item" ) :
				match;

			// If no matches on the current filter, reset to the last character pressed
			// to move down the menu to the first item that starts with that character
			if ( !match.length ) {
				character = String.fromCharCode( event.keyCode );
				match = this._filterMenuItems( character );
			}

			if ( match.length ) {
				this.focus( event, match );
				this.previousFilter = character;
				this.filterTimer = this._delay( function() {
					delete this.previousFilter;
				}, 1000 );
			} else {
				delete this.previousFilter;
			}
		}

		if ( preventDefault ) {
			event.preventDefault();
		}
	},

	_activate: function( event ) {
		if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
			if ( this.active.children( "[aria-haspopup='true']" ).length ) {
				this.expand( event );
			} else {
				this.select( event );
			}
		}
	},

	refresh: function() {
		var menus, items, newSubmenus, newItems, newWrappers,
			that = this,
			icon = this.options.icons.submenu,
			submenus = this.element.find( this.options.menus );

		this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

		// Initialize nested menus
		newSubmenus = submenus.filter( ":not(.ui-menu)" )
			.hide()
			.attr( {
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			} )
			.each( function() {
				var menu = $( this ),
					item = menu.prev(),
					submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

				that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon );
				item
					.attr( "aria-haspopup", "true" )
					.prepend( submenuCaret );
				menu.attr( "aria-labelledby", item.attr( "id" ) );
			} );

		this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

		menus = submenus.add( this.element );
		items = menus.find( this.options.items );

		// Initialize menu-items containing spaces and/or dashes only as dividers
		items.not( ".ui-menu-item" ).each( function() {
			var item = $( this );
			if ( that._isDivider( item ) ) {
				that._addClass( item, "ui-menu-divider", "ui-widget-content" );
			}
		} );

		// Don't refresh list items that are already adapted
		newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
		newWrappers = newItems.children()
			.not( ".ui-menu" )
				.uniqueId()
				.attr( {
					tabIndex: -1,
					role: this._itemRole()
				} );
		this._addClass( newItems, "ui-menu-item" )
			._addClass( newWrappers, "ui-menu-item-wrapper" );

		// Add aria-disabled attribute to any disabled menu item
		items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	},

	_itemRole: function() {
		return {
			menu: "menuitem",
			listbox: "option"
		}[ this.options.role ];
	},

	_setOption: function( key, value ) {
		if ( key === "icons" ) {
			var icons = this.element.find( ".ui-menu-icon" );
			this._removeClass( icons, null, this.options.icons.submenu )
				._addClass( icons, null, value.submenu );
		}
		this._super( key, value );
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this.element.attr( "aria-disabled", String( value ) );
		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	focus: function( event, item ) {
		var nested, focused, activeParent;
		this.blur( event, event && event.type === "focus" );

		this._scrollIntoView( item );

		this.active = item.first();

		focused = this.active.children( ".ui-menu-item-wrapper" );
		this._addClass( focused, null, "ui-state-active" );

		// Only update aria-activedescendant if there's a role
		// otherwise we assume focus is managed elsewhere
		if ( this.options.role ) {
			this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
		}

		// Highlight active parent menu item, if any
		activeParent = this.active
			.parent()
				.closest( ".ui-menu-item" )
					.children( ".ui-menu-item-wrapper" );
		this._addClass( activeParent, null, "ui-state-active" );

		if ( event && event.type === "keydown" ) {
			this._close();
		} else {
			this.timer = this._delay( function() {
				this._close();
			}, this.delay );
		}

		nested = item.children( ".ui-menu" );
		if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
			this._startOpening( nested );
		}
		this.activeMenu = item.parent();

		this._trigger( "focus", event, { item: item } );
	},

	_scrollIntoView: function( item ) {
		var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
		if ( this._hasScroll() ) {
			borderTop = parseFloat( $.css( this.activeMenu[ 0 ], "borderTopWidth" ) ) || 0;
			paddingTop = parseFloat( $.css( this.activeMenu[ 0 ], "paddingTop" ) ) || 0;
			offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
			scroll = this.activeMenu.scrollTop();
			elementHeight = this.activeMenu.height();
			itemHeight = item.outerHeight();

			if ( offset < 0 ) {
				this.activeMenu.scrollTop( scroll + offset );
			} else if ( offset + itemHeight > elementHeight ) {
				this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
			}
		}
	},

	blur: function( event, fromFocus ) {
		if ( !fromFocus ) {
			clearTimeout( this.timer );
		}

		if ( !this.active ) {
			return;
		}

		this._removeClass( this.active.children( ".ui-menu-item-wrapper" ),
			null, "ui-state-active" );

		this._trigger( "blur", event, { item: this.active } );
		this.active = null;
	},

	_startOpening: function( submenu ) {
		clearTimeout( this.timer );

		// Don't open if already open fixes a Firefox bug that caused a .5 pixel
		// shift in the submenu position when mousing over the caret icon
		if ( submenu.attr( "aria-hidden" ) !== "true" ) {
			return;
		}

		this.timer = this._delay( function() {
			this._close();
			this._open( submenu );
		}, this.delay );
	},

	_open: function( submenu ) {
		var position = $.extend( {
			of: this.active
		}, this.options.position );

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},

	collapseAll: function( event, all ) {
		clearTimeout( this.timer );
		this.timer = this._delay( function() {

			// If we were passed an event, look for the submenu that contains the event
			var currentMenu = all ? this.element :
				$( event && event.target ).closest( this.element.find( ".ui-menu" ) );

			// If we found no valid submenu ancestor, use the main menu to close all
			// sub menus anyway
			if ( !currentMenu.length ) {
				currentMenu = this.element;
			}

			this._close( currentMenu );

			this.blur( event );

			// Work around active item staying active after menu is blurred
			this._removeClass( currentMenu.find( ".ui-state-active" ), null, "ui-state-active" );

			this.activeMenu = currentMenu;
		}, this.delay );
	},

	// With no arguments, closes the currently active menu - if nothing is active
	// it closes all menus.  If passed an argument, it will search for menus BELOW
	_close: function( startMenu ) {
		if ( !startMenu ) {
			startMenu = this.active ? this.active.parent() : this.element;
		}

		startMenu.find( ".ui-menu" )
			.hide()
			.attr( "aria-hidden", "true" )
			.attr( "aria-expanded", "false" );
	},

	_closeOnDocumentClick: function( event ) {
		return !$( event.target ).closest( ".ui-menu" ).length;
	},

	_isDivider: function( item ) {

		// Match hyphen, em dash, en dash
		return !/[^\-\u2014\u2013\s]/.test( item.text() );
	},

	collapse: function( event ) {
		var newItem = this.active &&
			this.active.parent().closest( ".ui-menu-item", this.element );
		if ( newItem && newItem.length ) {
			this._close();
			this.focus( event, newItem );
		}
	},

	expand: function( event ) {
		var newItem = this.active &&
			this.active
				.children( ".ui-menu " )
					.find( this.options.items )
						.first();

		if ( newItem && newItem.length ) {
			this._open( newItem.parent() );

			// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
			this._delay( function() {
				this.focus( event, newItem );
			} );
		}
	},

	next: function( event ) {
		this._move( "next", "first", event );
	},

	previous: function( event ) {
		this._move( "prev", "last", event );
	},

	isFirstItem: function() {
		return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
	},

	isLastItem: function() {
		return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
	},

	_move: function( direction, filter, event ) {
		var next;
		if ( this.active ) {
			if ( direction === "first" || direction === "last" ) {
				next = this.active
					[ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
					.eq( -1 );
			} else {
				next = this.active
					[ direction + "All" ]( ".ui-menu-item" )
					.eq( 0 );
			}
		}
		if ( !next || !next.length || !this.active ) {
			next = this.activeMenu.find( this.options.items )[ filter ]();
		}

		this.focus( event, next );
	},

	nextPage: function( event ) {
		var item, base, height;

		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isLastItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.nextAll( ".ui-menu-item" ).each( function() {
				item = $( this );
				return item.offset().top - base - height < 0;
			} );

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items )
				[ !this.active ? "first" : "last" ]() );
		}
	},

	previousPage: function( event ) {
		var item, base, height;
		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isFirstItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.prevAll( ".ui-menu-item" ).each( function() {
				item = $( this );
				return item.offset().top - base + height > 0;
			} );

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items ).first() );
		}
	},

	_hasScroll: function() {
		return this.element.outerHeight() < this.element.prop( "scrollHeight" );
	},

	select: function( event ) {

		// TODO: It should never be possible to not have an active item at this
		// point, but the tests don't trigger mouseenter before click.
		this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
		var ui = { item: this.active };
		if ( !this.active.has( ".ui-menu" ).length ) {
			this.collapseAll( event, true );
		}
		this._trigger( "select", event, ui );
	},

	_filterMenuItems: function( character ) {
		var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
			regex = new RegExp( "^" + escapedCharacter, "i" );

		return this.activeMenu
			.find( this.options.items )

				// Only match on items, not dividers or other content (#10571)
				.filter( ".ui-menu-item" )
					.filter( function() {
						return regex.test(
							$.trim( $( this ).children( ".ui-menu-item-wrapper" ).text() ) );
					} );
	}
} );

} ) );

/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [
			"jquery",
			"../ie",
			"../version",
			"../widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );

/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [
			"jquery",
			"./menu",
			"../keycode",
			"../position",
			"../safe-active-element",
			"../version",
			"../widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.autocomplete", {
	version: "1.12.1",
	defaultElement: "<input>",
	options: {
		appendTo: null,
		autoFocus: false,
		delay: 300,
		minLength: 1,
		position: {
			my: "left top",
			at: "left bottom",
			collision: "none"
		},
		source: null,

		// Callbacks
		change: null,
		close: null,
		focus: null,
		open: null,
		response: null,
		search: null,
		select: null
	},

	requestIndex: 0,
	pending: 0,

	_create: function() {

		// Some browsers only repeat keydown events, not keypress events,
		// so we use the suppressKeyPress flag to determine if we've already
		// handled the keydown event. #7269
		// Unfortunately the code for & in keypress is the same as the up arrow,
		// so we use the suppressKeyPressRepeat flag to avoid handling keypress
		// events when we know the keydown event was used to modify the
		// search term. #7799
		var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
			nodeName = this.element[ 0 ].nodeName.toLowerCase(),
			isTextarea = nodeName === "textarea",
			isInput = nodeName === "input";

		// Textareas are always multi-line
		// Inputs are always single-line, even if inside a contentEditable element
		// IE also treats inputs as contentEditable
		// All other element types are determined by whether or not they're contentEditable
		this.isMultiLine = isTextarea || !isInput && this._isContentEditable( this.element );

		this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
		this.isNewMenu = true;

		this._addClass( "ui-autocomplete-input" );
		this.element.attr( "autocomplete", "off" );

		this._on( this.element, {
			keydown: function( event ) {
				if ( this.element.prop( "readOnly" ) ) {
					suppressKeyPress = true;
					suppressInput = true;
					suppressKeyPressRepeat = true;
					return;
				}

				suppressKeyPress = false;
				suppressInput = false;
				suppressKeyPressRepeat = false;
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					suppressKeyPress = true;
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					suppressKeyPress = true;
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					suppressKeyPress = true;
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					suppressKeyPress = true;
					this._keyEvent( "next", event );
					break;
				case keyCode.ENTER:

					// when menu is open and has focus
					if ( this.menu.active ) {

						// #6055 - Opera still allows the keypress to occur
						// which causes forms to submit
						suppressKeyPress = true;
						event.preventDefault();
						this.menu.select( event );
					}
					break;
				case keyCode.TAB:
					if ( this.menu.active ) {
						this.menu.select( event );
					}
					break;
				case keyCode.ESCAPE:
					if ( this.menu.element.is( ":visible" ) ) {
						if ( !this.isMultiLine ) {
							this._value( this.term );
						}
						this.close( event );

						// Different browsers have different default behavior for escape
						// Single press can mean undo or clear
						// Double press in IE means clear the whole form
						event.preventDefault();
					}
					break;
				default:
					suppressKeyPressRepeat = true;

					// search timeout should be triggered before the input value is changed
					this._searchTimeout( event );
					break;
				}
			},
			keypress: function( event ) {
				if ( suppressKeyPress ) {
					suppressKeyPress = false;
					if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
						event.preventDefault();
					}
					return;
				}
				if ( suppressKeyPressRepeat ) {
					return;
				}

				// Replicate some key handlers to allow them to repeat in Firefox and Opera
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					this._keyEvent( "next", event );
					break;
				}
			},
			input: function( event ) {
				if ( suppressInput ) {
					suppressInput = false;
					event.preventDefault();
					return;
				}
				this._searchTimeout( event );
			},
			focus: function() {
				this.selectedItem = null;
				this.previous = this._value();
			},
			blur: function( event ) {
				if ( this.cancelBlur ) {
					delete this.cancelBlur;
					return;
				}

				clearTimeout( this.searching );
				this.close( event );
				this._change( event );
			}
		} );

		this._initSource();
		this.menu = $( "<ul>" )
			.appendTo( this._appendTo() )
			.menu( {

				// disable ARIA support, the live region takes care of that
				role: null
			} )
			.hide()
			.menu( "instance" );

		this._addClass( this.menu.element, "ui-autocomplete", "ui-front" );
		this._on( this.menu.element, {
			mousedown: function( event ) {

				// prevent moving focus out of the text field
				event.preventDefault();

				// IE doesn't prevent moving focus even with event.preventDefault()
				// so we set a flag to know when we should ignore the blur event
				this.cancelBlur = true;
				this._delay( function() {
					delete this.cancelBlur;

					// Support: IE 8 only
					// Right clicking a menu item or selecting text from the menu items will
					// result in focus moving out of the input. However, we've already received
					// and ignored the blur event because of the cancelBlur flag set above. So
					// we restore focus to ensure that the menu closes properly based on the user's
					// next actions.
					if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
						this.element.trigger( "focus" );
					}
				} );
			},
			menufocus: function( event, ui ) {
				var label, item;

				// support: Firefox
				// Prevent accidental activation of menu items in Firefox (#7024 #9118)
				if ( this.isNewMenu ) {
					this.isNewMenu = false;
					if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
						this.menu.blur();

						this.document.one( "mousemove", function() {
							$( event.target ).trigger( event.originalEvent );
						} );

						return;
					}
				}

				item = ui.item.data( "ui-autocomplete-item" );
				if ( false !== this._trigger( "focus", event, { item: item } ) ) {

					// use value to match what will end up in the input, if it was a key event
					if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
						this._value( item.value );
					}
				}

				// Announce the value in the liveRegion
				label = ui.item.attr( "aria-label" ) || item.value;
				if ( label && $.trim( label ).length ) {
					this.liveRegion.children().hide();
					$( "<div>" ).text( label ).appendTo( this.liveRegion );
				}
			},
			menuselect: function( event, ui ) {
				var item = ui.item.data( "ui-autocomplete-item" ),
					previous = this.previous;

				// Only trigger when focus was lost (click on menu)
				if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
					this.element.trigger( "focus" );
					this.previous = previous;

					// #6109 - IE triggers two focus events and the second
					// is asynchronous, so we need to reset the previous
					// term synchronously and asynchronously :-(
					this._delay( function() {
						this.previous = previous;
						this.selectedItem = item;
					} );
				}

				if ( false !== this._trigger( "select", event, { item: item } ) ) {
					this._value( item.value );
				}

				// reset the term after the select event
				// this allows custom select handling to work properly
				this.term = this._value();

				this.close( event );
				this.selectedItem = item;
			}
		} );

		this.liveRegion = $( "<div>", {
			role: "status",
			"aria-live": "assertive",
			"aria-relevant": "additions"
		} )
			.appendTo( this.document[ 0 ].body );

		this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

		// Turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		} );
	},

	_destroy: function() {
		clearTimeout( this.searching );
		this.element.removeAttr( "autocomplete" );
		this.menu.element.remove();
		this.liveRegion.remove();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "source" ) {
			this._initSource();
		}
		if ( key === "appendTo" ) {
			this.menu.element.appendTo( this._appendTo() );
		}
		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_isEventTargetInWidget: function( event ) {
		var menuElement = this.menu.element[ 0 ];

		return event.target === this.element[ 0 ] ||
			event.target === menuElement ||
			$.contains( menuElement, event.target );
	},

	_closeOnClickOutside: function( event ) {
		if ( !this._isEventTargetInWidget( event ) ) {
			this.close();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;

		if ( element ) {
			element = element.jquery || element.nodeType ?
				$( element ) :
				this.document.find( element ).eq( 0 );
		}

		if ( !element || !element[ 0 ] ) {
			element = this.element.closest( ".ui-front, dialog" );
		}

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_initSource: function() {
		var array, url,
			that = this;
		if ( $.isArray( this.options.source ) ) {
			array = this.options.source;
			this.source = function( request, response ) {
				response( $.ui.autocomplete.filter( array, request.term ) );
			};
		} else if ( typeof this.options.source === "string" ) {
			url = this.options.source;
			this.source = function( request, response ) {
				if ( that.xhr ) {
					that.xhr.abort();
				}
				that.xhr = $.ajax( {
					url: url,
					data: request,
					dataType: "json",
					success: function( data ) {
						response( data );
					},
					error: function() {
						response( [] );
					}
				} );
			};
		} else {
			this.source = this.options.source;
		}
	},

	_searchTimeout: function( event ) {
		clearTimeout( this.searching );
		this.searching = this._delay( function() {

			// Search if the value has changed, or if the user retypes the same value (see #7434)
			var equalValues = this.term === this._value(),
				menuVisible = this.menu.element.is( ":visible" ),
				modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

			if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
				this.selectedItem = null;
				this.search( null, event );
			}
		}, this.options.delay );
	},

	search: function( value, event ) {
		value = value != null ? value : this._value();

		// Always save the actual value, not the one passed as an argument
		this.term = this._value();

		if ( value.length < this.options.minLength ) {
			return this.close( event );
		}

		if ( this._trigger( "search", event ) === false ) {
			return;
		}

		return this._search( value );
	},

	_search: function( value ) {
		this.pending++;
		this._addClass( "ui-autocomplete-loading" );
		this.cancelSearch = false;

		this.source( { term: value }, this._response() );
	},

	_response: function() {
		var index = ++this.requestIndex;

		return $.proxy( function( content ) {
			if ( index === this.requestIndex ) {
				this.__response( content );
			}

			this.pending--;
			if ( !this.pending ) {
				this._removeClass( "ui-autocomplete-loading" );
			}
		}, this );
	},

	__response: function( content ) {
		if ( content ) {
			content = this._normalize( content );
		}
		this._trigger( "response", null, { content: content } );
		if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
			this._suggest( content );
			this._trigger( "open" );
		} else {

			// use ._close() instead of .close() so we don't cancel future searches
			this._close();
		}
	},

	close: function( event ) {
		this.cancelSearch = true;
		this._close( event );
	},

	_close: function( event ) {

		// Remove the handler that closes the menu on outside clicks
		this._off( this.document, "mousedown" );

		if ( this.menu.element.is( ":visible" ) ) {
			this.menu.element.hide();
			this.menu.blur();
			this.isNewMenu = true;
			this._trigger( "close", event );
		}
	},

	_change: function( event ) {
		if ( this.previous !== this._value() ) {
			this._trigger( "change", event, { item: this.selectedItem } );
		}
	},

	_normalize: function( items ) {

		// assume all items have the right format when the first item is complete
		if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
			return items;
		}
		return $.map( items, function( item ) {
			if ( typeof item === "string" ) {
				return {
					label: item,
					value: item
				};
			}
			return $.extend( {}, item, {
				label: item.label || item.value,
				value: item.value || item.label
			} );
		} );
	},

	_suggest: function( items ) {
		var ul = this.menu.element.empty();
		this._renderMenu( ul, items );
		this.isNewMenu = true;
		this.menu.refresh();

		// Size and position menu
		ul.show();
		this._resizeMenu();
		ul.position( $.extend( {
			of: this.element
		}, this.options.position ) );

		if ( this.options.autoFocus ) {
			this.menu.next();
		}

		// Listen for interactions outside of the widget (#6642)
		this._on( this.document, {
			mousedown: "_closeOnClickOutside"
		} );
	},

	_resizeMenu: function() {
		var ul = this.menu.element;
		ul.outerWidth( Math.max(

			// Firefox wraps long text (possibly a rounding bug)
			// so we add 1px to avoid the wrapping (#7513)
			ul.width( "" ).outerWidth() + 1,
			this.element.outerWidth()
		) );
	},

	_renderMenu: function( ul, items ) {
		var that = this;
		$.each( items, function( index, item ) {
			that._renderItemData( ul, item );
		} );
	},

	_renderItemData: function( ul, item ) {
		return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
	},

	_renderItem: function( ul, item ) {
		return $( "<li>" )
			.append( $( "<div>" ).text( item.label ) )
			.appendTo( ul );
	},

	_move: function( direction, event ) {
		if ( !this.menu.element.is( ":visible" ) ) {
			this.search( null, event );
			return;
		}
		if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
				this.menu.isLastItem() && /^next/.test( direction ) ) {

			if ( !this.isMultiLine ) {
				this._value( this.term );
			}

			this.menu.blur();
			return;
		}
		this.menu[ direction ]( event );
	},

	widget: function() {
		return this.menu.element;
	},

	_value: function() {
		return this.valueMethod.apply( this.element, arguments );
	},

	_keyEvent: function( keyEvent, event ) {
		if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
			this._move( keyEvent, event );

			// Prevents moving cursor to beginning/end of the text field in some browsers
			event.preventDefault();
		}
	},

	// Support: Chrome <=50
	// We should be able to just use this.element.prop( "isContentEditable" )
	// but hidden elements always report false in Chrome.
	// https://code.google.com/p/chromium/issues/detail?id=313082
	_isContentEditable: function( element ) {
		if ( !element.length ) {
			return false;
		}

		var editable = element.prop( "contentEditable" );

		if ( editable === "inherit" ) {
		  return this._isContentEditable( element.parent() );
		}

		return editable === "true";
	}
} );

$.extend( $.ui.autocomplete, {
	escapeRegex: function( value ) {
		return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
	},
	filter: function( array, term ) {
		var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
		return $.grep( array, function( value ) {
			return matcher.test( value.label || value.value || value );
		} );
	}
} );

// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
	options: {
		messages: {
			noResults: "No search results.",
			results: function( amount ) {
				return amount + ( amount > 1 ? " results are" : " result is" ) +
					" available, use up and down arrow keys to navigate.";
			}
		}
	},

	__response: function( content ) {
		var message;
		this._superApply( arguments );
		if ( this.options.disabled || this.cancelSearch ) {
			return;
		}
		if ( content && content.length ) {
			message = this.options.messages.results( content.length );
		} else {
			message = this.options.messages.noResults;
		}
		this.liveRegion.children().hide();
		$( "<div>" ).text( message ).appendTo( this.liveRegion );
	}
} );

return $.ui.autocomplete;

} ) );

/*
 *  custombox - Modal dialog effects with transitions CSS3
 *  version: 4.0.3
 *  http://dixso.github.io/custombox/
 *  (c) 2017 Julio de la Calle - @dixso9
 *
 *  Under MIT License - http://opensource.org/licenses/MIT
 */
"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),Custombox;!function(e){var t="custombox",n=t+"-open",o=t+"-close",i=t+"-lock",s="animateFrom",r=["top","right","bottom","left"],l=["slide","blur","flip","rotate","letmein","makeway","slip","corner","slidetogether","push","contentscale"],c=["blur","makeway","slip","push","contentscale"],a=["letmein","makeway","slip","corner","slidetogether","door","push","contentscale"],h=["corner","slidetogether","scale","door","push","contentscale"],d=["fall","sidefall","flip","sign","slit","letmein","makeway","slip"],u=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"check",value:function(e,t){return e.indexOf(t)>-1}},{key:"isIE",value:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!isNaN(parseInt(e.substring(t+5,e.indexOf(".",t)),10));if(e.indexOf("Trident/")>0){var n=e.indexOf("rv:");return!isNaN(parseInt(e.substring(n+3,e.indexOf(".",n)),10))}var o=e.indexOf("Edge/");return o>0&&!isNaN(parseInt(e.substring(o+5,e.indexOf(".",o)),10))}}]),e}(),m=function(){function e(){_classCallCheck(this,e),this.position=document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0,document.documentElement.classList.add(t+"-perspective")}return _createClass(e,[{key:"remove",value:function(){document.documentElement.classList.remove(t+"-perspective"),window.scrollTo(0,this.position)}}]),e}(),p=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return Object.keys(n).forEach(function(t){e[t]&&_extends(n[t],e[t])}),n}return _inherits(t,e),t}(function e(){_classCallCheck(this,e),this.overlay={color:"#000",opacity:.48,close:!0,speedIn:300,speedOut:300,onOpen:null,onComplete:null,onClose:null,active:!0},this.content={id:null,target:null,container:null,clone:!1,animateFrom:"top",animateTo:"top",positionX:"center",positionY:"center",width:null,effect:"fadein",speedIn:300,speedOut:300,delay:150,fullscreen:!1,onOpen:null,onComplete:null,onClose:null,close:!0},this.loader={active:!0,color:"#FFF",background:"#999",speed:1e3}}),f=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.classList.add(t+"-loader"),this.element.style.borderColor=this.options.loader.background,this.element.style.borderTopColor=this.options.loader.color,this.element.style.animationDuration=this.options.loader.speed+"ms",document.body.appendChild(this.element)}return _createClass(e,[{key:"show",value:function(){this.element.style.display="block"}},{key:"destroy",value:function(){this.element.parentElement.removeChild(this.element)}}]),e}(),v=function(){function e(n){if(_classCallCheck(this,e),this.options=n,"loading"===document.readyState)throw new Error("You need to instantiate Custombox when the document is fully loaded");var o=document.querySelector(this.options.content.container);if(o)this.element=o;else if(document.querySelector("."+t+"-container"))document.querySelector("."+t+"-container")&&(this.element=document.querySelector("."+t+"-container"));else{for(this.element=document.createElement("div");document.body.firstChild;)this.element.appendChild(document.body.firstChild);document.body.appendChild(this.element)}this.element.classList.add(t+"-container"),this.element.classList.add(t+"-"+this.options.content.effect),this.element.style.animationDuration=this.options.content.speedIn+"ms",u.check(l,this.options.content.effect)&&this.setAnimation()}return _createClass(e,[{key:"bind",value:function(e){var t=this;return e===o&&(u.check(l,this.options.content.effect)&&this.setAnimation("animateTo"),this.element.classList.remove(n)),this.element.classList.add(e),new Promise(function(e){return t.listener().then(function(){return e()})})}},{key:"remove",value:function(){this.element.classList.remove(o),this.element.classList.remove(t+"-"+this.options.content.effect),this.element.style.removeProperty("animation-duration");var e=document.querySelectorAll("."+t+"-content"),n=document.querySelector(this.options.content.container);if(!e.length)if(n)for(var i=this.element.className.split(" "),s=0,r=i.length;s<r;s++)i[s].startsWith(t+"-")&&this.element.classList.remove(i[s]);else{for(var l=document.querySelector("."+t+"-container");l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.parentNode.removeChild(l)}}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.content.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),y=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.style.backgroundColor=this.options.overlay.color,this.element.classList.add(t+"-overlay"),this.setAnimation()}return _createClass(e,[{key:"bind",value:function(e){var i=this;switch(e){case o:u.check(a,this.options.content.effect)&&this.toggleAnimation("animateTo"),this.element.classList.add(o),this.element.classList.remove(n);break;default:document.body.appendChild(this.element),this.element.classList.add(t+"-"+this.options.content.effect),this.element.classList.add(n)}return new Promise(function(e){return i.listener().then(function(){return e()})})}},{key:"remove",value:function(){try{this.element.parentNode.removeChild(this.element),this.style.parentNode.removeChild(this.style)}catch(e){}}},{key:"createSheet",value:function(){return this.style=document.createElement("style"),this.style.setAttribute("id",t+"-overlay-"+Date.now()),document.head.appendChild(this.style),this.style.sheet}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.overlay.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){var e=this.createSheet();if(u.check(a,this.options.content.effect)?(this.element.style.opacity=this.options.overlay.opacity.toString(),this.element.style.animationDuration=this.options.overlay.speedIn+"ms",this.toggleAnimation()):(e.insertRule("."+t+"-overlay { animation: CloseFade "+this.options.overlay.speedOut+"ms; }",0),e.insertRule("."+n+"."+t+"-overlay { animation: OpenFade "+this.options.overlay.speedIn+"ms; opacity: "+this.options.overlay.opacity+" }",0),e.insertRule("@keyframes OpenFade { from {opacity: 0} to {opacity: "+this.options.overlay.opacity+"} }",0),e.insertRule("@keyframes CloseFade { from {opacity: "+this.options.overlay.opacity+"} to {opacity: 0} }",0)),u.check(h,this.options.content.effect)){var o=this.options.overlay.speedIn;u.check(h,this.options.content.effect)&&(o=this.options.content.speedIn),this.element.style.animationDuration=o+"ms"}}},{key:"toggleAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),b=function(){function e(n){_classCallCheck(this,e),this.options=n,this.element=document.createElement("div"),this.element.style.animationDuration=this.options.content.speedIn+"ms",this.options.content.id&&this.element.setAttribute("id",t+"-"+this.options.content.id),u.check(h,this.options.content.effect)||(this.element.style.animationDelay=this.options.content.delay+"ms"),this.element.classList.add(t+"-content"),this.options.content.fullscreen?this.element.classList.add(t+"-fullscreen"):(this.element.classList.add(t+"-x-"+this.options.content.positionX),this.element.classList.add(t+"-y-"+this.options.content.positionY)),u.check(l,this.options.content.effect)&&this.setAnimation()}return _createClass(e,[{key:"fetch",value:function(){var e=this;return new Promise(function(n,o){var i=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,s=e.options.content.target.match(i);if(s&&11==s[2].length){var r=document.createElement("div"),l=document.createElement("iframe");if(l.setAttribute("src","https://www.youtube.com/embed/"+s[2]),l.setAttribute("frameborder","0"),l.setAttribute("allowfullscreen",""),l.setAttribute("width","100%"),l.setAttribute("height","100%"),r.appendChild(l),!e.options.content.fullscreen){var c=window.innerWidth>560?560:window.innerWidth,a=window.innerHeight>315?315:window.innerHeight,h=parseInt(e.options.content.width,10);e.options.content.width&&window.innerWidth>h&&(a=Math.round(a*h/c),c=h),l.setAttribute("width",c+"px"),l.setAttribute("height",a+"px")}e.element.appendChild(r),n()}else if("#"!==e.options.content.target.charAt(0)&&"."!==e.options.content.target.charAt(0)){var d=new XMLHttpRequest;d.open("GET",e.options.content.target),d.onload=function(){if(200===d.status){e.element.insertAdjacentHTML("beforeend",d.response);var t=e.element.firstChild;try{t.style.display="block"}catch(e){o(new Error("The ajax response need a wrapper element"))}e.options.content.width&&(t.style.flexBasis=e.options.content.width),n()}else o(new Error(d.statusText))},d.onerror=function(){return o(new Error("Network error"))},d.send()}else{var u=document.querySelector(e.options.content.target);u?(e.options.content.clone?(u=u.cloneNode(!0)).removeAttribute("id"):(e.reference=document.createElement("div"),e.reference.classList.add(t+"-reference"),e.reference.setAttribute("style",u.getAttribute("style")),u.parentNode.insertBefore(e.reference,u.nextSibling)),u.style.display="block",e.options.content.width&&(u.style.flexBasis=e.options.content.width),e.element.appendChild(u),n()):o(new Error("The element doesn't exist"))}})}},{key:"bind",value:function(e){var i=this;switch(e){case o:this.element.style.animationDelay="0ms",this.element.style.animationDuration=this.options.content.speedOut+"ms",this.element.classList.remove(n),this.element.classList.add(o),this.setAnimation("animateTo");break;default:document.body.appendChild(this.element),this.element.classList.add(t+"-"+this.options.content.effect),this.element.classList.add(n)}return new Promise(function(e){return i.listener().then(function(){return e()})})}},{key:"remove",value:function(){var e=new RegExp("^[#|.]");!this.options.content.clone&&e.test(this.options.content.target)&&(this.element.childNodes[0].setAttribute("style",this.reference.getAttribute("style")),this.reference.parentNode.insertBefore(this.element.childNodes[0],this.reference.nextSibling),this.reference.parentNode.removeChild(this.reference));try{this.element.parentNode.removeChild(this.element)}catch(e){}}},{key:"listener",value:function(){var e=this;return new Promise(function(t){u.isIE()?setTimeout(t,e.options.content.speedIn):e.element.addEventListener("animationend",function(){return t()},!0)})}},{key:"setAnimation",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=0,o=r.length;n<o;n++)this.element.classList.contains(t+"-"+r[n])&&this.element.classList.remove(t+"-"+r[n]);this.element.classList.add(t+"-"+this.options.content[e])}}]),e}(),w=function(){function s(t){_classCallCheck(this,s),this.action=function(t){27===t.keyCode&&e.modal.close()},this.options=new p(t)}return _createClass(s,[{key:"open",value:function(){var e=this;this.build(),this.options.loader.active&&this.loader.show(),this.content.fetch().then(function(){u.check(d,e.options.content.effect)&&(e.scroll=new m),e.options.overlay.active?(e.dispatchEvent("overlay.onOpen"),e.overlay.bind(n).then(function(){e.dispatchEvent("overlay.onComplete"),e.options.loader.active&&e.loader.destroy()})):e.options.loader.active&&e.loader.destroy(),e.container&&e.container.bind(n),document.body.classList.add(i),e.content.bind(n).then(function(){return e.dispatchEvent("content.onComplete")}),e.dispatchEvent("content.onOpen"),e.listeners()}).catch(function(t){throw e.options.loader.active&&e.loader.destroy(),t})}},{key:"build",value:function(){this.options.loader.active&&(this.loader=new f(this.options)),u.check(c,this.options.content.effect)&&(this.container=new v(this.options)),this.options.overlay.active&&(this.overlay=new y(this.options)),this.content=new b(this.options)}},{key:"_close",value:function(){var e=this,t=[this.content.bind(o).then(function(){return e.content.remove()})];this.options.overlay.active&&t.push(this.overlay.bind(o).then(function(){e.scroll&&e.scroll.remove(),e.overlay.remove(),e.dispatchEvent("overlay.onClose")})),this.container&&t.push(this.container.bind(o).then(function(){return e.container.remove()})),Promise.all(t).then(function(){e.options.content.close&&document.removeEventListener("keydown",e.action,!0),e.dispatchEvent("content.onClose"),document.body.classList.remove(i)})}},{key:"dispatchEvent",value:function(e){var n=e.replace(".on",":").toLowerCase(),o=new CustomEvent(t+":"+n),i=Object.create(this.options);document.dispatchEvent(o);try{e.split(".").reduce(function(e,t){return e[t]},i).call()}catch(e){}}},{key:"listeners",value:function(){var e=this,n=window.getComputedStyle(this.content.element).getPropertyValue("animation-fill-mode");document.addEventListener("fullscreenchange",function(){window.getComputedStyle(e.content.element).getPropertyValue("animation-fill-mode")===n?e.content.element.style.animationFillMode="backwards":e.content.element.style.animationFillMode=n},!0),this.options.content.close&&document.addEventListener("keydown",this.action,!0),this.options.overlay.close&&this.content.element.addEventListener("click",function(t){t.target===e.content.element&&e._close()},!0),this.content.element.addEventListener(t+":close",function(){e._close()},!0)}}],[{key:"close",value:function(e){var n=new CustomEvent(t+":close"),o=document.querySelectorAll("."+t+"-content");e&&(o=document.querySelectorAll("#"+t+"-"+e));try{o[o.length-1].dispatchEvent(n)}catch(e){throw new Error("Custombox is not instantiated")}}},{key:"closeAll",value:function(){for(var e=new CustomEvent(t+":close"),n=document.querySelectorAll("."+t+"-content"),o=n.length,i=0;i<o;i++)n[i].dispatchEvent(e)}}]),s}();e.modal=w}(Custombox||(Custombox={}));
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.8.7
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2018 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/

(function() {
  var $, AbstractChosen, Chosen, SelectParser,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, i, len, option, ref, results1;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: group.label,
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      ref = group.childNodes;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        results1.push(this.add_option(option, group_position, group.disabled));
      }
      return results1;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, i, len, parser, ref;
    parser = new SelectParser();
    ref = select.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options1) {
      this.form_field = form_field;
      this.options = options1 != null ? options1 : {};
      this.label_click_handler = bind(this.label_click_handler, this);
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function() {
      this.click_test_action = (function(_this) {
        return function(evt) {
          return _this.test_active_click(evt);
        };
      })(this);
      this.activate_action = (function(_this) {
        return function(evt) {
          return _this.activate_field(evt);
        };
      })(this);
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
      this.case_sensitive_search = this.options.case_sensitive_search || false;
      return this.hide_results_on_select = this.options.hide_results_on_select != null ? this.options.hide_results_on_select : true;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      this.default_text = this.escape_html(this.default_text);
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function(item) {
      if (this.include_group_label_in_selected && (item.group_label != null)) {
        return "<b class='group-name'>" + (this.escape_html(item.group_label)) + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.container_mousedown();
            };
          })(this)), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout(((function(_this) {
          return function() {
            return _this.blur_test();
          };
        })(this)), 100);
      }
    };

    AbstractChosen.prototype.label_click_handler = function(evt) {
      if (this.is_multiple) {
        return this.container_mousedown(evt);
      } else {
        return this.activate_field();
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, data_content, i, len, ref, shown_results;
      content = '';
      shown_results = 0;
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        data_content = '';
        if (data.group) {
          data_content = this.result_add_group(data);
        } else {
          data_content = this.result_add_option(data);
        }
        if (data_content !== '') {
          shown_results++;
          content += data_content;
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
        if (shown_results >= this.max_shown_results) {
          break;
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      if (option.style) {
        option_el.style.cssText = option.style;
      }
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.highlighted_html || option.html;
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.highlighted_html || this.escape_html(group.label);
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var i, len, ref, result, results1;
      ref = this.results_data;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        result = ref[i];
        if (result.selected) {
          results1.push(result.selected = false);
        } else {
          results1.push(void 0);
        }
      }
      return results1;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function(options) {
      var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
      this.no_results_clear();
      results = 0;
      query = this.get_search_text();
      escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regex = this.get_search_regex(escapedQuery);
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        option.search_match = false;
        results_group = null;
        search_match = null;
        option.highlighted_html = '';
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          text = option.group ? option.label : option.text;
          if (!(option.group && !this.group_search)) {
            search_match = this.search_string_match(text, regex);
            option.search_match = search_match != null;
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (query.length) {
                startpos = search_match.index;
                prefix = text.slice(0, startpos);
                fix = text.slice(startpos, startpos + query.length);
                suffix = text.slice(startpos + query.length);
                option.highlighted_html = (this.escape_html(prefix)) + "<em>" + (this.escape_html(fix)) + "</em>" + (this.escape_html(suffix));
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && query.length) {
        this.update_results_content("");
        return this.no_results(query);
      } else {
        this.update_results_content(this.results_option_build());
        if (!(options != null ? options.skip_highlight : void 0)) {
          return this.winnow_results_set_highlight();
        }
      }
    };

    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
      var regex_flag, regex_string;
      regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";
      if (!(this.enable_split_word_search || this.search_contains)) {
        regex_string = "^" + regex_string;
      }
      regex_flag = this.case_sensitive_search ? "" : "i";
      return new RegExp(regex_string, regex_flag);
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var match;
      match = regex.exec(search_string);
      if (!this.search_contains && (match != null ? match[1] : void 0)) {
        match.index += 1;
      }
      return match;
    };

    AbstractChosen.prototype.choices_count = function() {
      var i, len, option, ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      ref = this.form_field.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      this.activate_field();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keydown_checker = function(evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.get_search_field_value().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 27:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          break;
        case 9:
        case 16:
        case 17:
        case 18:
        case 38:
        case 40:
        case 91:
          break;
        default:
          this.results_search();
          break;
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      if (this.is_disabled) {
        return;
      }
      return setTimeout(((function(_this) {
        return function() {
          return _this.results_search();
        };
      })(this)), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.prototype.get_single_html = function() {
      return "<a class=\"chosen-single chosen-default\">\n  <span>" + this.default_text + "</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";
    };

    AbstractChosen.prototype.get_multi_html = function() {
      return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
    };

    AbstractChosen.prototype.get_no_results_html = function(terms) {
      return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + (this.escape_html(terms)) + "</span>\n</li>";
    };

    AbstractChosen.browser_is_supported = function() {
      if ("Microsoft Internet Explorer" === window.navigator.appName) {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) {
        return false;
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy') {
          if (chosen instanceof Chosen) {
            chosen.destroy();
          }
          return;
        }
        if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(superClass) {
    extend(Chosen, superClass);

    function Chosen() {
      return Chosen.__super__.constructor.apply(this, arguments);
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      return this.current_selectedIndex = this.form_field.selectedIndex;
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      this.container.width(this.container_width());
      if (this.is_multiple) {
        this.container.html(this.get_multi_html());
      } else {
        this.container.html(this.get_single_html());
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      this.container.on('touchstart.chosen', (function(_this) {
        return function(evt) {
          _this.container_mousedown(evt);
        };
      })(this));
      this.container.on('touchend.chosen', (function(_this) {
        return function(evt) {
          _this.container_mouseup(evt);
        };
      })(this));
      this.container.on('mousedown.chosen', (function(_this) {
        return function(evt) {
          _this.container_mousedown(evt);
        };
      })(this));
      this.container.on('mouseup.chosen', (function(_this) {
        return function(evt) {
          _this.container_mouseup(evt);
        };
      })(this));
      this.container.on('mouseenter.chosen', (function(_this) {
        return function(evt) {
          _this.mouse_enter(evt);
        };
      })(this));
      this.container.on('mouseleave.chosen', (function(_this) {
        return function(evt) {
          _this.mouse_leave(evt);
        };
      })(this));
      this.search_results.on('mouseup.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mouseup(evt);
        };
      })(this));
      this.search_results.on('mouseover.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mouseover(evt);
        };
      })(this));
      this.search_results.on('mouseout.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mouseout(evt);
        };
      })(this));
      this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_mousewheel(evt);
        };
      })(this));
      this.search_results.on('touchstart.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_touchstart(evt);
        };
      })(this));
      this.search_results.on('touchmove.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_touchmove(evt);
        };
      })(this));
      this.search_results.on('touchend.chosen', (function(_this) {
        return function(evt) {
          _this.search_results_touchend(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:updated.chosen", (function(_this) {
        return function(evt) {
          _this.results_update_field(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:activate.chosen", (function(_this) {
        return function(evt) {
          _this.activate_field(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:open.chosen", (function(_this) {
        return function(evt) {
          _this.container_mousedown(evt);
        };
      })(this));
      this.form_field_jq.on("chosen:close.chosen", (function(_this) {
        return function(evt) {
          _this.close_field(evt);
        };
      })(this));
      this.search_field.on('blur.chosen', (function(_this) {
        return function(evt) {
          _this.input_blur(evt);
        };
      })(this));
      this.search_field.on('keyup.chosen', (function(_this) {
        return function(evt) {
          _this.keyup_checker(evt);
        };
      })(this));
      this.search_field.on('keydown.chosen', (function(_this) {
        return function(evt) {
          _this.keydown_checker(evt);
        };
      })(this));
      this.search_field.on('focus.chosen', (function(_this) {
        return function(evt) {
          _this.input_focus(evt);
        };
      })(this));
      this.search_field.on('cut.chosen', (function(_this) {
        return function(evt) {
          _this.clipboard_event_checker(evt);
        };
      })(this));
      this.search_field.on('paste.chosen', (function(_this) {
        return function(evt) {
          _this.clipboard_event_checker(evt);
        };
      })(this));
      if (this.is_multiple) {
        return this.search_choices.on('click.chosen', (function(_this) {
          return function(evt) {
            _this.choices_click(evt);
          };
        })(this));
      } else {
        return this.container.on('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).off('click.chosen', this.click_test_action);
      if (this.form_field_label.length > 0) {
        this.form_field_label.off('click.chosen');
      }
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field.disabled || this.form_field_jq.parents('fieldset').is(':disabled');
      this.container.toggleClass('chosen-disabled', this.is_disabled);
      this.search_field[0].disabled = this.is_disabled;
      if (!this.is_multiple) {
        this.selected_item.off('focus.chosen', this.activate_field);
      }
      if (this.is_disabled) {
        return this.close_field();
      } else if (!this.is_multiple) {
        return this.selected_item.on('focus.chosen', this.activate_field);
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      var ref;
      if (this.is_disabled) {
        return;
      }
      if (evt && ((ref = evt.type) === 'mousedown' || ref === 'touchstart') && !this.results_showing) {
        evt.preventDefault();
      }
      if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
        if (!this.active_field) {
          if (this.is_multiple) {
            this.search_field.val("");
          }
          $(this.container[0].ownerDocument).on('click.chosen', this.click_test_action);
          this.results_show();
        } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
          evt.preventDefault();
          this.results_toggle();
        }
        return this.activate_field();
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      this.search_field_scale();
      return this.search_field.blur();
    };

    Chosen.prototype.activate_field = function() {
      if (this.is_disabled) {
        return;
      }
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.get_search_field_value());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.on('click.chosen', this.label_click_handler);
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result") || $(evt.target).parents('.active-result').first()) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + (this.choice_label(item)) + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.on('click.chosen', (function(_this) {
          return function(evt) {
            return _this.choice_destroy_link_click(evt);
          };
        })(this));
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        if (this.active_field) {
          this.search_field.focus();
        } else {
          this.show_search_field_default();
        }
        if (this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.trigger_form_field_change();
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }
        if (this.is_multiple && (!this.hide_results_on_select || (evt.metaKey || evt.ctrlKey))) {
          if (evt.metaKey || evt.ctrlKey) {
            this.winnow_results({
              skip_highlight: true
            });
          } else {
            this.search_field.val("");
            this.winnow_results();
          }
        } else {
          this.results_hide();
          this.show_search_field_default();
        }
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.trigger_form_field_change({
            selected: this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.trigger_form_field_change({
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_field_value = function() {
      return this.search_field.val();
    };

    Chosen.prototype.get_search_text = function() {
      return $.trim(this.get_search_field_value());
    };

    Chosen.prototype.escape_html = function(text) {
      return $('<div/>').text(text).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = this.get_no_results_html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.search_field_scale = function() {
      var div, i, len, style, style_block, styles, width;
      if (!this.is_multiple) {
        return;
      }
      style_block = {
        position: 'absolute',
        left: '-1000px',
        top: '-1000px',
        display: 'none',
        whiteSpace: 'pre'
      };
      styles = ['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];
      for (i = 0, len = styles.length; i < len; i++) {
        style = styles[i];
        style_block[style] = this.search_field.css(style);
      }
      div = $('<div />').css(style_block);
      div.text(this.get_search_field_value());
      $('body').append(div);
      width = div.width() + 25;
      div.remove();
      if (this.container.is(':visible')) {
        width = Math.min(this.container.outerWidth() - 10, width);
      }
      return this.search_field.width(width);
    };

    Chosen.prototype.trigger_form_field_change = function(extra) {
      this.form_field_jq.trigger("input", extra);
      return this.form_field_jq.trigger("change", extra);
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);

/**
 * Image Select (Version 1.8)
 *
 * Image Select is an extention to the Chosen, a Select Box Enhancer for
 * jQuery and Prototype, full source at https://github.com/harvesthq/chosen
 *
 * This plugin extension was designed as a humanized UI element for social networking
 * sites that need to faciliate relations between people. Research shows that people
 * are extremely sensitvie to photos of others, so we needed to revamp the traditional
 * UI elements to make them more intuitive and human.
 *
 * Hope you find it helpful, and get back if you have any feedback/improvements.
 *
 * @author    Adnan M.Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2002-2015 Web Semantics, Inc. (http://websemantics.ca) & AlterSpark Corp. (http://www.alterspark.com)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @package   websemantics/image-select
 */

(function($) {

// Image template, this can be overridden from the constructor (options.template),
// must contains {src} placeholder. Ther eare two class names
// 'chose-image' or 'chose-image-small', modifiy in CSS
var fn_template = '<img class="{class_name}" src="{url}" />'

function prependTemplate(element, option, template, rtl, multiple, cls){
    // summery:
    // This will fill-in the provided template with image source and css class
    // then add it to the element.
    //
    // element: Dom
    //          This is the span node
    // object: Object,
    //          The select option to get image url
    // template: String
    //          Html content
    // rtl: Boolean,
    //          Right to Left
    // multiple: Boolean
    //          Used to select the approperiate css class, default to 'true'
    // cls*: String (optional)
    //          Css styles class

    var src = $(option).data('img-src')

    if(src != undefined && src > ''){

        element = $(element)

        text     = $(option).text()
        multiple = (multiple != undefined) ? multiple : true
        cls      = cls || (multiple ? 'chose-image' : 'chose-image-small')
        cls      = rtl ? cls + ' rtl' : cls
        template = template.replace('{url}',src)
                           .replace('{class_name}',cls)
                           .replace('{text}',text)

        // Empty the element
        element.empty()

        // Insert after if ltr or multiple select, otherwise, insert before
        if(rtl && multiple){
            element.append(template)
        }
        else {
            element.prepend(template)
        }
    }
}

function getSelectedOptions(chosen){
    // summery:
    //      Return a list of selected items/options with the selected 'option' elements
    //      and chosen 'span' elements.
    //
    // chosen: Chosen
    //          The Chosen object

    var items    = []
    var options  = $(chosen.form_field).find('option:selected') || []
    var spans    = (chosen.is_multiple) ? $(chosen.container).find('.chosen-choices span'):
                                          $(chosen.container).find('.chosen-single span')

    for(var i = 0; i < options.length; i++)
        for(var j = 0; j < spans.length; j++)
            if($(spans[j]).text() == $(options[i]).text())
                items.push({span:spans[j],option:options[i]})

    return items
}

// Store the original 'chosen' method
var fn_chosen = $.fn.chosen

$.fn.extend({
 // summery:
 //  Extend the original 'chosen' method to support images
 chosen: function(params) {

    params = params || {}

    // Original behavior - use function.apply to preserve context
    var ret = fn_chosen.apply(this, arguments)

    // Process all select elements to attach event handlers
    // (change, hiding_dropdown and showing_dropdown)

    this.each(function() {

        var $this = $(this), chosen = $this.data('chosen')

        $this.on("chosen:hiding_dropdown", function(e, chosen){
            // summery
            //  Triggers when hidding dropdown, explain why:TODO.
            //
            // evt: Event
            //      The event object
            // _chosen: Object {chosen:Chosen}
            //      Contains the current instance of Chosen class

            var options       = getSelectedOptions(chosen.chosen)
            var rtl           = chosen.chosen.is_rtl
            var multiple      = chosen.chosen.is_multiple
            var html_template = params.html_template ||
                                (rtl && multiple ? '{text}' + fn_template : fn_template + '{text}')

            for(var i = 0; i < options.length; i++){
                prependTemplate(options[i].span, options[i].option, html_template, rtl, multiple)
            }
        })

        $this.on("chosen:showing_dropdown", function showing_dropdown(evt, chosen){
            // summery
            //    This function is triggered when the chosen instance dropdown list
            //    becomes visible. http://forwebonly.com/jquery-chosen-custom-events-and-how-to-use-them/
            //
            // evt: Event
            //      The event object
            // chosen: Object {chosen:Chosen}
            //      Contains the current instance of Chosen class

            var chosen        = chosen.chosen
            var options       = chosen.form_field.options || []
            var rtl           = chosen.is_rtl
            var html_template = params.html_template ||
                                rtl ? '{text}'+fn_template : fn_template+'{text}'

            var lis = $(chosen.container).find('.chosen-drop ul li:not(:has(img))')

            for(var i = 0; i < lis.length; i++){
                var li      = lis[i]
                var option  = $(options[i])
                var idx     = $(li).attr('data-option-array-index')

                /* correct option index */

                if (idx){
                  option = options[chosen.results_data[idx].options_index]
                  prependTemplate(li, option, html_template, rtl, true, 'chose-image-list')
                }

            }
        })

        $this.on("chosen:ready", function change(e, chosen){
            // summery:
            //  Trigger hide dropdown when ready.
            //  This never triggers. TODO: remove.
            $this.trigger('chosen:hiding_dropdown',chosen)
        })

        $this.on('chosen:filter', function(evt, chosen){
            // summery
            //  Support search, pending: https://github.com/harvesthq/chosen/pull/2373
          $this.trigger('chosen:showing_dropdown',{chosen:chosen.chosen})
        })

        // Finally, trigger hiding_dropdown on all select elements
        $this.trigger('chosen:hiding_dropdown',{chosen:chosen})
    })
 }
})


})(jQuery)

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});
var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      	return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
     	return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating.on('click', function() {
	$star_rating.siblings('input.rating-value').val($(this).data('rating'));
	return SetRatingStar();
});

SetRatingStar();

$(document).ready(function() {

});
/*! Lazy Load 2.0.0-rc.2 - MIT license - Copyright 2007-2019 Mika Tuupola */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});
// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [
			"jquery",
			"../version",
			"../keycode"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.extend( $.ui, { datepicker: { version: "1.12.1" } } );

var datepicker_instActive;

function datepicker_getZindex( elem ) {
	var position, value;
	while ( elem.length && elem[ 0 ] !== document ) {

		// Ignore z-index if position is set to a value where z-index is ignored by the browser
		// This makes behavior of this function consistent across browsers
		// WebKit always returns auto if the element is positioned
		position = elem.css( "position" );
		if ( position === "absolute" || position === "relative" || position === "fixed" ) {

			// IE returns 0 when zIndex is not specified
			// other browsers return a string
			// we ignore the case of nested elements with an explicit value of 0
			// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
			value = parseInt( elem.css( "zIndex" ), 10 );
			if ( !isNaN( value ) && value !== 0 ) {
				return value;
			}
		}
		elem = elem.parent();
	}

	return 0;
}
/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[ "" ] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: [ "January","February","March","April","May","June",
			"July","August","September","October","November","December" ], // Names of months for drop-down and formatting
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], // For formatting
		dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], // For formatting
		dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], // For formatting
		dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
		showAnim: "fadeIn", // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend( this._defaults, this.regional[ "" ] );
	this.regional.en = $.extend( true, {}, this.regional[ "" ] );
	this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
	this.dpDiv = datepicker_bindHover( $( "<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) );
}

$.extend( Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: function( settings ) {
		datepicker_extendRemove( this._defaults, settings || {} );
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: function( target, settings ) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = ( nodeName === "div" || nodeName === "span" );
		if ( !target.id ) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		}
		inst = this._newInst( $( target ), inline );
		inst.settings = $.extend( {}, settings || {} );
		if ( nodeName === "input" ) {
			this._connectDatepicker( target, inst );
		} else if ( inline ) {
			this._inlineDatepicker( target, inst );
		}
	},

	/* Create a new instance object. */
	_newInst: function( target, inline ) {
		var id = target[ 0 ].id.replace( /([^A-Za-z0-9_\-])/g, "\\\\$1" ); // escape jQuery meta chars
		return { id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: ( !inline ? this.dpDiv : // presentation div
			datepicker_bindHover( $( "<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) ) ) };
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function( target, inst ) {
		var input = $( target );
		inst.append = $( [] );
		inst.trigger = $( [] );
		if ( input.hasClass( this.markerClassName ) ) {
			return;
		}
		this._attachments( input, inst );
		input.addClass( this.markerClassName ).on( "keydown", this._doKeyDown ).
			on( "keypress", this._doKeyPress ).on( "keyup", this._doKeyUp );
		this._autoSize( inst );
		$.data( target, "datepicker", inst );

		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if ( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function( input, inst ) {
		var showOn, buttonText, buttonImage,
			appendText = this._get( inst, "appendText" ),
			isRTL = this._get( inst, "isRTL" );

		if ( inst.append ) {
			inst.append.remove();
		}
		if ( appendText ) {
			inst.append = $( "<span class='" + this._appendClass + "'>" + appendText + "</span>" );
			input[ isRTL ? "before" : "after" ]( inst.append );
		}

		input.off( "focus", this._showDatepicker );

		if ( inst.trigger ) {
			inst.trigger.remove();
		}

		showOn = this._get( inst, "showOn" );
		if ( showOn === "focus" || showOn === "both" ) { // pop-up date picker when in the marked field
			input.on( "focus", this._showDatepicker );
		}
		if ( showOn === "button" || showOn === "both" ) { // pop-up date picker when button clicked
			buttonText = this._get( inst, "buttonText" );
			buttonImage = this._get( inst, "buttonImage" );
			inst.trigger = $( this._get( inst, "buttonImageOnly" ) ?
				$( "<img/>" ).addClass( this._triggerClass ).
					attr( { src: buttonImage, alt: buttonText, title: buttonText } ) :
				$( "<button type='button'></button>" ).addClass( this._triggerClass ).
					html( !buttonImage ? buttonText : $( "<img/>" ).attr(
					{ src:buttonImage, alt:buttonText, title:buttonText } ) ) );
			input[ isRTL ? "before" : "after" ]( inst.trigger );
			inst.trigger.on( "click", function() {
				if ( $.datepicker._datepickerShowing && $.datepicker._lastInput === input[ 0 ] ) {
					$.datepicker._hideDatepicker();
				} else if ( $.datepicker._datepickerShowing && $.datepicker._lastInput !== input[ 0 ] ) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker( input[ 0 ] );
				} else {
					$.datepicker._showDatepicker( input[ 0 ] );
				}
				return false;
			} );
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function( inst ) {
		if ( this._get( inst, "autoSize" ) && !inst.inline ) {
			var findMax, max, maxI, i,
				date = new Date( 2009, 12 - 1, 20 ), // Ensure double digits
				dateFormat = this._get( inst, "dateFormat" );

			if ( dateFormat.match( /[DM]/ ) ) {
				findMax = function( names ) {
					max = 0;
					maxI = 0;
					for ( i = 0; i < names.length; i++ ) {
						if ( names[ i ].length > max ) {
							max = names[ i ].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth( findMax( this._get( inst, ( dateFormat.match( /MM/ ) ?
					"monthNames" : "monthNamesShort" ) ) ) );
				date.setDate( findMax( this._get( inst, ( dateFormat.match( /DD/ ) ?
					"dayNames" : "dayNamesShort" ) ) ) + 20 - date.getDay() );
			}
			inst.input.attr( "size", this._formatDate( inst, date ).length );
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function( target, inst ) {
		var divSpan = $( target );
		if ( divSpan.hasClass( this.markerClassName ) ) {
			return;
		}
		divSpan.addClass( this.markerClassName ).append( inst.dpDiv );
		$.data( target, "datepicker", inst );
		this._setDate( inst, this._getDefaultDate( inst ), true );
		this._updateDatepicker( inst );
		this._updateAlternate( inst );

		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if ( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}

		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: function( input, date, onSelect, settings, pos ) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if ( !inst ) {
			this.uuid += 1;
			id = "dp" + this.uuid;
			this._dialogInput = $( "<input type='text' id='" + id +
				"' style='position: absolute; top: -100px; width: 0px;'/>" );
			this._dialogInput.on( "keydown", this._doKeyDown );
			$( "body" ).append( this._dialogInput );
			inst = this._dialogInst = this._newInst( this._dialogInput, false );
			inst.settings = {};
			$.data( this._dialogInput[ 0 ], "datepicker", inst );
		}
		datepicker_extendRemove( inst.settings, settings || {} );
		date = ( date && date.constructor === Date ? this._formatDate( inst, date ) : date );
		this._dialogInput.val( date );

		this._pos = ( pos ? ( pos.length ? pos : [ pos.pageX, pos.pageY ] ) : null );
		if ( !this._pos ) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[ ( browserWidth / 2 ) - 100 + scrollX, ( browserHeight / 2 ) - 150 + scrollY ];
		}

		// Move input on screen for focus, but hidden behind dialog
		this._dialogInput.css( "left", ( this._pos[ 0 ] + 20 ) + "px" ).css( "top", this._pos[ 1 ] + "px" );
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass( this._dialogClass );
		this._showDatepicker( this._dialogInput[ 0 ] );
		if ( $.blockUI ) {
			$.blockUI( this.dpDiv );
		}
		$.data( this._dialogInput[ 0 ], "datepicker", inst );
		return this;
	},

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: function( target ) {
		var nodeName,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData( target, "datepicker" );
		if ( nodeName === "input" ) {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass( this.markerClassName ).
				off( "focus", this._showDatepicker ).
				off( "keydown", this._doKeyDown ).
				off( "keypress", this._doKeyPress ).
				off( "keyup", this._doKeyUp );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			$target.removeClass( this.markerClassName ).empty();
		}

		if ( datepicker_instActive === inst ) {
			datepicker_instActive = null;
		}
	},

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: function( target ) {
		var nodeName, inline,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if ( nodeName === "input" ) {
			target.disabled = false;
			inst.trigger.filter( "button" ).
				each( function() { this.disabled = false; } ).end().
				filter( "img" ).css( { opacity: "1.0", cursor: "" } );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			inline = $target.children( "." + this._inlineClass );
			inline.children().removeClass( "ui-state-disabled" );
			inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
				prop( "disabled", false );
		}
		this._disabledInputs = $.map( this._disabledInputs,
			function( value ) { return ( value === target ? null : value ); } ); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: function( target ) {
		var nodeName, inline,
			$target = $( target ),
			inst = $.data( target, "datepicker" );

		if ( !$target.hasClass( this.markerClassName ) ) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if ( nodeName === "input" ) {
			target.disabled = true;
			inst.trigger.filter( "button" ).
				each( function() { this.disabled = true; } ).end().
				filter( "img" ).css( { opacity: "0.5", cursor: "default" } );
		} else if ( nodeName === "div" || nodeName === "span" ) {
			inline = $target.children( "." + this._inlineClass );
			inline.children().addClass( "ui-state-disabled" );
			inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
				prop( "disabled", true );
		}
		this._disabledInputs = $.map( this._disabledInputs,
			function( value ) { return ( value === target ? null : value ); } ); // delete entry
		this._disabledInputs[ this._disabledInputs.length ] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: function( target ) {
		if ( !target ) {
			return false;
		}
		for ( var i = 0; i < this._disabledInputs.length; i++ ) {
			if ( this._disabledInputs[ i ] === target ) {
				return true;
			}
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: function( target ) {
		try {
			return $.data( target, "datepicker" );
		}
		catch ( err ) {
			throw "Missing instance data for this datepicker";
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: function( target, name, value ) {
		var settings, date, minDate, maxDate,
			inst = this._getInst( target );

		if ( arguments.length === 2 && typeof name === "string" ) {
			return ( name === "defaults" ? $.extend( {}, $.datepicker._defaults ) :
				( inst ? ( name === "all" ? $.extend( {}, inst.settings ) :
				this._get( inst, name ) ) : null ) );
		}

		settings = name || {};
		if ( typeof name === "string" ) {
			settings = {};
			settings[ name ] = value;
		}

		if ( inst ) {
			if ( this._curInst === inst ) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker( target, true );
			minDate = this._getMinMaxDate( inst, "min" );
			maxDate = this._getMinMaxDate( inst, "max" );
			datepicker_extendRemove( inst.settings, settings );

			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if ( minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined ) {
				inst.settings.minDate = this._formatDate( inst, minDate );
			}
			if ( maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined ) {
				inst.settings.maxDate = this._formatDate( inst, maxDate );
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker( target );
				} else {
					this._enableDatepicker( target );
				}
			}
			this._attachments( $( target ), inst );
			this._autoSize( inst );
			this._setDate( inst, date );
			this._updateAlternate( inst );
			this._updateDatepicker( inst );
		}
	},

	// Change method deprecated
	_changeDatepicker: function( target, name, value ) {
		this._optionDatepicker( target, name, value );
	},

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: function( target ) {
		var inst = this._getInst( target );
		if ( inst ) {
			this._updateDatepicker( inst );
		}
	},

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: function( target, date ) {
		var inst = this._getInst( target );
		if ( inst ) {
			this._setDate( inst, date );
			this._updateDatepicker( inst );
			this._updateAlternate( inst );
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: function( target, noDefault ) {
		var inst = this._getInst( target );
		if ( inst && !inst.inline ) {
			this._setDateFromField( inst, noDefault );
		}
		return ( inst ? this._getDate( inst ) : null );
	},

	/* Handle keystrokes. */
	_doKeyDown: function( event ) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst( event.target ),
			handled = true,
			isRTL = inst.dpDiv.is( ".ui-datepicker-rtl" );

		inst._keyEvent = true;
		if ( $.datepicker._datepickerShowing ) {
			switch ( event.keyCode ) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $( "td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv );
						if ( sel[ 0 ] ) {
							$.datepicker._selectDay( event.target, inst.selectedMonth, inst.selectedYear, sel[ 0 ] );
						}

						onSelect = $.datepicker._get( inst, "onSelect" );
						if ( onSelect ) {
							dateStr = $.datepicker._formatDate( inst );

							// Trigger custom callback
							onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
							-$.datepicker._get( inst, "stepBigMonths" ) :
							-$.datepicker._get( inst, "stepMonths" ) ), "M" );
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
							+$.datepicker._get( inst, "stepBigMonths" ) :
							+$.datepicker._get( inst, "stepMonths" ) ), "M" );
						break; // next month/year on page down/+ ctrl
				case 35: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._clearDate( event.target );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._gotoToday( event.target );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, ( isRTL ? +1 : -1 ), "D" );
						}
						handled = event.ctrlKey || event.metaKey;

						// -1 day on ctrl or command +left
						if ( event.originalEvent.altKey ) {
							$.datepicker._adjustDate( event.target, ( event.ctrlKey ?
								-$.datepicker._get( inst, "stepBigMonths" ) :
								-$.datepicker._get( inst, "stepMonths" ) ), "M" );
						}

						// next month/year on alt +left on Mac
						break;
				case 38: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, -7, "D" );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, ( isRTL ? -1 : +1 ), "D" );
						}
						handled = event.ctrlKey || event.metaKey;

						// +1 day on ctrl or command +right
						if ( event.originalEvent.altKey ) {
							$.datepicker._adjustDate( event.target, ( event.ctrlKey ?
								+$.datepicker._get( inst, "stepBigMonths" ) :
								+$.datepicker._get( inst, "stepMonths" ) ), "M" );
						}

						// next month/year on alt +right
						break;
				case 40: if ( event.ctrlKey || event.metaKey ) {
							$.datepicker._adjustDate( event.target, +7, "D" );
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if ( event.keyCode === 36 && event.ctrlKey ) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker( this );
		} else {
			handled = false;
		}

		if ( handled ) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function( event ) {
		var chars, chr,
			inst = $.datepicker._getInst( event.target );

		if ( $.datepicker._get( inst, "constrainInput" ) ) {
			chars = $.datepicker._possibleChars( $.datepicker._get( inst, "dateFormat" ) );
			chr = String.fromCharCode( event.charCode == null ? event.keyCode : event.charCode );
			return event.ctrlKey || event.metaKey || ( chr < " " || !chars || chars.indexOf( chr ) > -1 );
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function( event ) {
		var date,
			inst = $.datepicker._getInst( event.target );

		if ( inst.input.val() !== inst.lastVal ) {
			try {
				date = $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
					( inst.input ? inst.input.val() : null ),
					$.datepicker._getFormatConfig( inst ) );

				if ( date ) { // only if valid
					$.datepicker._setDateFromField( inst );
					$.datepicker._updateAlternate( inst );
					$.datepicker._updateDatepicker( inst );
				}
			}
			catch ( err ) {
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: function( input ) {
		input = input.target || input;
		if ( input.nodeName.toLowerCase() !== "input" ) { // find from button/image trigger
			input = $( "input", input.parentNode )[ 0 ];
		}

		if ( $.datepicker._isDisabledDatepicker( input ) || $.datepicker._lastInput === input ) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst( input );
		if ( $.datepicker._curInst && $.datepicker._curInst !== inst ) {
			$.datepicker._curInst.dpDiv.stop( true, true );
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[ 0 ] );
			}
		}

		beforeShow = $.datepicker._get( inst, "beforeShow" );
		beforeShowSettings = beforeShow ? beforeShow.apply( input, [ input, inst ] ) : {};
		if ( beforeShowSettings === false ) {
			return;
		}
		datepicker_extendRemove( inst.settings, beforeShowSettings );

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField( inst );

		if ( $.datepicker._inDialog ) { // hide cursor
			input.value = "";
		}
		if ( !$.datepicker._pos ) { // position below input
			$.datepicker._pos = $.datepicker._findPos( input );
			$.datepicker._pos[ 1 ] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$( input ).parents().each( function() {
			isFixed |= $( this ).css( "position" ) === "fixed";
			return !isFixed;
		} );

		offset = { left: $.datepicker._pos[ 0 ], top: $.datepicker._pos[ 1 ] };
		$.datepicker._pos = null;

		//to avoid flashes on Firefox
		inst.dpDiv.empty();

		// determine sizing offscreen
		inst.dpDiv.css( { position: "absolute", display: "block", top: "-1000px" } );
		$.datepicker._updateDatepicker( inst );

		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset( inst, offset, isFixed );
		inst.dpDiv.css( { position: ( $.datepicker._inDialog && $.blockUI ?
			"static" : ( isFixed ? "fixed" : "absolute" ) ), display: "none",
			left: offset.left + "px", top: offset.top + "px" } );

		if ( !inst.inline ) {
			showAnim = $.datepicker._get( inst, "showAnim" );
			duration = $.datepicker._get( inst, "duration" );
			inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show( showAnim, $.datepicker._get( inst, "showOptions" ), duration );
			} else {
				inst.dpDiv[ showAnim || "show" ]( showAnim ? duration : null );
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.trigger( "focus" );
			}

			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function( inst ) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		datepicker_instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append( this._generateHTML( inst ) );
		this._attachHandlers( inst );

		var origyearshtml,
			numMonths = this._getNumberOfMonths( inst ),
			cols = numMonths[ 1 ],
			width = 17,
			activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

		if ( activeCell.length > 0 ) {
			datepicker_handleMouseover.apply( activeCell.get( 0 ) );
		}

		inst.dpDiv.removeClass( "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4" ).width( "" );
		if ( cols > 1 ) {
			inst.dpDiv.addClass( "ui-datepicker-multi-" + cols ).css( "width", ( width * cols ) + "em" );
		}
		inst.dpDiv[ ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ? "add" : "remove" ) +
			"Class" ]( "ui-datepicker-multi" );
		inst.dpDiv[ ( this._get( inst, "isRTL" ) ? "add" : "remove" ) +
			"Class" ]( "ui-datepicker-rtl" );

		if ( inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.trigger( "focus" );
		}

		// Deffered render of the years select (to avoid flashes on Firefox)
		if ( inst.yearshtml ) {
			origyearshtml = inst.yearshtml;
			setTimeout( function() {

				//assure that inst.yearshtml didn't change.
				if ( origyearshtml === inst.yearshtml && inst.yearshtml ) {
					inst.dpDiv.find( "select.ui-datepicker-year:first" ).replaceWith( inst.yearshtml );
				}
				origyearshtml = inst.yearshtml = null;
			}, 0 );
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function( inst, offset, isFixed ) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + ( isFixed ? 0 : $( document ).scrollLeft() ),
			viewHeight = document.documentElement.clientHeight + ( isFixed ? 0 : $( document ).scrollTop() );

		offset.left -= ( this._get( inst, "isRTL" ) ? ( dpWidth - inputWidth ) : 0 );
		offset.left -= ( isFixed && offset.left === inst.input.offset().left ) ? $( document ).scrollLeft() : 0;
		offset.top -= ( isFixed && offset.top === ( inst.input.offset().top + inputHeight ) ) ? $( document ).scrollTop() : 0;

		// Now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min( offset.left, ( offset.left + dpWidth > viewWidth && viewWidth > dpWidth ) ?
			Math.abs( offset.left + dpWidth - viewWidth ) : 0 );
		offset.top -= Math.min( offset.top, ( offset.top + dpHeight > viewHeight && viewHeight > dpHeight ) ?
			Math.abs( dpHeight + inputHeight ) : 0 );

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function( obj ) {
		var position,
			inst = this._getInst( obj ),
			isRTL = this._get( inst, "isRTL" );

		while ( obj && ( obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden( obj ) ) ) {
			obj = obj[ isRTL ? "previousSibling" : "nextSibling" ];
		}

		position = $( obj ).offset();
		return [ position.left, position.top ];
	},

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: function( input ) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if ( !inst || ( input && inst !== $.data( input, "datepicker" ) ) ) {
			return;
		}

		if ( this._datepickerShowing ) {
			showAnim = this._get( inst, "showAnim" );
			duration = this._get( inst, "duration" );
			postProcess = function() {
				$.datepicker._tidyDialog( inst );
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide( showAnim, $.datepicker._get( inst, "showOptions" ), duration, postProcess );
			} else {
				inst.dpDiv[ ( showAnim === "slideDown" ? "slideUp" :
					( showAnim === "fadeIn" ? "fadeOut" : "hide" ) ) ]( ( showAnim ? duration : null ), postProcess );
			}

			if ( !showAnim ) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get( inst, "onClose" );
			if ( onClose ) {
				onClose.apply( ( inst.input ? inst.input[ 0 ] : null ), [ ( inst.input ? inst.input.val() : "" ), inst ] );
			}

			this._lastInput = null;
			if ( this._inDialog ) {
				this._dialogInput.css( { position: "absolute", left: "0", top: "-100px" } );
				if ( $.blockUI ) {
					$.unblockUI();
					$( "body" ).append( this.dpDiv );
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function( inst ) {
		inst.dpDiv.removeClass( this._dialogClass ).off( ".ui-datepicker-calendar" );
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function( event ) {
		if ( !$.datepicker._curInst ) {
			return;
		}

		var $target = $( event.target ),
			inst = $.datepicker._getInst( $target[ 0 ] );

		if ( ( ( $target[ 0 ].id !== $.datepicker._mainDivId &&
				$target.parents( "#" + $.datepicker._mainDivId ).length === 0 &&
				!$target.hasClass( $.datepicker.markerClassName ) &&
				!$target.closest( "." + $.datepicker._triggerClass ).length &&
				$.datepicker._datepickerShowing && !( $.datepicker._inDialog && $.blockUI ) ) ) ||
			( $target.hasClass( $.datepicker.markerClassName ) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function( id, offset, period ) {
		var target = $( id ),
			inst = this._getInst( target[ 0 ] );

		if ( this._isDisabledDatepicker( target[ 0 ] ) ) {
			return;
		}
		this._adjustInstDate( inst, offset +
			( period === "M" ? this._get( inst, "showCurrentAtPos" ) : 0 ), // undo positioning
			period );
		this._updateDatepicker( inst );
	},

	/* Action for current link. */
	_gotoToday: function( id ) {
		var date,
			target = $( id ),
			inst = this._getInst( target[ 0 ] );

		if ( this._get( inst, "gotoCurrent" ) && inst.currentDay ) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange( inst );
		this._adjustDate( target );
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function( id, select, period ) {
		var target = $( id ),
			inst = this._getInst( target[ 0 ] );

		inst[ "selected" + ( period === "M" ? "Month" : "Year" ) ] =
		inst[ "draw" + ( period === "M" ? "Month" : "Year" ) ] =
			parseInt( select.options[ select.selectedIndex ].value, 10 );

		this._notifyChange( inst );
		this._adjustDate( target );
	},

	/* Action for selecting a day. */
	_selectDay: function( id, month, year, td ) {
		var inst,
			target = $( id );

		if ( $( td ).hasClass( this._unselectableClass ) || this._isDisabledDatepicker( target[ 0 ] ) ) {
			return;
		}

		inst = this._getInst( target[ 0 ] );
		inst.selectedDay = inst.currentDay = $( "a", td ).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate( id, this._formatDate( inst,
			inst.currentDay, inst.currentMonth, inst.currentYear ) );
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function( id ) {
		var target = $( id );
		this._selectDate( target, "" );
	},

	/* Update the input field with the selected date. */
	_selectDate: function( id, dateStr ) {
		var onSelect,
			target = $( id ),
			inst = this._getInst( target[ 0 ] );

		dateStr = ( dateStr != null ? dateStr : this._formatDate( inst ) );
		if ( inst.input ) {
			inst.input.val( dateStr );
		}
		this._updateAlternate( inst );

		onSelect = this._get( inst, "onSelect" );
		if ( onSelect ) {
			onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );  // trigger custom callback
		} else if ( inst.input ) {
			inst.input.trigger( "change" ); // fire the change event
		}

		if ( inst.inline ) {
			this._updateDatepicker( inst );
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[ 0 ];
			if ( typeof( inst.input[ 0 ] ) !== "object" ) {
				inst.input.trigger( "focus" ); // restore focus
			}
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function( inst ) {
		var altFormat, date, dateStr,
			altField = this._get( inst, "altField" );

		if ( altField ) { // update alternate field too
			altFormat = this._get( inst, "altFormat" ) || this._get( inst, "dateFormat" );
			date = this._getDate( inst );
			dateStr = this.formatDate( altFormat, date, this._getFormatConfig( inst ) );
			$( altField ).val( dateStr );
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: function( date ) {
		var day = date.getDay();
		return [ ( day > 0 && day < 6 ), "" ];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: function( date ) {
		var time,
			checkDate = new Date( date.getTime() );

		// Find Thursday of this week starting on Monday
		checkDate.setDate( checkDate.getDate() + 4 - ( checkDate.getDay() || 7 ) );

		time = checkDate.getTime();
		checkDate.setMonth( 0 ); // Compare with Jan 1
		checkDate.setDate( 1 );
		return Math.floor( Math.round( ( time - checkDate ) / 86400000 ) / 7 ) + 1;
	},

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: function( format, value, settings ) {
		if ( format == null || value == null ) {
			throw "Invalid arguments";
		}

		value = ( typeof value === "object" ? value.toString() : value + "" );
		if ( value === "" ) {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = ( settings ? settings.shortYearCutoff : null ) || this._defaults.shortYearCutoff,
			shortYearCutoff = ( typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt( shortYearCutoffTemp, 10 ) ),
			dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
			dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
			monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
			monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			},

			// Extract a number from the string value
			getNumber = function( match ) {
				var isDoubled = lookAhead( match ),
					size = ( match === "@" ? 14 : ( match === "!" ? 20 :
					( match === "y" && isDoubled ? 4 : ( match === "o" ? 3 : 2 ) ) ) ),
					minSize = ( match === "y" ? size : 1 ),
					digits = new RegExp( "^\\d{" + minSize + "," + size + "}" ),
					num = value.substring( iValue ).match( digits );
				if ( !num ) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[ 0 ].length;
				return parseInt( num[ 0 ], 10 );
			},

			// Extract a name from the string value and convert to an index
			getName = function( match, shortNames, longNames ) {
				var index = -1,
					names = $.map( lookAhead( match ) ? longNames : shortNames, function( v, k ) {
						return [ [ k, v ] ];
					} ).sort( function( a, b ) {
						return -( a[ 1 ].length - b[ 1 ].length );
					} );

				$.each( names, function( i, pair ) {
					var name = pair[ 1 ];
					if ( value.substr( iValue, name.length ).toLowerCase() === name.toLowerCase() ) {
						index = pair[ 0 ];
						iValue += name.length;
						return false;
					}
				} );
				if ( index !== -1 ) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},

			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if ( value.charAt( iValue ) !== format.charAt( iFormat ) ) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
			if ( literal ) {
				if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch ( format.charAt( iFormat ) ) {
					case "d":
						day = getNumber( "d" );
						break;
					case "D":
						getName( "D", dayNamesShort, dayNames );
						break;
					case "o":
						doy = getNumber( "o" );
						break;
					case "m":
						month = getNumber( "m" );
						break;
					case "M":
						month = getName( "M", monthNamesShort, monthNames );
						break;
					case "y":
						year = getNumber( "y" );
						break;
					case "@":
						date = new Date( getNumber( "@" ) );
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date( ( getNumber( "!" ) - this._ticksTo1970 ) / 10000 );
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if ( lookAhead( "'" ) ) {
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if ( iValue < value.length ) {
			extra = value.substr( iValue );
			if ( !/^\s+/.test( extra ) ) {
				throw "Extra/unparsed characters found in date: " + extra;
			}
		}

		if ( year === -1 ) {
			year = new Date().getFullYear();
		} else if ( year < 100 ) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				( year <= shortYearCutoff ? 0 : -100 );
		}

		if ( doy > -1 ) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth( year, month - 1 );
				if ( day <= dim ) {
					break;
				}
				month++;
				day -= dim;
			} while ( true );
		}

		date = this._daylightSavingAdjust( new Date( year, month - 1, day ) );
		if ( date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day ) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: ( ( ( 1970 - 1 ) * 365 + Math.floor( 1970 / 4 ) - Math.floor( 1970 / 100 ) +
		Math.floor( 1970 / 400 ) ) * 24 * 60 * 60 * 10000000 ),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: function( format, date, settings ) {
		if ( !date ) {
			return "";
		}

		var iFormat,
			dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
			dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
			monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
			monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			},

			// Format a number, with leading zero if necessary
			formatNumber = function( match, value, len ) {
				var num = "" + value;
				if ( lookAhead( match ) ) {
					while ( num.length < len ) {
						num = "0" + num;
					}
				}
				return num;
			},

			// Format a name, short or long as requested
			formatName = function( match, value, shortNames, longNames ) {
				return ( lookAhead( match ) ? longNames[ value ] : shortNames[ value ] );
			},
			output = "",
			literal = false;

		if ( date ) {
			for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
				if ( literal ) {
					if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
						literal = false;
					} else {
						output += format.charAt( iFormat );
					}
				} else {
					switch ( format.charAt( iFormat ) ) {
						case "d":
							output += formatNumber( "d", date.getDate(), 2 );
							break;
						case "D":
							output += formatName( "D", date.getDay(), dayNamesShort, dayNames );
							break;
						case "o":
							output += formatNumber( "o",
								Math.round( ( new Date( date.getFullYear(), date.getMonth(), date.getDate() ).getTime() - new Date( date.getFullYear(), 0, 0 ).getTime() ) / 86400000 ), 3 );
							break;
						case "m":
							output += formatNumber( "m", date.getMonth() + 1, 2 );
							break;
						case "M":
							output += formatName( "M", date.getMonth(), monthNamesShort, monthNames );
							break;
						case "y":
							output += ( lookAhead( "y" ) ? date.getFullYear() :
								( date.getFullYear() % 100 < 10 ? "0" : "" ) + date.getFullYear() % 100 );
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if ( lookAhead( "'" ) ) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt( iFormat );
					}
				}
			}
		}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function( format ) {
		var iFormat,
			chars = "",
			literal = false,

			// Check whether a format character is doubled
			lookAhead = function( match ) {
				var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
				if ( matches ) {
					iFormat++;
				}
				return matches;
			};

		for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
			if ( literal ) {
				if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
					literal = false;
				} else {
					chars += format.charAt( iFormat );
				}
			} else {
				switch ( format.charAt( iFormat ) ) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if ( lookAhead( "'" ) ) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt( iFormat );
				}
			}
		}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function( inst, name ) {
		return inst.settings[ name ] !== undefined ?
			inst.settings[ name ] : this._defaults[ name ];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function( inst, noDefault ) {
		if ( inst.input.val() === inst.lastVal ) {
			return;
		}

		var dateFormat = this._get( inst, "dateFormat" ),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate( inst ),
			date = defaultDate,
			settings = this._getFormatConfig( inst );

		try {
			date = this.parseDate( dateFormat, dates, settings ) || defaultDate;
		} catch ( event ) {
			dates = ( noDefault ? "" : dates );
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = ( dates ? date.getDate() : 0 );
		inst.currentMonth = ( dates ? date.getMonth() : 0 );
		inst.currentYear = ( dates ? date.getFullYear() : 0 );
		this._adjustInstDate( inst );
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function( inst ) {
		return this._restrictMinMax( inst,
			this._determineDate( inst, this._get( inst, "defaultDate" ), new Date() ) );
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function( inst, date, defaultDate ) {
		var offsetNumeric = function( offset ) {
				var date = new Date();
				date.setDate( date.getDate() + offset );
				return date;
			},
			offsetString = function( offset ) {
				try {
					return $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
						offset, $.datepicker._getFormatConfig( inst ) );
				}
				catch ( e ) {

					// Ignore
				}

				var date = ( offset.toLowerCase().match( /^c/ ) ?
					$.datepicker._getDate( inst ) : null ) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec( offset );

				while ( matches ) {
					switch ( matches[ 2 ] || "d" ) {
						case "d" : case "D" :
							day += parseInt( matches[ 1 ], 10 ); break;
						case "w" : case "W" :
							day += parseInt( matches[ 1 ], 10 ) * 7; break;
						case "m" : case "M" :
							month += parseInt( matches[ 1 ], 10 );
							day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
							break;
						case "y": case "Y" :
							year += parseInt( matches[ 1 ], 10 );
							day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
							break;
					}
					matches = pattern.exec( offset );
				}
				return new Date( year, month, day );
			},
			newDate = ( date == null || date === "" ? defaultDate : ( typeof date === "string" ? offsetString( date ) :
				( typeof date === "number" ? ( isNaN( date ) ? defaultDate : offsetNumeric( date ) ) : new Date( date.getTime() ) ) ) );

		newDate = ( newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate );
		if ( newDate ) {
			newDate.setHours( 0 );
			newDate.setMinutes( 0 );
			newDate.setSeconds( 0 );
			newDate.setMilliseconds( 0 );
		}
		return this._daylightSavingAdjust( newDate );
	},

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: function( date ) {
		if ( !date ) {
			return null;
		}
		date.setHours( date.getHours() > 12 ? date.getHours() + 2 : 0 );
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function( inst, date, noChange ) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax( inst, this._determineDate( inst, date, new Date() ) );

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ( ( origMonth !== inst.selectedMonth || origYear !== inst.selectedYear ) && !noChange ) {
			this._notifyChange( inst );
		}
		this._adjustInstDate( inst );
		if ( inst.input ) {
			inst.input.val( clear ? "" : this._formatDate( inst ) );
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function( inst ) {
		var startDate = ( !inst.currentYear || ( inst.input && inst.input.val() === "" ) ? null :
			this._daylightSavingAdjust( new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function( inst ) {
		var stepMonths = this._get( inst, "stepMonths" ),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find( "[data-handler]" ).map( function() {
			var handler = {
				prev: function() {
					$.datepicker._adjustDate( id, -stepMonths, "M" );
				},
				next: function() {
					$.datepicker._adjustDate( id, +stepMonths, "M" );
				},
				hide: function() {
					$.datepicker._hideDatepicker();
				},
				today: function() {
					$.datepicker._gotoToday( id );
				},
				selectDay: function() {
					$.datepicker._selectDay( id, +this.getAttribute( "data-month" ), +this.getAttribute( "data-year" ), this );
					return false;
				},
				selectMonth: function() {
					$.datepicker._selectMonthYear( id, this, "M" );
					return false;
				},
				selectYear: function() {
					$.datepicker._selectMonthYear( id, this, "Y" );
					return false;
				}
			};
			$( this ).on( this.getAttribute( "data-event" ), handler[ this.getAttribute( "data-handler" ) ] );
		} );
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function( inst ) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date( tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() ) ), // clear time
			isRTL = this._get( inst, "isRTL" ),
			showButtonPanel = this._get( inst, "showButtonPanel" ),
			hideIfNoPrevNext = this._get( inst, "hideIfNoPrevNext" ),
			navigationAsDateFormat = this._get( inst, "navigationAsDateFormat" ),
			numMonths = this._getNumberOfMonths( inst ),
			showCurrentAtPos = this._get( inst, "showCurrentAtPos" ),
			stepMonths = this._get( inst, "stepMonths" ),
			isMultiMonth = ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ),
			currentDate = this._daylightSavingAdjust( ( !inst.currentDay ? new Date( 9999, 9, 9 ) :
				new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) ),
			minDate = this._getMinMaxDate( inst, "min" ),
			maxDate = this._getMinMaxDate( inst, "max" ),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if ( drawMonth < 0 ) {
			drawMonth += 12;
			drawYear--;
		}
		if ( maxDate ) {
			maxDraw = this._daylightSavingAdjust( new Date( maxDate.getFullYear(),
				maxDate.getMonth() - ( numMonths[ 0 ] * numMonths[ 1 ] ) + 1, maxDate.getDate() ) );
			maxDraw = ( minDate && maxDraw < minDate ? minDate : maxDraw );
			while ( this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 ) ) > maxDraw ) {
				drawMonth--;
				if ( drawMonth < 0 ) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get( inst, "prevText" );
		prevText = ( !navigationAsDateFormat ? prevText : this.formatDate( prevText,
			this._daylightSavingAdjust( new Date( drawYear, drawMonth - stepMonths, 1 ) ),
			this._getFormatConfig( inst ) ) );

		prev = ( this._canAdjustMonth( inst, -1, drawYear, drawMonth ) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" :
			( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" ) );

		nextText = this._get( inst, "nextText" );
		nextText = ( !navigationAsDateFormat ? nextText : this.formatDate( nextText,
			this._daylightSavingAdjust( new Date( drawYear, drawMonth + stepMonths, 1 ) ),
			this._getFormatConfig( inst ) ) );

		next = ( this._canAdjustMonth( inst, +1, drawYear, drawMonth ) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" :
			( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" ) );

		currentText = this._get( inst, "currentText" );
		gotoDate = ( this._get( inst, "gotoCurrent" ) && inst.currentDay ? currentDate : today );
		currentText = ( !navigationAsDateFormat ? currentText :
			this.formatDate( currentText, gotoDate, this._getFormatConfig( inst ) ) );

		controls = ( !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get( inst, "closeText" ) + "</button>" : "" );

		buttonPanel = ( showButtonPanel ) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ( isRTL ? controls : "" ) +
			( this._isInRange( inst, gotoDate ) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "" ) + ( isRTL ? "" : controls ) + "</div>" : "";

		firstDay = parseInt( this._get( inst, "firstDay" ), 10 );
		firstDay = ( isNaN( firstDay ) ? 0 : firstDay );

		showWeek = this._get( inst, "showWeek" );
		dayNames = this._get( inst, "dayNames" );
		dayNamesMin = this._get( inst, "dayNamesMin" );
		monthNames = this._get( inst, "monthNames" );
		monthNamesShort = this._get( inst, "monthNamesShort" );
		beforeShowDay = this._get( inst, "beforeShowDay" );
		showOtherMonths = this._get( inst, "showOtherMonths" );
		selectOtherMonths = this._get( inst, "selectOtherMonths" );
		defaultDate = this._getDefaultDate( inst );
		html = "";

		for ( row = 0; row < numMonths[ 0 ]; row++ ) {
			group = "";
			this.maxRows = 4;
			for ( col = 0; col < numMonths[ 1 ]; col++ ) {
				selectedDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, inst.selectedDay ) );
				cornerClass = " ui-corner-all";
				calender = "";
				if ( isMultiMonth ) {
					calender += "<div class='ui-datepicker-group";
					if ( numMonths[ 1 ] > 1 ) {
						switch ( col ) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + ( isRTL ? "right" : "left" ); break;
							case numMonths[ 1 ] - 1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + ( isRTL ? "left" : "right" ); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					( /all|left/.test( cornerClass ) && row === 0 ? ( isRTL ? next : prev ) : "" ) +
					( /all|right/.test( cornerClass ) && row === 0 ? ( isRTL ? prev : next ) : "" ) +
					this._generateMonthYearHeader( inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort ) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = ( showWeek ? "<th class='ui-datepicker-week-col'>" + this._get( inst, "weekHeader" ) + "</th>" : "" );
				for ( dow = 0; dow < 7; dow++ ) { // days of the week
					day = ( dow + firstDay ) % 7;
					thead += "<th scope='col'" + ( ( dow + firstDay + 6 ) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "" ) + ">" +
						"<span title='" + dayNames[ day ] + "'>" + dayNamesMin[ day ] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth( drawYear, drawMonth );
				if ( drawYear === inst.selectedYear && drawMonth === inst.selectedMonth ) {
					inst.selectedDay = Math.min( inst.selectedDay, daysInMonth );
				}
				leadDays = ( this._getFirstDayOfMonth( drawYear, drawMonth ) - firstDay + 7 ) % 7;
				curRows = Math.ceil( ( leadDays + daysInMonth ) / 7 ); // calculate the number of rows to generate
				numRows = ( isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows ); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 - leadDays ) );
				for ( dRow = 0; dRow < numRows; dRow++ ) { // create date picker rows
					calender += "<tr>";
					tbody = ( !showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get( inst, "calculateWeek" )( printDate ) + "</td>" );
					for ( dow = 0; dow < 7; dow++ ) { // create date picker days
						daySettings = ( beforeShowDay ?
							beforeShowDay.apply( ( inst.input ? inst.input[ 0 ] : null ), [ printDate ] ) : [ true, "" ] );
						otherMonth = ( printDate.getMonth() !== drawMonth );
						unselectable = ( otherMonth && !selectOtherMonths ) || !daySettings[ 0 ] ||
							( minDate && printDate < minDate ) || ( maxDate && printDate > maxDate );
						tbody += "<td class='" +
							( ( dow + firstDay + 6 ) % 7 >= 5 ? " ui-datepicker-week-end" : "" ) + // highlight weekends
							( otherMonth ? " ui-datepicker-other-month" : "" ) + // highlight days from other months
							( ( printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent ) || // user pressed key
							( defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ) ?

							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "" ) + // highlight selected day
							( unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "" ) +  // highlight unselectable days
							( otherMonth && !showOtherMonths ? "" : " " + daySettings[ 1 ] + // highlight custom dates
							( printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "" ) + // highlight selected day
							( printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "" ) ) + "'" + // highlight today (if different)
							( ( !otherMonth || showOtherMonths ) && daySettings[ 2 ] ? " title='" + daySettings[ 2 ].replace( /'/g, "&#39;" ) + "'" : "" ) + // cell title
							( unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'" ) + ">" + // actions
							( otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
							( unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
							( printDate.getTime() === today.getTime() ? " ui-state-highlight" : "" ) +
							( printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "" ) + // highlight selected day
							( otherMonth ? " ui-priority-secondary" : "" ) + // distinguish dates from other months
							"' href='#'>" + printDate.getDate() + "</a>" ) ) + "</td>"; // display selectable date
						printDate.setDate( printDate.getDate() + 1 );
						printDate = this._daylightSavingAdjust( printDate );
					}
					calender += tbody + "</tr>";
				}
				drawMonth++;
				if ( drawMonth > 11 ) {
					drawMonth = 0;
					drawYear++;
				}
				calender += "</tbody></table>" + ( isMultiMonth ? "</div>" +
							( ( numMonths[ 0 ] > 0 && col === numMonths[ 1 ] - 1 ) ? "<div class='ui-datepicker-row-break'></div>" : "" ) : "" );
				group += calender;
			}
			html += group;
		}
		html += buttonPanel;
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function( inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort ) {

		var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
			changeMonth = this._get( inst, "changeMonth" ),
			changeYear = this._get( inst, "changeYear" ),
			showMonthAfterYear = this._get( inst, "showMonthAfterYear" ),
			html = "<div class='ui-datepicker-title'>",
			monthHtml = "";

		// Month selection
		if ( secondary || !changeMonth ) {
			monthHtml += "<span class='ui-datepicker-month'>" + monthNames[ drawMonth ] + "</span>";
		} else {
			inMinYear = ( minDate && minDate.getFullYear() === drawYear );
			inMaxYear = ( maxDate && maxDate.getFullYear() === drawYear );
			monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
			for ( month = 0; month < 12; month++ ) {
				if ( ( !inMinYear || month >= minDate.getMonth() ) && ( !inMaxYear || month <= maxDate.getMonth() ) ) {
					monthHtml += "<option value='" + month + "'" +
						( month === drawMonth ? " selected='selected'" : "" ) +
						">" + monthNamesShort[ month ] + "</option>";
				}
			}
			monthHtml += "</select>";
		}

		if ( !showMonthAfterYear ) {
			html += monthHtml + ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" );
		}

		// Year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = "";
			if ( secondary || !changeYear ) {
				html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
			} else {

				// determine range of years to display
				years = this._get( inst, "yearRange" ).split( ":" );
				thisYear = new Date().getFullYear();
				determineYear = function( value ) {
					var year = ( value.match( /c[+\-].*/ ) ? drawYear + parseInt( value.substring( 1 ), 10 ) :
						( value.match( /[+\-].*/ ) ? thisYear + parseInt( value, 10 ) :
						parseInt( value, 10 ) ) );
					return ( isNaN( year ) ? thisYear : year );
				};
				year = determineYear( years[ 0 ] );
				endYear = Math.max( year, determineYear( years[ 1 ] || "" ) );
				year = ( minDate ? Math.max( year, minDate.getFullYear() ) : year );
				endYear = ( maxDate ? Math.min( endYear, maxDate.getFullYear() ) : endYear );
				inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
				for ( ; year <= endYear; year++ ) {
					inst.yearshtml += "<option value='" + year + "'" +
						( year === drawYear ? " selected='selected'" : "" ) +
						">" + year + "</option>";
				}
				inst.yearshtml += "</select>";

				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}

		html += this._get( inst, "yearSuffix" );
		if ( showMonthAfterYear ) {
			html += ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" ) + monthHtml;
		}
		html += "</div>"; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function( inst, offset, period ) {
		var year = inst.selectedYear + ( period === "Y" ? offset : 0 ),
			month = inst.selectedMonth + ( period === "M" ? offset : 0 ),
			day = Math.min( inst.selectedDay, this._getDaysInMonth( year, month ) ) + ( period === "D" ? offset : 0 ),
			date = this._restrictMinMax( inst, this._daylightSavingAdjust( new Date( year, month, day ) ) );

		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if ( period === "M" || period === "Y" ) {
			this._notifyChange( inst );
		}
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function( inst, date ) {
		var minDate = this._getMinMaxDate( inst, "min" ),
			maxDate = this._getMinMaxDate( inst, "max" ),
			newDate = ( minDate && date < minDate ? minDate : date );
		return ( maxDate && newDate > maxDate ? maxDate : newDate );
	},

	/* Notify change of month/year. */
	_notifyChange: function( inst ) {
		var onChange = this._get( inst, "onChangeMonthYear" );
		if ( onChange ) {
			onChange.apply( ( inst.input ? inst.input[ 0 ] : null ),
				[ inst.selectedYear, inst.selectedMonth + 1, inst ] );
		}
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function( inst ) {
		var numMonths = this._get( inst, "numberOfMonths" );
		return ( numMonths == null ? [ 1, 1 ] : ( typeof numMonths === "number" ? [ 1, numMonths ] : numMonths ) );
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function( inst, minMax ) {
		return this._determineDate( inst, this._get( inst, minMax + "Date" ), null );
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function( year, month ) {
		return 32 - this._daylightSavingAdjust( new Date( year, month, 32 ) ).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function( year, month ) {
		return new Date( year, month, 1 ).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function( inst, offset, curYear, curMonth ) {
		var numMonths = this._getNumberOfMonths( inst ),
			date = this._daylightSavingAdjust( new Date( curYear,
			curMonth + ( offset < 0 ? offset : numMonths[ 0 ] * numMonths[ 1 ] ), 1 ) );

		if ( offset < 0 ) {
			date.setDate( this._getDaysInMonth( date.getFullYear(), date.getMonth() ) );
		}
		return this._isInRange( inst, date );
	},

	/* Is the given date in the accepted range? */
	_isInRange: function( inst, date ) {
		var yearSplit, currentYear,
			minDate = this._getMinMaxDate( inst, "min" ),
			maxDate = this._getMinMaxDate( inst, "max" ),
			minYear = null,
			maxYear = null,
			years = this._get( inst, "yearRange" );
			if ( years ) {
				yearSplit = years.split( ":" );
				currentYear = new Date().getFullYear();
				minYear = parseInt( yearSplit[ 0 ], 10 );
				maxYear = parseInt( yearSplit[ 1 ], 10 );
				if ( yearSplit[ 0 ].match( /[+\-].*/ ) ) {
					minYear += currentYear;
				}
				if ( yearSplit[ 1 ].match( /[+\-].*/ ) ) {
					maxYear += currentYear;
				}
			}

		return ( ( !minDate || date.getTime() >= minDate.getTime() ) &&
			( !maxDate || date.getTime() <= maxDate.getTime() ) &&
			( !minYear || date.getFullYear() >= minYear ) &&
			( !maxYear || date.getFullYear() <= maxYear ) );
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function( inst ) {
		var shortYearCutoff = this._get( inst, "shortYearCutoff" );
		shortYearCutoff = ( typeof shortYearCutoff !== "string" ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt( shortYearCutoff, 10 ) );
		return { shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get( inst, "dayNamesShort" ), dayNames: this._get( inst, "dayNames" ),
			monthNamesShort: this._get( inst, "monthNamesShort" ), monthNames: this._get( inst, "monthNames" ) };
	},

	/* Format the given date for display. */
	_formatDate: function( inst, day, month, year ) {
		if ( !day ) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = ( day ? ( typeof day === "object" ? day :
			this._daylightSavingAdjust( new Date( year, month, day ) ) ) :
			this._daylightSavingAdjust( new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
		return this.formatDate( this._get( inst, "dateFormat" ), date, this._getFormatConfig( inst ) );
	}
} );

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function datepicker_bindHover( dpDiv ) {
	var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	return dpDiv.on( "mouseout", selector, function() {
			$( this ).removeClass( "ui-state-hover" );
			if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
				$( this ).removeClass( "ui-datepicker-prev-hover" );
			}
			if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
				$( this ).removeClass( "ui-datepicker-next-hover" );
			}
		} )
		.on( "mouseover", selector, datepicker_handleMouseover );
}

function datepicker_handleMouseover() {
	if ( !$.datepicker._isDisabledDatepicker( datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[ 0 ] : datepicker_instActive.input[ 0 ] ) ) {
		$( this ).parents( ".ui-datepicker-calendar" ).find( "a" ).removeClass( "ui-state-hover" );
		$( this ).addClass( "ui-state-hover" );
		if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
			$( this ).addClass( "ui-datepicker-prev-hover" );
		}
		if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
			$( this ).addClass( "ui-datepicker-next-hover" );
		}
	}
}

/* jQuery extend now ignores nulls! */
function datepicker_extendRemove( target, props ) {
	$.extend( target, props );
	for ( var name in props ) {
		if ( props[ name ] == null ) {
			target[ name ] = props[ name ];
		}
	}
	return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function( options ) {

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if ( !$.datepicker.initialized ) {
		$( document ).on( "mousedown", $.datepicker._checkExternalClick );
		$.datepicker.initialized = true;
	}

	/* Append datepicker main container to body if not exist. */
	if ( $( "#" + $.datepicker._mainDivId ).length === 0 ) {
		$( "body" ).append( $.datepicker.dpDiv );
	}

	var otherArgs = Array.prototype.slice.call( arguments, 1 );
	if ( typeof options === "string" && ( options === "isDisabled" || options === "getDate" || options === "widget" ) ) {
		return $.datepicker[ "_" + options + "Datepicker" ].
			apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
	}
	if ( options === "option" && arguments.length === 2 && typeof arguments[ 1 ] === "string" ) {
		return $.datepicker[ "_" + options + "Datepicker" ].
			apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
	}
	return this.each( function() {
		typeof options === "string" ?
			$.datepicker[ "_" + options + "Datepicker" ].
				apply( $.datepicker, [ this ].concat( otherArgs ) ) :
			$.datepicker._attachDatepicker( this, options );
	} );
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.12.1";

return $.datepicker;

} ) );

/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slider
//>>group: Widgets
//>>description: Displays a flexible slider with ranges and accessibility via keyboard.
//>>docs: http://api.jqueryui.com/slider/
//>>demos: http://jqueryui.com/slider/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/slider.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [
			"jquery",
			"./mouse",
			"../keycode",
			"../version",
			"../widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

return $.widget( "ui.slider", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		classes: {
			"ui-slider": "ui-corner-all",
			"ui-slider-handle": "ui-corner-all",

			// Note: ui-widget-header isn't the most fittingly semantic framework class for this
			// element, but worked best visually with a variety of themes
			"ui-slider-range": "ui-corner-all ui-widget-header"
		},
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// Callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// Number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();
		this._calculateNewMax();

		this._addClass( "ui-slider ui-slider-" + this.orientation,
			"ui-widget ui-widget-content" );

		this._refresh();

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ),
			handle = "<span tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this._addClass( this.handles, "ui-slider-handle", "ui-state-default" );

		this.handle = this.handles.eq( 0 );

		this.handles.each( function( i ) {
			$( this )
				.data( "ui-slider-handle-index", i )
				.attr( "tabIndex", 0 );
		} );
	},

	_createRange: function() {
		var options = this.options;

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[ 0 ], options.values[ 0 ] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice( 0 );
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div>" )
					.appendTo( this.element );

				this._addClass( this.range, "ui-slider-range" );
			} else {
				this._removeClass( this.range, "ui-slider-range-min ui-slider-range-max" );

				// Handle range switching from true to min/max
				this.range.css( {
					"left": "",
					"bottom": ""
				} );
			}
			if ( options.range === "min" || options.range === "max" ) {
				this._addClass( this.range, "ui-slider-range-" + options.range );
			}
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each( function( i ) {
			var thisDistance = Math.abs( normValue - that.values( i ) );
			if ( ( distance > thisDistance ) ||
				( distance === thisDistance &&
					( i === that._lastChangedValue || that.values( i ) === o.min ) ) ) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		} );

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		this._addClass( closestHandle, null, "ui-state-active" );
		closestHandle.trigger( "focus" );

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css( "borderTopWidth" ), 10 ) || 0 ) -
				( parseInt( closestHandle.css( "borderBottomWidth" ), 10 ) || 0 ) +
				( parseInt( closestHandle.css( "marginTop" ), 10 ) || 0 )
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this._removeClass( this.handles, null, "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left -
				( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top -
				( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_uiHash: function( index, value, values ) {
		var uiHash = {
			handle: this.handles[ index ],
			handleIndex: index,
			value: value !== undefined ? value : this.value()
		};

		if ( this._hasMultipleValues() ) {
			uiHash.value = value !== undefined ? value : this.values( index );
			uiHash.values = values || this.values();
		}

		return uiHash;
	},

	_hasMultipleValues: function() {
		return this.options.values && this.options.values.length;
	},

	_start: function( event, index ) {
		return this._trigger( "start", event, this._uiHash( index ) );
	},

	_slide: function( event, index, newVal ) {
		var allowed, otherVal,
			currentValue = this.value(),
			newValues = this.values();

		if ( this._hasMultipleValues() ) {
			otherVal = this.values( index ? 0 : 1 );
			currentValue = this.values( index );

			if ( this.options.values.length === 2 && this.options.range === true ) {
				newVal =  index === 0 ? Math.min( otherVal, newVal ) : Math.max( otherVal, newVal );
			}

			newValues[ index ] = newVal;
		}

		if ( newVal === currentValue ) {
			return;
		}

		allowed = this._trigger( "slide", event, this._uiHash( index, newVal, newValues ) );

		// A slide can be canceled by returning false from the slide callback
		if ( allowed === false ) {
			return;
		}

		if ( this._hasMultipleValues() ) {
			this.values( index, newVal );
		} else {
			this.value( newVal );
		}
	},

	_stop: function( event, index ) {
		this._trigger( "stop", event, this._uiHash( index ) );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;
			this._trigger( "change", event, this._uiHash( index ) );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this._hasMultipleValues() ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this._removeClass( "ui-slider-horizontal ui-slider-vertical" )
					._addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				if ( this.options.range ) {
					this._refreshRange( value );
				}

				// Reset positioning from previous orientation
				this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();

				// Start from the last handle to prevent unreachable handles (#9046)
				for ( i = valsLength - 1; i >= 0; i-- ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = true;
				this._calculateNewMax();
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this._hasMultipleValues() ) {

			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i += 1 ) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// Returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = ( val - this._valueMin() ) % step,
			alignValue = val - valModStep;

		if ( Math.abs( valModStep ) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed( 5 ) );
	},

	_calculateNewMax: function() {
		var max = this.options.max,
			min = this._valueMin(),
			step = this.options.step,
			aboveMin = Math.round( ( max - min ) / step ) * step;
		max = aboveMin + min;
		if ( max > this.options.max ) {

			//If max is not divisible by step, rounding off may increase its value
			max -= step;
		}
		this.max = parseFloat( max.toFixed( this._precision() ) );
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.max;
	},

	_refreshRange: function( orientation ) {
		if ( orientation === "vertical" ) {
			this.range.css( { "width": "", "left": "" } );
		}
		if ( orientation === "horizontal" ) {
			this.range.css( { "height": "", "bottom": "" } );
		}
	},

	_refreshValue: function() {
		var lastValPercent, valPercent, value, valueMin, valueMax,
			oRange = this.options.range,
			o = this.options,
			that = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			_set = {};

		if ( this._hasMultipleValues() ) {
			this.handles.each( function( i ) {
				valPercent = ( that.values( i ) - that._valueMin() ) / ( that._valueMax() -
					that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								left: valPercent + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								width: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								bottom: ( valPercent ) + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								height: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					}
				}
				lastValPercent = valPercent;
			} );
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						this._addClass( $( event.target ), null, "ui-state-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this._hasMultipleValues() ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( ( this._valueMax() - this._valueMin() ) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				this._removeClass( $( event.target ), null, "ui-state-active" );
			}
		}
	}
} );

} ) );

/**
 * Counter wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires appear.js (v1.0.3)
 *
 */
;(function($){
	'use strict';

	$.HSCore.components.HSCounter = {

		/**
		 *
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig : {
			bounds: -100,
			debounce: 10,
			time: 6000,
			fps: 60,
			commaSeparated: false
		},

		/**
		 *
		 *
		 * @var jQuery _pageCollection
		 */
		_pageCollection : $(),

		/**
		 * Initialization of Counter wrapper.
		 *
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery pageCollection - collection of initialized items.
		 */
		init: function(selector, config){

			this.collection = $(selector) && $(selector).length ? $(selector) : $();
			if(!this.collection.length) return;

			this.config = config && $.isPlainObject(config) ? $.extend({}, this._baseConfig, config) : this._baseConfig;
			this.config.itemSelector = selector;

			this.initCounters();

		},

		/**
		 * Initialization of each Counter of the page.
		 *
		 * @return undefined
		 */
		initCounters: function() {

			var self = this;

			appear({

				bounds: self.config['bounds'],
				debounce: self.config['debounce'],

				init: function() {

					self.collection.each(function(i, el) {

						var $item = $(el),
								value = parseInt($item.text(), 10);

							$item.text('0').data('value', value);

							self._pageCollection = self._pageCollection.add($item);

					});

				},

				elements: function() {
					return document.querySelectorAll(self.config['itemSelector']);
				},

				appear: function(el) {

					var $item = $(el),
							counter = 1,
							endValue = $item.data('value'),
							iterationValue = parseInt(endValue / ((self.config['time'] / self.config['fps'])), 10),
							isCommaSeparated = $item.data('comma-separated'),
							isReduced = $item.data('reduce-thousands-to');

					if(iterationValue == 0) iterationValue = 1;

					$item.data('intervalId', setInterval(function(){

						if(isCommaSeparated){

							$item.text(self.getCommaSeparatedValue(counter+= iterationValue));

						}
						else if(isReduced) {
							$item.text(self.getCommaReducedValue(counter+= iterationValue, isReduced));
						}
						else {

							$item.text(counter+= iterationValue);
						}

						if(counter > endValue) {

							clearInterval($item.data('intervalId'));
							if(isCommaSeparated) {
								$item.text(self.getCommaSeparatedValue(endValue));
							}
							else if(isReduced) {
								$item.text(self.getCommaReducedValue(endValue, isReduced));
							}
							else {
								$item.text(endValue);
							}

							return;

						}

					}, self.config['time'] / self.config['fps']));

				}

			});

		},

		/**
		 *
		 *
		 * @param Number value
		 *
		 * @return String
		 */
		getCommaReducedValue: function(value, additionalText) {

			return parseInt(value / 1000, 10) + additionalText;

		},

		/**
		 * Returns comma separated value.
		 *
		 * @param Number value
		 *
		 * @return String
		 */
		getCommaSeparatedValue: function(value) {

			value = new String(value);

			switch(value.length) {

				case 4:

					return value.substr(0, 1) + ',' + value.substr(1);

				break;

				case 5:

					return value.substr(0, 2) + ',' + value.substr(2);

				break;

				case 6:

					return value.substr(0, 3) + ',' + value.substr(3);

				break;
				case 7:

					value = value.substr(0, 1) + ',' + value.substr(1);
					return value.substr(0, 5) + ',' + value.substr(5);

				break;

				case 8:

					value = value.substr(0, 2) + ',' + value.substr(2);
					return value.substr(0, 6) + ',' + value.substr(6);

				break;

				case 9:

					value = value.substr(0, 3) + ',' + value.substr(3);
					return value.substr(0, 7) + ',' + value.substr(7);

				break;

				case 10:

					value = value.substr(0, 1) + ',' + value.substr(1);
					value = value.substr(0, 5) + ',' + value.substr(5);
					return value.substr(0, 9) + ',' + value.substr(9);

				break;

				default:

					return value;

			}

		}

	};

})(jQuery);
/**
 * Hamburgers plugin helper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires hamburgers.min.css
 *
 */
;(function($){
	'use strict';

	$.HSCore.helpers.HSHamburgers = {

		/**
		 * Initialize 'hamburgers' plugin.
		 * 
		 * @param String selector
		 *
		 * @return undefined;
		 */
		init: function(selector) {

			if( !selector || !$(selector).length ) return;

		  var hamburgers = $(selector),
		  		timeoutid;

		  hamburgers.each(function(i, el){

		  	var $this = $(this);

		  	if($this.closest('button').length) {
		  		$this.closest('button').get(0).addEventListener('click', function(e){

		  			var $self = $(this),
		  					$hamburger = $self.find(selector);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$hamburger.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}
		  	else {
		  		$this.get(0).addEventListener('click', function(e){

		  			var $self = $(this);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$self.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}

		  });

		}
		

	};

})(jQuery);
/**
 * Height calculating helper-wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.helpers.HSHeightCalc = {
    /**
     * Rating.
     *
     * @return undefined
     */
    init: function () {
      var collection = $('[data-calc-target]');

      if (!collection.length) return;

      collection.each(function () {
        var $this = $(this),
          $target = $this.data('calc-target');
        $this.css({
          'height': 'calc(100vh - ' + $($target).outerHeight() + 'px)',
        });
      });
    }
  };
})(jQuery);

/**
 * HSScrollNav Component.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires jQuery
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSScrollNav = {

    /**
     * Base configuraion of the component.
     *
     * @private
     */
    _baseConfig: {
      duration: 400,
      easing: 'linear',
      over: $(),
      activeItemClass: 'active',
      afterShow: function(){},
      beforeShow: function(){}
    },

    /**
     * All initialized item on the page.
     *
     * @private
     */
    _pageCollection: $(),


    /**
     * Initialization of the component.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function(collection, config) {

      var self = this;

      if( !collection || !collection.length ) return $();

      collection.each(function(i, el) {

        var $this = $(el),
            itemConfig = config && $.isPlainObject(config) ?
                         $.extend(true, {}, self._baseConfig, config, $this.data()) :
                         $.extend(true, {}, self._baseConfig, $this.data());

        if( !$this.data('HSScrollNav') ) {

          $this.data('HSScrollNav', new HSScrollNav($this, itemConfig));

          self._pageCollection = self._pageCollection.add( $this );

        }

      });

      $(window).on('scroll.HSScrollNav', function(){

        self._pageCollection.each(function(i, el) {

          $(el).data('HSScrollNav').highlight();

        });

      }).trigger('scroll.HSScrollNav');

      return collection;

    }

  }


  /**
   * HSScrollNav.
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSScrollNav(element, config) {

    /**
     * Current element.
     *
     * @public
     */
    this.element = element;

    /**
     * Configuraion.
     *
     * @public
     */
    this.config = config;

    /**
     * Sections.
     *
     * @public
     */
    this._items = $();

    this._makeItems();
    this._bindEvents();
  }

  /**
   * Return collection of sections.
   *
   * @private
   * @return {jQuery}
   */
  HSScrollNav.prototype._makeItems = function() {

    var self = this;

    this.element.find('a[href^="#"]').each(function(i, el) {

      var $this = $(el);

      if( !$this.data('HSScrollNavSection') ) {

        $this.data('HSScrollNavSection', new HSScrollNavSection($this, self.config));

        self._items = self._items.add( $this );

      }

    });

  };

  /**
   * Binds necessary events.
   *
   * @private
   * @return {undefined}
   */
  HSScrollNav.prototype._bindEvents = function() {

    var self = this;

    this.element.on('click.HSScrollNav', 'a[href^="#"]', function(e) {

      var link = this;
      self._lockHightlight = true;
      if(self.current) self.current.unhighlight();
      link.blur();
      self.current = $(link).data('HSScrollNavSection');
      self.current.highlight();

      $(this).data('HSScrollNavSection').show( function(){
        self._lockHightlight = false;
      } );

      e.preventDefault();

    });

  };

  /**
   * Activates necessary menu item.
   *
   * @public
   */
  HSScrollNav.prototype.highlight = function() {

    var self = this, items, currentItem, current, scrollTop;

    if(!this._items.length || this._lockHightlight) return;

    scrollTop = $(window).scrollTop();

    if(scrollTop + $(window).height() === $(document).height()) {

      this.current = this._items.last().data('HSScrollNavSection');

      this.unhighlight();
      this.current.highlight();
      this.current.changeHash();

      return;
    }

    this._items.each(function(i, el){

      var Section = $(el).data('HSScrollNavSection'),
          $section = Section.section;

      if(scrollTop > Section.offset) {
        current = Section;
      }

    });

    if(current && this.current != current) {

      this.unhighlight();
      current.highlight();
      if(this.current) current.changeHash();

      this.current = current;

    }

  };

  /**
   * Deactivates all menu items.
   *
   * @public
   */
  HSScrollNav.prototype.unhighlight = function() {

    this._items.each(function(i, el){
      $(el).data('HSScrollNavSection').unhighlight();
    });

  };

  /**
   * HSScrollNavSection.
   *
   * @param {jQuery} element
   *
   * @constructor
   */
  function HSScrollNavSection(element, config) {

    var self = this;

    /**
     * Current section.
     *
     * @public
     */
    this.element = element;

    /**
     * Configuration.
     *
     * @public
     */
    this.config = config;

    /**
     * Getter for acces to the section element.
     *
     * @public
     */
    Object.defineProperty(this, 'section', {
      value: $(self.element.attr('href'))
    });

    /**
     * Getter for determinate position of the section relative to document.
     *
     * @public
     */

    Object.defineProperty(this, 'offset', {
      get: function() {

        var header = $('.u-header'),
            headerStyles = getComputedStyle(header.get(0)),
            headerPosition = headerStyles.position,
            offset = self.section.offset().top;



        if(header.length && headerPosition == 'fixed' && parseInt(headerStyles.top) == 0) {
          offset = offset - header.outerHeight() - parseInt(headerStyles.marginTop);
        }

        if(self.config.over.length) {
          offset = offset - self.config.over.outerHeight();
        }

        return offset;
      }
    });


  }

  /**
   * Moves to the section.
   *
   * @public
   */
  HSScrollNavSection.prototype.show = function(callback) {

    var self = this;

    if( !this.section.length ) return;

    self.config.beforeShow.call(self.section);

    this.changeHash();

    $('html, body').stop().animate({
      scrollTop: self.offset + 3
    }, {
      duration: self.config.duration,
      easing: self.config.easing,
      complete: function() {
        $('html, body').stop().animate({
          scrollTop: self.offset + 3
        }, {
          duration: self.config.duration,
          easing: self.config.easing,
          complete: function() {
            self.config.afterShow.call(self.section);
            if($.isFunction(callback)) callback();
          }
        });
      }
    });

  };

  /**
   * Changes location's hash.
   *
   * @public
   */
  HSScrollNavSection.prototype.changeHash = function() {
    this.section.attr('id', '');
    window.location.hash = this.element.attr('href');
    this.section.attr('id', this.element.attr('href').slice(1));
  };

  /**
   * Activates the menu item.
   *
   * @public
   */
  HSScrollNavSection.prototype.highlight = function() {

    var parent = this.element.parent('li');
    if(parent.length) parent.addClass(this.config.activeItemClass);

  };

  /**
   * Deactivates the menu item.
   *
   * @public
   */
  HSScrollNavSection.prototype.unhighlight = function() {

    var parent = this.element.parent('li');
    if(parent.length) parent.removeClass(this.config.activeItemClass);

  };



})(jQuery);

/**
 * Sticky blocks wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSStickyBlock = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Sticky blocks wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initStickyBlock();

      return this.pageCollection;
    },

    initStickyBlock: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection,
        windW = $(window).width();

      this.collection.each(function (i, el) {
        //Variables
        var $stickyBlock = $(el),
          isResponsive = Boolean($stickyBlock.data('responsive')),
          stickyBlockClasses = $stickyBlock.attr('class').replace($self.config.itemSelector.substring(1), ''),
          stickyBlockH = $stickyBlock.outerHeight(),
          stickyBlockW = $stickyBlock.outerWidth(),
          stickyBlockParentW = $stickyBlock.parent().width(),
          stickyBlockOffsetTop = $stickyBlock.offset().top,
          stickyBlockOffsetLeft = $stickyBlock.offset().left,
          startPoint = $.isNumeric($stickyBlock.data('start-point')) ? $stickyBlock.data('start-point') : $($stickyBlock.data('start-point')).offset().top,
          endPoint = $.isNumeric($stickyBlock.data('end-point')) ? $stickyBlock.data('end-point') : $($stickyBlock.data('end-point')).offset().top,
          hasStickyHeader = $stickyBlock.data('has-sticky-header');

        //Break function if there are no target element
        if (!$stickyBlock.length) return;
        if (stickyBlockH > (endPoint - startPoint)) return;

        $self.resolutionCheck($stickyBlock);

        if ($stickyBlock.hasClass('g-sticky-block--sm') && windW <= 576) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else if ($stickyBlock.hasClass('g-sticky-block--md') && windW <= 768) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else if ($stickyBlock.hasClass('g-sticky-block--lg') && windW <= 992) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else if ($stickyBlock.hasClass('g-sticky-block--xl') && windW <= 1200) {
          $stickyBlock.addClass('die-sticky');
          $self.resolutionCheck($stickyBlock);
        } else {
          $stickyBlock.removeClass('die-sticky');
        }

        $(window).on('resize', function () {
          var windW = $(window).width();

          if ($stickyBlock.hasClass('g-sticky-block--sm') && windW <= 576) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else if ($stickyBlock.hasClass('g-sticky-block--md') && windW <= 768) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else if ($stickyBlock.hasClass('g-sticky-block--lg') && windW <= 992) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else if ($stickyBlock.hasClass('g-sticky-block--xl') && windW <= 1200) {
            $stickyBlock.addClass('die-sticky');
            $self.resolutionCheck($stickyBlock);
          } else {
            $stickyBlock
              .removeClass('die-sticky')
              .css({
                'top': '',
                'left': ''
              });
          }

          if (isResponsive == true) {
            setTimeout(function () {
              var offsetTop = $(this).scrollTop(),
                headerH = $('header').outerHeight();
              stickyBlockH = $stickyBlock.outerHeight(),
                stickyBlockParentW = $stickyBlock.parent().width(),
                stickyBlockOffsetTop = $stickyBlock.parent().offset().top,
                stickyBlockOffsetLeft = $stickyBlock.parent().offset().left + parseInt($stickyBlock.parent().css('padding-left')),
                startPoint = $.isNumeric($stickyBlock.data('start-point')) ? $stickyBlock.data('start-point') : $($stickyBlock.data('start-point')).offset().top,
                endPoint = $.isNumeric($stickyBlock.data('end-point')) ? $stickyBlock.data('end-point') : $($stickyBlock.data('end-point')).offset().top;

              if (hasStickyHeader === true) {
                $stickyBlock
                  .not('.die-sticky')
                  .css({
                    'top': offsetTop + headerH >= (endPoint - stickyBlockH) ? endPoint - stickyBlockH - stickyBlockOffsetTop : headerH,
                    'left': stickyBlockOffsetLeft,
                    'width': stickyBlockParentW
                  });

                // if (offsetTop + headerH <= (endPoint - stickyBlockH)) {
                //   $stickyBlock
                //     .not('.die-sticky')
                //     .addClass('g-pos-fix g-m-reset');
                // }
              } else {
                $stickyBlock
                  .not('.die-sticky')
                  .css({
                    'top': offsetTop >= (endPoint - stickyBlockH) ? endPoint - stickyBlockH - stickyBlockOffsetTop : 0,
                    'left': stickyBlockOffsetLeft,
                    'width': stickyBlockParentW
                  });

                // if (offsetTop <= (endPoint - stickyBlockH)) {
                //   $stickyBlock
                //     .not('.die-sticky')
                //     .addClass('g-pos-fix g-m-reset');
                // }
              }
            }, 400);
          }
        });

        if (isResponsive == false) {
          //Add "shadow" element
          var offsetTop = $(this).scrollTop();

          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: target element height]
           * [4: target element width]
           * [5: target element index]
           * [6: target element classes (exclude init class)]
           * [7: start point]
           * [8: end point]
           */
          $self.addShadow($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, i, stickyBlockClasses, startPoint, endPoint, hasStickyHeader);

          //Add sticky state
          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: target element height]
           * [4: target element width]
           * [5: target offset left]
           * [6: start point]
           * [7: end point]
           */
          $self.addSticky($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
        } else {
          //Add responsive sticky state
          var offsetTop = $(this).scrollTop();

          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: parent element height]
           * [4: parent element width]
           * [5: target offset left]
           * [6: start point]
           * [7: end point]
           */
          $self.addSticky($stickyBlock, offsetTop, 'auto', stickyBlockParentW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
        }

        $(window).on('scroll', function () {
          var offsetTop = $(this).scrollTop();

          if (isResponsive == false) {
            //Add "shadow" element
            /* Args:
             * [1: target element]
             * [2: window offset top]
             * [3: target element height]
             * [4: target element width]
             * [5: target element index]
             * [6: target element classes (exclude init class)]
             * [7: start point]
             * [8: end point]
             */
            $self.addShadow($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, i, stickyBlockClasses, startPoint, endPoint, hasStickyHeader);

            //Add sticky state
            /* Args:
             * [1: target element]
             * [2: window offset top]
             * [3: target element height]
             * [4: target element width]
             * [5: target offset left]
             * [6: start point]
             * [7: end point]
             */
            $self.addSticky($stickyBlock, offsetTop, stickyBlockH, stickyBlockW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
          } else {
            //Add responsive sticky state
            /* Args:
             * [1: target element]
             * [2: window offset top]
             * [3: parent element height]
             * [4: parent element width]
             * [5: target offset left]
             * [6: start point]
             * [7: end point]
             */
            $self.addSticky($stickyBlock, offsetTop, 'auto', stickyBlockParentW, stickyBlockOffsetLeft, startPoint, endPoint, hasStickyHeader);
          }

          //Remove sticky state
          /* Args:
           * [1: target element]
           * [2: window offset top]
           * [3: start point]
           */
          $self.removeSticky($stickyBlock, offsetTop, startPoint, hasStickyHeader);

          if (endPoint) {
            //Add absolute state
            /* Args:
             * [1: target element]
             * [2: target element height]
             * [3: target element index]
             * [4: target offset top]
             * [5: window offset top]
             * [6: end point]
             */

            $self.addAbsolute($stickyBlock, stickyBlockH, i, stickyBlockOffsetTop, offsetTop, endPoint, hasStickyHeader);
          }
        });

        $(window).trigger('scroll');

        //Add object to collection
        collection = collection.add($stickyBlock);
      });
    },

    addSticky: function (target, offsetTop, targetH, targetW, offsetLeft, startPoint, endPoint, hasStickyHeader) {
      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH >= startPoint && offsetTop + headerH < endPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-rel')
            .css({
              'top': '',
              'left': '',
              'width': '',
              'height': ''
            })
            .addClass('g-pos-fix g-m-reset')
            .css({
              'top': headerH,
              'left': offsetLeft,
              'width': targetW,
              'height': targetH
            });
        }
      } else {
        if (offsetTop >= startPoint && offsetTop < endPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-rel')
            .css({
              'top': '',
              'left': '',
              'width': '',
              'height': ''
            })
            .addClass('g-pos-fix g-m-reset')
            .css({
              'top': 0,
              'left': offsetLeft,
              'width': targetW,
              'height': targetH
            });
        }
      }
    },

    removeSticky: function (target, offsetTop, startPoint, hasStickyHeader) {
      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH <= startPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .css({
              'left': ''
            });
        }
      } else {
        if (offsetTop <= startPoint) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .css({
              'left': ''
            });
        }
      }
    },

    addAbsolute: function (target, targetH, targetI, targetOffsetTop, offsetTop, endPoint, hasStickyHeader) {
      if (target.hasClass('g-pos-rel')) return;

      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH >= endPoint - targetH) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .addClass('g-pos-rel')
            .css({
              'top': endPoint - targetH - targetOffsetTop,
              'left': ''
            });
        }
      } else {
        if (offsetTop >= endPoint - targetH) {
          target
            .not('.die-sticky')
            .removeClass('g-pos-fix g-m-reset')
            .addClass('g-pos-rel')
            .css({
              'top': endPoint - targetH - targetOffsetTop,
              'left': ''
            });
        }
      }
    },

    addShadow: function (target, offsetTop, targetH, targetW, targetI, targetClasses, startPoint, endPoint, hasStickyHeader) {
      if (hasStickyHeader === true) {
        var headerH = $('header').outerHeight();

        if (offsetTop + headerH > startPoint && offsetTop + headerH < (endPoint - targetH)) {
          if ($('#shadow' + targetI).length) return;

          //Add shadow block
          target
            .not('.die-sticky')
            .before('<div id="shadow' + targetI + '" class="' + targetClasses + '" style="height: ' + targetH + 'px; width: ' + targetW + 'px"></div>');
        } else {
          if (!$('#shadow' + targetI).length) return;

          //Remove shadow block
          $('#shadow' + targetI).remove();
        }
      } else {
        if (offsetTop > startPoint && offsetTop < (endPoint - targetH)) {
          if ($('#shadow' + targetI).length) return;

          //Add shadow block
          target
            .not('.die-sticky')
            .before('<div id="shadow' + targetI + '" class="' + targetClasses + '" style="height: ' + targetH + 'px; width: ' + targetW + 'px"></div>');
        } else {
          if (!$('#shadow' + targetI).length) return;

          //Remove shadow block
          $('#shadow' + targetI).remove();
        }
      }
    },

    resolutionCheck: function (target) {
      target
        .removeClass('g-pos-fix g-m-reset')
        .css({
          'top': '',
          'left': '',
          'width': '',
          'height': ''
        });
    }
  }
})(jQuery);

/**
 * Rating wrapper.
 * 
 * @author Htmlstream 
 * @version 1.0
 *
 */
;(function($){
	'use strict';

	$.HSCore.components.HSRating = {

		/**
		 * Base rating configuration.
		 * 
		 * @var Object _baseConfig
		 */
		_baseConfig : {
			rtl: false,
			containerClass: 'g-rating',
			backwardClass: 'g-rating-backward',
			forwardClass: 'g-rating-forward',
			spacing: 0
		},

		/**
		 * Collection of all initialized items.
		 * 
		 * @var jQuery _pageCollection
		 */
		_pageCollection : $(),

		/**
		 * Initializes rating items.
		 * 
		 * @param jQuery collection
		 *
		 * @return jQuery|undefined
		 */
		init: function(collection, config) {

			if(!collection || !collection.length) return;

			config = config && $.isPlainObject(config) ? $.extend(true, {}, this._baseConfig, config) : this._baseConfig;

			var self = this;

			return collection.each(function(i, el){

				var $this = $(el);

				config = $.extend(true, {}, config, $this.data());


				if(!$this.data('rating-instance')) {

					$this.data('rating-instance',new Rating( $this, $this.data('rating'), config ));

					self._pageCollection = self._pageCollection.add($this);

				}

			});

		}

		
	};

	/**
	 * Rating constructor function.
	 * 
	 * @param jQuery element
	 * @param Number value
	 */
	function Rating( element, value, config ) {

		this.value = value;
		this.element = element;
		this.config = config;

		this.init();

	}

	/**
	 * Initializes single rating item.
	 * 
	 * @return undefined
	 */
	Rating.prototype.init = function() {

		var self = this;

		this.container = $('<div></div>', {
			class: self.config.containerClass,
			style: 'display: inline-block; position: relative; z-index: 1; white-space: nowrap;'
		});

		this.forward = $('<div></div>', {
			class: self.config.forwardClass,
			style: $('html[dir="rtl"]').length ? 'position: absolute; right: 0; top: 0; height: 100%; overflow: hidden;' : 'position: absolute; left: 0; top: 0; height: 100%; overflow: hidden;'
		});

		this.backward = $('<div></div>', {
			class: self.config.backwardClass,
			style: 'position: relative; z-index: 1;'
		});

		for(var i = 0; i < 5; i++) {

			var starEmpty = $('<i></i>', {
						class: self.element.data('backward-icons-classes') ? self.element.data('backward-icons-classes') : 'fa fa-star-o'
					}),
					starFilled = $('<i></i>', {
						class: self.element.data('forward-icons-classes') ? self.element.data('forward-icons-classes') : 'fa fa-star'
					});


			this.forward.append(starFilled);
			this.backward.append(starEmpty);

		}

		this.container.append(this.forward);
		this.container.append(this.backward);

		this.element.append(this.container);

		this.forward.css('width',  this.value / 5 * 100 + '%');

		this.makeSpacing();

	};

	Rating.prototype.makeSpacing = function() {

		var self = this;

		this.forward.children().add(this.backward.children()).css({
			'margin-left': self.config.spacing,
			'margin-right': self.config.spacing
		});

		this.container.css({
			'margin-left': self.config.spacing * -1,
			'margin-right': self.config.spacing * -1
		});

	}


})(jQuery);
/**
 * ModalWindow wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires appear.js (v1.0.3), custombox.js (v4.0.1)
 *
 */
;(function($){
	'use strict';

	$.HSCore.components.HSModalWindow = {

		/**
		 *
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig : {
			bounds: 100,
			debounce: 50,
			overlayOpacity: .48,
			overlayColor: '#000000',
			speed: 400,
			type: 'onscroll', // onscroll, beforeunload, hashlink, ontarget, aftersometime
			effect: 'fadein',
      modalIsClosingByEsc: true,
      modalIsClosingByOverlay: true,
			onOpen: function() {},
			onClose: function() {},
			onComplete: function() {},
		},

		/**
		 *
		 *
		 * @var jQuery _pageCollection
		 */
		_pageCollection : $(),

		/**
		 * Initialization of ModalWindow wrapper.
		 *
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery - collection of initialized items.
		 */
		init: function(selector, config) {

			var collection = $(selector);
			if(!collection.length) return;

			config = config && $.isPlainObject(config) ? $.extend({}, this._baseConfig, config) : this._baseConfig;
			config.selector = selector;

			this._pageCollection = this._pageCollection.add( collection.not(this._pageCollection) );

			if(config.autonomous) {

				return this.initAutonomousModalWindows(collection, config);

			}

			return this.initBaseModalWindows(collection, config);

		},

		/**
		 * Initialization of each Autonomous Modal Window of the page.
		 *
		 * @param jQuery collection
		 * @param Object config
		 *
		 * @return jQuery collection
		 */
		initBaseModalWindows: function(collection, config){

			return collection.on('click', function(e){

				if(!('Custombox' in window)) return;

	      var $this = $(this),
	          target = $this.data('modal-target'),
	          effect = $this.data('modal-effect') || config['effect'],
            isClosingByEsc = $this.data('modal-is-closing-by-esc') !== undefined ? Boolean($this.data('modal-is-closing-by-esc')) : config['modalIsClosingByEsc'],
            isClosingByOverlay = $this.data('modal-is-closing-by-overlay') !== undefined ? Boolean($this.data('modal-is-closing-by-overlay')) : config['modalIsClosingByOverlay'];

	      if(!target || !$(target).length) return;
	      
	      new Custombox.modal(
	      	{
						content: {
							target: target,
							effect: effect,
              close: isClosingByEsc,
							onOpen: function() {
								config['onOpen'].call($(target));
								Custombox.modal.closeAll();
							},
							onClose: function() {
								config['onClose'].call($(target));
							},
							onComplete: function() {
								config['onComplete'].call($(target));
							}
						},
						overlay: {
							color: $this.data('overlay-color') || config['overlayColor'],
							opacity: $this.data('overlay-opacity') || config['overlayOpacity'],
              close: isClosingByOverlay,
							speedIn: $this.data('speed') || config['speed'],
							speedOut: $this.data('speed') || config['speed']
						}
					}
	      ).open();

	      e.preventDefault();

			});

		},

		/**
		 * Initialization of each Autonomous Modal Window of the page.
		 *
		 * @param jQuery collection
		 * @param Object config
		 *
		 * @return jQuery collection
		 */
		initAutonomousModalWindows: function(collection, config) {

			var self = this;

			return collection.each(function(i, el) {

				var $this = $(el),
						type = $this.data('modal-type');

				switch(type) {

					case 'hashlink' :

						self.initHashLinkPopup($this, config);

					break;

					case 'onscroll' :

						self.initOnScrollPopup($this, config);

					break;

					case 'beforeunload' :

						self.initBeforeUnloadPopup($this, config);

					break;

					case 'ontarget' :

						self.initOnTargetPopup($this, config);

					break;

					case 'aftersometime' :

						self.initAfterSomeTimePopup($this, config);

					break;

				}

			});

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initHashLinkPopup: function(popup, config) {

			var self = this,
					hashItem = $(window.location.hash),
					target = $('#' + popup.attr('id'));

			if(hashItem.length && hashItem.attr('id') ==  popup.attr('id')){

				new Custombox.modal(
					{
						content: {
							target: '#' + popup.attr('id'),
							effect: popup.data('effect') || config['effect'],
							onOpen: function() {
								config['onOpen'].call($(target));
							},
							onClose: function() {
								config['onClose'].call($(target));
							},
							onComplete: function() {
								config['onComplete'].call($(target));
							}
						},
						overlay: {
							color: popup.data('overlay-color') || config['overlayColor'],
							opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
							speedIn: popup.data('speed') || config['speed'],
							speedOut: popup.data('speed') || config['speed']
						}
					}
				).open();

			}

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initOnScrollPopup: function(popup, config) {

			var self = this,
					$window = $(window),
					breakpoint = popup.data('breakpoint') ? popup.data('breakpoint') : 0,
					target = $('#' + popup.attr('id'));


			$window.on('scroll.popup', function() {

				var scrolled = $window.scrollTop() + $window.height();

				if(scrolled >= breakpoint) {

					new Custombox.modal(
						{
							content: {
								target: '#' + popup.attr('id'),
								effect: popup.data('effect') || config['effect'],
								onOpen: function() {
									config['onOpen'].call($(target));
								},
								onClose: function() {
									config['onClose'].call($(target));
								},
								onComplete: function() {
									config['onComplete'].call($(target));
								}
							},
							overlay: {
								color: popup.data('overlay-color') || config['overlayColor'],
								opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
								speedIn: popup.data('speed') || config['speed'],
								speedOut: popup.data('speed') || config['speed']
							}
						}
					).open();

					$window.off('scroll.popup');

				}

			});

			$window.trigger('scroll.popup');

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initBeforeUnloadPopup: function(popup, config) {

			var self = this,
					count = 0,
					target = $('#' + popup.attr('id')),
					timeoutId;

			window.addEventListener('mousemove', function(e) {

				if(timeoutId) clearTimeout(timeoutId);

		    timeoutId = setTimeout(function() {

		    	if (e.clientY < 10 && !count) {

				    count++;

				    new Custombox.modal(
							{
								content: {
									target: '#' + popup.attr('id'),
									effect: popup.data('effect') || config['effect'],
									onOpen: function() {
										config['onOpen'].call($(target));
									},
									onClose: function() {
										config['onClose'].call($(target));
									},
									onComplete: function() {
										config['onComplete'].call($(target));
									}
								},
								overlay: {
									color: popup.data('overlay-color') || config['overlayColor'],
									opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
									speedIn: popup.data('speed') || config['speed'],
									speedOut: popup.data('speed') || config['speed']
								}
							}
						).open();

		  		}

		  	}, 10);

			});


		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initOnTargetPopup: function(popup, config) {

			var self = this,
					target = popup.data('target');

			if(!target || !$(target).length) return;

			appear({
				bounds: config['bounds'],
				debounce: config['debounce'],
				elements: function() {
					return document.querySelectorAll(target);
				},
				appear: function(element) {

					new Custombox.modal(
						{
							content: {
								target: '#' + popup.attr('id'),
								effect: popup.data('effect') || config['effect'],
								onOpen: function() {
									config['onOpen'].call($(target));
								},
								onClose: function() {
									config['onClose'].call($(target));
								},
								onComplete: function() {
									config['onComplete'].call($(target));
								}
							},
							overlay: {
								color: popup.data('overlay-color') || config['overlayColor'],
								opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
								speedIn: popup.data('speed') || config['speed'],
								speedOut: popup.data('speed') || config['speed']
							}
						}
					).open();

				}
			});

		},

		/**
		 *
		 *
		 * @param jQuery popup
		 *
		 * @return undefined
		 */
		initAfterSomeTimePopup: function(popup, config) {

			var self = this,
				target = $('#' + popup.attr('id'));

			setTimeout(function() {

				new Custombox.modal(
					{
						content: {
							target: '#' + popup.attr('id'),
							effect: popup.data('effect') || config['effect'],
							onOpen: function() {
								config['onOpen'].call($(target));
							},
							onClose: function() {
								config['onClose'].call($(target));
							},
							onComplete: function() {
								config['onComplete'].call($(target));
							}
						},
						overlay: {
							color: popup.data('overlay-color') || config['overlayColor'],
							opacity: popup.data('overlay-opacity') || config['overlayOpacity'],
							speedIn: popup.data('speed') || config['speed'],
							speedOut: popup.data('speed') || config['speed']
						}
					}
				).open();

			}, popup.data('delay') ? popup.data('delay') : 10)

		}

	};

})(jQuery);

/**
 * Dropdown Content component.
 *
 * @author Htmlstream
 * @version 1.0
 */
;
(function ($) {
  'use strict';

  $.HSCore.components.HSDropdown = {

    /**
     * Base configuration of the component.
     *
     * @private
     */
    _baseConfig: {
      dropdownEvent: 'click',
      dropdownType: 'simple',
      dropdownDuration: 300,
      dropdownEasing: 'linear',
      dropdownAnimationIn: 'fadeIn',
      dropdownAnimationOut: 'fadeOut',
      dropdownHideOnScroll: true,
      dropdownHideOnBlur: false,
      dropdownDelay: 350,
      dropdownOpenedElement: 'init',
      afterOpen: function (invoker) {
      },
      beforeClose: function (invoker) {
      },
      afterClose: function (invoker) {
      }
    },

    /**
     * Collection of all initialized items on the page.
     *
     * @private
     */
    _pageCollection: $(),

    /**
     * Initialization.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function (collection, config) {

      var self;

      if (!collection || !collection.length) return;

      self = this;

      var fieldsQty;

      collection.each(function (i, el) {

        var $this = $(el), itemConfig;

        if ($this.data('HSDropdown')) return;

        itemConfig = config && $.isPlainObject(config) ?
          $.extend(true, {}, self._baseConfig, config, $this.data()) :
          $.extend(true, {}, self._baseConfig, $this.data());

        switch (itemConfig.dropdownType) {

          case 'css-animation' :

            $this.data('HSDropdown', new DropdownCSSAnimation($this, itemConfig));

            break;

          case 'jquery-slide' :

            $this.data('HSDropdown', new DropdownJSlide($this, itemConfig));

            break;

          default :

            $this.data('HSDropdown', new DropdownSimple($this, itemConfig));

        }

        self._pageCollection = self._pageCollection.add($this);
        self._bindEvents($this, itemConfig.dropdownEvent, itemConfig.dropdownDelay);
        var UnFold = $(el).data('HSDropdown');

        fieldsQty = $(UnFold.target).find('input, textarea').length;

        if ($(UnFold.target).find('[data-dropdown-target]').length) {

          $this.addClass('target-of-invoker-has-dropdowns');

        }

      });

      $(document).on('click touchstart', 'body', function (e) {

        if (e.target.id == self._baseConfig.dropdownOpenedElement) return;

        if ($(e.target).closest('#' + self._baseConfig.dropdownOpenedElement).length) return;

        self._pageCollection.each(function (i, el) {

          var windW = window.innerWidth,
            optIsMobileOnly = Boolean($(el).data('is-mobile-only'));

          if (!optIsMobileOnly) {

            $(el).data('HSDropdown').hide();

          } else if (optIsMobileOnly && windW < 769) {

            $(el).data('HSDropdown').hide();

          }

          $(el).data('HSDropdown').config.beforeClose.call(self.target, self.element);

        });

      });

      $(window).on('scroll.HSDropdown', function () {

        self._pageCollection.each(function (i, el) {

          var UnFold = $(el).data('HSDropdown');

          if (UnFold.getOption('dropdownHideOnScroll') && fieldsQty === 0) {

            UnFold.hide();

          } else if (UnFold.getOption('dropdownHideOnScroll') && !(/iPhone|iPad|iPod/i.test(navigator.userAgent))) {

            UnFold.hide();

          }

        });

      });

      $(window).on('resize.HSDropdown', function () {

        if (self._resizeTimeOutId) clearTimeout(self._resizeTimeOutId);

        self._resizeTimeOutId = setTimeout(function () {

          self._pageCollection.each(function (i, el) {

            var UnFold = $(el).data('HSDropdown');

            UnFold.smartPosition(UnFold.target);

          });

        }, 50);

      });

      $(document).on('keydown.HSDropdown', function (e) {

        if ($('body').hasClass('u-dropdown-opened')) {

          if (e.keyCode && e.keyCode === 38 || e.keyCode && e.keyCode === 40) {

            e.preventDefault();

          }

        }

      });

      return collection;

    },

    /**
     * Binds necessary events.
     *
     * @param {jQuery} $invoker
     * @param {String} eventType
     * @param {Number} delay
     * @private
     */
    _bindEvents: function ($invoker, eventType, delay) {

      var self = this,
        $dropdown = $($invoker.data('dropdown-target'));

      if (eventType === 'hover' && !_isTouch()) {

        $invoker.on('mouseenter.HSDropdown', function () {

          var $invoker = $(this),
            HSDropdown = $invoker.data('HSDropdown');

          if (!HSDropdown) return;

          if (HSDropdown.dropdownTimeOut) clearTimeout(HSDropdown.dropdownTimeOut);
          HSDropdown.show();
          $('body').addClass('u-dropdown-opened');

        })
          .on('mouseleave.HSDropdown', function () {

            var $invoker = $(this),
              HSDropdown = $invoker.data('HSDropdown');

            if (!HSDropdown) return;

            HSDropdown.dropdownTimeOut = setTimeout(function () {

              HSDropdown.hide();
              $('body').removeClass('u-dropdown-opened');

            }, delay);

          });

        if ($dropdown.length) {

          $dropdown.on('mouseenter.HSDropdown', function () {

            var HSDropdown = $invoker.data('HSDropdown');

            if (HSDropdown.dropdownTimeOut) clearTimeout(HSDropdown.dropdownTimeOut);
            HSDropdown.show();

          })
            .on('mouseleave.HSDropdown', function () {

              var HSDropdown = $invoker.data('HSDropdown');

              HSDropdown.dropdownTimeOut = setTimeout(function () {
                HSDropdown.hide();
              }, delay);

            });
        }

      } else {

        $invoker.on('click.HSDropdown', function (e) {

          var $curInvoker = $(this),
            $dropdownNotHasInnerDropdowns = $('[data-dropdown-target].active:not(.target-of-invoker-has-dropdowns)'),
            $dropdownHasInnerDropdown = $('[data-dropdown-target].active.target-of-invoker-has-dropdowns');

          self._baseConfig.dropdownOpenedElement = $curInvoker.data('HSDropdown').target[0].id;

          if (!$curInvoker.data('HSDropdown')) return;

          if (!$curInvoker.hasClass('target-of-invoker-has-dropdowns')) {

            if ($dropdownNotHasInnerDropdowns.length) {

              $dropdownNotHasInnerDropdowns.data('HSDropdown').toggle();

            }

          } else {

            if ($dropdownHasInnerDropdown.length) {

              $dropdownHasInnerDropdown.data('HSDropdown').toggle();

            }

          }

          $curInvoker.data('HSDropdown').toggle();

          e.stopPropagation();

          e.preventDefault();

        });

        if (Boolean($invoker.data('dropdown-target-is-menu'))) {

          var $target = $($invoker.data('dropdown-target')),
            $targetItems = $target.children();

          $targetItems.on('click', function() {

            $invoker.data('HSDropdown').toggle();

          });

        }

      }

    }
  };

  function _isTouch() {
    return 'ontouchstart' in window;
  }

  /**
   * Abstract Dropdown class.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @abstract
   */
  function AbstractDropdown(element, config) {

    if (!element.length) return false;

    this.element = element;
    this.config = config;

    this.target = $(this.element.data('dropdown-target'));

    this.allInvokers = $('[data-dropdown-target="' + this.element.data('dropdown-target') + '"]');

    this.toggle = function () {
      if (!this.target.length) return this;

      if (this.defaultState) {
        this.show();
      } else {
        this.hide();
      }

      return this;
    };

    this.smartPosition = function (target) {

      if (target.data('baseDirection')) {
        target.css(
          target.data('baseDirection').direction,
          target.data('baseDirection').value
        );
      }

      // target.removeClass('u-dropdown--reverse-y');

      var $w = $(window),
        styles = getComputedStyle(target.get(0)),
        direction = Math.abs(parseInt(styles.left, 10)) < 40 ? 'left' : 'right',
        targetOuterGeometry = target.offset();

      // horizontal axis
      if (direction === 'right') {

        if (!target.data('baseDirection')) target.data('baseDirection', {
          direction: 'right',
          value: parseInt(styles.right, 10)
        });

        if (targetOuterGeometry.left < 0) {

          target.css(
            'right',
            (parseInt(target.css('right'), 10) - (targetOuterGeometry.left - 10)) * -1
          );

        }

      } else {

        if (!target.data('baseDirection')) target.data('baseDirection', {
          direction: 'left',
          value: parseInt(styles.left, 10)
        });

        if (targetOuterGeometry.left + target.outerWidth() > $w.width()) {

          target.css(
            'left',
            (parseInt(target.css('left'), 10) - (targetOuterGeometry.left + target.outerWidth() + 10 - $w.width()))
          );

        }

      }

      // vertical axis
      if (targetOuterGeometry.top + target.outerHeight() - $w.scrollTop() > $w.height()) {

        // target.addClass('u-dropdown--reverse-y');

      }

    };

    this.getOption = function (option) {
      return this.config[option] ? this.config[option] : null;
    };

    return true;
  }


  /**
   * DropdownSimple constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function DropdownSimple(element, config) {
    if (!AbstractDropdown.call(this, element, config)) return;

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('u-dropdown--hidden');
      }
    });

    this.target.addClass('u-dropdown--simple');

    this.hide();
  }

  /**
   * Shows Dropdown.
   *
   * @public
   * @return {DropdownSimple}
   */
  DropdownSimple.prototype.show = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('u-dropdown--hidden');
    if (this.allInvokers.length) this.allInvokers.attr('aria-expanded', 'true');
    this.config.afterOpen.call(this.target, this.element);

    return this;
  };

  /**
   * Hides Dropdown.
   *
   * @public
   * @return {DropdownSimple}
   */
  DropdownSimple.prototype.hide = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').removeClass('active');

    this.target.addClass('u-dropdown--hidden');
    if (this.allInvokers.length) this.allInvokers.attr('aria-expanded', 'false');
    this.config.afterClose.call(this.target, this.element);

    return this;
  };

  /**
   * DropdownCSSAnimation constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function DropdownCSSAnimation(element, config) {
    if (!AbstractDropdown.call(this, element, config)) return;

    var self = this;

    this.target
      .addClass('u-dropdown--css-animation u-dropdown--hidden')
      .css('animation-duration', self.config.dropdownDuration + 'ms');

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('u-dropdown--hidden');
      }
    });

    if (this.target.length) {

      this.target.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

        if (self.target.hasClass(self.config.dropdownAnimationOut)) {

          self.target.removeClass(self.config.dropdownAnimationOut)
            .addClass('u-dropdown--hidden');


          if (self.allInvokers.length) self.allInvokers.attr('aria-expanded', 'false');

          self.config.afterClose.call(self.target, self.element);
        }

        if (self.target.hasClass(self.config.dropdownAnimationIn)) {

          if (self.allInvokers.length) self.allInvokers.attr('aria-expanded', 'true');

          self.config.afterOpen.call(self.target, self.element);
        }

        e.preventDefault();
        e.stopPropagation();
      });

    }
  }

  /**
   * Shows Dropdown.
   *
   * @public
   * @return {DropdownCSSAnimation}
   */
  DropdownCSSAnimation.prototype.show = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('u-dropdown--hidden')
      .removeClass(this.config.dropdownAnimationOut)
      .addClass(this.config.dropdownAnimationIn);

  };

  /**
   * Hides Dropdown.
   *
   * @public
   * @return {DropdownCSSAnimation}
   */
  DropdownCSSAnimation.prototype.hide = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').removeClass('active');

    this.target.removeClass(this.config.dropdownAnimationIn)
      .addClass(this.config.dropdownAnimationOut);

  };

  /**
   * DropdownSlide constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function DropdownJSlide(element, config) {
    if (!AbstractDropdown.call(this, element, config)) return;

    this.target.addClass('u-dropdown--jquery-slide u-dropdown--hidden').hide();

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('u-dropdown--hidden');
      }
    });
  }

  /**
   * Shows Dropdown.
   *
   * @public
   * @return {DropdownJSlide}
   */
  DropdownJSlide.prototype.show = function () {

    var self = this;

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('u-dropdown--hidden').stop().slideDown({
      duration: self.config.dropdownDuration,
      easing: self.config.dropdownEasing,
      complete: function () {
        self.config.afterOpen.call(self.target, self.element);
      }
    });

  };

  /**
   * Hides Dropdown.
   *
   * @public
   * @return {DropdownJSlide}
   */
  DropdownJSlide.prototype.hide = function () {

    var self = this;

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').removeClass('active');

    this.target.slideUp({
      duration: self.config.dropdownDuration,
      easing: self.config.dropdownEasing,
      complete: function () {
        self.config.afterClose.call(self.target, self.element);
        self.target.addClass('u-dropdown--hidden');
      }
    });

  }

})(jQuery);

/**
 * Carousel wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;
(function($) {
	'use strict';

	$.HSCore.components.HSCarousel = {
		/**
		 *
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig: {
			autoplay: false,
			infinite: true
		},

		/**
		 *
		 *
		 * @var jQuery pageCollection
		 */
		pageCollection: $(),

		/**
		 * Initialization of Carousel wrapper.
		 *
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery pageCollection - collection of initialized items.
		 */
		init: function(selector, config) {
			this.collection = selector && $(selector).length ? $(selector) : $();
			if (!$(selector).length) return;

			this.config = config && $.isPlainObject(config) ?
				$.extend({}, this._baseConfig, config) : this._baseConfig;

			this.config.itemSelector = selector;

			this.initCarousel();

			return this.pageCollection;
		},

		initCarousel: function() {
			//Variables
			var $self = this,
				config = $self.config,
				collection = $self.pageCollection;

			//Actions
			this.collection.each(function(i, el) {
				//Variables
				var $this = $(el),
					id = $this.attr('id'),

					//Markup elements
					target = $this.data('nav-for'),
					isThumb = $this.data('is-thumbs'),
					arrowsClasses = $this.data('arrows-classes'),
					arrowLeftClasses = $this.data('arrow-left-classes'),
					arrowRightClasses = $this.data('arrow-right-classes'),
					pagiClasses = $this.data('pagi-classes'),
					pagiHelper = $this.data('pagi-helper'),
					$pagiIcons = $this.data('pagi-icons'),
					$prevMarkup = '<div class="js-prev ' + arrowsClasses + ' ' + arrowLeftClasses + '"></div>',
					$nextMarkup = '<div class="js-next ' + arrowsClasses + ' ' + arrowRightClasses + '"></div>',

					//Setters
					setSlidesToShow = $this.data('slides-show'),
					setSlidesToScroll = $this.data('slides-scroll'),
					setAutoplay = $this.data('autoplay'),
					setAnimation = $this.data('animation'),
					setEasing = $this.data('easing'),
					setFade = $this.data('fade'),
					setSpeed = $this.data('speed'),
					setSlidesRows = $this.data('rows'),
					setCenterMode = $this.data('center-mode'),
					setCenterPadding = $this.data('center-padding'),
					setPauseOnHover = $this.data('pause-hover'),
					setVariableWidth = $this.data('variable-width'),
					setInitialSlide = $this.data('initial-slide'),
					setVertical = $this.data('vertical'),
					setRtl = $this.data('rtl'),
					setInEffect = $this.data('in-effect'),
					setOutEffect = $this.data('out-effect'),
					setInfinite = $this.data('infinite'),
					setDataTitlePosition = $this.data('title-pos-inside'),
					setFocusOnSelect = $this.data('focus-on-select'),
					setLazyLoad = $this.data('lazy-load'),
					isAdaptiveHeight = $this.data('adaptive-height'),
					numberedPaging = $this.data('numbered-pagination'),
					setResponsive = JSON.parse(el.getAttribute('data-responsive'));

				if ($this.find('[data-slide-type]').length) {
					$self.videoSupport($this);
				}

				$this.on('init', function(event, slick) {
					$(slick.$slides).css('height', 'auto');

					if(isThumb && setSlidesToShow >= $(slick.$slides).length) {
						 $this.addClass('slick-transform-off');
					}
				});

				if (setInEffect && setOutEffect) {
					$this.on('init', function(event, slick) {
						$(slick.$slides).addClass('single-slide');
					});
				}

				if (pagiHelper) {
					$this.on('init', function(event, slick) {
						var $pagination = $this.find('.js-pagination');

						if (!$pagination.length) return;

						$pagination.append('<span class="u-dots-helper"></span>');
					});
				}

				if (isThumb) {
					$('#' + id).on('click', '.slick-slide', function(e) {
						e.stopPropagation();

						//Variables
						var i = $(this).data('slick-index');

						if ($('#' + id).slick('slickCurrentSlide') !== i) {
							$('#' + id).slick('slickGoTo', i);
						}
					});
				}

				$this.on('init', function(event, slider) {
					var $pagination = $this.find('.js-pagination');

					if (!$pagination.length) return;

					$($pagination[0].children[0]).addClass('slick-current');
				});

				$this.on('init', function(event, slick) {
					var slide = $(slick.$slides)[0],
						animatedElements = $(slide).find('[data-scs-animation-in]');

					$(animatedElements).each(function() {
						var animationIn = $(this).data('scs-animation-in');

						$(this).addClass('animated ' + animationIn).css('opacity', 1);
					});
				});

				if (numberedPaging) {
					$this.on('init', function(event, slick) {
						$(numberedPaging).text('1' + '/' + slick.slideCount);
					});
				}

				$this.slick({
					autoplay: setAutoplay ? true : false,
					autoplaySpeed: setSpeed ? setSpeed : 3000,

					cssEase: setAnimation ? setAnimation : 'ease',
					easing: setEasing ? setEasing : 'linear',
					fade: setFade ? true : false,

					infinite: setInfinite ? true : false,
					initialSlide: setInitialSlide ? setInitialSlide - 1 : 0,
					slidesToShow: setSlidesToShow ? setSlidesToShow : 1,
					slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 1,
					centerMode: setCenterMode ? true : false,
					variableWidth: setVariableWidth ? true : false,
					pauseOnHover: setPauseOnHover ? true : false,
					rows: setSlidesRows ? setSlidesRows : 1,
					vertical: setVertical ? true : false,
					verticalSwiping: setVertical ? true : false,
					rtl: setRtl ? true : false,
					centerPadding: setCenterPadding ? setCenterPadding : 0,
					focusOnSelect: setFocusOnSelect ? true : false,
					lazyLoad: setLazyLoad ? setLazyLoad : false,

					asNavFor: target ? target : false,
					prevArrow: arrowsClasses ? $prevMarkup : false,
					nextArrow: arrowsClasses ? $nextMarkup : false,
					dots: pagiClasses ? true : false,
					dotsClass: 'js-pagination ' + pagiClasses,
					adaptiveHeight: !!isAdaptiveHeight,
					customPaging: function(slider, i) {
						var title = $(slider.$slides[i]).data('title');

						if (title && $pagiIcons) {
							return '<span>' + title + '</span>' + $pagiIcons;
						} else if ($pagiIcons) {
							return '<span></span>' + $pagiIcons;
						} else if (title && setDataTitlePosition) {
							return '<span>' + title + '</span>';
						} else if (title && !setDataTitlePosition) {
							return '<span></span>' + '<strong class="u-dot-title">' + title + '</strong>';
						} else {
							return '<span></span>';
						}
					},
					responsive: setResponsive
				});

				$this.on('beforeChange', function(event, slider, currentSlide, nextSlide) {
					var nxtSlide = $(slider.$slides)[nextSlide],
						slide = $(slider.$slides)[currentSlide],
						$pagination = $this.find('.js-pagination'),
						animatedElements = $(nxtSlide).find('[data-scs-animation-in]'),
						otherElements = $(slide).find('[data-scs-animation-in]');

					$(otherElements).each(function() {
						var animationIn = $(this).data('scs-animation-in');

						$(this).removeClass('animated ' + animationIn);
					});

					$(animatedElements).each(function() {
						$(this).css('opacity', 0);
					});

					if (!$pagination.length) return;

					if (currentSlide > nextSlide) {
						$($pagination[0].children).removeClass('slick-active-right');

						$($pagination[0].children[nextSlide]).addClass('slick-active-right');
					} else {
						$($pagination[0].children).removeClass('slick-active-right');
					}

					$($pagination[0].children).removeClass('slick-current');

					setTimeout(function() {
						$($pagination[0].children[nextSlide]).addClass('slick-current');
					}, .25);
				});

				if (numberedPaging) {
					$this.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
						var i = (nextSlide ? nextSlide : 0) + 1;

						$(numberedPaging).text(i + '/' + slick.slideCount);
					});
				}

				$this.on('afterChange', function(event, slick, currentSlide, nextSlide) {
					var slide = $(slick.$slides)[currentSlide],
						animatedElements = $(slide).find('[data-scs-animation-in]');

					$(animatedElements).each(function() {
						var animationIn = $(this).data('scs-animation-in'),
							animationDelay = $(this).data('scs-animation-delay'),
							animationDuration = $(this).data('scs-animation-duration');

							console.log(animationDuration);

						$(this).css({
							'animation-delay': animationDelay + 'ms',
							'animation-duration': animationDuration + 'ms'
						});

						$(this).addClass('animated ' + animationIn).css('opacity', 1);
					});
				});

				if (setInEffect && setOutEffect) {
					$this.on('afterChange', function(event, slick, currentSlide, nextSlide) {
						$(slick.$slides).removeClass('animated set-position ' + setInEffect + ' ' + setOutEffect);
					});

					$this.on('beforeChange', function(event, slick, currentSlide) {
						$(slick.$slides[currentSlide]).addClass('animated ' + setOutEffect);
					});

					$this.on('setPosition', function(event, slick) {
						$(slick.$slides[slick.currentSlide]).addClass('animated set-position ' + setInEffect);
					});
				}

				//Actions
				collection = collection.add($this);
			});
		},

		/**
		 * Implementation of video support.
		 *
		 * @param jQuery carousel
		 * @param String videoSupport
		 *
		 * @return undefined
		 */
		videoSupport: function(carousel) {
			if (!carousel.length) return;

			carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var slideType = $(slick.$slides[currentSlide]).data('slide-type'),
					player = $(slick.$slides[currentSlide]).find('iframe').get(0),
					command;

				if (slideType == 'vimeo') {
					command = {
						"method": "pause",
						"value": "true"
					}
				} else if (slideType == 'youtube') {
					command = {
						"event": "command",
						"func": "pauseVideo"
					}
				} else {
					return false;
				}

				if (player != undefined) {
					player.contentWindow.postMessage(JSON.stringify(command), '*');
				}
			});
		},

		/**
		 * Implementation of text animation.
		 *
		 * @param jQuery carousel
		 * @param String textAnimationSelector
		 *
		 * @requires charming.js, anime.js, textfx.js
		 *
		 * @return undefined
		 */
		initTextAnimation: function(carousel, textAnimationSelector) {
			if (!window.TextFx || !window.anime || !carousel.length) return;

			var $text = carousel.find(textAnimationSelector);

			if (!$text.length) return;

			$text.each(function(i, el) {
				var $this = $(el);

				if (!$this.data('TextFx')) {
					$this.data('TextFx', new TextFx($this.get(0)));
				}
			});


			carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var targets = slick.$slider
					.find('.slick-track')
					.children();

				var currentTarget = targets.eq(currentSlide),
					nextTarget = targets.eq(nextSlide);

				currentTarget = currentTarget.find(textAnimationSelector);
				nextTarget = nextTarget.find(textAnimationSelector);

				if (currentTarget.length) {
					currentTarget.data('TextFx').hide(currentTarget.data('effect') ? currentTarget.data('effect') : 'fx1');
				}

				if (nextTarget.length) {
					nextTarget.data('TextFx').show(nextTarget.data('effect') ? nextTarget.data('effect') : 'fx1');
				}
			});
		}
	}
})(jQuery);

/**
 * Fancybox wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;
(function ($) {
  'use strict';

  $.HSCore.components.HSPopup = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      parentEl: 'html',
      baseClass: 'u-fancybox-theme',
      slideClass: 'u-fancybox-slide',
      speed: 1000,
      slideSpeedCoefficient: 1,
      infobar: false,
      fullScreen: true,
      thumbs: true,
      closeBtn: true,
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-content">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-controls" style="position: relative; z-index: 99999;">' +
        '<div class="fancybox-infobar">' +
        '<div class="fancybox-infobar__body">' +
        '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
        '</div>' +
        '</div>' +
        '<div class="fancybox-toolbar">{{BUTTONS}}</div>' +
        '</div>' +
        '<div class="fancybox-slider-wrap">' +
        '<button data-fancybox-prev class="fancybox-arrow fancybox-arrow--left" title="Previous"></button>' +
        '<button data-fancybox-next class="fancybox-arrow fancybox-arrow--right" title="Next"></button>' +
        '<div class="fancybox-stage"></div>' +
        '</div>' +
        '<div class="fancybox-caption-wrap">' +
        '<div class="fancybox-caption"></div>' +
        '</div>' +
        '</div>' +
        '</div>',
      animationEffect: 'fade'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Fancybox wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      if (!selector) return;

      var $collection = $(selector);

      if (!$collection.length) return;

      config = config && $.isPlainObject(config) ? $.extend(true, {}, this._baseConfig, config) : this._baseConfig;

      this.initPopup(selector, config);
    },

    initPopup: function (el, conf) {
      var $fancybox = $(el);

      $fancybox.on('click', function () {
        var $this = $(this),
          animationDuration = $this.data('speed'),
          isGroup = $this.data('fancybox'),
          isInfinite = Boolean($this.data('is-infinite')),
          slideShowSpeed = $this.data('slideshow-speed');

        $.fancybox.defaults.animationDuration = animationDuration;

        if (isInfinite == true) {
          $.fancybox.defaults.loop = true;
        }

        if (isGroup) {
          $.fancybox.defaults.transitionEffect = 'slide';
          $.fancybox.defaults.slideShow.speed = slideShowSpeed;
        }
      });

      $fancybox.fancybox($.extend(true, {}, conf, {
        beforeShow: function (instance, slide) {
          var $fancyModal = $(instance.$refs.container),
            $fancyOverlay = $(instance.$refs.bg[0]),
            $fancySlide = $(instance.current.$slide),

            animateIn = instance.current.opts.$orig[0].dataset.animateIn,
            animateOut = instance.current.opts.$orig[0].dataset.animateOut,
            speed = instance.current.opts.$orig[0].dataset.speed,
            overlayBG = instance.current.opts.$orig[0].dataset.overlayBg,
            overlayBlurBG = instance.current.opts.$orig[0].dataset.overlayBlurBg;

          if (animateIn && $('body').hasClass('u-first-slide-init')) {
            var $fancyPrevSlide = $(instance.slides[instance.prevPos].$slide);

            $fancySlide.addClass('has-animation');

            $fancyPrevSlide.addClass('animated ' + animateOut);

            setTimeout(function () {
              $fancySlide.removeClass(animateOut);
              $fancySlide.addClass('animated ' + animateIn);
            }, speed / 2);
          } else if (animateIn) {
            var $fancyPrevSlide = $(instance.slides[instance.currPos].$slide);

            $fancySlide.addClass('has-animation');

            $fancySlide.addClass('animated ' + animateIn);

            $('body').addClass('u-first-slide-init');
          }

          if (speed) {
            $fancyOverlay.css('transition-duration', speed + 'ms');
          } else {
            $fancyOverlay.css('transition-duration', '1000ms');
          }

          if (overlayBG) {
            $fancyOverlay.css('background-color', overlayBG);
          }

          if (overlayBlurBG) {
            $('body').addClass('g-blur-30');
          }
        },

        beforeClose: function (instance, slide) {
          var $fancyModal = $(instance.$refs.container),
            $fancySlide = $(instance.current.$slide),

            animateIn = instance.current.opts.$orig[0].dataset.animateIn,
            animateOut = instance.current.opts.$orig[0].dataset.animateOut,
            overlayBlurBG = instance.current.opts.$orig[0].dataset.overlayBlurBg;

          if (animateOut) {
            $fancySlide.removeClass(animateIn).addClass(animateOut);
            $('body').removeClass('u-first-slide-init')
          }

          if (overlayBlurBG) {
            $('body').removeClass('g-blur-30')
          }
        }
      }));
    }
  }
})(jQuery);

/**
 * Go To wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';
  $.HSCore.components.HSGoTo = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Go To wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initGoTo();

      return this.pageCollection;
    },

    initGoTo: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          $target = $this.data('target'),
          type = $this.data('type'),
          showEffect = $this.data('show-effect'),
          hideEffect = $this.data('hide-effect'),
          position = JSON.parse(el.getAttribute('data-position')),
          compensation = $($this.data('compensation')).outerHeight(),
          offsetTop = $this.data('offset-top'),
          targetOffsetTop = function () {
            if (compensation) {
              return $target ? $($target).offset().top - compensation : 0;
            } else {
              return $target ? $($target).offset().top : 0;
            }
          };

        if (type == 'static') {
          $this.css({
            'display': 'inline-block'
          });
        } else {
          $this.addClass('animated').css({
            'display': 'inline-block',
            'position': type,
            'opacity': 0
          });
        }

        if (type == 'fixed' || type == 'absolute') {
          $this.css(position);
        }

        $this.on('click', function (e) {
          e.preventDefault();

          $('html, body').stop().animate({
            'scrollTop': targetOffsetTop()
          }, 800);
        });

        if (!$this.data('offset-top') && !$this.hasClass('js-animation-was-fired') && type != 'static') {
          if ($this.offset().top <= $(window).height()) {
            $this.show();

            setTimeout(function () {
              $this.addClass('js-animation-was-fired ' + showEffect).css({
                'opacity': ''
              });
            });
          }
        }

        if (type != 'static') {
          $(window).on('scroll', function () {
            if ($this.data('offset-top')) {
              if ($(window).scrollTop() >= offsetTop && !$this.hasClass('js-animation-was-fired')) {
                $this.show();

                setTimeout(function () {
                  $this.addClass('js-animation-was-fired ' + showEffect).css({
                    'opacity': ''
                  });
                });
              } else if ($(window).scrollTop() <= offsetTop && $this.hasClass('js-animation-was-fired')) {
                $this.removeClass('js-animation-was-fired ' + showEffect);

                setTimeout(function () {
                  $this.addClass(hideEffect).css({
                    'opacity': 0
                  });
                }, 100);

                setTimeout(function () {
                  $this.removeClass(hideEffect).hide();
                }, 400);
              }
            } else {
              var thisOffsetTop = $this.offset().top;

              if (!$this.hasClass('js-animation-was-fired')) {
                if ($(window).scrollTop() >= thisOffsetTop - $(window).height()) {
                  $this.show();

                  setTimeout(function () {
                    $this.addClass('js-animation-was-fired ' + showEffect).css({
                      'opacity': ''
                    });
                  });
                }
              }
            }
          });

          $(window).trigger('scroll');
        }

        //Actions
        collection = collection.add($this);
      });
    }
  };
})(jQuery);

/**
 * Countdown wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires Countdown (v2.2.0, http://hilios.github.io/jQuery.countdown), circles.js (v0.0.6)
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSCountdown = {

    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      yearsElSelector: '.years',
      monthElSelector: '.month',
      daysElSelector: '.days',
      hoursElSelector: '.hours',
      minutesElSelector: '.minutes',
      secondsElSelector: '.seconds',
      // circles
      circles: false,
      wrpClass: 'wrpClass',
      textClass: 'textClass',
      valueStrokeClass: 'valueStrokeClass',
      maxValueStrokeClass: 'maxValueStrokeClass',
      styleWrapper: 'styleWrapper',
      styleText: 'styleText'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     *
     *
     * @var
     */
    _circlesIds: [0],

    /**
     * Initialization of Countdown wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */
    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCountdowns();

      return this.pageCollection;

    },

    /**
     * Initialization of each Countdown of the page.
     *
     * @return undefined
     */
    initCountdowns: function () {

      var self = this;

      this.collection.each(function (i, el) {

        var $this = $(el),

          options = {
            endDate: $this.data('end-date') ? new Date($this.data('end-date')) : new Date(),
            startDate: $this.data('start-date') ? new Date($this.data('start-date')) : new Date(),
            yearsEl: $this.find(self.config['yearsElSelector']),
            yearsFormat: $this.data('years-format'),
            monthEl: $this.find(self.config['monthElSelector']),
            monthFormat: $this.data('month-format'),
            daysEl: $this.find(self.config['daysElSelector']),
            daysFormat: $this.data('days-format'),
            hoursEl: $this.find(self.config['hoursElSelector']),
            hoursFormat: $this.data('hours-format'),
            minutesEl: $this.find(self.config['minutesElSelector']),
            minutesFormat: $this.data('minutes-format'),
            secondsEl: $this.find(self.config['secondsElSelector']),
            secondsFormat: $this.data('seconds-format')
          };

        if (self.config['circles'] && $this.data('start-date')) self._initPiesImplementation($this, options);
        else self._initBaseImplementation($this, options);

        self.pageCollection = self.pageCollection.add($this);

      });

    },

    /**
     *
     * @param jQuery container
     * @param Object options
     *
     * @return undefined
     */
    _initBaseImplementation: function (container, options) {

      container.countdown(options.endDate, function (e) {

        if (options.yearsEl.length) {
          options.yearsEl.text(e.strftime(options.yearsFormat));
        }

        if (options.monthEl.length) {
          options.monthEl.text(e.strftime(options.monthFormat));
        }

        if (options.daysEl.length) {
          options.daysEl.text(e.strftime(options.daysFormat));
        }

        if (options.hoursEl.length) {
          options.hoursEl.text(e.strftime(options.hoursFormat));
        }

        if (options.minutesEl.length) {
          options.minutesEl.text(e.strftime(options.minutesFormat));
        }

        if (options.secondsEl.length) {
          options.secondsEl.text(e.strftime(options.secondsFormat));
        }

      });

    },

    /**
     *
     * @param jQuery container
     * @param Object options
     *
     * @return undefined
     */
    _initPiesImplementation: function (container, options) {

      var self = this,
        id,
        oneDay = 24 * 60 * 60 * 1000;

      // prepare elements

      if (options.yearsEl.length) {

        self._preparePieItem(options.yearsEl, {
          maxValue: (options.endDate.getFullYear() - options.startDate.getFullYear()),
          radius: container.data('circles-radius'),
          width: container.data('circles-stroke-width'),
          'fg-color': container.data('circles-fg-color'),
          'bg-color': container.data('circles-bg-color'),
          'additional-text': container.data('circles-additional-text'),
          'font-size': container.data('circles-font-size')
        });

      }

      if (options.monthEl.length) {

        self._preparePieItem(options.monthEl, {
          maxValue: Math.round(Math.abs((options.endDate.getTime() - options.startDate.getTime()) / (oneDay))) / 12,
          radius: container.data('circles-radius'),
          width: container.data('circles-stroke-width'),
          'fg-color': container.data('circles-fg-color'),
          'bg-color': container.data('circles-bg-color'),
          'additional-text': container.data('circles-additional-text'),
          'font-size': container.data('circles-font-size')
        });

      }

      if (options.daysEl.length) {

        self._preparePieItem(options.daysEl, {
          maxValue: self._getDaysMaxValByFormat(options.daysFormat, options.startDate, options.endDate),
          radius: container.data('circles-radius'),
          width: container.data('circles-stroke-width'),
          'fg-color': container.data('circles-fg-color'),
          'bg-color': container.data('circles-bg-color'),
          'additional-text': container.data('circles-additional-text'),
          'font-size': container.data('circles-font-size')
        });

      }

      if (options.hoursEl.length) {

        self._preparePieItem(options.hoursEl, {
          maxValue: 60,
          radius: container.data('circles-radius'),
          width: container.data('circles-stroke-width'),
          'fg-color': container.data('circles-fg-color'),
          'bg-color': container.data('circles-bg-color'),
          'additional-text': container.data('circles-additional-text'),
          'font-size': container.data('circles-font-size')
        });

      }

      if (options.minutesEl.length) {

        self._preparePieItem(options.minutesEl, {
          maxValue: 60,
          radius: container.data('circles-radius'),
          width: container.data('circles-stroke-width'),
          'fg-color': container.data('circles-fg-color'),
          'bg-color': container.data('circles-bg-color'),
          'additional-text': container.data('circles-additional-text'),
          'font-size': container.data('circles-font-size')
        });

      }

      if (options.secondsEl.length) {

        self._preparePieItem(options.secondsEl, {
          maxValue: 60,
          radius: container.data('circles-radius'),
          width: container.data('circles-stroke-width'),
          'fg-color': container.data('circles-fg-color'),
          'bg-color': container.data('circles-bg-color'),
          'additional-text': container.data('circles-additional-text'),
          'font-size': container.data('circles-font-size')
        });

      }

      // init countdown
      container.countdown(options.endDate, function (e) {

        // years
        if (options.yearsEl.length) {
          options.yearsEl.data('circle').update(e.strftime(options.yearsFormat));
        }

        // months
        if (options.monthEl.length) {

          options.monthEl.data('circle').update(e.strftime(options.monthFormat));
        }

        // days
        if (options.daysEl.length) {
          options.daysEl.data('circle').update(e.strftime(options.daysFormat));
        }

        // hours
        if (options.hoursEl.length) {
          options.hoursEl.data('circle').update(e.strftime(options.hoursFormat));
        }

        // minutes
        if (options.minutesEl.length) {
          options.minutesEl.data('circle').update(e.strftime(options.minutesFormat));
        }

        // seconds
        if (options.secondsEl.length) {
          options.secondsEl.data('circle').update(e.strftime(options.secondsFormat));
        }

      });

    },

    /**
     *
     * @param jQuery el
     * @param Object options
     *
     * @return undefined
     */
    _preparePieItem: function (el, options) {

      var self = this,
        id = self._circlesIds[self._circlesIds.length - 1] + 1;
      self._circlesIds.push(id);

      el.attr('id', 'hs-countdown-element-' + id);

      el.data('circle', Circles.create({
        id: 'hs-countdown-element-' + id,
        radius: options['radius'] || 80,
        value: 0,
        maxValue: options['maxValue'] || 100,
        width: options['width'] || 10,
        text: function (value) {
          return value + (options['additional-text'] || '');
        },
        colors: [options['bg-color'] || '#eeeeee', options['fg-color'] || '#72c02c'],
        duration: 0,
        wrpClass: self.config['wrpClass'],
        textClass: self.config['textClass'],
        valueStrokeClass: self.config['valueStrokeClass'],
        maxValueStrokeClass: self.config['maxValueStrokeClass'],
        styleWrapper: self.config['styleWrapper'],
        styleText: self.config['styleText']
      }));

      if (options['font-size']) {
        el.find('.' + self.config['textClass']).css('font-size', options['font-size'] + 'px');
      }

    },

    /**
     *
     * @param String format
     * @param Date startDate
     * @param Date endDate
     *
     * @return Number
     */
    _getDaysMaxValByFormat: function (format, startDate, endDate) {

      var oneDay = 24 * 60 * 60 * 1000;

      switch (format) {

        case '%D':

          return Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / (oneDay)));

          break;

        default:

          return 31;

      }

    }

  }

})(jQuery);

/**
 * Datepicker wrapper.
 *
 * @author Htmlstream
 * @version 1.1
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSDatepicker = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      dateFormat: 'dd.mm.yy',
      dayNamesMin: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
      prevText: '<i class="fa fa-angle-left"></i>',
      nextText: '<i class="fa fa-angle-right"></i>'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Datepicker wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initDatepicker();

      return this.pageCollection;

    },

    initDatepicker: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          to = $this.data('to'),
          type = $this.data('type'),
          minDate,
          maxDate;

        if (type == 'one-field-range') {
          var datePicker = $this.datepicker({
            dateFormat: config['dateFormat'],
            defaultDate: '+1w',
            dayNamesMin: config['dayNamesMin'],
            numberOfMonths: 1,
            showOtherMonths: true,
            prevText: config['prevText'],
            nextText: config['nextText'],
            beforeShow: $self.datepickerCustomClass,
            onSelect: function(dateText, inst) {
              console.log(inst);
            }
          }).on('change', function () {
            var activeDate = datePicker.datepicker("getDate");

            if(minDate == null) {
              minDate = activeDate;
            } else if(activeDate < minDate) {
              minDate = activeDate;
            }

            if(maxDate == null && activeDate > minDate) {
              maxDate = activeDate;
            } else if(activeDate > maxDate) {
              maxDate = activeDate;
            }
          });
        } else if (type == 'range') {
          var dateFrom = $this.datepicker({
            dateFormat: config['dateFormat'],
            defaultDate: '+1w',
            dayNamesMin: config['dayNamesMin'],
            numberOfMonths: 1,
            showOtherMonths: true,
            prevText: config['prevText'],
            nextText: config['nextText'],
            beforeShow: $self.datepickerCustomClass
          }).on('change', function () {
            dateTo.datepicker('option', 'minDate', $self.getDate(this));
          });

          var dateTo = $('#' + to).datepicker({
            dateFormat: config['dateFormat'],
            defaultDate: '+1w',
            dayNamesMin: config['dayNamesMin'],
            numberOfMonths: 1,
            showOtherMonths: true,
            prevText: config['prevText'],
            nextText: config['nextText'],
            beforeShow: $self.datepickerCustomClass
          }).on('change', function () {
            dateFrom.datepicker('option', 'maxDate', $self.getDate(this));
          });
        } else {
          $this.datepicker({
            dateFormat: config['dateFormat'],
            dayNamesMin: config['dayNamesMin'],
            showOtherMonths: true,
            prevText: config['prevText'],
            nextText: config['nextText'],
            beforeShow: $self.datepickerCustomClass
          });
        }

        //Actions
        collection = collection.add($this);
      });
    },

    datepickerCustomClass: function (el, attr) {
      var arrayOfClasses, customClass, i;

      arrayOfClasses = attr.input[0].className.split(' ');

      for (i = 0; arrayOfClasses.length > i; i++) {
        if (arrayOfClasses[i].substring(0, 6) == 'u-date') {
          customClass = arrayOfClasses[i];
        }
      }

      $('#ui-datepicker-div').addClass(customClass);
    },

    getDate: function (element) {
      var $self = this,
        date,
        config = $self.config;

      try {
        date = $.datepicker.parseDate(config['dateFormat'], element.value);
      } catch (error) {
        date = null;
      }

      return date;
    }
  };
})(jQuery);

/**
 * Slider wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSSlider = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      dateFormat: 'dd.mm.yy',
      prevText: '<i class="fa fa-angle-left"></i>',
      nextText: '<i class="fa fa-angle-right"></i>'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Slider wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
          $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initSlider();

      return this.pageCollection;

    },

    initSlider: function () {
      //Variables
      var $self = this,
          config = $self.config,
          collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
            $resultContainer = $this.data('result-container'),
            rangeBoolean = $this.data('range'),
            minVal = $this.data('min'),
            maxVal = $this.data('max'),
            defaultVal = $this.data('default'),
            step = $this.data('step');

        $this.slider({
          range: rangeBoolean == 1 ? true : 'min',
          min: minVal,
          max: maxVal,
          step: step ? step : 1,
          values: rangeBoolean == 1 ? JSON.parse('[' + defaultVal + ']') : false,
          value: defaultVal ? defaultVal : false,
          slide: function (event, ui) {
            if (rangeBoolean == 1) {
              $('#' + $resultContainer).text(ui.values[0] + ' - ' + ui.values[1]);
            } else {
              $('#' + $resultContainer).text(ui.value);
            }
          }
        });

        if (rangeBoolean == 1) {
          $('#' + $resultContainer).text($this.slider('values', 0) + ' - ' + $this.slider('values', 1));
        }

        //Actions
        collection = collection.add($this);
      });
    }

  };

})(jQuery);
