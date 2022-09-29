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


const placeItems = ( store ) => new Promise( ( res ) =>
{
    const {trapP, appleP} = randomPosition( {trap: store.trap, apple: store.apple} )


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
    
    const keyInput = e =>
    {
        console.log(e.keyCode)
        switch ( e.keyCode )
        {
            case 37:
                //left
                placeItems({})
                e.preventDefault()
                break;
            case 38:
                //up
                e.preventDefault()
                break;
            case 39:
                //right
                e.preventDefault()
                break;
            case 40:
                //down
                e.preventDefault()
                break;
            case 32:
                //space - pause
                e.preventDefault()
                break;
            case 27:
                //esc stop
                e.preventDefault()
                break;
        }
    }

    document.addEventListener('keydown', keyInput)

    
    main.appendChild( svgg )
    
}



const channel = ( initData ) =>
{
    let store = {...initData}
    const subscribers = Object.keys( store ).reduce( ( acc, cur ) => {Object.assign( acc, {[cur]: []} ); return acc}, {} )
    
    const get = () => ({...store})

    const set =  (key,...updates) =>
    {
        const prev = store
        const updateArr = Object.keys( updates )
        for ( const k of updateArr ) 
        {
            console.log(k,updateArr[k])
            if ( prev[k] !== updateArr[k] )
            {
                notify(key)
            } else
            {
                return
            }
            Reflect.set( store[key], k, updateArr[k] )

        }
    }
    const subscribe = (key, sub) =>
    {
        console.log(key, sub)
        subscribers[key].push(sub)
    }
    const notify = key => 
    {
        key = `${key}`
        console.log( subscribers[key], key )
        if(subscribers[key].length > 0 )
        {
            subscribers[key].forEach( s => s() );    
            }

    }

    const action = fn => (key, ...args ) =>
    {
        
        set(key, fn( ...args, get() ) ?? {} )
    
    }
    return {get,set,subscribe,notify,action}
    
}

const initPlayData = {
    cur :[0, 0],
    moveTo: [0, 1],
    key:36,
    level: 0,
    speed: 1,
    life: 5,
    trap: [13, 5],
    apple: [2, 20],
    isKeyDown:false,
}

init( initPlayData )
init( initPlayData )

const a = channel(initPlayData)
a.subscribe( 'moveTo', () =>
{
    const {cur, moveTo, level} = a.get()
    let [y, x] = [cur[0] + moveTo[0], cur[0] + moveTo[0]]
    if ( y > 15 )
    {
        y = 0
    } else if ( y < 0 )
    {
        y= 15
    }

    if ( x > 25 )
    {
        x = 0    
    } else if ( x < 0 )
    {
        x = 25
    }
    a.set( 'moveTo', {cur: [x,y]} )
    console.log( cur, moveTo, level ,'1111')
})

a.notify( 'moveTo' )

const b = a.action( ( {cur, moveTo, level} ) =>
{
    console.log( cur, moveTo, level ,'OOOOOOO')
    console.log(cur[0]+moveTo[0], cur[1]+ moveTo[1])
    return({cur:[cur[0]+moveTo[0],cur[0]+moveTo[0]], level: level+1})
})

a.subscribe( 'cur', () => 
{

})

a.notify('cur')
// a.notify('cur')
// a.notify('cur')

// 루프
// 지나가는 뱀 루프

// 누르는 키 업데이트