import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Apply, GoToTop } from './components';
import { Home, Contact, StudyAbroad, Courses, About, Event, EventList,Gallery } from './scenes';

const App = () => {
  const [loc, setLoc] = useState();
  return (
    <div className="bg-primary-0 w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/abroad' element={<StudyAbroad />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/event-list' element={<EventList />} />
        <Route path='/events*' element={<Event />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  )
};

export default App
