import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelector';

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
