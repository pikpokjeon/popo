import {el, is, setAttr, updateChildren, element} from './utils.js'
import {Action} from './lib.js'

const mainDOM = el.id( 'main' )

const action = Action( {
    action: {
        number: 100,
    }
}, mainDOM )

const {width, height} = mainDOM.getBoundingClientRect()

const SVG = element( 'svg' )
const HTML = element( 'html' )

const ul = HTML( 'ul' )
const tiles = 25
const life = 5
const tail = 3
const group = SVG( 'g' )
const trap = [-1, -1]
const apple = [-1, -1]


const li = Array( life ).fill( 0 ).map( ( _, i ) =>
{
    const li = HTML( 'li' )
    return li( {name: `life-${i}`, text: '★'} )
} )

const k = HTML( 'li' )

// 출력성공
const lifeList = ul( [...li, HTML( 'li' )( {text: 'ohhhh'} )] )

mainDOM.appendChild( lifeList )



//출력성공
const svg = SVG( 'svg' )
const Rect = SVG( 'rect' )

const squares = ( iX, iY, arr ) =>
{
    if ( iY > tiles - 10 )
    {
        return arr
    }
    else if ( iX > tiles )
    {
        iX = 0, iY++
        return squares( 0, iY, arr )

    }
    const x = width / tiles * iX
    const y = width / tiles * iY
    const square = Rect( {name: 'square', id: `square-${iY}-${iX}`, width: width / tiles, height: width / tiles, x, y, fill: 'red', stroke: 'white'} )
    arr.push( square )

    return squares( iX + 1, iY, arr )
})

const sGroup = svg( {width: width, height: width, overflow: 'visible'},
    [...squares( 0, 1, [] ),]
)


mainDOM.appendChild( sGroup )

// 업데이트 필요함
const randomPosition = ( trap, apple ) =>
{
    const random = ( num ) => Math.floor( Math.random() * num )
    const positions = [trap, apple]
    positions.forEach( ( position, i ) =>
    {
        const randomX = random( tiles )
        const randomY = random( tiles - 10 )
        if ( position[0] !== randomX && position[1] !== randomY ) return [randomX, randomY]
        else return position
    } )

    console.log( randomX, randomY )
    return {trap:positions[0], apple:positions[1]}
}

randomPosition( trap, apple )