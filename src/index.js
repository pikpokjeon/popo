import {el, is, setAttr, updateChildren, element, fragment, renderTo,} from './utils.js'
import {Action} from './lib.js'


const svg = element('svg')
// 업데이트 필요함
const randomPosition = ( {trap, apple} ) =>
{
    const tiles = 25
    const random = ( num ) => Math.floor( Math.random() * num )
    const positions = [trap, apple]
    const repositioned = positions.map( ( position, i ) =>
    {
        const randomX = random( tiles )
        const randomY = random( tiles - 10 )
        console.log( randomX, randomY )
        if ( position[0] !== randomY || position[1] !== randomX ) return [randomY, randomX]
        else return position
    } )

    return ({trapP:repositioned[0], appleP:repositioned[1]})
}


const play = ( store ) => new Promise( ( res ) =>
{
    const {trapP, appleP} = randomPosition( {trap: [4,10], apple:[10,5]} )


    const trapS =  el.id( `square-${trapP[0]}-${trapP[1]}` )
    const appleS = el.id( `square-${appleP[0]}-${appleP[1]}` )
    // svg 요소간 비교 true, false
    // console.log(trapS === trapS, trapS === appleS)
    return res({trapS, appleS, store: {}})
})
   
const setColor = ( {trapS, appleS, store} ) => new Promise
    ((res,rej) => {

    console.log(trapS,appleS)

        if ( trapS && appleS )
        {
            setAttr( 'svg', trapS, {'fill': 'black'} )
            setAttr( 'svg', appleS, {'fill': 'yellow'} )
        
            return res( {store} )
        } 
    
})

const finalRender = ( {store} ) => ( parent, childGroup ) => new Promise(res =>
{
    console.log(parent)
    parent.appendChild( childGroup )
    return parent
    
})
//출력성공

const renderTiles = ( store ) =>
{
    const {trapP, appleP} = randomPosition( {trap: [3, 12], apple: [20, 5]} )
    const {width, height} = document.getClient
    const rect = svg('rect',{width:25,height:25, fill: 'red', stroke: 'white'})
    
}

const init = ( store ) => 
{
    const main = el.id( 'main' )
    const {width, height} = main.getBoundingClientRect()
    const svgRoot = svg( 'svg', {id: 'svg-root', } )
    const group = svg( 'g', {id: 'tiles-group'} )
    const rect = svg( 'rect' )
    const Rects = ( iX, iY, arr, width, height ) =>
    {
        const tiles = 25

        if ( iY > tiles - 10 )
        {
            return arr
        }
        else if ( iX > tiles )
        {
            iX = 0, iY++
            return Rects( 0, iY, arr, width )

        }
        const x = width / tiles * iX
        const y = width / tiles * iY
        const square = rect( {name: 'square', id: `square-${iY}-${iX}`, width: width / tiles, height: width / tiles, x, y, fill: 'red', stroke: 'white'} )
        arr.push( square )

        return Rects( iX + 1, iY, arr, width )
    }
    const tileGroup = children => group( {id: 'tile-group'}, [...children] )

    const svgg = svgRoot( {visibility: 'visible', width, height},
        [
            group(
                [
                    tileGroup( Rects( 0, -1, [], width ) )
                ] )
        ] )

    
    main.appendChild(svgg)
}
    

init({})