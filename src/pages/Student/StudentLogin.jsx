import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function StudentLogin() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('student');
  const navigate = useNavigate();

  useEffect(() => {
    const role = searchParams.get('role');
    if (role === 'teacher') setActiveTab('teacher');
    else if (role === 'parent') setActiveTab('parent');
  }, [searchParams]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (activeTab === 'student') navigate('/student/dashboard');
    else navigate('/student/dashboard?user=parent');
  };

  return (
    <>
      <style>{`
        :root { --portal-bg: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); }
        .portal-body {
            background: var(--portal-bg);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'Inter', sans-serif;
            color: #fff;
        }
        .portal-wrapper {
            width: 100%;
            max-width: 480px;
            animation: fadeIn 0.8s ease-out;
        }
        .portal-header { text-align: center; margin-bottom: 40px; }
        .portal-header i { font-size: 3rem; color: var(--accent); margin-bottom: 15px; filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.3)); }
        .portal-header h2 { color: #fff !important; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 5px; }
        .portal-header p { color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; }
        .portal-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .tab-nav-container {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 16px;
            padding: 6px;
            margin-bottom: 35px;
            position: relative;
            display: flex;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .tab-nav-container .nav-btn {
            flex: 1; border: none; background: none; color: rgba(255, 255, 255, 0.6);
            font-weight: 600; padding: 12px 0; font-size: 0.95rem; z-index: 2;
            cursor: pointer; transition: color 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .tab-nav-container .nav-btn.active { color: #fff; }
        .tab-nav-container .glider {
            position: absolute; height: calc(100% - 12px); width: calc(50% - 6px);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            border-radius: 12px; top: 6px; left: 6px; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1; box-shadow: 0 4px 15px rgba(26, 86, 219, 0.3);
        }
        .tab-nav-container[data-active="parent"] .glider {
            transform: translateX(100%);
            background: linear-gradient(135deg, var(--accent) 0%, #d97706 100%);
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }
        .form-label { color: rgba(255, 255, 255, 0.8); font-size: 0.85rem; font-weight: 500; margin-bottom: 8px; }
        .form-control-portal {
            background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px; padding: 12px 16px; color: #fff; transition: all 0.3s ease; width: 100%;
        }
        .form-control-portal:focus {
            background: rgba(255, 255, 255, 0.08); border-color: var(--primary); color: #fff;
            box-shadow: 0 0 0 4px rgba(26, 86, 219, 0.15); outline: none;
        }
        .form-control-portal::placeholder { color: rgba(255, 255, 255, 0.3); }
        .btn-portal-primary {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%) !important;
            border: none !important; padding: 14px !important; border-radius: 12px !important;
            font-weight: 700 !important; letter-spacing: 0.5px !important; color: #fff !important;
            box-shadow: 0 10px 20px -5px rgba(26, 86, 219, 0.4) !important;
        }
        .btn-portal-accent {
            background: linear-gradient(135deg, var(--accent) 0%, #d97706 100%) !important;
            border: none !important; padding: 14px !important; border-radius: 12px !important;
            font-weight: 700 !important; letter-spacing: 0.5px !important; color: #fff !important;
            box-shadow: 0 10px 20px -5px rgba(245, 158, 11, 0.4) !important;
        }
        .back-link {
            position: fixed; top: 30px; left: 30px; color: rgba(255, 255, 255, 0.5);
            text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.3s ease;
            display: flex; align-items: center;
        }
        .back-link:hover { color: #fff; transform: translateX(-5px); }
        .back-link i { margin-right: 8px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 576px) { .portal-card { padding: 30px 20px; } .back-link { top: 20px; left: 20px; } }
      `}</style>

      <div className="portal-body">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="back-link">
          <i className="fa fa-arrow-left"></i> Back to Website
        </a>

        <div className="portal-wrapper">
          <div className="portal-header">
            <i className="fa fa-school"></i>
            <h2>Global Portal</h2>
            <p>Authorized access only. Please sign in to proceed.</p>
          </div>

          <div className="portal-card">
            <div className={`tab-nav-container`} data-active={activeTab}>
              <button className={`nav-btn ${activeTab === 'student' ? 'active' : ''}`} onClick={() => setActiveTab('student')}>
                <i className="fa fa-user-graduate"></i> Student
              </button>
              <button className={`nav-btn ${activeTab === 'parent' ? 'active' : ''}`} onClick={() => setActiveTab('parent')}>
                <i className="fa fa-user-friends"></i> Parent
              </button>
              <div className="glider"></div>
            </div>

            {activeTab === 'student' ? (
              <form onSubmit={handleLogin} className="portal-form active">
                <div className="mb-4 text-start">
                  <label className="form-label">Student / Parent Email</label>
                  <input type="text" className="form-control-portal" placeholder="e.g. student@school.com" defaultValue="student@school.com" />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control-portal" placeholder="••••••••" defaultValue="student123" />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check d-flex align-items-center gap-2">
                    <input className="form-check-input m-0" type="checkbox" id="remStudent" />
                    <label className="form-check-label small text-white-50" htmlFor="remStudent">Remember me</label>
                  </div>
                  <a href="#forgot" className="small text-primary text-decoration-none" style={{ color: '#3b82f6' }}>Forgot?</a>
                </div>
                <button type="submit" className="btn btn-primary w-100 btn-portal-primary">Sign In to Dashboard</button>
                <div className="mt-3 text-center">
                  <p className="small text-white-50" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                    Student: student@school.com / student123<br />
                    Parent: parent@school.com / parent123
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleLogin} className="portal-form active">
                <div className="mb-4 text-start">
                  <label className="form-label">Parent Registered Email</label>
                  <input type="email" className="form-control-portal" placeholder="parent@school.com" defaultValue="parent@school.com" />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label">Parent Access Password</label>
                  <input type="password" className="form-control-portal" placeholder="••••••••" defaultValue="parent123" />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check d-flex align-items-center gap-2">
                    <input className="form-check-input m-0" type="checkbox" id="remParent" />
                    <label className="form-check-label small text-white-50" htmlFor="remParent">Remember me</label>
                  </div>
                  <a href="#forgot" className="small text-warning text-decoration-none" style={{ color: '#d97706' }}>Forgot?</a>
                </div>
                <button type="submit" className="btn btn-warning w-100 btn-portal-accent text-white">Sign In to Parent Dashboard</button>
                <div className="mt-3 text-center">
                  <p className="small text-white-50" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Demo: parent@school.com / parent123</p>
                </div>
              </form>
            )}

            <div className="text-center mt-5">
              <p className="small text-white-50">Having trouble? <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="text-white text-decoration-underline">Contact Support</a></p>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="small text-white-50" style={{ color: 'rgba(255,255,255,0.5)' }}>&copy; 2026 Global School. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
