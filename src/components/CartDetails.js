import { Component } from 'react'

const styles = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul:{
        margin: 0,
        padding:0,
    },
    product:{
        listStyleType:'none',//elimina los puntos de lista
        display: 'flex',
        justifyContent:  'space-between',
        alignItems:'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    },
}

export default class CartDetails extends Component {
    render() {
        const { cart } = this.props
        return (
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {cart.map(x =>
                        <li
                            key={x.name}
                            style={styles.product}
                        >
                            <img alt={x.name} src={x.img} width='50' height='32' />
                            {x.name}
                            <span> {x.qty}</span>
                        </li>)}
                </ul>

            </div>
        )
    }
}