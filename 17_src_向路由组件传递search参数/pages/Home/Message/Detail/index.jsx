import React, { Component } from 'react'
import qs from 'qs'
const detailData = [
    { id: '01', content: 'Message1' },
    { id: '02', content: 'Message2' },
    { id: '03', content: 'Message3' }
]

export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 接收params参数
        // const {id,title} = this.props.match.params;

        // 接收search参数
        const { search } = this.props.location;
        const { id, title } = qs.parse(search.slice(1));
        const findResult = detailData.find((detailObj) => {
            return detailObj.id === id;
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
