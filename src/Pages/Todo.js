import React, { useState } from "react";

export default function Todo() {
    const [todos, setTodos] = useState([]);

    function handletodos() {
        const input = document.getElementById("task").value;
        const copy = [...todos];
        copy.push(input);
        setTodos(copy);
    }

    return (
        <div>
            <div className="inp">
                <input id="task" placeholder="enter the task" />
                <button onClick={handletodos}>Add</button>
            </div>
            <div className="disp">
                {todos.map((d, i) => (
                    <ul>
                        <li key={`${i}`}>{d}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}