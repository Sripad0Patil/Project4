import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmployeeAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // For demo, just redirect on any input
    if (!form.email || !form.password || (!isLogin && !form.name)) {
      setError('Please fill all fields');
      return;
    }
    setError('');
    navigate('/employee-dashboard');
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #0001', padding: 32, minWidth: 340 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#2563eb', marginBottom: 24 }}>{isLogin ? 'Employee Login' : 'Employee Sign Up'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
          />
          {error && <div style={{ color: '#ef4444', fontWeight: 500 }}>{error}</div>}
          <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, padding: 12, fontWeight: 600, fontSize: 16 }}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <button onClick={() => setIsLogin(l => !l)} style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontWeight: 500 }}>
            {isLogin ? 'New employee? Sign Up' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
} 