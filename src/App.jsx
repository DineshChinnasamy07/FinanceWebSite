import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

// Vite sets BASE_URL from vite.config.js `base` (includes trailing slash).
// React Router basename must be without a trailing slash.
const routerBasename = String(import.meta.env.BASE_URL || '/')
  .replace(/\/+$/, '') || '/';

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
