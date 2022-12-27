import React, { Component } from 'react'

import './index.css'

export default class Item extends Component {

    state = {
        mouse: false, //标识鼠标移入移出
    }

    // 鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }

    // checkbox复选框勾选状态
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除todo的回调
    handleDelete = (id) => {
        if (window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id);
        }
    }
    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: mouse ? '#ddd' : 'white' }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
