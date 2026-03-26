import React, { useState } from 'react';

export default function Timetable() {
  const [activeTab, setActiveTab] = useState('Weekly');
  const schedule = [
    { time: '08:00 AM', monday: 'Math', tuesday: 'Physics', wednesday: 'Chemistry', thursday: 'English', friday: 'Physical Ed.' },
    { time: '09:00 AM', monday: 'Physics', tuesday: 'Math', wednesday: 'Biology', thursday: 'History', friday: 'Art' },
    { time: '10:00 AM', break: true, title: 'Morning Break' },
    { time: '10:30 AM', monday: 'Chemistry', tuesday: 'English', wednesday: 'Math', thursday: 'Geography', friday: 'Physics' },
    { time: '11:30 AM', monday: 'Biology', tuesday: 'Chemistry', wednesday: 'History', thursday: 'Math', friday: 'Computer' },
    { time: '12:30 PM', break: true, title: 'Lunch Break' },
    { time: '01:30 PM', monday: 'English', tuesday: 'Art', wednesday: 'Computer', thursday: 'Physics', friday: 'Math' }
  ];

  return (
    <div className="dashboard-section animation-fade-in text-start">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <h2 className="mb-0 fw-bold text-dark"><i className="fa fa-calendar-alt text-primary me-3"></i>Class Timetable</h2>
            <div className="filter-tabs m-0 shadow-sm" style={{ background: '#f1f5f9', padding: '6px', borderRadius: '50px' }}>
                {['Weekly', 'Monthly'].map(tab => (
                    <button 
                        key={tab}
                        className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        <div className="stat-card p-0 overflow-hidden">
            <div className="p-4 d-flex justify-content-between align-items-center border-bottom border-light">
                <button className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 fw-bold"><i className="fa fa-chevron-left me-1"></i> Pre</button>
                <h5 className="mb-0 fw-bold text-dark">16 Mar - 22 Mar, 2026</h5>
                <button className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 fw-bold">Next <i className="fa fa-chevron-right ms-1"></i></button>
            </div>

            <div className="table-responsive">
                <table className="table-modern w-100 mb-0">
                    <thead>
                        <tr>
                            <th className="text-center">TIME</th>
                            <th>MONDAY</th>
                            <th>TUESDAY</th>
                            <th>WEDNESDAY</th>
                            <th>THURSDAY</th>
                            <th>FRIDAY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((row, i) => (
                            row.break ? (
                                <tr key={i} className="row-special">
                                    <td className="text-center fw-bold text-muted">{row.time}</td>
                                    <td colSpan="5" className="text-center fw-bold text-muted text-uppercase small" style={{ letterSpacing: '2px' }}>{row.title}</td>
                                </tr>
                            ) : (
                                <tr key={i}>
                                    <td className="text-center fw-bold text-primary">{row.time}</td>
                                    <td><span className="fw-bold text-dark">{row.monday}</span></td>
                                    <td><span className="fw-bold text-dark">{row.tuesday}</span></td>
                                    <td><span className="fw-bold text-dark">{row.wednesday}</span></td>
                                    <td><span className="fw-bold text-dark">{row.thursday}</span></td>
                                    <td><span className="fw-bold text-dark">{row.friday}</span></td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
