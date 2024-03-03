let getDp = document.querySelector(".image");
let getName = document.querySelector(".name");
let getBio = document.querySelector(".bio");
let getLink = document.querySelector(".link");
let getRepo = document.querySelector(".repository");
let getFollowers = document.querySelector(".followers");
let getFollowing = document.querySelector(".following");

let changedURL = prompt("Enter your Username:");
let requestURL = "https://api.github.com/users/" + changedURL;
let profilelink = "https://github.com/" + changedURL;
getLink.href = profilelink;

function fetchdetailslive() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL)
  let Dp;
  let Name;
  let Bio; 
  let Repo;
  let Followers;
  let Following;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(this.responseText);
        Dp = data.avatar_url;
        Name = data.name;
        Bio = data.bio;
        Repo = data.public_repos;
        Followers = data.followers;
        Following = data.following;

        getDp.src = Dp;
        getName.innerHTML = Name;
        getBio.innerHTML = Bio;
        getRepo.innerHTML = "Repository:<br>" + Repo;
        getFollowers.innerHTML = "Followers:<br> " + Followers;
        getFollowing.innerHTML = "Following:<br>" + Following;
      } else {
        console.error("Error fetching data:", xhr.statusText);
      }
    }
  };

  xhr.onerror = function () {
    console.error("Request failed");
  };

  xhr.send();
}
