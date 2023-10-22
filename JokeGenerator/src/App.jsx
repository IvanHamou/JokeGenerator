import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './views/Home';
import Favorites from './views/Favorites';
import Alljokes from './views/Alljokes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/favorites',
    element: <Favorites />
  },
  {
    path: '/alljokes',
    element: <Alljokes />
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
