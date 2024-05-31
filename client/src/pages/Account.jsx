import { useContext } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';

const Account = () => {
    const { user, ready } = useContext(UserContext);
    let { subpage } = useParams();
    if(subpage === undefined){
        subpage = 'profile';
    }

async function logout(){
   await axios.get('/logout')
}

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user) {
        return <Navigate to='/login' />;
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
            <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
                <Link className={linkclasses('profile')} to='/account'>My profile</Link>
                <Link className={linkclasses('bookings')} to='/account/bookings'>My Bookings</Link>
                <Link className={linkclasses('places')} to='/account/places'>My accommodation</Link>
            </nav>
            {subpage === 'profile' && (
                <div className='text-center w-full  mx-auto'>
Logges in as{user.name} ({user.email}) <br></br>
<button className='bg-primary text-white w-1/4 py-2 px-6 rounded-full  mt-2'>Logout</button>
 </div>
               
            )}
        </div>
    );
};

export default Account;
