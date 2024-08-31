
import ProductCard from './components/ProductCard'

function App() {

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-5 p-5 gap-5 rounded-md'>
        <ProductCard />
        <ProductCard />
        <ProductCard /> 
        <ProductCard />
        <ProductCard />
        </div>
      
    </div>
  )
}

export default App
