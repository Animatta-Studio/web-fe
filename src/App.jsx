import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Apply, GoToTop } from './components';
import { Home, Contact, StudyAbroad, Courses, About } from './scenes';

const App = () => {
  const [loc, setLoc] = useState();
  return (
    <div className="bg-primary-0 w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/home/apply' element={<Apply />} />
        <Route path='/abroad' element={<StudyAbroad />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/apply' element={<Apply />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  )
};

export default App
