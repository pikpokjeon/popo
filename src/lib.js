import {is, isChildren} from './utils.js'


export const setAttrs = ( el, attrs = {} ) =>
{
    return Object.entries( attrs ).reduce( ( acc, [key, val] ) =>
    {
        if ( key === 'text' )
        {
            const textElem = document.createTextNode( val )
            console.log( textElem )
            acc.appendChild( textElem )
            return acc
        }
        else acc.setAttribute( key, val )
        return acc
    }, el )
}
export const setAttr = ( type, el, attr ) => 
{
    // const attributes = Object.entries( attr )
    // if ( is['array']( attributes ) )
    // {
    //     return attributes.reduce( ( acc, [key, val] ) =>
    //     {

    //     },el )    
    // }
    // return el

    return setAttrs( el, attr )
}

export const removeChildren = parent => 
{
    while ( parent.firstChild )
    {
        parent.removeChild( parent.firstChild )
    }
    return parent
}

export const appendTo = parent =>
{
    if ( is['undefined']( parent ) ) return console.log( 'NO PARENT' )
    const child = node =>
    {

        if ( !is['array']( node ) ) node = [node]
        return Array.from( node ).reduce( ( acc, cur ) =>
        {
            acc.appendChild( cur )
            return acc
        }, parent )
    }
    return {child}
}

export const updateChildren = ( type, parent, children = [] ) => appendTo( parent ).child( children )

export const createElement = type => ( tag, attr = {}, children = [] ) =>
{
    const el = type === 'svg' ? document.createElementNS( 'http://www.w3.org/2000/svg', tag ) : document.createElement( tag )
    if ( isChildren( attr ) )
    {
        updateChildren( type, el, children )
        return el
    }
    setAttr( type, el, attr )
    updateChildren( type, el, children )
    return el

}

const setToCreate = ( con, tag, attr, children ) => isChildren( attr ) ? con( tag, {}, attr ) : con( tag, attr, children )

export const element = type => ( tag, initAttrs, initChildrend ) => ( attr = {}, children = [] ) =>
{
    let createTypeElem = createElement( type ) //setType
    const initialAttributes = Object.assign( {}, {...initAttrs} )
    if ( attr )
    {
        return isChildren( attr ) ? createTypeElem( tag, {}, attr ) : createTypeElem( tag, Object.assign( initialAttributes, {...attr} ), children )
    }
    return isChildren( initAttrs ) ? setToCreate( createTypeElem, tag, {}, initAttrs ) : setToCreate( createTypeElem, tag, initialAttributes, initChildrend )
}

export const fragment = ( children ) => appendTo( document.createDocumentFragment() ).child( children )

export const renderTo = ( target, children = [] ) =>
{
    const root = el.id( target )
    root.innerHTML = ''
    updateChildren( '', root, children )
}
