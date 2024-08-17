import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

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
        path: '/services',
        element: <Services></Services>
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
