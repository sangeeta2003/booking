import { Link,useParams } from "react-router-dom"
const PlacePage = () => {
    const {action} = useParams();
    
  return (
    <div>
        {action !== 'new' &&(
            <div className="text-center">
<Link className="bg-primary inline-flex rounded-full px-6 py-2 text-white gap-1 " to={'/account/places/new'}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

    Add new Place
</Link>
        </div>
        )}
        {action === 'new' &&(
            

           <form>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">Title for your place and be confort for this</p>
            <input type="text" placeholder="title,for example: My "/>
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="address"/>
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">more == better</p>
            <div className="flex gap-2">
                <input type="text" placeholder="Add using a link...jpg"/>
                <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;Photo</button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4">
            <button className="flex justify-center gap-1
            border bg-transparent rounded-2xl p-4 text-2xl text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>

                Upload
                </button>
            </div>
            <h1 className="text-2xl mt-4">Description</h1>
            <p className="text-gray-500 text-sm">description of the places</p>
           </form>
        )}
    </div>
  )
}

export default PlacePage
