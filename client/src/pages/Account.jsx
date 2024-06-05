import { useContext, useState } from 'react';
import { Link, useParams, Navigate, redirect } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';

const Account = () => {
  const { user, ready ,setUser} = useContext(UserContext);
  const[direct,setDirect] = useState(null)
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
    
  }

  async function logout() {
    await axios.post('/logout');
    setDirect('/')
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !direct) {
    return <Navigate to="/login" />;
  }

  function linkclasses(type = null) {
    let classes = 'py-2 px-6';
    if (type === subpage) {
      classes += ' bg-primary text-white rounded-full';
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkclasses('profile')} to="/account">
          My profile
        </Link>
        <Link className={linkclasses('bookings')} to="/account/bookings">
          My Bookings
        </Link>
        <Link className={linkclasses('places')} to="/account/places">
          My accommodation
        </Link>
      </nav>
      {subpage === 'profile' && (
        <div className="text-center w-full  mx-auto">
          Logges in as {user.name} ({user.email}) <br></br>
          <button onClick={logout}
          className="bg-primary text-white w-1/4 py-2 px-6 rounded-full  mt-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
