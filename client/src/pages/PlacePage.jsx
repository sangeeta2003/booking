import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Perk from './Perk';
import Photos from './Photos';
import PlacesForm from './PlacesForm';

const PlacePage = () => {
  const { action } = useParams();
  
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
       <PlacesForm/>
      )}
    </div>
  );
};

export default PlacePage;
