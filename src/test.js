// import {el, pipe, is,element, fragment,setAttrs, appendTo,renderTo}  from '../index.js'
import {Popo} from '../index.js'

const {el, is, element, fragment, setAttrs, appendTo, renderTo} = Popo

const HTML = element( 'html' )

const div = HTML( 'div' )
const nav = HTML( 'nav' )
const section = HTML( 'section' )
const header = HTML( 'header' )
const article = HTML( 'article' )
const footer = HTML( 'footer' )
const codeBlock = HTML( 'code' )
const span = HTML( 'span' )
const p = HTML( 'p' )
const code = HTML( 'code' )
const strong = HTML( 'strong' )

const br = HTML( 'br' )
const ul = HTML( 'ul' )
const li = HTML( 'li' )
const bold = HTML( 'strong' )
const subTitle = HTML( 'h3' )
const subjectSections = ( subject, articles ) =>
{
    const storage = {[subject]: [...articles]}

    const tree = subject =>
        section( {class: `section`, id: `section-${subject}`}, [
            header( {class: 'sub-header', text: subject} ),
            div( {class: 'sub-articles-wrapper'}, [
                ...storage[subject].map( ( article, idx ) => subjectArticle( subject, article, idx ) )] ),
            footer( {class: 'sub-footer'}, [
                div( {class: 'sub-footer-info', text: 'sub-footer-info'} )
            ] )
        ] )

    return tree( subject )
}

const subjectArticle = ( subject, articleCode, idx ) =>
    article( {class: `article`, id: `article-${subject}-${idx}`, text: articleCode} )

// TODO!! 파싱
// - --- 새로운 부분        1
// - # # 부제목 h3

// - / 개행
// - -> 리스트               2
// - ``` ``` 코드블락       3
// - * * 볼드체
// - > < 노티박스

const ifHasStr = str => target => str.indexOf( target ) > -1


const splitOrder = [['---'], ['```', '```'], ['>'], ['#h3'], ['->'], ['/'], ['*', '*']]

// key : {code,parent ...}
const tag = (initExtendTags = {}) =>
{
    const fontSize = {...Array( 4 ).fill( 1 ).reduce( ( acc, cur,i ) => ( {...acc,[`h${i + 1}`]: {name: `h${i + 1}`}} ),{} )}
    let storage = {
        '---': {
            code: 'br',
        },
        '```': {
            code: 'code',
        },
        '>': {
            code: 'blockquote'
        },
        ...fontSize,
        '->': {
            code: 'li',
            parent: 'ul'
        },
        '/': {
            code: '\n'
        },
        '*': {
            code: 'strong'
        },
        ...initExtendTags
    }
    const changeCode = ( {symbol, code} ) => 
    {
        Reflect.set( storage, symbol.code, code )    
        console.log(storage)
    }

    console.log(storage)    
}

tag()
const genCodeblockFromStr = ( str, arr = [] ) =>
{
    const HTML = Popo.element( 'html' )
    const has = ifHasStr( str )
    let _str = str
    const ordered = {}


    //가장 큰 단위에서 부터 
    const process = ( order ) => 
    {
        const splited = order.reduce( ( acc, cur, i ) =>
        {
            if ( cur.length === 1 )
            {
                if ( !acc[i] ) acc[i] = []
                const s = split( _str, cur ).join( ' ' )
                _str = s
                return acc
            } else
            {
                const [start, end] = [cur[0], cur[1]]
            }
            order.shift()
            return acc

        }, ordered )

        return _str
    }

    const split = ( str, next, end ) =>
    {
        return str.split( next )
    }


    return {process}
}


const mainRoot = el.id( 'main' )

const a = subjectSections( 'title', ['hello --- -> item1 -> item2 -> *item3* -> item4 --- # #Bye#', '<h3>hello2</h3>'] )

mainRoot.appendChild( a )

const arr = ['hello --- -> / item1 -> / item2 -> / * item3 * -> item4 --- -> / # Bye #',
    '<h3> / hello2 / </h3> --- # yiylr3 #',
    'fsdfsdf - 1.ss',
    '# start # / ``` <div class="red">notice <span>!!!</span></div> ``` / > # result # / -> 1,aaaa -> 2,dddd <']
const b = arr.map( str => genCodeblockFromStr( str, [] ).process( splitOrder ) )
console.log( a )
console.log( b )