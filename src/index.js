import {el, pipe, is, }  from './utils.js'
import {element, fragment,setAttr}    from './lib.js'

const main = el.id( 'main' )
const svg = element('svg')
const html = element('html')

const svgBg = svg('svg' )
const group = svg( 'g' )
const bg = svg('rect')
const user = svg('circle',)

const moveTo = target => ( y, x ) =>
{
    // const {layer}
    const cx = Number(target.getAttribute('cx'))
    const cy = Number( target.getAttribute( 'cy' ) )
    const ratio = direction => direction === 'x'? cx/1400 * 100 : cy/1000 *100
    // console.log(target,a)
    setAttr( 'svg',target, {cx: cx+x*ratio('x'), cy: cy+y*ratio('y')} )
    // return ({cx,cy})
}

const resize = e =>
{
    const {width, height} = main.getBoundingClientRect()
    console.log( 'w', width, 'h', height )
    console.log('e',e)
}


const keyInput = store => e =>
{
    const _ = {...store}
    const circle = el.id( 'user' )
    const move = moveTo(circle)
    console.log( e.keyCode )
    console.log(_.velo)
    switch ( e.keyCode )
    {
        case 37:
            //left [y,-1]
            move(0,-1)
            break;
        case 38:
            //up [-1,0]
            move(-1,0)
            break;
        case 39:
            //right [y,1]
            move( 0, 1 )
            // e.preventDefault()
            break;
        case 40:
            //down [1, x]
            move(1,0)
            break;
        case 32:
            //space - resize
            
            break;
        case 13:

            break;
    }

    return e.keyCode
}

const store = {velo:[1,0]}
document.addEventListener('keydown', keyInput(store))
window.addEventListener('resize', resize)

console.log( main,svgBg )
main.appendChild(
    svgBg( {id: 'svg-root', width: 1400, height: 1000, visibilities:'hidden'}, [
        group( [
            bg( {id: 'background', width: 1400, height: 1000, fill: 'black'} ),
        ]),            user( {id: 'user', cx: 1400/2, cy: 1000/2, r: 50, fill: 'red'} )
] ) )
