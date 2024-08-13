import React from 'react';
import './leadModal.css';

const LeadModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Lead</h2>
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required />
          
          <label>Phone:</label>
          <input type="text" name="phone" required />
          
          <label>Company Name:</label>
          <input type="text" name="companyName" required />
          
          <label>Company Work:</label>
          <input type="text" name="companyWork" required />
          
          <div className="modal-actions">
            <button type="submit">Add Lead</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;
