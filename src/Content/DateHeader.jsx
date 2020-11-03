import  React from "react"


export const DateHeader = (props) => {
    let currentDate = new Date().toLocaleDateString();

    // debugger
    return <div>
        Today {currentDate}
    </div>
}