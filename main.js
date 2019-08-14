//Exercice AJAX
//Allez sur https://jsonplaceholder.typicode.com
//A partir du cours et de vos nouvelles connaissances toutes fraîches en AJAX et à partir
//des informations du site, éxécutez les requêtes suivantes (à afficher dans la console) :
//
//Afficher toutes les tâches (todos)
//Afficher toutes les tâches achevées (completed: true)
//Affichez tous les users
//Affichez les infos suivante concernant les users (name, adress, company, website)
//Affichez les infos (name,  adress, email) de Leanne Graham
//Afficher toutes les tâches achevées de Leanne Graham
//Affichez tous les posts appartenant à Leanne Graham
//Affichez tous les commentaires du post à l'id 5
//
//Utilisez vos connaissances en Javascript - HTML - CSS pour affichez les dans le navigateur sous forme de cards ou de listes horizontales tous les users
//avec les infos suivantes : name, pseudo, email, website (lien), bouton 'Voir posts'.
//Le bouton ouvre une modal permettant de lister tous les posts de ce user. Vous avez le choix du design (couleur, disposition, etc...).


// const getOneUser = (id) => {
//     //Affiche le user qui a l'id 1
//   const modal = document.querySelector('#modal-content');
//   modal.innerHTML = '';
//   let div;
//   const urlOneUser = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const arrayOfItem = [];
//   const AllPostFromOneUser = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
//   fetch(AllPostFromOneUser)
//   .then(response => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       //arrayOfItem.push(item);
//       console.log(item.title);
//       div += `<li>${item.title}</li>`;
//     });
//   });

//   fetch(urlOneUser)
//   .then(response => response.json())
//   .then((user) => {
//     console.log(user);
//     modal.insertAdjacentHTML('beforeend', `
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">${user.name}</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//       <ul id="content"></ul>
//       ${div}
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//       `);
//   });
// };

// const AllUserFunction = () => {
//   const allUser = document.querySelector('#allUser');
//   const urlAllUsers = 'https://jsonplaceholder.typicode.com/users';
//   fetch(urlAllUsers)
//   .then(response => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       //console.log(user);
//       allUser.insertAdjacentHTML('beforeend', `
//         <li class="list-inline-item">
//           <div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">${user.name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${user.username}</h6>
//             <p class="card-text">${user.email}</p>
//             <a href="#" class="card-link">${user.website}</a>
//             <a href="#" class="card-link">${user.company.name}</a>
//             <p><button type="button" id="link${user.id}" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//               Voir profile
//             </button></p>
//           </div>
//         </div>
//       </li>
//         `);
//       document.querySelector(`#link${user.id}`).addEventListener('click', (event) => {
//         getOneUser(user.id);
//       });
//     });
//   });
// };

// //Affiche tous les users
// AllUserFunction();




