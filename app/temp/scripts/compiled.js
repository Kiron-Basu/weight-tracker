!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1);alert("testing is it PIG?")},function(e,t){console.log("hello");let n=[];var r,o=document.querySelector(".increment-btn"),l=document.querySelector(".decrement-btn"),a=document.querySelector(".weight-input"),c=document.querySelector(".clear-btn"),u=document.querySelector(".submit-btn");o.addEventListener("click",function(){a.value=parseInt(a.value)+1}),o.addEventListener("keyup",d),l.addEventListener("click",function(){a.value=parseInt(a.value)-1}),l.addEventListener("keyup",d),c.addEventListener("click",function(){this.weightArray=[],a.value=0;var e=document.querySelectorAll(".graph__single-bar"),t=Array.from(e);console.log("arr from nodelist = "+t),t&&(console.log("got here"),i(t),localStorage.clear());console.log(n)}),u.addEventListener("click",s),a.addEventListener("keyup",d),function(){for(let r=0;r<localStorage.length;r++){const o=localStorage.key(r),l=localStorage.getItem(o);var e=document.createElement("div"),t=document.createElement("span");e.classList.add("graph__single-bar"),e.setAttribute("id","span"),e.appendChild(t),document.getElementById("chart-wrapper").appendChild(e),e.style.height=l+"px",e.style.date=o,t.innerHTML=o+" "+l+'<button id="delete-btn">remove</button>',t.setAttribute("id",o);var n=document.getElementById(o);g(e,t,n,o),console.log("current key is: "+o)}}();const i=e=>[...e].forEach(e=>e.remove());function d(e){13===e.keyCode&&s()}function s(){n.push(a.value/3*12),r=m(),localStorage.setItem(m(),n[n.length-1]),function(){var e=r;const t=localStorage.getItem(e);var n=document.createElement("div"),o=document.createElement("span");n.classList.add("graph__single-bar"),n.setAttribute("id","span"),n.appendChild(o),document.getElementById("chart-wrapper").appendChild(n),n.style.height=t+"px",n.style.date=e,o.innerHTML=e+" "+t+"<button>remove</button>",o.setAttribute("id",e);var l=document.getElementById(e);g(n,o,l,e)}()}function g(e,t,n,r){e.addEventListener("mouseover",function(){t.classList.add("graph__single-bar--visible")}),e.addEventListener("mouseleave",function(){t.classList.remove("graph__single-bar--visible")}),n.addEventListener("click",function(){console.log("clicked and key was: "+r),function(e){console.log("remove button clicked and value received was: "+e),localStorage.removeItem(e),document.getElementById(e).parentElement.remove()}(r)})}function m(){var e=new Date,t=1==e.getSeconds().toString().length?"0"+e.getSeconds():e.getSeconds(),n=1==e.getMinutes().toString().length?"0"+e.getMinutes():e.getMinutes(),r=1==e.getHours().toString().length?"0"+e.getHours():e.getHours(),o=e.getHours()>=12?"pm":"am";return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()]+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+e.getDate()+" "+e.getFullYear()+" "+r+":"+n+":"+t+o}}]);