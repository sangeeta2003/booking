import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Perk from './Perk';
const PlacePage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addPhoto, setAddPhoto] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [description, setDecription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState('');

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


  function CopyPhoto(){
    
  }
  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
          <Link
            className="bg-primary inline-flex rounded-full px-6 py-2 text-white gap-1 "
            to={'/account/places/new'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
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
        <form>
          {preInput('Title', 'Title for your place and be confort for this')}

          <input value={title} onChange={e =>setTitle(e.target.value)} type="text" placeholder="title,for example: My " className='w-full rounded-full py-2 border border-gray-300' />
          {preInput('Address', 'Address to this place')}
          <input value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="address" className='w-full rounded-full py-2 border border-gray-300' />
          {preInput('Photos', 'more == better')}

          <div className="flex gap-2">
            <input value={photoLink} onChange={e => setPhotoLink(e.target.value)}  type="text" placeholder="Add using a link...jpg"className='w-full rounded-full py-2 border border-gray-300' />
            <button className="bg-gray-200 px-4 rounded-2xl">
              Add&nbsp;Photo
            </button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mt-4">
            <button
              className="flex justify-center gap-1
            border bg-transparent rounded-2xl p-4 text-2xl text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              Upload
            </button>
          </div>
          {preInput('Description', 'description of the places')}

          <textarea value={description} onChange={e => setDecription(e.target.value)} />
          {preInput('Perks', 'select all the perks of your places')}

          <div className="gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
           <Perk selected={perks} onChange={setPerks}/>
          </div>
          {preInput('extra Info', 'house rules,etc')}

          <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
          {preInput(
            'Check in&out times',
            'add check in & out times,rembember some time to cleaning widnoes'
          )}

          <div className="grid sm:grid-cols-3 gap-1">
            <div>
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input value={checkIn} onChange={e => setCheckIn(e.target.value)} type="text" placeholder="14:00" />
            </div>

            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input value={checkOut} onChange={e => setCheckOut(e.target.value)} type="text" placeholder='14'/>
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input value={maxGuests} onChange={e => setMaxGuests(e.target.value)} type="text" placeholder='11'/>
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
