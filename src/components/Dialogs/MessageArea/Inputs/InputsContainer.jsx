import React from 'react'
import Inputs from "./Inputs";
import {changeMessageAreaActionCreator, createNewMessageActionCreator} from "../../../../messageReducer";


const InputsContainer = (props) => {

    let submitMessage = () => {
        props.dispatch(createNewMessageActionCreator());
    }

    let onChangedArea = (e) => {
        let text = e.target.value;
        props.dispatch(changeMessageAreaActionCreator(text))
    }

    return (
        <Inputs store={props.store}
                submitMessage={submitMessage}
                onChangedArea={onChangedArea}
        />
    )
}

export default InputsContainer;