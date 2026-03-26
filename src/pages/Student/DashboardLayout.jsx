import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../styles/student.css';

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();

    return (
    <>
      {/* Mobile Overlay */}
            {sidebarOpen && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }} onClick={() => setSidebarOpen(false)} />}

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} style={sidebarOpen ? { left: 0 } : {}}>
                <div className="sidebar-header">
                    <h3><i className="fa fa-school me-2"></i>Global</h3>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item-dash">
                        <NavLink to="/student/dashboard" end className={({ isActive }) => `nav-link-dash ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                            <i className="fa fa-home"></i> Home
                        </NavLink>
                    </li>
                    <li className="nav-item-dash">
                        <NavLink to="/student/dashboard/attendance" className={({ isActive }) => `nav-link-dash ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                            <i className="fa fa-calendar-check"></i> Attendance
                        </NavLink>
                    </li>
                    <li className="nav-item-dash">
                        <NavLink to="/student/dashboard/homework" className={({ isActive }) => `nav-link-dash ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                            <i className="fa fa-book"></i> Homework
                        </NavLink>
                    </li>
                    <li className="nav-item-dash">
                        <NavLink to="/student/dashboard/fees" className={({ isActive }) => `nav-link-dash ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                            <i className="fa fa-file-invoice-dollar"></i> Fees
                        </NavLink>
                    </li>
                    <li className="nav-item-dash">
                        <NavLink to="/student/dashboard/timetable" className={({ isActive }) => `nav-link-dash ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                            <i className="fa fa-calendar-alt"></i> Timetable
                        </NavLink>
                    </li>
                    <li className="nav-item-dash">
                        <NavLink to="/student/dashboard/settings" className={({ isActive }) => `nav-link-dash ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                            <i className="fa fa-cog"></i> Settings
                        </NavLink>
                    </li>
                    <li className="nav-item-dash mt-5">
                        <a href="#logout" onClick={(e) => { e.preventDefault(); navigate('/student/login'); }} className="nav-link-dash text-danger">
                            <i className="fa fa-sign-out-alt"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>

            <div className="top-navbar">
                {/* Mobile Toggle Menu */}
                <button className="d-lg-none" onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', marginRight: '20px', outline: 'none', color: '#0f172a' }}>
                    <i className="fas fa-bars"></i>
                </button>

                <div className="user-profile" style={{ position: 'relative' }}>
                    <img src="/img/testimonial-2.webp" alt="Profile" className="profile-img" onClick={() => setProfileOpen(!profileOpen)} />

                    {profileOpen && (
                        <div className="profile-dropdown show">
                            <div className="dropdown-header">
                                <img src="/img/testimonial-2.webp" alt="Profile" />
                                <h6 className="mb-0">Arjun Mehta</h6>
                                <span className="text-muted small">Class 12-A • ID: 2024-101</span>
                            </div>
                            <div className="dropdown-body">
                                <a href="#logout" onClick={(e) => { e.preventDefault(); navigate('/student/login'); }} className="dropdown-link text-danger" style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-sign-out-alt" style={{ marginRight: '8px' }}></i> Logout
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="main-content">
                <Outlet />
            </div>
        </>
    );
}
