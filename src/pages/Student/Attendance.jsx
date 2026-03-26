import React, { useState } from 'react';

export default function Attendance() {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveStatus, setLeaveStatus] = useState('form');
  const [activeHistoryTab, setActiveHistoryTab] = useState('Class 8');

  // Multi-Class Data Store
  const classAttendanceData = {
    'Class 6': {
      present: 247, absent: 5, late: 2, leaves: '2/15', percent: 98.0, teacher: "Mrs. Shanthi Rao", workingDays: 252,
      breakdown: [
        { m: "April", w: 22, p: 22, l: 0, c: "success" },
        { m: "May", w: 18, p: 17, l: 1, c: "success" },
        { m: "June", status: "Summer Break" },
        { m: "July", w: 25, p: 25, l: 0, c: "success" },
        { m: "August", w: 24, p: 24, l: 0, c: "success" },
        { m: "September", w: 24, p: 22, l: 2, c: "warning" },
        { m: "October", w: 22, p: 22, l: 0, c: "success" },
        { m: "November", w: 20, p: 19, l: 1, c: "success" },
        { m: "December", w: 15, p: 15, l: 0, c: "success" },
        { m: "January", w: 20, p: 20, l: 0, c: "success" },
        { m: "February", w: 22, p: 22, l: 0, c: "success" },
        { m: "March", w: 23, p: 23, l: 0, c: "success" }
      ],
      subjects: [
        { name: "Mathematics", p: 38, t: 38, pct: 100, c: "success" },
        { name: "Science", p: 36, t: 38, pct: 95, c: "success" },
        { name: "SST", p: 35, t: 38, pct: 92, c: "success" },
        { name: "English", p: 38, t: 38, pct: 100, c: "success" },
        { name: "Hindi", p: 36, t: 38, pct: 95, c: "success" }
      ]
    },
    'Class 7': {
      present: 232, absent: 15, late: 8, leaves: '12/15', percent: 93.5, teacher: "Mr. Vikram Singh", workingDays: 248,
      breakdown: [
        { m: "April", w: 24, p: 22, l: 2, c: "warning" },
        { m: "May", w: 22, p: 20, l: 2, c: "warning" },
        { m: "June", status: "Summer Break" },
        { m: "July", w: 26, p: 23, l: 3, c: "danger" },
        { m: "August", w: 25, p: 24, l: 1, c: "success" },
        { m: "September", w: 26, p: 25, l: 1, c: "success" },
        { m: "October", w: 23, p: 22, l: 1, c: "success" },
        { m: "November", w: 24, p: 23, l: 1, c: "success" },
        { m: "December", w: 20, p: 19, l: 1, c: "success" },
        { m: "January", w: 21, p: 18, l: 3, c: "danger" },
        { m: "February", w: 22, p: 20, l: 2, c: "warning" },
        { m: "March", w: 23, p: 22, l: 1, c: "success" }
      ],
      subjects: [
        { name: "Mathematics", p: 32, t: 38, pct: 84, c: "warning" },
        { name: "Social Science", p: 36, t: 38, pct: 95, c: "success" },
        { name: "Chemistry", p: 34, t: 38, pct: 89, c: "warning" },
        { name: "Grammar", p: 37, t: 38, pct: 97, c: "success" },
        { name: "Sanskrit", p: 35, t: 38, pct: 92, c: "success" }
      ]
    },
    'Class 8': {
      present: 225, absent: 12, late: 4, leaves: '7/15', percent: 94.9, teacher: "Dr. Priya Sen", workingDays: 237,
      breakdown: [
        { m: "April", w: 24, p: 23, l: 1, c: "success" },
        { m: "May", w: 22, p: 21, l: 1, c: "success" },
        { m: "June", status: "Summer Break" },
        { m: "July", w: 26, p: 25, l: 1, c: "success" },
        { m: "August", w: 25, p: 24, l: 1, c: "success" },
        { m: "September", w: 26, p: 24, l: 1, c: "warning" },
        { m: "October", w: 23, p: 22, l: 1, c: "success" },
        { m: "November", w: 21, p: 20, l: 1, c: "success" },
        { m: "December", w: 18, p: 17, l: 1, c: "success" },
        { m: "January", w: 22, p: 21, l: 1, c: "success" },
        { m: "February", w: 20, p: 19, l: 1, c: "success" },
        { m: "March", status: "Ongoing" }
      ],
      subjects: [
        { name: "Mathematics", p: 36, t: 38, pct: 95, c: "success" },
        { name: "Physics", p: 37, t: 38, pct: 97, c: "success" },
        { name: "Chemistry", p: 35, t: 38, pct: 92, c: "success" },
        { name: "English", p: 37, t: 38, pct: 97, c: "success" },
        { name: "Hindi", p: 34, t: 38, pct: 89, c: "warning" }
      ]
    }
  };

  const currentClassData = classAttendanceData[activeHistoryTab];
  
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)
    // Adjusting for MON start (MON=0, TUE=1 ... SUN=6)
    // JS: SUN=0, MON=1, TUE=2, WED=3, THU=4, FRI=5, SAT=6
    // If SUN=0, it should be index 6. If MON=1, it should be index 0.
    const startOffset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    
    for (let i = 0; i < startOffset; i++) {
        days.push(<div key={`empty-${i}`} className="col p-3 border-0 bg-transparent">&nbsp;</div>);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
        let bg = 'bg-white';
        let text = '#0f172a';
        const isPast = (year < 2026 || (year === 2026 && month < 2) || (year === 2026 && month === 2 && i < 24));
        const isToday = (year === 2026 && month === 2 && i === 24);
        
        if (isPast) { 
            bg = '#f0fdf4'; text = '#16a34a'; 
            if (month === 2 && i === 9) { bg = '#fef2f2'; text = '#dc2626'; }
        } else if (isToday) {
            bg = '#f1f5f9'; text = '#64748b';
        } else {
            bg = 'transparent'; text = '#0f172a';
        }
        
        days.push(
            <div key={`day-${i}`} className={`col p-3 border-0 rounded-0 d-flex align-items-center justify-content-center fw-bold`} style={{ backgroundColor: bg, color: text, minHeight: '60px' }}>
                {i}
            </div>
        );
    }
    return days;
  };

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  return (
    <div className="dashboard-section animation-fade-in text-start">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
          <h2 className="mb-0 fw-bold text-dark">Attendance Overview</h2>
          <button className="btn btn-primary rounded-pill px-4 shadow-sm fw-bold d-flex align-items-center gap-2" onClick={() => setShowLeaveModal(true)}>
             <i className="fa fa-envelope"></i> Apply for Leave
          </button>
      </div>

      <div className="row g-4 mb-5">
        {/* Left Column - Calendar */}
        <div className="col-lg-8">
            <div className="stat-card p-4 rounded-4 shadow-sm border-0 bg-white h-100 pb-0">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0 fw-bold text-dark">{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h5>
                    <div className="d-flex gap-2">
                        <button className="btn btn-light btn-sm rounded-3 border bg-white d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }} onClick={() => changeMonth(-1)}><i className="fa fa-chevron-left text-muted"></i></button>
                        <button className="btn btn-light btn-sm rounded-3 border bg-white d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }} onClick={() => changeMonth(1)}><i className="fa fa-chevron-right text-muted"></i></button>
                    </div>
                </div>
                <div id="calendar-container" className="attendance-calendar">
                    <div className="row row-cols-7 g-0 text-center small fw-bold text-muted mb-2 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                        <div className="col py-2">MON</div><div className="col py-2">TUE</div><div className="col py-2">WED</div><div className="col py-2">THU</div><div className="col py-2">FRI</div><div className="col py-2">SAT</div><div className="col py-2">SUN</div>
                    </div>
                    <div className="row row-cols-7 g-0 text-center">
                        {renderCalendarDays()}
                    </div>
                </div>
            </div>
        </div>
        
        {/* Right Column - Stats */}
        <div className="col-lg-4">
            <div className="stat-card bg-warning-custom mb-4 shadow-sm border-0 p-4 rounded-4 position-relative overflow-hidden">
                <h6 className="fw-bold mb-1 text-dark">Yearly Attendance</h6>
                <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '2.5rem' }}>94.8%</h1>
                <div className="progress mt-4 mb-2" style={{ height: '6px', background: 'rgba(255,255,255,0.4)', borderRadius: '10px' }}>
                    <div className="progress-bar bg-white rounded-pill" style={{ width: '95%' }}></div>
                </div>
            </div>

            <div className="stat-card shadow-sm border-0 p-4 rounded-4 bg-white mb-4">
                <h6 className="fw-bold mb-3 text-dark">Attendance Legend</h6>
                <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center small fw-semibold text-muted"><span className="me-3" style={{ width:'14px', height:'14px', display:'inline-block', background: '#10b981' }}></span> Present</div>
                    <div className="d-flex align-items-center small fw-semibold text-muted"><span className="me-3" style={{ width:'14px', height:'14px', display:'inline-block', background: '#ef4444' }}></span> Absent</div>
                    <div className="d-flex align-items-center small fw-semibold text-muted"><span className="me-3" style={{ width:'14px', height:'14px', display:'inline-block', background: '#f59e0b' }}></span> Late</div>
                    <div className="d-flex align-items-center small fw-semibold text-muted"><span className="me-3" style={{ width:'14px', height:'14px', display:'inline-block', background: '#f1f5f9' }}></span> Holiday/Weekend</div>
                </div>
            </div>
            
            <div className="stat-card shadow-sm stat-card-outline p-4 rounded-4 bg-white">
                <h6 className="mb-3 text-uppercase text-muted fw-bold d-flex align-items-center gap-2" style={{ fontSize:'0.75rem', letterSpacing:'0.5px' }}><i className="fa fa-chart-line text-muted"></i>ACADEMIC PROGRESS</h6>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="small fw-bold text-dark">Classes Attended</span>
                    <span className="small fw-bold text-success">182/200</span>
                </div>
                <div className="progress mb-3 shadow-sm" style={{ height: '6px', borderRadius: '10px', background: '#e2e8f0' }}>
                    <div className="progress-bar bg-success rounded-pill" style={{ width: '91%' }}></div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small fw-bold text-danger" style={{ opacity: 0.8 }}>Classes Left</span>
                    <span className="small fw-bold text-danger">18 Classes</span>
                </div>
                <small className="text-muted d-block mt-2" style={{ fontSize: '0.65rem' }}>*Est until Final Exams (Apr 10)</small>
            </div>
        </div>
      </div>

      {/* Upcoming Holidays & Vacations */}
      <div className="stat-card shadow-sm border-0 bg-white p-4 rounded-4 mt-5 mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold text-dark m-0">Upcoming Holidays & Vacations</h4>
              <button className="btn btn-primary btn-sm rounded-pill px-3 fw-bold shadow-sm">Full Academic Calendar</button>
          </div>
          <div className="row g-4 m-0">
              <div className="col-md-3">
                  <div className="p-3 border-0 rounded-3 shadow-sm h-100" style={{ background: '#fffbeb' }}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>24 Mar</span>
                          <small className="text-muted" style={{ fontSize: '0.65rem', textTransform:'uppercase' }}>Gazetted</small>
                      </div>
                      <h6 className="mb-0 fw-bold text-dark">Holi Festival</h6>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="p-3 border-0 rounded-3 shadow-sm h-100" style={{ background: '#f0f9ff' }}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>10 Apr</span>
                          <small className="text-muted" style={{ fontSize: '0.65rem', textTransform:'uppercase' }}>Gazetted</small>
                      </div>
                      <h6 className="mb-0 fw-bold text-dark">Good Friday</h6>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="p-3 border-0 rounded-3 shadow-sm h-100" style={{ background: '#f8fafc' }}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>14 Apr</span>
                          <small className="text-muted" style={{ fontSize: '0.65rem', textTransform:'uppercase' }}>Gazetted</small>
                      </div>
                      <h6 className="mb-0 fw-bold text-dark">Ambedkar Jayanti</h6>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="p-3 border-0 rounded-3 shadow-sm h-100" style={{ background: '#f8fafc' }}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>01 May - 15 Jun</span>
                          <small className="text-muted" style={{ fontSize: '0.65rem', textTransform:'uppercase' }}>Break</small>
                      </div>
                      <h6 className="mb-0 fw-bold text-dark">Summer Vacation</h6>
                  </div>
              </div>
          </div>
      </div>

      {/* Previous Years' Attendance */}
      <div className="stat-card shadow-sm border-0 bg-white p-4 rounded-4 mt-5 mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                  <h4 className="fw-bold text-dark mb-1">Previous Years' Attendance</h4>
                  <p className="text-muted small mb-0 fw-semibold">Academic history from all enrolled classes</p>
              </div>
              <span className="fw-bold" style={{ color: '#f59e0b', fontSize: '0.85rem' }}>Class 8 - Current</span>
          </div>

          <div className="filter-tabs mb-4 px-2 py-1 shadow-sm" style={{ background: '#f1f5f9', borderRadius: '50px', display: 'inline-flex', gap: '5px' }}>
              {['Class 6', 'Class 7', 'Class 8'].map(tab => (
                  <button 
                    key={tab}
                    className={`filter-tab ${activeHistoryTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveHistoryTab(tab)}
                  >
                      {tab}
                  </button>
              ))}
          </div>

          <div className="row g-4 mb-4">
              <div className="col-md-3">
                  <div className="p-4 rounded-3 border-0 text-center" style={{ background: '#f0fdf4' }}>
                      <h2 className="fw-bold text-success mb-1">{currentClassData.present}</h2>
                      <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>PRESENT</span>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="p-4 rounded-3 border-0 text-center" style={{ background: '#fef2f2' }}>
                      <h2 className="fw-bold text-danger mb-1">{currentClassData.absent}</h2>
                      <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>ABSENT</span>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="p-4 rounded-3 border-0 text-center" style={{ background: '#fffbeb' }}>
                      <h2 className="fw-bold text-warning mb-1">{currentClassData.late}</h2>
                      <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>LATE</span>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="p-4 rounded-3 border-0 text-center" style={{ background: '#f0f9ff' }}>
                      <h2 className="fw-bold text-info mb-1" style={{ color: '#0ea5e9' }}>{currentClassData.leaves}</h2>
                      <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>LEAVES USED</span>
                  </div>
              </div>
          </div>

          <div className="p-4 border rounded-3 border-light mb-4">
              <div className="d-flex align-items-center gap-4">
                  <div className="text-center" style={{ minWidth: '120px' }}>
                      <h1 className="fw-bold text-success m-0" style={{ fontSize: '3rem', letterSpacing: '-1px' }}>{currentClassData.percent}%</h1>
                      <small className="text-muted fw-bold text-uppercase">OVERALL</small>
                  </div>
                  <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="fw-bold text-dark m-0">Academic Year 2024-2025 ({activeHistoryTab})</h6>
                          <span className={`badge bg-${currentClassData.percent > 95 ? 'success' : 'primary'}-soft text-${currentClassData.percent > 95 ? 'success' : 'primary'} rounded-pill px-3`}>{currentClassData.percent > 95 ? 'Outstanding' : 'Very Good'}</span>
                      </div>
                      <div className="progress mb-2" style={{ height: '8px', borderRadius: '10px', background: '#e2e8f0' }}>
                          <div className="progress-bar bg-success rounded-pill" style={{ width: `${currentClassData.percent}%` }}></div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted fw-bold"><i className="fa fa-chalkboard-teacher me-2"></i>Class Teacher: <strong>{currentClassData.teacher}</strong></small>
                          <small className="text-muted">Out of {currentClassData.workingDays} working days</small>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row g-5">
              <div className="col-lg-6">
                  <h6 className="fw-bold text-muted text-uppercase mb-3 d-flex align-items-center gap-2" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}><i className="fa fa-calendar-alt"></i> MONTHLY BREAKDOWN</h6>
                  <div className="table-responsive">
                    <table className="table-modern w-100">
                        <thead>
                            <tr>
                                <th>MONTH</th>
                                <th className="text-center">WORKING</th>
                                <th className="text-center">PRESENT</th>
                                <th className="text-center">LEAVES</th>
                                <th className="text-end">PERCENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentClassData.breakdown.map((row, idx) => (
                                <tr key={idx} className={row.status ? "row-special" : ""}>
                                    <td className="fw-bold">{row.m}</td>
                                    {row.status ? (
                                        <td colSpan="4" className="text-center text-muted small fw-bold text-uppercase" style={{ letterSpacing:'1px' }}>{row.status}</td>
                                    ) : (
                                        <>
                                            <td className="text-center text-muted fw-bold">{row.w}</td>
                                            <td className="text-center fw-bold text-dark">{row.p}</td>
                                            <td className="text-center text-danger fw-bold">{row.l}</td>
                                            <td className="text-end">
                                                <span className={`badge bg-${row.c}-soft text-${row.c} rounded-pill px-2`}>
                                                    {Math.round((row.p/row.w)*100)}%
                                                </span>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
              </div>
              <div className="col-lg-6">
                  <h6 className="fw-bold text-muted text-uppercase mb-4 d-flex align-items-center gap-2" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}><i className="fa fa-book"></i> SUBJECT-WISE ATTENDANCE</h6>
                  
                  {currentClassData.subjects.map((subj, idx) => (
                      <div className="mb-4" key={idx}>
                          <div className="d-flex justify-content-between text-dark fw-bold small mb-2"><span>{subj.name}</span><span>{subj.p}/{subj.t} <strong className="ms-1">{subj.pct}%</strong></span></div>
                          <div className="subject-bar"><div className={`bg-${subj.c}`} style={{ width: `${subj.pct}%` }}></div></div>
                      </div>
                  ))}
          </div>
      </div>
  </div>
      
  {/* Leave Application Modal */}
      {showLeaveModal && (
          <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}>
              <div className="stat-card" style={{ maxWidth:'500px', width:'100%', padding:'2rem' }}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 className="fw-bold mb-0">Apply for Leave</h4>
                      <button onClick={() => setShowLeaveModal(false)} style={{ background:'transparent', border:'none', fontSize:'1.5rem', outline: 'none' }}>&times;</button>
                  </div>
                  <div className="mb-3">
                      <label className="form-label small fw-bold text-muted">Leave Type</label>
                      <select className="form-select border-0 bg-light py-3 px-4 fw-bold w-100 rounded-3"><option>Sick Leave</option><option>Casual Leave</option><option>Duty Leave</option></select>
                  </div>
                  <div className="row g-3 mb-3">
                      <div className="col-6">
                        <label className="form-label small fw-bold text-muted">From</label>
                        <input type="date" className="form-control border-0 bg-light py-2 w-100 rounded-3" />
                      </div>
                      <div className="col-6">
                        <label className="form-label small fw-bold text-muted">To</label>
                        <input type="date" className="form-control border-0 bg-light py-2 w-100 rounded-3" />
                      </div>
                  </div>
                  <div className="mb-4">
                      <label className="form-label small fw-bold text-muted">Reason</label>
                      <textarea className="form-control border-0 bg-light py-3 px-4 w-100 rounded-3" rows="3" placeholder="Brief explanation..."></textarea>
                  </div>
                  <button className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow" onClick={() => { alert('Leave Application Submitted!'); setShowLeaveModal(false); }}>Submit Application</button>
              </div>
          </div>
      )}

    </div>
  );
}
