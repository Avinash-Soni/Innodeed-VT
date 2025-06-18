import { Link } from "react-router-dom";
import { NavbarMenu } from "./navbarMenuData";


const NavbarMenuItem=()=>{
  return(
<div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            <Link to="/SignIn">
              <button className="primary-btn">Sign In</button>
            </Link>
          </ul>
        </div>

  );
}


export default NavbarMenuItem;

