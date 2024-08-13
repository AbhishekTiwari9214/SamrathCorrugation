import React from 'react';
import './list.css';

const List = (props) => {
  const { sno, companyName, representator, phone, companyWork } = props;
  return (
    <tr className="leads-list">
      <td>{sno}</td>
      <td>{companyName}</td>
      <td>{representator}</td>
      <td>{phone}</td>
      <td>{companyWork}</td>
      <td>
        <button className="convert-btn">Converted</button>
        <button className="not-convert-btn">Not Converted</button>
      </td>
    </tr>
  );
};

export default List;
