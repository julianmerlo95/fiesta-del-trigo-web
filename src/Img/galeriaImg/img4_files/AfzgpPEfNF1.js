if (self.CavalryLogger) { CavalryLogger.start_js(["D663E"]); }

__d("GroupCommerceProductDetailLayer",["GroupCommerceProductDetail.react","Layer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d._buildWrapper=function(a,c){b("GroupCommerceProductDetail.react").init(c);return c};return c}(b("Layer"));e.exports=a}),null);
__d("PhotoSnowliftBackLink.react",["cx","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("a",{className:"_1cac"+(this.props.visible?" _1cad":""),href:this.props.href,children:this.props.name})};return c}(b("React").Component);a.propTypes={href:b("prop-types").string,name:b("prop-types").string,visible:b("prop-types").bool};e.exports=a}),null);
__d("PhotoSnowliftViewable",["cx","CSS","DOM","EventEmitter","Vector"],(function(a,b,c,d,e,f,g){__p&&__p();var h=2e3;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;c===void 0&&(c=h);d===void 0&&(d=1);e=a.call(this)||this;e.$PhotoSnowliftViewable5=b("DOM").create("div",{className:"_2-sx"});e.$PhotoSnowliftViewable4=c;e.$PhotoSnowliftViewable3=d;e.$PhotoSnowliftViewable1=null;e.$PhotoSnowliftViewable2=0;e.$PhotoSnowliftViewable6();setTimeout(function(){return e.whenReady(function(){return e.$PhotoSnowliftViewable7()})},0);return e}var d=c.prototype;d.$PhotoSnowliftViewable6=function(){var a=this;this.$PhotoSnowliftViewable1=setTimeout(function(){return a.$PhotoSnowliftViewable8()},this.$PhotoSnowliftViewable4)};d.$PhotoSnowliftViewable8=function(){if(this.isReady())return;this.$PhotoSnowliftViewable2<this.$PhotoSnowliftViewable3?(this.reload(),this.$PhotoSnowliftViewable2++,this.$PhotoSnowliftViewable6()):this.emit("loadingfailed")};d.reload=function(){};d.$PhotoSnowliftViewable7=function(){this.$PhotoSnowliftViewable1!==null&&(clearTimeout(this.$PhotoSnowliftViewable1),this.$PhotoSnowliftViewable1=null)};d.getElement=function(){return this.$PhotoSnowliftViewable5};d.show=function(){b("CSS").show(this.getElement())};d.hide=function(){b("CSS").hide(this.getElement())};d.suspend=function(){};d.resume=function(){};d.onToggleIntoFullScreen=function(){};d.onToggleOutOfFullScreen=function(){};d.onEnterFullScreen=function(){};d.onExitFullScreen=function(){};d.getNaturalDimensions=function(){return this.getDimensions()};d.getDimensions=function(){return b("Vector").getElementDimensions(this.getElement())};d.setDimensions=function(a){var b=this.getElement();b.style.width=a.x+"px";b.style.height=a.y+"px"};d.isReady=function(){throw new Error("Viewable has no concept of readiness - should be calling a subclass")};d.whenReady=function(a){this.isReady()?setTimeout(a,0):this.once("ready",a)};return c}(b("EventEmitter"));e.exports=a}),null);
__d("PhotoSnowliftViewableImageWrapper",["Event","EventProfiler","ImageUtils","PhotoSnowliftViewable","TimeSlice","Vector"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this)||this;b("EventProfiler").tagCurrentActiveInteractionsAs("PSVImageWrapper");d.$PhotoSnowliftViewableImageWrapper1=c;d.getElement().appendChild(c);if(d.$PhotoSnowliftViewableImageWrapper1.complete)d.$PhotoSnowliftViewableImageWrapper2();else{c=b("TimeSlice").getGuardedContinuation("PhotoSnowLiftViewable photo load");b("Event").listen(d.$PhotoSnowliftViewableImageWrapper1,"load",c.bind(null,function(){return d.$PhotoSnowliftViewableImageWrapper2()}))}return d}var d=c.prototype;d.$PhotoSnowliftViewableImageWrapper2=function(){this.emit("ready"),b("EventProfiler").informPointOnActiveInteractions("snowlift_image_loaded",{isPointOfInterest:!0},!0)};d.isReady=function(){return b("ImageUtils").hasLoaded(this.$PhotoSnowliftViewableImageWrapper1)};d.getNaturalDimensions=function(){return this.$PhotoSnowliftViewableImageWrapper1&&this.$PhotoSnowliftViewableImageWrapper1.naturalWidth&&this.$PhotoSnowliftViewableImageWrapper1.naturalHeight?b("Vector").from(this.$PhotoSnowliftViewableImageWrapper1.naturalWidth,this.$PhotoSnowliftViewableImageWrapper1.naturalHeight):a.prototype.getNaturalDimensions.call(this)};return c}(b("PhotoSnowliftViewable"));e.exports=a}),null);
__d("PhotoSnowliftViewablePhoto",["Bootloader","DOM","EncryptedImg","Event","EventProfiler","ImageUtils","PhotoSnowliftViewable","TimeSlice","Vector"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(a.src&&a.complete)setTimeout(c,0);else var d=b("Event").listen(a,"load",function(){d.remove(),c()})}function h(a,c){b("EncryptedImg").isEncrypted(c)?b("EncryptedImg").insertIntoDOM(c,a):a.src=c}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,g,h,i,j,k){__p&&__p();var l;e===void 0&&(e=!1);h===void 0&&(h=!1);i===void 0&&(i=!1);k===void 0&&(k=!1);l=a.call(this)||this;b("EventProfiler").tagCurrentActiveInteractionsAs("PSVPhoto");l.$PhotoSnowliftViewablePhoto2=f;l.$PhotoSnowliftViewablePhoto7=c;l.$PhotoSnowliftViewablePhoto6=d;l.$PhotoSnowliftViewablePhoto3=e;l.$PhotoSnowliftViewablePhoto1=j;l.$PhotoSnowliftViewablePhoto8=g;l.$PhotoSnowliftViewablePhoto9=h;l.$PhotoSnowliftViewablePhoto10=i;l.$PhotoSnowliftViewablePhoto11=k;l.addListener("imageloaded",function(a){return l.$PhotoSnowliftViewablePhoto13(a)});l.$PhotoSnowliftViewablePhoto14();return l}var d=c.prototype;d.$PhotoSnowliftViewablePhoto14=function(){__p&&__p();var a=this;this.$PhotoSnowliftViewablePhoto4&&this.$PhotoSnowliftViewablePhoto4.parentElement&&this.$PhotoSnowliftViewablePhoto4.parentElement.removeChild(this.$PhotoSnowliftViewablePhoto4);var c=b("DOM").create("img",{className:"spotlight",alt:this.$PhotoSnowliftViewablePhoto1});this.$PhotoSnowliftViewablePhoto2&&this.$PhotoSnowliftViewablePhoto2.setElementDimensions(c);this.$PhotoSnowliftViewablePhoto4=c;this.$PhotoSnowliftViewablePhoto4.setAttribute("aria-busy","true");this.getElement().appendChild(this.$PhotoSnowliftViewablePhoto4);this.$PhotoSnowliftViewablePhoto12=b("TimeSlice").getGuardedContinuation("PhotoSnowliftViewable image load");this.$PhotoSnowliftViewablePhoto15(this.$PhotoSnowliftViewablePhoto16());g(this.$PhotoSnowliftViewablePhoto4,this.$PhotoSnowliftViewablePhoto12.bind(void 0,function(){a.emit("imageloaded",c)}));this.whenReady(function(){return a.$PhotoSnowliftViewablePhoto17()});this.$PhotoSnowliftViewablePhoto18();this.$PhotoSnowliftViewablePhoto19()};d.$PhotoSnowliftViewablePhoto19=function(){var a=this;this.$PhotoSnowliftViewablePhoto10&&!this.$PhotoSnowliftViewablePhoto9&&b("Bootloader").loadModules(["PhotoSnowliftViewableWithContextMenuLogging"],function(b){b=b.setupContextMenuLogging;b(a.getElement(),a.$PhotoSnowliftViewablePhoto8)},"PhotoSnowliftViewablePhoto")};d.$PhotoSnowliftViewablePhoto18=function(){var a=this;if(!this.$PhotoSnowliftViewablePhoto11)return;b("Bootloader").loadModules(["PhotoSnowliftViewableWithShieldIconOverlay"],function(b){b=b.setupShieldIconOverlay;b(a.getElement())},"PhotoSnowliftViewablePhoto")};d.$PhotoSnowliftViewablePhoto15=function(a){this.$PhotoSnowliftViewablePhoto5=a,h(this.$PhotoSnowliftViewablePhoto4,this.$PhotoSnowliftViewablePhoto5)};d.$PhotoSnowliftViewablePhoto13=function(a){if(this.$PhotoSnowliftViewablePhoto4!==a)return;this.emit("ready")};d.reload=function(){this.$PhotoSnowliftViewablePhoto12&&b("TimeSlice").cancel(this.$PhotoSnowliftViewablePhoto12),this.$PhotoSnowliftViewablePhoto14()};d.$PhotoSnowliftViewablePhoto16=function(){return this.$PhotoSnowliftViewablePhoto3?this.$PhotoSnowliftViewablePhoto7:this.$PhotoSnowliftViewablePhoto6||this.$PhotoSnowliftViewablePhoto7};d.$PhotoSnowliftViewablePhoto17=function(){this.$PhotoSnowliftViewablePhoto4.setAttribute("aria-busy","false")};d.isReady=function(){return this.$PhotoSnowliftViewablePhoto4.src&&b("ImageUtils").hasLoaded(this.$PhotoSnowliftViewablePhoto4)};d.getNaturalDimensions=function(){if(this.$PhotoSnowliftViewablePhoto2)return this.$PhotoSnowliftViewablePhoto2;return this.$PhotoSnowliftViewablePhoto4&&this.$PhotoSnowliftViewablePhoto4.naturalWidth&&this.$PhotoSnowliftViewablePhoto4.naturalHeight?b("Vector").from(this.$PhotoSnowliftViewablePhoto4.naturalWidth,this.$PhotoSnowliftViewablePhoto4.naturalHeight):a.prototype.getNaturalDimensions.call(this)};d.$PhotoSnowliftViewablePhoto20=function(){return this.$PhotoSnowliftViewablePhoto5===this.$PhotoSnowliftViewablePhoto7};d.onToggleIntoFullScreen=function(){this.$PhotoSnowliftViewablePhoto20()||this.$PhotoSnowliftViewablePhoto5!==this.$PhotoSnowliftViewablePhoto7&&h(new Image(),this.$PhotoSnowliftViewablePhoto7)};d.onEnterFullScreen=function(){this.$PhotoSnowliftViewablePhoto20()||this.$PhotoSnowliftViewablePhoto15(this.$PhotoSnowliftViewablePhoto7)};return c}(b("PhotoSnowliftViewable"));e.exports=a}),null);
__d("SphericalMediaBootloaded.react",["cx","BootloadedComponent.react","JSResource","LoadingIndicator.react","React","SphericalMediaConstants"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("SphericalMediaConstants").COMP_PHOTO_EDIT_THUMB,i=b("SphericalMediaConstants").COMP_PHOTO_VIEWER,j=function(a,c){return b("React").jsx("div",{className:a,style:c,children:b("React").jsx(b("LoadingIndicator.react"),{className:"_4qlq",size:"small",color:"white"})})};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){switch(this.props.componentName){case h:var a=this.props.loadingElement||j("_7d7",{width:this.props.width,height:this.props.height});return b("React").jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:b("JSResource")("SphericalPhotoEditThumbnail.react").__setRef("SphericalMediaBootloaded.react"),bootloadPlaceholder:a},this.props));case i:a=b("React").jsx("div",{});return b("React").jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:b("JSResource")("SphericalPhotoViewer.react").__setRef("SphericalMediaBootloaded.react"),bootloadPlaceholder:a},this.props));default:return null}};return c}(b("React").PureComponent);e.exports=a}),null);
__d("SphericalPhotoPlaceHolderWithGyroOverlay.react",["cx","BackgroundImage.react","Image.react","React","SphericalMediaGyroOverlay.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsxs("div",{className:"_5nxw _1c1o",children:[this.props.showNewRenderer?b("React").jsx(b("BackgroundImage.react"),{backgroundSize:"contain",height:this.props.height,src:this.props.placeholderImageURL,width:this.props.width}):b("React").jsx(b("Image.react"),{className:"_1c1p",height:this.props.height,src:this.props.placeholderImageURL,width:this.props.width}),b("React").jsx(b("SphericalMediaGyroOverlay.react"),{className:"_1c1q",isActive:!0})]})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("SphericalPhotoViewerLoggerUtil",["Bootloader","CSS","FullScreen","ProfileTabUtils","SphericalPhotoViewerTypedLogger","URI","SphericalMediaConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="timelineLayout",i=b("SphericalMediaConstants").LOGGER_SURFACES,j=function(a){__p&&__p();if(b("FullScreen").isFullScreen())return i.fullpage;var c=(g||(g=b("URI"))).getMostRecentURI();if(Object.prototype.hasOwnProperty.call(c.getQueryData(),"theater"))return i.snowlift;if(c.getPath()==="/"||c.getPath()==="/home.php")return i.newsfeed;var d=a.getTabKeyFromURI(c);a=a.getVanityFromURI(c);return a&&b("ProfileTabUtils").isTimelineTab(d)&&document.body&&b("CSS").hasClass(document.body,h)?i.timeline:i.other},k={logTapHeadingIndicator:function(a){a===void 0&&(a={}),k._log("spherical_photo_tap_heading_indicator",a)},logDragStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_drag_start",a)},logMouseOverStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_mouseover_start",a)},logWWWGyroStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_gyro_start",a)},logZoomStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_zoom_start",a)},logDragMouseAnimation:function(a){a===void 0&&(a={}),k._log("spherical_photo_drag_mouse_animation",a)},logEnterSnowlift:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_enter_snowlift",a)},logExitSnowlift:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_exit_snowlift",a)},logEnterFullScreen:function(a){a===void 0&&(a={}),k._log("spherical_photo_tap_feed_to_fullscreen",a)},logExitFullScreen:function(a){a===void 0&&(a={}),k._log("spherical_photo_fullscreen_exited",a)},logSignificantMovement:function(a){a===void 0&&(a={}),k._log("spherical_photo_significant_movement",a)},logIVSOpen:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_open",a)},logIVSCancel:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_cancel",a)},logIVSEnableSphericalOnSave:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_enable_on_save",a)},logIVSDisableSphericalOnSave:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_disable_on_save",a)},logToggleOn:function(a){a===void 0&&(a={}),k._log("spherical_photo_toggle_on",a)},logToggleOff:function(a){a===void 0&&(a={}),k._log("spherical_photo_toggle_off",a)},logIVSRequestStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_request_start",a)},logIVSRequestFailed:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_request_failed",a)},logIVSRequestDone:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_request_done",a)},logIVSUpdateStart:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_update_start",a)},logIVSUpdateFailed:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_update_failed",a)},logIVSUpdateDone:function(a){a===void 0&&(a={}),k._log("spherical_photo_www_ivs_update_done",a)},logWebGlInitFailed:function(a,b){a===void 0&&(a={}),b===void 0&&(b={}),k._log("spherical_photo_webgl_init_failure",a,b)},logWebGlRenderFailed:function(a,b){a===void 0&&(a={}),b===void 0&&(b={}),k._log("spherical_photo_webgl_render_failure",a,b)},logWebGlContextLost:function(a){a===void 0&&(a={}),k._log("spherical_photo_webgl_context_lost",a)},logNumberOfSphericalPhoto:function(a){a===void 0&&(a={}),k._log("spherical_photo_post_event",a)},logRendererSetup:function(a,b){a===void 0&&(a={}),a.renderMethod=b?"tiled":"cubestrip",k._log("spherical_photo_renderer_setup",a)},logRendererStats:function(a,b){a===void 0&&(a={}),b===void 0&&(b={}),k._log("spherical_photo_renderer_stats",a,b)},_log:function(a,c,d){d===void 0&&(d={});if(!c.surface){b("Bootloader").loadModules(["TimelineURI"],function(b){c.surface=j(b),k._logWithSurface(a,c,d)},"SphericalPhotoViewerLoggerUtil");return}k._logWithSurface(a,c,d)},_logWithSurface:function(a,c,d){d===void 0&&(d={}),new(b("SphericalPhotoViewerTypedLogger"))().setComposerSessionID(c.composerSessionID).setDt(c.dt).setErrorMessage(c.errorMessage).setName(a).setNumberOfSphericalPhoto(c.numberOfSphericalPhoto).setPhotoID(c.photoID).setPitch(c.pitch).setRenderMethod(c.renderMethod||"").setSphericalPhotoSessionID(c.sessionID).setSurface(c.surface).setVfov(c.vfov).setViewportHeight(c.viewportHeight).setViewportWidth(c.viewportWidth).setYaw(c.yaw).updateData(d).log()}};e.exports=k}),null);
__d("PhotoSnowliftViewableSphericalPhoto",["cx","Arbiter","Bootloader","CSS","DOM","DOMQuery","EventProfiler","PhotoSnowliftViewable","React","ReactDOM","SphericalMediaActions","SphericalMediaBaseActions","SphericalMediaBootloaded.react","SphericalMediaConstants","SphericalPhotoPlaceHolderWithGyroOverlay.react","SphericalPhotoTypedConfig","SphericalPhotoViewerLoggerUtil","SubscriptionsHandler","Vector","getViewportDimensions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=(a=b("SphericalMediaBaseActions")).deletedSpatialTag,i=a.enterTaggingMode,j=a.exitTaggingMode,k=a.taggingStop,l=a.updateDimension,m=a.updateFeedRootElement,n=a.updateSpatialTags,o=a.updateTagger,p=a.updateTargetedTag,q=b("SphericalMediaConstants").COMP_PHOTO_VIEWER,r=b("SphericalMediaConstants").LOGGER_SURFACES,s=b("SphericalMediaConstants").UNTAGGED_FACEBOX,t=(c=b("SphericalPhotoViewerLoggerUtil")).logEnterFullScreen,u=c.logEnterSnowlift,v=c.logExitFullScreen,w=c.logExitSnowlift,x=2e3*16,y=360;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,g,q,r,t,v,w,y,z,A,B,C){__p&&__p();var D;t===void 0&&(t=!1);D=a.call(this,x)||this;D.$PhotoSnowliftViewableSphericalPhoto32=function(a){var b=a.dispatch;a.getState;b(m(D.$PhotoSnowliftViewableSphericalPhoto5));return function(a){return function(b){return a(b)}}};D.$PhotoSnowliftViewableSphericalPhoto33=function(a){__p&&__p();var c=a.dispatch,d=a.getState;D.$PhotoSnowliftViewableSphericalPhoto15.getTagger()?c(o(D.$PhotoSnowliftViewableSphericalPhoto15.getTagger())):D.$PhotoSnowliftViewableSphericalPhoto19.addSubscriptions(b("Arbiter").subscribe(D.$PhotoSnowliftViewableSphericalPhoto15.getEventString("TAGGER_READY"),function(a,b){c(o(D.$PhotoSnowliftViewableSphericalPhoto15.getTagger()))}));D.$PhotoSnowliftViewableSphericalPhoto19.addSubscriptions(b("Arbiter").subscribe("PhotoTagger.START_TAGGING",function(a,b){D.$PhotoSnowliftViewableSphericalPhoto22=!0,c(i())}),b("Arbiter").subscribe("PhotoTagger.STOP_TAGGING",function(a,b){c(j()),D.$PhotoSnowliftViewableSphericalPhoto22=!1}),b("Arbiter").subscribe("PhotoTags.SHOWTAG",function(a,e){b("Bootloader").loadModules(["SphericalMediaTaggingUtils"],function(a){a=a.getSpatialTagFromFBID;a=a(e,d().base.tags);c(p(a))},"PhotoSnowliftViewableSphericalPhoto")}),b("Arbiter").subscribe("PhotoTags.HIDETAG",function(a,b){c(p(null))}),b("Arbiter").subscribe(D.$PhotoSnowliftViewableSphericalPhoto15.getEventString("EXTRA_DATA_CHANGE"),function(a,b){__p&&__p();a=b?b.spatialTags:null;if(a&&Array.isArray(a)){c(n(a));c(k());var d=0;a.forEach(function(a){a.type!==s&&d++});if(D.$PhotoSnowliftViewableSphericalPhoto13&&D.$PhotoSnowliftViewableSphericalPhoto13>d){b=D.$PhotoSnowliftViewableSphericalPhoto13-d;for(var a=0;a<b;a++)c(h())}D.$PhotoSnowliftViewableSphericalPhoto13=d}}));return function(a){return function(b){return a(b)}}};D.$PhotoSnowliftViewableSphericalPhoto31=function(a){__p&&__p();a.getState;return function(a){return function(c){if(c.type===b("SphericalMediaActions").SHOW_FALLBACK){D.$PhotoSnowliftViewableSphericalPhoto11=!0;b("CSS").hide(D.$PhotoSnowliftViewableSphericalPhoto4);var d=b("DOMQuery").scry(D.$PhotoSnowliftViewableSphericalPhoto15.stageWrapper,".fbPhotosPhotoActionsTag.tagButton");d.length>0&&b("CSS").hide(d[0])}return a(c)}}};D.$PhotoSnowliftViewableSphericalPhoto28=function(){return function(a){return function(c){c.type===b("SphericalMediaActions").SETUP_RENDERER&&(D.$PhotoSnowliftViewableSphericalPhoto11=!0,b("CSS").hide(D.$PhotoSnowliftViewableSphericalPhoto4),D.$PhotoSnowliftViewableSphericalPhoto15.adjustStageSize());return a(c)}}};D.$PhotoSnowliftViewableSphericalPhoto29=function(a){var c=a.dispatch;return function(a){return function(d){if(d.type===b("SphericalMediaActions").SETUP_RENDERER){var e=D.$PhotoSnowliftViewableSphericalPhoto15.getTagger();e&&e.taggingMode!=D.$PhotoSnowliftViewableSphericalPhoto22&&(D.$PhotoSnowliftViewableSphericalPhoto22=e.taggingMode,c(e.taggingMode?i():j()))}return a(d)}}};D.$PhotoSnowliftViewableSphericalPhoto30=function(a){__p&&__p();a.getState;var c=a.dispatch;return function(a){return function(d){if(d.type===b("SphericalMediaActions").TURN_ON||d.type===b("SphericalMediaActions").SHOW_FALLBACK){var e=function(){var a=D.$PhotoSnowliftViewableSphericalPhoto27();c(l(a.x,a.y))};D.$PhotoSnowliftViewableSphericalPhoto18.addSubscriptions(D.addListener("onEnterFullScreen",e),D.addListener("onExitFullScreen",e),D.addListener("onSetDimensions",e));e()}return a(d)}}};b("EventProfiler").tagCurrentActiveInteractionsAs("PSVSphericalPhoto");D.$PhotoSnowliftViewableSphericalPhoto1=C;D.$PhotoSnowliftViewableSphericalPhoto2=e;D.$PhotoSnowliftViewableSphericalPhoto3=v;D.$PhotoSnowliftViewableSphericalPhoto6=B;D.$PhotoSnowliftViewableSphericalPhoto7=y;D.$PhotoSnowliftViewableSphericalPhoto8=!1;D.$PhotoSnowliftViewableSphericalPhoto9=t;D.$PhotoSnowliftViewableSphericalPhoto10=!1;D.$PhotoSnowliftViewableSphericalPhoto11=!1;D.$PhotoSnowliftViewableSphericalPhoto14=w;D.$PhotoSnowliftViewableSphericalPhoto15=z;D.$PhotoSnowliftViewableSphericalPhoto16=A;D.$PhotoSnowliftViewableSphericalPhoto17=d;D.$PhotoSnowliftViewableSphericalPhoto18=new(b("SubscriptionsHandler"))();D.$PhotoSnowliftViewableSphericalPhoto20=f;D.$PhotoSnowliftViewableSphericalPhoto21=c;D.$PhotoSnowliftViewableSphericalPhoto5=b("DOM").create("div",{className:"_zq_ _5nxw"});D.$PhotoSnowliftViewableSphericalPhoto4=b("DOM").create("div",{className:"_zr0 _5nxw"});D.getElement().appendChild(D.$PhotoSnowliftViewableSphericalPhoto5);D.getElement().appendChild(D.$PhotoSnowliftViewableSphericalPhoto4);b("CSS").addClass(D.getElement(),"_zr1");D.$PhotoSnowliftViewableSphericalPhoto12={fov:g,pitch:q,yaw:r};D.$PhotoSnowliftViewableSphericalPhoto19=new(b("SubscriptionsHandler"))();b("CSS").addClass(D.$PhotoSnowliftViewableSphericalPhoto15.stage,"_1ziy");D.$PhotoSnowliftViewableSphericalPhoto23();u(D.$PhotoSnowliftViewableSphericalPhoto24());return D}var d=c.prototype;d.$PhotoSnowliftViewableSphericalPhoto24=function(){return{photoID:this.$PhotoSnowliftViewableSphericalPhoto7,surface:r.snowlift}};d.$PhotoSnowliftViewableSphericalPhoto25=function(a){this.$PhotoSnowliftViewableSphericalPhoto20.useTiledRenderer&&b("SphericalPhotoTypedConfig").show_new_renderer?b("ReactDOM").render(b("React").jsx(b("SphericalPhotoPlaceHolderWithGyroOverlay.react"),{placeholderImageURL:this.$PhotoSnowliftViewableSphericalPhoto26(),showNewRenderer:!0,width:a.x,height:a.y}),this.$PhotoSnowliftViewableSphericalPhoto4):b("ReactDOM").render(b("React").jsx(b("SphericalPhotoPlaceHolderWithGyroOverlay.react"),{placeholderImageURL:this.$PhotoSnowliftViewableSphericalPhoto26()}),this.$PhotoSnowliftViewableSphericalPhoto4)};d.$PhotoSnowliftViewableSphericalPhoto23=function(){var a=this.$PhotoSnowliftViewableSphericalPhoto27(),c=[this.$PhotoSnowliftViewableSphericalPhoto28,this.$PhotoSnowliftViewableSphericalPhoto29,this.$PhotoSnowliftViewableSphericalPhoto30,this.$PhotoSnowliftViewableSphericalPhoto31,this.$PhotoSnowliftViewableSphericalPhoto32];b("SphericalPhotoTypedConfig").www_can_viewer_tag&&c.push(this.$PhotoSnowliftViewableSphericalPhoto33);this.$PhotoSnowliftViewableSphericalPhoto25(a);b("ReactDOM").render(b("React").jsx(b("SphericalMediaBootloaded.react"),{ambientAudio:this.$PhotoSnowliftViewableSphericalPhoto1,componentName:q,canvasNamespace:"Snowlift",cubeImageURI:this.$PhotoSnowliftViewableSphericalPhoto2,fallback:this.$PhotoSnowliftViewableSphericalPhoto6,enableGyro:!0,enableZoom:!0,enableTagging:!0,enableRubberBanding:!0,height:a.y,initialView:this.$PhotoSnowliftViewableSphericalPhoto12,photoID:this.$PhotoSnowliftViewableSphericalPhoto7,partialLimits:this.$PhotoSnowliftViewableSphericalPhoto14,photoSphereMetadata:this.$PhotoSnowliftViewableSphericalPhoto16,surface:r.snowlift,tiledSphericalConfig:this.$PhotoSnowliftViewableSphericalPhoto20,middlewares:c,useLargeVolumeIcon:!0,width:a.x}),this.$PhotoSnowliftViewableSphericalPhoto5);this.$PhotoSnowliftViewableSphericalPhoto10=!0;this.emit("ready")};d.$PhotoSnowliftViewableSphericalPhoto34=function(){this.$PhotoSnowliftViewableSphericalPhoto19.release(),this.$PhotoSnowliftViewableSphericalPhoto18.release(),b("ReactDOM").unmountComponentAtNode(this.$PhotoSnowliftViewableSphericalPhoto4),b("ReactDOM").unmountComponentAtNode(this.$PhotoSnowliftViewableSphericalPhoto5)};d.suspend=function(){this.$PhotoSnowliftViewableSphericalPhoto34()};d.resume=function(){this.$PhotoSnowliftViewableSphericalPhoto23()};d.reload=function(){this.$PhotoSnowliftViewableSphericalPhoto23()};d.hide=function(){b("CSS").shown(this.getElement())&&w(this.$PhotoSnowliftViewableSphericalPhoto24()),a.prototype.hide.call(this),this.$PhotoSnowliftViewableSphericalPhoto34()};d.getDimensions=function(){var a=b("getViewportDimensions")(),c=a.width;a=a.height;b("SphericalPhotoTypedConfig").should_snowlift_fit_to_screen?(this.$PhotoSnowliftViewableSphericalPhoto8||(c-=y),this.isRenderReady()||(c=a=Math.min(c,a))):c=a=Math.min(c,a);return b("Vector").from(c,a)};d.$PhotoSnowliftViewableSphericalPhoto27=function(){var a=b("Vector").getElementDimensions(this.getElement());return a.x===0||a.y===0?this.$PhotoSnowliftViewableSphericalPhoto3||a:a};d.$PhotoSnowliftViewableSphericalPhoto35=function(a){var c=this.getElement().parentElement;a=new(b("Vector"))(a.x,a.y);if(c&&c instanceof HTMLElement){c=b("Vector").getElementDimensions(c);var d=b("Vector").getElementDimensions(this.getElement());(c.x!==d.x||a.x<c.x||a.y<c.y)&&(a.x=c.x,a.y=c.y)}return a};d.isReady=function(){return this.$PhotoSnowliftViewableSphericalPhoto10};d.isRenderReady=function(){return this.$PhotoSnowliftViewableSphericalPhoto11};d.setDimensions=function(c){a.prototype.setDimensions.call(this,this.$PhotoSnowliftViewableSphericalPhoto35(c));if(this.$PhotoSnowliftViewableSphericalPhoto20.useTiledRenderer&&b("SphericalPhotoTypedConfig").show_new_renderer){c=this.$PhotoSnowliftViewableSphericalPhoto27();!this.$PhotoSnowliftViewableSphericalPhoto11&&(!this.$PhotoSnowliftViewableSphericalPhoto3||this.$PhotoSnowliftViewableSphericalPhoto3.x!==c.x||this.$PhotoSnowliftViewableSphericalPhoto3.y!==c.y)&&this.$PhotoSnowliftViewableSphericalPhoto25(c);this.$PhotoSnowliftViewableSphericalPhoto3=c}this.emit("onSetDimensions")};d.onToggleIntoFullScreen=function(){};d.onEnterFullScreen=function(){if(this.$PhotoSnowliftViewableSphericalPhoto8)return;this.$PhotoSnowliftViewableSphericalPhoto8=!0;this.emit("onEnterFullScreen");t(this.$PhotoSnowliftViewableSphericalPhoto24());b("CSS").addClass(this.getElement(),"_tz-")};d.onExitFullScreen=function(){if(!this.$PhotoSnowliftViewableSphericalPhoto8)return;this.$PhotoSnowliftViewableSphericalPhoto8=!1;this.emit("onExitFullScreen");v(this.$PhotoSnowliftViewableSphericalPhoto24());b("CSS").removeClass(this.getElement(),"_tz-")};d.$PhotoSnowliftViewableSphericalPhoto26=function(){return this.$PhotoSnowliftViewableSphericalPhoto9?this.$PhotoSnowliftViewableSphericalPhoto21:this.$PhotoSnowliftViewableSphericalPhoto17||this.$PhotoSnowliftViewableSphericalPhoto21};return c}(b("PhotoSnowliftViewable"));e.exports=d}),null);
__d("PhotoSnowliftViewableUtils",["cx","DOM","EventProfiler","PhotoSnowliftViewableImageWrapper","PhotoSnowliftViewablePhoto","PhotoSnowliftViewableSphericalPhoto","React","ReactDOM","SphericalMediaGyroOverlay.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h=65,i=0,j=0;function a(a,c){return new(b("PhotoSnowliftViewableSphericalPhoto"))(a.url,a.smallurl,a.cubeImageURI,a.tiledSphericalConfig,a.initialView.fov||h,a.initialView.pitch||i,a.initialView.yaw||j,c.shouldShowHiRes(a),a.dimensions,a.partialLimits,String(a.fbid),c,a.photoSphereMetadata,a.fallback,a.ambientAudio)}function c(a,c){if(a.spherical)return new(b("PhotoSnowliftViewableSphericalPhoto"))(a.url,a.smallurl,a.spherical.cubestripuri,a.spherical.tiledsphericalconfig,a.spherical.initialviewverticalfov||h,a.spherical.initialpitch||i,a.spherical.initialheading||j,c.shouldShowHiRes(a),a.dimensions,a.spherical.partialLimits,String(a.info.fbid),c,a.spherical.photosphereMetadata,a.spherical.fallback,a.spherical.ambientAudio);else return new(b("PhotoSnowliftViewablePhoto"))(a.url,a.smallurl,c.shouldShowHiRes(a),a.dimensions,String(a.info.fbid),!!a.info.disablecontextmenu,!!a.info.logcontextmenu,a.info.caption,a.info.shouldshowshield)}function k(){var a=b("DOM").create("div",{className:"_4yca _5nxw"});b("ReactDOM").render(b("React").jsx(b("SphericalMediaGyroOverlay.react"),{isActive:!0}),a);return a}function d(a,c){var d=a.parentElement;a=new(b("PhotoSnowliftViewableImageWrapper"))(a);d&&d.appendChild(a.getElement());c&&(b("EventProfiler").tagCurrentActiveInteractionsAs("PSVSphericalImage"),a.getElement().appendChild(k()));return a}e.exports={fromSphericalPhotoData:a,fromStreamData:c,fromImageElement:d}}),null);
__d("ObjectionableContentFilterMixin",["csx","cx","CSS","DOM","emptyFunction"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("emptyFunction");c={getObjectionableWarningContainer:a,getObjectionableWarningHiddenContent:a,_objectionableWarningMarkup:null,_objectionableWarningOverlay:null,_objectionableWarningHiddenContentWrapper:null,_objectionableWarningHiddenContent:null,showObjectionableWarning:function(a){var c="._f_2",d="._f_g";this._objectionableWarningMarkup&&this.hideObjectionableWarning();this._objectionableWarningOverlay=b("DOM").scry(a,c).pop();this._objectionableWarningHiddenContentWrapper=b("DOM").scry(a,d).pop();this._objectionableWarningOverlay&&b("CSS").show(this._objectionableWarningOverlay);this._objectionableWarningHiddenContentWrapper&&(this.getObjectionableWarningContainer().replaceChild(a,this.getObjectionableWarningHiddenContent()),this._objectionableWarningHiddenContentWrapper.appendChild(this.getObjectionableWarningHiddenContent()),b("CSS").addClass(a,"_dbl"));this._objectionableWarningMarkup=a;this._objectionableWarningHiddenContent=this.getObjectionableWarningHiddenContent()},hideObjectionableWarning:function(){if(!this.getObjectionableWarningContainer().contains(this._objectionableWarningMarkup))return;this.getObjectionableWarningContainer().replaceChild(this._objectionableWarningHiddenContent,this._objectionableWarningMarkup)}};e.exports=c}),null);
__d("PhotoTagSearchPivotLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();var g={};b("Banzai").subscribe(b("Banzai").SHUTDOWN,function(){Object.keys(g).forEach(function(a){var c=g[a];Object.keys(c).forEach(function(d){b("Banzai").post("photo_tag_search_pivot",{source:a,action:d,count:c[d]})})})});var h=/^(perm:)?tag:/,i;a={logImpression:function(a,b){a=a in g?g[a]:g[a]={};a[b]=b in a?a[b]+1:1},logImageImpression:function(a,b,c){i!==b&&(c.some(function(a){return h.test(a)})&&this.logImpression(a,"image_impression"),i=b)},logPivotImpression:function(a,b){h.test(b)&&this.logImpression(a,"pivot_impression")},logShowMorePhotos:function(){this.logImpression("photoset","show_more_photos")},logHideMorePhotos:function(){this.logImpression("photoset","hide_more_photos")},logSuggestMorePhotos:function(){this.logImpression("photoset","suggest_more_photos")},logMorePhotosNavigation:function(a){b("Banzai").post("photo_tag_search_pivot",{source:"photoset",action:"more_photos_search",query:a,count:1})}};e.exports=a}),null);
__d("UFI2DOMAttachmentEventEmitter",["EventEmitter"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("EventEmitter"))}),null);
__d("XPhotosetSearchPivotController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/search-pivot/photoset/",{fbid:{type:"Int",required:!0},tags:{type:"IntToIntMap"}})}),null);
__d("PhotosetSearchPivot.react",["cx","fbt","LeftRight.react","PhotosetSearchPivotData","PhotoTagSearchPivotLogger","React","XUISpinner.react","XUIText.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(a=d=c.call.apply(c,[this].concat(f))||this,d.onClick=function(){b("PhotoTagSearchPivotLogger").logMorePhotosNavigation(d.props.normalized)},a)||babelHelpers.assertThisInitialized(d)}var d=a.prototype;d.render=function(){var a;return(a=b("React")).jsx("div",{className:"_25r",children:a.jsxs("a",{onClick:this.onClick,href:this.props.uri,className:"_25t _3-8t",children:[a.jsxs("div",{className:"_25u",children:[a.jsx("div",{className:"_25v _25w",style:{backgroundImage:"url("+this.props.images[0].uri+")"}}),a.jsxs("div",{className:"_25x",children:[a.jsxs("div",{className:"_25y",children:[a.jsx("div",{className:"_25z"}),a.jsx("div",{className:"_26r",children:a.jsx("div",{className:"_273 _25w",style:{backgroundImage:"url("+this.props.images[1].uri+")"}})})]}),a.jsxs("div",{className:"_274",children:[a.jsx("div",{className:"_25z"}),a.jsx("div",{className:"_26r",children:a.jsx("div",{className:"_273 _25w",style:{backgroundImage:"url("+this.props.images[2].uri+")"}})})]})]})]}),a.jsx(b("XUIText.react"),{display:"block",className:"_27f _2pi4",dangerouslySetInnerHTML:{__html:this.props.title.__html}})]})})};return a}(b("React").Component);i.propTypes={normalized:(a=b("prop-types")).string,title:a.object,uri:a.string,images:a.array};c=b("React").createClass({displayName:"PhotosetSearchPivot",propTypes:{fbid:a.string,endofalbum:a.bool,withBackground:a.bool,linesAroundHeader:a.bool,onclose:a.func},fetchPivots:function(a){var c=this;b("PhotosetSearchPivotData").fetch(a).then(function(b){setTimeout(c.onFetchSuccess.bind(c,a,b.pivots),0)},function(b){setTimeout(c.onFetchError.bind(c,a),0)})},onFetchSuccess:function(a,b){if(!this.isMounted()||this.props.fbid!==a)return;b=b||[];a="show";b.length===0&&(a="hide");this.setState({pivots:b,action:a})},onFetchError:function(a){if(!this.isMounted()||this.props.fbid!==a)return;this.setState({pivots:[],action:"hide"})},getInitialState:function(){this.fetchPivots(this.props.fbid);return{pivots:[],action:"loading"}},UNSAFE_componentWillReceiveProps:function(a){a.fbid?(this.setState({action:"loading"}),this.fetchPivots(a.fbid)):this.setState({action:"hide",pivots:[]})},onExitClicked:function(){this.props.onclose()},render:function(){if(this.state.action==="loading")return b("React").jsx("div",{className:b("joinClasses")(this.props.className,"_27h _2ph_"),children:b("React").jsx(b("XUISpinner.react"),{size:"large"})});if(this.state.action==="hide")return b("React").jsx("span",{});var a=this.state.pivots.map(function(a){return b("React").jsx(i,{normalized:a.normalized,title:a.title,uri:a.uri,images:a.images})}),c=this.props.endofalbum?b("React").jsx("span",{className:"_2pij",children:h._("Fin del \u00e1lbum")}):null,d="_27m _2pi3 _2pib"+(this.props.linesAroundHeader?" _3-te":"");c=b("React").jsxs("span",{children:[c,b("React").jsx("span",{className:"_4ptz",children:h._("Otras fotos que te pueden gustar")})]});this.props.onclose?c=b("React").jsxs(b("LeftRight.react"),{className:d,children:[c,b("React").jsx("a",{href:"#",onClick:this.onExitClicked,className:"_27n"})]}):c=b("React").jsx("div",{className:d,children:c});return b("React").jsx("div",{className:b("joinClasses")(this.props.className,(this.state.action==="hide"?"_27j":"")+(this.state.action==="show"?" _27k":"")),children:b("React").jsxs("div",{className:"_27l"+(this.props.withBackground?" _3-tf":""),children:[c,b("React").jsx("div",{className:"_27o _2pi8 clearfix",children:a})]})})}});e.exports=c}),null);
__d("SnowliftVideoPivotsCarouselController",[],(function(a,b,c,d,e,f){a={setPivotsCarousel:function(a,b){this._pivotsCarousel=a,this.adjustCarousel(b)},adjustCarousel:function(a){this._pivotsCarousel&&this._pivotsCarousel.pageTo(a)},adjustCarouselOnAutoPlay:function(){this._pivotsCarousel&&this._pivotsCarousel.page()}};e.exports=a}),null);
__d("DisableContextMenuMixin",["Event","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("emptyFunction");c={getContextMenuContainer:a,_contextMenuEventHandler:null,disableContextMenu:function(){if(this._contextMenuEventHandler)return;this._contextMenuEventHandler=b("Event").listen(this.getContextMenuContainer(),"contextmenu",function(a){a.preventDefault(),a.stopPropagation()})},enableContextMenu:function(){this._contextMenuEventHandler&&(this._contextMenuEventHandler.remove(),this._contextMenuEventHandler=null)}};e.exports=c}),null);