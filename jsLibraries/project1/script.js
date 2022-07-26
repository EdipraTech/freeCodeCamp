const quotes = [
	{
		id: 1,
		quote:
			"In the end, everything will be okay. If it's not okay, it's not the end.",
		author: 'John Lennon',
	},
	{
		id: 2,
		quote:
			'Good character is not formed in a week or a month. It is created little by little, day by day. Protracted and patient effort is needed.',
		author: 'Heraclitus',
	},
	{
		id: 3,
		quote: 'The unexamined life is not worth living.',
		author: 'Socrates',
	},
	{
		id: 4,
		quote:
			'It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.',
		author: 'Socrates',
	},
	{
		id: 5,
		quote:
			'It is during our darkest moments that we must focus to see the light.',
		author: 'Aristotle',
	},
	{
		id: 6,
		quote:
			'The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.',
		author: 'Socrates',
	},
	{
		id: 7,
		quote:
			'What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.',
		author: 'Pericles',
	},
	{
		id: 8,
		quote:
			'You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.',
		author: 'Aristotle',
	},
	{
		id: 9,
		quote:
			'People are like dirt. They can either nourish you and help you grow as a person or they can stunt your growth and make you wilt and die.',
		author: 'Plato',
	},
	{
		id: 10,
		quote:
			'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
		author: 'Plato',
	},
	{
		id: 11,
		quote: 'The only true wisdom is in knowing that you know nothing.',
		author: 'Socrates',
	},
	{
		id: 12,
		quote:
			'Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.',
		author: 'Aristotle',
	},
	{
		id: 13,
		quote: 'Beware the barrenness of a busy life.',
		author: 'Socrates',
	},
	{
		id: 14,
		quote: 'Be kind, for everyone you meet is fighting a hard battle.',
		author: 'Plato',
	},
	{
		id: 15,
		quote:
			'We are what we repeatedly do; excellence, then, is not an act but a habit.',
		author: 'Aristotle',
	},
	{
		id: 16,
		quote:
			'Lack of activity destroys the good condition of every human being, while movement and methodical physical exercise save it and preserve it.',
		author: 'Plato',
	},
	{
		id: 17,
		quote: 'All I knew was that I never wanted to be average.',
		author: 'Michael Jordan',
	},
	{
		id: 18,
		quote: 'Do not pray for easy lives. Pray to be stronger men.',
		author: 'John F. Kennedy',
	},
	{
		id: 19,
		quote:
			'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
		author: 'Dale Carnegie',
	},
];

const colors = ['blue', 'green', 'pink', 'blue-violet', 'yellow-green'];

function getRandomQuote() {
	let randQuoteNum = Math.floor(Math.random() * quotes.length);
	let randColorNum = Math.floor(Math.random() * colors.length);
	let quoteData = quotes[randQuoteNum];
	let quote = quoteData.quote;
	let author = quoteData.author;
	let color = colors[randColorNum];
	let quoteHtml = document.getElementById('text');
	let authorHtml = document.getElementById('author');
	let background = document.getElementById('background');
	let button = document.getElementById('new-quote');
	background.removeAttribute('class');
	button.removeAttribute('class');
	console.log(color);
	background.classList.add(color);
	button.classList.add(color);
	quoteHtml.innerHTML = quote;
	authorHtml.innerHTML = `- ${author}`;

	console.log(quote, author);
}

window.onload = () => {
	getRandomQuote();
};

const btn = document.getElementById('new-quote');

btn.addEventListener('click', () => {
	getRandomQuote();
});
