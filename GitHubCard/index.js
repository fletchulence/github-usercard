/*
STEP 1: using axios, send a GET request to the following URL
(replacing the placeholder with your Github name):
https://api.github.com/users/<your name>
*/
import axios from 'axios';
const followersArray = [ "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" ];

followersArray.forEach (elem => {
  axios.get(`https://api.github.com/users/${elem}`)
   .then(res => {
      //console.log(res.data);
      //myContain.appendChild(
        myFunc(res.data)
  //   console.log(myGit)
   })
   .catch(err =>{
     console.error(err)
   }).finally(() => {
     console.log('fuck yourself')})

  })
  //console.log(myGit)

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


//console.log(followersArray);

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
   
  function myFunc(obj) {
   
   const card = document.createElement('div');
     card.classList.add('card');
     myContain.appendChild(card)
     
     const img = document.createElement('img');
     img.setAttribute('src', `${obj.avatar_url}`);
     card.appendChild(img);
   
   const cardInfo = document.createElement('div');
     cardInfo.classList.add('card-info');
     card.appendChild(cardInfo);
   
     // ! here starts to be the beginning of the main div 
     // TODO: everything here gets appended to "card-info"
   const h3 = document.createElement('h3');
     h3.classList.add('name');
     h3.textContent = obj.name;
     cardInfo.appendChild(h3);
   
   const para1 = document.createElement('p');
     para1.classList.add('username');
     para1.textContent = obj.login;
     cardInfo.appendChild(para1);
   
   const location = document.createElement('p');  // ! made location
     location.textContent = `Location: ${obj.location}`;  // ? text content of 
     cardInfo.appendChild(location);
     
   const profile = document.createElement('p');  
     profile.textContent = `Profile: `;  
     cardInfo.appendChild(profile);
   
     const address = document.createElement('a');
       address.setAttribute('href', `${obj.html_url}`);
       address.setAttribute('target', '_blank'); //TODO: change this if needed to string interp
       address.textContent = obj.html_url;
       profile.appendChild(address);
       //console.log(address)
   
   const followERS = document.createElement('p');
     followERS.textContent = `Followers: ${obj.followers}`;
     cardInfo.appendChild(followERS);
   
   const followING = document.createElement('p');
     followING.textContent = `Following: ${obj.following}`;
     cardInfo.appendChild(followING);
   
   const bio = document.createElement('p');
     bio.textContent = `Bio: ${obj.bio}`;
     cardInfo.appendChild(bio);

  //console.log(card)
  return card;
}



//card.appendChild(myContain);
 




  // List of LS Instructors Github username's:
  //   tetondan
  //   dustinmyers
  //   justsml
  //   luishrd
  //   bigknell

