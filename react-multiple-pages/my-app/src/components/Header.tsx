import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

// type Props = {
//   onNavigate: (page: string) => void;
// };
export function Header() {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4">
            <Link to="/" className="text-white">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      {/* Page content goes here */}
    </div>
  );
}

// onClick={() => onNavigate('about')}
// onClick={() => onNavigate('dashboard')}
