// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement = null) {
    // assign this.domElement to the passed in domElement
    if (!domElement) {
      //if we're creating a new article from scratch, we have to create the initial div.article and add the appropriate sub elements to it. 
      this.domElement = document.createElement('div');
      this.domElement.classList.add('article');
      this.domElement.appendChild(document.createElement('h2'));
      this.domElement.appendChild(document.createElement('p'));
      this.domElement.querySelector('p').classList.add('date');
      this.domElement.appendChild(document.createElement('p'));
      this.domElement.appendChild(document.createElement('span'));
      this.domElement.querySelector('span').classList.add('expandButton');

      this.title = this.domElement.querySelector('h2');
      this.date = this.domElement.querySelector('.date');
      //content paragraph is second p tag. the first p tag is p.date.
      this.content = this.domElement.querySelectorAll('p')[1];
    } else {
      this.domElement = domElement;
    }
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }

  setTitle(title) {
    this.title.textContent = title;
  }

  setDate() {
    //sets the p.date to today, in "MMM DD, YYYY" format
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    const today = new Date();
    this.date.textContent = today.toLocaleDateString("en-US", options);
  }

  setContent(content) {
    this.content.textContent = content;
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/
let articles = document.querySelector('.articles')

let articleList = articles.querySelectorAll('.article');

articleList.forEach(a => new Article(a));


// code to test manually adding new article and setting text contents on elements within the article

// let newArticle = new Article();
// newArticle.setTitle('mic check 1 2 1 2');
// newArticle.setDate();
// const bjhIpsum = `I had dibs! My dibs were on those muffins! The amazing thing is, the house looks just like BoJack's house. They must have the same architect. Anyway, how are things with you? All right. You told me to come at 9:00. Uh, sorry. Your telephone is ringing. I'm Ira Glass. Thank you for being a sustaining member of public radio. Everyone has a story, and your phone's story is that it's ringing. Any comment on BoJack's controversial remarks this week? Good night. Get cancer, jerk wad. We're living month to month here. We're kind of counting on your autobiography to save the company, no pressure.`
// newArticle.setContent(bjhIpsum)

// articles.appendChild(newArticle.domElement);

const inputForm = document.createElement('form')
inputForm.style.display = 'flex'
inputForm.style.flexDirection = 'column'
inputForm.style.marginLeft = "10%"
inputForm.style.width = "50%"

const inputTitleLabel = document.createElement('label')
inputTitleLabel.textContent = "Title"
inputTitleLabel.style.marginBottom = "5px"
const inputTitle = document.createElement('input')
inputTitle.classList.add('input-title')
inputTitle.style.marginBottom = "20px"
const inputContentLabel = document.createElement('label')
inputContentLabel.textContent = "Post"
inputContentLabel.style.marginBottom = "5px"
const inputContent = document.createElement('textarea')
inputContent.classList.add('input-content')
inputContent.setAttribute('rows', 5)
inputContent.style.marginBottom = "5px"
const inputSubmit = document.createElement('input')
inputSubmit.setAttribute('type', 'submit')
inputSubmit.setAttribute('value', 'Submit')

inputForm.appendChild(inputTitleLabel)
inputForm.appendChild(inputTitle)
inputForm.appendChild(inputContentLabel)
inputForm.appendChild(inputContent)
inputForm.appendChild(inputSubmit)

articles.insertAdjacentElement('afterbegin', inputForm);


inputSubmit.addEventListener('click', e => {
  if (inputTitle.value && inputContent.value) {
    newArticle = new Article();
    newArticle.setTitle(inputTitle.value);
    newArticle.setDate();
    newArticle.setContent(inputContent.value);
    articles.appendChild(newArticle.domElement);
    inputTitle.value = ''
    inputContent.value = ''
    event.preventDefault();
  }
});