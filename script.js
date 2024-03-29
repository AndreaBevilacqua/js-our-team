console.log('js ok');

// ^ MILESTONE 1 - Creo un array di oggetti con le informazioni fornite 
// ^ MILESTONE 2 - Stampo su console le informazioni del nome,ruolo e la foto
// ^ MILESTONE 3 - Stampo le informazioni sul DOM

// ! ==================
// ! RECUPERO ELEMENTI
// ! ==================

const listElement = document.querySelector('ul');

// ~ ==================
// ~      ARRAY
// ~ ==================

const members = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', picture: 'wayne-barnett-founder-ceo.jpg'},
    { name: 'Angela Caroll', role: 'Chief Editor', picture: 'angela-caroll-chief-editor.jpg'},
    { name: 'Walter Gordon', role: 'Office manager', picture: 'walter-gordon-office-manager.jpg'},
    { name: 'Angela Lopez', role: 'Social Media Manager', picture: 'angela-lopez-social-media-manager.jpg'},
    { name: 'Scott Estrada', role: 'Developer', picture: 'scott-estrada-developer.jpg'},
    { name: 'Barbara Ramos', role: 'Graphic Designer', picture: 'barbara-ramos-graphic-designer.jpg'}
];

// ? =======================
// ?       SVOLGIMENTO
// ? =======================

let items = '';

for (let i = 0; i < members.length; i++) {
    const member = members[i];

    items += `
    <li>
       <div><strongo>Name:</strong> ${member.name}</div>
       <div><strongo>Role:</strong> ${member.role}</div>
       <div><strongo>Picture:</strong> ${member.picture}</div>
    </li>
    `    
    for(let key in member) {
        console.log(`${key} : ${member[key]}`)
    }
}

listElement.innerHTML = items;



