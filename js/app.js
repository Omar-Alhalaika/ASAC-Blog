'use strict'

let form = document.getElementById('form');
let authorArticle = [];

function Article(name, titel, subject, content, day, month, year) {
    this.name = name;
    this.titel = titel;
    this.subject = subject;
    this.content = content;
    this.day = day;
    this.month = month;
    this.year = year;
    authorArticle.push(this);

}
let minLikes = 1,
    maxLikes = 500;
function getRandomIntInclusive(minLikes, maxLikes) {
    min = Math.ceil(minLikes);
    max = Math.floor(maxLikes);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomIntInclusive)
Article.prototype = function likes() {
    getRandomIntInclusive();

}

let submit = document.getElementById('submit');

submit.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    let name = event.target.authorName.value;
    let titel = event.target.articleTitle.value;
    let subject = event.target.Subject.value;
    let content = event.target.content.value;
    let day = event.target.day.value;
    let month = event.target.month.value;
    let year = event.target.year.value;
    let userArticle = new Article(name, titel, subject, content, day, month, year);
    render();
    console.log(userArticle);
}

let div = document.getElementById('displayDiv'),
    displayTitle = document.getElementById('displayTitle'),
    displayAuthor = document.getElementById('displayAuthor'),
    displayDate = document.getElementById('displayDate'),
    displayLikes = document.getElementById('displayLikes'),
    displaySubject = document.getElementById('displaySubject'),
    displayContent = document.getElementById('displayContent');

function render() {
    displayTitle.innerHTML = Article.titel;
    displayAuthor.innerHTML = 'Author: ' + Article.name;
    displayDate.innerHTML = Article.date;
    displayLikes.innerHTML = Article.l;
    displaySubject.innerHTML = Article.subject;
    displayContent.innerHTML = Article.content;



}
let strigifiedArray = JSON.stringify(authorArticle);
let localStore = localStorage.setItem("article", strigifiedArray);
let getData = localStorage.getItem("article");
let parseArray = JSON.parse('article');