let tag,tagAttributes,childNode,childNodeAttributes,outputText,listArr,loremTargets=document.querySelectorAll("[lorem-fill]"),loremText={fill:"Lorem",sent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",list:["Lorem"," ipsum"," dolor"," sit"," amet"," consectetur"," adipiscing"," elit"," sed"," do"," eiusmod"," tempor"," incididunt"," ut"," labore"," et"," dolore"," magna"," aliqua"],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};const loremFill={beginFill:function(){loremTargets.forEach(e=>{if(void 0===e.innerHTML.trim()&&""!==e.innerHTML.trim())outputText=this.outputLorem(e.innerText),(tag=document.createElement(e.nodeName.toLowerCase())).innerHTML=outputText,tagAttributes=e.attributes,this.cloneAttributes(tagAttributes),e.attributes["lorem-fill"]&&e.hasChildNodes()&&(e.innerText=outputText,this.cloneElements(e,Number(e.attributes["lorem-fill"].value)-1)),this.cloneElements(e,Number(e.attributes["lorem-fill"].value));else if(e.hasChildNodes()&&null!==e.lastElementChild){if(outputText=this.outputLorem(e.innerText),tag=document.createElement(e.nodeName.toLowerCase()),e.hasChildNodes()){e.childNodes.forEach(e=>{outputText=this.outputLorem(e.innerText),""!==e.innerText&&(listArr=Array.from(outputText),e.innerText=this.randomList(),childNode=document.createElement(e.nodeName.toLowerCase()),childNodeAttributes=e.attributes,this.cloneAttributes(childNodeAttributes,!0),childNode.innerHTML=this.randomList(),tag.append(childNode))})}this.cloneElements(e,Number(e.attributes["lorem-fill"].value)-1)}else{null!==new RegExp("{{.*").exec(e.innerText)&&(outputText=this.outputLorem(e.innerText),e.innerText=outputText,(tag=document.createElement(e.nodeName.toLowerCase())).innerHTML=outputText,tagAttributes=e.attributes,this.cloneAttributes(tagAttributes),this.cloneElements(e,Number(e.attributes["lorem-fill"].value)-1))}})},randomList:()=>listArr[Math.floor(Math.random()*listArr.length)],outputLorem:function(e){return new RegExp("{{.*").exec(e)?"{{lorem-sent}}"===e?loremText.sent:"{{lorem-pg}}"===e?loremText.paragraph:"{{lorem-list}}"===e?loremText.list:"{{lorem}}"===e?loremText.fill:void 0:e},cloneElements:function(e,t){let i,o=e,l=document.createDocumentFragment();console.log(),l.append(tag);let r=t;for(let e=0;e<r;e++)null!==tag.lastElementChild&&(childNode.innerHTML=this.randomList(),tag.append(childNode)),i=l.cloneNode(!0),o.after(i)},cloneAttributes:function(e,t=!1){for(let i=0;i<e.length;i++)"lorem-fill"!==e[i].nodeName&&(t?childNode.setAttribute(e[i].nodeName,e[i].nodeValue):tag.setAttribute(e[i].nodeName,e[i].nodeValue))}};loremFill.beginFill(),module.exports=loremFill;
