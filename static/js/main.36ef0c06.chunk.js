(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a.n(c),l=a(6),i=a.n(l),r=(a(52),a(7)),m=a(8),o=a(11),d=a(10),h=a(12),u=(a(53),null),E=null,b=null,v=function(e){return document.getElementById(e)},N=[],f=new Image,y="snow32.png";var g=function(){function e(t,a,n){Object(r.a)(this,e),this.speed=(Math.floor(5*Math.random())+1)/2,this.yure=(Math.floor(3*Math.random())+1)/3,this.x=t,this.y=a,this._angle=Math.floor(2*Math.random())?this.yure/2:-this.yure/2,this.angle=this._angle,this.rad=0,this.image=new Image,this.image=n}return Object(m.a)(e,[{key:"move",value:function(){this.rad=this.angle*Math.PI/180,b.save();var e=this.x+this.image.width/2,t=this.y+this.image.height/2;return b.setTransform(Math.cos(this.rad),Math.sin(this.rad),-Math.sin(this.rad),Math.cos(this.rad),e-e*Math.cos(this.rad)+t*Math.sin(this.rad),t-e*Math.sin(this.rad)-t*Math.cos(this.rad)),b.drawImage(this.image,this.x,this.y),b.restore(),this.angle+=this._angle,this.angle>360&&(this.angle=0),this.x=this.x+Math.sin((this.y+this.speed)*Math.PI/180)*this.yure,this.y=this.y+this.speed,!(this.y>E.height)}}]),e}();function p(){b.fillStyle="rgb(200, 200, 200)",b.fillRect(0,0,E.width,E.height);for(var e=0;e<N.length;e++){var t=N[e];t&&!t.move()&&delete N[e]}Math.random()>n&&function(e){for(var t=0;t<N.length+1;t++)if(null==N[t]){N[t]=e,console.log("addObject() "+t);break}}(new g(Math.random()*E.width,0-150*Math.random(),f)),requestAnimationFrame(p)}function x(){E.width=u.offsetWidth,E.height=u.offsetHeight}window.addEventListener("resize",(function(){x()})),window.addEventListener("load",(function(){u=v("wrapper"),E=v("canvas"),b=E.getContext("2d"),x(),N=[],n=.95,f.src=y,f.onload=function(){b.drawImage(f,-1e3,-1e3)},b.clearRect(0,0,E.width,E.height),p()}));var k=a(44),w=a.n(k),j=a(13),O=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={linkLine:{textDecoration:"none"}};return s.a.createElement("div",{className:"home__main"},s.a.createElement("div",{className:"My-portfolio"},s.a.createElement("img",{src:w.a,className:"Home-img",alt:"logo"}),s.a.createElement(j.b,{style:e.linkLine,to:"/About"},s.a.createElement("div",{className:"About"},s.a.createElement("div",{className:"About-text"},"About"))),s.a.createElement(j.b,{style:e.linkLine,to:"/Work"},s.a.createElement("div",{className:"Work"},s.a.createElement("div",{className:"Work-text"},"Work"))),s.a.createElement(j.b,{style:e.linkLine,to:"/Contact"},s.a.createElement("div",{className:"Contact"},s.a.createElement("div",{className:"Contact-text"},"Contact")))))}}]),t}(s.a.Component),M=(a(58),a(24)),C=a.n(M),A=a(25),W=a.n(A),z=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={imgSize:{width:"300px",height:"50px"},textPosition:{textAlign:"right"}};return s.a.createElement("div",{className:"about-main"},s.a.createElement("div",{className:"introduction-container"},s.a.createElement("ul",{className:"myself"},s.a.createElement("div",{className:"myself-title"},"\u79c1\u306b\u3064\u3044\u3066"),s.a.createElement("li",{className:"myself-list"},s.a.createElement("div",{className:"myself-list-text"},s.a.createElement("img",{src:C.a,className:"myself-background",alt:"\u30d4\u30f3\u30af\u306e\u82b1\u80cc\u666f",style:e.imgSize}),s.a.createElement("div",{className:"myself-text"},s.a.createElement("div",{className:"introduction-myself-text"},"Reina Kato")))),s.a.createElement("li",{className:"myself-list"},s.a.createElement("div",{className:"myself-list-text"},s.a.createElement("img",{src:W.a,className:"hobby-background",alt:"\u767d\u306e\u82b1\u80cc\u666f",style:e.imgSize}),s.a.createElement("div",{className:"myself-text"},s.a.createElement("div",{className:"introduction-myself-text"},"Kanagawa")))),s.a.createElement("li",{className:"myself-list"},s.a.createElement("div",{className:"myself-list-text"},s.a.createElement("img",{src:C.a,className:"myself-background",alt:"\u30d4\u30f3\u30af\u306e\u82b1\u80cc\u666f",style:e.imgSize}),s.a.createElement("div",{className:"myself-text"},s.a.createElement("div",{className:"introduction-myself-text"},"1994.10"))))),s.a.createElement("ul",{className:"hobby"},s.a.createElement("div",{className:"hobby-title"},"\u597d\u304d\u306a\u3053\u3068"),s.a.createElement("li",{className:"hobby-list"},s.a.createElement("div",{className:"hobby-list-text"},s.a.createElement("img",{src:W.a,className:"hobby-background",alt:"\u767d\u306e\u82b1\u80cc\u666f",style:e.imgSize}),s.a.createElement("div",{className:"hobby-text"},s.a.createElement("div",{className:"introduction-hobby-text"},"\u6599\u7406")))),s.a.createElement("li",{className:"hobby-list"},s.a.createElement("div",{className:"hobby-list-text"},s.a.createElement("img",{src:C.a,className:"myself-background",alt:"\u30d4\u30f3\u30af\u306e\u82b1\u80cc\u666f",style:e.imgSize}),s.a.createElement("div",{className:"hobby-text"},s.a.createElement("div",{className:"introduction-hobby-text"},"\u30a2\u30a4\u30c9\u30eb\u9451\u8cde")))),s.a.createElement("li",{className:"hobby-list"},s.a.createElement("div",{className:"hobby-list-text"},s.a.createElement("img",{src:W.a,className:"hobby-background",alt:"\u767d\u306e\u82b1\u80cc\u666f",style:e.imgSize}),s.a.createElement("div",{className:"hobby-text"},s.a.createElement("div",{className:"introduction-hobby-text"},"\u6563\u6b69")))))),s.a.createElement("div",{className:"about-title-text",style:e.textPosition},s.a.createElement("div",{className:"text-a"},"A"),s.a.createElement("div",{className:"text-b"},"b"),s.a.createElement("div",{className:"text-o"},"o"),s.a.createElement("div",{className:"text-u"},"u"),s.a.createElement("div",{className:"text-t"},"t")))}}]),t}(s.a.Component),I=(a(59),a(33)),S=a.n(I),L=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wepper"},s.a.createElement("div",{className:"work-main"},s.a.createElement("div",{className:"work-title-text"},s.a.createElement("div",{className:"text-w"},"W"),s.a.createElement("div",{className:"text-o"},"o"),s.a.createElement("div",{className:"text-r"},"r"),s.a.createElement("div",{className:"text-k"},"k")),s.a.createElement("div",{className:"work1"},s.a.createElement("img",{src:S.a,className:"App-logo",alt:"\u4f5c\u54c11"})),s.a.createElement("div",{className:"work2"},s.a.createElement("img",{src:S.a,className:"App-logo",alt:"\u4f5c\u54c12"}))))}}]),t}(s.a.Component),_=(a(60),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"contact-main"},s.a.createElement("div",{className:"contact-container"},s.a.createElement("div",{className:"fab"},s.a.createElement("i",{className:"far fa-envelope"})),s.a.createElement("div",{className:"email-text"},"reina.kato@eras.jp")),s.a.createElement("div",{className:"contact-title-text",style:{textAlign:"right"}},s.a.createElement("div",{className:"text-c"},"C"),s.a.createElement("div",{className:"text-o"},"o"),s.a.createElement("div",{className:"text-n"},"n"),s.a.createElement("div",{className:"text-t"},"t"),s.a.createElement("div",{className:"text-a"},"a"),s.a.createElement("div",{className:"text-c"},"c"),s.a.createElement("div",{className:"text-t"},"t"))))}}]),t}(s.a.Component)),P=a(15),B=a(19),H=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"content"},s.a.createElement(j.a,{basename:"/"},s.a.createElement(B.Layout,null,s.a.createElement("div",{className:"header"},s.a.createElement(B.Navigation,null)),s.a.createElement(B.Drawer,null,s.a.createElement(B.Navigation,null,s.a.createElement(j.b,{to:"/"},s.a.createElement("div",{className:"icon-text"},s.a.createElement("i",{className:"fas fa-home"}),"Home")),s.a.createElement(j.b,{to:"/About"},s.a.createElement("div",{className:"icon-text"},s.a.createElement("i",{className:"far fa-heart"}),"About")),s.a.createElement(j.b,{to:"/Work"},s.a.createElement("div",{className:"icon-text"},s.a.createElement("i",{className:"fas fa-desktop"}),"Work")),s.a.createElement(j.b,{to:"/Contact"},s.a.createElement("div",{className:"icon-text"},s.a.createElement("i",{className:"far fa-paper-plane"}),"Contact"))))),s.a.createElement(P.a,{exact:!0,path:"/",component:O}),s.a.createElement(P.a,{exact:!0,path:"/about",component:z}),s.a.createElement(P.a,{exact:!0,path:"/work",component:L}),s.a.createElement(P.a,{exact:!0,path:"/contact",component:_})))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108),a(109);i.a.render(s.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,a){e.exports=a.p+"static/media/myself.729091bb.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/hobby.f429e067.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/plaid_img.f478cea5.jpeg"},44:function(e,t,a){e.exports=a.p+"static/media/background.b6a809a5.jpeg"},47:function(e,t,a){e.exports=a(110)},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.36ef0c06.chunk.js.map