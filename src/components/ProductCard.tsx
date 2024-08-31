
import Images from "./Images";
interface IProps {



}

const ProductCard = ({} : IProps) => {
  return (
    <div className="border rounded-md p-4 text-slate-200 flex flex-col">
      

      <Images 
        imageUrl="https://images3.alphacoders.com/133/1335169.png" 
        alt="product" 
        className="rounded-md mb-3"  />

      <h3 className="text-black">2022 car verary model h2kk</h3>
    
      <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ratione.</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-blue-500 rounded-full" />
        <span className="w-5 h-5 bg-yellow-500 rounded-full" />
        <span className="w-5 h-5 bg-red-500 rounded-full" />   
      </div>     
                

      <div className="flex items-center justify-between text-black">
        <span >$500,000</span>
     
        <Images 
        imageUrl="https://images3.alphacoders.com/133/1335169.png" 
        alt="product" 
        className="w-10 h-10 rounded-full object-bottom"  />

      </div>


      <div className="text-white flex justify-between space-x-2 mt-5">
        <button className="bg-indigo-700 p-2 w-full rounded-md">EDIT</button>
        <button className="bg-red-700 p-2 w-full rounded-md">DELETE</button>
      </div>


    </div>
    
)
}

export default ProductCard