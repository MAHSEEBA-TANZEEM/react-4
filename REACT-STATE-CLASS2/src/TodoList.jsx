import { useState } from "react";
import { v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false }]);
    let [newtTodo, setNewTodo] = useState("");

    let addNewTask = ()=> {
        setTodos((prevTodos)=> {
            return [...prevTodos, {task: newtTodo, id: uuidv4(), isDone: false }];
    });
        setNewTodo("");
    };

    let updateTodoVal = (event)=> {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos)=> todos.filter((prevTodos)=> prevTodos.id != id));
    }

    let markAllDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
                // task: todo.task.toUpperCase(),
            };
          })
        ))
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
            if(todo.id == id){
                return {
                    ...todo,
                    isDone: true,
                    // task: todo.task.toUpperCase(),
                };
            } else {
                return todo;
            }
          })
        ))
    }

    return (
        <div>
            <input placeholder="add a task" value={newtTodo} onChange={updateTodoVal}/>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
              {todos.map((todo)=> (
                <li key={todo.id}>
                    <span style = {todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span> &nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>  &nbsp;&nbsp;
                    <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                </li>
                ))}
            </ul>
            <br /><br />
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    )
}