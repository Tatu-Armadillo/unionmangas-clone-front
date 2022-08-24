import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Style
import './Global.css';

// React Bootstrap Configuration
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap"

import Home from './Page/Home';

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);