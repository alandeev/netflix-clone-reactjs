import React from 'react';

import './Header.css';

export function Header() {
    return (
        <header className="header">
            <div className="header--logo">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
            </div>
            {/* <div className="header--github">
                <img src="https://img2.gratispng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg" />
            </div> */}
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
        </header>
    )
}