import Header from 'components/Header/Header.jsx';
import Main from 'components/Main/Main.jsx';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    );
}
