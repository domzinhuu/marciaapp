import React from 'react';

import './styles.css';

const InvoiceList: React.FC = () => {
  return (
    <div className="invoice-list rounded">
      <div className="invoice-list-header">
        <p className="font-16 light-text">Faturas</p>
      </div>

      <div className="invoice-list-body">
        <div className="invoice-list-item">
          <img
            className="invoice-list-icon"
            src="https://lh3.googleusercontent.com/proxy/GO_Yqwm-FqZqQISK6yDZal4a2hvIhulR8Sjt4shFujwBFpKRODj1n_QkyotpcVZtBx84iMX_jUOn-1ZvYu1iuzTlz1eHUBbfCiZatFnXxzJcl-0"
            alt="list-icon"
          />
          <p className="font-14 text-bold">Credicard Zero C 7656</p>
          <span className="font-12 ">Pagamento: dia 05</span>
          <span className="font-14 text-bold">R$ 270,00</span>
        </div>

        <div className="invoice-list-item">
          <img
            className="invoice-list-icon"
            src="https://lh3.googleusercontent.com/proxy/GO_Yqwm-FqZqQISK6yDZal4a2hvIhulR8Sjt4shFujwBFpKRODj1n_QkyotpcVZtBx84iMX_jUOn-1ZvYu1iuzTlz1eHUBbfCiZatFnXxzJcl-0"
            alt="list-icon"
          />
          <p className="font-14 text-bold">Credicard Zero C 7656</p>
          <span className="font-12 ">Pagamento: dia 05</span>
          <span className="font-14 text-bold">R$ 270,00</span>
        </div>

        <div className="invoice-list-item">
          <img
            className="invoice-list-icon"
            src="https://lh3.googleusercontent.com/proxy/GO_Yqwm-FqZqQISK6yDZal4a2hvIhulR8Sjt4shFujwBFpKRODj1n_QkyotpcVZtBx84iMX_jUOn-1ZvYu1iuzTlz1eHUBbfCiZatFnXxzJcl-0"
            alt="list-icon"
          />
          <p className="font-14 text-bold">Credicard Zero C 7656</p>
          <span className="font-12 ">Pagamento: dia 05</span>
          <span className="font-14 text-bold">R$ 270,00</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
