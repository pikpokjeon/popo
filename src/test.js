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


 const TagsIncreasedByNumIter = function*(init = {start :1 , end, code, symbol,class} )
{
    const storage = {}
     let data = {}
     
    console.log(init,init.start,init.end)
    while ( init.start <= init.end )
    {
        if ( !storage[init.start]  ) storage[init.start] = {...init}
        const register = ( {init} ) => ( extend = {curIdx, code, symbol, text, } ) =>
        {
            
        }
        data = storage[init.start]
        console.log(storage,data)
        // tagInfo =
        // {
        //     code: data.code ?? code, text: data.text, class: data.class,
        //     open: `$${data.init.start ?? init.start}${data.keyword ?? keyword}${data.symbol ?? symbol}`
        // }
        init.start ++

    }
    console.log(data,storage)
        Reflect.set( storage, init.start, data )

}

// h4 h3 h2 h1===과 같은 태그를 위한 정보객체 생성기
// 필수 인자 - 키워드h 숫자 시작과 끝, 스탭, 심볼 h1#
const genMultiTags = ( {start= 1, end, step = 1, keyword, symbol} ) =>
{
    const genTagsCollection = ( {IdxtoStop, curIdx = 0, obj = {}} ) => 
    {
        // 9, 8 => 9+2, 9 -> IdxtoStop + step > end / 7, 8
        console.log( IdxtoStop, curIdx, obj )
        // 현재 인덱스가 마지막보다 크거나 다음에 멈출 인덱스가 마지막보다 크면 정지
        if ( curIdx > end || IdxtoStop > end ) return obj
        // 현재 인덱스가 멈출 인덱스보다 작으면 + 1
        if ( curIdx < IdxtoStop ) return genTagsCollection( {IdxtoStop, curIdx: curIdx + 1, obj} )
        // 멈출 인덱스가 현재 인덱스와 같고, 다음에 멈출 인덱스가 마지막보다 작은경우'  
        if ( IdxtoStop === curIdx && IdxtoStop + step <= end )return genTagsCollection( {IdxtoStop: IdxtoStop + step, curIdx: curIdx + step, obj} )
        return genTagsCollection( {IdxtoStop, curIdx: curIdx + 1, obj} )
    }   
    let cur = start
    return genTagsCollection( {IdxtoStop: cur, curIdx: cur} )
}

const a = genMultiTags({start:5, end:9, step:2,keyword:'h',symbol:'#'})  // 5,7,9
const b =  genMultiTags( {start: 1, end: 9, step: 3, keyword: 'h', symbol: '#'} ) // 1, 4, 7
const c =  genMultiTags( {start: 1, end: 13, step: 4, keyword: 'h', symbol: '#'} ) // 1, 5, 9, 13
console.log(a)
console.log(b)

const TagInfoFrame = ( {num, } ) => ({...Array( 4 ).fill( 1 ).reduce( ( acc, cur, i ) => ( {...acc, [`h${i + 1}#`]: {code: `h${i + 1}`, text: true, close: true, children: []}} ), {} )})

const pairOfTags = [['/--', '--/'], ['---'], ['```', '```'], ['>'], ['h3#', ' '], ['->', '->'], ['*', '*']]

const customTags = {
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
    ...TagsIncreasedByNumIter,
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

// key : {code,parent ...}
const tag = ( symbolArry ) =>
{


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
            if ( !acc[open] ) acc[open] = {close, text: false, open: ''}
            Reflect.set( acc[open], 'open', open )
            Reflect.set( acc[open], 'close', close )
            Reflect.set( acc[open], 'text', close ? true : false )
            return acc
        }, storage )
        initMemo()
        return storage
    }
    // key: 'symbol', val: '>>>'
    // key: 'code' val: 'li'
    // key: 'close',
    // key: 'close', val: '*'
    // key: 'close', val: ['*','*']]


    const generatedTextTag = ( {text, root, parent} ) =>
    ( {
        code: 'text',
        text: false,
        root: root,
        parent: '',
        content: [...storage[parent].children, text]
    } )

    const get = ( {symbol} ) =>
    {

        let selectedIdx = -1
        const checkIfCloseTag = symbol =>
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
            console.log( hasTag )
            return hasTag.length > 0 ? true : false

        }

        // parent -> 상위 루트 open code (예 div) close -> 상위 루트 부모코드 닫힘 여부,
        // text -> 현재 symbol

        if ( !storage[symbol] )
        {
            if ( checkIfCloseTag( symbol ) )
            {
                //true
                return Object.assign( {}, storage[selectedTag] )
            }
            // text default parent -? 'p'
        }
        return Object.assign( {}, storage[symbol] )
    }

    const getAll = () => Object.assign( {}, storage )

    const initMemo = () =>
    {
        for ( const [symbol, data] of Object.entries( storage ) )
        {
            if ( data.memo && is['array']( data.memo ) ) continue
            else if ( data.close || ( !data.close && data.text ) )
            {
                Reflect.set( storage[symbol], 'memo', [] )
            }
        }

        return storage
    }


    if ( symbolArry.length > 0 ) setCloseTag( symbolArry )


    // 해당태그의 열림 닫힘을 확인할 수 있어야함
    let parentQ = []
    let prevSymbol = ''
    let textContent = []
    let byOrder = []
    const memoOpen = ( {symbol} ) =>
    {
        const data = storage[symbol] // storage에 
        //등록안된 텍스트 undefine
        console.log( '[data] : ', data, symbol )


        // 일반 자식 텍스트인 경우
        if ( !data )
        {
            console.log( '[parentQ]', parentQ, '[prev]', prevSymbol, '[text]', symbol )
            return storage
        }
        else if ( !data.memo || !is['array']( data.memo ) ) {initMemo()}
        else if ( storage[symbol].open )
        {
            storage[symbol].memo = [...storage[symbol].memo, [0, -1]] // [ open , closed] -1 ,0, 1 
        } else if ( !data.close && data.text )
        {
            storage[symbol].memo = [...storage[symbol].memo, [0, -1]]
        }

        if ( data.text )
        {
            prevSymbol = symbol
            parentQ.push( symbol )
            byOrder.push( data.code )
            if ( !storage[symbol].children ) storage[symbol].children = []
            else
            {
                // const form = {parent:'div', code:}
                // storage[symbol].children.push
            }
        } else if ( !data.text )
        {
            parentQ.pop()
        }
        console.log( '[parentQ]', parentQ, '[prev]', prevSymbol, '[cur]', symbol, data )
        return storage
    }

    // open- close 태그에 메모이제이션 (상태) 추가

    // text 입력 가능 태그에, 현재 스트링값 contents 추가

    // 위 두 항목 앨리먼트 생성시 초기화
    const memoClose = ( {symbol} ) =>
    {
        const curTag = get( {symbol} ).open
        const curMemo = storage[curTag].memo
        const len = curMemo.length

        if ( curMemo[len - 1][0] > -1 && curMemo[len - 1][1] < 0 )// 열림
        {
            curMemo[len - 1][1] = 0
        }


        return storage
    }

    return {changeTags, get, getAll, initMemo, memoOpen, memoClose}
}


const test1 = `/-- h1# Title 제목제목 --- 대략적인 설명입니다 --- 발표인 * name *  날짜: 2022 ---
h3# <Index>
-> 1. markdown
-> 2. parsing
-> 3. HTML DOM
additional
--/ 
/--
h2# Title2 ---
Document with code examples ---
${"``` <div>backtick</div> ```"}
written by
test testtest tesst2
> ! Todo: fsdfdfdfsfdf --/


`
// {div:[{id:'div-1',class:'box',children:[],parentID: ''}]}
const hasTagIn = str => tag => str.includes( tag )
const getTagIdx = strArr => tag => strArr.indexOf( tag )



const handleTyping = ( {initTag, typing} ) =>
{

    const elementStorage = {}

    const splitByUnit = unit => splitToLines( {typing, storage: elementStorage, splitUnit: unit, tag: initTag} )

    return {splitByUnit}

}

// 문자열을 나눔
const splitToLines = ( {typing, storage, splitUnit, tag} ) => 
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

// 나누어진 문자열을 띄움으로 문자열 읽음
const readNewline = ( {tag, newline, storage} ) =>
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
    const order = []
    newlineArr.reduce( ( _acc, curStr, _i, _s ) =>
    {
        const curTag = tag.get( {symbol: curStr} ) // --/ 와 같은 닫힘이 속한 태그도 가져옴
        console.log( '-----[curTag]', curTag, curTag.open )
        tag.memoOpen( {symbol: curTag.open ?? curStr} ) //여는태그가 없는 경우, 일반 텍스트정보
    }, storage )

    return storage
}


const initTag = tag( pairOfTags )
const splitedTypings = handleTyping( {initTag, typing: test1, } ).splitByUnit( '\n' )


