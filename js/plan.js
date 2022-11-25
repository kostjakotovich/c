// funkcija prieks redirect
function RedToChoose() {
    window.location.href="../c-/choosepage.html";  
}

// funkcija prieks kartinu pievienosanas
let projekti = []

window.addEventListener('load', () => {
    projekti = JSON.parse(localStorage.getItem("projekti") || "[]");
    console.log(projekti)
    render();
});

document.getElementById("pievienotKartinu").addEventListener('click', Poga)
function Poga(){
    if (datums.value === ""){
        alert("Jūs neievadijāt datumu.")
    };
    if (tema.value === ""){
        alert("Jūs neievadijāt tēmu.")
    } else {
        let project = {datums: datums.value, tema: tema.value};
        datums.value = "";
        tema.value = "";
    
        projekti.push(project);

        render();
    }

}

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < projekti.length; i++) {

        let project = `
    <li class="project">
        <h3>Datums: ${projekti[i].datums}</h3>⠀⠀⠀<h4>Tēma: ${projekti[i].tema}</h4>⠀⠀⠀⠀
        <button class="del">Dzēst</button>
    </li>`;
    saraksts.innerHTML += project;
    }

    localStorage.setItem("projekti", JSON.stringify(projekti)) 
}

const list = document.querySelector('#saraksts')

list.addEventListener('click', (e) => {
    if(e.target.className == 'del'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      projekti.splice(li, 1);
      localStorage.setItem('projekti',JSON.stringify(projekti));
    }
  });