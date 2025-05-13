import React from 'react';
import { Button } from './ui/Button';
import { Menu, ChevronDown } from 'lucide-react';

interface NavState {
  isScrolled: boolean;
  prevScrollY: number;
  isVisible: boolean;
}

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isImpactOpen, setIsImpactOpen] = React.useState(false);
  const [navState, setNavState] = React.useState<NavState>({
    isScrolled: false,
    prevScrollY: 0,
    isVisible: true
  });
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = ['about', 'documentary', 'stats', 'heatmap', 'coalition', 'resources', 'support', 'take-action', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 0;
        }
        return false;
      }) || '';

      setActiveSection(currentSection || '');
      setNavState(prev => ({
        isScrolled: currentScrollY > 0,
        prevScrollY: currentScrollY,
        isVisible: true
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`
        fixed w-full top-0 z-[100] bg-[#9CCFE6] backdrop-blur-sm shadow-md
        transition-all duration-500 ease-in-out
        ${navState.isScrolled ? 'shadow-lg' : ''}
        ${navState.isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-18 lg:h-20 justify-between items-center">
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="text-base sm:text-lg lg:text-xl font-bold text-white hover:text-white/90 transition-all duration-300 cursor-pointer font-lato transform hover:scale-105 tracking-tight group"
            >
              <span className="hidden sm:inline group-hover:opacity-100">SB743</span>
              <span className="sm:hidden">SB743</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-3">
            {[
              {
                href: '#',
                label: 'About',
                dropdown: [
                  { href: '#documentary', label: 'Documentary' },
                  { href: '#about', label: 'Overview' }
                  
                ]
              },
              {
                href: '#',
                label: 'Impact',
                dropdown: [
                  { href: '#stats', label: 'Funding Gap Numbers' },
                  { href: '#heatmap', label: 'Interactive Heat Map' }
                ]
              },
              { href: '#coalition', label: 'Coalition' },
              { href: '#resources', label: 'Resources' },
              { href: '#support', label: 'Get Involved' },
              { href: '#news', label: 'Press ' },
              { href: '#take-action', label: 'Support Letter' },
              { href: '#contact', label: 'Contact Us' },
            ].map((item) => (
              'dropdown' in item ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-300
                      px-2 lg:px-3 rounded-lg hover:bg-primary-light/20
                      ${(item.label === 'About' && (activeSection === 'about' || activeSection === 'documentary')) ||
                        (item.label === 'Impact' && (activeSection === 'stats' || activeSection === 'heatmap'))
                        ? 'text-white font-bold scale-105'
                        : 'text-white/90 hover:text-white hover:font-semibold'
                      } text-[0.8rem] sm:text-sm lg:text-base tracking-wide
                    `}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-300 group-hover:rotate-180 text-white" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="mt-2 rounded-md bg-[#9CCFE6] shadow-lg">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            const targetId = dropdownItem.href.slice(1);
                            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                            setIsOpen(false);
                          }}
                          className={`block px-4 py-3 text-sm hover:bg-primary-light/20 first:rounded-t-md last:rounded-b-md
                            text-xs sm:text-sm lg:text-base
                            ${activeSection === dropdownItem.href.slice(1)
                              ? 'text-white font-semibold'
                              : 'text-white/90 hover:text-white'
                            }
                          `}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`relative py-2 px-2 lg:px-3 rounded-lg hover:bg-primary-light/20 text-[0.8rem] font-medium transition-all duration-300
                    ${activeSection === item.href.slice(1) 
                      ? 'text-white font-bold scale-105' 
                      : 'text-white/90 hover:text-white hover:font-semibold'
                    } sm:text-sm lg:text-base tracking-wide
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full 
                    after:origin-left after:scale-x-0 after:bg-primary-dark
                    after:transition-transform after:duration-300 
                    hover:after:scale-x-100
                    ${activeSection === item.href.slice(1) ? 'after:scale-x-100 transform transition-transform duration-300' : ''}
                  `}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-lg p-2.5
                transition-colors duration-300 text-white
                ${isOpen ? 'bg-primary-light/20' : 'hover:bg-primary-light/20'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-[#9CCFE6]">
            <div className="space-y-1 py-3">
              {[
                { href: '#about', label: 'About - Overview' },
                { href: '#documentary', label: 'About - Documentary' },
                { href: '#stats', label: 'Impact - Funding Gap' },
                { href: '#heatmap', label: 'Impact - Heat Map' },
                { href: '#news', label: 'Press ' },
                { href: '#coalition', label: 'Coalition' },
                { href: '#resources', label: 'Resources' },
                { href: '#support', label: 'Get Involved' },
                { href: '#take-action', label: 'Support Letter' },
                { href: '#contact', label: 'Contact Us' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  className={`block px-4 py-2.5 text-base font-medium transition-all duration-300 rounded-lg mx-2
                    ${activeSection === href.slice(1)
                      ? 'bg-primary-light/20 text-white font-bold'
                      : 'text-white/90 hover:bg-primary-light/20 hover:text-white hover:font-semibold'
                    }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}