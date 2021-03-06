// foliaHTML v.1.0.0
// by liskqu, ProgramistaZpolski
let CSScustomURL;

addCSS = function (css = "https://cdn.jsdelivr.net/gh/lisqu16/foliaHTML@0.1.3/css.css") {
    cssE = document.createElement("link");
    var attrbs = [{ "attrb": "rel", "value": "stylesheet" }, { "attrb": "type", "value": "text/css" },
    { "attrb": "href", "value": css }];
    for (var i in attrbs) cssE.setAttribute(attrbs[i].attrb, attrbs[i].value);
    document.head
        .appendChild(cssE);
}
addCSScustomURL = function (css = CSScustomURL) {
    cssE = document.createElement("link");
    var attrbs = [{ "attrb": "rel", "value": "stylesheet" }, { "attrb": "type", "value": "text/css" },
    { "attrb": "href", "value": css }];
    for (var i in attrbs) cssE.setAttribute(attrbs[i].attrb, attrbs[i].value);
    document.head
        .appendChild(cssE);
}

var tags = ["duzyTekst", "naSrodku", "malyTekst", "przycisk", "tekstPrzycisk", "czcionkaSerif", "czcionkaSans", "czcionkaSans2", "czcionkaMono",
 "czcionkaMono2", "czcionkaMono", "czcionkaMono2", "czcionkaComic", "czcionkaDisplay", "cienMaly", "cienSredni", "cienDuzy", "cienNajwiekszy",
  "sredniTekst", "poLewej", "poPrawej", "przekreslonyTekst", "pogrubionyTekst", "lekkiTekst", "najwiekszyTekst"];
loadTags = function () {
    try {
        if (typeof tags != "object") throw new Error("Nie udało się załadować \"tagów\".");
        for (var i of tags) document.createElement(tags[i]);
    } catch (error) {
        return console.error("Wystąpił błąd foliaHTML!\nTreść: " + error.message);
    }
}

function s() {
    addCSS();
    loadTags();
}
function sc(curl) {
    CSScustomURL = curl;
    addCSScustomURL();
    loadTags();
}


/* Web Components */
class Obrazek extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        let imgLink;
        console.log(this.hasAttribute('plik'));
        if (this.hasAttribute('plik')) {
            imgLink = this.getAttribute('plik');
        } else {
            imgLink = 'https://via.placeholder.com/300/09f/fff.webp';
        }


        const img = document.createElement('img');
        img.src = imgLink;
        wrapper.appendChild(img);

        /*const style = document.createElement('style');
        console.log(style.isConnected);*/


        /*style.textContent = `
        img {
          width: 1.2rem;
        }
      `;*/

        /*shadow.appendChild(style);*/
        shadow.appendChild(wrapper);
    }
}
class Odnosnik extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        let Linkacz;
        console.log(this.hasAttribute('strona'));
        if (this.hasAttribute('strona')) {
            Linkacz = this.getAttribute('strona');
        } else {
            Linkacz = '#';
        }
        let tekst;
        console.log(this.hasAttribute('tekst'));
        if (this.hasAttribute('tekst')) {
            tekst = this.getAttribute('tekst');
        } else {
            tekst = ' ';
        }

        const hyperlink = document.createElement('a');
        hyperlink.href = Linkacz;
        hyperlink.innerText = tekst;
        wrapper.appendChild(hyperlink);

        const style = document.createElement('style');
        console.log(style.isConnected);


        style.textContent = `
        a {
          color: #5e81ac;
        }
      `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}


customElements.define('obrazek-folia', Obrazek);
customElements.define('link-folia', Odnosnik);
