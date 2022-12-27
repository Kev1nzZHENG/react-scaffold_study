import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired
    }

    // 全选的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked);
    }

    // 清除已完成任务的回调
    handleClearFinish = () => {
        if (window.confirm('确定删除已完成的任务吗？')) {
            this.props.clearFinishTodo();
        }
    }

    render() {
        const { todos } = this.props;

        // 已完成个数
        const doneCount = todos.reduce((pre, todo) => {
            if (todo.done === true) {
                pre += 1;
            }
            return pre;
        }, 0)
        // 总数
        const total = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearFinish} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
