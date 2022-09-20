let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem('theme');



const setTheme = (mode) => {
    let themeStyle = document.getElementById('theme-style');

    switch(mode) {
        case 'light':
            themeStyle.href = 'default.css';
            break;
        case 'purple':
            themeStyle.href = 'dark.css';
            break;
        case 'blue':
            themeStyle.href = 'blue.css';
            break;
        case 'green':
            themeStyle.href = 'green.css';
            break;
    }

    localStorage.setItem('theme', mode);
}


if(theme === null) {
    setTheme('light');
} else {
    setTheme(theme);
}

for(let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}