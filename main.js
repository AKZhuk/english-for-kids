(()=>{"use strict";var t={887:(t,e,a)=>{a.r(e)},919:(t,e,a)=>{a.r(e)},37:(t,e,a)=>{a.r(e)},77:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;const i=a(199),r=a(178),o=a(628),s=a(713),n=a(471),d=a(586),c=a(914),l=a(679),m=a(725);e.App=class{constructor(){this.configRoutes=()=>{o.cards[0].forEach(((t,e)=>{this.router.add(`category/${e+1}`,(()=>{this.game.resetGame(),this.clearMain(),this.header.toggleActiveLink(`/#/category/${e+1}`),d.$(`a[href="/#/category/${e+1}"]`).classList.add("active-link");const t=o.cards[e+1];this.renderWordCards(t)}))})),this.router.add("statistic",(()=>{this.game.resetGame(),this.clearMain(),this.header.toggleActiveLink("/#/statistic"),this.main.element.appendChild(this.statistic.element),this.statistic.renderData()})),this.router.add("train",(()=>{this.game.resetGame(),this.clearMain(),this.header.toggleActiveLink("#/train"),this.renderWordCards(o.appState.trainWords)})),this.router.add("",(()=>{this.game.resetGame(),this.clearMain(),this.header.toggleActiveLink("#"),this.main.element.appendChild(this.categories.element)}))},this.renderWordCards=t=>{t.forEach((t=>{const e=new n.WordCard(t);e.render(),e.listen()})),o.appState.isGameMode&&new r.BaseComponent(this.main.element,"button",["btn","game__start-btn"],"Start Game").element.addEventListener("click",(()=>{this.game.newGame(t)}))},this.clearMain=()=>{this.main.element.innerHTML=""},this.header=new i.Header(o.cards[0]),this.main=new r.BaseComponent(document.body,"main",["main"]),this.router=new s.Router,this.header.listen(this.router),this.categories=new m.Categories,this.game=new c.Game(this.router),this.statistic=new l.Statistic}}},725:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Categories=void 0;const i=a(178),r=a(628),o=a(408);class s extends i.BaseComponent{constructor(){super(void 0,"section",["categories"]),this.cards=[],this.renderCategories=()=>{r.cards[0].forEach(((t,e)=>{const a=r.cards[e+1];this.cards.push(new o.CategoryCard(this,t,a,e+1))}))},this.renderCategories()}}e.Categories=s},408:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CategoryCard=void 0;const i=a(178);class r extends i.BaseComponent{constructor(t,e,a,i){super(t.element,"a",["card-container"]),this.element.setAttribute("href",`/#/category/${i}`),this.element.dataset.category=e,this.element.innerHTML=`\n      <div class="card">\n        <div class='img' style="background-image: url('./${a[0].image}')"></div>\n        <p class="card__description">${e}</p>\n      </div>\n    `}}e.CategoryCard=r},914:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;const i=a(178),r=a(628),o=a(586),s=a(679);e.Game=class{constructor(t){this.currentWord="",this.errorsCounter=0,this.newGame=t=>{r.appState.isGame||(r.appState.gameWords=[...t.sort((()=>Math.random()-.5))],this.rating=new i.BaseComponent(o.$(".main"),"div",["rating__container"]),r.appState.currentGameWord=r.appState.gameWords.shift(),r.appState.isGame=!0,o.$(".game__start-btn").innerText="repeat",o.$(".game__start-btn").classList.add("game__repeat-btn")),o.playAudio(r.appState.currentGameWord.audioSrc)},this.resetGame=()=>{r.appState.isGame=!1,r.appState.currentGameWord=void 0,r.appState.gameWords=[],this.errorsCounter=0},this.listen=()=>{o.$(".main").addEventListener("click",(t=>{var e,a;const i=t.target;!i.classList.contains("correct")&&i.classList.contains("card_game")&&r.appState.isGame&&(i.dataset.word===(null===(e=r.appState.currentGameWord)||void 0===e?void 0:e.word)?(this.handleCorrect(i),s.Statistic.update(i.dataset.word,"correct")):(this.handleError(),s.Statistic.update(null===(a=r.appState.currentGameWord)||void 0===a?void 0:a.word,"incorect")))}))},this.handleCorrect=t=>{o.playAudio("./audio/correct.mp3"),t.classList.add("correct"),0!==r.appState.gameWords.length?(this.rating.element.innerHTML+='<div class="rating__success rating"></div>',r.appState.currentGameWord=r.appState.gameWords.shift(),o.playAudio(r.appState.currentGameWord.audioSrc)):this.showResult()},this.handleError=()=>{o.playAudio("./audio/error.mp3"),this.errorsCounter++,this.rating.element.innerHTML+='<div class="rating__error rating"></div>'},this.showResult=()=>{r.appState.isGame=!1,this.errorsCounter?this.renderResult("failure",`${this.errorsCounter} mistakes`):this.renderResult("success")},this.renderResult=(t,e="")=>{o.$("main").innerHTML=`\n    <section class="congratulation">\n      <div class="congratulation__img ${t}"></div>\n      <h2 class="congratulation__text">${e}</h2>\n    </section>\n    `,o.playAudio(`./audio/${t}.mp3`),setTimeout((()=>{window.location.hash=""}),5e3)},this.router=t,this.rating=new i.BaseComponent(o.$(".main"),"div",["rating__container"]),this.listen()}}},199:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Header=void 0;const i=a(178),r=a(628),o=a(586);class s extends i.BaseComponent{constructor(t){super(document.body,"header",["header"]),this.toggleActiveLink=t=>{document.querySelectorAll(".sidenav a").forEach((e=>{e.classList.contains("active-link")&&e.classList.remove("active-link"),e.getAttribute("href")===t&&e.classList.add("active-link")}))},this.openButton=new i.BaseComponent(this.element,"span",["openBtn"]),this.openButton.element.innerHTML="&#9776;",this.element.innerHTML+=this.renderSideNav(t)}listen(t){this.element.addEventListener("click",(t=>{const e=t.target;e.classList.contains("openBtn")&&(o.$(".sidenav").classList.add("open"),o.$(".sidenav__overlay").classList.add("open")),e.classList.contains("close")&&(o.$(".sidenav").classList.remove("open"),o.$(".sidenav__overlay").classList.remove("open"))})),o.$("#gameCheck").addEventListener("input",(e=>{const a=e.target;a.toggleAttribute("checked"),r.appState.isGameMode=a.checked,document.body.classList.toggle("game__mode"),t.navigate(document.location.hash)}))}static renderLinks(t){let e="";return t.forEach(((t,a)=>{e+=`<a href="/#/category/${a+1}" class="close">${t}</a>`})),e+='<a href="/#/statistic" class="close">Statistic</a></a>',e}renderSideNav(t){return this.element.id="openBtn",`\n    <aside id="mySidenav" class="sidenav">\n      <ul class="sidenav__links">\n      <a  class="closebtn close">&times;</a>\n      <a href="#" class="close">Main page</a>\n      ${s.renderLinks(t)}\n      </ul>\n    </aside>\n    <div id="overlay" class="sidenav__overlay close"></div>\n    <div id="gameCheck" class="form-check form-switch">\n      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" >\n    </div>`}}e.Header=s},679:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Statistic=void 0;const i=a(178),r=a(628),o=a(586);class s extends i.BaseComponent{constructor(){super(o.$(".main"),"section",["statistic"]),this.render=()=>{this.element.innerHTML='\n    <button id="resetBtn" class="btn">Reset</button>\n    <a id="trainBtn" href="#/train" class="btn">Train difficult</a>\n    <div class="tableFixHead ">\n    <table class="table table-striped  table-hover sortable">\n      <thead>\n        <tr>\n          <th scope="col"  data-name="word">Word</th>\n          <th scope="col" data-name="translation">Translation</th>\n          <th scope="col" data-name="category">Category</th>\n          <th scope="col" data-name="trained">Trained</th>\n          <th scope="col" data-name="correct">Correct</th>\n          <th scope="col" data-name="incorect">Incorect</th>\n          <th scope="col" data-order="desc" data-name="result">%</th>\n        </tr>\n      </thead>\n      <tbody>\n      </tbody>\n    </table>\n    </div>'},this.renderData=()=>{let t=this.getAllStatistic();t=this.sortData(t),o.$("tbody").innerHTML="",t.forEach((t=>{o.$("tbody").innerHTML+=`<tr>\n      <th scope="row">${t.word}</th>\n      <td>${t.translation}</td>\n      <td>${t.category}</td>\n      <td>${t.trained}</td>\n      <td>${t.correct}</td>\n      <td>${t.incorect}</td>\n      <td>${t.result}%</td>\n      </tr>`}))},this.listen=()=>{o.$("#resetBtn").addEventListener("click",(()=>{this.setDefaultData(),this.renderData()})),o.$("#trainBtn").addEventListener("click",(()=>{const t=this.getDifficultWords(),e=r.cards.slice(1).reduce(((t,e)=>t.concat(e)));r.appState.trainWords=e.filter((e=>t.some((t=>e.word===t.word))))})),o.$("thead").addEventListener("click",(t=>{const e=t.target;"desc"===e.dataset.order?(e.dataset.order="asc",r.appState.orderBy="asc"):(o.$("[data-order]").removeAttribute("data-order"),e.dataset.order="desc",r.appState.orderBy="desc"),r.appState.sortBy=e.dataset.name,this.renderData()}))},this.setDefaultData=()=>{for(let t=1;t<r.cards.length;t++)r.cards[t].forEach((e=>{localStorage.setItem(e.word,JSON.stringify({word:e.word,translation:e.translation,category:r.cards[0][t-1],trained:0,correct:0,incorect:0,result:0}))}))},this.getAllStatistic=()=>{const t=[];return Object.keys(localStorage).forEach((e=>{const a=s.getWordStatistic(e);a&&t.push(a)})),t},this.sortData=t=>{let e=t;return e.sort(((t,e)=>e[r.appState.sortBy]>t[r.appState.sortBy]?1:e[r.appState.sortBy]<t[r.appState.sortBy]?-1:0)),"asc"===r.appState.orderBy&&(e=e.reverse()),e},this.getDifficultWords=()=>{let t=this.getAllStatistic();return t=t.filter((t=>t.incorect>0)),t.sort(((t,e)=>e.incorect-t.incorect)),t.slice(0,8)},this.render(),this.listen(),this.renderData(),localStorage.length<1&&this.setDefaultData()}}e.Statistic=s,s.calculateResult=(t,e)=>0===t?0:Math.ceil(t/(e+t)*100),s.getWordStatistic=t=>JSON.parse(localStorage.getItem(`${t}`)),s.update=(t,e)=>{const a=s.getWordStatistic(t);a[e]+=1,a.result=s.calculateResult(a.correct,a.incorect),localStorage.setItem(t,JSON.stringify(a))}},471:function(t,e,a){var i=this&&this.__awaiter||function(t,e,a,i){return new(a||(a=Promise))((function(r,o){function s(t){try{d(i.next(t))}catch(t){o(t)}}function n(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(s,n)}d((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.WordCard=void 0;const r=a(178),o=a(628),s=a(586),n=a(679);class d extends r.BaseComponent{constructor(t){super(s.$(".main"),"div",["card-container"]),this.render=()=>o.appState.isGameMode?this.renderGameCard():this.renderTrainCard(),this.renderGameCard=()=>`\n    <div class="card__bg">\n      <div class="card card_game" data-word="${this.word}" style="background-image: url('./${this.imageSRC}')" >\n      </div>\n    </div>`,this.renderTrainCard=()=>`\n    <div class="card">\n      <div class="card__front " >\n        <div class=" img" style="background-image: url('./${this.imageSRC}')"></div>\n        <div class="card__description">\n          <h5 class="description__title">${this.word}</h5>\n          <div  onclick="" class="card__rotate"></div>\n        </div>\n      </div>\n      <div class="card__back">\n        <div class="img" style="background-image: url('./${this.imageSRC}')"></div>\n        <div class="card__description">\n        <h5>${this.translation}</h5>\n        </div>\n      </div>\n    </div>`,this.listen=()=>{o.appState.isGameMode||(this.element.addEventListener("click",(()=>{s.playAudio(this.audioSRC),n.Statistic.update(this.word,"trained")})),this.element.querySelector(".card__rotate").addEventListener("click",(()=>i(this,void 0,void 0,(function*(){return this.flipToBack()})))),this.element.addEventListener("mouseleave",(()=>i(this,void 0,void 0,(function*(){this.isFlip&&this.flipToFront()})))))},this.flipToBack=()=>(this.isFlip=!0,this.flip(!0)),this.flipToFront=()=>this.flip(),this.flip=(t=!1)=>new Promise((e=>{this.element.classList.toggle("flip",t),this.element.addEventListener("transitionend",(()=>e()),{once:!0})})),this.isFlip=!1,this.imageSRC=t.image,this.audioSRC=`./${t.audioSrc}`,this.word=t.word,this.translation=t.translation,this.element.innerHTML=this.render()}}e.WordCard=d},178:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BaseComponent=void 0,e.BaseComponent=class{constructor(t,e="div",a=[],i=""){this.element=document.createElement(e),this.element.classList.add(...a),this.element.innerText=i,t&&t.appendChild(this.element)}}},628:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.cards=e.appState=void 0,e.appState={isGameMode:!1,isGame:!1,gameWords:[],currentGameWord:void 0,trainWords:[],sortBy:"result",orderBy:"desc"},e.cards=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes (set A)","Emotions","Food","Clothes (set B)"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fishing",translation:"ловить рыбу",image:"img/fishing.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"butter",translation:"масло",image:"img/butter.jpg",audioSrc:"audio/butter.mp3"},{word:"tea",translation:"чай",image:"img/tea.jpg",audioSrc:"audio/tea.mp3"},{word:"salt",translation:"соль",image:"img/salt.jpg",audioSrc:"audio/salt.mp3"},{word:"caviar",translation:"икра",image:"img/caviar.jpg",audioSrc:"audio/caviar.mp3"},{word:"sugar",translation:"сахар",image:"img/sugar.jpg",audioSrc:"audio/sugar.mp3"},{word:"flour",translation:"мука",image:"img/flour.jpg",audioSrc:"audio/flour.mp3"},{word:"pancake",translation:"блин",image:"img/pancake.jpg",audioSrc:"audio/pancake.mp3"},{word:"bean",translation:"фасоль",image:"img/bean.jpg",audioSrc:"audio/bean.mp3"}],[{word:"clothes",translation:"одежда",image:"img/clothes.png",audioSrc:"audio/clothes.mp3"},{word:"pajamas",translation:"пижама",image:"img/pajamas.jpg",audioSrc:"audio/pajamas.mp3"},{word:"buttons",translation:"пуговицы",image:"img/buttons.jpg",audioSrc:"audio/buttons.mp3"},{word:"gloves",translation:"перччатки",image:"img/gloves.jpg",audioSrc:"audio/gloves.mp3"},{word:"underpants",translation:"трусы",image:"img/underpants.jpg",audioSrc:"audio/underpants.mp3"},{word:"boots",translation:"ботинки",image:"img/boots.jpg",audioSrc:"audio/boots.mp3"},{word:"wellies",translation:"резиновые сапоги",image:"img/wellies.jpg",audioSrc:"audio/wellies.mp3"},{word:"raincoat",translation:"плащ",image:"img/raincoat.jpg",audioSrc:"audio/raincoat.mp3"}]]},713:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Router=void 0,e.Router=class{constructor(){this.routes=[],this.root="/english-for-kids/dist/",this.current=this.root,this.add=(t,e)=>(this.routes.push({path:t,cb:e}),this),this.clearSlashes=t=>t.toString().replace(/\/$/,"").replace(/^\//,""),this.getFragment=()=>{let t="";const e=window.location.href.match(/#(.*)$/);return t=e?e[1]:"",this.clearSlashes(t)},this.navigate=(t="")=>(window.location.href=`${window.location.href.replace(/#(.*)$/,"")}#${t}`,this.routes.some((e=>e.path===t&&(e.cb(),!0))),this),this.listen=()=>{clearInterval(this.intervalId),this.intervalId=setInterval(this.interval,50)},this.interval=()=>{this.current!==this.getFragment()&&(this.current=this.getFragment(),this.routes.some((t=>{const e=this.current.match(t.path);return!!e&&(e.shift(),t.cb.apply({},e),e)})))},this.listen(),this.intervalId=setInterval(this.interval,50)}}},586:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.playAudio=e.$=void 0,e.$=t=>document.querySelector(t),e.playAudio=t=>{const e=new Audio;e.currentTime=0,e.src=t,e.play()}}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,a),o.exports}a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=a(77);a(37),a(919),a(887),(new t.App).configRoutes()})()})();