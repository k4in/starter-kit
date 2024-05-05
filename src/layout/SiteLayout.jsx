import Header from '../ui/Header';
import { Outlet } from 'react-router-dom';

export default function SiteLayout() {
  return (
    <div className="h-screen text-base layout">
      <Header />
      <main className="h-full px-20 py-10 bg-neutral-100">
        <Outlet />
      </main>
    </div>
  );
}
