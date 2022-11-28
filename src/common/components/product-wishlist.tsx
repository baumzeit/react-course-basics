import { useEffect, useState } from 'react';

const ProductWishlist = ({ listId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(listId).then(setProducts);
  }, [listId]);

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
