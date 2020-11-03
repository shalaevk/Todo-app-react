import React from "react";


export const TaskInput = (props) => {
    let inputValue = '';
    let inputHandler = (e) => {
        inputValue = e.target.value;
    }
    let saveValue = () => {
        console.log(inputValue)
    }
    return <div>
        <input placeholder={"Ведите сообщение"} onChange={inputHandler} type={"text"}/>
        <button onClick={saveValue}>Сохранить</button>

    </div>
}