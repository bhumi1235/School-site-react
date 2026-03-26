import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardHome() {
    return (
        <div className="dashboard-section animation-fade-in text-start">
            {/* Enhanced Welcome Section */}
            <div className="welcome-section">
                <div className="welcome-content w-100 d-flex align-items-center justify-content-between">
                    <div className="flex-grow-1">
                        <div className="d-flex align-items-center gap-3 mb-2">
                            <span className="badge bg-white text-primary rounded-pill px-3 py-2 fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>CLASS 12-A</span>
                            <span className="text-white-50 small fw-bold"><i className="fa fa-clock me-1"></i> UPDATED 2M AGO</span>
                        </div>
                        <h1 className="fw-bold mb-2 text-white" style={{ fontSize: '2.4rem', letterSpacing: '-1.2px' }}>
                            Good Evening, Arjun! <span className="ms-1">👋</span>
                        </h1>
                        <p className="mb-0 fs-5 text-white-50 fw-medium">
                            <i className="fa fa-info-circle me-2"></i>
                            You have <span className="text-white fw-bold">3 assignments</span> due today. Next class starts in <span className="text-white fw-bold">15 minutes</span>.
                        </p>
                    </div>
                    <div className="ms-4 d-none d-lg-block">
                        <div className="rounded-4 d-flex align-items-center justify-content-center shadow-lg" style={{ width: '90px', height: '90px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)', transform: 'rotate(5deg)' }}>
                            <i className="fa fa-graduation-cap text-white" style={{ fontSize: '3rem' }}></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="row g-4 mt-2 mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="stat-card h-100">
                        <div className="icon-box mb-3 shadow-sm" style={{ background: '#eff6ff', color: '#3b82f6', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', fontSize: '1.25rem' }}>
                            <i className="fa fa-user-clock"></i>
                        </div>
                        <h6 className="text-muted small mb-1">Total Attendance</h6>
                        <h2 className="mb-0">94%</h2>
                        <div className="progress mt-3" style={{ height: '6px', borderRadius: '10px', background: '#f1f5f9' }}>
                            <div className="progress-bar bg-warning" style={{ width: '94%', borderRadius: '10px' }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="stat-card h-100">
                        <div className="icon-box mb-3 shadow-sm" style={{ background: '#f0fdf4', color: '#22c55e', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', fontSize: '1.25rem' }}>
                            <i className="fa fa-list-check"></i>
                        </div>
                        <h6 className="text-muted small mb-1">Assignments Done</h6>
                        <h2 className="mb-0">12/15</h2>
                        <div className="progress mt-3" style={{ height: '6px', borderRadius: '10px', background: '#f1f5f9' }}>
                            <div className="progress-bar bg-success" style={{ width: '80%', borderRadius: '10px' }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="stat-card h-100">
                        <div className="icon-box mb-3 shadow-sm" style={{ background: '#fff7ed', color: '#f97316', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', fontSize: '1.25rem' }}>
                            <i className="fa fa-award"></i>
                        </div>
                        <h6 className="text-muted small mb-1">Overall Score</h6>
                        <h2 className="mb-0">A+ (9.2)</h2>
                        <div className="progress mt-3" style={{ height: '6px', borderRadius: '10px', background: '#f1f5f9' }}>
                            <div className="progress-bar bg-warning" style={{ width: '85%', borderRadius: '10px' }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="stat-card h-100">
                        <div className="icon-box mb-3 shadow-sm" style={{ background: '#faf5ff', color: '#a855f7', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', fontSize: '1.25rem' }}>
                            <i className="fa fa-bell"></i>
                        </div>
                        <h6 className="text-muted small mb-1">Upcoming Exams</h6>
                        <h2 className="mb-0">02</h2>
                        <small className="mt-3 d-block fw-bold text-muted">Next: Physics (Mar 20)</small>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {/* Left Side: Quick Actions & Activity */}
                <div className="col-lg-8">
                    <h5 className="mb-4 fw-bold text-dark">Quick Actions</h5>
                    <div className="row g-4 mb-5">
                        {[
                            { icon: "fa-chart-line", color: "text-warning", label: "View My Grades", link: "/student/dashboard/fees" },
                            { icon: "fa-upload", color: "text-success", label: "Active Assignments", link: "/student/dashboard/homework" },
                            { icon: "fa-download", color: "text-info", label: "Download Notes", link: "/student/dashboard/homework" },
                            { icon: "fa-envelope", color: "text-warning", label: "Contact Teacher", link: "/student/dashboard/settings" },
                            { icon: "fa-calendar-alt", color: "text-danger", label: "Event Schedule", link: "/student/dashboard/timetable" },
                            { icon: "fa-file-alt", color: "text-secondary", label: "Exam Dates", link: "/student/dashboard/timetable" }
                        ].map((action, i) => (
                            <Link to={action.link} className="col-md-4 col-6 text-decoration-none" key={i}>
                                <div className="stat-card d-flex flex-column align-items-center justify-content-center text-center p-4 transition-hover">
                                    <i className={`fa ${action.icon} ${action.color} mb-3`} style={{ fontSize: '1.8rem' }}></i>
                                    <span className="small fw-bold text-dark">{action.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="stat-card shadow-sm border-0 p-4 rounded-4 bg-white mt-4">
                        <h5 className="mb-4 fw-bold text-dark">Recent Activity</h5>
                        <div className="timeline" style={{ position: 'relative', paddingLeft: '35px' }}>
                            <style>{`
                                .timeline::before { content: ''; position: absolute; left: 6px; top: 0; bottom: 0; width: 2px; background: #e2e8f0; }
                                .timeline-item { position: relative; margin-bottom: 30px; }
                                .timeline-item:last-child { margin-bottom: 0; }
                                .timeline-item::before { content: ''; position: absolute; left: -34px; top: 5px; width: 12px; height: 12px; border-radius: 50%; background: #3b82f6; border: 2px solid #fff; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); z-index: 1; }
                            `}</style>
                            <div className="timeline-item">
                                <div className="timeline-time small fw-semibold text-muted mb-1">Today, 08:30 AM</div>
                                <div className="timeline-content fw-semibold text-dark">Submitted Mathematics assignment: "Calculus Basics"</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-time small fw-semibold text-muted mb-1">Yesterday, 14:20 PM</div>
                                <div className="timeline-content fw-semibold text-dark" dangerouslySetInnerHTML={{ __html: 'Your English grade has been updated: <strong>B+</strong>' }}></div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-time small fw-semibold text-muted mb-1">12 Mar, 10:15 AM</div>
                                <div className="timeline-content fw-semibold text-dark">New study material uploaded in Science: 'Cell Structure'</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Schedule & Events */}
                <div className="col-lg-4">
                    <div className="stat-card mb-4 shadow-sm border-0 p-4 rounded-4 bg-white">
                        <h5 className="mb-4 fw-bold text-dark">Today's Schedule</h5>
                        <div className="d-flex flex-column gap-3">
                            {/* Active Schedule Item */}
                            <div className="d-flex align-items-center gap-3 pb-3 border-light">
                                <div className="bg-warning text-white rounded-3 d-flex flex-column align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '55px', height: '55px', lineHeight: '1.2' }}>
                                    <span style={{ fontSize: '0.9rem' }}>10:00</span>
                                    <span style={{ fontSize: '0.7rem' }}>AM</span>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 fw-bold text-dark">Mathematics</h6>
                                    <small className="text-muted fw-semibold">Room 204 • Dr. RK Sharma</small>
                                </div>
                            </div>
                            {/* Upcoming Schedule Items */}
                            <div className="d-flex align-items-center gap-3 pb-3 border-light mt-2">
                                <div className="text-primary rounded-3 d-flex flex-column align-items-center justify-content-center fw-bold" style={{ width: '55px', height: '55px', lineHeight: '1.2' }}>
                                    <span style={{ fontSize: '0.9rem' }}>11:30</span>
                                    <span style={{ fontSize: '0.7rem' }}>AM</span>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 fw-bold text-dark">English Literature</h6>
                                    <small className="text-muted fw-semibold">Room 102 • Ms. Priya Nair</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-2">
                                <div className="text-primary rounded-3 d-flex flex-column align-items-center justify-content-center fw-bold" style={{ width: '55px', height: '55px', lineHeight: '1.2' }}>
                                    <span style={{ fontSize: '0.9rem' }}>01:00</span>
                                    <span style={{ fontSize: '0.7rem' }}>PM</span>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 fw-bold text-dark">Physics Lab</h6>
                                    <small className="text-muted fw-semibold">Lab 02 • Mr. Desai</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card shadow-sm border-0 p-4 rounded-4 bg-white mt-4">
                        <h5 className="mb-4 fw-bold text-dark">Upcoming Events</h5>
                        <div className="d-flex flex-column gap-3">
                            <div className="p-3 border-0 rounded-3 bg-light transition-hover" style={{ background: '#f8fafc' }}>
                                <h6 className="mb-1 fw-bold text-dark">Inter-School Sports Meet</h6>
                                <small className="text-muted fw-semibold d-flex align-items-center gap-1 mb-3"><i className="fa fa-clock text-muted"></i> 25 March 2026</small>
                                <button className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-bold w-auto">Details</button>
                            </div>
                            <div className="p-3 border-0 rounded-3 bg-light transition-hover" style={{ background: '#f8fafc' }}>
                                <h6 className="mb-1 fw-bold text-dark">Annual Science Exhibition</h6>
                                <small className="text-muted fw-semibold d-flex align-items-center gap-1 mb-3"><i className="fa fa-clock text-muted"></i> 05 April 2026</small>
                                <button className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-bold w-auto">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
