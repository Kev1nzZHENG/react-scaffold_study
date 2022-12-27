import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'
export default class Search extends Component {
    state = {
        keyword: '' //搜索关键字
    }
    // 保存搜索关键字
    saveKeyword = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }
    // 跳往搜索
    goSearch = () => {
        const { keyword } = this.state;
        // 发送请求前通知List更新isFirst、isLoading
        Pubsub.publish('updateAppState', ({ isFirst: false, isLoading: true }))
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            //请求成功后 
            response => { Pubsub.publish('updateAppState', ({ isLoading: false, users: response.data.items })) },
            // 请求失败
            error => { Pubsub.publish('updateAppState', ({ isLoading: false, err: error.message })) }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input onChange={this.saveKeyword} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.goSearch}>Search</button>
                </div>
            </section>
        )
    }
}
