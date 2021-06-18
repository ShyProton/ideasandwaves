import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'

import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from './components/Home';
import Contact from './components/Contact';

import { useState } from 'react'

const App = () => {
  const [route, setRoute] = useState('/' + window.location.href.split('/')[3])
  const [contact, setContact] = useState(false)

  const refreshRoute = (path) => {
    setRoute(path)
  }

  const toggleContact = () => {
    setContact(!contact)
    console.log(contact);
  }

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar route={route} refreshRoute={refreshRoute}/>
      <Contact activated={contact} toggle={toggleContact}/>
      <Route exact path={'/'}>
        <Home refreshRoute={refreshRoute} toggleContact={toggleContact}/>
      </Route>
      <Route path={'/services'} component={Services}/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
