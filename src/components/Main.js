import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { categories, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {categories.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}