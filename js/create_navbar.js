// let navbar = `
// <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
//     <div class="container-fluid col-md-6 mx-auto">

//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">

//             <ul class="nav nav-pills nav-justified">
//                 <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#pubs">Publications</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#comms">Communications</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Enseignement</a>
//                 </li>
//             </ul>

//         </div>
//     </div>
// </nav>
// `;

let navbar = `
<nav id="navbar-example2" class="navbar navbar-expand-lg fixed-top bg-body-tertiary px-3 mb-3">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <a class="navbar-brand" href="#accueil">Home</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#pubs">Publications</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#comms">Communications</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#enseignements">Enseignements</a>
    </li> 
  </ul>
  </div>
</nav>
`

$("#myNavBar").append(navbar);