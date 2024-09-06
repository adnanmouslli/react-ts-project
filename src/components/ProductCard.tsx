
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Images from "./Images";
import Button from "./ui/Button";
interface IProps {

  product : IProduct


}

const ProductCard = ({product} : IProps) => {

  const {title , description , imageUrl} = product ;
  return (
    <div className="border rounded-md p-4 text-slate-200 flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105">
      <Images
        imageUrl={imageUrl}
        alt="product"
        className="rounded-md mb-3 transform transition-transform duration-300 ease-in-out hover:scale-105"
      />

      <h3 className="text-black font-bold">{title}</h3>

      <p className="text-black">{txtSlicer(description, 60)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-blue-500 rounded-full" />
        <span className="w-5 h-5 bg-yellow-500 rounded-full" />
        <span className="w-5 h-5 bg-red-500 rounded-full" />
      </div>

      <div className="flex items-center justify-between text-black">
        <span>$500,000</span>

        <Images
          imageUrl="https://images3.alphacoders.com/133/1335169.png"
          alt="product"
          className="w-10 h-10 rounded-full object-bottom transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="text-white flex justify-between space-x-2 mt-5">
        <Button
          className="bg-gradient-to-r from-sky-500 to-indigo-500 "
          onClick={() => {
            console.log("hello world");
          }}
        >
          EDIT
        </Button>

        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 ">
          DELETE
        </Button>
        <Button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          DELETE
        </Button>
      </div>
    </div>
  );
}

export default ProductCard