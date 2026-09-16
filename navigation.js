const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
    const closeMenu = () => {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            menuButton.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            closeMenu();
        }
    });
}

// Preserve bookmarks to sections from the former single-page projects layout.
if (window.location.pathname.endsWith('/projects.html')) {
    const projectDestinations = {
        '#vfs-purdue': 'vfs-purdue.html',
        '#vfs-250kg-vehicle': 'vfs-purdue.html#vfs-250kg-vehicle',
        '#vfs-powertrain-sizing': 'vfs-purdue.html#vfs-powertrain-sizing',
        '#vfs-sizing-title': 'vfs-purdue.html#vfs-powertrain-sizing',
        '#vfs-decisions-title': 'vfs-purdue.html#vfs-design-decisions',
        '#vfs-bms': 'vfs-purdue.html#vfs-bms',
        '#vfs-bms-title': 'vfs-purdue.html#vfs-bms',
        '#vfs-scale-prototype': 'vfs-purdue.html#vfs-scale-prototype',
        '#six-phase-drive': 'six-phase-drive.html',
        '#modular-control-esc': 'modular-control-esc.html'
    };
    const followProjectBookmark = () => {
        const destination = projectDestinations[window.location.hash];
        if (destination) window.location.replace(destination);
    };
    followProjectBookmark();
    window.addEventListener('hashchange', followProjectBookmark);
}
