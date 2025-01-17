import { FaShoppingCart } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from './useCart';

export function Header() {
  const { cartItems } = useCart(); // access cartItems from CartContext and destructure

  return (
    <div>
      <nav className="flex px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4">
            <Link to="/" className="text-white">
              Catalog
            </Link>
          </li>
        </ul>
        <div className="flex-grow items-center">
          <ul>
            <li className="relative py-2 px-4">
              <FaShoppingCart color="white" size="20" className="inline" />
              <span className="absolute top-1 left-8 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartItems.length}
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
// update the number of items in cart with the length of the cartItems array
