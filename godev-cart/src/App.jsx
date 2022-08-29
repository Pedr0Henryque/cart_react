import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/cart'

import { useState } from 'react'

function App() {
  const [cart, setCart] = useState()

  useEffect(() => {
    commerce.cart.retrieve().then(res => {
      setCart(res)
    })
  }, [])

  const addToCart = (productId, variantInfo) => {
    if (variantInfo) {
      commerce.cart.add(productId, 1, variantInfo).then(res => {
        setCart(res.cart)
      })
    } else {
      window.alert('Please Select a Shirt Size')
    }
  }

  return (
    <>
      <div className="App">
        <Nav cart={cart} emptyCart={emptyCart} />
        <Grid centered stackable padded relaxed>
          <Grid.Column className="left-column" width={5}>
            <LeftPanel />
          </Grid.Column>
          <Grid.Column width={9}>
            <ProductContainer addToCart={addToCart} />
          </Grid.Column>
        </Grid>
        <Footer />
      </div>
      ;
      <Navbar />
      <Footer />
      <Cart />
    </>
  )
}

export default App
