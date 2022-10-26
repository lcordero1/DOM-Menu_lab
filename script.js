var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Task 1.0
const mainEl = document.querySelector('main')
//Task 1.1
mainEl.style.backgroundColor = 'var(--sub-menu-bg)';
//Task 1.2
mainEl.innerHTML = '<h1> SEI Rocks! </h1>';
//Task 1.3
mainEl.classList.add('flex-ctr');
//Task 2.0 - 2.3
const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');
//Task 3.1
menuLinks.forEach((link) => {
    const newATag = document.createElement('a');
    newATag.setAttribute('href', link.href);
    newATag.textContent = link.text;
    topMenuEl.append(newATag);
    
}) 


////// PART 2 ////////
//Task 4.0 - 4.3
const subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

//Task 4.4 - 4.5
subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

const topMenuLinks = document.querySelectorAll('#top-menu > a');
console.log(topMenuLinks);

let showingSubMenu = false;

// function preventDefault (evt) {
//   if(evt !== 'a'){
//     return 
//   }
// }

// topMenuEl.addEventListener('click', preventDefault)


// console.log(preventDefault(topMenuEl))

// document.getElementById('topMenuEl')
// .addEventListener('click', preventDefault() = {
//   if (preventDefault().target.topMenuLinks === 'a') {
//     return 
//   }
// })

document.querySelector('topMenuEl').addEventListener('click', preventDefault)

 document.querySelector(".active");
  if(elems !==null){
   elems.classList.remove('active');
  } {
   e.target.className = ('active');
  }

//5.2

topMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault() //add prevent default everytime you have a click event
  if(evt.target.tagName !== 'A'){
    return;
  } 
  
  //5.3
  if(evt.target.classList.contains('active')){
    evt.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  //SN: Active class is a built in class
  //5.4
  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active');
  })
  // document.querySelectorAll('.active')
  // evt.body.classList.toggle('active')
  //5.5
  evt.target.classList.add('active');

  //5.6

let text = evt.target.textContent;
//console.log(text)
let currentLink={};

for (let i = 0; i < menuLinks.length; i++){
  if (text === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks');
      currentLink = menuLinks[i];   
  }
}

//5.7

if (showingSubMenu === true){
  subMenuEl.style.top = '100%';
  buildSubMenu(currentLink);
} else {
  subMenuEl.style.top = '0';
}

//5.8
  function buildSubMenu(){
      subMenuEl.innerHTML = '';
      console.log(subMenuEl)
      currentLink.subLinks.forEach((link) => {
          let a = document.createElement('A'
          )
          a.setAttribute('href', link.href)
          a.textContent = link.text
          subMenuEl.append(a)
      })
  }
  //SN:if function was outside of event listener, you would need to make sure you define this function, and that it has a parameter that has an object that you expect to access the same way

// Task 6.4
if (evt.target.text === "about") {
  mainEl.innerHTML = "<h1>about</h1>"
} 

// Task 6.0
subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();

if (evt.target.tagName !== "A") {
  return;
  } 



// Task 6.1
showingSubMenu = false;
subMenuEl.style.top = "0";

// Task 6.2
for (let i = 0; i < topMenuLinks.length; i++) {
  topMenuLinks[i].classList.remove("active")
}

// Task 6.3
mainEl.innerHTML = `<h1>${evt.target.text}</h1>`
} 
)
