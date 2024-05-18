import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  //Each route is going to be an object
  {
    //This is just an example
    path: '/',
    element: <h1>Home page</h1>
  },
    {
    //This is just an example
    path: '/about',
    element: <h1>About page</h1>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;