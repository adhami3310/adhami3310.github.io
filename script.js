function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    for(const el of document.body.getElementsByTagName("a")){
        el.classList.toggle("dark-mode");
    }
    document.getElementById("ldToggle").classList.toggle("dark-mode");
}

if (location.protocol == 'http:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
