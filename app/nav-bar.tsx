'use client';

import NavbarXsiteUi from '@xsite-ui/top10.navbar';

import navBarProps from './data/nav-bar-props.json';

export const NavBar = () => {
  const { navData, isBusinessCategoryPage, siteLogoLink, secondLogoPath, srcLogo } = navBarProps;
  return (
    <div>
      <NavbarXsiteUi
        navItems={navData?.navItems}
        isFullWidthLogo={!!secondLogoPath}
        logo={
          <div className="navbar-logo-container">
            <img
              className={isBusinessCategoryPage ? 'business-category' : ''}
              style={isBusinessCategoryPage ? { height: '43px', width: 'inital' } : undefined}
              src={srcLogo}
              alt="Ninja Top 10"
            />
            {secondLogoPath && <div className="divider" />}
            {secondLogoPath && <img src={secondLogoPath} alt="logo" />}
          </div>
        }
        siteLogoLink={siteLogoLink}
      />
    </div>
  );
};
