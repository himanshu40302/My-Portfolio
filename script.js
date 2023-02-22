/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById("year");
const projectsEl = document.getElementById("projects");
const filterEls = document.querySelectorAll("#filters li");

// filterEls[0].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[1].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[2].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[3].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[4].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[5].addEventListener('click', function() { 
// 	console.log('clicked')
// })

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) { 
		document.querySelector("#filters li.active").classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	})
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Favourite Food",
		img: "2.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-1-Favourite-Food-App-",
		liveUrl: "https://himanshu40302.github.io/Assignment-1-Favourite-Food-App-/",
		tags: ['html']
	},
	{
		name: "Nukk Web App",
		img: "3.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-4-Html-Css-Final-",
		liveUrl: "https://himanshu40302.github.io/Assignment-4-Html-Css-Final-/",
		tags: ['html',]
	},
	{
		name: "Stunning Page",
		img: "4.png",
		codeUrl: "https://github.com/himanshu40302/Stunning-Landing-Page-Assignment-3",
		liveUrl: "https://himanshu40302.github.io/Stunning-Landing-Page-Assignment-3-/",
		tags: ['html','css']
	},
	{
		name: "Stunning Page",
		img: "4.png",
		codeUrl: "https://github.com/himanshu40302/Stunning-Landing-Page-Assignment-3",
		liveUrl: "https://himanshu40302.github.io/Stunning-Landing-Page-Assignment-3-/",
		tags: ['html','css']
	},
	{
		name: "Stunning Page",
		img: "4.png",
		codeUrl: "https://github.com/himanshu40302/Stunning-Landing-Page-Assignment-3",
		liveUrl: "https://himanshu40302.github.io/Stunning-Landing-Page-Assignment-3-/",
		tags: ['html','css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'css']
	},
	{
		name: "Edyoda Stories",
		img: "1.png",
		codeUrl: "https://github.com/himanshu40302/Assignment-2-Edyoda-Stories-",
		liveUrl: "https://himanshu40302.github.io/Assignment-2-Edyoda-Stories-/",
		tags: [ 'js']
	},
	
	

];

function renderProjects(tag) {
	let output = "";

	for (let i = 0; i < projects.length; i++) {
		if(tag == 'all' || projects[i].tags.includes(tag)) {
				output += `<div class="project">
				<img src="img/${projects[i].img}" alt="Calculator Project Image">
				<div class="content flex">
					<p>${projects[i].name}</p>
					<p class="flex">
						<a href="${projects[i].codeUrl}" target="_blank"><img src="Icons/github.jpg.svg" alt="GitHub"></a>
						<a href="${projects[i].liveUrl}" target="_blank"><img src="Icons/external.jpg.svg" alt="External link"></a>
					</p>
				</div>
			</div> `;
		}
	}
	
	projectsEl.innerHTML = output;
}

renderProjects('all');







const resolver = {
	resolve: function resolve(options, callback) {
	  // The string to resolve
	  const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
	  const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
	  
	  function getRandomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	  };
	  
	  function randomCharacter(characters) {
		return characters[getRandomInteger(0, characters.length - 1)];
	  };
	  
	  function doRandomiserEffect(options, callback) {
		const characters = options.characters;
		const timeout = options.timeout;
		const element = options.element;
		const partialString = options.partialString;
  
		let iterations = options.iterations;
  
		setTimeout(() => {
		  if (iterations >= 0) {
			const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
  
			// Ensures partialString without the random character as the final state.
			if (iterations === 0) {
			  element.textContent = partialString;
			} else {
			  // Replaces the last character of partialString with a random character
			  element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
			}
  
			doRandomiserEffect(nextOptions, callback)
		  } else if (typeof callback === "function") {
			callback(); 
		  }
		}, options.timeout);
	  };
	  
	  function doResolverEffect(options, callback) {
		const resolveString = options.resolveString;
		const characters = options.characters;
		const offset = options.offset;
		const partialString = resolveString.substring(0, offset);
		const combinedOptions = Object.assign({}, options, {partialString: partialString});
  
		doRandomiserEffect(combinedOptions, () => {
		  const nextOptions = Object.assign({}, options, {offset: offset + 1});
  
		  if (offset <= resolveString.length) {
			doResolverEffect(nextOptions, callback);
		  } else if (typeof callback === "function") {
			callback();
		  }
		});
	  };
  
	  doResolverEffect(combinedOptions, callback);
	} 
  }
  
  /* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
   * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
   */
  const strings = [
	'Welcome To My Portfolio.  !!!',
	'Here Are Some Projects That I Create.'
  ];
  
  let counter = 0;
  
  const options = {
	// Initial position
	offset: 0,
	// Timeout between each random character
	timeout: 5,
	// Number of random characters to show
	iterations: 10,
	// Random characters to pick from
	characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
	// String to resolve
	resolveString: strings[counter],
	// The element
	element: document.querySelector('[data-target-resolver]')
  }
  
  // Callback function when resolve completes
  function callback() {
	setTimeout(() => {
	  counter ++;
	  
	  if (counter >= strings.length) {
		counter = 0;
	  }
	  
	  let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
	  resolver.resolve(nextOptions, callback);
	}, 1000);
  }
  
  resolver.resolve(options, callback);