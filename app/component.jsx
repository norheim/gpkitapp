import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <ShoppingList name="technerd"/>,
    document.getElementById('react')
);