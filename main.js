//Task 1.0
// Select and cache the <main>element in a variable named mainEl.
const mainEL = document.querySelector('main'); 
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEL.style.backgroundColor= "var(--main-bg)";//Ask about this later. 
//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEL.innerHTML = '<h1> SEI Rocks!</h1>';
//.innerHTML to add new elements into the page without affecting the html file.
// Add a class of flex-ctr to mainEl.
mainEL.className='flex-ctr';
//Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height ='100%';
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.className='flex-around';

//Task 3.0
// Menu data structure
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
// Iterate over the entire menuLinksarray and for each "link" object:
// Create an <a>element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.
for(let i=0; i<menuLinks.length; i++){
    let aElement= document.createElement('a');
    let links = menuLinks[i].href;
    let texts = menuLinks[i].text;
    aElement.href = links;
    aElement.text = texts;
    topMenuEl.append(aElement);
}

//////////////////////////////////////////////
//Part 2
//////////////////////////////////////////////
//Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = '100%';
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor='var(--sub-menu-bg)';
// Add the class of flex-around to the subMenuElelement.
subMenuEl.className='flex-around';
// Set the CSS position property of subMenuElto the value of absolute.
subMenuEl.style.position='absolute';
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
// Declare a global showingSubMenuvariable and initialize it to false;
let showingSubMenu = false;
// Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object's preventDefault()method.
topMenuEl.addEventListener('click', function(e){
    //The second line of code function should immediately return if the element clicked was not an <a>element.
    e.preventDefault();
    if(e.target.nodeName == "A"){
       console.log(e.target.innerText);//it could also get done with .innerHTML
    }
    else{
       return;
    }
    if(e.target.classList.contains('active')){
       e.target.classList.remove("active"); 
       showingSubMenu = false;
      subMenuEl.style.top ='0';
      return;
    }
   topMenuLinks[1].classList.add('active');
    for(let i=0; i<topMenuLinks.length; i++){
        topMenuLinks[i].classList.remove("active"); 
    }
    e.target.classList.add('active');
    
    if (e.target.href === "http://" + document.links[0].host + "/about") {
        showingSubMenu = false
        console.log(showingSubMenu)
    } else {
        showingSubMenu = true
        console.log(showingSubMenu)
    }
    
});

