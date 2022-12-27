import React, { Component } from 'react'
import { Space, Button, DatePicker } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import {
	WechatOutlined
} from '@ant-design/icons';
const { RangePicker } = DatePicker
export default class App extends Component {
	render() {
		return (
			<Space>
				<Button type="primary" shape="round" icon={<DownloadOutlined />} size="middle">
					Download
				</Button>
				<WechatOutlined />
				<RangePicker />
			</Space>
		)
	}
}
