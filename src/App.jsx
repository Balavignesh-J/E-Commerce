import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Rootlayout from './Rootlayout'
import './App.css'
import Carousel from './Components/Carousel'
import Single_Product from './Components/Single_Product'
import Profile from './Components/Profile'
import Search_result from './Components/Search_result'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Carousel />}/>
        <Route path=':id' element={<Single_Product />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='search' element={<Search_result />}/>
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
