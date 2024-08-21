import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Classes from './components/Classes/Classes';

function App() {

const router = createBrowserRouter([
  {
    path : '/',
    element: <Main></Main>,
    children : [
      {
        path: '/home',
        loader: ()=> fetch('school.json'),
        element: <Home></Home>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
    
  }
])

  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
