(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/reactjs.47ce6e77.png"},19:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),s=(a(25),a(26),a(2)),i=a(3),o=a(5),m=a(4),u=a(6),p=(a(27),a(28),function(e){var t=e.data;return l.a.createElement("div",{className:"post-box"},l.a.createElement("h3",{className:"title-post"},t.title.length>=50?t.title.slice(0,50)+"...":t.title),l.a.createElement("hr",null),l.a.createElement("p",{className:"body-post"},t.body.length>=250?t.body.slice(0,250)+"...":t.body),l.a.createElement("span",null,"0 Likes"),l.a.createElement("button",{className:"btn-like"},"Like"),l.a.createElement("button",{className:"btn-read"},"Read more..."))}),h=a(17),g=a.n(h),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={posts:[],paginate:{first:0,last:4}},a.changePaginateFirst=function(){var e=a.state.paginate;e.first=e.first-4,e.last=e.last-4,a.setState({paginate:e})},a.changePaginateLast=function(){var e=a.state.paginate;e.first=e.first+4,e.last=e.last+4,a.setState({paginate:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){e.setState({posts:t.data})})}},{key:"render",value:function(){var e=this.state.paginate.first,t=this.state.paginate.last,a=this.state.posts;return l.a.createElement("div",{className:"article-page"},l.a.createElement("h3",{className:"header"},"Articles"),l.a.createElement("hr",null),a.slice(e,t).map(function(e){return l.a.createElement(p,{key:e.id,data:e})}),l.a.createElement("div",{className:"paginate"},l.a.createElement("button",{className:"btn-prev",onClick:this.changePaginateFirst,disabled:0===e},"Prev"),l.a.createElement("button",{className:"btn-next",onClick:this.changePaginateLast,disabled:e===a.length-4},"Next")),l.a.createElement("hr",null))}}]),t}(n.Component),f=a(18),b=a.n(f),E=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",null,"Hello Egin10.")))}}]),t}(n.Component);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(d,null),l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright\xa92019.",l.a.createElement("a",{href:"https://github.com/egin10",target:"_blank"},"egin10"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.30f0c6b0.chunk.js.map