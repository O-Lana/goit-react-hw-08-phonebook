import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export function AppBar() {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  );
}