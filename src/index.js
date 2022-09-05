import {el, is, setAttr, updateChildren, element} from './utils.js'

const mainDOM = el.id( 'main' )
const {width, height} = mainDOM.getBoundingClientRect()

const SVG = element( 'svg' )
const HTML = element( 'html' )
const svg = SVG( 'svg' )
const ul = HTML( 'ul' )
const tiles = 15
const group = SVG( 'g' )
const li = Array( tiles ).fill( 0 ).map( ( _, i ) =>
{
    const li = HTML( 'li' )
    return li( {text: `${i}`} )
} )

const k = HTML( 'li' )

// 출력성공
const lists = ul( [...li, HTML( 'li' )( {text: 'ohhhh'} ), k( {text: 'gg'}, k( {text: '4343'} ) )] )

mainDOM.appendChild( lists )



//출력성공

const squares = ( iX, iY, arr ) =>
{
    if ( iY > 10 )
    {
        return arr
    }
    else if ( iX > 15 )
    {
        iX = 0, iY++
        return squares( 0, iY, arr )

    }
    const x = width / tiles * iX
    const y = width / tiles * iY
    const Rect = SVG( 'rect' )
    const square = Rect( {name: 'square', id: `square-${iX + iY}`, width: width / tiles, height: width / tiles, x, y, fill: 'red', stroke: 'white'} )
    arr.push( square )
    console.log( square )

    return squares( iX + 1, iY, arr )
})

const sGroup = svg( {width: width, height: width, overflow: 'visible'}, [...squares( 0, 0, [] )] )


mainDOM.appendChild( sGroup )