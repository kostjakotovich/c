// funkcija, kura ievad inputa name, lietotaja vardu, kuru vins ievadija commentistracija 
let name = localStorage.getItem('Current User Name')
document.getElementById("nameInput").value = name;
console.log(name)

// funkcija prieks kommentiem

let projekti = []

window.addEventListener('load', () => {
    projekti = JSON.parse(localStorage.getItem("projekti") || "[]");
    console.log(projekti)
    render();
});

document.getElementById("buttonSend").addEventListener('click', Poga)
function Poga(){
    if (email2.value === ""){
        alert("Jūs neievadijāt datumu.")
    };
    if (comment2.value === ""){
        alert("Jūs neievadijāt tēmu.")
    } else {
        let project = {email2: email2.value, comment2: comment2.value};
        email2.value = "";
        comment2.value = "";
    
        projekti.push(project);

        render();
    }

}

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < projekti.length; i++) {

        let project = `
    <li class="project" style="margin-top:30%">
        <h3>Name: ${name}</h3>
        <h3>Email: ${projekti[i].email2}</h3>⠀⠀⠀<h4>Comment: ${projekti[i].comment2}</h4>⠀⠀⠀⠀
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