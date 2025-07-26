"use client";

import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavItem {
  href?: string;
  label: string;
  dropdown?: DropdownItem[];
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { 
      label: "Solutions", 
      dropdown: [
        { href: "/solutions/pastoral-care", label: "Pastoral Care Management" },
        { href: "/solutions/bnai-mitzvah", label: "B'nai Mitzvah Management" },
        { href: "/solutions/membership", label: "Membership Management" },
      ]
    },
    { href: "/consulting", label: "Consulting" },
    { href: "/contact", label: "Contact & About" },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-spiritual-600 to-accent-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:via-spiritual-700 group-hover:to-accent-700 transition-all duration-300">Campus Stack</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div className="relative group">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center group"
                      >
                        {item.label}
                        <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                              onClick={closeDropdown}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group"
                    >
                      {item.label}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-50 rounded-lg mt-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full text-left text-neutral-700 hover:text-primary-600 hover:bg-primary-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center justify-between"
                      >
                        {item.label}
                        <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block text-neutral-600 hover:text-primary-600 hover:bg-primary-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                              onClick={() => {
                                setIsMenuOpen(false);
                                closeDropdown();
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-neutral-700 hover:text-primary-600 hover:bg-primary-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 