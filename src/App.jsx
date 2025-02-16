import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Rootlayout from './Rootlayout'
import './App.css'
import Home from './Components/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
