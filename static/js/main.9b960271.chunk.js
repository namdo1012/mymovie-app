(this["webpackJsonpmoviedb-app"]=this["webpackJsonpmoviedb-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=a(2),l=a(3),i=a(6),u=a(4),h=a(5),m=a(7),p=a(18),d=a.n(p),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){a.props.onInputChange(e.target.value)},a.handleSearch=function(e){var t=a.props.apiUrl,n="".concat(t,"&s=").concat(a.props.s);"Enter"===e.key&&d()(n).then((function(e){var t=e.data;console.log(t);var n=t.Search;console.log(n),a.props.onSearch(n),a.setState({results:n})})).catch((function(e){alert(e)}))},a.state={s:"",results:[],selected:{}},a.handleInput=a.handleInput.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"searchbox-section"},r.a.createElement("input",{className:"searchbox",type:"text",placeholder:"Search for a movie...",onChange:this.handleInput,onKeyPress:this.handleSearch})))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.result;return(r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{className:"card-img-top",src:e.Poster,alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.Title),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere"),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go some"))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.results;return r.a.createElement("section",{className:"results-section"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"card-columns"},e.map((function(e){return r.a.createElement(f,{key:e.imdbID,result:e})})))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){a.setState({s:e})},a.handleSearch=function(e){a.setState({results:e})},a.state={s:"",results:[],selected:{}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.s,a=e.results;e.selected;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Movie Database")),r.a.createElement("main",null,r.a.createElement(b,{apiUrl:"http://www.omdbapi.com/?i=tt3896198&apikey=2911792a",s:t,onInputChange:this.handleInputChange,onSearch:this.handleSearch}),r.a.createElement(v,{results:a})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41),a(42);s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9b960271.chunk.js.map