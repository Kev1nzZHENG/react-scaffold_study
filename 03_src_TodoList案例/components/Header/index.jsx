import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    // 对接收的props进行限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 键盘事件的回调
    handleKeyUp = (event) => {
        // 判断是否按下回车键
        if (event.key !== 'Enter') return;
        // 添加的todo不能为空
        if (event.target.value.trim() === '') {
            alert('输入不能为空');
            return;
        }
        // 新的todo对象
        const todoObj = { id: nanoid(), name: event.target.value, done: false };
        // 将todoObj传给App
        this.props.addTodo(todoObj);
        // 清空输入框
        event.target.value = '';
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
