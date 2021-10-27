import Image from 'next/image';
import logo from '../../public/images/bookit_logo.png';

const Header = () => {
  return (
    <nav className='navbar row justify-content-center sticky-top'>
      <div className='container'>
        <div className='col-3 p-0'>
          <div className='navbar-brand'>
            <Image
              src={logo}
              alt='BookIT'
              width={145}
              height=''
            />
          </div>
        </div>

        <div className='col-3 mt-3 mt-md-0 text-center'>
          <a className='btn btn-danger px-4 text-white login-header-btn float-right'>
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;