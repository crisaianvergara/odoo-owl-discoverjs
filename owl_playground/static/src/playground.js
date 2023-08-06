/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

class Counter extends Component {
    setup() {
        this.state = useState({ value: 1 });
    }

    
    increment() {
        this.state.value++;
    }
}


Counter.template = "owl_playground.Counter";


export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter };
}