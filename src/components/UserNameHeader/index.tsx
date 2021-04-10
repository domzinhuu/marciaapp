import React from 'react';

import './styles.css';

const UserNameHeader: React.FC = () => {
  return (
    <div className="user-name-header rounded d-padding">
      <p className="font-12 primary-text">Bem vindo(a)</p>
      <span className="font-16">Ingrid Silva Azevedo</span>
    </div>
  );
};

export default UserNameHeader;
