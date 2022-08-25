"use strict";(self["webpackChunkgiggate"]=self["webpackChunkgiggate"]||[]).push([[168],{3004:function(t,e,i){i.r(e),i.d(e,{default:function(){return N}});var n=i(3396),o=i(9242);const a={class:"settings"},r=(0,n._)("h1",null,"Settings",-1),u={class:"settingContainer"},s={class:"setting"},l=(0,n._)("label",{for:"IsFullscreen"},"Fullscreen",-1),d={class:"setting"},c=(0,n._)("label",{for:"AlwaysOnTop"},"Fenster im Vordergrund",-1),h={class:"setting"},m=(0,n._)("label",{for:"mobilemode"},"Mobile Ansicht",-1);function p(t,e,i,p,f,_){const y=(0,n.up)("LinesStroke");return(0,n.wg)(),(0,n.iD)("div",a,[r,(0,n._)("div",u,[(0,n._)("div",s,[l,(0,n.wy)((0,n._)("input",{type:"checkbox",name:"IsFullscreen",id:"IsFullscreen","onUpdate:modelValue":e[0]||(e[0]=t=>f.IsFullscreen=t),onChange:e[1]||(e[1]=(...t)=>_.FullscreenMode&&_.FullscreenMode(...t))},null,544),[[o.e8,f.IsFullscreen]])]),(0,n.Wm)(y,{lineColor:"lineMargin_small"}),(0,n._)("div",d,[c,(0,n.wy)((0,n._)("input",{type:"checkbox",name:"AlwaysOnTop",id:"AlwaysOnTop","onUpdate:modelValue":e[2]||(e[2]=t=>f.AlwaysOnTop=t),onChange:e[3]||(e[3]=(...t)=>_.AlwaysOnTopMode&&_.AlwaysOnTopMode(...t))},null,544),[[o.e8,f.AlwaysOnTop]])]),(0,n.Wm)(y,{lineColor:"lineMargin_small"}),(0,n._)("div",h,[m,(0,n.wy)((0,n._)("input",{type:"checkbox",name:"mobilemode",id:"mobilemode","onUpdate:modelValue":e[4]||(e[4]=t=>f.IsMobile=t),onChange:e[5]||(e[5]=(...t)=>_.mobileMode&&_.mobileMode(...t))},null,544),[[o.e8,f.IsMobile]])])])])}i(6699),i(1703);var f=i(5285),_=i(3585),y=i(5927);function g(t,e){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(i){return[2,(0,_.i)({__tauriModule:"Event",message:{cmd:"unlisten",event:t,eventId:e}})]}))}))}function v(t,e,i){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(n){switch(n.label){case 0:return[4,(0,_.i)({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:e,payload:"string"==typeof i?i:JSON.stringify(i)}})];case 1:return n.sent(),[2]}}))}))}function w(t,e,i){return(0,f._)(this,void 0,void 0,(function(){var n=this;return(0,f.a)(this,(function(o){return[2,(0,_.i)({__tauriModule:"Event",message:{cmd:"listen",event:t,windowLabel:e,handler:(0,y.t)(i)}}).then((function(e){return function(){return(0,f._)(n,void 0,void 0,(function(){return(0,f.a)(this,(function(i){return[2,g(t,e)]}))}))}}))]}))}))}function b(t,e,i){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(n){return[2,w(t,e,(function(e){i(e),g(t,e.id).catch((function(){}))}))]}))}))}var M,W=function(t,e){this.type="Logical",this.width=t,this.height=e},z=function(){function t(t,e){this.type="Physical",this.width=t,this.height=e}return t.prototype.toLogical=function(t){return new W(this.width/t,this.height/t)},t}(),A=function(t,e){this.type="Logical",this.x=t,this.y=e},T=function(){function t(t,e){this.type="Physical",this.x=t,this.y=e}return t.prototype.toLogical=function(t){return new A(this.x/t,this.y/t)},t}();function P(){return new F(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function x(){return window.__TAURI_METADATA__.__windows.map((function(t){return new F(t.label,{skip:!0})}))}!function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"}(M||(M={}));var S,I=["tauri://created","tauri://error"],L=function(){function t(t){this.label=t,this.listeners=Object.create(null)}return t.prototype.listen=function(t,e){return(0,f._)(this,void 0,void 0,(function(){var i=this;return(0,f.a)(this,(function(n){return this._handleTauriEvent(t,e)?[2,Promise.resolve((function(){var n=i.listeners[t];n.splice(n.indexOf(e),1)}))]:[2,w(t,this.label,e)]}))}))},t.prototype.once=function(t,e){return(0,f._)(this,void 0,void 0,(function(){var i=this;return(0,f.a)(this,(function(n){return this._handleTauriEvent(t,e)?[2,Promise.resolve((function(){var n=i.listeners[t];n.splice(n.indexOf(e),1)}))]:[2,b(t,this.label,e)]}))}))},t.prototype.emit=function(t,e){return(0,f._)(this,void 0,void 0,(function(){var i,n;return(0,f.a)(this,(function(o){if(I.includes(t)){for(i=0,n=this.listeners[t]||[];i<n.length;i++)(0,n[i])({event:t,id:-1,windowLabel:this.label,payload:e});return[2,Promise.resolve()]}return[2,v(t,this.label,e)]}))}))},t.prototype._handleTauriEvent=function(t,e){return!!I.includes(t)&&(t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e],!0)},t}(),C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,f.c)(e,t),e.prototype.scaleFactor=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})]}))}))},e.prototype.innerPosition=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then((function(t){var e=t.x,i=t.y;return new T(e,i)}))]}))}))},e.prototype.outerPosition=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then((function(t){var e=t.x,i=t.y;return new T(e,i)}))]}))}))},e.prototype.innerSize=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then((function(t){var e=t.width,i=t.height;return new z(e,i)}))]}))}))},e.prototype.outerSize=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then((function(t){var e=t.width,i=t.height;return new z(e,i)}))]}))}))},e.prototype.isFullscreen=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})]}))}))},e.prototype.isMaximized=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})]}))}))},e.prototype.isDecorated=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})]}))}))},e.prototype.isResizable=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})]}))}))},e.prototype.isVisible=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})]}))}))},e.prototype.theme=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})]}))}))},e.prototype.center=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})]}))}))},e.prototype.requestUserAttention=function(t){return(0,f._)(this,void 0,void 0,(function(){var e;return(0,f.a)(this,(function(i){return e=null,t&&(e=t===M.Critical?{type:"Critical"}:{type:"Informational"}),[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:e}}}})]}))}))},e.prototype.setResizable=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:t}}}})]}))}))},e.prototype.setTitle=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:t}}}})]}))}))},e.prototype.maximize=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})]}))}))},e.prototype.unmaximize=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})]}))}))},e.prototype.toggleMaximize=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})]}))}))},e.prototype.minimize=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})]}))}))},e.prototype.unminimize=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})]}))}))},e.prototype.show=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})]}))}))},e.prototype.hide=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})]}))}))},e.prototype.close=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})]}))}))},e.prototype.setDecorations=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:t}}}})]}))}))},e.prototype.setAlwaysOnTop=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:t}}}})]}))}))},e.prototype.setSize=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:t.type,data:{width:t.width,height:t.height}}}}}})]}))}))},e.prototype.setMinSize=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},e.prototype.setMaxSize=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},e.prototype.setPosition=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},e.prototype.setFullscreen=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:t}}}})]}))}))},e.prototype.setFocus=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})]}))}))},e.prototype.setIcon=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:"string"==typeof t?t:Array.from(t)}}}}})]}))}))},e.prototype.setSkipTaskbar=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:t}}}})]}))}))},e.prototype.setCursorGrab=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:t}}}})]}))}))},e.prototype.setCursorVisible=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:t}}}})]}))}))},e.prototype.setCursorIcon=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:t}}}})]}))}))},e.prototype.setCursorPosition=function(t){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},e.prototype.startDragging=function(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})]}))}))},e}(L),F=function(t){function e(e,i){void 0===i&&(i={});var n=t.call(this,e)||this;return(null==i?void 0:i.skip)||(0,_.i)({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:(0,f.b)({label:e},i)}}}).then((function(){return(0,f._)(n,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,this.emit("tauri://created")]}))}))})).catch((function(t){return(0,f._)(n,void 0,void 0,(function(){return(0,f.a)(this,(function(e){return[2,this.emit("tauri://error",t)]}))}))})),n}return(0,f.c)(e,t),e.getByLabel=function(t){return x().some((function(e){return e.label===t}))?new e(t,{skip:!0}):null},e}(C);function O(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})]}))}))}function k(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})]}))}))}function E(){return(0,f._)(this,void 0,void 0,(function(){return(0,f.a)(this,(function(t){return[2,(0,_.i)({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})]}))}))}"__TAURI_METADATA__"in window?S=new F(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn('Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.'),S=new F("main",{skip:!0}));Object.freeze({__proto__:null,WebviewWindow:F,WebviewWindowHandle:L,WindowManager:C,getCurrent:P,getAll:x,get appWindow(){return S},LogicalSize:W,PhysicalSize:z,LogicalPosition:A,PhysicalPosition:T,get UserAttentionType(){return M},currentMonitor:O,primaryMonitor:k,availableMonitors:E});var D=i(2781),U={data(){return{maxNoftiy:4,IsMobile:!1,IsFullscreen:!1,AlwaysOnTop:!1,mainWindow:F.getByLabel("giggate")}},components:{LinesStroke:D.Oy},computed:{settings(){return this.$store.state.settings}},mounted(){this.settings.loggedIn?this.maxNoftiy=4:this.maxNoftiy=2,this.settings.bellNumber=this.maxNoftiy},methods:{FullscreenMode(){this.IsFullscreen?this.mainWindow.setFullscreen(!0):(this.mainWindow.setFullscreen(!1),this.mainWindow.setSize(new W(1280,720)))},AlwaysOnTopMode(){this.AlwaysOnTop?this.mainWindow.setAlwaysOnTop(!0):this.mainWindow.setAlwaysOnTop(!1)},mobileMode(){this.IsMobile?this.mainWindow.setSize(new W(380,750)):this.mainWindow.setSize(new W(1280,720))}}},R=i(89);const V=(0,R.Z)(U,[["render",p]]);var N=V}}]);
//# sourceMappingURL=168.1e0da8d2.js.map