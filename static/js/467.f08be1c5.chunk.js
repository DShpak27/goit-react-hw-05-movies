"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[467],{663:function(e,t,n){n.d(t,{Z:function(){return o}});n(791);var r="ErrorMessageBlock_errorMessage__rcMMp",a=n(184);var o=function(e){var t=e.errorDescription;return(0,a.jsxs)("p",{className:r,children:["An error occurred!",(0,a.jsx)("br",{}),"Type of error: '",t,"'.",(0,a.jsx)("br",{}),"Try again later..."]})}},12:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(689),a={movieList:"MovieList_movieList__pH29x",Link:"MovieList_Link__jGEDg"},o=n(87),s=n(184);var c=function(e){var t=e.moviesList,n=(0,r.TH)(),c="/"===n.pathname?"movies/":"";return(0,s.jsx)("ul",{className:a.movieList,children:t.map((function(e){return(0,s.jsx)("li",{className:a.movieListItem,children:(0,s.jsx)(o.rU,{className:a.Link,to:"".concat(c).concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},467:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),a=n(791),o=n(87),s={movieList:"Movies_movieList__CNTgI",Link:"Movies_Link__L7rkn",searchForm:"Movies_searchForm__9X0r6",searchInput:"Movies_searchInput__waNIF",submitBtn:"Movies_submitBtn__XNyNV",nothingFoundText:"Movies_nothingFoundText__HxO93"},c=n(12),i=n(663),u=n(74),h=n(184);function m(){var e,t=(0,o.lr)(),n=(0,r.Z)(t,2),m=n[0],f=n[1],l=null!==(e=m.get("name"))&&void 0!==e?e:"",v=function(e){u.Z.getSearchedMovies(e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){e.results.length?(N(e.results),p("ok")):p("not found")})).catch((function(e){x(e.message),p("error")}))},d=(0,a.useState)("undefined"),_=(0,r.Z)(d,2),g=_[0],p=_[1],b=(0,a.useState)(""),k=(0,r.Z)(b,2),y=k[0],x=k[1],L=(0,a.useState)([]),j=(0,r.Z)(L,2),M=j[0],N=j[1];return(0,a.useEffect)((function(){""!==l&&v(l)}),[l]),(0,h.jsxs)("section",{className:s.movieSearch,children:[(0,h.jsxs)("form",{className:s.searchForm,autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchInput.value.trim().toLowerCase();""!==t&&v(t)},children:[(0,h.jsx)("input",{className:s.searchInput,type:"text",name:"searchInput",placeholder:"Type a movie title you need to find",autoFocus:"on",value:l,onChange:function(e){return t=e.target.value,void f(""!==t?{name:t}:{});var t}}),(0,h.jsx)("button",{className:s.submitBtn,type:"submit",children:"Search"})]}),"ok"===g&&(0,h.jsx)(c.Z,{moviesList:M}),"error"===g&&(0,h.jsx)(i.Z,{errorDescription:y}),"not found"===g&&(0,h.jsx)("p",{className:s.nothingFoundText,children:"We didn't find anything with that name! Try another name..."})]})}},74:function(e,t){var n={baseUrl:"https://api.themoviedb.org/3/",userKey:"a3cb0cf762fe02df8fbdba8f47fbe85b",currentQuery:"",pageNumber:1,makeSearchParams:function(){return new URLSearchParams({api_key:this.userKey,query:this.currentQuery,page:this.pageNumber})},makeUrlParams:function(){return new URLSearchParams({api_key:this.userKey})},getTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"movie",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",n="trending";return fetch("".concat(this.baseUrl).concat(n,"/").concat(e,"/").concat(t,"?").concat(this.makeUrlParams()))},getMovieById:function(e){return fetch("".concat(this.baseUrl).concat("movie","/").concat(e,"?").concat(this.makeUrlParams()))},getReviewsById:function(e){return fetch("".concat(this.baseUrl).concat("movie","/").concat(e,"/").concat("reviews","?").concat(this.makeUrlParams()))},getSearchedMovies:function(e){this.currentQuery=e;return fetch("".concat(this.baseUrl).concat("search/movie","?").concat(this.makeSearchParams()))},getCast:function(e){return fetch("".concat(this.baseUrl).concat("movie","/").concat(e,"/").concat("credits","?").concat(this.makeUrlParams()))}};t.Z=n}}]);
//# sourceMappingURL=467.f08be1c5.chunk.js.map