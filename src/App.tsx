
import ProductCard from './components/ProductCard'
import { productList } from './data'

function App() {

  // rendering
  const renderProduct = () => {

    return productList.map(product => <ProductCard key={product.id} product = {product} />)

  }

  return (
    <main className='container mx-auto'>
    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-5 p-5 gap-5 rounded-md'>
       
        {renderProduct()}
        </div>
      
    </main>
  )
}

export default App
