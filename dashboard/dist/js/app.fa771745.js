(function(t){function n(n){for(var a,i,c=n[0],s=n[1],u=n[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,c=1;c<e.length;c++){var s=e[c];0!==o[s]&&(a=!1)}a&&(r.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},o={app:0},r=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0031":function(t,n,e){},1:function(t,n){},2:function(t,n){},2445:function(t,n,e){"use strict";var a=e("0031"),o=e.n(a);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("b680"),e("ac1f"),e("5319"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("a026"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("mu-appbar",{staticClass:"title"},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("span",{staticClass:"doubleText"},[t._v(t._s(t.currentPluginData.Name))]),e("mu-button",{attrs:{icon:"",color:"primary"},on:{click:t.getHelp}},[e("mu-icon",{attrs:{value:"help"}})],1),e("mu-button",{attrs:{icon:"",color:"primary"},on:{click:t.showSettings}},[e("mu-icon",{attrs:{value:"settings"}})],1),t._l(t.titleOps,(function(t,n){return e(t,{key:"op"+n,tag:"component"})})),t.titleTabs.length?e("mu-tabs",{attrs:{value:t.titleTabActive,"indicator-color":"#80deea",inverse:"",center:""},on:{"update:value":function(n){t.titleTabActive=n}}},t._l(t.titleTabs,(function(n){return e("mu-tab",{key:n},[t._v(t._s(n))])})),1):t._e()],2),e("div",{attrs:{slot:"right"},slot:"right"},[t._v(" 启动时间： "),e("StartTime",{attrs:{value:t.engineInfo.StartTime}})],1)]),e("mu-drawer",{attrs:{open:"",width:"200"}},[e("mu-appbar",{attrs:{"z-depth":0}},[e("div",{staticStyle:{"line-height":"24px"}},[e("img",{staticStyle:{"vertical-align":"top"},attrs:{src:"favicon.ico",width:"24"}}),t._v("onibuca ")]),e("div",{staticStyle:{"font-size":"10px","line-height":"24px"}},[t._v("engine: "+t._s(t.engineInfo.Version))])]),e("mu-divider"),e("mu-list",{attrs:{value:t.currentPluginData.Name},on:{change:t.selectPlugin}},t._l(t.plugins,(function(n){return e("mu-list-item",{key:n.Name,attrs:{value:n.Name,button:""}},[e("mu-list-item-title",[t._v(t._s((n.UIDir?"📈":"🧩")+n.Name))]),e("mu-list-item-action",[e("mu-badge",{attrs:{content:n.Version.split("-")[0]}})],1)],1)})),1)],1),e("div",{staticStyle:{padding:"100px 20px 20px 220px"}},[t.currentPluginData.UIDir?e(t.currentPlugin,t._b({ref:"plugin",tag:"component"},"component",t.currentConfig,!1)):e("vue-markdown",{staticStyle:{padding:"24px"},attrs:{source:t.currentPluginData.ReadMe}})],1),e("mu-dialog",{attrs:{width:"360",transition:"slide-bottom",fullscreen:"",open:t.openFullscreen},on:{"update:open":function(n){t.openFullscreen=n}}},[e("mu-appbar",{attrs:{color:"#009688AF",title:t.currentPluginData.Name}},[e("mu-button",{attrs:{slot:"left",icon:""},on:{click:t.closeFullscreenDialog},slot:"left"},[e("mu-icon",{attrs:{value:"close"}})],1),e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.closeFullscreenDialog},slot:"right"},[t._v("Done")])],1),e("vue-markdown",{staticClass:"readme",attrs:{source:t.currentPluginData.ReadMe}})],1),e("mu-dialog",{attrs:{width:"360",transition:"slide-bottom",open:t.openSettings},on:{"update:open":function(n){t.openSettings=n}}},[t._l(t.currentConfig,(function(n,a){return[t.currentPluginData.HotConfig&&t.currentPluginData.HotConfig.includes(a)?["boolean"==typeof n?e("mu-switch",{key:a,attrs:{"label-left":"",label:a,"input-value":n},on:{change:function(n){return t.modifyConfig(a,n)}}}):e("mu-text-field",{key:a,attrs:{label:a,value:n},on:{change:function(n){return t.modifyConfig(a,n)}}})]:e("div",{key:a},[t._v(t._s(a)+":"+t._s(n))])]}))],2)],1)},r=[],i=(e("7db0"),e("5530")),c=e("2f62"),s=e("9ce6"),u=e.n(s),l=e("3f1c"),f=e.n(l),d={components:{VueMarkdown:u.a},data:function(){return{openFullscreen:!1,openSettings:!1,currentPluginData:{},titleTabActive:0,titleTabs:[],titleOps:[]}},computed:Object(i["a"])({},Object(c["d"])({plugins:function(t){return t.plugins},engineInfo:function(t){return t.engineInfo}}),{currentPlugin:function(){return"plugin-"+this.currentPluginData.Name.toLowerCase()},currentConfig:function(){return this.currentPluginData.Config?f.a.parse(this.currentPluginData.Config):{}}}),mounted:function(){var t=this;this.fetchEngineInfo(),this.fetchPlugins().then((function(n){for(var e=function(e){if(n[e].UIDir){var o="plugin-"+n[e].Name.toLowerCase();a["default"].component(o,(function(a,r){var i=document.createElement("script");i.setAttribute("src",t.apiHost+"/plugin/"+n[e].Name+"/"+o+".umd.min.js"),i.onload=function(){a(window[o])},i.onerror=r,document.body.appendChild(i)}));var r=document.createElement("link");r.href=t.apiHost+"/plugin/"+n[e].Name+"/"+o+".css",r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),document.head.appendChild(r)}},o=0;o<n.length;o++)e(o);t.selectPlugin("GateWay")})),this.fetchSummary()},methods:Object(i["a"])({},Object(c["b"])(["fetchEngineInfo","fetchPlugins","fetchSummary"]),{},Object(c["c"])(["update"]),{closeFullscreenDialog:function(){this.openFullscreen=!1},selectPlugin:function(t){this.titleTabActive=0,this.titleTabs=[],this.titleOps=[],this.currentPluginData=this.plugins.find((function(n){return n.Name==t}))},getHelp:function(){this.openFullscreen=!0},showSettings:function(){this.openSettings=!0},modifyConfig:function(t,n){var e=this;this.ajax.get("/api/modifyConfig?name="+this.currentPluginData.Name+"&key="+t+"&value="+JSON.stringify([n])).then((function(a){if("success"==a){var o=e.currentConfig;o[t]=n,e.currentPluginData.Config=f.a.stringify(o)}}))}})},p=d,h=(e("7361"),e("2877")),m=Object(h["a"])(p,o,r,!1,null,null,null),g=m.exports;a["default"].use(c["a"]);var b=a["default"].prototype.apiHost="//"+location.host,x={0:"Linear PCM, platform endian",1:"ADPCM",2:"MP3",3:"Linear PCM, little endian",5:"Nellymoser 8kHz mono",6:"Nellymoser",7:"G.711 A-law logarithmic PCM",8:"G.711 mu-law logarithmic PCM",9:"reserved",10:"AAC",11:"Speex",14:"MP3 8Khz",15:"Device-specific sound"},v={1:"JPEG (currently unused)",2:"Sorenson H.263",3:"Screen video",4:"On2 VP6",5:"On2 VP6 with alpha channel",6:"Screen video version 2",7:"AVC",12:"H265"};a["default"].prototype.SoundFormat=function(t){return x[t]},a["default"].prototype.CodecID=function(t){return v[t]},a["default"].prototype.SoundRate=function(t){return t>1e3?t/1e3+"kHz":t+"Hz"};var w=null,y=new c["a"].Store({state:{plugins:[],Address:location.hostname,NetWork:[],Streams:[],Memory:{Used:0,Usage:0},CPUUsage:0,HardDisk:{Used:0,Usage:0},Children:{},engineInfo:{}},mutations:{update:function(t,n){Object.assign(t,n)}},actions:{fetchEngineInfo:function(t){var n=t.commit;return window.ajax.getJSON(b+"/api/sysInfo").then((function(t){return n("update",{engineInfo:t})}))},fetchPlugins:function(t){var n=t.commit;return window.ajax.getJSON(b+"/api/plugins").then((function(t){return t.sort((function(t,n){return t.Name>n.Name?1:-1})),n("update",{plugins:t}),t}))},fetchSummary:function(t){var n=t.commit;w=new EventSource(b+"/api/summary"),w.onmessage=function(t){if(t.data){var e=JSON.parse(t.data);e.Address=location.hostname,e.Streams||(e.Streams=[]),e.Streams.sort((function(t,n){return t.StreamPath>n.StreamPath?1:-1})),n("update",e)}}}}}),S=e("f825"),k=e.n(S);e("f8ce");a["default"].use(k.a);e("99af");var _=e("30f4"),P=(e("d6f6"),e("dd88")),I=e("4d7d"),C=e("d4ea"),D=(e("2095"),e("aa12"),e("d09c")),R=e.n(D),M=e("efa6"),O=e.n(M),T=e("37b7");a["default"].use(R.a),a["default"].use(C["a"],{overlayColor:"#9e9e9e5d",size:48,color:"primary",className:""}),a["default"].use(I["a"]),a["default"].use(P["a"]),a["default"].use(_["a"]);var j=["#153ad0","#d11b58","#4a1798","#c52dd0","#40d3fc","#feeb73"];O.a.add("Cyberpunk",{primary:j[4],secondary:T["amber"],text:{primary:T["grey200"],secondary:"rgba(255, 255, 255, 0.7)",alternate:"#303030",disabled:"rgba(255, 255, 255, 0.3)",hint:"rgba(255, 255, 255, 0.3)"}},"dark"),O.a.addCreateTheme((function(){return"\n    html {\n        height:100%\n    }\n    body {\n        background-image: radial-gradient(".concat(j[3],"7a,").concat(j[2],"7a, #0300137a);\n        color: #ffffff;\n        background-color: black;\n        height:100%;\n    }\n    .mu-item {\n        color :").concat(j[4],";\n        text-shadow: 0px 2px 2px ").concat(j[3],";\n    }\n    .mu-item:hover {\n        color : #ffb4f6;\n        background:#000;\n    }\n    .mu-item.is-selected>.mu-item-title{\n        color: #ffb4f6;\n        text-shadow: 0px 0px 1px ").concat(j[2],", 0px 0px 4px ").concat(j[3],", 0px 0px 5px #ffffff;\n    }\n    .mu-badge {\n        color : ").concat(j[4],";\n        background : ").concat(j[2],";\n    }\n    .mu-paper {\n        background: #0000000f;\n    }\n    .mu-appbar{\n        background: #000;\n        color :").concat(j[4],"\n    }\n    .mu-dialog{\n        background: #0000009e url(dbg.jpg);\n        background-blend-mode: darken;\n        box-shadow: \n        inset 0px -2px 5px 0px ").concat(j[3],", \n        inset 0px -7px 10px 1px ").concat(j[0],",\n        inset 0 3px 14px 2px ").concat(j[2],",\n        0 2px 2px 2px black;\n        border: 1px solid ").concat(j[4],';\n        position:relative;\n    }\n    .mu-dialog:before{\n        content: "";\n        position: absolute;\n        width: 50px;\n        height: 0;\n        border: 10px solid ').concat(j[4],';\n        top: -10px;\n        left: -1px;\n        border-right: 10px solid transparent;\n        border-top: 0;\n    }\n    .mu-dialog:after{\n        content: "";\n        position: absolute;\n        width: 50px;\n        height: 0;\n        border: 10px solid ').concat(j[4],";\n        border-left: 10px solid transparent;\n        border-bottom: 0;\n        right: -1px;\n    }\n    .mu-dialog-title {\n        font-weight: lighter;\n        color : ").concat(T["grey300"],";\n        text-shadow: \n        1px 1px 2px ").concat(j[4],",\n        -1px -1px 2px ").concat(j[4],",\n        1px -1px 2px ").concat(j[4],",\n        -1px 1px 2px ").concat(j[4],";\n    }\n    .mu-dialog-body {\n        color : ").concat(T["grey200"],";\n    }\n    .mu-button {\n        color:  ").concat(j[4],";\n    }\n    .mu-button :hover{\n        color:  white;\n        text-shadow: 0px 0px 3px ").concat(T["cyanA200"],";\n    }\n    .mu-table {\n        background: #00000047;\n        box-shadow: 0 0 5px ").concat(j[4],",inset 0 0 5px ").concat(j[4],",0 0 0 1px ").concat(j[4],";\n        border-radius: 5px;\n    }\n    .mu-table-empty {\n        color : white;\n    }\n    .mu-table th {\n        color: ").concat(j[1],";\n        text-shadow: 0px 0px 2px ").concat(j[1],";\n    }\n    .mu-table tr {\n        color: ").concat(j[4],";\n    }\n    .mu-table tr.is-hover {\n        background: #000;\n        color: white;\n        text-shadow: 0px 0px 3px ").concat(j[4],";\n    }\n    .mu-flat-button {\n        color: ").concat(j[4],";\n    }\n    .mu-card {\n        background: #9e9e9e1d;\n        border: 1px solid #ffffffa8;\n    }\n    .mu-card-title-container .mu-card-title {\n        color: ").concat(j[5],";\n    }\n    .mu-card-title-container .mu-card-sub-title {\n        color: ").concat(j[3],";\n    }\n    .mu-tabs-inverse {\n        background: transparent;\n        color:").concat(T["grey200"],";\n    }\n    .mu-tab :hover {\n        color: white;\n    }\n    .mu-tab-active.is-inverse {\n        color: ").concat(j[4],";\n    }\n    .mu-tab-active.is-inverse :hover {\n        color: ").concat(j[4],";\n        text-shadow: 0px 0px 3px ").concat(j[4],";\n    }\n    .mu-tab-link-highlight {\n        box-shadow: 0 -2px 5px 1px ").concat(j[4],";\n    }\n    .mu-tab-active.is-inverse.hover ~ .mu-tab-link-highlight {\n        box-shadow: 0 -2px 5px 3px ").concat(j[4],";\n    }\n    .mu-input-line{\n        background:").concat(j[4],";\n    }\n    .mu-input ,.mu-text-field-input{\n        color : ").concat(j[5],";\n    }\n    .mu-input-help {\n        color : ").concat(j[3],";\n    }\n    .mu-input.has-label .mu-input-label.float{\n        color : ").concat(j[0],";\n    }\n    .mu-switch-label {\n        color : ").concat(j[4],";\n    }\n    .mu-switch-track {\n        box-shadow: 0px 0px 2px 2px black inset, 0 0 10px 0px ").concat(j[4],";\n        background: #1f6e84;\n    }\n    .mu-switch-checked .mu-switch-track {\n        background: ").concat(j[4],";\n        opacity :1;\n    }\n    .mu-switch-thumb\n    {\n        box-shadow: 0 5px 4px 0 #383838 inset;\n        background: black;\n    }\n    .mu-switch-checked .mu-switch-thumb{\n        box-shadow: 0 5px 4px 0 #383838 inset;\n        background: black;\n    }\n    ")})),O.a.use("Cyberpunk");var A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mu-tooltip",{attrs:{content:new Date(t.value).toLocaleString()}},[e("Time",{attrs:{time:new Date(t.value)}})],1)},N=[],F={name:"StartTime",props:{value:String}},V=F,H=Object(h["a"])(V,A,N,!1,null,"4607b2f5",null),U=H.exports,E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._g({class:t.isMouseDown?"a mousedown":"a",on:{mousedown:function(n){t.isMouseDown=!0},mouseup:function(n){t.isMouseDown=!1},mouseleave:function(n){t.isMouseDown=!1}}},t.$listeners),[e(t.href?"a":"div",{tag:"component",class:t.blink?" b blink":"b",attrs:{href:t.href,target:"_blank"}},[t._t("default")],2)],1)},G=[],z={props:{href:String,blink:Boolean},data:function(){return{isMouseDown:!1}}},J=z,$=(e("76cb"),Object(h["a"])(J,E,G,!1,null,"3eeb4e06",null)),L=$.exports,B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("mu-data-table",{attrs:{columns:t.columns,data:t.$store.state.Streams,"min-col-width":50},scopedSlots:t._u([{key:"expand",fn:function(n){return[e("div",[e("m-button",{on:{click:function(e){return t.showCircle(n.row)}}},[t._v("缓冲环")]),e("m-button",{on:{click:function(e){return t.snapshot(n.row)}}},[t._v("缓冲快照")]),e("m-button",{on:{click:function(e){return t.videoTag(n.row)}}},[t._v("VideoTag")]),e("m-button",{on:{click:function(e){return t.audioTag(n.row)}}},[t._v("AudioTag")]),t._t("default",null,null,n)],2)]}},{key:"default",fn:function(n){return[e("td",{staticClass:"is-center"},[t._v(t._s(n.row.StreamPath))]),e("td",{staticClass:"is-center"},[t._v(t._s(n.row.Type||"await"))]),e("td",{staticClass:"is-center"},[e("StartTime",{attrs:{value:n.row.StartTime}})],1),e("td",{staticClass:"is-center"},[t._v(t._s(t.SoundFormat(n.row.AudioInfo.SoundFormat)))]),e("td",{staticClass:"is-center"},[t._v(t._s(t.SoundRate(n.row.AudioInfo.SoundRate)))]),e("td",{staticClass:"is-center"},[t._v(t._s(n.row.AudioInfo.SoundType))]),e("td",{staticClass:"is-center"},[t._v(t._s(t.CodecID(n.row.VideoInfo.CodecID)))]),e("td",{staticClass:"is-center"},[t._v(t._s(n.row.VideoInfo.SPSInfo.Width)+"x"+t._s(n.row.VideoInfo.SPSInfo.Height))]),e("td",{staticClass:"is-center"},[t._v(t._s(n.row.VideoInfo.GOP))]),e("td",{staticClass:"is-center"},[t._v(t._s(t.unitFormat(n.row.AudioInfo.BPS))+"/"+t._s(t.unitFormat(n.row.VideoInfo.BPS)))]),e("td",{staticClass:"is-center"},[t._v(t._s(n.row.SubscriberInfo.length))])]}}],null,!0)}),e("mu-dialog",{attrs:{width:"330",transition:"slide-top",open:t.showDetail},on:{close:t.onCloseDetail,"update:open":function(n){t.showDetail=n}}},[e("div",[t._v("实时缓冲读写环")]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"330",height:"330"}},[e("filter",{attrs:{id:"track"}},[e("feColorMatrix",{attrs:{type:"matrix",result:"color",values:"\n                0 0 0 0  0\n                0 0 0 .9 0\n                0 0 0 .9 0\n                0 0 0 1  0\n                "}}),e("feGaussianBlur",{attrs:{in:"color",stdDeviation:"4",result:"blur"}}),e("feOffset",{attrs:{in:"blur",dx:"0",dy:"0",result:"offset"}}),e("feMerge",[e("feMergeNode",{attrs:{in:"offset"}}),e("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),e("circle",{attrs:{r:"5",cx:"100",cy:"115",fill:"yellow"}}),e("text",{attrs:{x:"120",y:"120",fill:"white"}},[t._v("publisher")]),e("circle",{attrs:{r:"5",cx:"100",cy:"130",fill:"tomato"}}),e("text",{attrs:{x:"120",y:"135",fill:"white"}},[t._v("subscriber")]),e("circle",{attrs:{r:"5",cx:"100",cy:"145",fill:"#c52dd0"}}),e("text",{attrs:{x:"120",y:"150",fill:"white"}},[t._v("keyframe")]),e("a",{on:{click:t.showSlider}},[e("text",{attrs:{x:"90",y:"175",fill:"wheat"}},[t._v("最大显示个数："+t._s(t.maxSubDetail))])]),e("circle",{attrs:{"stroke-dasharray":"10 2",cx:t.offset,cy:t.offset,r:t.ringR,stroke:"cyan","stroke-width":"8",fill:"none",filter:"url(#track)"}}),t._l(t.currentRoomInfo,(function(n,a){return e("circle",{key:a,attrs:{fill:"tomato",r:"5",cx:Math.sin((t.pubIndex-n)*Math.PI/t.ringR)*t.subR+t.offset,cy:Math.cos((t.pubIndex-n)*Math.PI/t.ringR)*t.subR+t.offset}})})),e("circle",{attrs:{cx:t.offset,cy:t.offset,r:t.gopR,stroke:"#40d3fcac","stroke-width":"20",fill:"none"}}),e("path",{attrs:{stroke:"#40d3fc","stroke-width":"20",fill:"none",d:"M"+(Math.sin(t.firstIndex*Math.PI/t.ringR)*t.gopR+t.offset)+" "+(Math.cos(t.firstIndex*Math.PI/t.ringR)*t.gopR+t.offset)+" A"+t.gopR+" "+t.gopR+" 0 "+t.largeARCflag+" 0 "+(Math.sin(t.pubIndex*Math.PI/t.ringR)*t.gopR+t.offset)+" "+(Math.cos(t.pubIndex*Math.PI/t.ringR)*t.gopR+t.offset)+" "}}),e("circle",{attrs:{fill:"#c52dd0",r:"5",cx:Math.sin(t.firstIndex*Math.PI/t.ringR)*t.pubR+t.offset,cy:Math.cos(t.firstIndex*Math.PI/t.ringR)*t.pubR+t.offset}}),e("circle",{attrs:{fill:"yellow",r:"5",cx:Math.sin(t.pubIndex*Math.PI/t.ringR)*t.pubR+t.offset,cy:Math.cos(t.pubIndex*Math.PI/t.ringR)*t.pubR+t.offset}})],2)]),e("mu-dialog",{attrs:{width:"550",transition:"slide-top",open:t.showSnapshot},on:{"update:open":function(n){t.showSnapshot=n}}},[e("div",[t._v("缓冲快照")]),e("mu-data-table",{attrs:{columns:t.snapshotColumns,data:t.snapshotData.slice(10*(t.currentSnapshotPage-1),10*t.currentSnapshotPage)}},[e("mu-pagination",{attrs:{slot:"footer",total:t.snapshotData.length,current:t.currentSnapshotPage},on:{"update:current":function(n){t.currentSnapshotPage=n}},slot:"footer"})],1)],1),e("mu-dialog",{attrs:{width:"550",transition:"slide-top",open:t.showTag},on:{"update:open":function(n){t.showTag=n}}},[e("pre",[t._v(t._s(t.tagData))])])],1)},K=[],W=(e("a15b"),e("d81d"),e("fb6a"),e("ace4"),e("d3b7"),e("25f0"),e("1276"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),null),q={data:function(){return{pubR:120,gopR:110,subR:135,ringR:128,offset:140,showDetail:!1,showSnapshot:!1,maxSubDetail:5,currentRoom:null,pubIndex:0,firstIndex:0,lastIndex:0,currentRoomInfo:[],currentSnapshotPage:1,showTag:!1,tagData:"",snapshotColumns:[{title:"类型",name:"Type",formatter:function(t){return 8==t?"Audio":"Video"},width:90},{title:"字节数",name:"Size",width:90},{title:"前14个字节",name:"Payload",formatter:function(t){return atob(t).split("").map((function(t){return t=t.charCodeAt(0).toString(16).toUpperCase(),1==t.length?"0"+t:t})).join(" ")}}],snapshotData:[],columns:[{title:"StreamPath",align:"center"},{title:"类型",align:"center"},{title:"开始时间",align:"center"},{title:"音频格式",align:"center"},{title:"采样率",align:"center"},{title:"声道",align:"center"},{title:"视频格式",align:"center"},{title:"分辨率",align:"center"},{title:"GOP",align:"center"},{title:"码率A/V",align:"center"},{title:"订阅者",align:"center"}]}},methods:{showCircle:function(t){this.showDetail=!0,this.currentRoom=t,W&&W.close(),this.startListen()},onCloseDetail:function(){W.close()},startListen:function(){var t=this;W=new EventSource("/api/listenInfo?stream="+this.currentRoom.StreamPath+"&max="+this.maxSubDetail),W.onmessage=function(n){var e=JSON.parse(n.data);t.lastIndex=t.firstIndex;var a=t.$store.state.engineInfo.RingSize-8;t.pubIndex=e[0]>>a,t.firstIndex=e[1]>>a,t.currentRoomInfo=e.slice(2).map((function(t){return t>>a}))}},showSlider:function(){var t=this;this.$confirm((function(n){return n("mu-slider",{props:{value:t.maxSubDetail,max:t.currentRoomInfo.length,min:1,step:1},on:{change:function(n){t.maxSubDetail=n}}})}),"修改最大显示个数").then((function(n){var e=n.result;e&&(W.close(),t.startListen())}))},snapshot:function(t){var n=this;this.showSnapshot=!0,this.currentRoom=t,this.ajax.getJSON("/api/snapshot?stream="+this.currentRoom.StreamPath).then((function(t){return n.snapshotData=t}))},audioTag:function(t){var n=this;this.showTag=!0,this.currentRoom=t,this.ajax.get("/api/tagRaw?stream="+this.currentRoom.StreamPath+"&t=a",(function(t){n.tagData="",t=new Uint8Array(t);for(var e=0;e<t.length;n.tagData+="\n")for(var a=0;a<16&&e<t.length;a++,e++){var o=t[e].toString(16).toUpperCase();1==o.length&&(o="0"+o),n.tagData+=" "+o}}),"arraybuffer")},videoTag:function(t){var n=this;this.showTag=!0,this.currentRoom=t,this.ajax.get("/api/tagRaw?stream="+this.currentRoom.StreamPath+"&t=v",(function(t){n.tagData="",t=new Uint8Array(t);for(var e=0;e<t.length;n.tagData+="\n")for(var a=0;a<16&&e<t.length;a++,e++){var o=t[e].toString(16).toUpperCase();1==o.length&&(o="0"+o),n.tagData+=" "+o}}),"arraybuffer")}},computed:{largeARCflag:function(){var t=this.pubIndex-this.firstIndex;return t<0&&(t+=256),t>128?1:0}},destroyed:function(){W&&W.close()}},Q=q,X=(e("2445"),Object(h["a"])(Q,B,K,!1,null,"db125596",null)),Y=X.exports;a["default"].config.productionTip=!1,window.Vue=a["default"];var Z={"":"K",K:"M",M:"G",G:null};function tt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t>1024&&Z[n]?tt(t/1024,Z[n]):t.toFixed(2).replace(".00","")+n+"B"}a["default"].prototype.ajax=window.ajax,a["default"].prototype.unitFormat=tt,a["default"].component("StartTime",U),a["default"].component("m-button",L),a["default"].component("stream-table",Y),new a["default"]({store:y,render:function(t){return t(g)}}).$mount("#app")},7361:function(t,n,e){"use strict";var a=e("a95c"),o=e.n(a);o.a},"76cb":function(t,n,e){"use strict";var a=e("da19"),o=e.n(a);o.a},a95c:function(t,n,e){},da19:function(t,n,e){}});
//# sourceMappingURL=app.fa771745.js.map