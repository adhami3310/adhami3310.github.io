if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.toggle("dark-mode");
} else {
    document.documentElement.classList.toggle("light-mode");
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("light-mode");
}

if (location.protocol == 'http:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
