import React from 'react';

// function Todolist(props: PropsType) {
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input />
//             <button>+</button>
//         </div>
//         <ul>
//         </ul>
//         <div>
//             <button>All</button>
//             <button>Active</button>
//             <button>Completed</button>
//         </div >
//     </div>
// }

type TodoListPropsType = {
    title: string,
    tasks: TasksType[]
}
type TasksType = {
    id: number,
    title: string,
    isDone: boolean,
}
export const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text" />
                <button>+</button>
                <ul>
                    {props.tasks.map((task: TasksType) => {
                        return (
                            <li>
                                <button>✖️</button>
                                <input type="checkbox" checked={task.isDone} />
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button>Complete</button>
                    <button>All</button>
                    <button>Active</button>
                </div>
            </div>
        </div>
    )
}

// {
//     props.tasks.map((task: TasksType) => {
//         return (
//             <li key={task.id}>
//                 <button>✖️</button>
//                 <input type="checkbox" checked={task.isDone} />
//                 <span>{task.title}</span>
//             </li>
//         )
//     })
// }