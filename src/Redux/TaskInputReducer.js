
const SAVE_TASK = "SAVE_TASK";


export const saveTaskAC = (task) => ({
    type: "SAVE_TASK",
    task
})

let initialState = {
    taskList: [
        { id: 1, task: "Привет", date: "Кирилл" },
        { id: 2, task: "Как дела?", date: "Алина" },
        { id: 3, task: "Что нового?", date: "Бегемот" },
    ]
};

const TaskInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TASK:
            return {...state, taskList}
    }
};



export default TaskInputReducer;
