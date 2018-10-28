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
        productTooltip="Twins Blog "
    />
);

const MyProductNavigation = () => (
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
                    <Item text="Home" before={HomeFilledIcon} isSelected/>
                    <Item text="Places" before={MarketplaceIcon}/>
                    <Item text="Activities" before={EmojiActivityIcon}/>
                    <Separator/>
                    <Item text="Recommendations" before={BillingIcon}/>
                </div>
            )}
        </MenuSection>
    </Fragment>
);

const NavigationBar = () => (
    <NavigationProvider>
        <LayoutManager
            globalNavigation={MyGlobalNavigation}
            productNavigation={MyProductNavigation}
            containerNavigation={null}>

            <div style={{padding: '32px 40px'}}>Page content goes here.</div>
        </LayoutManager>
    </NavigationProvider>
);
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