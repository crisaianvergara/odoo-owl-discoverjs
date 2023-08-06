/** @odoo-module **/

import { Todo } from "../todo/todo";
import { useAutofocus } from "../utils"
import { Component, useState } from "@odoo/owl";


export class TodoList extends Component {
    setup() {
        this.nextId = 0;
        this.todoList = useState([]);
        useAutofocus("todoListInput")
    };

    addTodo(e) {
        if (e.keyCode === 13 && e.target.value != "") {
            this.todoList.push(
                {
                    id: this.nextId++,
                    description: e.target.value,
                    done: false,
                }
            );
            e.target.value = "";
        };
    };
};

TodoList.components = { Todo };
TodoList.template = "owl_playground.TodoList";