import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/LabGrotesque-Medium.woff2'
import './assets/fonts/LabGrotesque-Regular.woff2'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
