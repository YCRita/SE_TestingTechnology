class User {
    constructor() {
      this._numberOfArticles = 0;
    }

    set setNumberOfArticles(numberOfArticles){
        this._numberOfArticles = numberOfArticles;
    }
    get getNumberOfArticles(){
        return this._numberOfArticles;
    }
    calcScores(){
        throw new Error('Method "calcScores" must be implemented in subclasses');
    }

  }


  class Author extends User{
    constructor(){
        super();
    }

    calcScores() {
        return (this.numberOfArticles * 10) + 20;
    }

  }


  class Editor extends User{
    constructor(){
        super();
    }

    calcScores() {
        return (this.numberOfArticles * 6) + 15;
    }
  }


const author1 = new Author();
author1.setNumberOfArticles(8);

const editor1 = new Editor();
editor1.setNumberOfArticles(15);

console.log("Author 1 score is : " + author1.calcScores());
console.log("Editor 1 score is : " + editor1.calcScores());