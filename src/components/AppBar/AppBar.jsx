
import { NavItem, LinkList, LinkItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <header>
      <LinkList>
        {navItems.map(({ href, text }) => (
          <LinkItem key={href}>
            <NavItem to={href}>{text}</NavItem>
          </LinkItem>
        ))}
      </LinkList>
    </header>
  );
};