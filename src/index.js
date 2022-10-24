import {setAttr, updateChildren, element, fragment, renderTo, } from './lib.js'
import {el, is} from './utils.js'

const svg = element( 'svg' )
// 업데이트 필요함
const random = ( num ) => Math.floor( Math.random() * num )

const randomPosition = ( initPosition ) =>
{
    const tiles = 50
    console.log( initPosition )
    const [y, x] = initPosition

    const randomX = random( tiles )
    const randomY = random( tiles - 20 )
    console.log( randomX, randomY )
    if ( initPosition[0] !== randomY || initPosition[1] !== randomX ) return [randomY, randomX]
    return [...initPosition]

}

const moveTo = ( store, direction ) =>
{
    const [horizontal, vertical] = direction
}
const placeItems = ( store ) => new Promise( ( res ) =>
{
    let {trap, apple, cur} = store.get()
    // 함수의 재사용성을 높히기 위해 리팩터링
    // const {trapP, appleP} = randomPosition( {trap: trap, apple: apple} )
    let trapP = randomPosition( trap )
    let appleP = randomPosition( apple )
    let current = randomPosition( cur )
    store.set( {apple: appleP} )
    store.set( {cur: current} )
    store.set( {trap: trapP} )
    const trapS = el.id( `square-${trapP[0]}-${trapP[1]}` )
    const appleS = el.id( `square-${appleP[0]}-${appleP[1]}` )
    const currentS = el.id( `square-${current[0]}-${current[1]}` )
    // svg 요소간 비교 true, false
    // console.log(trapS === trapS, trapS === appleS)
    return res( {trapS, appleS, currentS, store} )
} )
// 재사용가능하도록 변경필요
const setColor = ( {trapS, appleS, currentS, store} ) => new Promise
    ( ( res ) =>
    {
        if ( trapS && appleS )
        {
            setAttr( 'svg', trapS, {'fill': 'black'} )
            setAttr( 'svg', appleS, {'fill': 'yellow'} )

        } else if ( currentS )
        {
            setAttr( 'svg', currentS, {'fill': 'green'} )
        }
        else
        {
            return placeItems( store ).then( setColor ).then( renderTiles )

        }
        return res( {store} )


    } )

const finalRender = ( {store} ) => ( parent, childGroup ) => new Promise( res =>
{
    console.log( parent )
    parent.appendChild( childGroup )
    return parent

} )
//출력성공

const renderTiles = ( {store} ) =>
{
    const {trap, apple} = store
    console.log( store )

}

const init = ( store ) => 
{
    const main = el.id( 'main' )
    let {width, height} = main.getBoundingClientRect()
    store.set( {width, height} )
    let {cur} = store.get()
    const svgRoot = svg( 'svg', {id: 'svg-root', class: 'game-screen'} )
    const group = svg( 'g', {id: 'tiles-group'} )
    const rect = svg( 'rect' )
    const Rects = ( iX, iY, arr, width, height ) =>
    {
        const tiles = 50 //storage에 관리

        if ( iY > tiles - 20 )
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
        const square = rect( {name: 'square', class: 'background-rects', id: `square-${iY}-${iX}`, width: width / tiles, height: width / tiles, x, y, fill: 'red', stroke: 'white'} )
        arr.push( square )

        return Rects( iX + 1, iY, arr, width )
    }

    placeItems( store ).then( setColor ).then( renderTiles )
    // const current = randomPosition( cur )
    // store.set( {cur: current} )
    const loopMove = ( store ) =>
    {
        let {cur, moveTo} = store.get()
        const after = cur.map( ( c, i ) => c + moveTo[i] )
        store.set( {'cur': [...after]} )
        console.log( after )
        console.log( store.get(), cur, direction )
        return store

    }
    const tileGroup = children => group( {id: 'tile-group'}, [...children] )

    const svgg = svgRoot( {visibility: 'visible', width, height},
        [
            group(
                [
                    tileGroup( Rects( 0, 1, [], width ) )
                ] )
        ] )

    const updatePosition = store =>
    {
        let {moveTo, cur, apple, trap} = store.get()
        const nextPosition = [...cur.map( ( pos, idx ) => pos + moveTo[idx] )]
        const prevBlock = el.id( `square-${cur[0]}-${cur[1]}` )
        const movedBlock = el.id( `square-${nextPosition[0]}-${nextPosition[1]}` )
        if ( ( apple[0] === cur[0] && apple[1] === cur[1] ) )
        {
            setAttr( 'svg', prevBlock, {'fill': 'yellow'} )
            setAttr( 'svg', movedBlock, {'fill': 'green'} )
        } else if ( trap[0] === cur[0] && trap[1] === cur[1] )
        {
            setAttr( 'svg', prevBlock, {'fill': 'black'} )
            setAttr( 'svg', movedBlock, {'fill': 'green'} )

        } else
        {
            setAttr( 'svg', prevBlock, {'fill': 'red'} )
            setAttr( 'svg', movedBlock, {'fill': 'green'} )
        }
        store.set( {cur: nextPosition} )
        console.log( moveTo, cur )
        return store
    }

    let prevKey = -1

    const keyInput = e =>
    {
        console.log( e.keyCode )
        console.log( '[이전에 누른키]--', prevKey )
        switch ( e.keyCode )
        {
            case 37:
                //left
                store.set( {moveTo: [0, -1]} )
                updatePosition( store )
                e.preventDefault()
                prevKey = 37
                break
            case 38:
                //up
                store.set( {moveTo: [-1, 0]} )
                updatePosition( store )
                e.preventDefault()
                prevKey = 38
                break

            case 39:
                //right
                store.set( {moveTo: [0, 1]} )
                e.preventDefault()
                updatePosition( store )

                prevKey = 39
                break

            case 40:
                //down
                store.set( {moveTo: [1, 0]} )
                e.preventDefault()
                updatePosition( store )

                prevKey = 40
                break

            case 32:
                //space - pause
                store.set( {moveTo: [0, 0]} )
                e.preventDefault()
                prevKey = 32
                break

            case 27:
                //esc stop
                store.set( {moveTo: [0, 0]} )
                e.preventDefault()
                prevKey = 27
                break

            default:
                prevKey = e.keyCode
        }
        console.log( '[방금 누른키]--', prevKey )

    }

    document.addEventListener( 'keydown', keyInput )


    main.appendChild( svgg )

}



const channel = ( initData ) =>
{
    let store = {...initData}
    const subscribers = Object.keys( store ).reduce( ( acc, cur ) => {Object.assign( acc, {[cur]: []} ); return acc}, {} )

    const get = () => ( {...store} )

    const set = ( key, ...updates ) =>
    {
        const prev = store
        const updateArr = Object.keys( updates )
        for ( const k of updateArr ) 
        {
            console.log( k, updateArr[k] )
            if ( prev[k] !== updateArr[k] )
            {
                notify( key )
            } else
            {
                return
            }
            Reflect.set( store[key], k, updateArr[k] )

        }
    }
    const subscribe = ( key, sub ) =>
    {
        console.log( key, sub )
        subscribers[key].push( sub )
    }
    const notify = key => 
    {
        key = `${key}`
        console.log( subscribers[key], key )
        if ( subscribers[key].length > 0 )
        {
            subscribers[key].forEach( s => s() )
        }

    }

    const action = fn => ( key, ...args ) =>
    {

        set( key, fn( ...args, get() ) ?? {} )

    }
    return {get, set, subscribe, notify, action}

}

const initPlayData = {
    cur: [0, 0],
    moveTo: [0, 1],
    key: 36,
    level: 0,
    speed: 1,
    life: 5,
    trap: [13, 5],
    apple: [2, 25],
    isKeyDown: false,
    width: -1,
    height: -1,
    totalTiles: 50,
}
const loop = ( store ) => 
{
    let storage = store.get()
}
const Storage = ( init ) =>
{
    const storage = {...init}
    const get = ( key ) => Object.assign( {}, {...( storage[key] ?? storage )} )
    const set = ( obj ) =>
    {
        console.log( obj )
        for ( const key of Object.keys( obj ) )
        {
            if ( !storage[key] ) storage[key] = obj[key]
            else //기존 데이터를 변경하는 경우, - 이를 사용하는 함수에 알려줘야함
            {
                Reflect.set( storage, key, obj[key] )
            }
            console.log( storage[key] )
        }
        return storage

    }

    return {get, set}
}
const storage = Storage( initPlayData )
init( storage )
