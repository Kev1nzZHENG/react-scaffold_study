//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
// antd自定义主题
import { ConfigProvider } from 'antd'
//引入App
import App from './App'

// 渲染APP组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ConfigProvider theme={{ token: { colorPrimary: 'orange' } }}>
		<App />
	</ConfigProvider>

)
