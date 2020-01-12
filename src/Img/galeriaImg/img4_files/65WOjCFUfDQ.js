if (self.CavalryLogger) { CavalryLogger.start_js(["+CVWs"]); }

__d("AdsBlueTour.react",["cx","fbt","LeftRight.react","React","XUIButton.react","emptyFunction","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=-1;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){return d.props.step===0},d.$2=function(){return d.props.step===i},d.$3=function(){return d.props.step===d.props.steps.length-1},d.$4=function(){d.props.onStart(),d.props.onStep(0)},d.$5=function(){var a=[];if(!d.$2())for(var c=0;c<d.props.steps.length;++c)a.push(b("React").jsx("span",{className:"_4a-k"+(c===d.props.step?" _4a-l":""),children:"\u25cf"},"bullet"+c));return a},d.$6=function(){__p&&__p();var a=[];if(d.$2())a.push(b("React").jsx(b("XUIButton.react"),{className:"_4a-j",label:h._("Hacer el recorrido"),size:"large",onClick:d.$4},"take-tour"));else{var c=!1,e=function(){return d.props.onStep(d.props.step-1)};d.$1()&&(c=!0,e=null);c||a.push(b("React").jsx(b("XUIButton.react"),{className:"_4a-j",label:h._("Atr\u00e1s"),size:"large",onClick:e},"back"));c=function(){return d.props.onStep(d.props.step+1)};e=h._("Siguiente");d.$3()&&(e=h._("Listo"),c=d.props.onComplete);a.push(b("React").jsx(b("XUIButton.react"),{className:"_4a-j",label:e,size:"large",onClick:c},"next"))}return a},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a;return(a=b("React")).jsxs("div",{className:"_135w",children:[a.jsx("div",{className:"_4a-p",children:this.props.children}),a.jsxs(b("LeftRight.react"),{className:"_4a-m",children:[a.jsx("div",{children:this.$6()}),a.jsx("div",{className:"_4a-n",children:this.$5()})]})]})};return c}(b("React").PureComponent);a.INTRO_STEP=i;a.defaultProps={onCompletet:b("emptyFunction"),onStart:b("emptyFunction")};e.exports=a}),null);
__d("AdsBlueTipTour.react",["AdsBlueTip.react","AdsBlueTour.react","React","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={step:d.props.introStep?b("AdsBlueTour.react").INTRO_STEP:0,shown:!0},d.$4=function(){d.$3(),d.props.onXOut()},d.$5=function(){d.$3(),d.props.onComplete()},d.$6=function(a){d.setState({step:a}),d.props.onStep&&d.props.onStep(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){return this.$2()?this.props.introStep:this.props.steps[this.state.step]};d.$3=function(){this.setState({shown:!1})};d.$2=function(){return this.state.step===b("AdsBlueTour.react").INTRO_STEP};d.render=function(){var a=this.$1();return b("React").jsx(b("AdsBlueTip.react"),babelHelpers["extends"]({behaviors:this.props.behaviors},a,{highlightContext:this.props.highlightContext,shown:this.state.shown,onClose:this.$4,children:b("React").jsx(b("AdsBlueTour.react"),babelHelpers["extends"]({},this.props,{step:this.state.step,onComplete:this.$5,onStep:this.$6,children:a.content}))}))};return c}(b("React").PureComponent);a.propTypes={behaviors:(c=b("prop-types")).object,highlightContext:c.bool,introStep:c.object,steps:c.arrayOf(c.object).isRequired,onComplete:c.func.isRequired,onStart:c.func,onStep:c.func,onXOut:c.func.isRequired};e.exports=a}),null);
__d("FacepileRoundedProfile.react",["cx","fbt","CurrentUser","HovercardLink","Image.react","Link.react","React","Tooltip.react","URI","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a,c=this.props,d=c.borderColor,e=c.borderWidth,f=c.getCustomActivationLink,g=c.getCustomHovercardLink,i=c.hoverBehavior,j=c.imageSize,k=c.isClickable;c=c.profile;var l=this.props.style,m=c.glyph_size,n=c.image_src,o=c.entity_id;l=babelHelpers["extends"]({},l,{borderColor:d,borderWidth:e,height:j+"px",width:j+"px"});d={};m&&m<j&&(d.margin=(j-m)/2+"px");e="_4mnq";c.className&&(e=b("joinClasses")(e,c.className));a=b("CurrentUser").isWorkUser()&&((a=c.work_foreign_entity_info)==null?void 0:a.type)==="FOREIGN"?b("React").jsx("div",{className:"_7cf0"}):null;e=b("React").jsxs(b("React").Fragment,{children:[b("React").jsx("div",{className:e,style:l,children:b("React").jsx(b("Image.react"),{className:"_1h_6",height:m||j,src:n,style:d,width:m||j})}),a]});i==="name"&&c.name&&(e=b("React").jsx(b("Tooltip.react"),{className:"_4mns",tooltip:c.name,children:e}));l=i==="hovercard";if(o&&(k||l)){n={};l&&(n["data-hovercard"]=g(o));k&&(n.href=f(o));e=b("React").jsx(b("Link.react"),babelHelpers["extends"]({"aria-label":h._("Perfil de {name}",[h._param("name",c.name)])},n,{children:e}))}return e};return c}(b("React").Component);a.defaultProps={getCustomActivationLink:function(a){return new(i||(i=b("URI")))("/"+a)},getCustomHovercardLink:function(a){return b("HovercardLink").constructEndpoint({id:a})},hoverBehavior:"none",imageSize:32,isClickable:!1};e.exports=a}),null);
__d("FacepileRoundedCount.react",["cx","fbt","ix","FacepileRoundedProfile.react","Image.react","Link.react","React","Tooltip.react","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=.3438;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.backgroundColor,d=a.borderColor,e=a.borderWidth,f=a.color,g=a.count,k=a.fontSize,l=a.profiles,m=a.size,n=a.style,o=a.use,p=a.shouldHideCountToolTip,q=a.image;a=a.href;var r=l.length;g=g||r;e={backgroundColor:c,borderColor:d,borderWidth:e,color:f,borderRadius:m,fontSize:(c=k)!=null?c:m*j+"px",height:m,minWidth:m};f=b("React").jsx("span",{className:"_4mnq _34n6",style:e,children:b("React").jsx("span",{className:"_40vg",children:"+"+g})});if(o==="image"){k=null;switch(m){case 16:k=i("409177");break;case 20:k=i("409178");break;case 28:k=i("409179");break;case 32:k=i("409180");break;case 48:k=i("409181");break}k&&(f=b("React").jsx("div",{className:"_4mnq",style:e,children:b("React").jsx(b("Image.react"),{className:"_1h_6",src:q?q:k})}))}else if(o==="face"&&r>0){c={left:"50%",marginLeft:"-"+m/2+"px"};f=b("React").jsxs("div",{className:"_ric",style:{borderColor:d},children:[b("React").jsx(b("FacepileRoundedProfile.react"),{borderColor:d,imageSize:m,profile:l[0],style:c}),f]})}e=g-r;q=l.map(function(a){return a.name}).filter(Boolean);k=r>0?q.join("\n")+"\n":"";if(e>0){o=h._({"*":"y {count} personas m\u00e1s.","_1":"y {count} m\u00e1s."},[h._param("count",e),h._plural(e)]);k+=o.toString()}d=b("React").jsx("div",{style:{whiteSpace:"pre-wrap"},children:k});a!=null&&(f=b("React").jsxs(b("Link.react"),{href:a,children:[b("React").jsx("span",{className:"accessible_elem",children:k}),f]}));return b("React").jsx(b("Tooltip.react"),{className:"_4mns",style:n,tooltip:p?null:d,children:f})};return c}(b("React").Component);a.defaultProps={size:32,use:"count",image:null};a.propTypes={backgroundColor:(c=b("prop-types")).string,borderColor:c.string,borderWidth:c.number,color:c.string,className:c.string,count:c.number,fontSize:c.number,use:c.oneOf(["count","face","image"]),image:c.any,profiles:c.arrayOf(c.shape({className:c.string,entity_id:c.string,glyph_size:c.number,image_src:c.any.isRequired,name:c.string})).isRequired,size:c.number,style:c.object,shouldHideCountToolTip:c.bool};e.exports=a}),null);
__d("FacepileRounded.react",["cx","FacepileRoundedCount.react","FacepileRoundedProfile.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=.3125;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.borderColor,d=a.borderWidth,e=a.direction,f=a.getCustomActivationLink,g=a.getCustomHovercardLink,i=a.hoverBehavior,j=a.imageSize,k=a.isClickable,l=a.message,m=a.numProfilesToDisplay,n=a.overflowBackgroundColor,o=a.overflowFontSize,p=a.overflowTextColor,q=a.profiles,r=a.remainingProfilesCount,s=a.remainingProfilesCountStyle,t=a.remainingProfilesCountImage,u=a.remainingProfilesCountHref,v=a.spacing;a=a.shouldHideCountToolTip;var w=e==="descending";e=q.length;var x=null,y=this.props.className;y=b("joinClasses")("_4mnv"+(w?" _4wh8":""),y);l&&(x=b("React").jsx("div",{className:"_4mnt",children:l}));l=q;var z=null;m&&m<e&&(l=q.slice(0,m),z=q.slice(m,e));var A={getCustomActivationLink:f,getCustomHovercardLink:g,hoverBehavior:i,imageSize:j,isClickable:k},B=(v!=null?v:-(j*h))+"px";m=l.map(function(a,e){var f={zIndex:w?q.length-e:e};e>0&&(f.marginLeft=B);return b("React").jsx(b("FacepileRoundedProfile.react"),babelHelpers["extends"]({borderColor:c,profile:a,style:f,borderWidth:d},A),e)});f=null;z&&(f=b("React").jsx(b("FacepileRoundedCount.react"),{backgroundColor:n,borderColor:c,color:p,fontSize:o,count:r,profiles:z,size:j,shouldHideCountToolTip:a,style:{marginLeft:B,zIndex:w?0:e},use:s,image:t,href:u,borderWidth:d}));return b("React").jsxs("div",{className:y,children:[b("React").jsxs("div",{className:"_4mnw",children:[m,f]}),x]})};return c}(b("React").Component);a.defaultProps={direction:"ascending",hoverBehavior:"none",imageSize:32,isClickable:!1,isOverlapDisabled:!1,remainingProfilesCountStyle:"count"};e.exports=a}),null);
__d("TextWithEntitiesTruncated.react",["fbt","Link.react","React","TextWithEntities.react","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useState,i=.6;function j(a,b,c){return a.map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-b})}).filter(function(a){return a.offset>=0&&a.offset<c})}function k(a,b,c,d){var e=null,f=a.split("\n");a.length>b&&(e=Math.floor(b*(d===!0?1:i)));if(f.length>c){a=f.slice(0,c).join("\n").length;e!==null?e=Math.min(a,e):e=a}return e}function l(a){var b=[];a.forEach(function(a){a!=null&&a.offset!=null&&a.length!=null&&a.entity!=null&&b.push({entity:babelHelpers["extends"]({},a.entity),length:a.length,offset:a.offset})});return b}function a(a){__p&&__p();var c=a.text,d=a.ranges;d=d===void 0?[]:d;var e=a.truncationStyle;e=e===void 0?"none":e;var f=a.maxLength;f=f===void 0?800:f;var i=a.maxLines;i=i===void 0?8:i;var m=a.useExactMaxLength;a=babelHelpers.objectWithoutPropertiesLoose(a,["text","ranges","truncationStyle","maxLength","maxLines","useExactMaxLength"]);var n=h(!1),o=n[0],p=n[1];if(c==null)return null;n=c;d=l(d);var q=null,r=function(){p(!0)},s=function(){p(!1)};if(e!=="none"&&!o){f=k(c,f,i,m);if(f!=null){n=c.substring(0,f);d=j(d,0,n.length);switch(e){case"ellipsis-only":q=b("React").jsx(b("React").Fragment,{children:g._("\u2026")},"see-more-less");break;case"see-more":case"see-more-and-less":q=b("React").jsxs(b("React").Fragment,{children:[g._("\u2026")," ",b("React").jsx(b("Link.react"),{onClick:r,children:g._("Ver m\u00e1s")})]},"see-more-less")}}}else e==="see-more-and-less"&&o&&(q=b("React").jsxs(b("React").Fragment,{children:[" ",b("React").jsx(b("Link.react"),{onClick:s,children:g._("Ver menos")})]},"see-more-less"));return b("React").jsxs(b("React").Fragment,{children:[b("React").jsx(b("TextWithEntities.react"),babelHelpers["extends"]({},a,{ranges:d,text:n})),q]})}a.propTypes={text:(c=b("prop-types")).string,ranges:c.arrayOf(c.shape({offset:c.number,length:c.number,entity:c.object})).isRequired,truncationStyle:c.oneOf(["none","ellipsis-only","see-more","see-more-and-less"]),maxLength:c.number,maxLines:c.number,useExactMaxLength:c.bool};e.exports=a}),null);
__d("InputLabel_DEPRECATED.react",["cx","invariant","React","joinClasses","prop-types","uniqueID"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){this.props.children.length===2||h(0,5084);var a=this.props.children[0],c=this.props.children[1],d=a.type==="input";a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"uiInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||b("uniqueID")()});c=b("React").cloneElement(c,{className:b("joinClasses")(c.props.className,"uiInputLabelLabel"),htmlFor:a.props.id});d="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").jsxs("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d),children:[a,c]}))};return c}(b("React").Component);a.propTypes={display:b("prop-types").oneOf(["block","inline"])};a.defaultProps={display:"block"};e.exports=a}),null);
__d("XUICarouselArrow.react",["cx","Link.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("joinClasses")(this.props.className,(this.props.disabled?"accessible_elem":"")+" _-op"+(this.props.disabled?" _-oq":"")+(this.props.wasLastClicked?" _6280":"")),c={role:"button","aria-disabled":this.props.disabled?"true":"false","aria-label":this.props.label||null};return b("React").jsx(b("Link.react"),babelHelpers["extends"]({className:a,onBlur:this.props.onBlur,onClick:this.props.onClick,onFocus:this.props.onFocus},c,{children:this.props.children}))};return c}(b("React").Component);a.propTypes={children:(c=b("prop-types")).oneOfType([c.array,c.element]),className:c.string,label:c.string,onBlur:c.func,onClick:c.func,onFocus:c.func,disabled:c.bool,wasLastClicked:c.bool};e.exports=a}),null);
__d("PagesButton.react",["cx","AbstractButton.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();var h="accentblue",i="medium";a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getButtonSize=function(a){return a.size||i};c.getButtonColor=function(a){return a.color||h};var d=c.prototype;d.render=function(){var a=c.getButtonColor(this.props),d=c.getButtonSize(this.props),e=this.props.disabled,f=this.props.fill;d=b("joinClasses")("_2-sm _1olk"+(d==="small"?" _xa8":"")+(d==="medium"?" _xa9":"")+(d==="large"?" _xaf":"")+(!e&&a==="accentblue"?" _xag":"")+(!e&&a==="fbblue"?" _xah":"")+(!e&&a==="gray"?" _42q9":"")+(!e&&a==="green"?" _xai":"")+(e?" _xaj":"")+(f?" _xak":"")+(f?"":" _xal")+(this.props.slim?" _4t_j":""));return b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d),label:this.props.label}))};return c}(b("React").Component);a.propTypes={color:(c=b("prop-types")).oneOf(["accentblue","fbblue","green"]),size:c.oneOf(["small","medium","large"]),disabled:c.bool,fill:c.bool,slim:c.bool};a.defaultProps={color:h,size:i,disabled:!1,fill:!1,slim:!1};e.exports=a}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",MESSAGE:"message",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("WorkChatDoNotDisturbStatusImpl.react",["ix","Image.react","MercuryIDs","React","asset"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.thread;if(!c)return null;c=b("MercuryIDs").getUserIDFromThreadID(c.thread_id);return c==null?null:a.isDoNotDisturb?b("React").jsx(b("Image.react"),{className:a.className,src:g("550343"),"data-tooltip-content":a.description,"data-hover":"tooltip"}):null}e.exports=a}),null);
__d("PageContentTabSuccessDialog.react",["cx","ix","Image.react","React","XUIDialog.react","XUIDialogBody.react","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a;return(a=b("React")).jsx(b("XUIDialog.react"),{width:344,shown:!0,layerHideOnBlur:!1,layerFadeOnShow:!0,children:a.jsxs(b("XUIDialogBody.react"),{className:"_--l",children:[a.jsx(b("Image.react"),{src:h("101769"),className:"_--n"}),a.jsx("div",{className:"_--o",children:this.props.successLabel})]})})};return c}(b("React").Component);a.propTypes={successLabel:b("prop-types").node};e.exports=a}),null);
__d("ShowWaitTimeAreasMode",["URI"],(function(a,b,c,d,e,f){"use strict";var g,h=!!new(g||b("URI"))(window.location.href).getQueryData().showwaitareas;a={disable:function(){h=!1},enable:function(){h=!0},isEnabled:function(){return h}};e.exports=a}),null);
__d("WaitTimeArea.react",["cx","PerfHelperUtils","React","ShowWaitTimeAreasMode","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("PerfHelperUtils").BorderedComponent;function i(a){var c=a.name;a=a.children;return b("React").jsx(h,{color:"green",tooltip:c,className:"_68qf",children:a})}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getChildContext=function(){return{waitTimeAreaName:this.props.name,waitTimeAreaOwner:this.props.owner}};d.render=function(){return!b("ShowWaitTimeAreasMode").isEnabled()?this.props.children:b("React").jsx(i,babelHelpers["extends"]({},this.props,{children:this.props.children||null}))};return c}(b("React").Component);a.childContextTypes={waitTimeAreaName:b("prop-types").string.isRequired,waitTimeAreaOwner:b("prop-types").string.isRequired};e.exports=a}),null);
__d("PageContentTabLoadingDialog",["cx","PageContentTabSuccessDialog.react","PageContentTabSuccessDialogTimer","React","ReactDOM","WaitTimeArea.react","XUIDialog.react","XUIDialogBody.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("PageContentTabSuccessDialogTimer").TIME_IN_MS,i=function(c){"use strict";babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.render=function(){var a;return(a=b("React")).jsx(b("WaitTimeArea.react"),{name:"PageContentTabLoadingDialog",owner:"pages_publishing",children:a.jsx(b("XUIDialog.react"),{width:300,shown:!0,layerHideOnBlur:!1,children:a.jsx(b("XUIDialogBody.react"),{className:"_5xp9",children:a.jsx(b("XUISpinner.react"),{background:"light",className:"_5xpe",size:"large"})})})})};return a}(b("React").Component);a={show:function(){this._container||(this._container=document.createElement("div")),b("ReactDOM").render(b("React").jsx(i,{}),this._container)},hide:function(){if(!this._container)return;this.destroy()},hideWithSuccessMessage:function(a,c){if(!this._container)return;b("ReactDOM").render(b("React").jsx(b("PageContentTabSuccessDialog.react"),{successLabel:a}),this._container);setTimeout(this.destroy.bind(this),c?c:h)},destroy:function(){b("ReactDOM").unmountComponentAtNode(this._container),this._container=null}};e.exports=a}),null);
__d("PhotoZoomCropImageConstants",[],(function(a,b,c,d,e,f){"use strict";a={TOP:"top",MIDDLE:"middle"};e.exports.DRAG_INSTRUCTION_POSITION=a}),null);
__d("SpotlightProfilePicCropOptions",[],(function(a,b,c,d,e,f){__p&&__p();var g=2.5,h=.8,i=320,j={getOptions:function(a,b,c){c===void 0&&(c=i);var d={},e=Math.min(b.x,b.y),f,j,k=a.facebox;k?(j=Math.max(k.size.x*b.x,k.size.y*b.y)*g,f=k.center):(j=h*e,a.focus&&(f=a.focus));k=b.x/a.original.width;d.height=d.width=Math.min(Math.max(j,c*k),e);f&&(d.center_x=Math.min(Math.max(f.x*b.x,d.width/2),b.x-d.width/2),d.center_y=Math.min(Math.max(f.y*b.y,d.height/2),b.y-d.height/2));return d},getOptionsAsRatio:function(a,b,c){c===void 0&&(c=i);a=j.getOptions(a,b,c);c=Math.min(b.x,b.y);return{center:{x:a.center_x?a.center_x/b.x:.5,y:a.center_y?a.center_y/b.y:.5},size:{x:a.width/c,y:a.height/c}}}};e.exports=j}),null);
__d("PhotoZoomCropDimensions",["BasicVector","SpotlightProfilePicCropOptions","clamp"],(function(a,b,c,d,e,f){__p&&__p();var g=320,h=.5,i=.5,j=180,k=.05,l=3;function m(a,b){return Number(a.toFixed(b||l))}a=function(){"use strict";__p&&__p();var a=c.prototype;a.clone=function(){return new c(this.$2).setSize(this.$3.x,this.$3.y).setSmallestSize(this.$4.x,this.$4.y).setCenter(this.$1.x,this.$1.y).setZoom(this.$5)};function c(a){this.$2=a,this.setSmallestSize(j,j).setCenter(h,h),this.setSize(g,g).setZoom(i)}a.getArea=function(){var a=this.getPosition(),b=this.$3.div(this.$5);return{height:Math.round(b.y),width:Math.round(b.x),x:Math.round(Math.abs(a.left)/this.$5),y:Math.round(Math.abs(a.top)/this.$5)}};a.getPosition=function(){var a=this.$6();return{height:m(a.imageSize.y),left:m(this.$3.x/2-a.center.x),top:m(this.$3.y/2-a.center.y),width:m(a.imageSize.x)}};a.getRect=function(){var a=this.$6(),b=this.$3.div(this.$5);return{center:{x:a.center.x/a.imageSize.x,y:a.center.y/a.imageSize.y},size:{x:b.x,y:b.y}}};a.getSize=function(){return this.$3};a.getCenter=function(){return this.$1};a.getZoom=function(){return this.$5};a.getZoomRange=function(){var a=Math.min(this.$2.x,this.$2.y);return{max:this.$3.x/Math.min(this.$4.x,a),min:Math.max(this.$3.x/this.$2.x,this.$3.y/this.$2.y)}};a.hasSpaceToDrag=function(){var a=this.getZoomRange();return!(c.isSquare(this.$2)&&a.min===a.max)};a.isCurrentlyDragable=function(){var a=this.$6().imageSize;return a.x!==this.$3.x||a.y!==this.$3.y};a.moveByPixels=function(a,b){var c=this.$6();return this.moveBy(a/c.imageSize.x,b/c.imageSize.y)};a.moveBy=function(a,b){this.setCenter(this.$1.x+a,this.$1.y+b);a=this.$6();this.$1=a.center.div(a.imageSize.x,a.imageSize.y);return this};a.setCenter=function(a,c){this.$1=new(b("BasicVector"))(b("clamp")(a,0,1),b("clamp")(c,0,1));return this};a.setSize=function(a,c){this.$3=new(b("BasicVector"))(a,c);return this};a.setRatio=function(a,b){var c=this.$3.x*this.$3.y;a=Math.sqrt(c*a/b);return this.setSize(a,c/a)};a.setSmallestSize=function(a,c){this.$4=new(b("BasicVector"))(a,c);return this};a.setZoom=function(a){var c=this.getZoomRange();this.$5=b("clamp")(a,c.min,c.max);return this};a.cloneAndZoom=function(a){var b=this.clone();b.setZoom(a);return b};a.cloneAndMove=function(a,b){var c=this.clone();c.moveByPixels(a,b);return c};a.$7=function(a,c){var d=this.$3.x/2,e=this.$3.y/2;return new(b("BasicVector"))(b("clamp")(c.x,d,a.x-d),b("clamp")(c.y,e,a.y-e))};a.$6=function(){var a=this.$2.mul(this.$5);return{imageSize:a,center:this.$7(a,this.$1.mul(a.x,a.y))}};c.isSquare=function(a){return Math.abs(a.x/a.y-1)<k};c.fromProfilePhotoData=function(a,d){var e=new(b("BasicVector"))(a.original.width,a.original.height),f=new c(e);d?d=d:a.previousprofilepic?d=a.facebox||{center:{x:.5,y:.5},size:{x:1,y:1}}:d=b("SpotlightProfilePicCropOptions").getOptionsAsRatio(a,e);d.center&&f.setCenter(d.center.x,d.center.y);if(d.size&&d.size.x){a=d.size.x*e.x;f.setZoom(f.getSize().x/a)}return f};return c}();e.exports=a}),null);
__d("PhotoZoomCropImagePreview.react",["cx","Image.react","PhotoZoomCropDimensions","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.dimensions,c=this.props.size,d=a.getSize().x/c.x;d!==1&&(a=a.clone().setSize(c.x,c.y).setZoom(a.getZoom()/d));d=null;this.props.overlay&&(d=b("React").jsx("div",{className:"_1_fc"+(this.props.circular?" _3np9":""),children:this.props.overlay}));return b("React").jsxs("div",babelHelpers["extends"]({},this.props,{circular:this.props.circular?this.props.circular.toString():void 0,className:b("joinClasses")(this.props.className,"_1k3v"+(this.props.circular?" _3np9":"")),style:babelHelpers["extends"]({},this.props.style||{},{height:c.y,width:c.x}),children:[b("React").jsx(b("Image.react"),{className:"_1k3w",src:this.props.src,style:a.getPosition()}),d]}))};return c}(b("React").Component);a.propTypes={dimensions:(c=b("prop-types")).instanceOf(b("PhotoZoomCropDimensions")).isRequired,overlay:c.element,size:c.shape({x:c.number.isRequired,y:c.number.isRequired}).isRequired,src:c.oneOfType([c.string,c.object]),style:c.object,className:c.string};e.exports=a}),null);
__d("PhotoZoomCropImage.react",["cx","fbt","ix","Event","Image.react","Keys","PhotoZoomCropImageConstants","PhotoZoomCropImagePreview.react","React","UserAgent","Vector","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=5;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={moved:!1},d.$6=function(a){__p&&__p();d.$2=null;var c=0,e=0;switch(b("Event").getKeyCode(a)){case b("Keys").DOWN:e=j;break;case b("Keys").LEFT:c=-j;break;case b("Keys").RIGHT:c=j;break;case b("Keys").UP:e=-j;break}(c||e)&&(d.props.onMove(c,e),d.setState({moved:!0}))},d.$7=function(a){d.$9(a,b("Vector").getEventPosition(a))},d.$8=function(a){d.$9(a,b("Vector").getTouchEventPosition(a))},d.$3=function(a){d.$10(b("Vector").getEventPosition(a))},d.$4=function(a){d.$10(b("Vector").getTouchEventPosition(a))},d.$5=function(){d.$2=null},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=b("UserAgent").isBrowser("IE < 9")?document.documentElement:window;this.$1=b("Event").listen(a,{mousemove:this.$3,touchmove:this.$4,mouseup:this.$5,touchend:this.$5})};d.componentWillUnmount=function(){if(this.$1)for(var a in this.$1)this.$1[a]&&this.$1[a].remove(),this.$1[a]=null};d.render=function(){var a=this.props.dimensions,c=a.getSize(),d=null;this.props.overlay&&(d=b("React").jsx("div",{className:"_290- _8f5u",children:this.props.overlay}));var e=null;if(this.props.customControls)e=b("React").jsx("div",{className:this.props.enableDrag?"":"_3dfz",children:this.props.customControls});else{var f=this.props.moveStatus!==void 0?this.props.moveStatus:this.state.moved;e=b("React").jsx("div",{className:(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.MIDDLE?"_6aza":"")+(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP?" _3dfy":"")+(f||!this.props.enableDrag?" _3dfz":""),children:b("React").jsxs("span",{className:"_3df-",children:[b("React").jsx(b("Image.react"),{className:"_3-8_ _3df_",src:i("22701")}),h._("Arrastra para recortar")]})})}return b("React").jsxs("div",{circular:this.props.circular?this.props.circular.toString():void 0,className:b("joinClasses")(this.props.className,"_4on5"),style:babelHelpers["extends"]({},this.props.style||{},{height:c.y,width:c.x}),children:[b("React").jsx(b("PhotoZoomCropImagePreview.react"),{circular:this.props.circular,dimensions:a,onKeyDown:this.$6,overlay:this.props.overlay,size:c,src:this.props.src,tabIndex:this.props.isTabbable?0:null}),e,b("React").jsxs("div",{className:"_4on8",children:[b("React").jsx(b("Image.react"),{className:"_4on7"+(this.props.enableDrag?"":" _3mk2")+" _8f5u",onDragStart:b("Event").prevent,onMouseDown:this.$7,onTouchStart:this.$8,src:this.props.src,alt:this.props.altText,style:a.getPosition()}),d]})]})};d.$9=function(a,b){if(this.$2)return;this.props.stopPropagation?a.stopPropagation():a.preventDefault();this.$2=b};d.$10=function(a){var b=this.$2;if(!b||!this.props.enableDrag)return;b=b.sub(a);this.props.onMove(b.x,b.y);this.setState({moved:!0});this.$2=a};return c}(b("React").Component);a.propTypes={circular:(c=b("prop-types")).bool,customControls:c.element,dimensions:c.object,enableDrag:c.bool,onMove:c.func,overlay:c.element,src:c.oneOfType([c.string,c.object]),altText:c.string,moveStatus:c.bool,dragPosition:c.string,isTabbable:c.bool};a.defaultProps={circular:!1,enableDrag:!0,dragPosition:b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP,isTabbable:!0};e.exports=a}),null);
__d("PhotoZoomCropMixin",["ix","cx","invariant","xuiglyph","Image.react","React"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();a={getDimensions:function(){return this._dims},resetDimensions:function(){this.setState(this.getInitialState())},_handleMove:function(a,b){this._dims.moveByPixels(a,b),this.setState(this._getDimensionsState())},_handleZoom:function(a,b){this._dims.setZoom(a[0]);var c=this._getDimensionsState();c.position=b||a[0];this.setState(c)},_getDimensionsState:function(){return{dimensions:this._dims.getPosition(),zoom:this._dims.getZoom()}},_getMessage:function(){var a,b;this.__getZoom||i(0,104);if(this.__getZoom()>1&&this.props.warningText)a=g("89108"),b=this.props.warningText;else if(this.props.messageText)a=g("89336"),b=this.props.messageText;else return null;return this._getMessageMarkup(a,b)},_getMessageMarkup:function(a,c){return b("React").jsxs("div",{className:"_aym",children:[b("React").jsx(b("Image.react"),{className:"_a63",src:a}),c]})}};e.exports=a}),null);
__d("ProfileHeaderSpinner.react",["cx","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return!this.props.shown?null:b("React").jsx("div",{className:"_5mb0",children:b("React").jsx(b("XUISpinner.react"),{background:"light",size:"large"})})};return c}(b("React").Component);e.exports=a}),null);
__d("ProfileHeaderViewShapes",["prop-types"],(function(a,b,c,d,e,f){c=(a=b("prop-types")).shape({focus:a.shape({height:a.number,width:a.number}),original:a.shape({height:a.number,width:a.number}),permalinkURI:a.string,source:a.number,uri:a.string,altText:a.string});e.exports={COVER_PHOTO_DATA:c}}),null);
__d("ProfileWizardStrings",["fbt"],(function(a,b,c,d,e,f,g){a={CANCEL:g._("Cancelar"),CHOOSE_FROM_MY_PHOTOS:g._("Elegir una de mis fotos"),COVER_PHOTO_CHANGE_NOTICE:g._("Cambia tu foto de portada en cualquier momento con el icono de la c\u00e1mara."),COVER_PHOTO_LEAVE_WARNING:g._("No se guardaron los cambios que hiciste en la foto de portada."),PROFILE_PICTURE_CHANGE_NOTICE:g._("Cambia tu foto del perfil en cualquier momento con el icono de la c\u00e1mara."),SAVE:g._("Guardar"),UPDATE_COVER_PHOTO:g._("Actualizar foto de portada"),UPLOAD_PHOTO:g._("Subir foto"),UPDATE_PROFILE_PICTURE:g._("Actualizar foto del perfil")};e.exports=a}),null);
__d("ProfileHeaderCoverPhoto.react",["ix","cx","BasicVector","Image.react","PhotoZoomCropDimensions","PhotoZoomCropImage.react","PhotoZoomCropMixin","ProfileHeaderSpinner.react","ProfileHeaderViewShapes","ProfileWizardStrings","React","ReactComponentWithPureRenderMixin","XUIButton.react","asset","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();c=b("React").createClass({displayName:"ProfileHeaderCoverPhoto",_dims:null,mixins:[b("PhotoZoomCropMixin"),b("ReactComponentWithPureRenderMixin")],propTypes:{coverPhotoData:b("ProfileHeaderViewShapes").COVER_PHOTO_DATA.isRequired,customControls:(a=b("prop-types")).element,dragPosition:a.string,emptyCover:a.element,height:a.number.isRequired,hideDefaultButtons:a.bool,index:a.number,isHidden:a.bool,isLoading:a.bool,isRequestFromContextItems:a.bool,isTabbable:a.bool,moveStatus:a.bool,onMove:a.func,previewCancelHandler:a.func,previewMode:a.bool,previewSaveHandler:a.func,width:a.number.isRequired},getDefaultProps:function(){return{hideDefaultButtons:!1,onMove:function(){},previewCancelHandler:function(){},previewSaveHandler:function(){}}},getInitialState:function(){this._updateDimensions(this.props.coverPhotoData);return babelHelpers["extends"]({},this._getUpdatedDimensionsState())},UNSAFE_componentWillReceiveProps:function(a){__p&&__p();var b=this.props.coverPhotoData;if(b.id===a.coverPhotoData.id&&this.props.previewMode===a.previewMode&&this.props.width===a.width){b=b.focus;if(!b)return;if(b.width===a.coverPhotoData.focus.width&&b.height===a.coverPhotoData.focus.height)return}this._updateDimensions(a.coverPhotoData,a.height,a.width);this.setState(babelHelpers["extends"]({},this._getUpdatedDimensionsState()))},_updateDimensions:function(a,c,d){__p&&__p();var e=a.original;if(e==null)return;var f=new(b("BasicVector"))(e.width,e.height);f=new(b("PhotoZoomCropDimensions"))(f);f.setSize(d||this.props.width,c||this.props.height);d=a.focus;d&&f.setCenter(d.width,d.height);f.setZoom(f.getSize().x/e.width);this._dims=f},_getUpdatedDimensionsState:function(){return this._getDimensionsState()},_onMove:function(a,b){this._handleMove(a,b),this.props.onMove&&this.props.onMove(a,b,this.props.index)},render:function(){__p&&__p();var a=this.props.coverPhotoData;if(a.uri){var c=!!(this.props.previewMode&&this._dims&&this._dims.isCurrentlyDragable());c=b("React").jsx(b("PhotoZoomCropImage.react"),{altText:a.altText,className:"_2oru"+(this.props.isHidden||this.props.isLoading?" _2orv":""),customControls:this.props.customControls,dimensions:this._dims,dragPosition:this.props.dragPosition,enableDrag:c,isTabbable:this.props.isTabbable,moveStatus:this.props.moveStatus,onMove:this._onMove,src:a.uri})}else if(this.props.emptyCover)c=this.props.emptyCover;else{a=this.props.isRequestFromContextItems||null;a!==null?c=b("React").jsx("div",{className:"_6ld6",children:b("React").jsx(b("Image.react"),{src:g("621934")})}):c=b("React").jsx("div",{className:"_2orw"})}a=null;if(this.props.previewMode&&!this.props.customControls&&!this.props.hideDefaultButtons){var d;a=(d=b("React")).jsx("div",{className:"_1tg",id:"fbProfileHeaderCoverPhotoControl",children:d.jsxs("div",{className:"_1th",children:[d.jsx(b("XUIButton.react"),{"data-testid":"cover_photo_save_button",label:b("ProfileWizardStrings").SAVE,onClick:this.props.previewSaveHandler,size:"large",use:"confirm"}),d.jsx(b("XUIButton.react"),{label:b("ProfileWizardStrings").CANCEL,onClick:this.props.previewCancelHandler,size:"large"})]})})}return b("React").jsxs("div",{className:"_2orx",style:{height:this.props.height,width:this.props.width},children:[c,a,b("React").jsx(b("ProfileHeaderSpinner.react"),{shown:this.props.isLoading})]})},getOffsets:function(){var a=this.getDimensions().getPosition();return{x:a.left/a.width,y:a.top/a.height}},getCenter:function(){var a=this.getDimensions().getRect();return a.center},__getZoom:function(){return this.state.zoom}});e.exports=c}),null);