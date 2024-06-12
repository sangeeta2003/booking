import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Perk from './Perk';
import Photos from './Photos';

const PlacePage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addPhoto, setAddPhoto] = useState([]);

  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState('');
  const[redirectToPlacesList,setRedirectToPlacesList] = useState(false);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(e) {
    e.preventDefault();

    
  await axios.post('/places',{
      title,
      address,
      addPhoto,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,

    });
    setRedirectToPlacesList(true)
  }

  if(redirectToPlacesList && !action){
    return <Navigate to={'/account/places'}/>
  }

  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
          <Link
            className="bg-primary inline-flex rounded-full px-6 py-2 text-white gap-1"
            to={'/account/places/new'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new Place
          </Link>
        </div>
      )}
      {action === 'new' && (
        <form onSubmit={addNewPlace}>
          {preInput('Title', 'Title for your place and be comfort for this')}
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Title, for example: My cozy apartment"
            className="w-full rounded-full py-2 border border-gray-300"
          />
          {preInput('Address', 'Address to this place')}
          <input
            value={address}
            onChange={e => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
            className="w-full rounded-full py-2 border border-gray-300"
          />
          {preInput('Photos', 'More = better')}
          <Photos addPhoto={addPhoto} onChange={setAddPhoto} />

          {preInput('Description', 'Description of the place')}
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {preInput('Perks', 'Select all the perks of your place')}
          <div className="gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
            <Perk selected={perks} onChange={setPerks} />
          </div>
          {preInput('Extra Info', 'House rules, etc.')}
          <textarea
            value={extraInfo}
            onChange={e => setExtraInfo(e.target.value)}
          />
          {preInput(
            'Check-in & out times',
            'Add check-in & out times, remember to allow some time for cleaning'
          )}
          <div className="grid sm:grid-cols-3 gap-1">
            <div>
              <h3 className="mt-2 -mb-1">Check-in time</h3>
              <input
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                type="text"
                placeholder="14:00"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check-out time</h3>
              <input
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                type="text"
                placeholder="11:00"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input
                value={maxGuests}
                onChange={e => setMaxGuests(e.target.value)}
                type="text"
                placeholder="4"
              />
            </div>
          </div>
          <div>
            <button className="bg-primary my-4 w-full px-6 py-2 rounded-full">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PlacePage;
