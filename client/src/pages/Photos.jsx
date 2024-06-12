import axios from 'axios';
import { useState } from 'react';
const Photos = ({addPhoto,onChange}) => {
    const [photoLink, setPhotoLink] = useState('');
  async function CopyPhoto(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/upload-by-link',
        { link: photoLink }
      );
      const filename = response.data;
      onChange(prev => [...prev, filename]);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
    setPhotoLink('');
  }
  async function UploadPhoto(e) {
    const files = e.target.value;
    const data = new FormData();

    for(let i = 0;i<files.length;i++){
      data.append('photos',files[i]);
    }
   
    await axios
      .post('/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(response => {
        const { data: filenames } = response;
        onChange(prev => {
          return [...prev, ...filenames];
        });
        console.log(data);
      });
  }
  return (
    <>
        <div className="flex gap-2">
            <input
              value={photoLink}
              onChange={e => setPhotoLink(e.target.value)}
              type="text"
              placeholder="Add using a link...jpg"
              className="w-full rounded-full py-2 border border-gray-300"
            />
            <button
              onClick={CopyPhoto}
              className="bg-gray-200 px-4 rounded-2xl"
            >
              Add&nbsp;Photo
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mt-4 gap-2">
            {addPhoto.length > 0 &&
              addPhoto.map((link, index) => (
                <img
                  src={'http://localhost:4000/uploads/' + link}
                  key={index}
                  alt="Uploaded"
                  className="rounded-2xl"
                />
              ))}
            <label className=" h-32 flex gap-1 justify-center border rounded-2xl items-center border-gray-300 ">
              <input type="file" multiple className="hidden" onChange={UploadPhoto} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
            </label>
          </div>
    </>
  )
}

export default Photos