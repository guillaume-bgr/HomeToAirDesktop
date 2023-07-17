import Versions from './components/Versions'
import icons from './assets/icons.svg'
import Home from './pages/Home'
import Sensors from './pages/Sensors'
import Template from './pages/Template'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddSensor from './components/forms/add/AddSensor'

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
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
