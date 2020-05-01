import Inputs from "./Inputs";
import {sendMessage_TC} from "../../../../messageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePageReducer,
        myId: state.authPageReducer._userId
    }
}

const InputsContainer = connect(mapStateToProps, {sendMessage_TC})(Inputs);



export default InputsContainer;