import {connect} from "react-redux";
import CurrentDialog from "./CurrentDialog";


let mapStateToProps = (state) => {
    state.messagePageReducer.toWho = 'D';
    return {
        messagePage: state.messagePageReducer.AllMessages.messagesD
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const CurrentDialogContainerD = connect(mapStateToProps, mapDispatchToProps)(CurrentDialog);

export default CurrentDialogContainerD;