/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.2.24
*/
(function(d){void 0==d.fn.inputmask&&(d.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:d.noop,onincomplete:d.noop,oncleared:d.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:d.noop,onKeyDown:d.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:d.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,
definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,
RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(d,H,Q){var N=d.length;!H&&1<Q&&(N+=d.length*(Q-1));return N}},val:d.fn.val,escapeRegex:function(d){return d.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},d.fn.inputmask=function(F,H){var Q,N;function J(c,e){var a=b.aliases[c];return a?(a.alias&&J(a.alias),d.extend(!0,b,a),d.extend(!0,
b,e),!0):!1}function O(c){var e=!1,a=0,g=b.greedy,j=b.repeat;1==c.length&&!1==g&&(b.placeholder="");for(var c=d.map(c.split(""),function(c){var d=[];if(c==b.escapeChar)e=true;else if(c!=b.optionalmarker.start&&c!=b.optionalmarker.end||e){var j=b.definitions[c];if(j&&!e)for(c=0;c<j.cardinality;c++)d.push(B(a+c));else{d.push(c);e=false}a=a+d.length;return d}}),E=c.slice(),m=1;m<j&&g;m++)E=E.concat(c.slice());return{mask:E,repeat:j,greedy:g}}function S(c){var e=!1,a=!1,g=!1;return d.map(c.split(""),
function(c){var d=[];if(c==b.escapeChar)a=!0;else if(c==b.optionalmarker.start&&!a)g=e=!0;else if(c==b.optionalmarker.end&&!a)e=!1,g=!0;else{var m=b.definitions[c];if(m&&!a){for(var k=m.prevalidator,o=k?k.length:0,n=1;n<m.cardinality;n++){var f=o>=n?k[n-1]:[],l=f.validator,f=f.cardinality;d.push({fn:l?"string"==typeof l?RegExp(l):new function(){this.test=l}:/./,cardinality:f?f:1,optionality:e,newBlockMarker:!0==e?g:!1,offset:0,casing:m.casing,def:m.definitionSymbol|c});!0==e&&(g=!1)}d.push({fn:m.validator?
"string"==typeof m.validator?RegExp(m.validator):new function(){this.test=m.validator}:/./,cardinality:m.cardinality,optionality:e,newBlockMarker:g,offset:0,casing:m.casing,def:m.definitionSymbol|c})}else d.push({fn:null,cardinality:0,optionality:e,newBlockMarker:g,offset:0,casing:null,def:c}),a=!1;g=!1;return d}})}function V(){function c(c){var a=c.length;for(i=0;i<a&&c.charAt(i)!=b.optionalmarker.start;i++);var e=[c.substring(0,i)];i<a&&e.push(c.substring(i+1,a));return e}function a(j,k){var m=
0,f=0,o=k.length;for(i=0;i<o&&!(k.charAt(i)==b.optionalmarker.start&&m++,k.charAt(i)==b.optionalmarker.end&&f++,0<m&&m==f);i++);m=[k.substring(0,i)];i<o&&m.push(k.substring(i+1,o));var n=c(m[0]);if(1<n.length){if(o=j+n[0]+(b.optionalmarker.start+n[1]+b.optionalmarker.end)+(1<m.length?m[1]:""),-1==d.inArray(o,g)&&(g.push(o),f=O(o),s.push({mask:o,_buffer:f.mask,buffer:f.mask.slice(),tests:S(o),lastValidPosition:void 0,greedy:f.greedy,repeat:f.repeat})),o=j+n[0]+(1<m.length?m[1]:""),-1==d.inArray(o,
g)&&(g.push(o),f=O(o),s.push({mask:o,_buffer:f.mask,buffer:f.mask.slice(),tests:S(o),lastValidPosition:void 0,greedy:f.greedy,repeat:f.repeat})),1<c(n[1]).length&&a(j+n[0],n[1]+m[1]),1<m.length&&1<c(m[1]).length)a(j+n[0]+(b.optionalmarker.start+n[1]+b.optionalmarker.end),m[1]),a(j+n[0],m[1])}else o=j+m,-1==d.inArray(o,g)&&(g.push(o),f=O(o),s.push({mask:o,_buffer:f.mask,buffer:f.mask.slice(),tests:S(o),lastValidPosition:void 0,greedy:f.greedy,repeat:f.repeat}))}var s=[],g=[];d.isArray(b.mask)?d.each(b.mask,
function(c,b){a("",b.toString())}):a("",b.mask.toString());return s}function a(){return x[f]}function A(){return a().tests}function l(){return a()._buffer}function q(){return a().buffer}function I(c,e,s,g){function j(c,a){for(var d=w(c),g=e?1:0,j="",f=a.buffer,k=a.tests[d].cardinality;k>g;k--)j+=G(f,d-(k-1));e&&(j+=e);return null!=a.tests[d].fn?a.tests[d].fn.test(j,f,c,s,b):!1}if(s){var l=j(c,a());!0===l&&(l={pos:c});return l}var m=[],l=!1,t=f;d.each(x,function(a){f=a;if(t!=f&&!y(c)){if(e==this._buffer[c]||
e==b.skipOptionalPartCharacter)return m.push({activeMasksetIndex:a,result:{refresh:!0}}),this.lastValidPosition=c,!1;this.lastValidPosition=g?k()+1:-1}if((void 0==this.lastValidPosition&&c==(g?z(k()):v(-1))||g||b.numericInput?this.lastValidPosition<=b.numericInput?k():v(c):this.lastValidPosition>=z(c))&&0<=c&&c<k()){l=j(c,this);if(!1!==l){!0===l&&(l={pos:c});var d=l.pos||c;if(void 0==this.lastValidPosition||(g?b.greedy?this.lastValidPosition>d:d==q().length-1:this.lastValidPosition<d))this.lastValidPosition=
d}else this.lastValidPosition=g?c==k()?void 0:v(c):0==c?void 0:z(c);m.push({activeMasksetIndex:a,result:l})}});f=t;return m}function W(c){var e=f,s={activeMasksetIndex:0,lastValidPosition:c?k()+1:-1};d.each(x,function(a){if(void 0!=this.lastValidPosition&&(c||b.numericInput?this.lastValidPosition<s.lastValidPosition:this.lastValidPosition>s.lastValidPosition))s.activeMasksetIndex=a,s.lastValidPosition=this.lastValidPosition});f=s.activeMasksetIndex;e!=f&&(a().writeOutBuffer=!0)}function y(c){c=w(c);
c=A()[c];return void 0!=c?c.fn:!1}function w(c){return c%A().length}function B(c){return b.placeholder.charAt(c%b.placeholder.length)}function k(){return b.getMaskLength(l(),a().greedy,a().repeat,q(),b)}function v(c){var a=k();if(c>=a)return a;for(;++c<a&&!y(c););return c}function z(c){if(0>=c)return 0;for(;0<--c&&!y(c););return c}function L(c,a,b,d,j){d&&(a=X(c,a,j));d=A()[w(a)];j=b;if(void 0!=j)switch(d.casing){case "upper":j=b.toUpperCase();break;case "lower":j=b.toLowerCase()}c[a]=j}function G(c,
a,b){b&&(a=X(c,a));return c[a]}function X(c,a,b){if(b)for(;0>a&&c.length<k();){b=l().length-1;for(a=l().length;void 0!==l()[b];)c.unshift(l()[b--])}else for(;void 0==c[a]&&c.length<k();)for(b=0;void 0!==l()[b];)c.push(l()[b++]);return a}function M(c,a,b){c._valueSet(a.join(""));void 0!=b&&t(c,b)}function Y(c,a,b){for(var d=k();a<b&&a<d;a++)L(c,a,G(l().slice(),a,!0))}function T(c,a){var b=w(a);L(c,a,G(l(),b))}function P(c,e,s,g){var j=d(c).data("inputmask").isRTL,g=void 0!=g?g.slice():Z(c._valueGet(),
j).split("");d.each(x,function(c,a){a.buffer=a._buffer.slice();a.lastValidPosition=void 0;a.p=j?k():0});!0!==s&&(f=0);j&&!b.numericInput&&(g=g.reverse());var l=k();d.each(g,function(a,f){if(!0!==s||y(j?b.numericInput?z(l):l-a-1:a)){var g=j?b.numericInput?l:l-a-1:a;d(c).trigger("keypress",[!0,f.charCodeAt(0),e,s,g])}});!0===s&&(a().lastValidPosition=j?v(a().p):z(a().p))}function ba(c){return d.inputmask.escapeRegex.call(this,c)}function Z(c,a){return a?c.replace(RegExp("^("+ba(l().join(""))+")*"),
""):c.replace(RegExp("("+ba(l().join(""))+")*$"),"")}function $(a){var b=q(),f=b.slice(),g,j;if(d(a).data("inputmask").isRTL)for(j=0;j<=f.length-1;j++)if(g=w(j),A()[g].optionality)if(!y(j)||!I(j,b[j],!0))f.splice(0,1);else break;else break;else for(j=f.length-1;0<=j;j--)if(g=w(j),A()[g].optionality)if(!y(j)||!I(j,b[j],!0))f.pop();else break;else break;M(a,f)}function ca(a,b){var f=a[0];return A()&&(!0===b||!a.hasClass("hasDatepicker"))?(P(f,!1,!0),d.map(q(),function(a,c){return y(c)&&I(c,a,!0)?a:
null}).join("")):f._valueGet()}function t(a,f,k){var g=a.jquery&&0<a.length?a[0]:a;if("number"==typeof f)d(a).is(":visible")&&(k="number"==typeof k?k:f,!1==b.insertMode&&f==k&&k++,g.setSelectionRange?U?(setTimeout(function(){g.selectionStart=f;g.selectionEnd=U?f:k},10),Q=f,N=k):(g.selectionStart=f,g.selectionEnd=k):g.createTextRange&&(a=g.createTextRange(),a.collapse(!0),a.moveEnd("character",k),a.moveStart("character",f),a.select()));else{if(!d(a).is(":visible"))return{begin:0,end:0};g.setSelectionRange?
(f=g.selectionStart,k=g.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),f=0-a.duplicate().moveStart("character",-1E5),k=f+a.text.length);return{begin:f,end:k}}}function R(a){var b=!1,s=0,g=f;d.each(x,function(d,g){f=d;var m=z(k());if(void 0!=g.lastValidPosition&&g.lastValidPosition>=s&&g.lastValidPosition==m){for(var q=!0,o=0;o<=m;o++){var n=y(o),t=w(o);if(n&&(void 0==a[o]||a[o]==B(o))||!n&&a[o]!=l()[t]){q=!1;break}}if(b=b||q)return!1}s=g.lastValidPosition});
f=g;return b}function aa(c){function e(a){a=d._data(a).events;d.each(a,function(a,b){d.each(b,function(a,b){if("inputmask"==b.namespace){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function s(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get)a._valueGet||(a._valueGet=b.get,a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=d(this),b=d(this).data("inputmask"),
c=b.masksets,f=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=c[f]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);d(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=d(this),b=d(this).data("inputmask"),c=b.masksets,f=b.activeMasksetIndex;
return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=c[f]._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);d(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=d.fn.val.inputmaskpatch)d.fn.val=function(){if(arguments.length==0){var a=d(this);if(a.data("inputmask")){if(a.data("inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");
var a=d.inputmask.val.apply(a),b=d(this).data("inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return d.inputmask.val.apply(a)}var c=arguments;return this.each(function(){var a=d(this),b=d.inputmask.val.apply(a,c);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},d.extend(d.fn.val,{inputmaskpatch:!0})}function g(a,c){if(b.numericInput&&""!=b.radixPoint&&!1===b.skipRadixDance){var d=a._valueGet().indexOf(b.radixPoint);p=c.begin<=d||c.end<=d||-1==d}}
function j(b,c,d){for(var f=q();!y(b)&&0<=b-1;)b--;for(var h=b;h<c&&h<k();h++)if(y(h)){T(f,h);var g=v(h),j=G(f,g);if(j!=B(g))if(g<k()&&!1!==I(h,j,!0,p)&&A()[w(h)].def==A()[w(g)].def)L(f,h,G(f,g),!0,p),g<c&&T(f,g);else if(y(h))break}else T(f,h);void 0!=d&&L(f,p?c:z(c),d);if(!1==a().greedy){c=Z(f.join(""),p).split("");f.length=c.length;h=0;for(d=f.length;h<d;h++)f[h]=c[h];0==f.length&&(a().buffer=l().slice())}return b}function E(b,c,d,f){for(var h=q();b<=c&&b<k();b++)if(y(b)){var g=G(h,b);L(h,b,d,!0,
p);if(g!=B(b))if(d=v(b),d<k())if(!1!==I(d,g,!0,p)&&A()[w(b)].def==A()[w(d)].def)d=g;else if(y(d))break;else d=g;else break;else if(d=g,!0!==f)break}else T(h,b);f=h.length;if(!1==a().greedy){d=Z(h.join(""),p).split("");h.length=d.length;b=0;for(g=h.length;b<g;b++)h[b]=d[b];0==h.length&&(a().buffer=l().slice())}return c-(f-h.length)}function m(c){H=!1;var e=this,C=c.keyCode,r=t(e);g(e,r);if(C==b.keyCode.BACKSPACE||C==b.keyCode.DELETE||ea&&127==C||c.ctrlKey&&88==C){c.preventDefault();var h=r.begin;if(0==
r.begin&&r.end==k())Y(q(),r.begin,r.end),d.each(x,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=p?k():0});else if(1<r.end-r.begin||1==r.end-r.begin&&b.insertMode){Y(q(),r.begin,r.end);var m=k();if(!1==b.greedy)p?E(0,r.end-1,B(r.end),!0):j(r.begin,m);else for(var o=r.begin;o<r.end;o++)y(o)&&(p?E(0,r.end-1,B(r.end),!0):j(r.begin,m));P(e,!1,!0,q())}else d.each(x,function(c){f=c;h=da?r.end:r.begin;var c=q(),d=p?z(k()+1):v(-1),g=k();if(C==b.keyCode.DELETE){if(p?h>d:h<d)h=d;if(h<
g&&(b.numericInput&&""!=b.radixPoint&&c[h]==b.radixPoint?(h=c.length-1==h?h:v(h),h=j(h,g)):p?(h=E(0,h,B(h),!0),h=v(h)):h=j(h,g),void 0!=a().lastValidPosition))-1!=a().lastValidPosition&&q()[a().lastValidPosition]==l()[a().lastValidPosition]&&(a().lastValidPosition=p?v(a().lastValidPosition):0==a().lastValidPosition?-1:z(a().lastValidPosition)),(p?a().lastValidPosition>d:a().lastValidPosition<d)?(a().lastValidPosition=void 0,a().p=d):(a().writeOutBuffer=!0,a().p=h)}else if(C==b.keyCode.BACKSPACE)if(p?
h<=d:h>d){if(h-=1,b.numericInput&&""!=b.radixPoint&&c[h]==b.radixPoint?(h=E(0,c.length-1==h?h:h-1,B(h),!0),h++):p?(h=E(0,h,B(h),!0),h=c[h+1]==b.radixPoint?h+1:v(h)):h=j(h,g),void 0!=a().lastValidPosition)-1!=a().lastValidPosition&&q()[a().lastValidPosition]==l()[a().lastValidPosition]&&(a().lastValidPosition=p?v(a().lastValidPosition):0==a().lastValidPosition?-1:z(a().lastValidPosition)),(p?a().lastValidPosition>d:a().lastValidPosition<d)?(a().lastValidPosition=void 0,a().p=d):(a().writeOutBuffer=
!0,a().p=h)}else 0<f&&(a().lastValidPosition=void 0,a().writeOutBuffer=!0,a().p=d,f=0,a().buffer=l().slice(),a().p=p?z(k()+1):v(-1),a().lastValidPosition=void 0)});W(p);M(e,q(),a().p);e._valueGet()==l().join("")&&d(e).trigger("cleared");b.showTooltip&&n.prop("title",a().mask)}else C==b.keyCode.END||C==b.keyCode.PAGE_DOWN?setTimeout(function(){var d=p?a().lastValidPosition:v(a().lastValidPosition);!b.insertMode&&(d==k()&&!c.shiftKey)&&d--;t(e,c.shiftKey?r.begin:d,d)},0):C==b.keyCode.HOME&&!c.shiftKey||
C==b.keyCode.PAGE_UP?t(e,0,c.shiftKey?r.begin:0):C==b.keyCode.ESCAPE?(e._valueSet(a().undoBuffer),P(e,!0,!0)):C==b.keyCode.INSERT?(b.insertMode=!b.insertMode,t(e,!b.insertMode&&r.begin==k()?r.begin-1:r.begin)):!1==b.insertMode&&!c.shiftKey&&(C==b.keyCode.RIGHT?setTimeout(function(){var a=t(e);t(e,a.begin)},0):C==b.keyCode.LEFT&&setTimeout(function(){var a=t(e);t(e,a.begin-1)},0));b.onKeyDown.call(this,c,q(),b);J=-1!=d.inArray(C,b.ignorables)}function F(c,g,e,l,h,m){if(void 0==e&&H)return!1;H=!0;var o=
d(this),c=c||window.event,e=e||c.which||c.charCode||c.keyCode,n=String.fromCharCode(e);if(b.numericInput&&n==b.radixPoint){var s=this._valueGet().indexOf(b.radixPoint);t(this,v(-1!=s?s:k()))}if((c.ctrlKey||c.metaKey||J)&&!0!==g)return!0;if(e){var D,w;g?(e=h?m:a().p,D={begin:e,end:e}):D=t(this);e=f;d.each(x,function(c){f=c;a().undoBuffer=q().join("");if(D.end-D.begin>1||D.end-D.begin==1&&b.insertMode){c=D.end<k()?D.end:k();Y(q(),D.begin,c);var d=k();if(b.greedy==false)p?E(0,c-1,B(c),true):j(D.begin,
d);else for(var e=D.begin;e<c;e++)y(e)&&(p?E(0,c-1,B(c),true):j(D.begin,d))}});f=e;if(p){var u=z(D.end),e=I(u==k()||G(q(),u)==b.radixPoint?z(u):u,n,h,p);!0===h&&(e=[{activeMasksetIndex:f,result:e}]);d.each(e,function(c,d){f=d.activeMasksetIndex;a().writeOutBuffer=true;var e=d.result;if(e!==false){var g=false,h=q();if(e!==true){g=e.refresh;u=e.pos!=void 0?e.pos:u;n=e.c!=void 0?e.c:n}if(g!==true){var g=k(),l=v(-1),e=l;if(b.insertMode==true){if(a().greedy==true)for(var m=h.slice();G(m,e,true)!=B(e)&&
e<=u;)e=e==g?g+1:v(e);if(e<=u&&(a().greedy||h.length<g||G(h,u)==B(u))){if(h[l]!=B(l)&&h.length<g){h=X(h,-1,p);D.end!=0&&(u=u+h)}j(e,u,n)}else a().writeOutBuffer=false}else L(h,u,n,true,p)}a().p=u}});!0!==h&&W(p);if(!1!==l&&(d.each(e,function(a,b){if(b.activeMasksetIndex==f){w=b;return false}}),void 0!=w))if(setTimeout(function(){b.onKeyValidation.call(this,w.result,b)},0),a().writeOutBuffer&&!1!==w.result){var A=q();M(this,A,g?void 0:b.numericInput?v(a().p):a().p);setTimeout(function(){R(A)&&o.trigger("complete")},
0)}else a().buffer=a().undoBuffer.split("")}else u=v(D.begin-1),e=I(u,n,h,p),!0===h&&(e=[{activeMasksetIndex:f,result:e}]),d.each(e,function(c,d){f=d.activeMasksetIndex;a().writeOutBuffer=true;var e=d.result;if(e!==false){var h=false,g=q();if(e!==true){h=e.refresh;u=e.pos!=void 0?e.pos:u;n=e.c!=void 0?e.c:n}if(h!==true)if(b.insertMode==true){e=k();for(h=g.slice();G(h,e,true)!=B(e)&&e>=u;)e=e==0?-1:z(e);e>=u?E(u,g.length,n):a().writeOutBuffer=false}else L(g,u,n,true,p);a().p=v(u)}}),!0!==h&&W(p),!1!==
l&&(d.each(e,function(a,b){if(b.activeMasksetIndex==f){w=b;return false}}),void 0!=w&&(setTimeout(function(){b.onKeyValidation.call(this,w.result,b)},0),a().writeOutBuffer&&!1!==w.result?(u=a().p,A=q(),M(this,A,g?void 0:u),setTimeout(function(){R(A)&&o.trigger("complete")},0)):a().buffer=a().undoBuffer.split("")));U&&!0!==g&&t(this,Q,N);b.showTooltip&&o.prop("title",a().mask);c.preventDefault()}}function o(c){var e=d(this),f=c.keyCode,g=q();b.onKeyUp.call(this,c,g,b);f==b.keyCode.TAB&&(e.hasClass("focus.inputmask")&&
0==this._valueGet().length&&b.showMaskOnFocus)&&(g=l().slice(),M(this,g),p||t(this,0),a().undoBuffer=this._valueGet())}var n=d(c);if(n.is(":input")){b.showTooltip&&n.prop("title",a().mask);a().greedy=a().greedy?a().greedy:0==a().repeat;var K=n.prop("maxLength");k()>K&&-1<K&&(K<l().length&&(l().length=K),!1==a().greedy&&(a().repeat=Math.round(K/l().length)),n.prop("maxLength",2*k()));n.data("inputmask",{masksets:x,activeMasksetIndex:f,opts:b,isRTL:!1});s(c);a().undoBuffer=c._valueGet();var H=!1,J=
!1,p=!1;if("rtl"==c.dir||b.numericInput)("rtl"==c.dir||b.numericInput&&b.rightAlignNumerics)&&n.css("text-align","right"),c.dir="ltr",n.removeAttr("dir"),K=n.data("inputmask"),K.isRTL=!0,n.data("inputmask",K),p=!0;n.unbind(".inputmask");n.removeClass("focus.inputmask");n.bind("mouseenter.inputmask",function(){var a=d(this),c=q();if(!a.hasClass("focus.inputmask")&&b.showMaskOnHover){a=this._valueGet().length;if(a<c.length){a==0&&(c=l().slice());M(this,c)}}}).bind("blur.inputmask",function(){var c=
d(this),e=this._valueGet(),g=q();c.removeClass("focus.inputmask");e!=a().undoBuffer&&c.change();b.clearMaskOnLostFocus&&e!=""&&(e==l().join("")?this._valueSet(""):$(this));if(!R(g)){c.trigger("incomplete");if(b.clearIncomplete){d.each(x,function(a,c){c.buffer=c._buffer.slice();c.lastValidPosition=void 0;c.p=p?k():0});f=0;if(b.clearMaskOnLostFocus)this._valueSet("");else{g=l().slice();M(this,g)}}}}).bind("focus.inputmask",function(){var c=d(this),e=this._valueGet();if(b.showMaskOnFocus&&!c.hasClass("focus.inputmask")&&
(!b.showMaskOnHover||b.showMaskOnHover&&e=="")){e=e.length;if(e<q().length){if(e==0){a().buffer=l().slice();a().p=p?z(k()):v(-1)}t(this,a().p)}}c.addClass("focus.inputmask");a().undoBuffer=this._valueGet()}).bind("mouseleave.inputmask",function(){var a=d(this);b.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||(this._valueGet()==l().join("")||this._valueGet()==""?this._valueSet(""):$(this)))}).bind("click.inputmask",function(){var c=this;setTimeout(function(){var e=t(c),f=q();if(e.begin==e.end){var j=
e.begin,h=a().lastValidPosition;g(c,e);if(p){e=b.numericInput?b.skipRadixDance===false&&b.radixPoint!=""&&d.inArray(b.radixPoint,f)!=-1?d.inArray(b.radixPoint,f):k():z((h==void 0?k():h)+1);t(c,j>e&&(I(j,f[j],true,p)!==false||!y(j))?j:e)}else{e=v(h==void 0?-1:h);t(c,j<e&&(I(j,f[j],true,p)!==false||!y(j))?j:e)}}},0)}).bind("dblclick.inputmask",function(){var c=this;a().lastValidPosition!=void 0&&setTimeout(function(){p?t(c,z(a().lastValidPosition),k()):t(c,0,v(a().lastValidPosition))},0)}).bind("keydown.inputmask",
m).bind("keypress.inputmask",F).bind("keyup.inputmask",o).bind(fa+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this,c=q();setTimeout(function(){t(a,P(a,true,false));R(c)&&n.trigger("complete")},0)}).bind("setvalue.inputmask",function(){a().undoBuffer=this._valueGet();P(this,true,true);this._valueGet()==l().join("")&&this._valueSet("")}).bind("complete.inputmask",b.oncomplete).bind("incomplete.inputmask",b.onincomplete).bind("cleared.inputmask",b.oncleared);P(c,!0);var O;try{O=document.activeElement}catch(S){}O===
c?(n.addClass("focus.inputmask"),t(c,a().lastValidPosition)):b.clearMaskOnLostFocus&&(q().join("")==l().join("")?c._valueSet(""):$(c));e(c)}}var b=d.extend(!0,{},d.inputmask.defaults,H),fa=function(a){var b=document.createElement("input"),a="on"+a,d=a in b;d||(b.setAttribute(a,"return;"),d="function"==typeof b[a]);return d}("paste")?"paste":"input",ea=null!=navigator.userAgent.match(/iphone/i),U=null!=navigator.userAgent.match(/android.*safari.*/i),da;if(U){var ga=navigator.userAgent.match(/safari.*/i);
da=533>=parseInt(RegExp(/[0-9]+/).exec(ga))}var x,f=0;if("string"==typeof F)switch(F){case "mask":return J(b.alias,H),x=V(),this.each(function(){aa(this)});case "unmaskedvalue":return x=this.data("inputmask").masksets,f=this.data("inputmask").activeMasksetIndex,b=this.data("inputmask").opts,ca(this);case "remove":return this.each(function(){var a=d(this),e=this;setTimeout(function(){if(a.data("inputmask")){x=a.data("inputmask").masksets;f=a.data("inputmask").activeMasksetIndex;b=a.data("inputmask").opts;
e._valueSet(ca(a,!0));a.removeData("inputmask");a.unbind(".inputmask");a.removeClass("focus.inputmask");var d;Object.getOwnPropertyDescriptor&&(d=Object.getOwnPropertyDescriptor(e,"value"));d&&d.get?e._valueGet&&Object.defineProperty(e,"value",{get:e._valueGet,set:e._valueSet}):document.__lookupGetter__&&e.__lookupGetter__("value")&&e._valueGet&&(e.__defineGetter__("value",e._valueGet),e.__defineSetter__("value",e._valueSet));delete e._valueGet;delete e._valueSet}},0)});case "getemptymask":return this.data("inputmask")?
(x=this.data("inputmask").masksets,f=this.data("inputmask").activeMasksetIndex,x[f]._buffer.join("")):"";case "hasMaskedValue":return this.data("inputmask")?!this.data("inputmask").opts.autoUnmask:!1;case "isComplete":return x=this.data("inputmask").masksets,f=this.data("inputmask").activeMasksetIndex,b=this.data("inputmask").opts,R(this[0]._valueGet().split(""));default:return J(F,H)||(b.mask=F),x=V(),this.each(function(){aa(this)})}else{if("object"==typeof F)return b=d.extend(!0,{},d.inputmask.defaults,
F),J(b.alias,F),x=V(),this.each(function(){aa(this)});if(void 0==F)return this.each(function(){var a=d(this).attr("data-inputmask");if(a&&""!=a)try{var a=a.replace(RegExp("'","g"),'"'),e=d.parseJSON("{"+a+"}");b=d.extend(!0,{},d.inputmask.defaults,e);J(b.alias,e);b.alias=void 0;d(this).inputmask(b)}catch(f){}})}return this})})(jQuery);
