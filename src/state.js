import {element} from "./utils"

const svg = element('svg')
const html = element('html')

// const child1 = Store('child1',{parent,initData})
// const render = child1.renderTo('parent',component)

const component = parent => state =>
{
    const _state = state

    const data = {
        ...state.get()
    }

    const event = state.setEvent(
        [{
            action: 'keydown',
            func: state.action(),
            isAdded: false,
        }]
    )

    const Group = svg('g')

    if ( parent )
    {

        

        



        return ( Group( {
            id: 'groups', [
            Tiles({id: 'tiles',})
        ]}))
    }
}