import React from "react";

import CartItem from "../components/CartItem";
import Container from "react-bootstrap/Container";

function Cart() {
    return(
        <Container style={{'padding':'0px'}}>
            <CartItem name={"Strawberries"} quantity={"x2"} price={"$2.50"}/>
            <CartItem name={"Blackberries"} quantity={"x2"} price={"$2.50"}/>
            <CartItem name={"Cherries"} quantity={"x2"} price={"$2.50"}/>
            {/*need to have total be something else --> not a cart item and need to add up total */}
            <CartItem name={"Total"} price = {"$7.50"}/>
        </Container>
    );
}

export default Cart;