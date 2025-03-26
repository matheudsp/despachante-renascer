import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

import {
  TwitterIcon,
  WhatsappIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,

} from "@/components/icons";

export const Navbar = () => {
  

  return (
    <HeroUINavbar maxWidth="xl" className="bg-[#171717] py-2" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo color="background"/>
            <p className="font-bold text-inherit text-white">LOGO</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                 
                  "text-background hover:text-primary/75 data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="primary"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
         
          <Link isExternal aria-label="Github" href={siteConfig.links.whatsapp}>
            <WhatsappIcon className="text-background" />
          </Link>
         
        </NavbarItem>
      
        
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.whatsapp}>
          <WhatsappIcon className="text-default-500" />
        </Link>
        
        <NavbarMenuToggle className="text-white"/>
      </NavbarContent>

      <NavbarMenu>
       
        <div className="flex flex-col w-full mt-1">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="p-4 text-end border-neutral-500/70 border-b w-full">
              <Link
                color={
                  'foreground'
                }
                className="font-medium"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
