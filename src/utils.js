const id = id => document.getElementById( id )
const name = name => document.getElementsByName( name )

export const el = {id,name}

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
    if ( is['array']( attributes ) )
    {
        return attributes.reduce( ( acc, [key, val] ) =>
        {
            if ( key === 'text' )
            {
                console.log(acc)
              acc.appendChild(document.createTextNode(val))  
            } 
            else acc.setAttribute(key,val)
            return acc
        },el )    
    } else return el
}

export const updateChildren = ( type, parent, children = [] ) =>
{
    if ( is['undefined']( children ) ) return parent
    if ( !is['array']( children ) ) children = [...children]
    children.reduce( ( acc, cur ) =>
    {
        acc.appendChild( cur )
        return acc
    }, parent )
    return parent
    
}

export const createElement =  type  => ( tag, attr = {}, children=[] ) =>
{
    const el = type === 'svg' ?  document.createElementNS('http://www.w3.org/2000/svg', tag) : document.createElement(tag)
    if ( isChildren( attr ) )
    {
        updateChildren(type,el,children)
        return el
    }
    setAttr( type, el, attr )
    updateChildren(type,el,children)
    return el
    
}

export const element = type => tag => ( attr ={}, children=[] ) =>
{
    const elByType = createElement( type )
    return isChildren( attr ) ? elByType( tag, {},attr) : elByType(tag,attr,children)
}