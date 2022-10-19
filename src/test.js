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

const mainRoot = el.id( 'main' )

const span = HTML('span') 
const p = HTML( 'p' )
const code = HTML( 'code' )
const strong = HTML('strong')

const subjectSection = ( subject, articles ) =>
    section( {class: `section`, id: `section-${subject}`}, [
        header( {class: 'sub-header', text: subject} ),
        div( {class: 'sub-articles-wrapper'}, [...articles] ),
        footer( {class: 'sub-footer'}, [
            div({class:'sub-footer-info',text: 'sub-footer-info'})
        ])
    
] )

// TODO!! 파싱
// - / 개행
// - --- 수평줄선
// - - 리스트
// - ``` ``` 코드블락
// - * * 볼드체
// - h3 h3 h1~h5 글자크기
const genArticleCode = article =>
{
    
}
const sectionArticle = ( subject, idx ) => article => article( {class: `section-article`, id: `article-${subject}-${idx}`}, [
    
])