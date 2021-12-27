const main = document.querySelector('main');
let html = '';

for (let i = 1; i <= 11; i++) {
    html += `<p>${i}</p>`;
}
main.innerHTML = html;