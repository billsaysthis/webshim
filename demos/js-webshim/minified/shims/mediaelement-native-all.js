jQuery.webshims.register("mediaelement-swf",function(e,f,p,r,s,m){var j=f.mediaelement,E=p.swfobject,B=Modernizr.audio&&Modernizr.video,F=E.hasFlashPlayerVersion("9.0.115"),t=0,p={paused:!0,ended:!1,currentSrc:"",duration:p.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)f.error("buffered index size error");else return 0},end:function(a){if(a)f.error("buffered index size error");else return 0},length:0}},g=Object.keys(p),A={currentTime:0,volume:1,
muted:!1};Object.keys(A);var z=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:s},p,A),w=/^jwplayer-/,l=function(a){if(a=r.getElementById(a.replace(w,"")))return a=f.data(a,"mediaelement"),a.isActive=="flash"?a:null},n=function(a){return(a=f.data(a,"mediaelement"))&&a.isActive=="flash"?a:null},h=function(a,b){b=e.Event(b);b.preventDefault();e.event.trigger(b,s,a)},u,C=m.playerPath||f.cfg.basePath+
"jwplayer/"+(m.playerName||"player.swf"),x=m.pluginPath||f.cfg.basePath+"swf/jwwebshims.swf";f.extendUNDEFProp(m.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});f.extendUNDEFProp(m.jwVars,{screencolor:"ffffffff"});f.extendUNDEFProp(m.jwAttrs,{bgcolor:"#000000"});var c=function(a,b){var c=a.duration;if(!(c&&a._durationCalcs>0)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||a.duration<=0||a.duration===a._lastDuration)a.duration=c}catch(d){}a.duration!=
a._lastDuration?(h(a._elem,"durationchange"),(a._elemNodeName=="audio"||a._callMeta)&&j.jwEvents.Model.META(e.extend({duration:a.duration},b),a),a._durationCalcs--):a._durationCalcs++}};j.jwEvents={View:{PLAY:function(a){var b=l(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;h(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(a){var b=l(a.id);if(b&&"percentage"in a&&b._bufferedEnd!=a.percentage){b.networkState=a.percentage==100?1:2;
(isNaN(b.duration)||a.percentage>5&&a.percentage<25||a.percentage===100)&&c(b,a);if(b.ended)b.ended=!1;if(b.duration){if(a.percentage>1&&b.readyState<3)b.readyState=3,h(b._elem,"canplay");if(b._bufferedEnd&&b._bufferedEnd>a.percentage)b._bufferedStart=b.currentTime||0;b._bufferedEnd=a.percentage;b.buffered.length=1;if(a.percentage==100)b.networkState=1,b.readyState=4;e.event.trigger("progress",s,b._elem,!0)}}},META:function(a,b){if(b=b&&b.networkState?b:l(a.id))if("duration"in a){if(!b._metadata||
!((!a.height||b.videoHeight==a.height)&&a.duration===b.duration)){b._metadata=!0;var c=b.duration;if(a.duration)b.duration=a.duration;b._lastDuration=b.duration;if(a.height||a.width)b.videoHeight=a.height||0,b.videoWidth=a.width||0;if(!b.networkState)b.networkState=2;if(b.readyState<1)b.readyState=1;c!==b.duration&&h(b._elem,"durationchange");h(b._elem,"loadedmetadata")}}else b._callMeta=!0},TIME:function(a){var b=l(a.id);if(b&&b.currentTime!==a.position){b.currentTime=a.position;b.duration&&b.duration<
b.currentTime&&c(b,a);if(b.readyState<2)b.readyState=2;if(b.ended)b.ended=!1;h(b._elem,"timeupdate")}},STATE:function(a){var b=l(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.readyState>1)b.readyState=1;if(b.ended)b.ended=!1;h(b._elem,"waiting");break;case "PLAYING":b.paused=!1;b._ppFlag=!0;b.duration||c(b,a);if(b.readyState<3)b.readyState=3,h(b._elem,"canplay");if(b.ended)b.ended=!1;h(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,h(b._elem,"pause");
break;case "COMPLETED":if(b.readyState<4)b.readyState=4;b.ended=!0;h(b._elem,"ended")}}},Controller:{ERROR:function(a){var b=l(a.id);b&&j.setError(b._elem,a.message)},SEEK:function(a){var b=l(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=a.position)b.currentTime=a.position,h(b._elem,"timeupdate")}},VOLUME:function(a){var b=l(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,h(b._elem,"volumechange")},MUTE:function(a){if(!u||!a.state){var b=
l(a.id);if(b&&b.muted!=a.state)b.muted=a.state,h(b._elem,"volumechange")}}}};var d=function(a){e.each(j.jwEvents,function(b,c){e.each(c,function(c){a.jwapi["add"+b+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+b+"."+c)})})},k=function(a){a&&(a._ppFlag===s&&e.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if(a.isActive=="flash"&&(a._ppFlag===s||!a.paused))try{e(a._elem).play()}catch(b){}},1)},i=function(a){if(a&&a._elemNodeName=="video"){var b,c,d,k,v,o,j,i,f=function(f,g){if(g&&
f&&!(g<1||f<1||a.isActive!="flash"))if(b&&(b.remove(),b=!1),k=f,v=g,clearTimeout(j),c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d){o=o||e(a._elem).getShadowElement();var q;c&&!d?(q=o.height(),f*=q/g,g=q):!c&&d&&(q=o.width(),g*=q/f,f=q);i=!0;setTimeout(function(){i=!1},9);o.css({width:f,height:g})}},g=function(){if(!(a.isActive!="flash"||e.prop(a._elem,"readyState")&&e.prop(this,"videoWidth"))){var o=e.prop(a._elem,"poster");if(o&&(c=a._elem.style.width=="auto",d=a._elem.style.height==
"auto",c||d))b&&(b.remove(),b=!1),b=e('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(j);var a=this,c=a.naturalWidth||a.width||a.offsetWidth,d=a.naturalHeight||a.height||a.offsetHeight;d&&c?(f(c,d),a=null):setTimeout(function(){c=a.naturalWidth||a.width||a.offsetWidth;d=a.naturalHeight||a.height||a.offsetHeight;f(c,d);b&&(b.remove(),b=!1);a=null},9);e(this).unbind()}).prop("src",
o).appendTo("body").each(function(){this.complete||this.error?e(this).triggerHandler("alreadycomplete"):(clearTimeout(j),j=setTimeout(function(){e(a._elem).triggerHandler("error")},9999))})}};e(a._elem).bind("loadedmetadata",function(){f(e.prop(this,"videoWidth"),e.prop(this,"videoHeight"))}).bind("emptied",g).bind("swfstageresize",function(){i||f(k,v)}).bind("emptied",function(){k=void 0;v=void 0}).triggerHandler("swfstageresize");g();e.prop(a._elem,"readyState")&&f(e.prop(a._elem,"videoWidth"),
e.prop(a._elem,"videoHeight"))}};j.playerResize=function(a){a&&(a=r.getElementById(a.replace(w,"")))&&e(a).triggerHandler("swfstageresize")};e(r).bind("emptied",function(a){a=n(a.target);k(a)});var q;j.jwPlayerReady=function(a){var b=l(a.id);if(b&&b.jwapi){clearTimeout(q);b.jwData=a;b.shadowElem.removeClass("flashblocker-assumed");b.wasSwfReady?e(b._elem).mediaLoad():(a=parseFloat(a.version,10),(a<5.6||a>=6)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),e.prop(b._elem,"volume",b.volume),
e.prop(b._elem,"muted",b.muted),d(b));b.wasSwfReady=!0;var a=b.actionQueue.length,c=0,j;if(a&&b.isActive=="flash")for(;b.actionQueue.length&&a>c;)c++,j=b.actionQueue.shift(),b.jwapi[j.fn].apply(b.jwapi,j.args);if(b.actionQueue.length)b.actionQueue=[];k(b)}};var D=e.noop;if(B){var J={play:1,playing:1},G="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),H=G.map(function(a){return a+".webshimspolyfill"}).join(" "),K=function(a){var b=f.data(a.target,
"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==(b.activating=="flash")&&(a.stopImmediatePropagation(),J[a.type]&&b.isActive!=b.activating&&e(a.target).pause())},D=function(a){e(a).unbind(H).bind(H,K);G.forEach(function(b){f.moveToFirstEvent(a,b)})};D(r)}j.setActive=function(a,b,c){c||(c=f.data(a,"mediaelement"));if(c&&c.isActive!=b){b!="html5"&&b!="flash"&&f.warn("wrong type for mediaelement activating: "+b);var d=f.data(a,"shadowData");c.activating=b;e(a).pause();c.isActive=
b;b=="flash"?(d.shadowElement=d.shadowFocusElement=c.shadowElem[0],e(a).hide().getShadowElement().show()):(e(a).show().getShadowElement().hide(),d.shadowElement=d.shadowFocusElement=!1)}};var L=function(){var a="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),b=a.length;return function(c){if(c){for(var d=b,e=c.networkState;--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&
h(c._elem,"emptied")}}}(),I=function(a,b){var c=a._elem,d=a.shadowElem;e(c)[b?"addClass":"removeClass"]("webshims-controls");a._elemNodeName=="audio"&&!b?d.css({width:0,height:0}):d.css({width:c.style.width||e(c).width(),height:c.style.height||e(c).height()})};j.createSWF=function(a,b,c){if(F){t<1?t=1:t++;var d=e.extend({},m.jwVars,{image:e.prop(a,"poster")||"",file:b.srcProp}),k=e(a).data("jwvars")||{};if(c&&c.swfCreated)j.setActive(a,"flash",c),L(c),c.currentSrc=b.srcProp,e.extend(d,k),m.changeJW(d,
a,b,c,"load"),y(a,"sendEvent",["LOAD",d]);else{var v=e.prop(a,"controls"),o="jwplayer-"+f.getID(a),g=e.extend({},m.jwParams,e(a).data("jwparams")),h=a.nodeName.toLowerCase(),n=e.extend({},m.jwAttrs,{name:o,id:o},e(a).data("jwattrs")),l=e('<div class="polyfill-'+h+' polyfill-mediaelement" id="wrapper-'+o+'"><div id="'+o+'"></div>').css({position:"relative",overflow:"hidden"}),c=f.data(a,"mediaelement",f.objectCreate(z,{actionQueue:{value:[]},shadowElem:{value:l},_elemNodeName:{value:h},_elem:{value:a},
currentSrc:{value:b.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=c.buffered.length)f.error("buffered index size error");else return 0},end:function(a){if(a>=c.buffered.length)f.error("buffered index size error");else return(c.duration-c._bufferedStart)*c._bufferedEnd/100+c._bufferedStart},length:0}}}));I(c,v);l.insertBefore(a);B&&e.extend(c,{volume:e.prop(a,"volume"),muted:e.prop(a,"muted")});e.extend(d,{id:o,controlbar:v?m.jwVars.controlbar||(h=="video"?"over":"bottom"):
h=="video"?"none":"bottom",icons:""+(v&&h=="video")},k,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});d.plugins?d.plugins+=","+x:d.plugins=x;f.addShadowDom(a,l);D(a);j.setActive(a,"flash",c);m.changeJW(d,a,b,c,"embed");i(c);E.embedSWF(C,o,"100%","100%","9.0.0",!1,d,g,n,function(b){if(b.success)c.jwapi=b.ref,v||e(b.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!b.ref.parentNode&&l[0].parentNode||b.ref.style.display=="none")l.addClass("flashblocker-assumed"),
e(a).trigger("flashblocker"),f.warn("flashblocker assumed");e(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),q||(clearTimeout(q),q=setTimeout(function(){var a=e(b.ref);a[0].offsetWidth>1&&a[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(a[0].offsetWidth<2||a[0].offsetHeight<2)&&f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},
8E3))})}}else setTimeout(function(){e(a).mediaLoad()},1)};var y=function(a,b,c,d){return(d=d||n(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},c,d=function(d){a=="audio"&&(d=="videoHeight"||d=="videoWidth")||(b[d]={get:function(){var a=n(this);return a?a[d]:B&&c[d].prop._supget?c[d].prop._supget.apply(this):
z[d]},writeable:!1})},j=function(a,c){d(a);delete b[a].writeable;b[a].set=c};j("volume",function(a){var b=n(this);if(b){if(a*=100,!isNaN(a)){(a<0||a>100)&&f.error("volume greater or less than allowed "+a/100);b.muted&&(u=!0);y(this,"sendEvent",["VOLUME",a],b);if(u){try{b.jwapi.sendEvent("mute","true")}catch(d){}u=!1}setTimeout(function(){a/=100;if(!(b.volume==a||b.isActive!="flash"))b.volume=a,h(b._elem,"volumechange"),b=null},1)}}else if(c.volume.prop._supset)return c.volume.prop._supset.apply(this,
arguments)});j("muted",function(a){var b=n(this);if(b)a=!!a,y(this,"sendEvent",["mute",""+a],b),setTimeout(function(){if(!(b.muted==a||b.isActive!="flash"))b.muted=a,h(b._elem,"volumechange"),b=null},1);else if(c.muted.prop._supset)return c.muted.prop._supset.apply(this,arguments)});j("currentTime",function(a){var b=n(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=!0;b.stopPlayPause=!1},50);y(this,"sendEvent",["SEEK",""+a],b);
if(b.paused){if(b.readyState>0)b.currentTime=a,h(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(d){}}}}else if(c.currentTime.prop._supset)return c.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=n(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),y(this,"sendEvent",["play",a=="play"],b),setTimeout(function(){if(b.isActive=="flash"&&(b._ppFlag=!0,b.paused!=(a!="play")))b.paused=a!="play",h(b._elem,a)},1);
else if(c[a].prop._supvalue)return c[a].prop._supvalue.apply(this,arguments)}}});g.forEach(d);f.onNodeNamesPropertyModify(a,"controls",function(b,c){var d=n(this);e(this)[c?"addClass":"removeClass"]("webshims-controls");if(d){try{y(this,c?"showControls":"hideControls",[a],d)}catch(j){f.warn("you need to generate a crossdomain.xml")}a=="audio"&&I(d,c);e(d.jwapi).attr("tabindex",c?"0":"-1")}});c=f.defineNodeNameProperties(a,b,"prop")});if(F){var M=e.cleanData,N=e.browser.msie&&f.browserVersion<9,O=
{object:1,OBJECT:1};e.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&t)for(b=0;b<c;b++)if(O[a[b].nodeName]){if("sendEvent"in a[b]){t--;try{a[b].sendEvent("play",!1)}catch(e){}}if(N)try{for(d in a[b])typeof a[b][d]=="function"&&(a[b][d]=null)}catch(j){}}return M.apply(this,arguments)}}});
(function(e,f,p){var r=f.audio&&f.video,s=!1;if(r){var m=document.createElement("video");f.videoBuffered="buffered"in m;s="loop"in m;p.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));f.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),p.cfg.waitReady&&e.readyWait++,p.loader.loadScript("mediaelement-native-fix",function(){p.cfg.waitReady&&e.ready(!0)}))}e.webshims.ready("dom-support swfobject",
function(e,f,m,p,t){var g=f.mediaelement,A=f.cfg.mediaelement,z=function(c,d){var c=e(c),k={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!k.src)return k;var i=c.attr("type");if(i)k.type=i,k.container=e.trim(i.split(";")[0]);else if(d||(d=c[0].nodeName.toLowerCase(),d=="source"&&(d=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i=g.getTypeForSrc(k.src,d))k.type=i,k.container=i,f.warn("you should always provide a proper mime-type using the source element. "+k.src+
" detected as: "+i),e.nodeName(c[0],"source")&&c.attr("type",i);if(i=c.attr("media"))k.media=i;return k},w=swfobject.hasFlashPlayerVersion("9.0.115"),l=function(){f.ready("mediaelement-swf",function(){if(!g.createSWF)f.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],f.loader.loadList(["mediaelement-swf"])})};w&&f.ready("WINDOWLOAD",l);g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),
"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"]}};g.mimeTypes.source=e.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(c,d){if(c.indexOf("youtube.com/watch?")!=
-1)return"video/youtube";var c=c.split("?")[0].split("."),c=c[c.length-1],f;e.each(g.mimeTypes[d],function(d,e){if(e.indexOf(c)!==-1)return f=d,!1});return f};g.srces=function(c,d){c=e(c);if(d)c.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(d)||(d=[d]),d.forEach(function(d){var e=p.createElement("source");typeof d=="string"&&(d={src:d});e.setAttribute("src",d.src);d.type&&e.setAttribute("type",d.type);d.media&&e.setAttribute("media",d.media);c.append(e)});else{var d=[],f=
c[0].nodeName.toLowerCase(),i=z(c,f);i.src?d.push(i):e("source",c).each(function(){i=z(this,f);i.src&&d.push(i)});return d}};e.fn.loadMediaSrc=function(c,d){return this.each(function(){d!==t&&(e(this).removeAttr("poster"),d&&e.attr(this,"poster",d));g.srces(this,c);e(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
g.canSwfPlaySrces=function(c,d){var f="";w&&(c=e(c),d=d||g.srces(c),e.each(d,function(c,d){if(d.container&&d.src&&g.swfMimeTypes.indexOf(d.container)!=-1)return f=d,!1}));return f};var n={};g.canNativePlaySrces=function(c,d){var f="";if(r){var c=e(c),i=(c[0].nodeName||"").toLowerCase();if(!n[i])return f;d=d||g.srces(c);e.each(d,function(d,e){if(e.type&&n[i].prop._supvalue.call(c[0],e.type))return f=e,!1})}return f};g.setError=function(c,d){d||(d="can't play sources");e(c).data("mediaerror",d);f.warn("mediaelementError: "+
d);setTimeout(function(){e(c).data("mediaerror")&&e(c).trigger("mediaerror")},1)};var h=function(){var c;return function(d,e,i){f.ready("mediaelement-swf",function(){g.createSWF?g.createSWF(d,e,i):c||(c=!0,l(),h(d,e,i))})}}(),u=function(c,d,e,f,j){e||e!==!1&&d&&d.isActive=="flash"?(e=g.canSwfPlaySrces(c,f))?h(c,e,d):j?g.setError(c,!1):u(c,d,!1,f,!0):(e=g.canNativePlaySrces(c,f))?d&&d.isActive=="flash"&&g.setActive(c,"html5",d):j?g.setError(c,!1):u(c,d,!0,f,!0)},C=/^(?:embed|object)$/i,x=function(c,
d){var k=f.data(c,"mediaelementBase")||f.data(c,"mediaelementBase",{}),i=g.srces(c),h=c.parentNode;clearTimeout(k.loadTimer);e.data(c,"mediaerror",!1);if(i.length&&h&&!C.test(h.nodeName||""))d=d||f.data(c,"mediaelement"),u(c,d,A.preferFlash||t,i)};e(p).bind("ended",function(c){var d=f.data(c.target,"mediaelement");(!s||d&&d.isActive!="html5"||e.prop(c.target,"loop"))&&setTimeout(function(){!e.prop(c.target,"paused")&&e.prop(c.target,"loop")&&e(c.target).prop("currentTime",0).play()},1)});s||f.defineNodeNamesBooleanProperty(["audio",
"video"],"loop");["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var c=f.data(this,"mediaelement");x(this,c);r&&(!c||c.isActive=="html5")&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});n[c]=f.defineNodeNameProperty(c,"canPlayType",{prop:{value:function(d){var f="";r&&n[c].prop._supvalue&&(f=n[c].prop._supvalue.call(this,d),f=="no"&&(f=""));!f&&w&&(d=e.trim((d||"").split(";")[0]),g.swfMimeTypes.indexOf(d)!=-1&&(f="maybe"));return f}}})});
f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var c=this,d=f.data(c,"mediaelementBase")||f.data(c,"mediaelementBase",{});clearTimeout(d.loadTimer);d.loadTimer=setTimeout(function(){x(c);c=null},9)}});f.addReady(function(c,d){e("video, audio",c).add(d.filter("video, audio")).each(function(){e.browser.msie&&f.browserVersion>8&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay])')?e(this).prop("preload","metadata").mediaLoad():
x(this)})});f.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
