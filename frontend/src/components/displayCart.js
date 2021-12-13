import React from 'react'

export default function displayCart(probs) {
    return (
        <div>
            {probs.map(pro=>{
                return(
                    <p> {pro.itemName} {pro.price}</p>

                )
                
            })}
        </div>
    )
}

