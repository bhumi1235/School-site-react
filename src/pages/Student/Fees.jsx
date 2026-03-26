import React from 'react';

export default function Fees() {
  return (
    <div className="dashboard-section animation-fade-in">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <h2 className="mb-0 fw-bold"><i className="fa fa-file-invoice-dollar text-success me-3"></i>Fee Management</h2>
        </div>
        <div id="fees-container">
            {/* Current Payment Status */}
            <div className="stat-card border-top border-primary mb-4" style={{ borderTopWidth: '4px' }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div>
                        <h6 className="text-muted small text-uppercase fw-bold mb-1">Current Billing Status</h6>
                        <h3 className="text-primary mb-0 fw-bold">₹0.00</h3>
                        <div className="text-success small mt-1 fw-bold align-items-center d-flex gap-1"><i className="fa fa-check-circle"></i>All Dues Cleared</div>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-outline-primary rounded-pill px-4 shadow-sm fw-bold d-flex align-items-center gap-2"><i className="fa fa-download"></i> Download NOC</button>
                    </div>
                </div>
            </div>

            {/* Fee History Details */}
            <div className="stat-card mb-4 shadow-sm border-0" style={{ backgroundColor: '#f8fafc' }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4 pb-3 border-bottom border-light">
                    <h5 className="mb-0 fw-bold d-flex align-items-center gap-2 text-dark"><i className="fa fa-history text-primary me-2"></i>Fee Payment History</h5>
                    <span className="badge bg-primary-soft text-primary rounded-pill px-3 py-2 shadow-sm fw-bold">Academic Year 2025–2026</span>
                </div>

                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="p-4 bg-white rounded-4 border-0 shadow-sm h-100 transition-hover">
                            <span className="small text-muted fw-bold text-uppercase d-block mb-2" style={{letterSpacing:'0.5px'}}>Total Annual Fee</span>
                            <h3 className="mb-0 text-dark fw-bold">₹49,800</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4 bg-white rounded-4 border-0 shadow-sm h-100 transition-hover">
                            <span className="small text-muted fw-bold text-uppercase d-block mb-2" style={{letterSpacing:'0.5px'}}>Total Amount Paid</span>
                            <h3 className="mb-0 text-success fw-bold">₹49,800</h3>
                        </div>
                    </div>
                </div>

                <h6 className="mb-3 fw-bold text-dark text-uppercase px-2" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>Quarterly Breakdown</h6>
                <div className="list-group list-group-flush border-0 rounded-4 bg-white overflow-hidden shadow-sm">
                    {['Q4 (Jan – Mar 2026)', 'Q3 (Oct – Dec 2025)', 'Q2 (Jul – Sep 2025)', 'Q1 (Apr – Jun 2025)'].map((q, i) => (
                        <div key={i} className="list-group-item d-flex justify-content-between align-items-center p-4 border-bottom transition-hover border-light">
                            <div>
                                <h6 className="mb-2 fw-bold text-dark">{q}</h6>
                                <small className="text-muted fw-bold"><i className="fa fa-calendar-check me-2 text-success"></i>Paid on {["10 Mar 2026", "05 Oct 2025", "12 Jul 2025", "08 Apr 2025"][i]}</small>
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <div className="text-end">
                                    <h5 className="mb-1 fw-bold text-dark">₹12,450</h5>
                                    <span className="badge bg-success-soft text-success rounded-pill px-3 py-1">Paid</span>
                                </div>
                                <button className="btn btn-light text-primary rounded-circle shadow-sm transition-hover d-flex justify-content-center align-items-center" title="Download Receipt" style={{ width: '45px', height: '45px' }}><i className="fa fa-download"></i></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
