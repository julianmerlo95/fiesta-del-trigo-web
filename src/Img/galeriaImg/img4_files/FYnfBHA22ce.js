if (self.CavalryLogger) { CavalryLogger.start_js(["Pz\/IN"]); }

__d("legacy:dom-html",["HTML"],(function(a,b,c,d,e,f){a.HTML=b("HTML")}),3);
__d("legacy:netego",["NetEgo"],(function(a,b,c,d,e,f){a.NetEgo=b("NetEgo")}),3);
__d("PhotosButtonTooltips",["Arbiter","DOMDimensions","Style","Tooltip"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=[],i;function j(a,c){__p&&__p();if(!a||!a.length||!c||!c.length||a.length!=c.length)throw new Error("Incorrect arguments passed in from PHP for photo button cropping");var d=0,e=[],f=!1;for(d=0;d<a.length;d++)e.push(b("DOMDimensions").getElementDimensions(a[d]).width),e[d]&&(f=!0);if(f){a.forEach(function(a){b("Style").set(a,"max-width","100%")});for(d=0;d<a.length;d++){var g=a[d],i=e[d];if(i){var j=b("DOMDimensions").getElementDimensions(g).width;j>i&&(b("Tooltip").set(g,c[d]),h.push(g))}}a.forEach(function(a){b("Style").set(a,"max-width","")})}return f}function k(){g.forEach(function(a){a.unsubscribe()}),g=[],h.forEach(b("Tooltip").remove),h=[]}function l(a,c,d){this.arbiterToken=b("Arbiter").subscribe(a,function(){j(c,d)&&(this.arbiterToken&&this.arbiterToken.unsubscribe())}.bind(this))}a={init:function(){i||(i=b("Arbiter").subscribe("PhotoSnowlift.CLOSE",k))},registerButtonsOnPaging:function(a,b){g.push(new l("PhotoSnowlift.DATA_CHANGE",a,b).arbiterToken)},registerButtonsOnTaggingOn:function(a,b){g.push(new l("PhotoTagger.START_TAGGING",a,b).arbiterToken)},registerButtonsOnTaggingOff:function(a,b){g.push(new l("PhotoTagger.STOP_TAGGING",a,b).arbiterToken)}};e.exports=a}),null);
__d("HideInlineHelp",[],(function(a,b,c,d,e,f){var g={};a={registerMenu:function(a,b,c){g[a]=b.setValue.bind(b,c)},triggerUndo:function(a){g[a]()}};e.exports=a}),null);
__d("ProfilePicMenuDialogInitializer",["AccessibleLayer","Arbiter","BanzaiLogger","DataStore","Event","Layer","Parent","ProfilePictureFlowLogging","TabIsolation","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g="data-logging-event";function a(a,c,d,e,f,i){__p&&__p();h(a);var j=!1;b("ProfilePictureFlowLogging").init(c,i);b("tidyEvent")([a.subscribe("beforehide",function(c){return j?!0:a===b("Layer").getTopmostLayer()}),b("Arbiter").subscribe("videoUpload/complete",function(){j=!0,a.hide()}),a.subscribe("hide",function(a){a=Math.floor(Date.now()/1e3);b("BanzaiLogger").log("ProfilePicMenuDialogAlbumSetsActionLoggerConfig",{time_spent_in_seconds:a-e})}),b("Event").listen(c,"click",function(a){a=b("Parent").byAttribute(a.getTarget(),g);if(!a)return;b("BanzaiLogger").log("ProfilePicMenuDialogAlbumSetsActionLoggerConfig",JSON.parse(b("DataStore").get(a,"logging-event")))})])}function h(a){new(b("AccessibleLayer"))(a).enable(),new(b("TabIsolation"))(a).enable()}e.exports=a}),null);
__d("MakeProfilePicInit",["ProfilePicCropViewerInit","URI"],(function(a,b,c,d,e,f){var g;a={handleOptimus:function(a,c,d){d.preventDefault();a=new(g||(g=b("URI")))(c.getAttribute("ajaxify")||c.getAttribute("href")).getQueryData();b("ProfilePicCropViewerInit").loadID(a.fbid,a.profile_id,{source:a.pp_source,stickerID:a.sticker_id})}};e.exports=a}),null);
__d("legacy:Selector",["SelectorDeprecated"],(function(a,b,c,d,e,f){a.Selector=b("SelectorDeprecated")}),3);