
import { useState } from 'react'
import ProductCard from './components/ProductCard'
import Model from './components/ui/Model'
import { productList } from './data'
import Button from './components/ui/Button'

function App() {

  // state
    const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }





  // rendering
  const renderProduct = () => {

    return productList.map(product => <ProductCard key={product.id} product = {product} />)

  }

  return (
    <main className='container mx-auto'>

            <Button className="bg-gradient-to-r from-sky-500 to-indigo-500 "
              onClick={()=> {
                openModal() ;
              }}>
                add
              </Button>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-5 p-5 gap-5 rounded-md'>
       
        {renderProduct()}
        </div>

        <Model isOpen={isOpen} closeModal={closeModal} title='Add Product'  > 
          <div className='flex items-center space-x-3'>
          <Button className="bg-gradient-to-r from-sky-500 to-indigo-500 "
            onClick={()=> {
              
            }}>
              submit
            </Button>

            <Button className="bg-gradient-to-r from-purple-500 to-pink-500"
            onClick={()=> {
              closeModal() ;
            }}>
              cancel
            </Button>

          </div>
        </Model>
          
        
      
    </main>
  )
}

export default App
