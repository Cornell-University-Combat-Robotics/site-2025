import React from "react";
// import { Disclosure } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
// import Logo from "../components/images/icons/logo.png";

const navigation = [
  { name: "About", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const isCurrent = (href) => (path === "/" && href === "/") || path === "/" + href;

  return (
    <Button variant="outlined">About</Button>
  );
}

export default NavBar;