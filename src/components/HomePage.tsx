import { Link } from 'react-router-dom';
import { useProductStore } from '../store/productStore';

export default function HomePage() {
  const products = useProductStore((state) => state.products);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Lista Produktów</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {products.map((product, index) => (
          <div
            key={`${product.name}-${index}`}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <Link
              to={`/product/${index}`}
              style={{
                textDecoration: 'none',
                color: '#0066cc',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
            >
              {product.name}
            </Link>
            <p style={{ margin: '8px 0', fontSize: '14px', color: '#666' }}>
              {product.number}
            </p>
            <p style={{ margin: '0', fontSize: '14px' }}>
              {product.description.length > 100
                ? `${product.description.substring(0, 100)}...`
                : product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}