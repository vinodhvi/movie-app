import React, { useEffect, useState } from "react";
import logo from './../assets/logo.png';
import userIcon from './../assets/user.png';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

export const  navigation = [
    {
        label:"TV Shows",
        href:'tv',
        icon:<PiTelevisionFill/>
    },
    {
        label:"Movies",
        href:'movie',
        icon:<BiSolidMoviePlay/>
    }
]
export const mobileNavigation = [
    {
        label:"Home",
        href:"/",
        icon:<MdHomeFilled/>
        
    },
    ...navigation,
    {
       label:"Search",
       href:"/search",
       icon:<IoSearch/>
    }
]

const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join("")
const [searchInput, setSearchInput] = useState(removeSpace)
const navigate = useNavigate()

console.log("locationss")
// search navigation

    useEffect(()=> {
        if(searchInput) {
            navigate(`/search?q=${searchInput}`)
        }
      
    }, [searchInput])

    // form handle

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <header className="z-40 fixed top-0 w-full h-16 bg-black bg-opacity-75">
        <div className="container mx-auto px-3 flex items-center h-full">
            <Link to={"/"}>
                <img src={logo} alt="logo" width={120}/>
            </Link>
            <nav className="hidden lg:flex items-center gap-2 ml-5">
                {
                    navigation.map((menu, index)=>{
                        return (
                            <div>
                                <NavLink key={menu.label} to={menu.href} className={({isActive}) =>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                    { menu.label }
                                </NavLink>
                            </div>
                        )
                    } )
                }
                
            </nav>
            <div className="ml-auto flex items-center gap-4">
                <div>
                   <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                   <input type="text"
                   placeholder="Search Here ..."
                   className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
                   onChange={(e) => setSearchInput(e.target.value)}
                   value={searchInput}
                   />
                   <button className="text-xl text-white">
                   <IoSearch/>
                   </button>
                   </form>
                </div>
               
                <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                    <img src={userIcon} width='w-full h-full' alt="user"/>
                </div>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
