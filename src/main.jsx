import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Kanit 自托管（参考规范字体），仅 latin 子集，中文字形回退系统字体
import '@fontsource/kanit/latin-300.css'
import '@fontsource/kanit/latin-400.css'
import '@fontsource/kanit/latin-500.css'
import '@fontsource/kanit/latin-600.css'
import '@fontsource/kanit/latin-700.css'
import '@fontsource/kanit/latin-900.css'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
