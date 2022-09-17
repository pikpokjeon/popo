import {pipe, is, removeChild, element, fragment, renderTo} from './utils.js'

// svg attribute
// const {width, height} = mainDOM.getBoundingClientRect()

const genAttr = ( {w, h} ) => 
{

    const color = {
        svg: 'black',
        tiles: 'gray',
        snake: {
            head: 'red', body:'orange', tail: 'yellow'
        },
        indecator: {
            life: 'red',
            exit: 'black',
            poison: 'purple',
        },
        text: {
            strong: 'white',
        },
        theme: 'red'
    }

    const coord = {
        x: i => '',
        y: v => '',
        idx: x => -1,
    }

    const gameTiles = {

    }

    const gameInterface = {

    }

    const arrowKeys = {

    
    }

    const snakeTiles = {

        
    }
}

//svg, html dynamic dom

const svg = element( 'svg' )
const html = element('html')

const group = svg('g')
// 생명아이콘
const lifeList = html('ul')

// 표시등
const circle = svg('circle')

// 타일
const square = svg('rect')

// 타일 바탕

// 뱀 패턴 타일
const animatedSquare = ( {x, y, r} ) =>
{
    // 0.5초당 위아래로 타일 움직임 Animation
}

// 방향키

const arrowKeys = Array( 4 ).fill(-1).map( ( _, i ) =>
{
    return square({name:`arrow-keys-${i}`,text: '*'})
})




