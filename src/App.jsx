import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Topbar    from './components/layout/Topbar';
import Navbar    from './components/layout/Navbar';
import Footer    from './components/layout/Footer';
import CTABanner from './components/layout/CTABanner';
import BackToTop from './components/ui/BackToTop';


import Home           from './pages/Website/Home';
import About          from './pages/Website/About';
import Infrastructure from './pages/Website/Infrastructure';
import Beyond         from './pages/Website/Beyond';
import Academics      from './pages/Website/Academics';
import Showcase       from './pages/Website/Showcase';
import NewsEvents      from './pages/Website/NewsEvents';
import Rules          from './pages/Website/Rules';
import Gallery        from './pages/Website/Gallery';
import Contact        from './pages/Website/Contact';
import Admissions     from './pages/Website/Admissions';
import Disclosure     from './pages/Website/Disclosure';
import Leadership     from './pages/Website/Leadership';
import Team           from './pages/Website/Team';

import StudentLogin         from './pages/Student/StudentLogin';
import DashboardLayout      from './pages/Student/DashboardLayout';
import DashboardHome        from './pages/Student/DashboardHome';
import Attendance           from './pages/Student/Attendance';
import Homework             from './pages/Student/Homework';
import Fees                 from './pages/Student/Fees';
import Settings             from './pages/Student/Settings';
import Timetable            from './pages/Student/Timetable';

// Scroll to top on route change or handle hash scrolling
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small timeout to allow the DOM to render before scrolling
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
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
      {pathname !== '/admissions' && <CTABanner />}
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/student/login" element={<StudentLogin />} />
        
        {/* Student Dashboard Sub-router */}
        <Route path="/student/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="homework" element={<Homework />} />
          <Route path="fees" element={<Fees />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Main website layout catch-all */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
