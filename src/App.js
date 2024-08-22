import './index.css'

import Navbar from './components/Navbar'
import Main from './components/Main'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'


function App() {
  return (
    <div className='flex-col flex items-center justify-center w-full h-full'>
        <Navbar />
        <Main />
        <ProductPage />
        <Footer />
    </div>
  );
}

export default App;
