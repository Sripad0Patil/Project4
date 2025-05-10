import React from 'react';
import bankLogo from '../assets/bank.png';

const Logo = ({ className = '' }) => {
  return (
    <img
      src={bankLogo}
      alt="Bank Logo"
      className={className}
      width={40}
      height={40}
      style={{ width: 40, height: 40, borderRadius: '8px', objectFit: 'cover', background: '#fff' }}
    />
  );
};

export default Logo; 