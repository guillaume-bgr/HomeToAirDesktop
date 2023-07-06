import Versions from './components/Versions'
import icons from './assets/icons.svg'
import Home from './pages/Home.jsx'
import Sidebar from './components/layout/Sidebar'
import Template from './pages/Template'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sensors',
        element: <Sensors />
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
