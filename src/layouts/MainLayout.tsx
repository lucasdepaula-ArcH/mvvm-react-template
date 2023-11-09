import { Header, HeaderMenu, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, HeaderSideNavItems, SideNav, SideNavItems, SkipToContent } from '@carbon/react';
import { Suspense } from 'react';
import { Outlet } from "react-router-dom";

export function MainLayout() {
    const isSideNavExpanded = true

    return (
        <>
            <Header aria-label="IBM Platform Name">
                <SkipToContent />
                <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
                <HeaderName href="#" prefix="IBM">
                    [Platform]
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                    <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                    <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                        <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                        <HeaderMenuItem isActive href="#">
                            Sub-link 2
                        </HeaderMenuItem>
                        <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                    </HeaderMenu>
                </HeaderNavigation>
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false}>
                    <SideNavItems>
                        <HeaderSideNavItems>
                            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                                <HeaderMenuItem isActive href="#">
                                    Sub-link 2
                                </HeaderMenuItem>
                                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                            </HeaderMenu>
                        </HeaderSideNavItems>
                    </SideNavItems>
                </SideNav>
            </Header>
            <Suspense fallback="Carregando...">
                <Outlet />
            </Suspense>
        </>
    )
}