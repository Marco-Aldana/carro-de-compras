import React, { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'




export default class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/products/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/products/lechuga.jpg' },
    ],
    cart: [],
    isCartAvailable: false,
  }

  addToCart = (product) => {
    const { cart } = this.state
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map(x =>
        x.name === product.name
          ? ({ ...x, qty: x.qty + 1 })
          : x
      )
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        qty: 1,
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length){
      return
    }
    this.setState({ isCartAvailable: !this.state.isCartAvailable })
  }

  render() {
    const { isCartAvailable } = this.state
    return (
      <div>
        <Navbar
          isCartAvailable={isCartAvailable}
          showCart={this.showCart}
          cart={this.state.cart}
        />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}



