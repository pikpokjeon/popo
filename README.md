# popo
popo the mini frontend vanila js library to manage DOM and States
 https://www.npmjs.com/package/popo-dom

### [Working on Documentation] -29,sep,2022
 example here => https://github.com/pikpokjeon/calendate-js/blob/main/src/app.js
---

```javascript
import {Popo} from 'popo-dom'

const {element, setAttr, appendTo, el} = Popo

const SVG = element('svg')
const HTML = element('html')

const root = el.id('main') // get parameter id matching DOM
const svgRoot = SVG('svg') // declare which type of svg
const rect = SVG('rect')
const g = SVG('g')

const Rects = group => {
  const rectChildren = Array(8).fill(-1).map( r => rect({...rect svg attributes}))
  return appendTo(group).child(rectChildren) // returns the parent
}

const RectsGroup = Rects(g)

const svgTree = svgRoot([ RectsGroup ])
       
root.appendChild(svgTree)
```


``` javascript
// 1. Declare which DOM you want to make, 'html' or 'svg'
const HTML = element('html')

//2. Declare which type of the DOM you want to make
const messageBox = HTML('div')
const message = HTML('p')
const box = HTML('section')

//3. append it like a tree
const htmlTree = box({text:'MessageBox'}, [
   Array(3).fill(-1).map( (mb,i) => 
   messageBox({text:'mesaage received'}, [
     message({text: `message:${i} message`]
  ] )
 

```
