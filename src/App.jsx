import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, GoToTop, Fallback } from './components';

const Home = lazy(() => import('./scenes/Home'));
const Contact = lazy(() => import('./scenes/Contact'));
const StudyAbroad = lazy(() => import('./scenes/StudyAbroad'));
const Courses = lazy(() => import('./scenes/Courses'));
const About = lazy(() => import('./scenes/About'));
const Event = lazy(() => import('./scenes/Event'));
const EventList = lazy(() => import('./scenes/EventList'));
const Gallery = lazy(() => import('./scenes/Gallery'));
const Apply = lazy(() => import('./components/Apply'));


const App = () => {
  return (
    <div className="bg-primary-0 w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/abroad' element={<StudyAbroadPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/apply' element={<ApplyPage />} />
        <Route path='/event-list' element={<EventListPage />} />
        <Route path='/events/*' element={<EventPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  )
};


const HomePage = () => (
  <Suspense fallback={<Fallback />}>
    <Home />
  </Suspense>
);
const ContactPage = () => (
  <Suspense fallback={<Fallback />}>
    <Contact />
  </Suspense>
);
const StudyAbroadPage = () => (
  <Suspense fallback={<Fallback />}>
    <StudyAbroad />
  </Suspense>
);
const CoursesPage = () => (
  <Suspense fallback={<Fallback />}>
    <Courses />
  </Suspense>
);
const AboutPage = () => (
  <Suspense fallback={<Fallback />}>
    <About />
  </Suspense>
);
const EventPage = () => (
  <Suspense fallback={<Fallback />}>
    <Event />
  </Suspense>
);
const EventListPage = () => (
  <Suspense fallback={<Fallback />}>
    <EventList />
  </Suspense>
);
const GalleryPage = () => (
  <Suspense fallback={<Fallback />}>
    <Gallery />
  </Suspense>
);
const ApplyPage = () => (
  <Suspense fallback={<Fallback />}>
    <Apply />
  </Suspense>
);


export default App
