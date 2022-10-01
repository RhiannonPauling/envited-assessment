import {BrowserRouter, Routes} from 'react-router-dom';
import SiteRoutes from './routes/SiteRoutes';
import Landing from './pages/Landing';
import Create from './pages/Create';
import Event from './pages/Event';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
