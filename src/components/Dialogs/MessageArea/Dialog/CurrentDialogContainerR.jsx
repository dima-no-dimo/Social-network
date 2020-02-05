import {connect} from "react-redux";
import CurrentDialog from "./CurrentDialog";


let mapStateToProps = (state) => {
    state.messagePageReducer.toWho = 'R';
    return {
        messagePage: state.messagePageReducer.AllMessages.messagesR
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const CurrentDialogContainerR = connect(mapStateToProps, mapDispatchToProps)(CurrentDialog);

export default CurrentDialogContainerR;