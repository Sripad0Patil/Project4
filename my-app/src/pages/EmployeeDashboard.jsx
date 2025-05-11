import React from 'react';
import jsPDF from 'jspdf';

// Dummy applications data
const applications = [
  { name: 'Alice Johnson', email: 'alice@email.com', phone: '1234567890', accountType: 'Savings' },
  { name: 'Bob Smith', email: 'bob@email.com', phone: '9876543210', accountType: 'Current' },
  { name: 'Charlie Brown', email: 'charlie@email.com', phone: '5551234567', accountType: 'Fixed Deposit' },
];

function downloadPDF(app, index) {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Application Details', 14, 18);
  doc.setFontSize(14);
  doc.text(`Serial No: ${index + 1}`, 14, 32);
  doc.text(`Name: ${app.name}`, 14, 42);
  doc.text(`Email: ${app.email}`, 14, 52);
  doc.text(`Phone: ${app.phone}`, 14, 62);
  doc.text(`Account Type: ${app.accountType}`, 14, 72);
  doc.save(`application_${index + 1}.pdf`);
}

export default function EmployeeDashboard() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 16px', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #0001' }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, color: '#2563eb', marginBottom: 32 }}>Applied Applications</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 17 }}>
        <thead>
          <tr style={{ background: '#f1f5f9' }}>
            <th style={{ padding: 12, borderBottom: '2px solid #e5e7eb' }}>Serial No.</th>
            <th style={{ padding: 12, borderBottom: '2px solid #e5e7eb' }}>Name</th>
            <th style={{ padding: 12, borderBottom: '2px solid #e5e7eb' }}>Email</th>
            <th style={{ padding: 12, borderBottom: '2px solid #e5e7eb' }}>Phone</th>
            <th style={{ padding: 12, borderBottom: '2px solid #e5e7eb' }}>Account Type</th>
            <th style={{ padding: 12, borderBottom: '2px solid #e5e7eb' }}>Download</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: 10, textAlign: 'center' }}>{idx + 1}</td>
              <td style={{ padding: 10 }}>{app.name}</td>
              <td style={{ padding: 10 }}>{app.email}</td>
              <td style={{ padding: 10 }}>{app.phone}</td>
              <td style={{ padding: 10 }}>{app.accountType}</td>
              <td style={{ padding: 10 }}>
                <button onClick={() => downloadPDF(app, idx)} style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, cursor: 'pointer' }}>
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 