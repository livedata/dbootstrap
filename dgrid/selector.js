//>>built
define("dgrid/selector","dojo/_base/kernel,dojo/_base/array,dojo/on,dojo/aspect,dojo/_base/sniff,put-selector/put".split(","),function(o,p,t,q,u,l){return function(c,h){function m(d){return function(b){for(var e=b.rows,f=e.length,b=0;b<f;b++){var g=a.cell(e[b],c.id).element;if(g&&(g=(g.contents||g).input,!g.disabled))g.checked=d}if("checkbox"==i.type){e=a.selection;f=!1;for(b in e)if(e[b]!=a.allSelected){f=!0;break}i.indeterminate=f;i.checked=a.allSelected}}}function r(d){if("click"==d.type||32==
d.keyCode||0==d.keyCode){var b=a.row(d),e=a._lastSelected&&a.row(a._lastSelected);if("radio"==h){if(!e||e.id!=b.id)a.clearSelection(),a.select(b,null,!0),a._lastSelected=b.element}else b?(d.shiftKey?m(!0)({rows:[b]}):e=null,e=d.shiftKey?e:null,a.select(e||b,b,e?void 0:null),a._lastSelected=b.element):(l(this,(a.allSelected?"!":".")+"dgrid-select-all"),a[a.allSelected?"clearSelection":"selectAll"]())}}function n(){a._hasSelectorInputListener=!0;j.push(q.before(a,"_initSelectionEvents",function(){this.on(".dgrid-selector:click,.dgrid-selector:keydown",
r)}));var d=a._handleSelect;a._handleSelect=function(a){this.cell(a).column!=c&&d.apply(this,arguments)};if("function"==typeof c.disabled){var b=a.allowSelect;a.allowSelect=function(a){return b.call(this,a)&&!c.disabled(a.data)}}j.push(a.on("dgrid-select",m(!0)));j.push(a.on("dgrid-deselect",m(!1)))}var j=[],a,i;if(c.type)c.selectorType=c.type,o.deprecated("columndef.type","use columndef.selectorType instead","dgrid 1.0");c.selectorType=h=h||c.selectorType||"checkbox";c.sortable=!1;var k=c.disabled,
s="function"==typeof h?h:function(d,b,e){var f=b.parentNode;l(f&&f.contents?f:b,".dgrid-selector");d=b.input||(b.input=l(b,"input[type="+h+"]",{tabIndex:isNaN(c.tabIndex)?-1:c.tabIndex,disabled:k&&("function"==typeof k?k(e):k),checked:d}));a._hasSelectorInputListener||n();return d};c.init=function(){a=c.grid};c.destroy=function(){p.forEach(j,function(a){a.remove()});a._hasSelectorInputListener=!1};c.renderCell=function(d,b,c,f,g){b=(b=d&&a.row(d))&&a.selection[b.id];g&&("radio"==h||"string"==typeof d||
!a.allowSelectAll)?(c.appendChild(document.createTextNode(d||"")),a._hasSelectorInputListener||n()):s(b,c,d)};c.renderHeaderCell=function(a){c.renderCell(c.label||{},null,a,null,!0);i=a.lastChild};return c}});