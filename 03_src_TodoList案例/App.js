// 创建"外壳"组件
import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {

    // 状态在哪里，操作状态的方法就在哪里

    // 初始化状态
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: true
            },
            {
                id: '002',
                name: '睡觉',
                done: true
            },
            {
                id: '003',
                name: '打豆豆',
                done: false
            }
        ]
    }

    // addTodo用于添加一个todo，接受的参数是todo对象
    addTodo = (todoObj) => {
        // 获取原todos
        const { todos } = this.state;
        // 追加一个todo
        const newTodos = [todoObj, ...todos];
        // 更新状态
        this.setState({
            todos: newTodos
        })
    }
    // updateTodo用于更新一个todo对象
    updateTodo = (id, done) => {
        // 获取原状态的todos
        const { todos } = this.state;
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done: done };
            else return todoObj;
        })
        this.setState({
            todos: newTodos
        })
    }

    // deleteTodo用于删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        })
        this.setState({
            todos: newTodos
        })
    }

    // 全选todos
    checkAllTodos = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map(todoObj => {
            return { ...todoObj, done: done }
        })
        this.setState({
            todos: newTodos
        })
    }

    // 清除已完成任务的回调
    clearFinishTodo = () => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.done !== true
        })
        this.setState({
            todos: newTodos
        }
        )
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                        <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearFinishTodo={this.clearFinishTodo}/>
                    </div>
                </div>
            </div>

        )
    }
}
