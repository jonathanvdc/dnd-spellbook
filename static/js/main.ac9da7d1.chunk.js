(window["webpackJsonpdnd-spellbook"]=window["webpackJsonpdnd-spellbook"]||[]).push([[0],{142:function(e,t,r){},145:function(e,t,r){},149:function(e,t,r){},154:function(e,t,r){},155:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(21),s=r.n(l),c=(r(58),r(22)),i=r(6),o=r(7),p=r(9),u=r(8),m=r(10),h=r(15),v=r(14),f=(r(59),["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"]);function d(e){return e.thumbnail_url?e.thumbnail_url:"images/schools/".concat(e.school,".svg")}var y=["cantrip","1","2","3","4","5","6","7","8","9"],b=["abjuration","conjuration","divination","enchantment","evocation","illusion","necromancy","transmutation"];function E(e,t){return e.sort(function(e,r){var a=t(e),n=t(r);return+(a>n)-+(n>a)})}function O(e,t,r){var a=new Map,n=!0,l=!1,s=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var o=c.value,p=r(o),u=a.get(p);u||(u=[],a.set(p,u)),u.push(o)}}catch(O){l=!0,s=O}finally{try{n||null==i.return||i.return()}finally{if(l)throw s}}var m=[],h=!0,v=!1,f=void 0;try{for(var d,y=t[Symbol.iterator]();!(h=(d=y.next()).done);h=!0){var b=d.value,E=a.get(b);E&&m.push({key:b,values:E})}}catch(O){v=!0,f=O}finally{try{h||null==y.return||y.return()}finally{if(v)throw f}}return m}function g(e){return O(E(e,function(e){return e.name}),b,function(e){return e.school}).map(function(e){return{school:e.key,spells:e.values}})}function j(e){var t=e.name,r=/[0-9a-zA-Z]/,a="",n=!1,l=!0,s=!1,c=void 0;try{for(var i,o=t.toLowerCase()[Symbol.iterator]();!(l=(i=o.next()).done);l=!0){var p=i.value;r.test(p)?(a+=p,n=!1):n||(a+="-",n=!0)}}catch(u){s=!0,c=u}finally{try{l||null==o.return||o.return()}finally{if(s)throw c}}return a}var S=r(46),k=r.n(S),N=(r(142),r(45),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"createPropertiesGrid",value:function(){var e=[];return this.props.spell.components.verbal&&e.push("V"),this.props.spell.components.somatic&&e.push("S"),this.props.spell.components.material&&e.push("M"),n.a.createElement("div",{className:"SpellPropertiesGrid"},n.a.createElement("div",{className:"SpellPropertyItem"},n.a.createElement("div",{className:"SpellPropertyItemName"},"Casting time"),n.a.createElement("div",null,this.props.spell.casting_time)),n.a.createElement("div",{className:"SpellPropertyItem"},n.a.createElement("div",{className:"SpellPropertyItemName"},"Range"),n.a.createElement("div",null,this.props.spell.range)),n.a.createElement("div",{className:"SpellPropertyItem"},n.a.createElement("div",{className:"SpellPropertyItemName"},"Components"),n.a.createElement("div",null,e.join(", "))),n.a.createElement("div",{className:"SpellPropertyItem"},n.a.createElement("div",{className:"SpellPropertyItemName"},"Duration"),n.a.createElement("div",null,this.props.spell.duration)))}},{key:"createFactFootnote",value:function(e,t){return n.a.createElement("div",{className:"SpellFootnote"},n.a.createElement("span",{className:"SpellPropertyItemName"},e,":")," ",t)}},{key:"createFootnotes",value:function(){var e=[];return this.props.spell.components.materials_needed&&e.push(this.createFactFootnote("Materials",this.props.spell.components.materials_needed.join("; "))),e.push(this.createFactFootnote("Classes",this.props.spell.classes.join(", "))),e}},{key:"renderLink",value:function(e){return this.props.hide_links?n.a.createElement("span",null,e.children):n.a.createElement(h.b,{to:e.href},e.children)}},{key:"formatDescription",value:function(e){var t=e.replace(/\\n/g,"\n"),r={link:this.renderLink.bind(this)};return n.a.createElement(k.a,{className:"SpellDescription",source:t,renderers:r})}},{key:"createDescription",value:function(){var e=this.formatDescription(this.props.spell.description);return this.props.spell.higher_levels?n.a.createElement("div",null,e,n.a.createElement("hr",null),this.formatDescription(this.props.spell.higher_levels)):e}},{key:"render",value:function(){var e=d(this.props.spell);return n.a.createElement("div",{className:"SpellCardPanel"},n.a.createElement("img",{className:"SpellThumbnail",src:e,alt:this.props.spell.name+" thumbnail"}),n.a.createElement("div",{className:"SpellType"},this.props.spell.type),n.a.createElement("div",{className:"SpellName"},this.props.spell.name),n.a.createElement("hr",null),this.createPropertiesGrid(),n.a.createElement("hr",null),this.createDescription(),n.a.createElement("hr",null),this.createFootnotes())}}]),t}(a.Component)),w=r(23),P=(r(145),r(26)),C=r.n(P),I=r(49),x=r.n(I),D=(r(149),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="/spell/".concat(j(this.props.spell)),t="SpellLinkThumbnail SpellLinkThumbnail-".concat(this.props.spell.school),r=n.a.createElement(h.b,{className:"SpellLink",to:e},n.a.createElement("img",{className:t,src:d(this.props.spell),alt:""}),n.a.createElement("div",null,this.props.spell.name));return w.isMobile?n.a.createElement(x.a,null,r):n.a.createElement(C.a,{options:{followCursor:!1,shiftX:20,shiftY:0}},n.a.createElement(C.a.Trigger,{type:"trigger"},r),n.a.createElement(C.a.Hover,{type:"hover"},n.a.createElement("div",{className:"ExtraSpellBox"},n.a.createElement(h.b,{className:"ExtraSpellLink",to:e},n.a.createElement(N,{spell:this.props.spell,hide_links:!0})))))}}]),t}(a.Component)),F=r(50),L=r.n(F),_=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="SpellSchoolHeader Sideways"+(w.isFirefox?"Firefox":"Other"),t=[],r=!0,a=!1,l=void 0;try{for(var s,c=function(e){return O(E(e,function(e){return e.name}),y,function(e){return e.level}).map(function(e){return{level:e.key,spells:e.values}})}(this.props.spells)[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var i=s.value,o=i.level,p=i.spells,u="cantrip"===o?"Cantrips":"Level ".concat(o," spells");t.push(n.a.createElement("div",{className:"LevelHeader"},u));var m=[],h=!0,v=!1,f=void 0;try{for(var d,b=g(p)[Symbol.iterator]();!(h=(d=b.next()).done);h=!0){var j=d.value,S=j.school,k=j.spells,N=!0,P=!0,C=!1,I=void 0;try{for(var x,F=k[Symbol.iterator]();!(P=(x=F.next()).done);P=!0){var _=x.value,B=n.a.createElement("div",{key:_.name,className:"SpellListItem"},n.a.createElement(L.a,{height:80,once:!0},n.a.createElement(D,{spell:_})));N?(m.push(n.a.createElement("div",{key:_.name+"-first",className:"FirstSpellListItem"},n.a.createElement("div",{className:e},S),B)),N=!1):m.push(B)}}catch(T){C=!0,I=T}finally{try{P||null==F.return||F.return()}finally{if(C)throw I}}}}catch(T){v=!0,f=T}finally{try{h||null==b.return||b.return()}finally{if(v)throw f}}t.push(n.a.createElement("div",{className:"SpellList"},m))}}catch(T){a=!0,l=T}finally{try{r||null==c.return||c.return()}finally{if(a)throw l}}return n.a.createElement("div",{className:"SpellbookPanel"},t)}}]),t}(a.Component),B=r(157),T=r(52);r(154);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}var z="spellbook-filter-state",A=function(e){function t(e){var r;Object(i.a)(this,t),r=Object(p.a)(this,Object(u.a)(t).call(this,e));var a=localStorage.getItem(z);return r.state=a?JSON.parse(a):{classes:[]},r}return Object(m.a)(t,e),Object(o.a)(t,[{key:"updateClasses",value:function(e){var t=this;this.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach(function(t){Object(c.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},this.state,{classes:e}),function(){localStorage.setItem("spellbook-filter-state",JSON.stringify(t.state))})}},{key:"toggleClass",value:function(e,t){var r=this.state.classes.filter(function(t){return t!==e});t.includes(!0)&&r.push(e),this.updateClasses(r)}},{key:"getFilteredSpells",value:function(){var e=this;return this.props.spells.filter(function(t){return 0===e.state.classes.length||t.classes.some(function(t){return e.state.classes.includes(t)})})}},{key:"render",value:function(){var e=this,t=f.filter(function(t){return e.props.spells.some(function(e){return e.classes.includes(t)})});return n.a.createElement("div",null,t.map(function(t){return n.a.createElement(B.a,{type:"checkbox",value:[e.state.classes.includes(t)],onChange:function(r){return e.toggleClass(t,r)}},n.a.createElement(T.a,{className:"ClassButton",value:!0},n.a.createElement("div",{className:"ClassButtonPanel"},n.a.createElement("div",{className:"ClassImageBorder"},n.a.createElement("img",{className:"ClassThumbnail",src:"images/classes/".concat(t,".svg"),alt:""})),t)))}),n.a.createElement(_,{spells:this.getFilteredSpells()}))}}]),t}(a.Component);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(r,!0).forEach(function(t){Object(c.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var H=[],W=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(p.a)(this,Object(u.a)(t).call(this,e))).state=H,r}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/spells.json").then(function(e){return e.json()}).then(function(t){H=t,e.setState(t)})}},{key:"render",value:function(){return n.a.createElement(h.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(v.a,{exact:!0,path:"/",component:X}),n.a.createElement(v.a,{path:"/spell/:spellId",component:R}))))}}]),t}(a.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"AppTitle"},"Spellbook"),n.a.createElement(A,{spells:H}))}}]),t}(a.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;if(0===H.length)return n.a.createElement("div",null);var t=H.find(function(t){return j(t)===e.props.match.params.spellId});if(t)return n.a.createElement("div",{className:"SpellCardBox"},n.a.createElement(N,{spell:t}));var r={width:"30px",height:"30px"};return n.a.createElement("div",null,n.a.createElement("img",{style:G({},r,{transform:"scaleX(-1)"}),src:"images/classes/wizard.svg",alt:""}),n.a.createElement("img",{style:r,src:"images/classes/warlock.svg",alt:""}),n.a.createElement("img",{style:r,src:"images/classes/wizard.svg",alt:""}),n.a.createElement("h1",null,"Error 404"),"Spell with ID '",this.props.match.params.spellId,"' not found.")}}]),t}(a.Component),V=W;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,r){},53:function(e,t,r){e.exports=r(155)},58:function(e,t,r){},59:function(e,t,r){}},[[53,1,2]]]);
//# sourceMappingURL=main.ac9da7d1.chunk.js.map