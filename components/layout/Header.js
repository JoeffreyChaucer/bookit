import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/bookit_logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadedUser } from '../../redux/actions/userActions';
import { signOut } from 'next-auth/client';

const Header = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.loadedUser);

  const logoutHandle = () => {
    signOut();
  };

  useEffect(() => {
    dispatch(loadedUser());
  }, [dispatch]);

  return (
    <nav className='navbar row justify-content-center sticky-top'>
      <div className='container'>
        <div className='col-3 p-0'>
          <div className='navbar-brand' style={{ cursor: 'pointer' }}>
            <Link href='/'>
              <a>
                <Image
                  src={logo}
                  alt='BookIT'
                  width={145}
                  height={43}
                  layout='fixed'
                />
              </a>
            </Link>
          </div>
        </div>

        <div className='col-3 mt-3 mt-md-0 text-center'>
          {user ? (
            <div className='ml-4 dropdown d-line '>
              <a
                className='btn dropdown-toggle mr-4 d-flex align-items-center'
                id='dropDownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <figure
                  className='avatar avatar-nav '
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className='rounded-circle'
                    layout='fixed'
                    height={35}
                    width={35}
                  />
                </figure>
                <span>{user && user.name}</span>
              </a>

              <div
                className='dropdown-menu'
                aria-labelledby='dropDownMenuButton'
              >
                {user.role === 'admin' && (
                  <>
                    <Link href='/admin/rooms'>
                      <a className='dropdown-item'>Rooms</a>
                    </Link>
                    <Link href='/admin/bookings'>
                      <a className='dropdown-item'>Bookings</a>
                    </Link>
                    <Link href='/admin/users'>
                      <a className='dropdown-item'>Users</a>
                    </Link>
                    <Link href='/admin/reviews'>
                      <a className='dropdown-item'>Reviews</a>
                    </Link>
                    <hr />
                  </>
                )}
                <Link href='/bookings/me'>
                  <a className='dropdown-item'>My Bookings</a>
                </Link>
                <Link href='/me/update'>
                  <a className='dropdown-item'>Profile</a>
                </Link>
                <Link href='/'>
                  <a
                    className='dropdown-item text-danger'
                    onClick={logoutHandle}
                  >
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href='/login'>
                <a className='btn btn-danger px-4 text-white login-header-btn float-right'>
                  Login
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
