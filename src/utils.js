import {Is} from './lib.js'
 
const id = id => document.getElementById( id )
const name = name => document.getElementsByName( name )

export const pipe = ( initData, ...fns ) =>
    fns.reduce( ( returned, fn ) => fn( returned ), initData )
    
export const el = {id,name}

const typeOf = ['number', 'function', 'string', 'undefined', "symbol", "object"]
const initType =
{
    array: d => Array.isArray( d ),
    null: d => d === null,
    svg: svg => svg instanceof SVGElement, // svg == false
    html: el => /<\/?[a-z][\s\S]*>/i.test( el )
 }

// true
// const a = is['array']( [2, 3, 4, 5,] )
export const is = typeOf.reduce((typeObj, type) => Object.assign(typeObj, { [type]: d => typeof d === type }), { ...initType })


export const isChildren = data => is['array']( data ) || is['string']( data ) || 'nodeName' in data 

export const setObj = ( {storage, key, data} ) =>
{
        // Reflect.set( storage[key], data, tempData )
}

