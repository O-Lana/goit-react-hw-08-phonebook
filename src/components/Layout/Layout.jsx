import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
// import { Wrapper } from './Layout.styled'

export const Layout = () => {
    return (
        <>
            <AppBar />
            <div>
                <Outlet />
            </div>
        </>
  );
};