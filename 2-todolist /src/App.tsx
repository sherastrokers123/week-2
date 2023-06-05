import React, { useState } from 'react';
import './App.css';
import { TodoList } from './Todolist';
function App() {

    let tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: true },
    ]


    return (
        <div className="App">
            <TodoList
                title='How to learn'
                tasks={tasks}
            />
        </div>
    );
}

export default App;