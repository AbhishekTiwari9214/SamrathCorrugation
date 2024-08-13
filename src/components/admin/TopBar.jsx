import React, { useState } from 'react';
import Modal from '../../components/admin/LeadModal'; // Import Modal
import './topBar.css';

const TopBar = (props) => {
  const {totalType ,total,pageType}=props
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLead = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newLead = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      companyName: formData.get('companyName'),
      companyWork: formData.get('companyWork'),
    };
    console.log(newLead); // Handle the new lead data (e.g., add to the leads list)
    handleCloseModal(); // Close the modal after adding the lead
  };

  return (
    <div className="top-bar">
      <div className="total-leads">
        <h3 style={{paddingRight:"10px"}}>{totalType}</h3>
        <span style={{fontSize:'15px'}}>{total}</span>
      </div>
        <h3 style={{paddingRight:"10px"}}>{pageType}</h3>
      <button className="add-lead" onClick={handleOpenModal}>
        Add Lead
      </button>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleAddLead}
      />
    </div>
  );
};

export default TopBar;
