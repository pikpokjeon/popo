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
const button = HTML( 'button' )

// 예제 : 가위바위보게임 화면 (상)- /가위-바위-보 버튼/, 
// 게임로그( 하 ) - 사용자 / 우승자 승리.패배, 총게임횟수 = 로그[날짜 / 시간] - 사용자 / 컴퓨터 선택결과 - 우승자

const gamePlaySection = ( {event} ) =>
{
    const tree = section( {id: 'choice-wrapper'}, [

    ] )
}
// Rock = 1, Scissors = 2, Paper = 3/ 각 인덱스(선택)별 원소는 지는 선택
const counterBy = [3,1,2]

const gameChoiceButtons = ( choices, events ) =>
{
    let selected = -1

    const render () = div( {id: 'play-buttons-wrapper'}, [
        ...choices].map((loseTo,choice)) )
}


