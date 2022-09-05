const typeOf = ['number', 'function', 'string', 'undefined', "symbol", "object"]
const initType =
{
    array: d => Array.isArray( d ),
    null: d => d === null,
    svg: svg => svg instanceof SVGElement, // svg == false
    html: el => /<\/?[a-z][\s\S]*>/i.test( el )
 }

export const is = typeOf.reduce((typeObj, type) => Object.assign(typeObj, { [type]: d => typeof d === type }), { ...initType })

// true
// const a = is['array']( [2, 3, 4, 5,] )
