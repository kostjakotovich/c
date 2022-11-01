console.log("Java is working");

const point = document.getElementById('point');
let produkti = [];

window.addEventListener('load', () => {
    produkti = JSON.parse(localStorage.getItem("produkti") || "[]");
    console.log(produkti)
    render();
});

document.getElementById('jaunsProdukts').addEventListener('click', () => {
    point.style.display = 'block';

})



document.getElementById('pievienotProduktu').addEventListener('click', () => {
    point.style.display = 'none';
    let produkts1 = {produkts: produkts.value, daudzums: daudzums.value};
    produkts.value = "";
    daudzums.value = "";
    produkti.push(produkts1);
    render();
})
function render() {
    let Izvele = document.getElementById('Izvele');
    Izvele.innerHTML = "";
    
    for(let i = 0; i < produkti.length; i++) {
        let produkts1 = `
        <div class="produkts1">
            <h3>Produkts: ${produkti[i].produkts}</h3>
            <h4>Daudzums: ${produkti[i].daudzums}</h4>
        </div>`;

        Izvele.innerHTML += produkts1;
    }
    localStorage.setItem("produkti", JSON.stringify(produkti))
}