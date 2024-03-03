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

async function fetchdetailslive() {
  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const { avatar_url: Dp, name: Name, bio: Bio, public_repos: Repo, followers: Followers, following: Following } = data;

    getDp.src = Dp;
    getName.innerHTML = Name;
    getBio.innerHTML = Bio;
    getRepo.innerHTML = "Repository:<br>" + Repo;
    getFollowers.innerHTML = "Followers:<br> " + Followers;
    getFollowing.innerHTML = "Following:<br>" + Following;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchdetailslive();
