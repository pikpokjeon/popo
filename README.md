# popo[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fpikpokjeon%2Fpopo&count_bg=%2328DCFF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)
popo the mini frontend vanila js library to manage DOM and States
 https://www.npmjs.com/package/popo-dom

### [Working on features] -09,Oct,2022
---

| Example  |    Result    |    
|--------|--------|
|<img src='https://github.com/pikpokjeon/popo/blob/main/assets/code.png' width =450 >|<img src='https://github.com/pikpokjeon/popo/blob/main/assets/popotest.png' width =250 >|


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
