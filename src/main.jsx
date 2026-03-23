import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './styles/variables.css';
import './styles/global.css';
import './styles/components.css';

import App from './App.jsx';

// Initialize AOS scroll animations
AOS.init({
  duration: 700,
  once: true,
  offset: 60,
  easing: 'ease-out-cubic',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
