//>>built
define("xstyle/ext/supported",[],function(){var e=/(([-+])|[,<> ])?\s*(\.|!|#|:)?([-\w$]+)?(?:\[([^\]=]+)=?['"]?([^\]'"]*)['"]?\])?/g;return{onPseudo:function(f,a){var b=!0;a.selector.replace(e,function(a,e,f,i,g,c,h){var d;if(g&&!i&&(a=(d=document.createElement(g)).toString(),"[object HTMLUnknownElement]"==a||"[object]"==a)){b=!1;return}c&&(d.setAttribute(c,h),d[c]!=h&&(b=!1))});if(b==("supported"==f))a.add(a.selector=a.selector.replace(/:(un)?supported/,""),a.cssText)}}});