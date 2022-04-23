import React, { Component } from 'react'

const styles={
    title:{
        marginBottom:'30px',
    }
}

export default class Title extends Component {
  render() {
    return (
      <h1 style={styles.title}>Store</h1>
    )
  }
}
