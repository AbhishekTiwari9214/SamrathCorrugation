import React from 'react';
import Sidebar from '../../components/admin/SideBar';
import TopBar from '../../components/admin/TopBar';
import LeadsList from '../../components/admin/List';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="main-content">
        <TopBar 
         totalType='Total Leads'
         total='150'
         pageType='Leads'
        />
        <table className="leads-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Company Name</th>
              <th>Representative</th>
              <th>Phone</th>
              <th>Business Work</th>
              <th>Action</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <LeadsList  
              sno={1}
              companyName='ABC Corp'
              representator='John Doe'
              phone='(123) 456-7890'
              companyWork='Software Development'
            />
            {/* Add more <LeadsList /> components here for other entries */}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
