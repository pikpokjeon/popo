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

export const isChildren = data => is['array']( data ) || is['string']( data ) || 'nodeName' in data 

export const setAttr = (type, el, attr={} ) => 
{
    const attributes = Object.entries(attr)
    if ( is['array']( attr ) )
    {
        return attributes.reduce( ( acc, [key, val] ) =>
        {
            if(key === 'text') acc.appendChild(document.createTextNode(val))
            acc.setAttribute(key,val)
            return acc
        },el )    
    }else
}

export const updateChildren = ( type, parent, children = [] ) =>
{
    if ( is['undefined']( children ) ) return parent
    if ( !is['array']( children ) ) children = [...children]
    children.reduce( ( acc, cur ) =>
    {
        acc.appendChild( cur )
        return acc
    },parent)
    
}

export const createElement = ( type ) => ( tag, attr = {}, children=[] ) =>
{
    const el = type === 'svg' ?  document.createElementNS('http://www.w3.org/2000/svg', tag) : document.createElement(tag)
    setAttr( type, el, attr )
    
}