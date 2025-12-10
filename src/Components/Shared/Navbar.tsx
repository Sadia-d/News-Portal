import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <div>
            <header className=" shadow-md ">
                <nav className="max-w-[1210px] mx-auto flex  justify-between items-center px-4 md:px-8 " >
                    {/* logo  */}

                    <div className="text-xl font-bold">
                        <Link href='/' >Daily news</Link>
                    </div>
                    {/* desktop content */}

            <NavigationMenu>
               <NavigationMenuList>
                   <NavigationMenuItem>
                 <NavigationMenuLink href="/news" >News</NavigationMenuLink>
                       </NavigationMenuItem>

                            {/* Services Dropdown */}    <NavigationMenuItem>
                               <NavigationMenuLink href="/services" >
                          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                         <NavigationMenuContent>
                        <ul>
                           <li>
                        <NavigationMenuLink href="/services/web">Web development</NavigationMenuLink>
                          </li>
                            <li>
                                     <NavigationMenuLink href="/services/apps">Mobile apps</NavigationMenuLink>
                            </li>       
                             <li>
                                <NavigationMenuLink href="/services/seo">SEO</NavigationMenuLink>
                             </li>
                                      </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                     <NavigationMenuItem>
                 <NavigationMenuLink href="/about" >About</NavigationMenuLink>
                       </NavigationMenuItem>
                     <NavigationMenuItem>
                 <NavigationMenuLink href="/contact" >Contact</NavigationMenuLink>
                       </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* button and dark mode light mode */}

                    <div className="hidden md:flex gap-3">
                        <div className="flex items-center gap-2">
                            <h2>Dark mode</h2>
                            <Switch></Switch>
                        </div>
                        <Button variant="default">Login</Button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;