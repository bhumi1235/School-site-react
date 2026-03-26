import React, { useState } from 'react';

export default function Homework() {
  const [activeTab, setActiveTab] = useState('All');

  const assignments = [
    { id: 1, title: "Algebra Chapter 4 Exercises", subject: "Mathematics", due: "Tomorrow, 11:59 PM", status: "Pending", icon: "fa-square-root-variable", bg: "#eff6ff", color: "#3b82f6" },
    { id: 2, title: "Laws of Thermodynamics Lab Report", subject: "Physics", due: "Today, 09:00 AM", status: "Completed", icon: "fa-atom", bg: "#f0fdf4", color: "#22c55e" },
    { id: 3, title: "French Revolution Summary", subject: "History", due: "25 Mar, 02:00 PM", status: "Pending", icon: "fa-landmark", bg: "#faf5ff", color: "#a855f7" },
    { id: 4, title: "Cell Structure Diagram", subject: "Biology", due: "26 Mar, 10:00 AM", status: "Pending", icon: "fa-microscope", bg: "#fff7ed", color: "#f97316" }
  ];

  const filteredAssignments = activeTab === 'All' 
    ? assignments 
    : assignments.filter(a => a.status === activeTab);

  return (
    <div className="dashboard-section animation-fade-in text-start">
      <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
          <h2 className="mb-0 fw-bold text-dark">Assignments & Homework</h2>
          <div className="filter-tabs m-0 shadow-sm" style={{ background: '#f1f5f9', padding: '6px', borderRadius: '50px' }}>
              {['All', 'Pending', 'Completed'].map(tab => (
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
      <div className="row g-4 mt-2">
          <div className="col-12">
            {filteredAssignments.map(item => (
                <div className="stat-card d-flex align-items-center gap-4 mb-3 transition-hover" key={item.id}>
                    <div className="icon-box shadow-sm" style={{ background: item.bg, color: item.color, width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', fontSize:'1.2rem' }}>
                        <i className={`fa ${item.icon}`}></i>
                    </div>
                    <div className="flex-grow-1">
                        <h6 className="mb-1 text-dark fw-bold">{item.title}</h6>
                        <small className="text-muted fw-bold">{item.subject} • Due: {item.due}</small>
                    </div>
                    <span className={`badge bg-${item.status === 'Completed' ? 'success' : 'warning'}-soft text-${item.status === 'Completed' ? 'success' : 'warning'} rounded-pill px-3 me-3`}>{item.status}</span>
                    <button className={`btn btn-${item.status === 'Completed' ? 'light border' : 'primary'} btn-sm rounded-pill px-4 fw-bold`} disabled={item.status === 'Completed'}>
                        {item.status === 'Completed' ? 'View' : 'Submit'}
                    </button>
                </div>
            ))}

            {filteredAssignments.length === 0 && (
                <div className="text-center py-5">
                    <i className="fa fa-clipboard-check text-muted mb-3" style={{ fontSize: '3rem', opacity: 0.2 }}></i>
                    <p className="text-muted fw-bold">No {activeTab} assignments found!</p>
                </div>
            )}
          </div>
      </div>
    </div>
  );
}
