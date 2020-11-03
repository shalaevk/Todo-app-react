import logo from './logo.svg';
import './App.css';
import {DateHeader} from "./Content/DateHeader";
import {TaskInput} from "./Content/TaskInput";
import {TaskList} from "./Content/TaskList";
function App(props) {
  return (
    <div className="App">
      <DateHeader/>
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App;
