/**
 * Name: Handlebars.js
 * Desc: JavaScript Templating
 * Author: Yehuda Katz
 * Version: runtime-2.0.0
 * Website: http://handlebarsjs.com
 */
(function(u,t){"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?module.exports=t():u.Handlebars=u.Handlebars||t()})(this,function(){var u=function(){function p(l){this.string=l}p.prototype.toString=function(){return""+this.string};return p}(),t=function(p){function l(a){return k[a]}var f={},k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},d=/[&<>"'`]/g,g=/[&<>"'`]/;f.extend=function(a){for(var h=1;h<arguments.length;h++)for(var d in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],d)&&(a[d]=arguments[h][d]);return a};var n=Object.prototype.toString;f.toString=n;var r=function(a){return"function"===typeof a};r(/x/)&&(r=function(a){return"function"===typeof a&&"[object Function]"===n.call(a)});f.isFunction=r;var h=Array.isArray||function(a){return a&&"object"===typeof a?"[object Array]"===n.call(a):!1};f.isArray=h;f.escapeExpression=function(a){if(a instanceof p)return a.toString();if(null==a)return"";if(!a)return a+"";a=""+a;return g.test(a)?a.replace(d,l):a};f.isEmpty=function(a){return a||0===a?h(a)&&0===a.length?!0:!1:!0};f.appendContextPath=function(a,h){return(a?a+".":"")+h};return f}(u),v=function(){function p(f,k){var d;k&&k.firstLine&&(d=k.firstLine,f+=" - "+d+":"+k.firstColumn);for(var g=Error.prototype.constructor.call(this,f),n=0;n<l.length;n++)this[l[n]]=g[l[n]];d&&(this.lineNumber=d,this.column=k.firstColumn)}var l="description fileName lineNumber message name number stack".split(" ");p.prototype=Error();return p}(),x=function(p,l){function f(e,b){this.helpers=e||{};this.partials=b||{};k(this)}function k(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new n("Missing helper: '"+arguments[arguments.length-1].name+"'");});e.registerHelper("blockHelperMissing",function(b,c){var a=c.inverse,h=c.fn;if(!0===b)return h(this);if(!1===b||null==b)return a(this);if(r(b))return 0<b.length?(c.ids&&(c.ids=[c.name]),e.helpers.each(b,c)):a(this);c.data&&c.ids&&(a=q(c.data),a.contextPath=g.appendContextPath(c.data.contextPath,c.name),c={data:a});return h(b,c)});e.registerHelper("each",function(b,c){if(!c)throw new n("Must pass iterator to #each");var e=c.fn,a=c.inverse,d=0,f="",m,l;c.data&&c.ids&&(l=g.appendContextPath(c.data.contextPath,c.ids[0])+".");h(b)&&(b=b.call(this));c.data&&(m=q(c.data));if(b&&"object"===typeof b)if(r(b))for(var k=b.length;d<k;d++)m&&(m.index=d,m.first=0===d,m.last=d===b.length-1,l&&(m.contextPath=l+d)),f+=e(b[d],{data:m});else for(k in b)b.hasOwnProperty(k)&&(m&&(m.key=k,m.index=d,m.first=0===d,l&&(m.contextPath=l+k)),f+=e(b[k],{data:m}),d++);0===d&&(f=a(this));return f});e.registerHelper("if",function(b,c){h(b)&&(b=b.call(this));return!c.hash.includeZero&&!b||g.isEmpty(b)?c.inverse(this):c.fn(this)});e.registerHelper("unless",function(b,c){return e.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})});e.registerHelper("with",function(b,c){h(b)&&(b=b.call(this));var e=c.fn;if(g.isEmpty(b))return c.inverse(this);if(c.data&&c.ids){var a=q(c.data);a.contextPath=g.appendContextPath(c.data.contextPath,c.ids[0]);c={data:a}}return e(b,c)});e.registerHelper("log",function(b,c){var a=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;e.log(a,b)});e.registerHelper("lookup",function(b,c){return b&&b[c]})}var d={},g=p,n=l;d.VERSION="2.0.0";d.COMPILER_REVISION=6;d.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};var r=g.isArray,h=g.isFunction,a=g.toString;d.HandlebarsEnvironment=f;f.prototype={constructor:f,logger:m,log:w,registerHelper:function(e,b){if("[object Object]"===a.call(e)){if(b)throw new n("Arg not supported with multiple helpers");g.extend(this.helpers,e)}else this.helpers[e]=b},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,b){"[object Object]"===a.call(e)?g.extend(this.partials,e):this.partials[e]=b},unregisterPartial:function(e){delete this.partials[e]}};var m={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,b){if(m.level<=e){var c=m.methodMap[e];"undefined"!==typeof console&&console[c]&&console[c].call(console,b)}}};d.logger=m;var w=m.log;d.log=w;var q=function(e){var b=g.extend({},e);b._parent=e;return b};d.createFrame=q;return d}(t,v),y=function(p,l,f){function k(h,a,d,f,q){var e=function(b,c){c=c||{};return d.call(h,b,h.helpers,h.partials,c.data||f,q&&[b].concat(q))};e.program=a;e.depth=q?q.length:0;return e}var d={},g=f.COMPILER_REVISION,n=f.REVISION_CHANGES,r=f.createFrame;d.checkRevision=function(h){var a=h&&h[0]||1;if(a!==g){if(a<g)throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n[g]+") or downgrade your runtime to an older version ("+n[a]+").");throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+h[1]+").");}};d.template=function(h,a){if(!a)throw new l("No environment passed to template");if(!h||!h.main)throw new l("Unknown template object: "+typeof h);a.VM.checkRevision(h.compiler);var d={lookup:function(a,e){for(var b=a.length,c=0;c<b;c++)if(a[c]&&null!=a[c][e])return a[c][e]},lambda:function(a,e){return"function"===typeof a?a.call(e):a},escapeExpression:p.escapeExpression,invokePartial:function(d,e,b,c,f,k,g,m,n){f&&(c=p.extend({},c,f));f=a.VM.invokePartial.call(this,d,b,c,k,g,m,n);null==f&&a.compile&&(k={helpers:k,partials:g,data:m,depths:n},g[b]=a.compile(d,{data:void 0!==m,compat:h.compat},a),f=g[b](c,k));if(null!=f){if(e){d=f.split("\n");b=0;for(c=d.length;b<c&&(d[b]||b+1!==c);b++)d[b]=e+d[b];f=d.join("\n")}return f}throw new l("The partial "+b+" could not be compiled when running in runtime-only mode");},fn:function(a){return h[a]},programs:[],program:function(a,e,b){var c=this.programs[a],d=this.fn(a);e||b?c=k(this,a,d,e,b):c||(c=this.programs[a]=k(this,a,d));return c},data:function(a,e){for(;a&&e--;)a=a._parent;return a},merge:function(a,e){var b=a||e;a&&e&&a!==e&&(b=p.extend({},e,a));return b},noop:a.VM.noop,compilerInfo:h.compiler},f=function(a,e){e=e||{};var b=e.data;f._setup(e);e.partial||!h.useData||b&&"root"in b||(b=b?r(b):{},b.root=a);var c;h.useDepths&&(c=e.depths?[a].concat(e.depths):[a]);return h.main.call(d,a,d.helpers,d.partials,b,c)};f.isTop=!0;f._setup=function(f){f.partial?(d.helpers=f.helpers,d.partials=f.partials):(d.helpers=d.merge(f.helpers,a.helpers),h.usePartial&&(d.partials=d.merge(f.partials,a.partials)))};f._child=function(a,e,b){if(h.useDepths&&!b)throw new l("must pass parent depths");return k(d,a,h[a],e,b)};return f};d.program=k;d.invokePartial=function(d,a,f,k,g,e,b){k={partial:!0,helpers:k,partials:g,data:e,depths:b};if(void 0===d)throw new l("The partial "+a+" could not be found");if(d instanceof Function)return d(f,k)};d.noop=function(){return""};return d}(t,v,x);return function(p,l,f,k,d){var g=function(){var g=new p.HandlebarsEnvironment;k.extend(g,p);g.SafeString=l;g.Exception=f;g.Utils=k;g.escapeExpression=k.escapeExpression;g.VM=d;g.template=function(f){return d.template(f,g)};return g},n=g();n.create=g;return n["default"]=n}(x,u,v,t,y)});