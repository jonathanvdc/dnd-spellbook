(window["webpackJsonpdnd-spellbook"]=window["webpackJsonpdnd-spellbook"]||[]).push([[0],{172:function(e,t,n){},174:function(e,t,n){},178:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),l=n.n(s),i=(n(75),n(23)),o=n(5),c=n(6),u=n(8),p=n(7),h=n(9),m=n(15),v=n(16),f=n(62),d=(n(92),["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"]);function y(e){return e.thumbnail_url?e.thumbnail_url:"images/schools/".concat(e.school,".svg")}var b=["cantrip","1","2","3","4","5","6","7","8","9"],g=["abjuration","conjuration","divination","enchantment","evocation","illusion","necromancy","transmutation"];function O(e,t){return e.sort(function(e,n){var a=t(e),r=t(n);return+(a>r)-+(r>a)})}function E(e,t,n){var a=new Map,r=!0,s=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value,u=n(c),p=a.get(u);p||(p=[],a.set(u,p)),p.push(c)}}catch(O){s=!0,l=O}finally{try{r||null==o.return||o.return()}finally{if(s)throw l}}var h=[],m=!0,v=!1,f=void 0;try{for(var d,y=t[Symbol.iterator]();!(m=(d=y.next()).done);m=!0){var b=d.value,g=a.get(b);g&&h.push({key:b,values:g})}}catch(O){v=!0,f=O}finally{try{m||null==y.return||y.return()}finally{if(v)throw f}}return h}function j(e){return E(O(e,function(e){return e.name}),g,function(e){return e.school}).map(function(e){return{school:e.key,spells:e.values}})}function S(e){var t=e.name,n=/[0-9a-zA-Z]/,a="",r=!1,s=!0,l=!1,i=void 0;try{for(var o,c=t.toLowerCase()[Symbol.iterator]();!(s=(o=c.next()).done);s=!0){var u=o.value;n.test(u)?(a+=u,r=!1):r||(a+="-",r=!0)}}catch(p){l=!0,i=p}finally{try{s||null==c.return||c.return()}finally{if(l)throw i}}return a}var k=n(64),w=n.n(k),P=(n(172),n(61),["b","i","strong","br","p","span","div"]);var N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"createPropertiesGrid",value:function(){var e=[];return this.props.spell.components.verbal&&e.push("V"),this.props.spell.components.somatic&&e.push("S"),this.props.spell.components.material&&e.push("M"),r.a.createElement("div",{className:"SpellPropertiesGrid"},r.a.createElement("div",{className:"SpellPropertyItem"},r.a.createElement("div",{className:"SpellPropertyItemName"},"Casting time"),r.a.createElement("div",null,this.props.spell.casting_time)),r.a.createElement("div",{className:"SpellPropertyItem"},r.a.createElement("div",{className:"SpellPropertyItemName"},"Range"),r.a.createElement("div",null,this.props.spell.range)),r.a.createElement("div",{className:"SpellPropertyItem"},r.a.createElement("div",{className:"SpellPropertyItemName"},"Components"),r.a.createElement("div",null,e.join(", "))),r.a.createElement("div",{className:"SpellPropertyItem"},r.a.createElement("div",{className:"SpellPropertyItemName"},"Duration"),r.a.createElement("div",null,this.props.spell.duration)))}},{key:"createFactFootnote",value:function(e,t){return r.a.createElement("div",{className:"SpellFootnote"},r.a.createElement("span",{className:"SpellPropertyItemName"},e,":")," ",t)}},{key:"createFootnotes",value:function(){var e=[],t=this.props.spell.components.materials_needed;return t&&t.length>0&&e.push(this.createFactFootnote("Materials",t.join("; "))),e.push(this.createFactFootnote("Classes",this.props.spell.classes.join(", "))),e}},{key:"renderLink",value:function(e){return this.props.hide_links?r.a.createElement("span",null,e.children):r.a.createElement(m.b,{to:e.href},e.children)}},{key:"allowNode",value:function(e){return"html"!==e.type||function(e){if((e=e.trim()).startsWith("<"))for(var t=0,n=P;t<n.length;t++){var a=n[t];if(e==="<".concat(a,">")||e==="</".concat(a,">")||e==="<".concat(a,"/>"))return!0}return!1}(e.value)}},{key:"formatDescription",value:function(e){var t=e.replace(/\\n/g,"\n"),n={link:this.renderLink.bind(this)};return r.a.createElement(w.a,{className:"SpellDescription",source:t,renderers:n,allowNode:this.allowNode.bind(this),escapeHtml:!1,unwrapDisallowed:!0})}},{key:"createDescription",value:function(){var e=this.formatDescription(this.props.spell.description);return this.props.spell.higher_levels?r.a.createElement("div",null,e,r.a.createElement("hr",null),this.formatDescription(this.props.spell.higher_levels)):e}},{key:"createSourceCitation",value:function(){var e=this.props.spell.source;if(e){var t=e.pages?", p. "+e.pages:"";return[this.createFactFootnote("Source",r.a.createElement("span",null,r.a.createElement("i",null,e.document),t,"."))]}return[]}},{key:"render",value:function(){var e=y(this.props.spell);return r.a.createElement("div",{className:"SpellCardPanel"},r.a.createElement("img",{className:"SpellThumbnail",src:e,alt:this.props.spell.name+" thumbnail"}),r.a.createElement("div",{className:"SpellType"},this.props.spell.type),r.a.createElement("div",{className:"SpellName"},this.props.spell.name),r.a.createElement("hr",null),this.createPropertiesGrid(),r.a.createElement("hr",null),this.createDescription(),r.a.createElement("hr",null),this.createFootnotes(),this.createSourceCitation())}}]),t}(a.PureComponent),C=n(29),x=(n(174),n(32)),D=n.n(x);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var L=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).width=void 0,n.height=void 0,n.left=void 0,n.top=void 0,n.transitionTimeout=void 0,n.updateCall=void 0,n.element=void 0,n.settings=void 0,n.reverse=void 0,n.state={style:{}};return n.width=null,n.height=null,n.left=null,n.top=null,n.transitionTimeout=null,n.updateCall=null,n.element=null,n.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:1e3,transition:!0,axis:null,reset:!0},n.props.options),n.reverse=n.settings.reverse?-1:1,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.element=Object(s.findDOMNode)(this);var t=this.element;setTimeout(function(){t.parentElement.querySelector(":hover")===t&&e.onPointerEnter()},0)}},{key:"componentWillUnmount",value:function(){null!==this.transitionTimeout&&clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall)}},{key:"onPointerEnter",value:function(e){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:F({},this.state.style,{willChange:"transform"})})),this.setTransition(),this.props.onPointerEnter?this.props.onPointerEnter(e):{}}},{key:"reset",value:function(){var e=this;window.requestAnimationFrame(function(){e.setState(Object.assign({},e.state,{style:F({},e.state.style,{transform:"perspective("+e.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}))})}},{key:"onPointerMove",value:function(e){return e.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.updateCall=requestAnimationFrame(this.update.bind(this,e)),this.props.onPointerMove?this.props.onPointerMove(e):{}}},{key:"setTransition",value:function(){var e=this;null!==this.transitionTimeout&&clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:F({},this.state.style,{transition:this.settings.speed+"ms "+this.settings.easing})})),this.transitionTimeout=setTimeout(function(){e.setState(Object.assign({},e.state,{style:F({},e.state.style,{transition:""})}))},this.settings.speed)}},{key:"onPointerLeave",value:function(e){return this.setTransition(),this.settings.reset&&this.reset(),this.props.onPointerLeave?this.props.onPointerLeave(e):{}}},{key:"getValues",value:function(e){var t=(e.nativeEvent.clientX-this.left)/this.width,n=(e.nativeEvent.clientY-this.top)/this.height,a=Math.min(Math.max(t,0),1),r=Math.min(Math.max(n,0),1);return{tiltX:(this.reverse*(this.settings.max/2-a*this.settings.max)).toFixed(2),tiltY:(this.reverse*(r*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*a,percentageY:100*r}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(e){var t=this.getValues(e);this.setState(Object.assign({},this.state,{style:F({},this.state.style,{transform:"perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")"})})),this.updateCall=null}},{key:"render",value:function(){var e=Object.assign({},this.props.style,this.state.style);return r.a.createElement("div",{style:e,className:this.props.className,onPointerEnter:this.onPointerEnter.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerLeave:this.onPointerLeave.bind(this)},this.props.children)}}]),t}(a.Component),I=(n(178),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="/spell/".concat(S(this.props.spell)),t="SpellLinkThumbnail SpellLinkThumbnail-".concat(this.props.spell.school),n=r.a.createElement(m.b,{className:"SpellLink",to:e},r.a.createElement("img",{className:t,src:y(this.props.spell),alt:""}),r.a.createElement("div",null,this.props.spell.name));return C.isMobile?r.a.createElement(L,null,n):r.a.createElement(D.a,{options:{followCursor:!1,shiftX:20,shiftY:0}},r.a.createElement(D.a.Trigger,{type:"trigger"},n),r.a.createElement(D.a.Hover,{type:"hover"},r.a.createElement("div",{className:"ExtraSpellBox"},r.a.createElement(m.b,{className:"ExtraSpellLink",to:e},r.a.createElement(N,{spell:this.props.spell,hide_links:!0})))))}}]),t}(a.PureComponent)),M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="/spell/".concat(S(this.props.spell)),t="SpellLinkThumbnail SpellLinkThumbnail-".concat(this.props.spell.school);return r.a.createElement(m.b,{className:"SpellLink",to:e},r.a.createElement("div",{className:t}),r.a.createElement("div",null,this.props.spell.name))}}]),t}(a.PureComponent),B=I,A=n(67),X=n.n(A),_=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="SpellSchoolHeader Sideways"+(C.isFirefox?"Firefox":"Other"),t=[],n=!0,a=!1,s=void 0;try{for(var l,i=function(e){return E(O(e,function(e){return e.name}),b,function(e){return e.level}).map(function(e){return{level:e.key,spells:e.values}})}(this.props.spells)[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var o=l.value,c=o.level,u=o.spells,p="cantrip"===c?"Cantrips":"Level ".concat(c," spells");t.push(r.a.createElement("div",{className:"LevelHeader"},p));var h=[],m=!0,v=!1,f=void 0;try{for(var d,y=j(u)[Symbol.iterator]();!(m=(d=y.next()).done);m=!0){var g=d.value,S=g.school,k=g.spells,w=!0,P=!0,N=!1,x=void 0;try{for(var D,T=k[Symbol.iterator]();!(P=(D=T.next()).done);P=!0){var F=D.value,L=r.a.createElement("div",{key:F.name,className:"SpellListItem"},r.a.createElement(X.a,{once:!0,placeholder:r.a.createElement(M,{spell:F})},r.a.createElement(B,{spell:F})));w?(h.push(r.a.createElement("div",{key:F.name+"-first",className:"FirstSpellListItem"},r.a.createElement("div",{className:e},S),L)),w=!1):h.push(L)}}catch(I){N=!0,x=I}finally{try{P||null==T.return||T.return()}finally{if(N)throw x}}}}catch(I){v=!0,f=I}finally{try{m||null==y.return||y.return()}finally{if(v)throw f}}t.push(r.a.createElement("div",{className:"SpellList"},h))}}catch(I){a=!0,s=I}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return r.a.createElement("div",{className:"SpellbookPanel"},t)}}]),t}(a.PureComponent),Y=n(186),z=n(69);n(183);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var W="spellbook-filter-state",J=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(u.a)(this,Object(p.a)(t).call(this,e));var a=localStorage.getItem(W);return n.state=a?JSON.parse(a):{classes:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateClasses",value:function(e){var t=this;this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.state,{classes:e}),function(){localStorage.setItem("spellbook-filter-state",JSON.stringify(t.state))})}},{key:"toggleClass",value:function(e,t){var n=this.state.classes.filter(function(t){return t!==e});t.includes(!0)&&n.push(e),this.updateClasses(n)}},{key:"getFilteredSpells",value:function(){var e=this;return this.props.spells.filter(function(t){return 0===e.state.classes.length||t.classes.some(function(t){return e.state.classes.includes(t)})})}},{key:"render",value:function(){var e=this,t=d.filter(function(t){return e.props.spells.some(function(e){return e.classes.includes(t)})});return r.a.createElement("div",null,t.map(function(t){return r.a.createElement(Y.a,{type:"checkbox",value:[e.state.classes.includes(t)],onChange:function(n){return e.toggleClass(t,n)}},r.a.createElement(z.a,{className:"ClassButton",value:!0},r.a.createElement("div",{className:"ClassButtonPanel"},r.a.createElement("div",{className:"ClassImageBorder"},r.a.createElement("img",{className:"ClassThumbnail",src:"images/classes/".concat(t,".svg"),alt:""})),t)))}),r.a.createElement(_,{spells:this.getFilteredSpells()}))}}]),t}(a.Component);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=[],R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state=V,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/spells.json").then(function(e){return e.json()}).then(function(t){V=t,e.setState(t)})}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(v.a,{exact:!0,path:"/",component:U}),r.a.createElement(v.a,{path:"/spell/:spellId",component:Z}))))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={isSearching:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSearchChange",value:function(e){var t=e.length>0;t!==this.state.isSearching&&this.setState(G({},this.state,{isSearching:t}))}},{key:"onSearchSelect",value:function(e){this.props.history.push("/spell/".concat(S(e.spell)))}},{key:"render",value:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var s,l=V[Symbol.iterator]();!(t=(s=l.next()).done);t=!0){var i=s.value;e.push({key:i.name,value:r.a.createElement("span",{style:{color:"black"}},i.name),spell:i})}}catch(c){n=!0,a=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}var o=r.a.createElement(f.a,{placeholder:"Search spells",data:e,fuseConfigs:{keys:["key"]},onChange:this.onSearchChange.bind(this),onSelect:this.onSearchSelect.bind(this)});return r.a.createElement("div",null,r.a.createElement("div",{key:"appBar",className:this.state.isSearching?"AppBar AppBar-searching":"AppBar"},r.a.createElement("h1",{className:"AppTitle"},"Spellbook"),V.length>0?o:[]),r.a.createElement(J,{key:"spellbook",spells:V}))}}]),t}(a.Component),Z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(0===V.length)return r.a.createElement("div",null);var t=V.find(function(t){return S(t)===e.props.match.params.spellId});if(t)return r.a.createElement("div",{className:"SpellCardBox"},r.a.createElement(N,{spell:t}));var n={width:"30px",height:"30px"};return r.a.createElement("div",null,r.a.createElement("img",{style:G({},n,{transform:"scaleX(-1)"}),src:"images/classes/wizard.svg",alt:""}),r.a.createElement("img",{style:n,src:"images/classes/warlock.svg",alt:""}),r.a.createElement("img",{style:n,src:"images/classes/wizard.svg",alt:""}),r.a.createElement("h1",null,"Error 404"),"Spell with ID '",this.props.match.params.spellId,"' not found.")}}]),t}(a.Component),$=R;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,n){},70:function(e,t,n){e.exports=n(184)},75:function(e,t,n){},80:function(e,t){},82:function(e,t){},92:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.303e1cc9.chunk.js.map