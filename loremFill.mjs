(e=>{let t,n,i,o,r,l,a,s=[],u=[],d=e.querySelectorAll("[lorem-pg], [lorem-sent], [lorem]");l=["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","enim","ad","minim","veniam","quis","nostrud","exercitation","ullamco","laboris","nisi","ut","aliquip","ex","ea","commodo","consequat","duis","aute","irure","in","reprehenderit","voluptate","velit","esse","cillum","dolore","eu","fugiat","nulla","pariatur","excepteur","sint","occaecat","cupidatat","non","proident","sunt","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum"],{beginFill:function(){d.forEach(l=>{if(0===l.childNodes.length)(t=e.createElement(l.nodeName.toLowerCase())).innerHTML=this.outputLorem(l.attributes[0].nodeName),n=l.attributes,this.cloneAttributes(n),this.cloneElements(l,l.attributes[0].value);else if(0!==l.childNodes.length&&null!==l.lastElementChild){if(r=this.outputLorem(l.attributes[0].nodeName),t=e.createElement(l.nodeName.toLowerCase()),l.hasChildNodes()){l.childNodes.forEach(n=>{"#text"!==n.innerText&&void 0!==n.innerText&&(n.innerText=this.randomList(0),i=e.createElement(n.nodeName.toLowerCase()),o=n.attributes,this.cloneAttributes(o,!0),i.innerHTML=this.randomList(0),t.append(i))})}this.cloneElements(l,l.attributes[0].value-1)}})},randomList:function(e,t=!1){if(t){for(let t=0;t<e;t++)s[t]=l[Math.floor(Math.random()*l.length)];return s}return l[Math.floor(Math.random()*l.length)]},createSentence:function(e,t=!1){if(0!==e||t){for(let t=0;t<e;t++){this.randomList(8,!0);let e=s.join().replace(/,/g," ");e=e.charAt(0).toUpperCase()+e.slice(1),u[t]=e+".";let n=u.join();(a=n.replace(/,/g," ")).toString()}return a}{this.randomList(8,!0);let e=s.join().replace(/,/g," ");return(e=e.charAt(0).toUpperCase()+e.slice(1))+"."}},outputLorem:function(e){return e.includes("lorem-sent")?this.createSentence(0):e.includes("lorem-pg")?this.createSentence(10,!0):e.includes("lorem")?this.randomList(0):e?void 0:e},cloneElements:function(n,o){let r,l=n,a=e.createDocumentFragment();a.append(t);for(let e=0;e<o;e++)null!==t.lastElementChild&&(i.innerHTML=this.randomList(0),t.append(i)),r=a.cloneNode(!0),l.after(r)},cloneAttributes:function(e,n=!1){for(let o=0;o<e.length;o++)"lorem"!==e[o].nodeName&&"lorem-pg"!==e[o].nodeName&&"lorem-sent"!==e[o].nodeName&&(n?i.setAttribute(e[o].nodeName,e[o].nodeValue):t.setAttribute(e[o].nodeName,e[o].nodeValue))}}.beginFill()})(document,window);