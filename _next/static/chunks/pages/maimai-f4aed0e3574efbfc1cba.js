_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{HyLH:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t("o0o1"),r=t.n(n),i=t("HaE+");function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(c){r=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return s(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t("nKUr"),u=t("q1tI"),d=t.n(u),f=t("vDqi"),m=t.n(f),h=t("vFsZ"),g=t("IfJ9"),p=t("nhtP"),v=t("SJpO"),b={name:"",artist:"",level:"",genre:"",difficulty:""},j=t("dVpa"),x=t.n(j);function y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?y(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var E=m.a.create({baseURL:"https://kingofboxes.mxblue.net.au:4000/"}),w={heading:"Maimai DX",description:["Maimai DX is an arcade rhythm game with eight buttons spaced around in a circle. \n  Below are a list of songs available on the machine (the international version), \n  as the song list on the official site is not up-to-date.",'Every song is either a "Deluxe" or "Standard" song, and is specified by the logo. If it is a Deluxe song,\n  the font color is rainbow, and if it is a Standard song, the font color is white. Deluxe songs\n  are exclusive to Maimai DX, and some songs may even have both Deluxe and Standard versions! The genre\n  for each song is located in the top right corner.',"Each song has a minimum of four difficulties: BASIC, ADVANCED, EXPERT and MASTER.\n  Some songs have a fifth difficulty, RE:MASTER, which is harder than MASTER. The difficulty levels\n  of the songs range from 1 to 15, and there is only currently one song that is Level 15.","I do not own any of the images or songs, all ownership belongs to SEGA."]},S=function(e){var a=c(d.a.useState(!1),2),t=a[0],n=a[1],r=c(d.a.useState(5),2),i=r[0],o=r[1],s=c(d.a.useState(e.record),2),u=s[0],f=s[1],m=c(d.a.useState(b),2),j=m[0],y=m[1],E=function(e){var a=[],t=[];return e.forEach((function(e){a.includes(e.genre)||a.push(e.genre)})),a.map((function(e){t.push({key:e,text:e,value:e})})),t}(e.record),S=function(e){var a=[],t=[],n=[],r=[];return e.forEach((function(e){Object.keys(e.data).map((function(t){if(!a.includes(e.data[t].level)){var r=e.data[t].level.replace("+",".5");n.push(Number(r)),a.push(e.data[t].level)}}))})),n.sort((function(e,a){return e-a})),n.forEach((function(e){var a=String(e).replace(".5","+");t.push(a)})),t.map((function(e){r.push({key:e,text:e,value:e})})),r}(e.record),O=function(){var e=[];return["BASIC","ADVANCED","EXPERT","MASTER","REMASTER"].map((function(a){e.push({key:a,text:a,value:a})})),e}();d.a.useEffect((function(){var e=function(){var e=document.body.scrollHeight;window.scrollY+window.innerHeight>=e&&u&&i<u.length&&(n(!0),setTimeout((function(){n(!1),o(i+10)}),500))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[u,i]);var M=function(a){var t,n=e.record;""!==a.name&&(t=new RegExp("^".concat(a.name),"i"),n=n.filter((function(e){return t.test(e.song)}))),""!==a.artist&&(t=new RegExp("^".concat(a.artist),"i"),n=n.filter((function(e){return t.test(e.artist)}))),""!==a.genre&&(t=new RegExp(a.genre,"i"),n=n.filter((function(e){return t.test(e.genre)}))),""!==a.level&&(n=function(e,a){var t=a.replace("+","\\+"),n=[],r=new RegExp("^".concat(t,"$"),"i");return e.forEach((function(e){Object.keys(e.data).map((function(a){r.test(e.data[a].level)&&n.push(e)}))})),n=n.filter((function(e,a){return n.indexOf(e)===a}))}(n,a.level)),""!==a.level&&""!==a.difficulty&&(n=function(e,a,t){var n=a.replace("+","\\+"),r=[],i=new RegExp("^".concat(n,"$"),"i");return e.forEach((function(e){e.data[t]&&i.test(e.data[t].level)&&r.push(e)})),r=r.filter((function(e,a){return r.indexOf(e)===a}))}(n,a.level,a.difficulty)),f(n),y(a)};return Object(l.jsxs)(p.a,{title:"Maimai DX Song List | Justin's Website",children:[Object(l.jsx)(g.a,{data:w}),Object(l.jsx)("h2",{children:"Song List"}),Object(l.jsx)("div",{className:x.a.search,children:Object(l.jsxs)(h.a,{inverted:!0,children:[Object(l.jsxs)(h.a.Group,{widths:"equal",children:[Object(l.jsx)(h.a.Input,{clearable:!0,fluid:!0,label:"Song Name:",placeholder:"Search by song name...",value:j.name,onChange:function(e){var a=_(_({},j),{},{name:e.target.value});M(a)}}),Object(l.jsx)(h.a.Input,{clearable:!0,fluid:!0,label:"Artist:",placeholder:"Search by artist...",value:j.artist,onChange:function(e){var a=_(_({},j),{},{artist:e.target.value});M(a)}}),Object(l.jsx)(h.a.Dropdown,{clearable:!0,fluid:!0,label:"Genre:",selection:!0,placeholder:"Filter by genre...",options:E,onChange:function(e,a){var t=String(a.value),n=_(_({},j),{},{genre:t});M(n)}})]}),Object(l.jsxs)(h.a.Group,{widths:"equal",children:[Object(l.jsx)(h.a.Dropdown,{clearable:!0,fluid:!0,label:"Difficulty:",selection:!0,placeholder:"Filter by difficulty...",options:O,onChange:function(e,a){var t=String(a.value),n=_(_({},j),{},{difficulty:t});M(n)}}),Object(l.jsx)(h.a.Dropdown,{clearable:!0,fluid:!0,label:"Level:",selection:!0,placeholder:"Filter by level...",options:S,onChange:function(e,a){var t=String(a.value),n=_(_({},j),{},{level:t});M(n)}})]})]})}),u&&u.map((function(e,a){if(a<i)return Object(l.jsx)(v.MaimaiSongComponent,{song:e},e.id)})),t&&Object(l.jsx)(v.MaimaiSongLoader,{})]})};S.getInitialProps=Object(i.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/maimai");case 2:return a=e.sent,t=a.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));var O=S},SJpO:function(e,a,t){"use strict";var n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.MaimaiSongLoader=a.MaimaiSongComponent=void 0;var r=t("nKUr"),i=(n(t("q1tI")),t("FvIY")),o=n(t("dVpa")),s=function(e){var a=e.song;return(0,r.jsxs)("div",{className:o.default.container,children:[(0,r.jsx)("div",{className:o.default.album,children:(0,r.jsx)("img",{src:a.cover,alt:"".concat(a.song,"-album-cover")})}),(0,r.jsxs)("div",{className:o.default.info,children:[(0,r.jsxs)("div",{className:o.default.header,children:["DELUXE"===a.version&&(0,r.jsx)("div",{className:o.default.version,children:(0,r.jsx)("img",{src:"https://maimaidx-eng.com/maimai-mobile/img/music_dx.png"})}),"STANDARD"===a.version&&(0,r.jsx)("div",{className:o.default.version,children:(0,r.jsx)("img",{src:"https://maimaidx-eng.com/maimai-mobile/img/music_standard.png"})}),(0,r.jsx)("span",{className:o.default.genre,children:a.genre})]}),(0,r.jsxs)("div",{className:o.default.details,children:[(0,r.jsx)("span",{className:o.default.songname,children:a.song}),(0,r.jsx)("hr",{}),(0,r.jsx)("span",{className:o.default.artist,children:a.artist})]}),(0,r.jsx)("div",{className:o.default.difficulty,children:Object.keys(a.data).map((function(e){var t=a.data[e].score?"PB: ".concat(a.data[e].score.toFixed(4),"% (").concat(a.data[e].rank,")"):"";return t?(0,r.jsx)(i.Popup,{content:t,trigger:(0,r.jsx)("div",{className:o.default[e],children:a.data[e]&&a.data[e].level})},"".concat(a.id,"-").concat(e)):(0,r.jsx)("div",{className:o.default[e],children:a.data[e]&&a.data[e].level})}))})]})]},a.id)};a.MaimaiSongComponent=s;var c=function(){return(0,r.jsxs)(i.Segment,{children:[(0,r.jsx)(i.Dimmer,{active:!0,children:(0,r.jsx)(i.Loader,{size:"big",children:"Loading"})}),(0,r.jsx)(i.Image,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"}),(0,r.jsx)(i.Image,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"}),(0,r.jsx)(i.Image,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]})};a.MaimaiSongLoader=c,e.exports={MaimaiSongComponent:s,MaimaiSongLoader:c}},dVpa:function(e,a,t){e.exports={container:"Maimai_container__1bz6i",album:"Maimai_album__2wC7q",info:"Maimai_info__tg7EQ",header:"Maimai_header__21xQ-",details:"Maimai_details__69TwU",songname:"Maimai_songname__3Yqm0",artist:"Maimai_artist__1gzyf",version:"Maimai_version__3t-xx",difficulty:"Maimai_difficulty__1zQ-E",BASIC:"Maimai_BASIC__1O5fN",ADVANCED:"Maimai_ADVANCED__1WYQN",EXPERT:"Maimai_EXPERT__3yeY_",MASTER:"Maimai_MASTER__3OZYN",REMASTER:"Maimai_REMASTER__2buiu",search:"Maimai_search__1CXjS",genre:"Maimai_genre__3r1Bp"}},fDYi:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maimai",function(){return t("HyLH")}])}},[["fDYi",0,2,4,1,3,5,6]]]);