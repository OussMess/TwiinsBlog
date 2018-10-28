import React, {Fragment} from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import QuoteIcon from '@atlaskit/icon/glyph/quote';
import HomeFilledIcon from '@atlaskit/icon/glyph/home-filled';
import MarketplaceIcon from '@atlaskit/icon/glyph/marketplace';
import EmojiActivityIcon from '@atlaskit/icon/glyph/emoji/activity';
import BillingIcon from '@atlaskit/icon/glyph/billing';
import {
    HeaderSection,
    Item,
    LayoutManager,
    MenuSection,
    NavigationProvider,
    Separator,
} from '@atlaskit/navigation-next';

const MyGlobalNavigation = () => (
    <GlobalNavigation
        productIcon={() => <QuoteIcon size="medium"/>}
        onProductClick={() => {
        }}
        productTooltip="Twins Blog"
    />
);

const MyProductNavigation = (path) => () => {
    const home = "/";
    const places = "/places";
    const activities = "/activities";
    const recommendations = "/recommendations";
    return (
    <Fragment>
        <HeaderSection>
            {({className}) => (
                <div className={className}>
                    <h2 style={styles.titleProductNav}>Twins Blog</h2>
                </div>
            )}
        </HeaderSection>
        <MenuSection>
            {({className}) => (
                <div className={className}>
                    <Item text={"Home"} before={HomeFilledIcon} href={`#${home}`} isSelected={path === home}/>
                    <Item text="Places" before={MarketplaceIcon} href={`#${places}`} isSelected={path === places}/>
                    <Item text="Activities" before={EmojiActivityIcon} href={`#${activities}`}
                          isSelected={path === activities}/>
                    <Separator/>
                    <Item text="Recommendations" before={BillingIcon} href={`#${recommendations}`}
                          isSelected={path === recommendations}/>
                </div>
            )}
        </MenuSection>
    </Fragment>
    )
};

const NavigationBar = ({children, location: {pathname}}) => {
    return (
        <NavigationProvider>
            <LayoutManager
                globalNavigation={MyGlobalNavigation}
                productNavigation={MyProductNavigation(pathname)}
                containerNavigation={null}>

                <div style={{padding: '32px 40px'}}>
                    {children}
                </div>
            </LayoutManager>
        </NavigationProvider>
    );
};
const styles = {
    titleProductNav: {
        fontFamily: ["Charlie Display_Semibold", "Segoe UI", "Noto Sans", "Droid Sans", "Helvetica Neue"],
        fontSize: "30px",
        fontWeight: "normal",
        letterSpacing: "0em",
        color: "white",
    }
};
export default NavigationBar;