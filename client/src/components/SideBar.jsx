import NavLinks from "./NavLinks";


export default function SideBar() {
  return (
    <div className="relative">
     <div className="absolute top-10 left-5 w-[200px] py-10  bg-gray-100 flex flex-col text-lg rounded-lg items-center">
      <NavLinks />
     </div>
    </div>
  )
}
