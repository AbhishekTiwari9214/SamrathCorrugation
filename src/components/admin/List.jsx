import React, { useState } from 'react';
import './list.css';

const List = (props) => {
  const { sno, companyName, representator, phone, companyWork } = props;

  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (type) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form data based on modalType
    handleCloseModal();
  };

  return (
    <>
      <tr className="leads-list">
        <td>{sno}</td>
        <td>{companyName}</td>
        <td>{representator}</td>
        <td>{phone}</td>
        <td>{companyWork}</td>
        <td>
          <button className="convert-btn" onClick={() => handleOpenModal('converted')}>Converted</button>
          <button className="not-convert-btn" onClick={() => handleOpenModal('notConverted')}>Not Converted</button>
          <button className="follow-up-btn" onClick={() => handleOpenModal('followUp')}>Follow Up</button>
        </td>
        <td>
          <span className="view-icon">🔍</span>
        </td>
      </tr>

      {modalType && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              {modalType === 'converted' && (
                <>
                  <h2>Converted</h2>
                  <label>
                    Number of Boxes:
                    <input type="number" name="boxes" required />
                  </label>
                  <label>
                    Price:
                    <input type="number" name="price" required />
                  </label>
                  <label>
                    Delivery Date:
                    <input type="date" name="deliveryDate" required />
                  </label>
                  <label>
                    Total Amount:
                    <input type="number" name="totalAmount" required />
                  </label>
                </>
              )}

              {modalType === 'notConverted' && (
                <>
                  <h2>Not Converted</h2>
                  <label>
                    Reason:
                    <textarea name="reason" required></textarea>
                  </label>
                  <label>
                    Follow Up Date:
                    <input type="date" name="followUpDate" required />
                  </label>
                </>
              )}

              {modalType === 'followUp' && (
                <>
                  <h2>Follow Up</h2>
                  <label>
                    Follow Up Date:
                    <input type="date" name="followUpDate" required />
                  </label>
                </>
              )}

              <div className="modal-actions">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCloseModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
