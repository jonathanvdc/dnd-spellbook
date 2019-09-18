(window["webpackJsonpdnd-spellbook"]=window["webpackJsonpdnd-spellbook"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return h}),n.d(t,"d",function(){return m}),n.d(t,"f",function(){return v});var a=["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"];function r(e){return e.thumbnail_url?e.thumbnail_url:"images/schools/".concat(e.school,".svg")}var s=["cantrip","1","2","3","4","5","6","7","8","9"],l=["abjuration","conjuration","divination","enchantment","evocation","illusion","necromancy","transmutation"];function i(e,t){return e.sort(function(e,n){var a=t(e),r=t(n);return+(a>r)-+(r>a)})}function o(e,t,n){var a=new Map,r=!0,s=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value,u=n(c),p=a.get(u);p||(p=[],a.set(u,p)),p.push(c)}}catch(O){s=!0,l=O}finally{try{r||null==o.return||o.return()}finally{if(s)throw l}}var h=[],m=!0,v=!1,d=void 0;try{for(var f,g=t[Symbol.iterator]();!(m=(f=g.next()).done);m=!0){var b=f.value,y=a.get(b);y&&h.push({key:b,values:y})}}catch(O){v=!0,d=O}finally{try{m||null==g.return||g.return()}finally{if(v)throw d}}return h}function c(e){return o(i(e,function(e){return e.name}),s,function(e){return e.level}).map(function(e){return{level:e.key,spells:e.values}})}function u(e){return o(i(e,function(e){return e.name}),l,function(e){return e.school}).map(function(e){return{school:e.key,spells:e.values}})}function p(e){for(var t=function(e){switch(e){case"CC-BY-3.0":return"Creative Commons Attribution 3.0 Unported";case"CC0-1.0":return"Creative Commons CC0 1.0 Universal";case"GPL-1.0-only":return"GNU General Public License v1.0 only";case"GPL-1.0-or-later":return"GNU General Public License v1.0 or later";case"GPL-2.0-only":return"GNU General Public License v2.0 only";case"GPL-2.0-or-later":return"GNU General Public License v2.0 or later";case"GPL-3.0-only":return"GNU General Public License v3.0 only";case"GPL-3.0-or-later":return"GNU General Public License v3.0 or later"}}(e),n=0,a=["only","or later"];n<a.length;n++){var r=a[n];t.endsWith(r)&&(t=t.substring(0,t.length-r.length).trimRight())}return t}function h(e){switch(e){case"CC-BY-3.0":return"https://creativecommons.org/licenses/by/3.0/legalcode";case"CC0-1.0":return"https://creativecommons.org/publicdomain/zero/1.0/legalcode";case"GPL-1.0-only":case"GPL-1.0-or-later":return"https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html";case"GPL-2.0-only":case"GPL-2.0-or-later":return"https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html";case"GPL-3.0-only":case"GPL-3.0-or-later":return"https://www.gnu.org/licenses/gpl-3.0-standalone.html"}}function m(e){var t=e.name,n=/[0-9a-zA-Z]/,a="",r=!1,s=!0,l=!1,i=void 0;try{for(var o,c=t.toLowerCase()[Symbol.iterator]();!(s=(o=c.next()).done);s=!0){var u=o.value;n.test(u)?(a+=u,r=!1):r||(a+="-",r=!0)}}catch(p){l=!0,i=p}finally{try{s||null==c.return||c.return()}finally{if(l)throw i}}return a}function v(e){var t;return t="cantrip"===e.level?"".concat(e.school," cantrip"):"".concat(e.level).concat(function(e){var t=e%10;return 1===t?"st":2===t?"nd":3===t?"rd":"th"}(parseInt(e.level)),"-level ").concat(e.school),e.ritual&&(t+=" (ritual)"),t}},169:function(e,t,n){},172:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},182:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),l=n.n(s),i=(n(85),n(15)),o=n(21),c=n(5),u=n(4),p=n(6),h=n(7),m=n(8),v=n(20),d=n(22),f=(n(86),n(10)),g=n(39),b=n(32),y=(n(172),n(67),n(54)),O=n(73),E=n.n(O),j=n(218),S=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="SpellSchoolHeader Sideways"+(b.isFirefox?"Firefox":"Other"),t=[],n=!0,a=!1,s=void 0;try{for(var l,i=Object(f.g)(this.props.spells)[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var o=l.value,c=o.level,u=o.spells,p="cantrip"===c?"Cantrips":"Level ".concat(c," spells");t.push(r.a.createElement(j.a,{variant:"h6",className:"LevelHeader"},p));var h=[],m=!0,v=!1,d=void 0;try{for(var g,O=Object(f.h)(u)[Symbol.iterator]();!(m=(g=O.next()).done);m=!0){var S=g.value,k=S.school,P=S.spells,w=!0,C=!0,N=!1,L=void 0;try{for(var x,F=P[Symbol.iterator]();!(C=(x=F.next()).done);C=!0){var I=x.value,D=r.a.createElement("div",{key:I.name,className:"SpellListItem"},r.a.createElement(E.a,{once:!0,placeholder:r.a.createElement(y.a,{spell:I})},r.a.createElement(y.c,{spell:I})));w?(h.push(r.a.createElement("div",{key:I.name+"-first",className:"FirstSpellListItem"},r.a.createElement("div",{className:e},k),D)),w=!1):h.push(D)}}catch(G){N=!0,L=G}finally{try{C||null==F.return||F.return()}finally{if(N)throw L}}}}catch(G){v=!0,d=G}finally{try{m||null==O.return||O.return()}finally{if(v)throw d}}t.push(r.a.createElement("div",{className:"SpellList"},h))}}catch(G){a=!0,s=G}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return r.a.createElement("div",{className:"SpellbookPanel"},t)}}]),t}(a.PureComponent),k=n(53),P=n.n(k),w=n(74),C=n.n(w);n(182);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var L="spellbook-filter-state",x=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(p.a)(this,Object(h.a)(t).call(this,e));var a=localStorage.getItem(L);return n.state=a?JSON.parse(a):{classes:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"updateClasses",value:function(e){var t=this;this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.state,{classes:e}),function(){localStorage.setItem("spellbook-filter-state",JSON.stringify(t.state))})}},{key:"toggleClass",value:function(e,t){var n=this.state.classes.filter(function(t){return t!==e});t.includes(!0)&&n.push(e),this.updateClasses(n)}},{key:"getFilteredSpells",value:function(){var e=this;return this.props.spells.filter(function(t){return 0===e.state.classes.length||t.classes.some(function(t){return e.state.classes.includes(t)})})}},{key:"render",value:function(){var e=this,t=f.a.filter(function(t){return e.props.spells.some(function(e){return e.classes.includes(t)})});return r.a.createElement("div",null,t.map(function(t){return r.a.createElement(C.a,{type:"checkbox",value:[e.state.classes.includes(t)],onChange:function(n){return e.toggleClass(t,n)}},r.a.createElement(P.a,{className:"ClassButton",value:!0},r.a.createElement("div",{className:"ClassButtonPanel"},r.a.createElement("div",{className:"ClassImageBorder"},r.a.createElement("img",{className:"ClassThumbnail",src:"images/classes/".concat(t,".svg"),alt:""})),t)))}),r.a.createElement(S,{spells:this.getFilteredSpells()}))}}]),t}(a.Component),F=n(78),I=n(223),D=n(77),G=n.n(D),T=n(35),M=n(75),B=n.n(M),q=n(222),_=n(204),A=n(76),Y=n.n(A),R=(n(200),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={suggestions:[],query:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onSuggestionsClearRequested",value:function(){this.setState({suggestions:[]})}},{key:"onSuggestionsFetchRequested",value:function(e,t){this.setState({suggestions:t.search(e.value).slice(0,10)})}},{key:"onSuggestionSelected",value:function(e,t){this.props.history.push("/spell/".concat(Object(f.d)(t.suggestion)))}},{key:"onQueryChange",value:function(e,t){this.setState({query:t.newValue})}},{key:"renderSuggestion",value:function(e,t){var n=t.isHighlighted;return r.a.createElement(q.a,{selected:n,component:"div"},r.a.createElement(T.a,{className:"SearchItemThumbnail",spell:e}),r.a.createElement("span",{className:"SearchItemName"},e.name),r.a.createElement("span",{className:"SearchItemType"},Object(f.f)(e)))}},{key:"render",value:function(){var e=this;if(0===this.props.spells.length)return[];var t=new Y.a(this.props.spells,{shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["name"]}),n={placeholder:"Search spells...",value:this.state.query,onChange:this.onQueryChange.bind(this),onFocus:this.props.onFocus,onBlur:this.props.onBlur};return r.a.createElement(B.a,{suggestions:this.state.suggestions,onSuggestionsFetchRequested:function(n){return e.onSuggestionsFetchRequested(n,t)},onSuggestionsClearRequested:this.onSuggestionsClearRequested.bind(this),onSuggestionSelected:this.onSuggestionSelected.bind(this),inputProps:n,getSuggestionValue:function(e){return e.name},renderSuggestion:this.renderSuggestion,renderSuggestionsContainer:function(e){return r.a.createElement(_.a,Object.assign({},e.containerProps,{square:!0}),e.children)}})}}]),t}(a.PureComponent)),U=Object(d.e)(R),X=n(220),z=n(221),H=(n(201),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={isSearching:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"toggleSearching",value:function(e){this.state.isSearching!==e&&this.setState({isSearching:e})}},{key:"createClasses",value:function(e){var t=this.state.isSearching?"searching":"notsearching";return"".concat(e," ").concat(e,"-").concat(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(X.a,{position:"sticky"},r.a.createElement(z.a,{variant:b.isMobile?"regular":"dense"},r.a.createElement(v.b,{to:"/",className:this.createClasses("AppTitle")},r.a.createElement(j.a,{variant:"h6"},"Spellbook")),r.a.createElement("span",{className:this.createClasses("AppBarSeparator")}),r.a.createElement("div",{className:this.createClasses("AppBarSearchBox")},r.a.createElement(U,{spells:this.props.spells,onFocus:function(){return e.toggleSearching(!0)},onBlur:function(){return e.toggleSearching(!1)}}))))}}]),t}(a.Component));function W(e,t){var n=t.from,a=t.to,r=e.getMonth()+1,s=e.getDate();if(n.month>a.month){if(r<n.month&&r>a.month)return!1}else if(r<n.month||r>a.month)return!1;return!(r===n.month&&s<n.day)&&!(r===a.month&&s>a.day)}var V=function(){for(var e=[],t=new Date,n=0,a=[{name:"Halloween",duration:{from:{month:10,day:1},to:{month:10,day:31}}},{name:"Christmas",duration:{from:{month:11,day:14},to:{month:12,day:25}}},{name:"NewYear",duration:{from:{month:12,day:26},to:{month:1,day:5}}}];n<a.length;n++){var r=a[n],s=r.name;W(t,r.duration)&&e.push(s)}return e}();function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,225))}),$=Object(F.a)({palette:{primary:{main:"#1976d2"},secondary:G.a}}),K=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={allSpells:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/spells.json").then(function(e){return e.json()}).then(function(t){e.setState({allSpells:t})})}},{key:"getMainClass",value:function(){return["App"].concat(Object(o.a)(V)).join(" ")}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,null,r.a.createElement("div",{className:this.getMainClass()},r.a.createElement(I.a,{theme:$},r.a.createElement(H,{spells:this.state.allSpells}),r.a.createElement("div",{className:"App-body"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(x,{key:"spellbook",spells:e.state.allSpells})}}),r.a.createElement(d.a,{path:"/spell/:spellId",render:function(t){return r.a.createElement(ee,Object.assign({},t,{allSpells:e.state.allSpells}))}}),r.a.createElement(d.a,{path:"/linter",render:function(t){return r.a.createElement(te,Object.assign({},t,{allSpells:e.state.allSpells}))}}))))))}}]),t}(a.Component),ee=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;if(0===this.props.allSpells.length)return r.a.createElement("div",null);var t=this.props.allSpells.find(function(t){return Object(f.d)(t)===e.props.match.params.spellId});if(t)return r.a.createElement("div",{className:"SpellCardBox"},r.a.createElement(g.a,{spell:t}));var n={width:"30px",height:"30px"};return r.a.createElement("div",null,r.a.createElement("img",{style:Q({},n,{transform:"scaleX(-1)"}),src:"images/classes/wizard.svg",alt:""}),r.a.createElement("img",{style:n,src:"images/classes/warlock.svg",alt:""}),r.a.createElement("img",{style:n,src:"images/classes/wizard.svg",alt:""}),r.a.createElement("h1",null,"Error 404"),"Spell with ID '",this.props.match.params.spellId,"' not found.")}}]),t}(a.Component),te=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return 0===this.props.allSpells.length?r.a.createElement("div",null):r.a.createElement(Z,{spells:this.props.allSpells})}}]),t}(a.Component),ne=K;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,n){"use strict";var a=n(5),r=n(4),s=n(6),l=n(7),i=n(8),o=n(0),c=n.n(o),u=n(10),p=(n(177),function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e="SpellThumbnailBackground SpellThumbnailBackground-".concat(this.props.spell.school);return this.props.className&&(e+=" "+this.props.className),void 0===this.props.showImage||this.props.showImage?c.a.createElement("div",{className:e},c.a.createElement("img",{className:"SpellThumbnail",src:Object(u.e)(this.props.spell),alt:""})):c.a.createElement("div",{className:e})}}]),t}(o.PureComponent));t.a=p},39:function(e,t,n){"use strict";var a=n(21),r=n(5),s=n(4),l=n(6),i=n(7),o=n(8),c=n(0),u=n.n(c),p=n(10),h=n(71),m=n.n(h),v=n(20),d=(n(169),n(67),["b","i","strong","br","p","span","div"]);var f=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"createPropertiesGrid",value:function(){var e=[];return this.props.spell.components.verbal&&e.push("V"),this.props.spell.components.somatic&&e.push("S"),this.props.spell.components.material&&e.push("M"),u.a.createElement("div",{className:"SpellPropertiesGrid"},u.a.createElement("div",{className:"SpellPropertyItem"},u.a.createElement("div",{className:"SpellPropertyItemName"},"Casting time"),u.a.createElement("div",null,this.props.spell.casting_time)),u.a.createElement("div",{className:"SpellPropertyItem"},u.a.createElement("div",{className:"SpellPropertyItemName"},"Range"),u.a.createElement("div",null,this.props.spell.range)),u.a.createElement("div",{className:"SpellPropertyItem"},u.a.createElement("div",{className:"SpellPropertyItemName"},"Components"),u.a.createElement("div",null,e.join(", "))),u.a.createElement("div",{className:"SpellPropertyItem"},u.a.createElement("div",{className:"SpellPropertyItemName"},"Duration"),u.a.createElement("div",null,this.props.spell.duration)))}},{key:"createFactFootnote",value:function(e,t){return u.a.createElement("div",{className:"SpellFootnote"},u.a.createElement("span",{className:"SpellPropertyItemName"},e,":")," ",t)}},{key:"createFootnotes",value:function(){var e=[],t=this.props.spell.components.materials_needed;return t&&t.length>0&&e.push(this.createFactFootnote("Materials",t.join("; "))),e.push(this.createFactFootnote("Classes",this.props.spell.classes.join(", "))),e}},{key:"renderLink",value:function(e){return this.props.hide_links?u.a.createElement("span",null,e.children):u.a.createElement(v.b,{to:e.href},e.children)}},{key:"allowNode",value:function(e){return"html"!==e.type||function(e){if((e=e.trim()).startsWith("<"))for(var t=0,n=d;t<n.length;t++){var a=n[t];if(e==="<".concat(a,">")||e==="</".concat(a,">")||e==="<".concat(a,"/>"))return!0}return!1}(e.value)}},{key:"formatDescription",value:function(e){var t=e.replace(/\\n/g,"\n"),n={link:this.renderLink.bind(this)};return u.a.createElement(m.a,{className:"SpellDescription",source:t,renderers:n,allowNode:this.allowNode.bind(this),escapeHtml:!1,unwrapDisallowed:!0})}},{key:"createDescription",value:function(){var e=this.formatDescription(this.props.spell.description);return this.props.spell.quote&&this.props.spell.quote.length>0&&(e=u.a.createElement("div",null,u.a.createElement("div",{className:"SpellCardFlavorQuote"},"\u201c",this.props.spell.quote,"\u201d"),e)),this.props.spell.higher_levels?u.a.createElement("div",null,e,u.a.createElement("hr",null),this.formatDescription(this.props.spell.higher_levels)):e}},{key:"createSourceCitation",value:function(){var e=this.props.spell.source;if(e){var t=e.pages?", p. "+e.pages:"";return[this.createFactFootnote("Source",u.a.createElement("span",null,u.a.createElement("i",null,e.document),t,"."))]}return[]}},{key:"createExternalLink",value:function(e,t){return!t||0===t.length||this.props.hide_links?e:u.a.createElement("a",{href:t},e)}},{key:"citeIconSource",value:function(e,t){var n=[];return e.title?n.push("'",this.createExternalLink(e.title,e.url),"'"):t||n.push(this.createExternalLink("an icon",e.url)),n.push(" by ",this.createExternalLink(e.author,e.author_website),", licensed under ",this.createExternalLink(Object(p.c)(e.license),Object(p.b)(e.license)),"."),n}},{key:"createFooter",value:function(){var e=this.props.spell.thumbnail_source;if(!e||0===e.length||this.props.hide_footer)return[];var t=e[0],n=[];t.title?n.push.apply(n,["Icon: "].concat(Object(a.a)(this.citeIconSource(t)))):n.push.apply(n,[this.createExternalLink("Icon",t.url)," "].concat(Object(a.a)(this.citeIconSource(t,!0))));for(var r=1;r<e.length;r++)n.push.apply(n,[" Based on "].concat(Object(a.a)(this.citeIconSource(e[r]))));return n}},{key:"render",value:function(){var e=Object(p.e)(this.props.spell),t=this.createFooter();return u.a.createElement("div",{className:"SpellCardPanel"},u.a.createElement("div",{className:"SpellCardDescription"},u.a.createElement("img",{className:"SpellCardThumbnail",src:e,alt:this.props.spell.name+" thumbnail"}),u.a.createElement("div",{className:"SpellType"},Object(p.f)(this.props.spell)),u.a.createElement("div",{className:"SpellName"},this.props.spell.name),u.a.createElement("hr",null),this.createPropertiesGrid(),u.a.createElement("hr",null),this.createDescription(),u.a.createElement("hr",null),this.createFootnotes(),this.createSourceCitation()),u.a.createElement("div",{className:"SpellCardFooter"},t.length>0?u.a.createElement("hr",null):[],this.createFooter()))}}]),t}(c.PureComponent);t.a=f},54:function(e,t,n){"use strict";var a=n(5),r=n(4),s=n(6),l=n(7),i=n(8),o=n(0),c=n.n(o),u=n(20),p=n(32),h=n(43),m=n.n(h),v=n(15),d=n(19);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(v.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=function(e){function t(e){var n;Object(a.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).width=void 0,n.height=void 0,n.left=void 0,n.top=void 0,n.transitionTimeout=void 0,n.updateCall=void 0,n.element=void 0,n.settings=void 0,n.reverse=void 0,n.state={style:{}};return n.width=null,n.height=null,n.left=null,n.top=null,n.transitionTimeout=null,n.updateCall=null,n.element=null,n.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:1e3,transition:!0,axis:null,reset:!0},n.props.options),n.reverse=n.settings.reverse?-1:1,n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.element=Object(d.findDOMNode)(this);var t=this.element;setTimeout(function(){t.parentElement.querySelector(":hover")===t&&e.onPointerEnter()},0)}},{key:"componentWillUnmount",value:function(){null!==this.transitionTimeout&&clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall)}},{key:"onPointerEnter",value:function(e){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:g({},this.state.style,{willChange:"transform"})})),this.setTransition(),this.props.onPointerEnter?this.props.onPointerEnter(e):{}}},{key:"reset",value:function(){var e=this;window.requestAnimationFrame(function(){e.setState(Object.assign({},e.state,{style:g({},e.state.style,{transform:"perspective("+e.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}))})}},{key:"onPointerMove",value:function(e){return e.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.updateCall=requestAnimationFrame(this.update.bind(this,e)),this.props.onPointerMove?this.props.onPointerMove(e):{}}},{key:"setTransition",value:function(){var e=this;null!==this.transitionTimeout&&clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:g({},this.state.style,{transition:this.settings.speed+"ms "+this.settings.easing})})),this.transitionTimeout=setTimeout(function(){e.setState(Object.assign({},e.state,{style:g({},e.state.style,{transition:""})}))},this.settings.speed)}},{key:"onPointerLeave",value:function(e){return this.setTransition(),this.settings.reset&&this.reset(),this.props.onPointerLeave?this.props.onPointerLeave(e):{}}},{key:"getValues",value:function(e){var t=(e.nativeEvent.clientX-this.left)/this.width,n=(e.nativeEvent.clientY-this.top)/this.height,a=Math.min(Math.max(t,0),1),r=Math.min(Math.max(n,0),1);return{tiltX:(this.reverse*(this.settings.max/2-a*this.settings.max)).toFixed(2),tiltY:(this.reverse*(r*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*a,percentageY:100*r}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(e){var t=this.getValues(e);this.setState(Object.assign({},this.state,{style:g({},this.state.style,{transform:"perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")"})})),this.updateCall=null}},{key:"render",value:function(){var e=Object.assign({},this.props.style,this.state.style);return c.a.createElement("div",{style:e,className:this.props.className,onPointerEnter:this.onPointerEnter.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerLeave:this.onPointerLeave.bind(this)},this.props.children)}}]),t}(o.Component),y=n(10),O=(n(176),n(39)),E=n(35);function j(e){return"/spell/".concat(Object(y.d)(e))}n.d(t,"b",function(){return j}),n.d(t,"a",function(){return k});var S=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=j(this.props.spell),t=c.a.createElement(u.b,{className:"SpellLink",to:e},c.a.createElement(E.a,{className:"SpellLinkThumbnail",spell:this.props.spell}),c.a.createElement("div",null,this.props.spell.name));return p.isMobile?c.a.createElement(b,null,t):c.a.createElement(m.a,{options:{followCursor:!1,shiftX:20,shiftY:0}},c.a.createElement(m.a.Trigger,{type:"trigger"},t),c.a.createElement(m.a.Hover,{type:"hover"},c.a.createElement("div",{className:"ExtraSpellBox"},c.a.createElement(u.b,{className:"ExtraSpellLink",to:e},c.a.createElement(O.a,{spell:this.props.spell,hide_links:!0,hide_footer:!0})))))}}]),t}(o.PureComponent),k=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=j(this.props.spell);return c.a.createElement(u.b,{className:"SpellLink",to:e},c.a.createElement(E.a,{className:"SpellLinkThumbnail",spell:this.props.spell,showImage:!1}),c.a.createElement("div",null,this.props.spell.name))}}]),t}(o.PureComponent);t.c=S},67:function(e,t,n){},80:function(e,t,n){e.exports=n(202)},85:function(e,t,n){},86:function(e,t,n){}},[[80,1,2]]]);
//# sourceMappingURL=main.7c67bfe4.chunk.js.map