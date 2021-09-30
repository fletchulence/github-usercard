/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

const myGit = axios.get(`https://api.github.com/users/davidfletcher`)
  .then(res =>{
    console.log(myGit)
  })
  .catch(err =>{
    console.error(err)
  })

//console.log(myGit)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = [ "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" ];
//TODO: console.log(followersArray);
//? thonbaosjdnf
//! ;jlahdsf
//* ;alkjsdfl;
// ;alkjsdf

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const myContain = document.querySelector('.cards');

 function myFunc(data) {
  const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(img);

  const img = document.createElement('img');
    img.setAttribute('src', data.avatar_url);

  const div = document.createElement('div');
    div.classList.add('card-info'); 

  const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = data.name;

  const para1 = document.createElement('p');
    para1.className('username');
    para1.textContent = data.login;

  const location = document.createElement('p');
    location.textContent = data.location;
    
  const profile = document.createElement('p');

    const address = document.createElement('a');
      address.setAttribute('href', data.html_url); //TODO: change this if needed to string interp
      address.textContent = data.html_url;
      profile.appendChild(address);

  const followERS = document.createElement('p');
    followERS.textContent = ``;

    
  
  
  return card;
}


card.appendChild(myContain);
 



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
