import {is, isChildren} from './utils.js'

export const setAttr = ( type, el, attr ) => 
{
    const attributes = Object.entries( attr )
    if ( is['array']( attributes ) )
    {
        return attributes.reduce( ( acc, [key, val] ) =>
        {
            if ( key === 'text' )
            {
              acc.appendChild(document.createTextNode(val))  
            } 
            else acc.setAttribute(key,val)
            return acc
        },el )    
    }
    return el
}

export const removeChildren = parent => 
{
    while ( parent.firstChild )
    {
        parent.removeChild(parent.firstChild)
    }
    return parent
}


export const updateChildren = ( type, parent, children = [] ) =>
{
    if ( is['undefined']( children ) ) return parent
    if ( !is['array']( children ) ) children = [children]
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


export const fragment = (children) => setChildren(document.createDocumentFragment(), children);

