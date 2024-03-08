import NavbarMain from '../Navbar/NavbarMain';
import './DashboardMain.css'; // Import your CSS file
import DashboardTop from './DashboardTop';
import DashboardContent from './DashboardContent';
import FooterMain from '../Footer/FooterMain';

const DashboardMain = () => {
  

  return (
    <>
      <NavbarMain />
      <div className='dashboard-main'>
         <DashboardTop></DashboardTop>
          <DashboardContent></DashboardContent>
      </div>
      <FooterMain></FooterMain>
    </>
  );
};

export default DashboardMain;
