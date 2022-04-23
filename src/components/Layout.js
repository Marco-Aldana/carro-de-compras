import React, { Component } from 'react'

const styles={
    layout:{
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container:{
        maxWidth: '1200px',
    }
}

export default class Layout extends Component {
    render() {

        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
