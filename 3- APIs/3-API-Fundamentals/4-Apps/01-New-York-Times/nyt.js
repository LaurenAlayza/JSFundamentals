const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '<E6127jpUa4FCW8kr6OlIvA4Zre5Jjfsn>';
let url;
//Search; naming these a variable so we can use them later. we are querying the DOM. 
const searchTerm = document.querySelector('.search'); // to call the elements so we can use it later for use of that class
const startDate = document.querySelector('.start-date'); //this input field of a class to search for
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav'); // referring to the nav tag in my html
const section = document.querySelector('section'); //referring to the section tag in the html.

nav.style.display = 'none'; //nav is referring to the nav tag. const nav. above. with the query ther eis an object insie it we can step into it using CSS object attached to the selectorquery. 
//if we set display to be non, we have done this thru DOM manipulation. we do not wwant to display nav in the beginning when file first ru ns. 
//results
let pageNumber = 0; //starts the page at zero after a search, and not any other page like 2,3,4... if you have no results start on zero

let displayNav = false; // just tsetting this boolean as a variable. 
// console.log('PageNumber:', pageNumber); 

searchForm.addEventListener('submit', fetchResults); //add a watch if submit is clicked, it sends signals to the search form to do something liek fetch results in search form
nextBtn.addEventListener('click', nextPage); //refers to the button listed above fetch, results, previous are functions from below. 
previousBtn.addEventListener('click', previousPage); //functions from below.
function fetchResults(e) { //e is a variable we can change we can put anything we want. event handling function, recieves an event object. and event listened
  //takes url for NYT and then api key,  down below you enter date range if you want to enter one there below. fetch results is invoked above. e stands for event handler and tell it that theres and event listener there to trigger it. 
  // console.log(e); //assemble the full URL
  e.preventDefault(); //when we have a submit action that happens it naturallly wants to refresh the bowser which means everyting gets reset we just want the request to be submitted so it stops browser form refreshing.  
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //base url key is from very top, page number is for line 18 pagenumber, searchterm is for the keywords what you enter a form with an input, value of searchterm is input field, grabs value and appends it to the search url
  console.log('URL:', url);

  if (startDate.value !== '') { //!== check if it is NOT equal, checks type & value of both with == if start value NOT blank... THEN we want to add original value of URL then apepend the date PLUS value passing within it. 
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value; //url adding begining and start date, takes into account the first date you put in the search
  } // makes the start date that is input. 

  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }

  fetch(url) // this is a promise, uses url you defined above. start date value, etcreturns results in json format
    .then(function(result) {
      console.log(result) //logs results
      return result.json(); 
    })
    .then(function(json) { //we can name the json whatever we want it is just a placeholder
      console.log(json);
      displayResults(json); //calls the display results function. passes jsonified data to that function. 
    })
}
//this is where the promise extends, passes data thru

function displayResults(json) { //is this to open the parent of all articles, then to remove the ones that dont fit the search. 
  while (section.firstChild) {//while this section.firstchild exists, remove it so if doing research it removes everyhitng that was appended in previous search. 
    section.removeChild(section.firstChild); // children that exist form last search. all are children, 
  }

  let articles = json.response.docs; // naming our results, want the separated articles - see response types in the api documentation. either insoect & console log info or go straight to the documentatin.

  if (articles.length === 0) { //this means if no search results, no articles. 
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {  //iterate thru each object, 66-71 is creating new elements, we know which element they will create byu 
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a'); //its an a tag, thats al it means. 
      let img = document.createElement('img'); //its an image tag
      let para = document.createElement('p'); // refers to the kind of element it will be on the right hand side, the left is just a var name. 
      let clearfix = document.createElement('div'); //for as many articles we get back from the api, we iterate thru this, creat the elements above, 
//group 3
      let current = articles[i]; //articles[i] is which article it is, i is a nteger datatype, articles is pulled from the json results, length will return a number we can loop over it, so the satatype is an arraylooping over all of the articles,
      //for each article in the database, specify, grab info and set it to be a variable. we have it cosolelogged as current, we have 20 current, simply the current article we are iterating over in our loop. 
      //as if we are looping over array of articles we pulled form the json. for each article create these elements, and this is the elemtn i am iterating over. as i loop thur all my articles, for first, second, ad thirs. iw ant you to do these tings. could have usef for each & for uf.. but to grab specific article need to do article[i] because i is the index. 
      //set it to a variable called current. 
      console.log('Current:', current);

      link.href = current.web_url; //puts web url into the href of the anchor tag, the ref comes from line 68! it is web_url because defined in the api
      link.innterText = current.headline.main;
      // console.log(link);
      // link.textContent = current.headline.main;

      para.textContent = 'Keywords: '; //these are the keywords being typed in the p tag, just the streing of keywords

      for (let j = 0; j < current.keywords.length; j++) { //appends on the paragrph for each keyword for the next one it will add it. j is an integer that reps the index of each keyword in that article. 
        //set up a span tag, create element, set text content to be what it is currently, first time it looks empty, second loop it looks at gots ketwors, just adds a space + value ofwhateevr keywords we are iterating over. the . value comes from the API!!! under keywords.
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        //text content is to be set to be what the current conent is PLUS whatever keyword we ieterate over, grab value associated with KEY of value and add a space after it. 
        //append after keywords
        para.appendChild(span); //append child adds span tags, est. parent child relationship, parent = paragraph child = 
      }

      if (current.multimedia.length > 0) { //if i have pictures, do this. 
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //setting an image tag and setting the source to e
        img.alt = current.headline.main; //puts the text hypelrinke dinto the anchor tag. headline.main comes from the api. inner text is the text we see displayed the weburl is the url we want it to take us to. 
        //
      }
      //<img rec=`http://www.nytimes.com/${current.multimedia[0].url`>
      clearfix.setAttribute('class', 'clearfix'); //this is set above a div. set attribute is setting the attribute, a class, named clearfix.  now i can add style for something that doesnt exist until i search for it. 

      article.appendChild(heading); //puts a heading into the article we created.  
      heading.appendChild(link); // puts link into the article
      article.appendChild(img); //puts 
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article); //outs the article intot he section. in html. 
    }
  }

  if (articles.length === 10) { //if nav.style.display from html buttons not visible, if i have 10 articles make it visible.  (we also work with inline, and inline block) ald flex in static layout. 
    nav.style.display = 'block';
  } else { 
    nav.style.display = 'none';
  }//this would occur if not enough search results. if only 9, then dont show controls. 
}

function nextPage(e) { //makes the buttons work, when u press them. forward - has an event handler, page number comes from above, we named it set to 0. takes 0 + 1... etc. adds 1 number in addiiton to it every time in increments of 1. 
  pageNumber++; //updates value of number
  fetchResults(e); //runs results again
  console.log('Page Number:', pageNumber); //the url takesin pagenumber above, shoes results when we do second fetch for the next 10 articles. 
}

function previousPage(e) { //backwards on page 3 takes u to page 2. if 0 cant go back further. 
  if (pageNumber > 0) {
    pageNumber--; //go fown a number
    fetchResults(e);
  } else {
    return; //return nothing if less than zero. dont do anything. 
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}