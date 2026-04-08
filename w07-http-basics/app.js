const GH_ACCESS_TOKEN = 'secret';

function loadNavigation() {
    fetch('./navbar.html')
        .then(res => res.text())
        .then(navbarHtml => {
            document.body.insertAdjacentHTML('afterbegin', navbarHtml);
        })
        .catch(err => {
            console.error(err);
            alert('Hiba a menürendszer betöltésekor.');
        });
}

loadNavigation();
