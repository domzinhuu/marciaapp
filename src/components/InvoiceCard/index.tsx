import React from 'react';
import './styles.css';

const InvoiceCard: React.FC = () => {
  return (
    <div className="invoice-card rounded">
      <div className="part month text-center">
        <p className="font-14 light-text">Seu valor para:</p>
        <p className="font-18 text-bold light-text">ABRIL</p>
      </div>

      <div className="part bill text-center">
        <p className="font-18 text-bold light-text">R$ 1.053,00</p>
        <p className="font-14 light-text">*Valor total</p>
      </div>
    </div>
  );
};

export default InvoiceCard;
