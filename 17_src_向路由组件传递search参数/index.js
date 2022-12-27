//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
//
import { BrowserRouter } from 'react-router-dom'
//引入App
import App from './App'

// 渲染APP组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
	<App />
</BrowserRouter>)
