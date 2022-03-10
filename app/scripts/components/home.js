/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';

const mock = [
    {
        "_id": "001",
        "isActive": "true",
        "price": "20.00",
        "picture": "/img/products/N0CA_430.png",
        "name": "Damage Reverse Oil Conditioner",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "oil",
            "conditioner"
        ]
    },
    {
        "_id": "004",
        "isActive": "true",
        "price": "20.00",
        "picture": "/img/products/N0FP_430.png",
        "name": "Damage Reverse Oil Shampoo",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "oil",
            "shampoo"
        ]
    },
    {
        "_id": "006",
        "isActive": "true",
        "price": "38.00",
        "picture": "/img/products/N0J801_430.png",
        "name": "Damage Reverse Hair Serum",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "serum"
        ]
    },
    {
        "_id": "007",
        "isActive": "true",
        "price": "38.00",
        "picture": "/img/products/N0J901_430.png",
        "name": "Damage Reverse Restorative Hair Treatment",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "treatment"
        ]
    },
    {
        "_id": "016",
        "isActive": "false",
        "price": "25.00",
        "picture": "/img/products/N098_430.png",
        "name": "Damage Reverse Restorative Hair Treatment",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "treatment"
        ]
    },
    {
        "_id": "018",
        "isActive": "true",
        "price": "20.00",
        "picture": "/img/products/N16401_430.png",
        "name": "Damage Reverse Thickening Shampoo",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "shampoo"
        ]
    },
    {
        "_id": "019",
        "isActive": "false",
        "price": "23.00",
        "picture": "/img/products/N16501_430.png",
        "name": "Damage Reverse Thickening Conditioner",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "conditioner"
        ]
    }
];

class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    
    render() {
        return (
            <section id="home">
                <div className="content">
                    {this.props.products && this.props.products.map((product, i) => (
                        <div key={product._id}>
                            <div>{product.name}</div>
                            <img src={`img/products/${product.picture.split('/').pop()}`}/>
                            <div>{product.price}</div>
                            <div>{product.about}</div>
                            <div>{product.tags.join()}</div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;