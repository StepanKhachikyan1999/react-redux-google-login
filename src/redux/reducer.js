import img1 from '../images/1.png'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.png'
import img6 from '../images/6.jpg'

const initialArr = [
    {name: "Presentation 1",opened: "Apr 9", size: "420 KB", img:img1},
    {name: "Presentation 2",opened: "Apr 7", size: "80 KB", img:img2},
    {name: "Presentation 3",opened: "Apr 4", size: "320 KB", img:img3},
    {name: "Presentation 4",opened: "Mar 30", size: "20 KB", img:img4},
    {name: "Presentation 5",opened: "Mar 26", size: "36 KB", img:img5},
    {name: "Presentation 6",opened: "Mar 24", size: "200 KB", img:img6},
]

export const updateArr = (state = initialArr, action) => {
    switch(action.type)  {
        case "DEL_ITEM":
            return state.splice( action, 1)
     default :
     return  state
    }

}

let modal = false


export const modalReducer =(state = modal, action) => {
switch(action.type ) {
    case "OPEN_MODAL": 
    return state = !state;
    default:
        return state
}
}