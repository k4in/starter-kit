import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-10 px-20 border-b bg-neutral-200 border-b-neutral-800">
      <NavLink to={'/'} className={`hover:text-indigo-600 cursor-pointer transition-colors`}>
        Home
      </NavLink>
    </header>
  );
}
