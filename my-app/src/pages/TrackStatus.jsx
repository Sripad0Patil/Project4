import React from 'react'

function TrackStatus() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '70vh', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '40px 0' }}>
      {/* Heading Section */}
      <h1 style={{
        fontSize: 32,
        fontWeight: 800,
        marginBottom: 36,
        background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: 1,
        textAlign: 'center',
        textShadow: '0 2px 8px rgba(80,80,180,0.08)'
      }}>
        Track Status / Process
      </h1>
      <div style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)', border: '2px solid #bfdbfe', borderRadius: 18, padding: 40, minWidth: 340, background: 'rgba(255,255,255,0.95)', transition: 'box-shadow 0.3s', position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 36 }}>
          {/* Step 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <span style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '2.5px solid #4ade80',
              background: 'linear-gradient(135deg, #bbf7d0 0%, #6ee7b7 100%)',
              color: '#22c55e',
              fontWeight: 'bold',
              fontSize: 22,
              boxShadow: '0 2px 8px #bbf7d055'
            }}>
              ✓
            </span>
            <span style={{ fontSize: 20, fontWeight: 600, color: '#2563eb', letterSpacing: 0.5 }}>Details submitted</span>
          </div>
          {/* Arrow */}
          <div style={{ marginLeft: 18, animation: 'bounce 1.2s infinite', fontSize: 32, color: '#60a5fa', fontWeight: 700 }}>
            ↓
          </div>
          {/* Step 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <span style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '2.5px solid #60a5fa',
              background: '#f0f9ff',
              color: '#60a5fa',
              fontWeight: 'bold',
              fontSize: 22,
              boxShadow: '0 2px 8px #60a5fa33'
            }}>
              {/* Empty circle */}
            </span>
            <span style={{ fontSize: 20, fontWeight: 600, color: '#2563eb', letterSpacing: 0.5 }}>Processing</span>
          </div>
          {/* Arrow */}
          <div style={{ marginLeft: 18, animation: 'bounce 1.2s infinite', fontSize: 32, color: '#60a5fa', fontWeight: 700 }}>
            ↓
          </div>
          {/* Step 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <span style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '2.5px solid #60a5fa',
              background: '#f0f9ff',
              color: '#60a5fa',
              fontWeight: 'bold',
              fontSize: 22,
              boxShadow: '0 2px 8px #60a5fa33'
            }}>
              {/* Empty circle */}
            </span>
            <span style={{ fontSize: 20, fontWeight: 600, color: '#2563eb', letterSpacing: 0.5 }}>Account Opened</span>
          </div>
        </div>
      </div>
      {/* Keyframes for bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  )
}

export default TrackStatus
