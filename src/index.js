import {element} from './lib.js'
import {iterate} from './utils.js'
const rootElem = document.getElementById( 'main' )

const html = element( 'html' )

// *Prefix
const groupTitle = html( 'h3', {class: 'group-title'} )
const listTitle = html( 'h4', {'class': 'list-title', } )
const base = html( 'article', {'class': 'list-wrapper', } )
const list = html( 'ul', {'class': 'list-ul'} )
const listItem = html( 'li', {'class': 'list-item'} )

const listWithTitles = ( boxIdx, startIdx ) => iterate( {length: 10, startIdx} )
    .map( num =>
        listItem( {id: `list-item-${boxIdx}-${num}`}, [
            listTitle( {'text': `[${num}] List`} )
        ] )
    )
const listBox = iterate( {length: 5, startIdx: 0} ).map( _ => base )

const tree = listBox.map( ( box, idx ) => box( {'id': `list-${idx}`, }, [list( [
    groupTitle( {'text': `${idx}-Group`} ), ...listWithTitles( idx, 10 * idx + 1 )
] )
] ) )

tree.forEach( group => rootElem.appendChild( group ) )
