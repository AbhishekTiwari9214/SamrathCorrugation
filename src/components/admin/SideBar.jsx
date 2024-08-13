import React from 'react';
import './sideBar.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>
      <nav>
        <ul>
          <li><a href="/admin/dashboard" className='nav-link'>Main Page</a></li>
          <li><a href="/admin/review" className='nav-link'>Under Review</a></li>
          <li><a href="/admin/notConverted" className='nav-link'>Not Converted</a></li>
          <li><a href="/admin/converted" className='nav-link'>Converted</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
