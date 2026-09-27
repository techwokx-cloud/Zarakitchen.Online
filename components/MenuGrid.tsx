import { MenuItem } from '../data/menu-data';

interface MenuGridProps {
  items: MenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  return (
    <div className="menu-grid">
      {items.map((item) => (
        <div key={item.id} className="menu-card">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-sm mb-2">{item.category}</div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
          <div className="menu-card-content">
            <h3 className="menu-card-title">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="menu-card-price">₵{item.price.toFixed(2)}</span>
              <a
                href={`https://wa.me/233591599629?text=I'd like to order ${item.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs py-1 px-2"
              >
                Order
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
