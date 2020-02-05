import React from 'react'
import Inputs from "./Inputs";
import {changeMessageAreaActionCreator, createNewMessageActionCreator} from "../../../../messageReducer";
import {connect} from "react-redux";


// const InputsContainer = (props) => {
//
//     let submitMessage = () => {
//         props.dispatch(createNewMessageActionCreator());
//     }
//
//     let onChangedArea = (e) => {
//         let text = e.target.value;
//         props.dispatch(changeMessageAreaActionCreator(text))
//     }
//
//     return (
//         <Inputs store={props.store}
//                 submitMessage={submitMessage}
//                 onChangedArea={onChangedArea}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePageReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        submitMessage: () => dispatch(createNewMessageActionCreator()),
        onChangedArea: (e) => {
            let text = e.target.value;
            dispatch(changeMessageAreaActionCreator(text))
        }
    }
};

const InputsContainer = connect(mapStateToProps, mapDispatchToProps)(Inputs);



export default InputsContainer;