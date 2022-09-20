let themeDots = document.getElementsByClassName("theme-dot");
let posts = document.getElementsByClassName("post");

let theme = localStorage.getItem('theme');



const setTheme = (mode) => {
    let themeStyle = document.getElementById('theme-style');

    switch(mode) {
        case 'light':
            themeStyle.href = './styles/default.css';
            break;
        case 'purple':
            themeStyle.href = './styles/dark.css';
            break;
        case 'blue':
            themeStyle.href = './styles/blue.css';
            break;
        case 'green':
            themeStyle.href = './styles/green.css';
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