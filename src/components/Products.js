import ProductItem from "./ProductItem";
import classes from '../css/Products.module.css';

const PRODUCTS = [
    {
        id: 'p1',
        price: 200,
        title: 'PC Monitor',
        description: 'This is amazing monitor for Gamers!',
    },
    {
        id: 'p2',
        price: 6,
        title: 'Book',
        description: 'This is very interesting Book!',
    },
    {
        id: 'p3',
        price: 25,
        title: 'Bookshelf',
        description: 'This is very nice looking Bookshelf!',
    }
];

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your products</h2>
            <ul>
                {PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    )
};

export default Products;