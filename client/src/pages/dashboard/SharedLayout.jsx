import { Link, Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import MobileSideBar from "../../components/MobileSideBar";

export default function SharedLayout() {
  return (
    <div>
      <Navbar />
      <main className="flex gap-10">
        <>
          <div className="hidden md:block w-1/5 h-screen sticky top-28">
            <SideBar />
          </div>
          <MobileSideBar />
        </>
        <div className="w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

{
  /* <nav>
<Link to={'all-jobs'}>All jobs</Link>
<Link to={'add-job'}>Add job</Link>
<Link to={'profile'}>profile</Link>
<Link to={'/'}>Stats</Link>
</nav>
<Outlet /> */
}
