import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../assets/images/brand-logo.png"
import { CloseIcon, MenuIcon } from "./Icons/LogoIcons";

function NavLinks({ className }) {
  const themeUrl = ["themeone", "themetwo", "themethree"];
  return (
    <>
      <Link
        className={className}
        to={`/${themeUrl[parseInt(localStorage.getItem("theme")) - 1]}`}
      >
        {" "}
        Home
      </Link>
      <Link
        className={className}
        to={`/${themeUrl[parseInt(localStorage.getItem("theme")) - 1]}/about`}
      >
        {" "}
        About
      </Link>
      <Link
        className={className}
        to={`/${themeUrl[parseInt(localStorage.getItem("theme")) - 1]}/contact`}
      >
        {" "}
        Contact
      </Link>
    </>
  );
}
  

function Header() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const togglemenu = () => {
    setIsToggled((prev) => !prev);
  };

  // navigate function gets the path and navigae to that path
  const navigateButton = ({ theme, path }) => {
    togglemenu();
    localStorage.setItem("theme", theme);
    navigate(path);
  };

  // function return jsx button to switch theme
  function switchTheme() {
    return (
      <>
        <button className="relative cursor-pointer " onClick={togglemenu}>
          <span className={` hover:px-6 p-[10px] lg:p-5 font-bold text-sm rounded-2xl duration-500 ease-in-out 
            ${isToggled ? "opacity-0" : " opacity-100"} 
            ${activeTheme === 1? "bg-[#ffdba4] text-black": "text-black bg-gradient-to-r from-[#FFF2DF] to-[#F19C6C]" }
          `}>
            Switch Theme
          </span>
          <div className={`coverScreen ${isToggled ? "open" : ""}`}></div>
        </button>
      </>
    );
  }

  // chnage state of scrolled useState every time page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // get the theme form the localstorage
  useEffect(() => {
    setActiveTheme(parseInt(localStorage.getItem("theme")));
  }, [isToggled]);

  return (
    <>
      <header className={`
          fixed top-0 left-0 w-full z-50 transition-all mx-[auto]  duration-500 ease-in-out p-4 md:p-6 md:top-4 md:left-1/2 md:-translate-x-1/2 md:rounded-full md:py-0 container border backdrop-blur 
          ${activeTheme === 1
            ? "bg-[#ffdba485] border-[#ffdba485]"
            : "bg-[#03030300] border-[#fff]"
          } ${isScrolled
            ? "  md:w-[80%]  backdrop-blur "
            : "bg-transparent  md:w-[100%] "
          }`}
      >
        <div className="container mx-auto flex items-center justify-between flex-wrap">

          <div className="flex items-center space-x-2 text-2xl font-bold">
            <img width="50" className="w-[50px] lg:w-[70px]" src={brandLogo}/>
          </div>
          
          <el-popover-group className="hidden lg:flex lg:gap-x-12">
            <NavLinks className={` ${activeTheme === 1? " text-gray-900" : activeTheme === 2 ? "text-white" : "" }`} />
          </el-popover-group>
          
          <div className="justify-end lg:justify-center ml-[auto] lg:ml-0 mr-[15px] items-center">
            {switchTheme()}
          </div>

          <div className="flex lg:hidden">
            <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <MenuIcon color={`${activeTheme === 1? "#000000" : activeTheme === 2? "#ffffff" : "#000000"}`}/>
            </button>
          </div>
          
        </div>

        <el-dialog>
          <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
            <div tabIndex="0" className="fixed inset-0 focus:outline-none">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-2xl font-bold">
                     <img width="50" src={brandLogo}/>
                  </div>
                  <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <CloseIcon/>
                  </button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <NavLinks className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 
                          ${activeTheme === 1? " text-gray-900" : activeTheme === 2 ? "text-white" : ""}`}/>
                    </div>
                  </div>
                </div>

              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </header>

      {isToggled && (
        <div className="nav theme-switch" style={{ display: "flex" }}>
          <ul>
            <li onClick={() => navigateButton({ theme: 1, path: "/themeone" })}>
              Theme 1
            </li>
            <li onClick={() => navigateButton({ theme: 2, path: "/themetwo" })}>
              Theme 2
            </li>
            <li
              onClick={() => navigateButton({ theme: 3, path: "/themethree" })}
            >
              Theme 3
            </li>
          </ul>
          <div id="nav-close" onClick={togglemenu}>
            X
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
