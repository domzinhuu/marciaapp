import React from 'react';
import InvoiceCard from '../../components/InvoiceCard';
import InvoiceList from '../../components/InvoiceList';
import NavBar from '../../components/NavBar';
import UserNameHeader from '../../components/UserNameHeader';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <NavBar />
      <UserNameHeader />
      <InvoiceCard />
      <InvoiceList />
    </div>
  );
};

export default Home;
