"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function MangoWidget(e){function t(e){var t=e.styles.fastCallback||{},a=!e.styles.copyright;t.flags=N.flags,t.policy=e.styles.policy,"fast-callback"==e.workMode&&N.element.find(".widget-wrapper").first().hide(),j().done(function(){if(Mango.Callback.FastCallbackWidget.isFastCallbackAvailable()||"fast-callback"==e.workMode){N.fastCallback=new Mango.Callback.FastCallbackWidget(jQuery.parseJSON(e.fast_callback),t,e.translate,N.element),N.fastCallback.splitText=p,N.fastCallback.init(e.styles,a);var n=N.element;N.element=N.fastCallback.element,C(),(N.element.hasClass("dark-cerulean-color")||N.element.hasClass("graphite-black-color"))&&N.element.find(".widget-wrapper").hasClass("selected-button")&&N.element.find(".currentCountry>.selectedCountry .triangle").addClass("dark"),N.element=n,"fast-callback"==e.workMode&&N.fastCallback.showWidget()}})}function a(e){var t=N.element.find(".widget-wrapper");t.addClass("common-window"),N.element.hasClass("selected-label")&&N.element.css({right:"-545px"}),N.element.find(".widget-callfromsite").hide();var a=N.element.find(".widget-callfromsite-not-work");switch(e){case 1:case 2:a.find(".title-widget").text(""),a.find(".text-widget").text(Q.translate.widget_call_error+" ("+e+")");break;case 3:a.find(".title-widget").text(""),a.find(".text-widget").text(Q.translate.widget_not_supported);break;case 4:a.find(".title-widget").text(""),a.find(".text-widget").text(Q.translate.widget_not_supported_flash)}N.widget_show_error=!0,a.show()}function n(e){try{if(!Mango||!Mango.SEO||!Mango.SEO.sendEvent)return;Mango.SEO.sendEvent(e)}catch(t){console.error("Exception in MangoWidget::sendSeoEvent",t)}}function o(e,t){O(e.widgetStatus)&&(E(),setTimeout(function(){f(e),t()},200)),L(document).on("click",function(e){var t=N.element.find(".changeCountry"),a=N.element.find(".currentCountry>.selectedCountry");0===N.element.find(".selectedCountry").has(e.target).length&&(t.css("display","none"),a.removeClass("showCountriesList"))}),N.element.on("click",".currentCountry .selectCountryList > .selectCountry",x),N.element.on("click",".button-call",function(e){var t=L(e.target),a=t.prev().find(".call-input"),o=a.parent().attr("data-content").split("(")[0].replace(/\+/g,"")+a.val(),i=t.hasClass("js-fast-callback");if(c(o,t),Mango&&Mango.SEO&&Mango.SEO.events){if(i)return void n(Mango.SEO.events.widget_leadgen_created);n(Mango.SEO.events.widget_callback_created)}}),N.element.on("click",".button-widget-open",function(){N.element.find(".widget-wrapper:not(.fast-callback)").hasClass("widget-show")?N.setStatus("close"):N.setStatus("open",e)}),N.element.on("change",".select-day-week",function(){L(".widget-start-time").html(h(L(this).val(),w(Q.days))),L(".widget-end-time").html(h(L(this).val(),w(Q.days)))}),N.element.on("click",".close-popup",function(e){var t=L(e.target),a=t.parents(".widget-wrapper");a.hasClass("fast-callback")?N.fastCallback.closeWidget():N.setStatus("close")})}function i(e,t){var a;switch(t){case 2:a=30;break;case 3:a=40;break;case 4:a=50;break;case 5:a=60;break;case 6:a=70}return e.animate({"padding-left":a+"px"},100).attr("data-padding",a),a}function l(e,t,a,n){var o=i(e,n),l=a.replace(/[\(\)\s\-]/g,"").length*t,r=null!==a.match(/[\(\)\s\-]/g)?a.match(/[\(\)\s\-]/g).length:0,s=0==r?0:l/(r*t)+5,c=l+r*s,d=parseInt(e.css("width"))+o+"px",u=o+c+"px";d!==u&&e.animate({width:u},100)}function r(){return"selected-dynamic"==Q.styles.formatCall}function s(){var e=N.element.find(".call-input"),t=N.element.attr("data-number");!e.val()&&t&&(t=t.replace(/[()\-\+\s]/g,""),t.length>10&&(t=t.substr(t.length-10)),e.val(t),V&&V.maskPattern(V.opts.pattern))}function c(e,t){var a=t.parents(".widget-wrapper"),n=a.hasClass("fast-callback"),o=a.find(".currentCountry>.selectedCountry"),i=o.attr("data-index"),l=N.allowedCountries[i].phone_code.length;e=e.replace(/[()\-\s]/g,""),!N.type&&e.length-l>=N.allowedCountries[i].min&&N.allowedCountries[i].max>=e.length-l&&(r()&&"not-work"==Q.workMode?A(g.bind(null,e,t)):g(e,t),n&&N.fastCallback.timerStage(),N.fastCallback&&N.fastCallback.orderComplete())}function d(e){if(Q.useGaEvents){var t=window.GoogleAnalyticsObject;if(t){var a=window[t];if(a){var n="not-work"!=Q.workMode?"call order work":"call order not work",o=a.getAll()||[];o.forEach(function(e){e.send("event","callback button","call order",""),e.send("event","callback button",n,"")})}}}}function u(e){if(!Mango||!Mango.CallTracking)return"";if(void 0===window.atob)return"";var t=[],a=Mango.modules.getModule("calltracking");if(!a||!a.widgets)return"";t=a.widgets;var n=Object.keys(t);if(0===n.length)return"";var o=+atob(e),i=n.filter(function(e){var a=t[e];return a&&a.numbers&&a.numbers.length&&a.settings&&a.settings.callbacks&&a.settings.callbacks.some(function(e){return e===o})}).map(function(e){return{id:e,number:t[e].numbers[0].number}});if(0===i.length)return"";var l={uid:Mango.session.getUserId(),sid:Mango.session.getSessionId(),widgets:i};return JSON.stringify(l)}function g(e,t){var a=t.parents(".widget-wrapper").find(".widget-start-time").val()||0;N.setStatus("waiting");var n={number:encodeURIComponent(e),dateStart:parseInt(a)},o=u(N.callbackButtonId);o&&(n.calltracking=o);var i=N.host+"widget/order-call/"+N.callbackButtonId+"?callback=?";return L.getJSON(i,n,function(t){N.setStatus("success"),d(e)})}function h(e,t){var a="";return L.each(t,function(t,n){n.date==e&&L.each(n.times,function(e,t){var n=new Date(1e3*t),o=new Date(1e3*t+18e5),i=("0"+n.getHours()).substr(-2),l=("0"+n.getMinutes()).substr(-2),r=("0"+o.getHours()).substr(-2),s=("0"+o.getMinutes()).substr(-2);a+='<option value="'+t+'">'+i+":"+l+" - "+r+":"+s+"</option>"})}),a}function w(e){var t=[],a=new Date;return L.each(e,function(e,n){var o=[],i=new Date(1e3*n.date+6e4*a.getTimezoneOffset());L.each(n.times,function(e,t){var n=new Date(1e3*t+18e5);i.setHours(n.getHours()),i.setMinutes(n.getMinutes()),i>=a&&o.push(t)}),o.length>0&&t.push({date:n.date,times:o})}),t}function m(e){function t(e,t){var a=new Date(1e3*t.date+6e4*i.getTimezoneOffset());o+='<option value="'+t.date+'">'+a.getDate()+" "+Q.translate["month_"+(a.getMonth()+1)]+"</option>"}function a(e){var t,a=new Date,n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];return a.setDate(i.getDate()+1),e.toDateString()==i.toDateString()?Q.translate.today:a.toDateString()==e.toDateString()?Q.translate.tomorrow:(t=n[e.getDay()],t="in_"+t.toLowerCase().trim(),Q.translate[t])}function n(e,t){var n=new Date(1e3*t.date+6e4*i.getTimezoneOffset()),l=a(n);o+='<option value="'+t.date+'">'+l}var o="",i=new Date;return"work"==Q.workMode?L.each(e,t):L.each(e,n),o}function f(e){function t(){if(!a.formatView){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;S.css("top",Math.max(0,(e-L(S).outerHeight())/2)+"px")}if(!a.formatLocation){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;S.css("left",Math.max(0,(t-L(S).outerWidth())/2)+"px")}}var a=L.extend({},e.styles),n=w(e.days);if(window.location.search)for(var o=window.location.search.substring(1).split("&"),i=0;i<o.length;i++){var l=o[i].split("=");if("type"==l[0]){a.workMode=l[1];break}}var s="",c=m(n);n[0]&&(s=h(n[0].date,n)),void 0===a.pattern&&(a.pattern={}),a.pattern&&void 0===a.pattern.pattern&&(a.pattern.pattern=""),r()&&(a.formatCall="selected-label",a.formatLocation||(a.formatLocation="right-x"));var d={basicColor:a.colorScheme.basic+"-color",additionalColor:a.colorScheme.additional+"-additional-color ",opacity:a.colorScheme.opacity},u=["widget-wrapper","mng-wgt","common-window","mng-wgt-index",a.copyright||"",a.formatView||"",a.formatLocation||"",d.basicColor||"",d.additionalColor||"",d.opacity||"",a.formWidget||"",a.pattern.pattern||"",a.formatCall||""].join(" "),g='<div class="'+u+'" style="position:fixed;"><div class="widget-wrapper__center"><div class="widget-content">',f=N.currentCountry,p="",y='<ul class="currentCountry">';f["default"]?N.allowedCountries.length>0?(y+='<li class="selectedCountry" data-country="'+N.allowedCountries[0].country_code+'" data-index="'+(f.ind||0)+'"><div class="triangle"></div><img class="flag flag-'+N.allowedCountries[0].country_code+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></li>',p+='<span class="box-phone-span-input '+N.allowedCountries[0].country_code+'-box-phone-span-input" data-content="+'+N.allowedCountries[0].phone_code+'"><input placeholder="'+N.allowedCountries[0].placeholder+'" class="call-input" mask="'+N.allowedCountries[0].mask+'" restrict="reject" clean="true"/></span>'):(y+='<li class="selectedCountry" data-country="'+e.locale+'" data-index="0"><img class="flag flag-'+e.locale+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></li>',p+='<span class="box-phone-span-input '+e.locale+'-box-phone-span-input" data-content="+'+f.phone_code+'"><input placeholder="'+f.placeholder+'" class="call-input" mask="'+f.mask+'" restrict="reject" clean="true"/></span>'):(y+='<li class="selectedCountry" data-country="'+e.locale+'" data-index="'+(f.ind||0)+'">'+(N.allowedCountries.length>0?'<div class="triangle"></div>':"")+'<img class="flag flag-'+e.locale+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></li>',p+='<span class="box-phone-span-input '+e.locale+'-box-phone-span-input" data-content="+'+f.phone_code+'"><input placeholder="'+f.placeholder+'" class="call-input" mask="'+f.mask+'" restrict="reject" clean="true"/></span>'),y+='<li class="changeCountry"><ul class="selectCountryList">',f["default"]||(y+='<li class="selectCountry userCountry" data-country="'+f.country_code+'" data-code="+'+f.phone_code+'" data-mask="'+f.mask+'" data-placeholder="'+f.placeholder+'" data-index="'+f.ind+'"><div class="selectCountryTable"><div class="selectCountryTableCell"><img class="flag flag-'+f.country_code+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></div><div class="countryName">'+("de"===e.locale?f.country_de:"ru"===e.locale?f.country_ru:f.country_en)+'</div><div class="countryCode">+'+f.phone_code+"</div></div></li>");for(var v=0;v<N.allowedCountries.length;v++){var b=N.allowedCountries[v].country_code,k=N.allowedCountries[v].phone_code,A=N.allowedCountries[v].mask,x=N.allowedCountries[v].placeholder;y+='<li class="selectCountry" data-country="'+b+'" data-code="+'+k+'" data-mask="'+A+'" data-placeholder="'+x+'" data-index="'+v+'"><div class="selectCountryTable"><div class="selectCountryTableCell"><img class="flag flag-'+b+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/></div><div class="countryName">'+("de"===e.locale?N.allowedCountries[v].country_de:"ru"===e.locale?N.allowedCountries[v].country_ru:N.allowedCountries[v].country_en)+'</div><div class="countryCode">+'+k+"</div></div></li>"}y+="</ul></li></ul>",y+=p,a.workMode&&"not-work"==a.workMode||!a.workMode&&"not-work"==e.workMode?(g+='<h5 class="title-widget">'+a.textWidget.firstText+'</h5><p class="text-widget">'+a.textWidget.secondText+'</p><div class="box-select-group"><div class="select-list"><div class="select-item"><select class="select-day-week">'+c+'</select></div><div class="select-item"><select class="select-time widget-start-time">'+s+'</select></div></div></div><div class="box-phone-number">'+y+'<div class="button-call button-widget"></div></div>',""===a.policy&&(g+='<div class="'+("selected-dynamic"!==Q.styles.formatCall?"text-policy":"text-policy-dynamic")+'">'+a.textWidget.policyText+"</div>")):(g+='<h5 class="title-widget">'+a.textWidget.workTitle+'</h5><p class="text-widget">'+a.textWidget.workText+'</p><div class="box-phone-number">'+y+'<div class="button-call button-widget"></div></div>',""===a.policy&&(g+='<div class="'+("selected-dynamic"!==Q.styles.formatCall?"text-policy":"text-policy-dynamic")+'">'+a.textWidget.policyText+"</div>")),N.flags=y,g+="</div>",g+='<div class="thanks-content"><h5 class="title-widget">'+e.translate.thanks+'</h5><p class="text-widget">'+e.translate.order_complete+'</p></div><div class="wait-content"><div class="clock"></div><h5 class="title-widget">'+e.translate.wait+'</h5><p class="text-widget">'+e.translate.order_waiting+"</p></div>",g+='</div><div class="close-popup"></div><button class="button-widget-open">'+a.textButtonWidget.firstText+'</button><a href="'+e.translate.widget_link_url+'" class="technology" target="_blank">'+e.translate.widget_link_text+"</a></div>";var M=N.element.find(".mng-overlay");if(0==M.length&&(g+='<div class="mng-overlay"></div>'),N.element.find(".widget-wrapper").remove(),N.element.append(g),navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1){var S=L("#mango-widget").find(".widget-wrapper");L(function(){L(window).resize(function(){t()}),setTimeout(function(){S.css("-webkit-transform","translate(0,0)"),t()},300)})}switch(e.workMode){case"work":N.element.find(".widget-callfromsite").show();break;default:N.element.find(".widget-wrapper").addClass("common-window"),N.element.find(".widget-callback-not-work").show()}C(e),r()&&_(e)}function p(e,t){var a,t=t||5,n=e.length,o=13;return n<o?e:(e=e.replace("<br>"," "),a=e.indexOf(" ",Math.ceil(n/2)-t),e.substring(0,a)+"<br>"+e.substring(a+1,n))}function y(e){var t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,a=e.match(t);return!(!a||11!=a[7].length)&&a[7]}function v(e){function t(e,t){"undefined"!=typeof YT&&(z[e]=new YT.Player(e,{videoId:t,playerVars:{loop:1,autoplay:1,autohide:1,controls:0,showinfo:0,disablekb:1,modestbranding:1,rel:0,cc_load_policy:1,iv_load_policy:3},events:{onReady:function(t){t.target.mute(),N.element.find(".widget-show").length&&b(z[e]),t.target.playVideo()},onStateChange:function(e){e.data==YT.PlayerState.ENDED&&e.target.playVideo()}}}))}function a(){Object.keys(z).length?Object.keys(z).forEach(function(t){z[t].loadVideoById(e)}):(t("mango-video-container",e),t("mango-video-thanks-container",e),t("mango-video-wait-container",e))}var n=document.createElement("script"),o=document.getElementsByTagName("script")[0];N.element.find(".widget-wrapper");n.id="youtube-api",n.src="https://www.youtube.com/player_api",e&&(document.getElementById(n.id)||o.parentNode.insertBefore(n,o),q=function(e){var e=e||100;setTimeout(function(){Object.keys(z).forEach(function(e){b(z[e])})},e)},L(window).resize(q),window.onYouTubeIframeAPIReady!=a?window.onYouTubeIframeAPIReady=a:a())}function b(e){var t=e.getIframe();if(t){var a=t.parentNode,n=a.offsetWidth,o=a.offsetHeight,i=16/9,l=Math.round(n/i),r=Math.round(o*i),s=-Math.round(l/2-o/2);o>n&&(t.style.width=r+"px",t.style.height=o+"px",s=-Math.round(r/2-n/2),t.style.marginLeft=s+"px",t.style.marginTop="0px"),o<=n&&s>=0&&(t.style.height=o+"px",t.style.width=n+"px",t.style.marginTop="0px",t.style.marginLeft="0px"),o<=n&&s<0&&(t.style.width=n+"px",t.style.height=l+"px",t.style.marginTop=s+"px",t.style.marginLeft="0px")}}function k(){return"not-work"!=Q.workMode}function _(e){function t(){var e=A.date,t=A.time.split("-"),a=t[0].trim(),n=t[1].trim(),o=Q.translate.dynamic_button_thank_you_not_work;return o.replace("{timeStart}",a).replace("{timeEnd}",n).replace("{date}",e)}function a(){var e=L("body");if(!i.hasClass("widget-show")||e.width()>650)return void i.css("top","auto");var t=L(window).height()>window.screen.height?window.screen.height:L(window).height(),a=Math.round(t/2);i.css("top",a+"px")}function n(){Q.styles.pattern.useVideo&&0===Object.keys(z).length?v(y(Q.styles.pattern.linkVideo)):Q.styles.pattern.useVideo&&Object.keys(z).length&&Object.keys(z).forEach(function(e){z[e].playVideo()})}function o(){Object.keys(z).forEach(function(e){z[e].stopVideo()})}var i=N.element.find(".widget-wrapper"),l=L.extend({},e.styles),s=i.find(".widget-content"),c=i.find(".thanks-content"),d=i.find(".wait-content"),u=0===location.pathname.indexOf("/widget/callback/");u&&"?type=work"==location.search?Q.workMode="work":u&&"?type=not-work"==location.search&&(Q.workMode="not-work"),void 0===l.textDynamicWidget&&(l.textDynamicWidget={}),void 0===l.textNotWorkingDynamicWidget&&(l.textNotWorkingDynamicWidget={});var g=l.textDynamicWidget.firstText||"",h=l.textNotWorkingDynamicWidget.firstText||"",w=l.textDynamicWidget.secondText||"",m=l.textDynamicWidget.thirdText||Q.translate.dynamic_button_header;i.removeClass("selected-label").addClass("selected-dynamic"),i.find(".button-widget-open").text(""),s.find(".title-widget").text(m),s.find(".text-widget").html(p(k()?g:h)),s.find(".box-select-group").hide(),c.find(".text-widget").text(e.translate.dynamic_button_thank_you),i.find(".button-call").text(w),N.element.find(".mng-overlay").hide(),i.find(".call-input").height(35),l.pattern&&l.pattern.linkVideo&&l.pattern.useVideo&&(s.prepend('<div class="background-video"><div id="mango-video-container"></div></div>'),c.prepend('<div class="background-video"><div id="mango-video-thanks-container"></div></div>'),d.prepend('<div class="background-video"><div id="mango-video-wait-container"></div></div>')),L(window).resize(a),N.element.on("statusChange",function(e,l){r()&&(q(),a(),i.hasClass("thanks")&&"close"==l&&i.removeClass("thanks"),"success"!=l||k()||c.find(".text-widget").text(t()),"open"==l&&n(),"close"==l&&o())})}function A(e){var t=N.element.find(".widget-wrapper:not(fast-callback) .button-call"),a=N.element.find(".box-select-group"),n=N.element.find(".box-phone-number");return a.is(":visible")?void e():(t.text(Q.translate.dynamic_button_not_work_button),a.css("display","inline-block"),N.element.find(".widget-content .widget-text").text(Q.translate.dynamic_button_not_work_text),n.find(".box-phone-span-input").hide(),n.find(".currentCountry").hide(),q(),void t.off().on("click",function(){var t=N.element.find(".select-day-week option:selected").text(),a=N.element.find(".select-time option:selected").text();A.date=t,A.time=a,e()}))}function C(e){var t,a;N.currentCountry["default"]&&N.allowedCountries.length>0?(t={mask:N.allowedCountries[0].mask.replace(/\?/g,""),placeHolder:N.allowedCountries[0].placeholder},a=N.allowedCountries[0].phone_code.length+1):(t={mask:N.currentCountry.mask.replace(/\?/g,""),placeHolder:N.currentCountry.placeholder},a=N.currentCountry.phone_code.length+1);var n=N.element.find(".call-input"),o=12.5;V=VMasker(n[0]),V.maskPattern(t.mask),n.attr("placeholder",t.placeHolder),l(n,o,t.placeHolder,a),(N.element.find(".widget-wrapper").hasClass("dark-cerulean-color")||N.element.find(".widget-wrapper").hasClass("graphite-black-color"))&&N.element.find(".widget-wrapper").hasClass("selected-button")&&N.element.find(".currentCountry>.selectedCountry .triangle").addClass("dark"),N.allowedCountries.length>1?N.element.find(".selectedCountry").on("click",function(){L(this).toggleClass("showCountriesList"),L(this).hasClass("showCountriesList")?(L(".changeCountry").css("display","block"),N.allowedCountries.length<5&&L(".changeCountry").css("height",31*N.allowedCountries.length)):L(".changeCountry").css("display","none")}):N.element.find(".currentCountry>.selectedCountry>.triangle").css("display","none")}function x(e){var t=12.5,a=L(e.target),n=a.parents(".widget-wrapper"),o=a.hasClass("selectCountry")?a:a.parents(".selectCountry"),i=o.parents(".box-phone-number"),r=i.find(".call-input"),s=i.find(".selectedCountry"),c=s.find("img"),d=o.parents(".changeCountry"),u=o.attr("data-code"),g=o.attr("data-placeholder"),h=o.attr("data-index"),w=o.attr("data-country");l(r,t,g,u.length),c.removeClass("flag-"+s.attr("data-country")),s.attr("data-country",w),s.attr("data-index",h),c.addClass("flag-"+w),n.find(".box-phone-span-input").attr("data-content",u),r.val(""),r.attr("mask",o.attr("data-mask"));var m={mask:o.attr("data-mask").replace(/\?/g,""),placeHolder:o.attr("data-placeholder")};V=VMasker(r[0]),V.maskPattern(m.mask),r.attr("placeholder",m.placeHolder),d.css("display","none"),s.removeClass("showCountriesList"),q(200)}function M(e){var t=new Date,a=t.toISOString().substring(0,10),n=e.nonWorkingDaysException||[];if(-1!==n.indexOf(a))return!1;var o=new Date(e.workInterval.start),i=new Date(e.workInterval.finish),l=e.workInterval.lunchStart?new Date(e.workInterval.lunchStart):null,r=e.workInterval.lunchFinish?new Date(e.workInterval.lunchFinish):null;return l&&r?o<=t&&t<i&&!(l<=t&&t<r):o<=t&&t<i}function S(e){var t=M(e);return"work"!==e.workMode||t?!("not-work"!==e.workMode||!t)&&(e.workMode="work",!0):(e.workMode="not-work",!0)}function E(){L("<link>",{rel:"stylesheet",type:"text/css",href:N.host+"css/widget.css"}).appendTo("head"),L("<link>",{rel:"stylesheet",type:"text/css",href:N.host+"css/flags.css"}).appendTo("head")}function O(e){switch(e){case 1:case 2:return N.element.find("#mango-widget-btn").attr("onclick",'alert("'+Q.translate.widget_unavailable+'"); false;'),!1;case 3:return B(),!1}return!0}function T(e){void 0===window.VMasker?W("js/vanilla-masker.js",function(){e()}):e()}function j(e){var e=e||"widgets/mango-fast-callback.js",t=document.createElement("script"),a=L.Deferred();return t.setAttribute("type","text/javascript"),t.setAttribute("src",N.host+e),t.onerror=a.reject.bind(a),t.onload=a.resolve.bind(a),(document.getElementById(N.id)||document.documentElement).appendChild(t),a=a.promise(),a.fail(function(){B()}),a}function D(e){function t(e,t){if(e==t)return 0;for(var a=e.split("."),n=t.split("."),o=Math.min(a.length,n.length),i=0;i<o;i++){if(parseInt(a[i])>parseInt(n[i]))return 1;if(parseInt(a[i])<parseInt(n[i]))return-1}return a.length>n.length?1:a.length<n.length?-1:0}function a(e){var a;return"function"==typeof e&&(a=e(),"object"==typeof a&&void 0!==a.jquery&&t(a.jquery,Y)>=0)}if(void 0===window.jQuery){var n=window.$;W("js/jquery-1.7.2.js",function(){L=window.jQuery.noConflict(),window.$=n,(window.Mango=window.Mango||{}).jQuery=L,e()})}else if(a(window.jQuery))L=window.jQuery,(window.Mango=window.Mango||{}).jQuery=L,e();else{var o=window.jQuery.noConflict();W("js/jquery-1.7.2.js",function(){L=window.jQuery.noConflict(),window.jQuery=window.$=o,(window.Mango=window.Mango||{}).jQuery=L,e()})}}function I(e){void 0===L.Storage?W("js/jquery.storage.js",function(){L.Storage=window.jQuery.Storage,e()}):e()}function W(e,t){var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src",N.host+e),a.readyState?a.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||t()}:(a.onload=t,a.onerror=B),(document.getElementById(N.id)||document.documentElement).appendChild(a)}function B(e){var e=!(!e&&"object"==typeof e)&&e,t="";e&&(t="("+e+")"),N.element?N.element.find(".button-widget-open").attr("onclick",'alert("'+N.errorMessage+t+'"); false;'):N.elem.querySelector(".button-widget-open").setAttribute("onclick",'alert("'+N.errorMessage+t+'"); false;')}function H(){return window.location.href.indexOf("autoOpen=1")>0}this.host=e.host,this.id=e.id,this.elem=e.elem,this.errorMessage=e.message,this.callbackButtonId=!1,this.type="",this.allowedCountries=[],this.currentCountry=[],this.fastCallback=null,this.closeTimeout=null,this.autoCloseTimeout=null,this.widget_show_error=!1,this.connection=!1;var L,Q,V,N=this,R=!1,G=6e4,P=5e3,Y="1.7.2",z={};this.initWidget=function(){D(function(){T(function(){I(function(){N.elem?N.element=L(N.elem):N.element=L("#"+N.id);var e=N.element.data("settings");N.callbackButtonId=e.id;var a=new Date,n=N.host+"widget/get-callback-widget/"+e.id+"?callback=?&timeOffset="+a.getTimezoneOffset()+"&type="+e.type+"&serv="+e.srv;L.support.cors=!0,L.getJSON(n,e,function(a){Q=a,a.widget_id=e.id;var n=N.element.attr("data-optionsView");n&&(a.styles=jQuery.parseJSON(n)),N.currentCountry=a.currentCountry,N.allowedCountries=a.allowedCountries,o(a,function(){R=!0,(e.type||H())&&N.setStatus("open",a),N.type=e.type||null,(a.use_tracking||"fast-callback"==a.workMode)&&t(a)})})})})})},this.setStatus=function(e,t){if(!N.type&&R){var n=N.element.find(".widget-wrapper:not(.fast-callback)"),o=N.element.find(".widget-wrapper.fast-callback.widget-show");switch(e){case"open":!n.hasClass("widget-show")&&S(t)&&(f(t),n=N.element.find(".widget-wrapper")),setTimeout(function(){n.toggleClass("widget-show"),n.removeClass("thanks"),n.removeClass("wait"),n.hasClass("widget-show")&&n.hasClass("selected-button")&&N.element.find(".mng-overlay").show().animate({opacity:"0.5"},500)},0),N.autoCloseTimeout=setTimeout(function(){N.setStatus("close")},G),s();break;case"success":n.addClass("thanks"),n.removeClass("wait"),N.closeTimeout=setTimeout(function(){N.setStatus("close"),o||N.element.find(".mng-overlay").animate({opacity:"0"},500).hide(1)},P);break;case"close":n.removeClass("widget-show"),clearTimeout(N.closeTimeout),clearTimeout(N.autoCloseTimeout),N.element.find(".mng-overlay").animate({opacity:"0"},500).hide(1);break;case"waiting":n.addClass("wait"),n.removeClass("thanks");break;case"connection-failed":a(1),N.element.find(".mng-overlay").animate({opacity:"0"},500).hide(1)}setTimeout(function(){N.element.trigger("statusChange",[e])},0)}};var q=function(){}}!function(e,t,a){a.$,a._,a.Promise;a.SEO=a.SEO||{},a.SEO.events={mch_chat_established:"mch_chat_established",mch_chat_created:"mch_chat_created",mch_chat_propose:"mch_chat_propose",mch_callback_created:"mch_callback_created",mch_callback_established:"mch_callback_established",mch_callback_lead:"mch_callback_lead",mch_leadgen_shown:"mch_leadgen_shown",mch_leadgen_created:"mch_leadgen_created",mch_leadgen_established:"mch_leadgen_established",widget_callback_created:"widget_callback_created",widget_callback_established:"widget_callback_established",widget_leadgen_shown:"widget_leadgen_shown",widget_leadgen_created:"widget_leadgen_created"},a.SEO.Yandex=function(){function t(t){var a=e.ym;if(a){var n=a.a.map(function(e){return e[0]}),o=[].concat(_toConsumableArray(new Set(n)));o.forEach(function(e){return a(e,"reachGoal",t)})}}return{reachGoal:t}}(),a.SEO.Google=function(){function t(){o&&o("event","page_view",{event_callback:function(){i=!0,l.forEach(a),l=[]}})}function a(e){var t=n[e];if(t){var a=t.action,r=t.category;return o&&i?void o("event",a,{event_category:r}):void(o&&l.push(e))}}var n={mch_chat_established:{category:"mch_chat",action:"established"},mch_chat_created:{category:"mch_chat",action:"created"},mch_chat_propose:{category:"mch_chat",action:"propose"},mch_callback_created:{category:"mch_callback",action:"created"},mch_callback_established:{category:"mch_callback",action:"established"},mch_callback_lead:{category:"mch_callback",action:"lead"},mch_leadgen_shown:{category:"mch_leadgen",action:"shown"},mch_leadgen_created:{category:"mch_leadgen",action:"created"},mch_leadgen_established:{category:"mch_leadgen",action:"established"},widget_callback_created:{category:"widget_callback",action:"created"},widget_callback_established:{category:"widget_callback",action:"established"},widget_leadgen_shown:{category:"widget_leadgen",action:"shown"},widget_leadgen_created:{category:"widget_leadgen",action:"created"}},o=e.gtag,i=!1,l=[];return t(),{sendEvent:a}}(),a.SEO.sendEvent=function(e){a.SEO.Yandex&&a.SEO.Yandex.reachGoal(e),a.SEO.Google&&a.SEO.Google.sendEvent(e)}}(window,document,window.Mango=window.Mango||{});