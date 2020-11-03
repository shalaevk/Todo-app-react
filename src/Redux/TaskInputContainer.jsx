import React from "react";
import {TaskInput} from "../Content/TaskInput";
import {connect} from "react-redux";
import {saveTaskAC} from  "../Redux/TaskInputReducer";

let mapStateToProps = (state) => {
    return state
}
let mapDispatchToProps = (dispatch) => {
    return {
        saveTask: (task) => {
            dispatch(saveTaskAC(task))
        }
    }
}



export const TaskInputContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(TaskInput)