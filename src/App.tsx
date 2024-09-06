import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/ui/Model";
import { formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";

function App() {

  const defaultProduct = {
    title: "" ,
    description: "" ,
    imageUrl: "" ,
    price: ""
  } ;


  // state
  const [isOpen, setIsOpen] = useState(false);
  const [product , setProduct] =useState<IProduct>(defaultProduct);


  // handler
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onChangeHanler = (event : ChangeEvent<HTMLInputElement>) => {

    const {name , value} = event.target ;
    setProduct({
      ...product, 
      [name]:value
    });

  };

  // rendering
  const renderProduct = () => {
    return productList.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  const renderFormInput = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}:</label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHanler} />
    </div>
  ));



  const submitHandler =(event: FormEvent<HTMLFormElement>) : void => {
      event.preventDefault(); 

      console.log(product);

  }

  const cancleHandler = () : void => {
    setProduct(defaultProduct) ;
    closeModal() ;
  }

  return (
    <main className="container mx-auto">
      <Button
        className="bg-gradient-to-r from-sky-500 to-indigo-500 "
        onClick={() => {
          openModal();
        }}
      >
        add
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-5 p-5 gap-5 rounded-md">
        {renderProduct()}
      </div>

      <Model isOpen={isOpen} closeModal={closeModal} title="Add Product">
        <div className="space-y-3">

          <form className="space-y-3" onSubmit={submitHandler}>

                {renderFormInput}

                <div className="flex items-center space-x-3">
                  <Button
                    className="bg-gradient-to-r from-sky-500 to-indigo-500 "
                  >
                    submit
                  </Button>

                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500"
                    onClick={cancleHandler}
                  >
                    cancel
                  </Button>
                </div>
          </form>
        </div>
      </Model>
    </main>
  );
}

export default App;