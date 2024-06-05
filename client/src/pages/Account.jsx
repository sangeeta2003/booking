import { useContext, useState } from 'react';
import { Link, useParams, Navigate,  } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';
import PlacePage from './PlacePage';

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
    let classes = 'py-2 px-6 inline-flex gap-1';
    if (type === subpage) {
      classes += ' bg-primary text-white rounded-full';
    }
    else{
      classes += ' bg-gray-300 text-white rounded-full'
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkclasses('profile')} to="/account">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>


          My profile
        </Link>
        <Link className={linkclasses('bookings')} to="/account/bookings">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>


          My Bookings
        </Link>
        <Link className={linkclasses('places')} to="/account/places">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>
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
     {subpage === 'places' &&(
     <PlacePage/>
     )}
    </div>
  );
};

export default Account;
