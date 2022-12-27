// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom/client'
// 引入React-router
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// 渲染APP组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)