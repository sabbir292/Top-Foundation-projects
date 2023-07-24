import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'


import Home from "./Home/Home"
import Layout from './Layout/Layout'
import Recipies from './RecipiePage/Recipies'
import Services from './ServicesPage/Services'
import AboutPage from './AboutPage/AboutPage'
import News from './News/News'
import Contact from './Contact/Contact'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = {<Layout />}>
      <Route index element={<Home />} />
      <Route  path='recipies' element = {<Recipies />}/>
      <Route  path='services' element = {<Services />}/>
      <Route  path='about' element = {<AboutPage />}/>
      <Route  path='news' element = {<News />}/>
      <Route  path='contact' element = {<Contact />}/>
  </Route>
))

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
