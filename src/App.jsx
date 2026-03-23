import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Topbar    from './components/layout/Topbar';
import Navbar    from './components/layout/Navbar';
import Footer    from './components/layout/Footer';
import CTABanner from './components/layout/CTABanner';
import BackToTop from './components/ui/BackToTop';


import Home           from './pages/Home';
import About          from './pages/About';
import Infrastructure from './pages/Infrastructure';
import Beyond         from './pages/Beyond';
import Academics      from './pages/Academics';
import Showcase       from './pages/Showcase';
import NewsEvents      from './pages/NewsEvents';
import Rules          from './pages/Rules';
import Gallery        from './pages/Gallery';
import Contact        from './pages/Contact';
import Admissions     from './pages/Admissions';
import Disclosure     from './pages/Disclosure';
import Leadership     from './pages/Leadership';
import Team           from './pages/Team';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/about"             element={<About />} />
          <Route path="/infrastructure"    element={<Infrastructure />} />
          <Route path="/academics"         element={<Academics />} />
          <Route path="/beyond-academics"  element={<Beyond />} />
          <Route path="/showcase"          element={<Showcase />} />
          <Route path="/news"              element={<NewsEvents />} />
          <Route path="/rules"             element={<Rules />} />
          <Route path="/gallery"           element={<Gallery />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="/admissions"        element={<Admissions />} />
          <Route path="/disclosure"        element={<Disclosure />} />
          <Route path="/leadership"        element={<Leadership />} />
          <Route path="/team"              element={<Team />} />
          {/* Catch-all — redirect to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <CTABanner />
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
