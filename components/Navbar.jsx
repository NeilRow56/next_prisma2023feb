import Link from "next/link";

function AppBar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Admin", link: "/admin" },
    { name: "Panel", link: "/admin/panel" },
    { name: "Login", link: "/login" },
  ];
  return (
    <div className="md:px24 flex h-12 w-full items-center justify-between bg-teal-700 px-6  text-white lg:px-72">
      <div className="">
        <h1 className="text-xl font-bold text-orange-400 md:text-2xl lg:text-3xl">
          Logo Name
        </h1>
      </div>
      <ul className="flex items-center space-x-6 md:space-y-0">
        {Links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.link}
              className=" duration-500 hover:text-orange-400 "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppBar;
