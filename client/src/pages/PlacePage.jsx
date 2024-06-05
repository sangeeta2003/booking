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
            

           <form className="flex flex-col ">
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">Title for your place and be confort for this</p>
            <input type="text" placeholder="title,for example: My "/>
            <h2 className="text-2xl">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="address"/>
            <h2 className="text-2xl">Photos</h2>
            <p className="text-gray-500 text-sm">Title for your place and be confort for this</p>
           </form>
        )}
    </div>
  )
}

export default PlacePage
