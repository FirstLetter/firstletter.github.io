(window.webpackJsonpfirstletter=window.webpackJsonpfirstletter||[]).push([[0],{179:function(e,t,a){"use strict";a.r(t);var n,o=a(3),r=a(0),l=a.n(r),c=a(5),s=a(13),i=a(1),u=a(2),m=function(){return l.a.createElement(l.a.Fragment,null)},f=a(8),p=function(e){var t=e.text,a=e.author,n=e.onClick;return l.a.createElement("div",{onClick:n,className:"shadow-lg col-12 col-md-3 col-lg-2 border-sm d-inline-block data-tile app-bg-t-dark text-white p-2 m-2"},l.a.createElement("div",{className:"data-tile-title font-size-24 font-roboto-mono"},t),l.a.createElement("div",{className:"font-size-16 font-roboto-mono app-text-bg-accent"},a))},d=function(){var e=Object(c.a)().user,t=Object(r.useState)(!0),a=Object(o.a)(t,2),n=a[0],m=a[1],p=Object(s.a)(i.b.CreateFork,{username:i.f,repo:i.e},null,{headers:{Authorization:"bearer ".concat(e.authtoken)}},!1),d=p.loading,b=p.data,E=p.error,k=p.setLoading;Object(r.useEffect)((function(){!1===d&&null===b&&null!==E&&m(!0)}),[d]);var g;return!0===d?g=l.a.createElement("div",{className:"font-space-mono font-size-20 app-text-bg-accent"},"Creating your fork ",l.a.createElement(f.a,null)):null!==E?g=l.a.createElement("div",{className:"font-space-mono font-size-20 app-text-main"},"Error Creating your Fork"):null!==b&&(g=l.a.createElement("div",{className:"font-space-mono font-size-20 app-text-main"},"Successfully Created Your Fork ",l.a.createElement(u.A,{className:"text-decoration-none font-space-mono font-size-20 app-text-accent",href:"/home"},"Start Making pull requests!"))),console.log(g),l.a.createElement(l.a.Fragment,null,g,!0===n?l.a.createElement("div",null,l.a.createElement("div",{className:"font-space-mono font-size-18 app-text-accent"},"Create Your Fork"),l.a.createElement("button",{className:"m-2 border-0 px-3 py-2 font-space-mono app-bg-t-main font-size-18 text-white",onClick:function(){return k(!0),void m(!1)}},"Create")):null)},b=(n=function(e){var t,a=e.onClick,n=e.fromFork,o=void 0!==n&&n,r=Object(c.a)().user,u=Object(s.a)(i.b.GetAllFiles,{username:!0===o?r.username:i.f,repo:i.e,filename:r.username},null,null),m=u.loading,b=u.error,E=u.data,k=function(e){a(E[e])};return!0===m?t=l.a.createElement(f.a,null):null!==b?t=!0===o?l.a.createElement(d,null):l.a.createElement(p,{text:"No Local repo found",author:"fork here"}):null!==E&&(t=E.map((function(e,t){return l.a.createElement(p,{key:t,text:e.name.split(".")[0],author:r.username,onClick:function(){return k(t)}})}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 font-size-18 app-text-bg-accent font-space-mono"},!0===o?"My Fork":"My Pulls"),l.a.createElement("div",{className:"col-12"},t))},function(e){return!0===Object(c.a)().loggedIn?l.a.createElement(n,e):l.a.createElement(m,null)});t.default=b}}]);
//# sourceMappingURL=0.c97911c4.chunk.js.map