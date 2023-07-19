import Home from './pages/Home'
import Sensors from './pages/Sensors/Sensors'
import Template from './pages/Template'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddSensor from './components/forms/add/AddSensor'
import ShowSensor from './pages/Sensors/ShowSensor'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sensors',
        children: [
          {
            index: true,
            element: <Sensors />
          },
          {
            path: '/sensors/add',
            element: <AddSensor />
          },
          { 
            path: '/sensors/:id',
            element: <ShowSensor />
          }
        ]
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
