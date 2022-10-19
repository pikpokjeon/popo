// import {el, pipe, is,element, fragment,setAttrs, appendTo,renderTo}  from '../index.js'
import {Popo}  from '../index.js'

const {el, is, element, fragment, setAttrs, appendTo, renderTo} = Popo 

const HTML = element( 'html' )

const div = HTML('div')
const nav = HTML('nav')
const section = HTML( 'section' )
const header = HTML('header')
const article = HTML('article')
const footer = HTML( 'footer' )
const codeBlock = HTML( 'code' )
const span = HTML('span') 
const p = HTML( 'p' )
const code = HTML( 'code' )
const strong = HTML('strong')

const subjectSections = ( subject, articles ) =>
{
    const storage = {[subject]: [...articles]}
    
    const tree = subject =>
        section( {class: `section`, id: `section-${subject}`}, [
            header( {class: 'sub-header', text: subject} ),
            div( {class: 'sub-articles-wrapper'}, [
                ...storage[subject].map((article,idx) => subjectArticle(subject,article,idx))] ),
            footer( {class: 'sub-footer'}, [
                div( {class: 'sub-footer-info', text: 'sub-footer-info'} )
            ] )
        ] )
    
    return tree(subject)
}

const subjectArticle = (subject, articleCode, idx ) =>
    article( {class: `article`, id: `article-${subject}-${idx}`,text:articleCode} )

// TODO!! 파싱
// - / 개행
// - --- 수평줄선
// - - 리스트
// - ``` ``` 코드블락
// - * * 볼드체
// - # # 부제목
const ifHasStr = str => target => str.indexOf( target ) > -1

const genCodeblockFromStr = str =>
{
    const has = ifHasStr( str )
    let _str = ''
    if ( has( '---' ) )
    {
        str.split('---')
    }
}


const mainRoot = el.id( 'main' )

const a = subjectSections( 'title', ['<h2>hello</h2>', '<h3>hello2</h3>'] ) 

mainRoot.appendChild(a)
console.log(a)