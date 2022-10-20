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



const splitOrder = [['/--', '--/'], ['---'], ['```', '```'], ['>'], ['h3#'], ['->'], ['/'], ['*', '*']]

// key : {code,parent ...}
const tag = ( symbolArry ) =>
{
    const fontSize = {...Array( 4 ).fill( 1 ).reduce( ( acc, cur, i ) => ( {...acc, [`h${i + 1}#`]: {code: `h${i + 1}`, text: true, close: false}} ), {} )}
    let storage = {
        '/--': {
            code: 'div',
            text: true,
            class: 'article'
        },
        '```': {
            code: 'code',
            text: true,
        },
        '>': {
            code: 'blockquote',
            text: true,
        },
        ...fontSize,
        '->': {
            code: 'li',
            parent: 'ul',
            text: true
        },
        '---': {
            code: 'br',
            text: false,
        },
        '*': {
            code: 'strong',
            text: true
        },
    }
    const changeTags = ( {symbol, key, val} ) => 
    {
        Reflect.set( storage, symbol, {[key]: val} )
    }

    // [0] - open, [1] - close
    const setCloseTag = ( arr ) =>
    {
        storage = [...arr].reduce( ( acc, cur, i ) =>
        {
            const [open, close] = [cur[0], cur[1] ?? false]
            if ( !acc[open] ) acc[open] = {close, text: false}
            Reflect.set( acc[open], 'close', close )
            Reflect.set( acc[open], 'text', close ? true : false )
            return acc
        }, storage )
        return storage
    }
    if ( symbolArry.length > 0 ) setCloseTag( symbolArry )
    // key: 'symbol', val: '>>>'
    // key: 'code' val: 'li'
    // key: 'close',
    // key: 'close', val: '*'
    // key: 'close', val: ['*','*']]
    const get = ( {symbol} ) =>
    {
        let selectedTag = -1
        let selectedIdx = -1
        const checkIfCloseSymbol = symbol =>
        {
            const hasTag = Object.entries( storage ).filter( ( [s, info], i ) =>
            {
                if ( info.close === symbol )
                {
                    selectedIdx = i
                    selectedTag = s
                    return true
                }
                return false
            } )
            console.log(hasTag)
            return hasTag.length > 0 ?true:false

        }

        // parent -> 상위 루트 open code (예 div) close -> 상위 루트 부모코드 닫힘 여부,
        // text -> 현재 symbol

        if ( !storage[symbol] )
        {
            if ( checkIfCloseSymbol( symbol ) )
            {
                //true
                return Object.assign( {}, storage[selectedTag] )
            }
            return  {code: 'text', text: symbol, close: false}
        }
        return Object.assign( {}, storage[symbol] )
    }

    const getAll = () => Object.assign( {}, storage )



    return {changeTags, get, getAll}
}


const test1 = `/-- h3# tttttt  --- ee * strong *  eefdsf
-> 1,dd 
-> 2.dff 
-> 3.ffff 
fdsfsdfdfsdf 
--/ 
/--
h3# codefdfdf ---
${"``` <div>backtick</div> ```"}
dfdfsfdf s 
> ! dfdfsfdff --/


`
// {div:[{id:'div-1',class:'box',children:[],parentID: ''}]}
const hasTagIn = str => tag => str.includes( tag )
const getTagIdx = strArr => tag => strArr.indexOf( tag )



const handleTyping = ( {initTag, typing} ) =>
{

    const elementStorage = {}

    const splitByUnit = unit => splitStr( {typing, storage: elementStorage, splitUnit: unit, tag: initTag} )

    return {splitByUnit}

}

//문자열 우선순위따라 태그로 나누기
const splitStr = ( {typing, storage, splitUnit, tag} ) => 
{
    const hasTag = ( typings ) => hasTagIn( typings )
    let splitedTyping = typing.split( splitUnit ) //arr
    console.log( splitedTyping )
    // 전체 문자열 개행으로 나누기
    return splitedTyping.reduce( ( acc, newline, i, s ) =>
    {
        let {close, text, code} = -1

        readNewline( {tag, newline, storage, hasTag: hasTag( splitedTyping.join( splitUnit ) )} )

        console.log( newline )
    }, storage )


}

const readNewline = ( {tag, newline, storage, hasTag} ) =>
{
    let newlineArr = newline.trim().split( ' ' ).filter( s => s !== '' )
    console.log( '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6' )
    console.log( '[newline]', newline )
    console.log( '[newlineArr]', newlineArr )
    const tagStorage = tag.getAll()
    console.log( tagStorage )
    
    // 태그인경우
    // - open-close 형태라면 내부 코드를 추가하며 읽음 -> 닫힘코드가 있는경우 해당 배열 인덱스에서 다음으로
    // 시작부터 닫힐때까지 상위요소에 해당하는 배열 위치에서 저장

    // - open일 경우 해당 코드만 부모에 추가
    // - text인 경우 텍스트 앞 테그가 텍스트를 허용할때까지 추가

    // 문자열인경우
    // 텍스트노드로 요소생성
    newlineArr.reduce( ( _acc, curStr, _i, _s ) =>
    {
        const curTag = tag.get( {symbol: curStr} ) // --/
        console.log( '-----[curTag]', curTag )
    }, storage )

    return storage
}


const initTag = tag( splitOrder )

const splitedTypings = handleTyping( {initTag, typing: test1, } ).splitByUnit( '\n' )


