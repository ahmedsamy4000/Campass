// Components.jsx
import React, { useEffect } from 'react';

function ScrollMenuComponent() {
    useEffect(() => {
        const scrollMenu = () => {
            const menuId = document.getElementById("menu");
            if (document.documentElement.scrollTop > 50) {
                menuId.classList.add("scroll");
                console.log('scroll');
            } else {
                menuId.classList.remove("scroll");
                console.log('no-scroll');
            }
        };

        document.addEventListener("scroll", scrollMenu);

        return () => {
            document.removeEventListener("scroll", scrollMenu);
        };
    }, []);

    return null;
}

function MobileMenuComponent() {
    const mobileMenu = () => {
        const topMenu = document.getElementById("top-menu");
        const mobBtn = document.getElementById("mobile-btn");
        if (topMenu.classList.contains("mobile-open")) {
            topMenu.classList.remove("mobile-open");
        } else {
            topMenu.classList.add("mobile-open");
        }
        if (mobBtn.classList.contains("hamburger-cross")) {
            mobBtn.classList.remove("hamburger-cross");
        } else {
            mobBtn.classList.add("hamburger-cross");
        }
    };

    return (
        <button id="mobile-btn" onClick={mobileMenu}>
            Mobile Menu
        </button>
    );
}

export { ScrollMenuComponent, MobileMenuComponent };
