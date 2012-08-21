(function(a){var c=window.Modernizr,k=a.webshims,g=k.bugs,m=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),q=function(){if(m[0].querySelector)try{g.findRequired=!m[0].querySelector("select:required")}catch(a){g.findRequired=!1}};g.findRequired=!1;g.validationMessage=!1;g.valueAsNumberSet=!1;k.capturingEventPrevented=function(c){if(!c._isPolyfilled){var g=c.isDefaultPrevented,
h=c.preventDefault;c.preventDefault=function(){clearTimeout(a.data(c.target,c.type+"DefaultPrevented"));a.data(c.target,c.type+"DefaultPrevented",setTimeout(function(){a.removeData(c.target,c.type+"DefaultPrevented")},30));return h.apply(this,arguments)};c.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!a.data(c.target,c.type+"DefaultPrevented"))};c._isPolyfilled=!0}};if(!c.formvalidation||g.bustedValidity)q();else if(k.capturingEvents(["input"]),k.capturingEvents(["invalid"],!0),
c.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var h=a("input",m).eq(0),u,y=function(a){k.loader.loadList(["dom-extend"]);k.ready("dom-extend",a)},t=function(g){var s=["form-extend","form-message","form-native-fix"];g&&(g.preventDefault(),g.stopImmediatePropagation());clearTimeout(u);setTimeout(function(){m&&(m.remove(),m=h=null)},9);if(!c.bugfreeformvalidation)k.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),k.modules["form-extend"].test=a.noop;k.isReady("form-number-date-api")&&
s.push("form-number-date-api");k.reTest(s);if(h)try{h.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&y(function(){k.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(c){!c&&this&&a.prop(this,"value",a.prop(this,"value"))}});k.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(c){if(!c&&this)c=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(c)}})})}catch(v){}(a.browser.opera||window.testGoodWithFix)&&
y(function(){var c=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(g){var h=k.defineNodeNameProperty(g,"checkValidity",{prop:{value:function(){k.fromSubmit||a(this).bind("invalid.checkvalidity",c);k.fromCheckValidity=!0;var b=h.prop._supvalue.apply(this,arguments);k.fromSubmit||a(this).unbind("invalid.checkvalidity",c);k.fromCheckValidity=!1;return b}}})})})};m.appendTo("head");if(window.opera||window.testGoodWithFix){q();g.validationMessage=!h.prop("validationMessage");
if((c.inputtypes||{}).date){try{h.prop("valueAsNumber",0)}catch(v){}g.valueAsNumberSet="1970-01-01"!=h.prop("value")}h.prop("value","")}m.bind("submit",function(a){c.bugfreeformvalidation=!1;t(a)});u=setTimeout(function(){m&&m.triggerHandler("submit")},9);a("input, select",m).bind("invalid",t).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&c.bugfreeformvalidation&&!k.bugs.bustedValidity&&function(){var c=/^(?:textarea|input)$/i,
g=!1;document.addEventListener("mouseup",function(a){3==a.which&&c.test(a.target.nodeName||"")&&(g=a.target.form)&&setTimeout(function(){g=!1},1)},!0);a(window).bind("invalid",function(a){if(a.originalEvent&&g&&g==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,k,g,m,q){var h={radio:1},u={checkbox:1,radio:1},y=a([]),t=c.bugs,v=function(b){var b=a(b),f,c;f=y;if(h[b[0].type])c=b.prop("form"),f=(f=b[0].name)?c?a(c[f]):a(g.getElementsByName(f)).filter(function(){return!a.prop(this,"form")}):b,f=f.filter('[type="radio"]');return f},A=c.getContentValidationMessage=function(b,f,c){var i=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";c&&i[c]&&(i=i[c]);"object"==typeof i&&(f=f||a.prop(b,"validity")||
{valid:1},f.valid||a.each(f,function(a,b){if(b&&"valid"!=a&&i[a])return i=i[a],!1}));if("object"==typeof i)i=i.defaultMessage;return i||""},s={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,
"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!s[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!s[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=a.expr.filters[b+"-element"]});a.expr.filters.focus=function(a){try{var f=
a.ownerDocument;return a===f.activeElement&&(!f.hasFocus||f.hasFocus())}catch(c){}return!1};var x=a.event.customEvent||{};(t.bustedValidity||t.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,f=a.find.matchesSelector,c=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,i=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,f=function(f){var j=arguments,j=a.call(j,1,j.length);j.unshift(f.replace(c,i));return b.apply(this,
j)},z;for(z in b)b.hasOwnProperty(z)&&(f[z]=b[z]);return f}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",g.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(c,i);return f.call(this,a,b)}}();var w=a.prop,C={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,f,c){var i=w.apply(this,arguments);if(b&&"form"in b&&C[f]&&c!==m&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),
"checked"==f&&c&&v(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return i};var p=function(b,f){var c;a.each(b,function(b,r){if(r)return c="customError"==b?a.prop(f,"validationMessage"):b,!1});return c};a(g).bind(q.validityUIEvents||"focusout change refreshvalidityui",function(b){var f,c;if(b.target&&(f=a(b.target).getNativeElement()[0],"submit"!=f.type&&a.prop(f,"willValidate"))){c=a.data(f,"webshimsswitchvalidityclass");var i=function(){var c=a.prop(f,"validity"),j=a(f).getShadowElement(),
d,o,n,l;a(f).trigger("refreshCustomValidityRules");c.valid?j.hasClass("form-ui-valid")||(d="form-ui-valid",o="form-ui-invalid",l="changedvaliditystate",n="changedvalid",u[f.type]&&f.checked&&v(f).not(f).removeClass(o).addClass(d).removeAttr("aria-invalid"),a.removeData(f,"webshimsinvalidcause")):(c=p(c,f),a.data(f,"webshimsinvalidcause")!=c&&(a.data(f,"webshimsinvalidcause",c),l="changedvaliditystate"),j.hasClass("form-ui-invalid")||(d="form-ui-invalid",o="form-ui-valid",u[f.type]&&!f.checked&&v(f).not(f).removeClass(o).addClass(d),
n="changedinvalid"));d&&(j.addClass(d).removeClass(o),setTimeout(function(){a(f).trigger(n)},0));l&&setTimeout(function(){a(f).trigger(l)},0);a.removeData(b.target,"webshimsswitchvalidityclass")};c&&clearTimeout(c);"refreshvalidityui"==b.type?i():a.data(b.target,"webshimsswitchvalidityclass",setTimeout(i,9))}});x.changedvaliditystate=!0;x.refreshCustomValidityRules=!0;x.changedvalid=!0;x.changedinvalid=!0;x.refreshvalidityui=!0;c.triggerInlineForm=function(b,f){a(b).trigger(f)};c.modules["form-core"].getGroupElements=
v;t=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==g.compatMode?a(g.body):a(g.documentElement)};t();c.ready("DOM",t);c.getRelOffset=function(b,f){var b=a(b),c=a(f).offset(),i;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=b.offset()});c.top-=i.top;c.left-=i.left;return c};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",f,d=!1,i=!1,r,j={hideDelay:5E3,showFor:function(b,c,n,l){j._create();var b=a(b),B=
a(b).getShadowElement(),g=j.getOffsetFromBody(B);j.clear();l?this.hide():(this.getMessage(b,c),this.position(B,g),f.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(d=setTimeout(r,this.hideDelay)),a(k).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(i);i=setTimeout(function(){j.position(B)},9)}));n||this.setFocus(B,g)},getOffsetFromBody:function(a){return c.getRelOffset(f,a)},setFocus:function(j,
d){var n=a(j).getShadowFocusElement(),l=c.scrollRoot.scrollTop(),i=(d||n.offset()).top-30,D;c.getID&&"label"==b&&f.attr("for",c.getID(n));l>i&&(c.scrollRoot.animate({scrollTop:i-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(l-i)),80)}),D=!0);try{n[0].focus()}catch(h){}D&&(c.scrollRoot.scrollTop(l),setTimeout(function(){c.scrollRoot.scrollTop(l)},0));setTimeout(function(){a(g).bind("focusout.validityalert",r)},10)},getMessage:function(b,c){c||(c=A(b[0])||b.prop("validationMessage"));c?a("span.va-box",
f).text(c):this.hide()},position:function(b,c){c=c?a.extend({},c):j.getOffsetFromBody(b);c.top+=b.outerHeight();f.css(c)},show:function(){"none"===f.css("display")&&f.css({opacity:0}).show();f.addClass("va-visible").fadeTo(400,1)},hide:function(){f.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(g).unbind(".validityalert");a(k).unbind(".validityalert");f.stop().removeAttr("for")},_create:function(){if(!f)f=j.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),c.ready("DOM",function(){f.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&f.bgIframe()})}};r=a.proxy(j,"hide");return j}();(function(){var b,f=[],c;a(g).bind("invalid",function(i){if(!i.wrongWebkitInvalid){var r=a(i.target),j=r.getShadowElement();j.hasClass("form-ui-invalid")||(j.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(i.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=i.isDefaultPrevented,j=a.Event("firstinvalidsystem"),a(g).triggerHandler(j,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),r.trigger(b);b&&b.isDefaultPrevented()&&i.preventDefault();f.push(i.target);i.extraData="fix";clearTimeout(c);c=setTimeout(function(){var c={type:"lastinvalid",cancelable:!1,invalidlist:a(f)};b=!1;f=[];a(i.target).trigger(c,c)},9);j=r=null}})})();a.fn.getErrorMessage=function(){var b="",
c=this[0];c&&(b=A(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};q.replaceValidationUI&&c.ready("DOM forms",function(){a(g).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,c,k,g,m,q){var h=c.validityMessages,k=q.overrideMessages||q.customMessages?["customValidationMessage"]:[];h.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},h.en||h["en-US"]||{});["select","radio"].forEach(function(a){h.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){h.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){h.en.rangeOverflow[a]="Value must be at or before {%max}."});h["en-US"]=h["en-US"]||h.en;h[""]=h[""]||h["en-US"];h.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},h.de||{});["select","radio"].forEach(function(a){h.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){h.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){h.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var u=h[""];c.createValidationMessage=function(c,g){var h=u[g];h&&"string"!==typeof h&&(h=h[a.prop(c,"type")]||h[(c.nodeName||"").toLowerCase()]||h.defaultMessage);h&&"value,min,max,title,maxlength,label".split(",").forEach(function(g){if(-1!==h.indexOf("{%"+g)){var k=("label"==g?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.attr(c,g))||"";h=h.replace("{%"+g+"}",k);"value"==g&&(h=h.replace("{%valueLen}",k.length))}});return h||""};(c.bugs.validationMessage||!Modernizr.formvalidation||
c.bugs.bustedValidity)&&k.push("validationMessage");c.activeLang({langObj:h,module:"form-core",callback:function(a){u=a}});k.forEach(function(g){c.defineNodeNamesProperty(["fieldset","output","button"],g,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(h){var k=c.defineNodeNameProperty(h,g,{prop:{get:function(){var g=this,h="";if(!a.prop(g,"willValidate"))return h;var m=a.prop(g,"validity")||{valid:1};if(m.valid||(h=c.getContentValidationMessage(g,m)))return h;if(m.customError&&
g.nodeName&&(h=Modernizr.formvalidation&&!c.bugs.bustedValidity&&k.prop._supget?k.prop._supget.call(g):c.data(g,"customvalidationMessage")))return h;a.each(m,function(a,k){if("valid"!=a&&k&&(h=c.createValidationMessage(g,a)))return!1});return h||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,c,k,g){c.inputTypes=c.inputTypes||{};var m=c.cfg.forms,q,h=c.inputTypes,u={radio:1,checkbox:1};c.addInputType=function(a,c){h[a]=c};var y={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},t={valueMissing:function(b,f,d){if(!b.prop("required"))return!1;var i=!1;if(!("type"in d))d.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();if("select"==d.nodeName){if(f=!f)if(!(f=0>b[0].selectedIndex))b=b[0],f="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=f}else b=u[d.type]?"checkbox"==d.type?!b.is(":checked"):!c.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!f;return b},tooLong:function(){return!1},typeMismatch:function(a,c,d){if(""===c||"select"==d.nodeName)return!1;var i=!1;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(h[d.type]&&h[d.type].mismatch)i=h[d.type].mismatch(c,a);else if("validity"in a[0])i=a[0].validity.typeMismatch;return i},patternMismatch:function(a,f,d){if(""===f||"select"==d.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(i){c.error('invalid pattern value: "'+a+'" | '+i),a=!1}return!a?!1:!a.test(f)}};c.addValidityRule=function(a,c){t[a]=c};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=
this.form||this;if(!a.data(b,"invalidEventShim")&&(a(b).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),c.moveToFirstEvent(b,"submit"),c.bugs.bustedValidity&&a.nodeName(b,"form"))){var f=b.getAttribute("novalidate");b.setAttribute("novalidate","novalidate");c.data(b,"bustedNoValidate",null==f?null:f)}},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){q=!0;b.testedValidity=
!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),q=!1;q=!1}}};var v=function(b){if(!a.support.submitBubbles&&b&&"object"==typeof b&&!b._submit_attached)a.event.add(b,"submit._submit",function(a){a._submit_bubble=!0}),b._submit_attached=!0};if(!a.support.submitBubbles&&a.event.special.submit)a.event.special.submit.setup=function(){if(a.nodeName(this,"form"))return!1;a.event.add(this,"click._submit keypress._submit",function(b){b=b.target;b=a.nodeName(b,"input")||a.nodeName(b,
"button")?a.prop(b,"form"):void 0;v(b)})};a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var A=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return A.apply(this,arguments)}});a(k).bind("invalid",a.noop);c.addInputType("email",{mismatch:function(){var a=m.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(c){return!a.test(c)}}()});
c.addInputType("url",{mismatch:function(){var a=m.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}});c.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},y)}}},"prop");var s=function(b){var f,d=a.prop(b,"validity");if(d)a.data(b,"cachedValidity",
d);else return!0;if(!d.valid){f=a.Event("invalid");var i=a(b).trigger(f);if(q&&!s.unhandledInvalids&&!f.isDefaultPrevented())c.validityAlert.showFor(i),s.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return d.valid},x=/^(?:select|textarea|input)/i;c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,f=a(a.prop(this,"elements")).filter(function(){if(!x.test(this.nodeName))return!1;var a=c.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});
s.unhandledInvalids=!1;for(var d=0,i=f.length;d<i;d++)s(f[d])||(b=!1);return b}}});c.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){s.unhandledInvalids=!1;return s(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");c.data(this,"customvalidationMessage",""+b)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.disabled||
c.readOnly||b[c.type])}}()},validity:{writeable:!1,get:function(){var b=a(this).getNativeElement(),f=b[0],d=a.data(f,"cachedValidity");if(d)return d;d=a.extend({},y);if(!a.prop(f,"willValidate")||"submit"==f.type)return d;var i=b.val(),g={nodeName:f.nodeName.toLowerCase()};d.customError=!!c.data(f,"customvalidationMessage");if(d.customError)d.valid=!1;a.each(t,function(a,c){if(c(b,i,g))d[a]=!0,d.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",d.valid?"false":"true");f=b=null;return d}}},
"prop");c.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<c.browserVersion});c.reflectProperties(["input"],["pattern"]);if(!("maxLength"in g.createElement("textarea"))){var w=function(){var b,c=0,d=a([]),i=1E9,g=function(){var a=d.prop("value"),b=a.length;b>c&&b>i&&(b=Math.max(c,i),d.prop("value",a.substr(0,b)));c=b},j=function(){clearTimeout(b);d.unbind(".maxlengthconstraint")};
return function(h,o){j();if(-1<o)i=o,c=a.prop(h,"value").length,d=a(h),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(g,0)}),d.bind("keyup.maxlengthconstraint",g),d.bind("blur.maxlengthconstraint",j),b=setInterval(g,200)}}();w.update=function(b,c){a(b).is(":focus")&&(null==c&&(c=a.prop(b,"maxlength")),w(e.target,c))};a(g).bind("focusin",function(b){var c;"TEXTAREA"==b.target.nodeName&&-1<(c=a.prop(b.target,
"maxlength"))&&w(b.target,c)});c.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);w.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);w.update(this,a)}else this.setAttribute("maxlength","0"),w.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==
typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});c.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var C={submit:1,button:1,image:1},p={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},
{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+b.name,i=b.name,h="click.webshimssubmittermutate"+i,j=function(){if("form"in this&&C[this.type]){var j=a.prop(this,"form");if(j){var n=a.attr(this,d);if(null!=n&&(!b.limitedTo||n.toLowerCase()===a.prop(this,c))){var l=a.attr(j,i);a.attr(j,i,n);setTimeout(function(){if(null!=l)a.attr(j,i,l);else try{a(j).removeAttr(i)}catch(b){j.removeAttribute(i)}},
9)}}}};switch(b.proptype){case "url":var z=g.createElement("form");p[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);if(null==b)return"";z.setAttribute("action",b);return z.action}}};break;case "boolean":p[c]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":p[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var c=a.attr(this,
d);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:c}}};break;default:p[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return null!=b?b:""}}}}p[d]||(p[d]={});p[d].attr={set:function(b){p[d].attr._supset.call(this,b);a(this).unbind(h).bind(h,j)},get:function(){return p[d].attr._supget.call(this)}};p[d].initAttr=!0;p[d].removeAttr={value:function(){a(this).unbind(h);p[d].removeAttr._supvalue.call(this)}}});c.defineNodeNamesProperties(["input","button"],
p);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):c.bugs.bustedValidity&&(c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){c.data(this,"bustedNoValidate",""+a)},get:function(){var a=c.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){c.data(this,
"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,c){t[c]=function(a){return(a[0].validity||{})[c]||!1}}));c.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},f={date:1,time:1,"datetime-local":1},d={focusout:1,blur:1},i=
{updateInput:1,change:1},h=function(a){var c,f=!0,n=a.prop("value"),l=n,g=function(c){if(a){var d=a.prop("value");d!==n&&(n=d,(!c||!b[c.type])&&a.trigger("input"));c&&i[c.type]&&(l=d);!f&&d!==l&&a.trigger("change")}},h,r=function(b){clearInterval(c);setTimeout(function(){b&&d[b.type]&&(f=!1);a&&(a.unbind("focusout blur",r).unbind("input change updateInput",g),g());a=null},1)};clearInterval(c);c=setInterval(g,160);clearTimeout(h);h=setTimeout(g,9);a.unbind("focusout blur",r).unbind("input change updateInput",
g);a.bind("focusout blur",r).bind("input updateInput change",g)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;(function(){var b=function(b){var c=1,f,d;if("date"==b.type&&(q||!a(b).is(":focus")))if((d=b.value)&&10>d.length&&(d=d.split("-"))&&3==d.length){for(;3>c;c++)if(1==d[c].length)d[c]="0"+d[c];else if(2!=d[c].length){f=!0;break}if(!f)return d=d.join("-"),a.prop(b,"value",d),d}},f,d,n,l;f=c.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){b(this);return f.prop._supvalue.apply(this,
arguments)}}});d=c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){a("input",this).each(function(){b(this)});return d.prop._supvalue.apply(this,arguments)}}});n=c.defineNodeNameProperty("input","value",{prop:{set:function(){return n.prop._supset.apply(this,arguments)},get:function(){return b(this)||n.prop._supget.apply(this,arguments)}}});l=c.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){b(this);return l.prop._supget.apply(this,arguments)}}});a(g).bind("change",
function(a){isChangeSubmit=!0;b(a.target);isChangeSubmit=!1})})();a(g).bind("focusin",function(b){b.target&&f[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&h(a(b.target))})}();c.addReady(function(b,c){var d;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==g&&!("form"in(g.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(i){}});(!Modernizr.formattribute||
!Modernizr.fieldsetdisabled)&&function(){(function(b,c){a.prop=function(f,d,n){var l;if(f&&1==f.nodeType&&n===c&&a.nodeName(f,"form")&&f.id){l=g.getElementsByName(d);if(!l||!l.length)l=g.getElementById(d);if(l&&(l=a(l).filter(function(){return a.prop(this,"form")==f}).get(),l.length))return 1==l.length?l[0]:l}return b.apply(this,arguments)}})(a.prop,void 0);var b=function(b){var c=a.data(b,"webshimsAddedElements");c&&(c.remove(),a.removeData(b,"webshimsAddedElements"))},f=/\r?\n/g,d=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
i=/^(?:select|textarea)/i;Modernizr.formattribute||(c.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var b=c.contentAttr(this,"form");b&&(b=g.getElementById(b))&&!a.nodeName(b,"form")&&(b=null);return b||this.form},writeable:!1}}),c.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var b=this.id,c;b&&(c=a(a.makeArray(this.elements)).add('input[form="'+b+'"], select[form="'+b+'"], textarea[form="'+b+'"], button[form="'+b+'"], fieldset[form="'+
b+'"]').not(".webshims-visual-hide > *").get());return c.length?c:this.elements||null},writeable:!1}}),a(function(){var c=function(a){a.stopPropagation()};a(g).bind("submit",function(c){if(!c.isDefaultPrevented()){var f=c.target;if(c=f.id)b(f),c=a('input[form="'+c+'"], select[form="'+c+'"], textarea[form="'+c+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=f}).clone(),c.length&&(a.data(f,"webshimsAddedElements",a('<div class="webshims-visual-hide" />').append(c).appendTo(f)),setTimeout(function(){b(f)},
9)),c=null}});a(g).bind("click",function(b){if(!b.isDefaultPrevented()&&a(b.target).is('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]')){var f=a.prop(b.target,"form"),d=b.target.form,n;f&&f!=d&&(n=a(b.target).clone().removeAttr("form").addClass("webshims-visual-hide").bind("click",c).appendTo(f),d&&b.preventDefault(),v(f),n.trigger("click"),setTimeout(function(){n.remove();n=null},9))}})}));Modernizr.fieldsetdisabled||c.defineNodeNamesProperty(["fieldset"],
"elements",{prop:{get:function(){var b=a("input, select, textarea, button, fieldset",this);return b.length?b:this.elements||null},writeable:!1}});a.fn.serializeArray=function(){return this.map(function(){var b=a.prop(this,"elements");return b?a.makeArray(b):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||i.test(this.nodeName)||d.test(this.type))}).map(function(b,c){var d=a(this).val();return null==d?null:a.isArray(d)?a.map(d,function(a){return{name:c.name,value:a.replace(f,
"\r\n")}}):{name:c.name,value:d.replace(f,"\r\n")}}).get()}}();(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);var b=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||b){var f="over"==c.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var g=function(a){try{if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a.createTextRange){var b=a.createTextRange();b.collapse(!0);
b.moveEnd("character",0);b.moveStart("character",0);b.select();return!0}}catch(c){}},h=function(b,c,d,h){!1===d&&(d=a.prop(b,"value"));if(!f&&"password"!=b.type){if(!d&&h&&g(b)){var j=setTimeout(function(){g(b)},9);a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(f){if(!f||!(17==f.keyCode||16==f.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(j),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",
function(){g(b);clearTimeout(j);j=setTimeout(function(){g(b)},9)}).bind("blur.placeholderremove",function(){clearTimeout(j);a(b).unbind(".placeholderremove")});return}b.value=d}else if(!d&&h){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(f){if(!f||!(17==f.keyCode||16==f.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});
return}c.box.removeClass("placeholder-visible")},j=function(b,c,d,g,i){if(!g&&(g=a.data(b,"placeHolder"),!g))return;a(b).unbind(".placeholderremove");if("focus"==i||!i&&a(b).is(":focus"))("password"==b.type||f||a(b).hasClass("placeholder-visible"))&&h(b,g,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)h(b,g,c);else if(!1===d&&(d=a.attr(b,"placeholder")||""),d&&!c){c=g;!1===d&&(d=a.prop(b,"placeholder"));if(!f&&"password"!=b.type)b.value=d;c.box.addClass("placeholder-visible")}else h(b,g,c)},m=function(b){var b=
a(b),c=b.prop("id"),f=!(!b.prop("title")&&!b.attr("aria-labelledby"));!f&&c&&(f=!!a('label[for="'+c+'"]',b[0].form)[0]);f||(c||(c=a.webshims.getID(b)),f=!!a("label #"+c)[0]);return a(f?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},o=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){j(this,
!1,!1,c,a.type);c.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){j(b,!1,!1,c,a.type)},0)});if("password"==b.type||f){c.text=m(b);c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",function(){j(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left",
"Top"],function(f,d){var g=(parseInt(a.css(b,"padding"+d),10)||0)+Math.max(parseInt(a.css(b,"margin"+d),10)||0,0)+(parseInt(a.css(b,"border"+d+"Width"),10)||0);c.text.css("padding"+d,g)});a.css(b,"lineHeight");var d={width:a(b).width(),height:a(b).height()},g=a.css(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(f,d){var g=a.css(b,d);c.text.css(d)!=g&&c.text.css(d,g)});d.width&&d.height&&c.text.css(d);"none"!==g&&c.box.addClass("placeholder-box-"+g)}else d=function(f){a(b).hasClass("placeholder-visible")&&
(h(b,c,""),f&&"submit"==f.type&&setTimeout(function(){f.isDefaultPrevented()&&j(b,!1,!1,c)},9))},a(k).bind("beforeunload",d),c.box=a(b),b.form&&a(b.form).submit(d);return c},update:function(f,d){var g=(a.attr(f,"type")||a.prop(f,"type")||"").toLowerCase();!b[g]&&!a.nodeName(f,"textarea")?(c.error('placeholder not allowed on input[type="'+g+'"]'),"date"==g&&c.error('but you can use data-placeholder for input[type="date"]')):(g=o.create(f),g.text&&g.text.text(d),j(f,!1,d,g))}}}();a.webshims.publicMethods=
{pHolder:o};d.forEach(function(a){c.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b?(c.data(this,"textareaPlaceholder",a),this.placeholder=""):c.contentAttr(this,"placeholder",a);o.update(this,a)},get:function(){return(b?c.data(this,"textareaPlaceholder"):"")||c.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(f){var d={},g;["attr","prop"].forEach(function(f){d[f]={set:function(d){var h;b&&(h=c.data(this,"textareaPlaceholder"));h||(h=c.contentAttr(this,
"placeholder"));a.removeData(this,"cachedValidity");var i=g[f]._supset.call(this,d);h&&"value"in this&&j(this,d,h);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":g[f]._supget.call(this)}}});g=c.defineNodeNameProperty(f,"value",d)})}})();(function(){if(!("value"in g.createElement("output"))){c.defineNodeNameProperty("output","value",{prop:{set:function(c){var d=a.data(this,"outputShim");d||(d=b(this));d(c)},get:function(){return c.contentAttr(this,"value")||a(this).text()||
""}}});c.onNodeNamesPropertyModify("input","value",function(b,c,g){"removeAttr"!=g&&(c=a.data(this,"outputShim"))&&c(b)});var b=function(b){if(!b.getAttribute("aria-live")){var b=a(b),d=(b.text()||"").trim(),h=b.attr("id"),k=b.attr("for"),j=a('<input class="output-shim" type="text" disabled name="'+(b.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(b),m=j[0].form||g,o=function(a){j[0].value=a;a=j[0].value;b.text(a);c.contentAttr(b[0],"value",a)};b[0].defaultValue=
d;c.contentAttr(b[0],"value",d);b.attr({"aria-live":"polite"});h&&(j.attr("id",h),b.attr("aria-labelledby",c.getID(a('label[for="'+h+'"]',m))));k&&(h=c.getID(b),k.split(" ").forEach(function(a){(a=g.getElementById(a))&&a.setAttribute("aria-controls",h)}));b.data("outputShim",o);j.data("outputShim",o);return o}};c.addReady(function(c,d){a("output",c).add(d.filter("output")).each(function(){b(this)})});(function(){var b={updateInput:1,input:1},d={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,
file:1,color:1},h=function(a){var d,g=a.prop("value"),h=function(d){if(a){var h=a.prop("value");h!==g&&(g=h,(!d||!b[d.type])&&c.triggerInlineForm&&c.triggerInlineForm(a[0],"input"))}},i,k=function(){clearTimeout(i);i=setTimeout(h,9)},m=function(){a.unbind("focusout",m).unbind("keyup keypress keydown paste cut",k).unbind("input change updateInput",h);clearInterval(d);setTimeout(function(){h();a=null},1)};clearInterval(d);d=setInterval(h,99);k();a.bind("keyup keypress keydown paste cut",k).bind("focusout",
m).bind("input updateInput change",h)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(g).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||"").toLowerCase()&&!d[b.target.type]&&h(a(b.target))})})()}})()});
