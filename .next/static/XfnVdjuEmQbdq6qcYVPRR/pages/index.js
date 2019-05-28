(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{H0SL:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("cMU6");return{page:e.default||e}}])},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=l.apply(null,n);s&&e.push(s)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},cMU6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=(a("+m2t"),a("TstN"),function(){return l.a.createElement("a",{className:"logo",href:"/"},l.a.createElement("img",{className:"logo__image",src:"static/images/logo.svg",alt:"Zano"}),l.a.createElement("span",{className:"logo__text"},"Zano"))}),s=a("TSYQ"),i=a.n(s),o=[{title:"Home",link:"https:/zano.org"},{title:"Coinswap",link:"/"},{title:"Blog",link:"https://medium.com/@zano_project"},{title:"Rescources",link:"https://docs.zano.org/"}],c=[{title:"twitter",link:"https://twitter.com/zano_project"},{title:"medium",link:"https://medium.com/@zano_project"},{title:"discord",link:"https://discord.gg/wE3rmYY"},{title:"telegram",link:"https://t.me/zanocoin"}],u={hero:[{title:"Zano"},{title:"Coin",blue:!0},{title:"Swap"}],how:[{title:"How"},{title:"to"},{title:"Swap"},{title:"Your"},{title:"Coins",blue:!0}],faq:[{title:"FAQ",blue:!1}]},m=[{icon:"step-one",title:"Step 1",subtitle:"Download the wallet",description:"Download the appropriate wallet app for your OS.",button:{title:"Download"}},{icon:"step-two",title:"Step 2",subtitle:"Create the wallet",description:"Create your wallet, this is the address you’ll use to swap your Boolberry (BBR) coins. Make sure you store your seed phrase in a safe place."},{icon:"step-three",title:"Step 3",subtitle:"Swap the coins",description:"Send the swap transaction from your BBR wallet; it will be marked as a Zano transaction in your wallet. After this step, your BBR coins will be no longer accessible."},{icon:"step-four",title:"Step 4",subtitle:"Confirm the receipt of your coins in your Zano wallet",description:"After 20 confirmations your Zano coins will arrive at the address you specified."}],d=[{title:"What is Zano total supply?",description:"Total Zano supply is equal to Total Boolberry supply which is 18,446,744. Initial exchange ratio is 1:1."},{title:"What’s the ratio?",description:"For the first three month of the swap ratio is fixed at 1:1 and later will gradually decrease until the end of the swap period, that should be one-year total. More details could be found in Coinswap Whitepaper available here."},{title:"How long coins swap will run?",description:"One year."},{title:"How long coins swap will run?",description:"One year."},{title:"How many coins reserved for the swap?",description:"Current Boolberry supply +20% premine for a development fund."},{title:"What will happen with unswapped coins?",description:"After the swap is concluded the remaining unswapped coins will be added back to emission to be later distributed as block reward and 20% of it will be kept for developer fund."},{title:"Why aren’t the unswapped coins being burned?",description:"Lower supply means low liquidity and higher risk of PoW double spend attack due to cheap hash power. This is less critical for a Hybrid PoW/PoS blockchain such as Zano but it’s still an important factor."},{title:"What if I store my coins on exchange?",description:"You can still send them to your Zano address, it doesn’t matter where they came from."},{title:"Is swap reversable?",description:"No, this is irreversible transaction so please make sure you absolutely understand what are you doing before sending your BBR coins to your Zano wallet."}],p=function(){return l.a.createElement("nav",{className:"navigation"},o.map(function(e,t){return l.a.createElement("a",{className:i()("navigation__link",{disabled:1===t}),href:e.link,key:t},e.title)}))},h=function(e){return l.a.createElement("span",{className:i()("icon",e.title)})},E=function(){return l.a.createElement("ul",{className:"social"},c.map(function(e,t){return l.a.createElement("li",{className:"social__el",key:t},l.a.createElement("a",{className:"social__link",href:e.link,title:e.title},l.a.createElement(h,{title:e.title})))}))},f=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement(r,null),l.a.createElement(p,null),l.a.createElement(E,null),l.a.createElement("span",{className:"copyright"},"Copyright © 2019 ZANO.org"))},w=function(){return l.a.createElement("header",{className:"header",id:"header"},l.a.createElement("div",{className:i()("header__wrap","container")},l.a.createElement("div",{className:"header__left"},l.a.createElement(r,null)),l.a.createElement("div",{className:"header__center"},l.a.createElement(p,null)),l.a.createElement("div",{className:"header__right"},l.a.createElement(E,null))))},N=[{title:"Github",link:"https://github.com/hyle-team/zano"}],v=function(){return l.a.createElement("section",{className:"section hero"},l.a.createElement(I,{title:u.hero,shadow:"Coinswap",centred:!0}),l.a.createElement("p",{className:"section__text"},"Boolberry holders can swap their coins for Zano, learn more in the whitepaper and FAQ below."),l.a.createElement("div",{className:"buttons"},l.a.createElement(D,{className:"hero-button",items:N},l.a.createElement("span",null,"Whitepaper"),l.a.createElement(h,{title:"triangle"})),l.a.createElement(q,{className:"hero-button"},"Manual"),l.a.createElement(Z,null)))},b={counterTotal:{text:[{title:"Total"}],shadow:"Total",counter:"18,446,744"},counterDone:{text:[{title:"Coins"},{title:"Swapped"}],shadow:"Swapped",counter:"0"},periodCurrent:{title:{text:[{title:"Now"}],shadow:"Now"},periodNum:2,monthFirst:{title:"April",day:1},monthSecond:{title:"May",day:31},ratio:{bbr:1,zan:50}},periodNext:{title:{text:[{title:"Next"}],shadow:"Next"},periodNum:3,monthFirst:{title:"July",day:1},monthSecond:{title:"September",day:31},ratio:{bbr:1,zan:25}}},y=function(){return l.a.createElement("section",{className:"section visualization container"},l.a.createElement("div",{className:"titles"},l.a.createElement("div",{className:"left"},l.a.createElement(I,{title:b.counterTotal.text,shadow:b.counterTotal.shadow,shadowAlign:"left",small:!0}),l.a.createElement("div",{className:"count"},l.a.createElement("span",null,b.counterTotal.counter),l.a.createElement("span",{className:"text-blue"}," BBR"))),l.a.createElement("div",{className:"right"},l.a.createElement(I,{title:b.counterDone.text,shadow:b.counterDone.shadow,shadowAlign:"right",small:!0}),l.a.createElement("div",{className:"count"},l.a.createElement("span",null,b.counterDone.counter),l.a.createElement("span",{className:"text-blue"}," BBR")))),l.a.createElement("div",{className:"chart"},l.a.createElement("img",{className:"chart__img",src:"../../../../static/images/chart.png",alt:"Chart"})),l.a.createElement("div",{className:"periods"},l.a.createElement("div",{className:"period current"},l.a.createElement(I,{title:b.periodCurrent.title.text,shadow:b.periodCurrent.title.shadow,shadowAlign:"left",small:!0}),l.a.createElement("div",{className:"period__data"},l.a.createElement("p",{className:"period__value"},l.a.createElement("span",null,"Period "),l.a.createElement("span",{className:"period__num"},b.periodCurrent.periodNum)),l.a.createElement("p",{className:"period__value"},l.a.createElement("span",null,b.periodCurrent.monthFirst.title," "),l.a.createElement("span",{className:"period__num"},b.periodCurrent.monthFirst.day,l.a.createElement("sup",null,"st")),l.a.createElement("span",null," – ",b.periodCurrent.monthSecond.title," "),l.a.createElement("span",{className:"period__num"},b.periodCurrent.monthSecond.day,l.a.createElement("sup",null,"st"))),l.a.createElement("p",{className:"period__value"},l.a.createElement("span",null,"Swap Ratio: "),l.a.createElement("span",{className:"period__num"},b.periodCurrent.ratio.bbr),l.a.createElement("span",null," BBR = "),l.a.createElement("span",{className:"period__num"},b.periodCurrent.ratio.zan),l.a.createElement("span",null," ZAN")))),l.a.createElement("div",{className:"period next"},l.a.createElement(I,{title:b.periodNext.title.text,shadow:b.periodNext.title.shadow,shadowAlign:"right",small:!0}),l.a.createElement("div",{className:"period__data"},l.a.createElement("p",{className:"period__value"},l.a.createElement("span",null,"Period "),l.a.createElement("span",{className:"period__num"},b.periodNext.periodNum)),l.a.createElement("p",{className:"period__value"},l.a.createElement("span",null,b.periodNext.monthFirst.title," "),l.a.createElement("span",{className:"period__num"},b.periodNext.monthFirst.day,l.a.createElement("sup",null,"st")),l.a.createElement("span",null," – ",b.periodNext.monthSecond.title," "),l.a.createElement("span",{className:"period__num"},b.periodNext.monthSecond.day,l.a.createElement("sup",null,"st"))),l.a.createElement("p",{className:"period__value"},l.a.createElement("span",null,"Swap Ratio: "),l.a.createElement("span",{className:"period__num"},b.periodNext.ratio.bbr),l.a.createElement("span",null," BBR = "),l.a.createElement("span",{className:"period__num"},b.periodNext.ratio.zan),l.a.createElement("span",null," ZAN"))))))},_=function(){return l.a.createElement("section",{className:"section how"},l.a.createElement("div",{className:"section-wrap container"},l.a.createElement("div",{className:"section-left"},l.a.createElement(I,{title:u.how,shadow:"How",centred:!0}),l.a.createElement("p",{className:"section-text"},"Every Boolberry holder is invited to participate. It can be done with either the Boolberry wallet or the exchange wallet; simply follow the steps described on the cards to the left. Swapped coins will no longer exist in the Boolberry network and this action is irreversible.")),l.a.createElement("div",{className:"section-right"},l.a.createElement(Q,{steps:m}))))},g=a("0iUn"),k=a("sLSF"),O=a("MI3g"),x=a("a7VT"),S=a("AT/M"),C=a("Tit0"),j=a("hfKm"),B=a.n(j);function M(e,t,a){return t in e?B()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var T=function(e){function t(e){var a;return Object(g.default)(this,t),a=Object(O.default)(this,Object(x.default)(t).call(this,e)),M(Object(S.default)(a),"changeActiveQuestion",function(e){return a.setState(function(){return{activeQuestion:e}})}),a.state={activeQuestion:0},a}return Object(C.default)(t,e),Object(k.default)(t,[{key:"render",value:function(){var e=this.state.activeQuestion,t={questions:d,active:e,onClick:this.changeActiveQuestion};return l.a.createElement("section",{className:"section faq container"},l.a.createElement(I,{title:u.faq,shadow:"Faq",centred:!0}),l.a.createElement(F,t))}}]),t}(l.a.Component),A=function(e){var t=e.children,a=e.className,n=e.disabled,r=e.blue,s=e.onClick;return l.a.createElement("button",{className:i()("button",a,{disabled:n,blue:r}),onClick:s},l.a.createElement("span",{className:"button-text"},t))};A.defaultProps={onClick:function(){}};var q=A,Z=function(e){function t(e){var a;return Object(g.default)(this,t),a=Object(O.default)(this,Object(x.default)(t).call(this,e)),M(Object(S.default)(a),"updateDistance",function(){var e=a.calculateTime();a.setState(function(){return{distance:e}})}),M(Object(S.default)(a),"calculateTime",function(){var e=(new Date).getTime(),t=a.futureDate-e,n={days:[0,0],hours:[0,0],minutes:[0,0],seconds:[0,0]};return n.days=Math.floor(t/864e5).toString().split(""),n.hours=Math.floor(t%864e5/36e5).toString().split(""),n.minutes=Math.floor(t%36e5/6e4).toString().split(""),n.seconds=Math.floor(t%6e4/1e3).toString().split(""),n}),a.futureDate=new Date("1 Mar, 2020").getTime(),a.timer=null,a.state={distance:{days:[0,0],hours:[0,0],minutes:[0,0],seconds:[0,0]}},a}return Object(C.default)(t,e),Object(k.default)(t,[{key:"componentDidMount",value:function(){this.timeout=setInterval(this.updateDistance,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.timer=null}},{key:"render",value:function(){var e=this.state.distance;return l.a.createElement("div",{className:"countdown"},l.a.createElement("h4",{className:"countdown-title"},"Coinswap ends in"),l.a.createElement("div",{className:"countdown-time"},l.a.createElement("div",{className:"countdown-section"},l.a.createElement("span",{className:"countdown-section-data"},e.days.map(function(e,t){return l.a.createElement("span",{className:"countdown-item",key:t},e)})),l.a.createElement("span",{className:"countdown-section-title"},"Days")),l.a.createElement("div",{className:"countdown-section"},l.a.createElement("span",{className:"countdown-section-data"},e.hours.map(function(e,t){return l.a.createElement("span",{className:"countdown-item",key:t},e)})),l.a.createElement("span",{className:"countdown-section-title"},"Hours")),l.a.createElement("div",{className:"countdown-section"},l.a.createElement("span",{className:"countdown-section-data"},e.minutes.map(function(e,t){return l.a.createElement("span",{className:"countdown-item",key:t},e)})),l.a.createElement("span",{className:"countdown-section-title"},"Minutes")),l.a.createElement("div",{className:"countdown-section"},l.a.createElement("span",{className:"countdown-section-data"},e.seconds.map(function(e,t){return l.a.createElement("span",{className:"countdown-item",key:t},e)})),l.a.createElement("span",{className:"countdown-section-title"},"Seconds"))))}}]),t}(l.a.Component),D=function(e){function t(e){var a;return Object(g.default)(this,t),a=Object(O.default)(this,Object(x.default)(t).call(this,e)),M(Object(S.default)(a),"onMouseEnter",function(){return a.setState(function(){return{menuOpened:!0}})}),M(Object(S.default)(a),"onMouseLeave",function(){return a.setState(function(){return{menuOpened:!1}})}),a.state={menuOpened:!1},a}return Object(C.default)(t,e),Object(k.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.items,n=this.state.menuOpened;return l.a.createElement("div",{className:i()("drop-down",t,{opened:n}),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},l.a.createElement(q,{className:"drop-down-toggler",blue:!0},this.props.children),l.a.createElement("div",{className:i()("drop-down-menu",{visible:this.state.menuOpened})},a.map(function(e,t){return l.a.createElement("a",{className:"drop-down-link",key:t,href:e.link,target:"_blank"},e.title)})))}}]),t}(l.a.Component),z=function(e){var t=e.questions,a=e.active,n=e.onClick;return!!t.length&&l.a.createElement("ul",{className:"questions"},t.map(function(e,t){return l.a.createElement("li",{className:i()("question",{active:a===t}),key:t,onClick:function(){return n(t)}},l.a.createElement("div",{className:"question__header"},l.a.createElement("span",{className:"question__icon"}),l.a.createElement("h5",{className:"question__title"},e.title)),l.a.createElement("p",{className:"question__description"},e.description))}))};z.defaultProps={questions:[],active:0};var F=z,P=a("UXZV"),R=a.n(P);function H(){return(H=R.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var W=function(e){var t=e.classNames,a=e.icon,n=e.title,r=e.active,s=e.subtitle,o=e.description,c=e.button;return l.a.createElement("div",{className:i()("step",t,{"step-active":r})},l.a.createElement("div",{className:"step-title"},l.a.createElement(h,{title:a}),l.a.createElement("span",{className:"step-title-text"},n)),l.a.createElement("h5",{className:"step-subtitle"},s),l.a.createElement("p",{className:"step-description"},o),c&&l.a.createElement(q,{className:"step-button",blue:!0},c.title))},Q=function(e){function t(e){var a;return Object(g.default)(this,t),(a=Object(O.default)(this,Object(x.default)(t).call(this,e))).state={active:0},a}return Object(C.default)(t,e),Object(k.default)(t,[{key:"render",value:function(){var e=this.props.steps,t=this.state.active;return l.a.createElement("div",{className:"steps"},e.map(function(e,a){return l.a.createElement(W,H({},e,{active:a===t,key:a}))}))}}]),t}(l.a.Component),I=function(e){return l.a.createElement("h1",{className:i()("title",{centred:e.centred,small:e.small})},e.title.map(function(e,t){return l.a.createElement("span",{className:i()("title__word",{blue:e.blue}),key:t},e.title)}),l.a.createElement("span",{className:i()("title__shadow",e.shadowAlign)},e.shadow))};t.default=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null),l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement(_,null),l.a.createElement(T,null),l.a.createElement(f,null))}}},[["H0SL","5d41","9da1","ad9d"]]]);