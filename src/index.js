import {setAttr, updateChildren, element, fragment, renderTo, setAttrs, } from './lib.js'
import {el, is} from './utils.js'

const svg = element( 'svg' )
const html = element( 'html' )

const listTitle = idx => html( 'h3', {'class': 'list-title', 'text': `[${idx}] List`} )
const base = idx => html( 'article', {'class': 'list-wrapper', 'id': `list-${idx}`, 'text': idx} )
const list = html( 'ul', {'class': 'list-ul'} )
const listItem = html( 'li', {'class': 'list-item'} )

const listItem2 = Array.from( Array( 10 ).fill( 0 ).map( ( _, i ) => i + 1 ) ).map( num => listItem( {text: num} ) )

const rootElem = document.getElementById( 'main' )

const tree = list( [...listItem2] )
rootElem.appendChild( tree )