import {pipe, is, removeChild, element, fragment, renderTo} from './utils.js'
import {PLAY_INIT_DATA} from './immutable.js'
// svg attribute
// const {width, height} = mainDOM.getBoundingClientRect()

const genAttr = ( root ) => 
{
    const {width, height} = root.getBoundingClientRect()

    const tileWCount = width / PLAY_INIT_DATA.TILE.MIN_SIZE
    const tileHCount = height / PLAY_INIT_DATA.TILE.MIN_SIZE 
    let tileWidth =  height/tileHCount < PLAY_INIT_DATA.TILE.MIN_SIZE ? PLAY_INIT_DATA.TILE.MIN_SIZE :height / tileWCount
    
    const color = {
        svg: 'black',
        tiles: 'gray',
        snake: {
            head: 'red', body: 'orange', tail: 'yellow'
        },
        indecator: {
            life: 'red',
            exit: 'black',
            poison: 'purple',
        },
        text: {
            strong: 'white',
        },
        theme: 'red',
        primary: 'white'
    }

    const coord = {
        x: i => tileWidth * i,
        y: i => tileWidth * i,
        idx: v =>
        {
            const gap = tileWidth - v
            return Math.floor(width/gap) 
        },
    }

    const gameTiles = {
        x: i => i * tileWidth,
        y: i => i * width/tileHCount,
        name: 'tile',
        id: ( xId, yId )`tile-${yId}-${xId}`,
        width: tileWidth,
        height: tileWidth,
        fill: color.tiles,
        stroke: 'transparent'
    }

    const gameInterface = {
        ...coord,
        stroke: color.text

    }

    const arrowKeys = {
        x: width / 2,
        y: height - 100,
        name: 'arrows',
        id: id => `arrow-${id}`,
        width: 60,
        height: 60,
        fill: color.black,
        stroke: color.primary,
        style: "opacity:0.65;stroke:black;stroke-width:1",


    }

    const snakeTiles = {
        x: i => i * tileWidth,
        y: i => i * width/tileHCount,
        width: tileWidth,
        height: tileWidth,
        fill: ( part ) => color.snake[part],
        style: "opacity:0.65;stroke:black;stroke-width:1",

    }

    return {color,coord,gameTiles,gameInterface,arrowKeys,snakeTiles}
}

//svg, html dynamic dom

const svg = element( 'svg' )
const html = element( 'html' )

const ul = html( 'ul' )
const li = html('li')
const div = html('div')

const group = svg( 'g' )
const circle = svg( 'circle' )
const rect = svg( 'rect' )



// 생명아이콘
const lifeList = count => 
{
    return ul( [Array( count + 1 ).fill( '+' ).map( ( text, i ) =>
    {
        if ( i < 1 ) return li( {text: PLAY_INIT_DATA.LIFE} )
        else return li([div({text})])
    })])    
}

// 표시등

// 타일

// 타일 바탕

// 뱀 패턴 타일
const animatedrect = ( {x, y, r} ) =>
{
    // 0.5초당 위아래로 타일 움직임 Animation
}

// 방향키

const arrowKeys = Array( 4 ).fill( -1 ).map( ( _, i ) =>
{
    return rect( {name: `arrow-keys-${i}`, text: '*'} )
} )




