import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.tsx'


const ws = new WebSocket('ws://localhost:8080/ws')
ws.onopen = () => {
  console.log('Successfully connected to the WebSocket server!')
  ws.send('Hello, Server!')
}

/* 收到服务器数据后的回调函数 */
ws.onmessage = (event) => {
  console.log('Received message: ', event.data)
}

/* 连接关闭后的回调函数 */
ws.onclose = (event) => {
  console.log('WebSocket connection closed：', event)
}

/* 报错时的回调函数 */
ws.onerror = (event) => {
  console.log('An error occurred in the connection：', event)
}

setTimeout(() => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send('12345')
  }
}, 3000)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
