!function(t,e){t.VMasker=e()}(this,function(){var t="9",e="A",n="S",i=[9,16,17,18,36,37,38,39,40,91,92,93],r=function(t){for(var e=0,n=i.length;e<n;e++)if(t==i[e])return!1;return!0},o=function(t){return t=t||{},t={precision:t.hasOwnProperty("precision")?t.precision:2,separator:t.separator||",",delimiter:t.delimiter||".",unit:t.unit&&t.unit.replace(/[\s]/g,"")+" "||"",suffixUnit:t.suffixUnit&&" "+t.suffixUnit.replace(/[\s]/g,"")||"",zeroCents:t.zeroCents,lastOutput:t.lastOutput},t.moneyPrecision=t.zeroCents?0:t.precision,t},s=function(i,r,o){for(;r<i.length;r++)i[r]!==t&&i[r]!==e&&i[r]!==n||(i[r]=o);return i},l=function(t){this.elements=t};l.prototype.unbindElementToMask=function(){for(var t=0,e=this.elements.length;t<e;t++)this.elements[t].lastOutput="",this.elements[t].onkeyup=!1,this.elements[t].onkeydown=!1,this.elements[t].value.length&&(this.elements[t].value=this.elements[t].value.replace(/\D/g,""))},l.prototype.bindElementToMask=function(t){for(var e=this,n=function(n){n=n||window.event;var i=n.target||n.srcElement;r(n.keyCode)&&setTimeout(function(){e.opts.lastOutput=i.lastOutput,i.value=a[t](i.value,e.opts),i.lastOutput=i.value,i.setSelectionRange&&e.opts.suffixUnit&&i.setSelectionRange(i.value.length,i.value.length-e.opts.suffixUnit.length)},0)},i=0,o=this.elements.length;i<o;i++)this.elements[i].lastOutput="",this.elements[i].onkeyup=n,this.elements[i].value.length&&(this.elements[i].value=a[t](this.elements[i].value,this.opts))},l.prototype.maskMoney=function(t){this.opts=o(t),this.bindElementToMask("toMoney")},l.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},l.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},l.prototype.maskPattern=function(t){this.opts={pattern:t},this.bindElementToMask("toPattern")},l.prototype.unMask=function(){this.unbindElementToMask()};var a=function(t){if(!t)throw new Error("VanillaMasker: There is no element to bind.");var e="length"in t?t.length?t:[]:[t];return new l(e)};return a.toMoney=function(t,e){if(e=o(e),e.zeroCents){e.lastOutput=e.lastOutput||"";var n="("+e.separator+"[0]{0,"+e.precision+"})",i=new RegExp(n,"g"),r=t.toString().replace(/[\D]/g,"").length||0,s=e.lastOutput.toString().replace(/[\D]/g,"").length||0;t=t.toString().replace(i,""),r<s&&(t=t.slice(0,t.length-1))}var l=t.toString().replace(/[\D]/g,""),a=new RegExp("^(0|\\"+e.delimiter+")"),u=new RegExp("(\\"+e.separator+")$"),p=l.substr(0,l.length-e.moneyPrecision),h=p.substr(0,p.length%3),c=new Array(e.precision+1).join("0");p=p.substr(p.length%3,p.length);for(var g=0,f=p.length;g<f;g++)g%3===0&&(h+=e.delimiter),h+=p[g];if(h=h.replace(a,""),h=h.length?h:"0",!e.zeroCents){var m=l.length-e.precision,v=l.substr(m,e.precision),y=v.length,b=e.precision>y?e.precision:y;c=(c+v).slice(-b)}var d=e.unit+h+e.separator+c+e.suffixUnit;return d.replace(u,"")},a.toPattern=function(i,r){var o,l="object"==typeof r?r.pattern:r,a=l.replace(/\W/g,""),u=l.split(""),p=i.toString().replace(/\W/g,""),h=p.replace(/\W/g,""),c=0,g=u.length,f="object"==typeof r?r.placeholder:void 0;for(o=0;o<g;o++){if(c>=p.length){if(a.length==h.length)return u.join("");if(void 0!==f&&a.length>h.length)return s(u,o,f).join("");break}if(u[o]===t&&p[c].match(/[0-9]/)||u[o]===e&&p[c].match(/[a-zA-Z]/)||u[o]===n&&p[c].match(/[0-9a-zA-Z]/))u[o]=p[c++];else if(u[o]===t||u[o]===e||u[o]===n)return void 0!==f?s(u,o,f).join(""):u.slice(0,o).join("")}return u.join("").substr(0,o)},a.toNumber=function(t){return t.toString().replace(/(?!^-)[^0-9]/g,"")},a.toAlphaNumeric=function(t){return t.toString().replace(/[^a-z0-9 ]+/i,"")},a});