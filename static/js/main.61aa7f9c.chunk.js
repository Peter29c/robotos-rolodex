(this["webpackJsonpmosters-rolodex"]=this["webpackJsonpmosters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,o){e.exports=o(18)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(2),c=o.n(r),s=(o(13),o(3)),l=o(4),i=o(6),u=o(5),h=o(7),d=(o(14),o(15),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.roboto.id,"?set=set1&size=180x180"),alt:""}),a.a.createElement("h2",null," ",e.roboto.name," "),a.a.createElement("p",null," ",e.roboto.email," "))}),m=(o(16),function(e){return a.a.createElement("div",{className:"card-list"},e.robotos.map((function(e){return a.a.createElement(d,{key:e.id,roboto:e})})))}),f=(o(17),function(e){var t=e.placeholder,o=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:o})}),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={robotos:[],searchField:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robotos:t})})).catch((function(e){return console.log("I have errored")}))}},{key:"render",value:function(){var e=this.state,t=e.robotos,o=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(o.toLocaleLowerCase())||e.email.toLowerCase().includes(o.toLocaleLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"ff-odsans principal-title"},"Robotos Rolodex"),a.a.createElement(f,{placeholder:"search robotos",handleChange:this.handleChange}),a.a.createElement(m,{robotos:n}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.61aa7f9c.chunk.js.map