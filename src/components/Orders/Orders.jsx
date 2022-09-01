import React, { useState, useEffect } from 'react';
import { db } from "../../firebase";
import './Orders.css'
import { UseStateValue } from "../reactApi/StateProvider";
import Order from '../Order/Order'

function Orders() {
  const [{user }, dispatch] = UseStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user)
        .collection('orders')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        
    } else {
        setOrders([])
    }

  }, [user])

//   console.log("orders-->",orders)
    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (

                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders