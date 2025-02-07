import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NestedInput from './NestedInput.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NestedInput />
  </StrictMode>
)
