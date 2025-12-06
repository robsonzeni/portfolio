"use client";

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import React from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isFloating, setIsFloating] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "Projetos",
    "Sobre",
  ];

  return (
    <HeroNavbar
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`
        fixed z-50 transition-all duration-500 ease-in-out
        w-full top-0 left-0 border-b border-white/5 bg-black/50 backdrop-blur-md
        ${
          isFloating
            ? "md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-[600px] md:rounded-full md:border md:border-white/10 md:bg-black/80 md:shadow-lg md:px-0"
            : "md:top-0 md:left-0 md:w-full md:rounded-none md:border-b md:border-white/5 md:bg-black/50 md:px-0"
        }
      `}
      maxWidth={isFloating ? "full" : "xl"}
      position="static"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-2">
          {/* Mobile: Always Text */}
          <p className="font-bold text-inherit text-xl tracking-tighter sm:hidden">ROBSON ZENI</p>
          
          {/* Desktop: Swap based on state */}
          <div className="hidden sm:block">
            {isFloating ? (
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 animate-fadeIn">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src="/images/avatar-site.png" alt="Profile" className="object-cover w-full h-full" />
              </div>
            ) : (
              <p className="font-bold text-inherit text-xl tracking-tighter">ROBSON ZENI</p>
            )}
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item} isActive={item === "Home"}>
            <Link 
                color="foreground" 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors ${item === "Home" ? "text-white" : "text-white/60 hover:text-white"}`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            color="primary" 
            href="https://wa.me/5551998121806" 
            variant="solid" 
            className="font-semibold bg-blue-600 text-white rounded-full px-6"
            target="_blank"
          >
            Conversar
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-background/95 backdrop-blur-xl pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-2xl font-bold"
              color="foreground"
              href={`#${item.toLowerCase()}`}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};
