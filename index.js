// array for storing the quotes
const rndm_quotes = [
    {
        'author':'GFG1',
        'quote':'Geeks for Geeks'
    },
    {
        'author':'GFG2',
        'quote':'Geeks_for_Geeks'
    },
    {
        'author':'GFG3',
        'quote':'Geek-for-Geeks'
    },
    {
        'author':'GFG4',
        'quote':'GeeksforGeeks'
    }
]


// function that is used when we click over the button
function main_fun(){
    // here we are generating the random number btw 0 and length of the list
    const random = Number.parseInt(Math.random()*rndm_quotes.length)

    // here we are changing the text of author name and the quote!
    document.querySelector('.quote_out').textContent = `\"${rndm_quotes[random].quote}\"`
    document.querySelector('.author_out').textContent = `--${rndm_quotes[random].author}`
}