if (self.CavalryLogger) { CavalryLogger.start_js(["VGf0T"]); }

__d("MaybeNativePromise",["Promise"],(function(a,b,c,d,e,f){"use strict";c=a.Promise||b("Promise");b("Promise").resolve();e.exports=c}),null);
__d("VideoAkamaiRequestHelper",["URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){return a.toLowerCase().indexOf("akamai")!==-1}function h(a){var b=a.startByte;a=a.endByte;if(b!=void 0&&!(b===0&&a==void 0)){b="bytes="+b+"-"+(a==void 0?"":a);return{Range:b}}return null}function c(a){var c=new(g||(g=b("URI")))(a);c=c.getQueryData();var d=c.startByte;c=c.endByte;return h({baseUrl:a,startByte:d,endByte:c})}e.exports={isAkamai:a,getRequestHeaders:h,getRequestHeadersFromUrl:c}}),null);
__d("VideoPlayerShakaExperimentsConfig",["VideoPlayerShakaExperimentsPayload"],(function(a,b,c,d,e,f){"use strict";e.exports=b("VideoPlayerShakaExperimentsPayload").experiments}),null);
__d("VideoPlayerShakaExposureLogger",["QE2Logger","VideoPlayerShakaExperimentsPayload"],(function(a,b,c,d,e,f){var g=Object.keys(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig).reduce(function(a,c){a[c]={};a[c].exposureCondition=b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_condition;a[c].exposureParams=new Set(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_params);return a},{});a={logExposureForParamMaybe:function(a){Object.keys(g).forEach(function(c){g[c].exposureCondition==="any_param_accessed"&&g[c].exposureParams.has(a)?(b("QE2Logger").logExposureForUser(c),delete g[c]):g[c].exposureCondition==="all_params_accessed"&&(g[c].exposureParams["delete"](a),g[c].exposureParams.size===0&&(b("QE2Logger").logExposureForUser(c),delete g[c]))})}};e.exports=a}),null);
__d("VideoPlayerShakaParsedContextualConfig",["EventEmitter","FBLogger","VideoPlayerShakaContextualConfig"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$VideoPlayerShakaParsedContextualConfig1=null;b.$VideoPlayerShakaParsedContextualConfig2={};b.parseConfig();return b}var d=c.prototype;d.getGlobalConfig=function(){return this.$VideoPlayerShakaParsedContextualConfig2};d.getStaticConfig=function(){return b("VideoPlayerShakaContextualConfig").staticConfig};d.getRawContextualConfig=function(){return this.$VideoPlayerShakaParsedContextualConfig1};d.parseConfig=function(){this.$VideoPlayerShakaParsedContextualConfig3(),this.$VideoPlayerShakaParsedContextualConfig4(),this.emit("configChange")};d.$VideoPlayerShakaParsedContextualConfig3=function(){if(!b("VideoPlayerShakaContextualConfig").rawContextualConfig)return;try{this.$VideoPlayerShakaParsedContextualConfig1=JSON.parse(b("VideoPlayerShakaContextualConfig").rawContextualConfig)}catch(a){b("FBLogger")("VideoPlayerShakaParsedContextualConfig").warn("Failed to parse raw config")}};d.$VideoPlayerShakaParsedContextualConfig4=function(){var a=this;this.$VideoPlayerShakaParsedContextualConfig2=Object.assign({},b("VideoPlayerShakaContextualConfig").staticConfig);this.$VideoPlayerShakaParsedContextualConfig1&&this.$VideoPlayerShakaParsedContextualConfig1.defaults.forEach(function(b){return a.$VideoPlayerShakaParsedContextualConfig2[b.name]=b.value})};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("VideoPlayerShakaGlobalConfig",["VideoPlayerShakaExperimentsConfig","VideoPlayerShakaExposureLogger","VideoPlayerShakaParsedContextualConfig"],(function(a,b,c,d,e,f){__p&&__p();a={getBool:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?d[a]==="true"||d[a]===!0:typeof b("VideoPlayerShakaExperimentsConfig")[a]==="boolean"?b("VideoPlayerShakaExperimentsConfig")[a]:c},getNumber:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?Number(d[a]):typeof b("VideoPlayerShakaExperimentsConfig")[a]==="number"?b("VideoPlayerShakaExperimentsConfig")[a]:c},getString:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?String(d[a]):typeof b("VideoPlayerShakaExperimentsConfig")[a]==="string"?b("VideoPlayerShakaExperimentsConfig")[a]:c}};e.exports=a}),null);
__d("parseHeaders",[],(function(a,b,c,d,e,f){__p&&__p();var g=/\r?\n[\t]+/g,h=/\r?\n/;function a(a){__p&&__p();a=a.replace(g," ");var b={};a.split(h).forEach(function(a){a=a.split(":");var c=a.shift().trim();if(c){a=a.join(":").trim();b[c.toLowerCase()]=a}});return b}e.exports=a}),null);
__d("VideoPlayerShakaError",["VideoPlayerShakaGlobalConfig","parseHeaders"],(function(a,b,c,d,e,f){"use strict";a={translateError:function(a,c,d){var e=b("VideoPlayerShakaGlobalConfig").getBool("fix_shaka_xhr_error_status",!0)?a.errorRawTransportStatus:a.errorCode,f=null;b("VideoPlayerShakaGlobalConfig").getBool("enable_double_ingest",!1)&&a.errorRawResponseHeaders!=null&&(f=b("parseHeaders")(a.errorRawResponseHeaders));a={name:a.errorType,message:a.errorMsg,type:d,url:c,status:e,responseHeaders:f};return a},createTimeoutError:function(a){a={name:"timeout",message:"timeout",type:"net",url:a,status:0,responseHeaders:null};return a}};e.exports=a}),null);
__d("VideoDashPrefetchCache",["regeneratorRuntime","Promise","requireCond","BanzaiODS","Deferred","MaybeNativePromise","cr:1209197","cr:1209198","URI","VideoAkamaiRequestHelper","VideoPlayerPrefetchExperiments","VideoPlayerShakaError","VideoPlayerShakaGlobalConfig","XHRRequest","getCrossOriginTransport","recoverableViolation","requireWeak"],(function(a,b,c,d,e,f){__p&&__p();var g,h=function(a){b("cr:1209197")!=null?b("cr:1209197").onLeave(a):b("cr:1209198")!=null?b("cr:1209198").onUnload(a):b("recoverableViolation")("Dash prefetch cache onNavigatingAway handler was not properly set","video")},i=null;b("requireWeak")("VideoPlayerShakaBandwidthEstimator",function(a){return i=a});var j=null;b("requireWeak")("VideoStreamingTaskQueueProvider",function(a){return j=a});function k(a){return a.audio.length+a.video.length+a.manifest.length}function l(a,c){b("BanzaiODS").bumpEntityKey(2966,"www_video_playback","prefetch."+a,c)}function m(a){var b="aborted",c={status:0},d=new Error("Prefetch request aborted.");return Object.assign(d,{type:b,url:a,xhr:c})}function n(a){var c=a.getURI(),d=c.toString();if(b("VideoAkamaiRequestHelper").isAkamai(d)){var e=b("VideoAkamaiRequestHelper").getRequestHeadersFromUrl(d);d=c.removeQueryData(["bytestart","byteend"]);a.setURI(d);e&&Object.keys(e).forEach(function(b){a.setRequestHeader(b,e[b])})}return a}var o=null,p=new Map();function q(a){a=new(g||(g=b("URI")))(a);a=a.getDomain();return a.endsWith("fbcdn.net")&&!a.startsWith("interncache")&&!a.endsWith("ak.fbcdn.net")}function r(a,c){c===void 0&&(c=!1);return c&&q(a)?b("getCrossOriginTransport").withCredentials:b("getCrossOriginTransport")}function s(a){return q(a.url)}function t(a,b,c){return{response:a.slice(b.start+0,b.end+1),responseTime:c}}function u(a){__p&&__p();var c=new(g||(g=b("URI")))(a);if(c.getDomain()){c=c.removeQueryData(["oh"]);c=c.removeQueryData("__gda__");var d=Object.keys(c.getQueryData());for(var e=0;e<d.length;e++){var f=d[e];f.startsWith("_nc")&&(c=c.removeQueryData(f))}return c.toString()}return a}a=function(){"use strict";__p&&__p();function a(){this.$2=new Map(),this.$9=new Map(),this.$1=new Map(),this.$3=[],this.$4=[],this.$5=0,this.$6=b("VideoPlayerPrefetchExperiments").maxPrefetchVideosNum,this.$7=b("VideoPlayerPrefetchExperiments").consolidateFragmentedPrefetchRequest}var c=a.prototype;c.$10=function(a,c){__p&&__p();var d=this;c===void 0&&(c=!1);var e=a,f=new(b("XHRRequest"))(e).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(r(e,c));n(f);var g=new(b("MaybeNativePromise"))(function(c,h){f.setErrorHandler(function(a){d.$11(f),h(b("VideoPlayerShakaError").translateError(a,e,"preload"))}),f.setResponseHandler(function(a){f.response=a,d.$11(f),c(f)}),f.setAbortHandler(function(){if(b("VideoPlayerPrefetchExperiments").fixPrefetchCacheAbort){d.$11(f);var c=m(a);h(c)}else h(g,new Error("Request promise aborted"))})});this.$12(a,g);this.$3.push(f);this.$8?this.$8.push(f):f.send();return g};c.genPrefetchMpdNow=function(a){__p&&__p();return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:if(!this.has(a)){b.next=2;break}return b.abrupt("return",null);case 2:return b.abrupt("return",this.$10(a));case 3:case"end":return b.stop()}},null,this)};c.$13=function(b,c,d){__p&&__p();c===void 0&&(c=!1);d===void 0&&(d=null);var e=[];for(var f=0;f<b.length;f++){var g=a.createQueryStringURL(b[f]);this.has(g)||(e.push(this.$10(g,c).then(function(a){l("received",1);return a})),d!=null&&this.$2.set(g,d))}l("sent",e.length);return e};c.$14=function(c){__p&&__p();var d=this,e=a.getConsolidatedURL(c);if(e==null)return this.$13(c);var f=new(b("XHRRequest"))(e).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(r(e));n(f);var g=Date.now(),h=[];for(var i=0;i<c.length;i++){var j=a.createQueryStringURL(c[i]),k=new(b("Deferred"))();this.has(j)||this.$12(j,k.getPromise());h.push(k)}f.setErrorHandler(function(c){d.$11(f);for(var a=0;a<h.length;a++)h[a].reject(b("VideoPlayerShakaError").translateError(c,e,"preload"))});f.setResponseHandler(function(b){var e=Date.now()-g;for(var a=0;a<c.length;a++){var i=h[a],j=c[a];i.resolve(t(b,j,e))}d.$11(f)});f.setAbortHandler(function(){for(var a=0;a<c.length;a++){var b=h[a];b.reject(new Error("Request aborted."))}});this.$3.push(f);f.send();l("consolidated.sent",1);l("sent",h.length);j=h.map(function(a){return a.getPromise().then(function(a){l("received",1);return a})});b("Promise").all(j).then(function(){return l("consolidated.received",1)});return j};c.$15=function(a){__p&&__p();var c=this,d=a.useCredentials,e=a.connectionQualityLevel;this.$5++;var f=this.$7&&!d;b("VideoPlayerPrefetchExperiments").enableGlobalSchedulerForPrefetch&&(this.$8=[]);var g=f?this.$14(a.video):this.$13(a.video,d,e);f=f?this.$14(a.audio):this.$13(a.audio,d,e);e=this.$13(a.manifest,d);var h=g.concat(f,e);if(this.$8){var i=this.$8||[];this.$8=null;var k=""+a.videoID;d={name:"prefetch task, "+k,run:function(){k&&p["delete"](k);i.forEach(function(a){return a.send()});return b("MaybeNativePromise").all(h).then(function(){})["catch"](function(){})},cancel:function(){}};j?(b("VideoPlayerPrefetchExperiments").switchPrefetchTaskToHighPriWhenPlayed&&k&&p.set(k,d),j.getQueue("video").enqueue(d,b("VideoPlayerPrefetchExperiments").prefetchPriority),this.$16()):(d.run(),b("MaybeNativePromise").all(h).then(function(){return c.$16()})["catch"](function(){return c.$16()}))}else b("MaybeNativePromise").all(h).then(function(){return c.$16()})["catch"](function(){return c.$16()})};c.$12=function(a,b){__p&&__p();var c=this;a=u(a);this.$1.values().next().done&&h(function(){for(var a=0;a<c.$3.length;a++)c.$3[a].abort();c.$3=[];c.$4=[];c.$5=0;c.$1.clear()});this.$1.set(a,b)};c.$11=function(a){a=this.$3.indexOf(a);a>-1&&this.$3.splice(a,1)};c.$16=function(){this.$5--;var a=this.$4.shift();a&&this.$15(a)};c.has=function(a){a=u(a);return this.$1.has(a)};c.getConnectionQualityLevel=function(a){return this.$2.get(a)};c.getAndDelete=function(a){a=u(a);var b=this.$1.get(a);b?l("cache.hit",1):l("cache.miss",1);this.$1["delete"](a);l("retrieve",1);return b};c.queueRequestBatch=function(a){this.$6===0||this.$5<this.$6?this.$15(a):(l("queued",k(a)),this.$4.push(a))};c.setCachedRepresentations=function(a,b){this.$9.set(a,b)};c.getCachedRepresentations=function(a){return this.$9.get(a)};a.getCachedRepresentations=function(b){return a.getInstance().getCachedRepresentations(b)};a.getInstance=function(){o===null&&(o=new a());return o};a.createQueryStringURL=function(a){var c=a.url,d=a.start;a=a.end;d!==null&&d!==void 0&&a!==null&&a!==void 0&&(c=new(g||(g=b("URI")))(c).addQueryData({bytestart:d,byteend:a}));return c.toString()};a.getConsolidatedURL=function(b){__p&&__p();var c="",d=Infinity,e=0;for(var f=0;f<b.length;f++){var g=b[f],h=g.url,i=g.start;g=g.end;if(h==null||i==null||g==null)return null;if(c==="")c=h;else if(c!==h)return null;d=Math.min(d,i);e=Math.max(e,g)}return a.createQueryStringURL({url:c,start:d,end:e})};a.getPrefetchInfoFromRepresentation=function(a){return a.segments.map(function(b){return{url:a.url,start:b.start,end:b.end}})};a.getVideoRepresentationFromRepresentations=function(a,c){__p&&__p();var d=a.find(function(a){return a.representation_id.endsWith("d")});!c&&i&&(c=i.getBandwidth());if(!c)return d;var e=b("VideoPlayerShakaGlobalConfig").getNumber("client_prefetch_bandwidth_aggressiveness",1);for(var f=0;f<a.length;f++){var g=a[f],h=d&&d.bandwidth||0;if(h>g.bandwidth)continue;else c>g.bandwidth/e&&(d=g)}return d};a.loadVideoGivenAllRepresentations=function(b,c,d){__p&&__p();if(a.isAutoplayBandwidthRestrained())return;var e=[],f=[];c.audio.length>0&&(e=a.getPrefetchInfoFromRepresentation(c.audio[0]),e.length>0&&f.push(c.audio[0].representation_id));var g=[];c=a.getVideoRepresentationFromRepresentations(c.video,d);c&&(g=a.getPrefetchInfoFromRepresentation(c),g.length>0&&f.push(c.representation_id));d=a.getInstance();d.queueRequestBatch({audio:e,video:g,manifest:[],videoID:b,useCredentials:!1});d.setCachedRepresentations(b,f)};a.isAutoplayBandwidthRestrained=function(){return!!i&&i.isAutoplayBandwidthRestrained()};a.loadVideo=function(c,d,e){d=!!d;if(a.isAutoplayBandwidthRestrained())return;if(b("VideoPlayerPrefetchExperiments").disablePrefetchCache)return;var f=a.getInstance();c.manifest||(c.manifest=[]);f.queueRequestBatch({manifest:c.manifest.filter(s),video:c.video.filter(s),audio:c.audio.filter(s),videoID:c.videoID,useCredentials:d,connectionQualityLevel:e})};a.getCacheValue=function(b){return a.getInstance().getAndDelete(b)};a.getConnectionQualityLevel=function(b){return a.getInstance().getConnectionQualityLevel(b)};a.hasCacheValue=function(b){return a.getInstance().has(b)};a.getPrefetchTaskByID=function(a){a=p.get(a)||null;return a};return a}();e.exports=a}),null);