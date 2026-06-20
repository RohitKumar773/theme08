import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DropdownItem {
  name: string;
  route: string;
}

interface NavItem {
  label: string;
  link?: string;
  dropdown?: DropdownItem[];
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = signal<boolean>(false);
  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Testimonial', link: '/testimonials' },
    { label: 'Gallery', link: '/gallery' },
    {
      label: 'Pages',
      dropdown: [
        { name: 'Vision & Mission', route: '/vision' },
        { name: 'Rewards & Honors', route: '/rewards' }
      ]
    },
    { label: 'Practice Area', link: '/practice-area' },
    { label: 'Contact Us', link: '/contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(state => !state);
  }

  toggleDropdown(label: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdown.update(current => current === label ? null : label);
  }

  @HostListener('document:click')
  closeDropdowns(): void {
    this.activeDropdown.set(null);
  }
}
