import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx: Starting React app...');

const rootElement = document.getElementById("root");
console.log('main.tsx: Root element found:', rootElement);

if (rootElement) {
  console.log('main.tsx: Creating React root...');
  createRoot(rootElement).render(<App />);
  console.log('main.tsx: React app rendered successfully');
} else {
  console.error('main.tsx: Root element not found!');
}
