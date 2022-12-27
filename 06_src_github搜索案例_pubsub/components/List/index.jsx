import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'
export default class List extends Component {

    state = {
        users: [], //用户相关信息
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //是否处于加载中
        err: '',//存储请求相关的错误信息
    }

    componentDidMount() {
        this.updateAppState = Pubsub.subscribe('updateAppState', (msg, stateObj) => {
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        Pubsub.unsubscribe(this.updateAppState)
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state;
        return (
            <div className="row" >
                {
                    isFirst ? <h2>欢迎使用</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div className="card" key={userObj.id}>
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img src={userObj.avatar_url} style={{ width: '100px' }} alt="avatar" />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }

            </div>
        )


    }
}
