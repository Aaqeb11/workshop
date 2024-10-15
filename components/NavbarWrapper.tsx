"use client"; // This is a Client Component

import { usePathname } from "next/navigation";
import Navbar from "@/components/NavBar";

export default function NavbarWrapper() {
  const pathname = usePathname(); // Get the current path
  const isTicketPage = pathname === '/tickets'; // Determine if it's the tickets page

  return <Navbar isTicketPage={isTicketPage} />;
}
