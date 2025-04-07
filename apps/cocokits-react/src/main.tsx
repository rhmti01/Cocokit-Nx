import '@cocokits/theme-frames-x/tokens.min.css'; // <- Add this one
import '@cocokits/theme-frames-x/styles.min.css'; // <- Add this one
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

