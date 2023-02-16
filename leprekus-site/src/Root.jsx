import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
export default function Root() {
  // color bg-[#190e2f]
 
  return (
    <main className='min-h-full max-w-7xl mx-auto'>
      <Navbar/>
      <div className='md:relative top-20 p-5 m-auto'>
        <Outlet />
        <p className='cal'></p>
      </div>
    </main>
  );
}
