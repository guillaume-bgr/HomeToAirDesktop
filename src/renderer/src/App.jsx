import Home from './pages/Home'
import Sensors from './pages/Sensors/Sensors'
import Template from './pages/Template'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShowSensor from './pages/Sensors/ShowSensor'
import SensorForm from './components/forms/SensorForm'
import Parks from './pages/Parks/Parks'
import ShowPark from './pages/Parks/ShowPark'
import ParkForm from './components/forms/ParkForm'

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
            element: <SensorForm />
          },
          { 
            path: '/sensors/:id',
            element: <ShowSensor />
          },
          {
            path: '/sensors/edit',
            element: <SensorForm action="edit" />
          },
        ]
      },
      {
        path: '/parks',
        children: [
          {
            index: true,
            element: <Parks />
          },
          {
            path: '/parks/:id',
            element: <ShowPark />
          },
          {
            path: '/parks/add',
            element: <ParkForm />
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
