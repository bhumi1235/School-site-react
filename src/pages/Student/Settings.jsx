import React from 'react';

export default function Settings() {
  return (
    <div className="dashboard-section animation-fade-in">
        <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
            <h2 className="mb-0 fw-bold"><i className="fa fa-cog text-secondary me-3"></i>Portal Settings</h2>
            <button className="btn btn-primary rounded-pill px-4 shadow-sm fw-bold">
                <i className="fa fa-save me-2"></i>Save Changes
            </button>
        </div>

        <div id="settings-content-container">
            <div className="row g-4 mb-4">
                {/* Left */}
                <div className="col-lg-6">
                    <div className="stat-card h-100 shadow-sm border-0">
                        <h5 className="mb-4 fw-bold"><i className="fa fa-user-circle me-3 text-primary"></i>Personal Profile</h5>
                        <div className="mb-3">
                            <label className="form-label small text-muted fw-bold">Full Name</label>
                            <input type="text" className="form-control border-0 bg-light text-dark fw-bold py-2 px-3" defaultValue="Arjun Mehta" />
                        </div>
                        <div className="row g-3 px-0">
                            <div className="col-md-6 mt-3">
                                <label className="form-label small text-muted fw-bold">Roll Number</label>
                                <input type="text" className="form-control border-0 bg-light text-muted fw-bold py-2 px-3 opacity-75" defaultValue="2024-101" readOnly />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="form-label small text-muted fw-bold">Phone</label>
                                <input type="text" className="form-control border-0 bg-light text-dark fw-bold py-2 px-3" defaultValue="+971 2 123 4567" />
                            </div>
                        </div>
                        <hr className="my-5 text-muted opacity-25" />
                        <h6 className="fw-bold mb-4 d-flex align-items-center"><i className="fa fa-sliders-h me-3 text-info"></i>App Preferences</h6>
                        <div className="row g-3 px-0">
                            <div className="col-md-6 mt-3">
                                <label className="form-label small text-muted fw-bold">Language</label>
                                <select className="form-select border-0 bg-light text-dark fw-bold py-2 px-3"><option>English</option><option>Hindi</option></select>
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="form-label small text-muted fw-bold">Time-Zone</label>
                                <select className="form-select border-0 bg-light text-dark fw-bold py-2 px-3"><option>(UTC+05:30) India</option><option>Gulf Time</option></select>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right */}
                <div className="col-lg-6">
                    <div className="stat-card mb-4 shadow-sm border-0" style={{ backgroundColor: '#f8fafc' }}>
                        <h5 className="mb-4 fw-bold"><i className="fa fa-bell me-3 text-warning"></i>Notifications</h5>
                        <div className="d-flex justify-content-between align-items-center mb-3 p-4 bg-white rounded-4 border-0 shadow-sm transition-hover">
                            <div><h6 className="mb-1 fw-bold text-dark">Push Notifications</h6><small className="text-muted fw-bold">Mobile app alerts</small></div>
                            <div className="form-check form-switch m-0"><input className="form-check-input" type="checkbox" defaultChecked style={{ width:'40px', height:'20px', cursor:'pointer' }} /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-4 bg-white rounded-4 border-0 shadow-sm transition-hover">
                            <div><h6 className="mb-1 fw-bold text-dark">Email Digest</h6><small className="text-muted fw-bold">Weekly class updates</small></div>
                            <div className="form-check form-switch m-0"><input className="form-check-input" type="checkbox" defaultChecked style={{ width:'40px', height:'20px', cursor:'pointer' }} /></div>
                        </div>
                    </div>
                    <div className="stat-card shadow-sm border border-danger border-opacity-10" style={{ backgroundColor: '#fffafb' }}>
                        <h5 className="mb-4 fw-bold text-danger"><i className="fa fa-shield-alt me-3"></i>Security</h5>
                        <div className="mb-4">
                            <input type="password" className="form-control border-0 bg-white mb-3 py-3 px-4 shadow-sm text-dark fw-bold" placeholder="Current Password" />
                            <input type="password" className="form-control border-0 bg-white py-3 px-4 shadow-sm text-dark fw-bold" placeholder="New Password" />
                        </div>
                        <button className="btn btn-danger w-100 fw-bold rounded-pill py-3 shadow-sm text-uppercase" style={{ letterSpacing: '1px' }}>Update Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
