import generateDomElements from './generateDomElements';
const apiKey = '49e68def73af41b1927f24680bccc357';
let sources = 'https://newsapi.org/v2/sources?apiKey='+ apiKey;
let categories = new Set();
let dataStore = [];
let createDomStructure = new generateDomElements();

class getNewsApiData {
  constructor(endpoints){
    this.endpoints = endpoints;
  }

attachEventToButtons(){
    document.querySelector('#category_buttons').addEventListener('click', function(e){
      if (e.target.id === 'category_buttons') {
        return null
      }

      document.querySelectorAll('#myList > li').forEach((item) => {
         item.classList.remove("hide-item");
         if (e.target.id === 'all') {
          item.classList.remove("hide-item");
          return null
         }

         if ((item.getAttribute('data-category') !== e.target.id)) {
           item.classList.add("hide-item");
         }

      })
    });
}

  //Getter
  get getSources(){
    return this.fetchData();
  }

  fetchData() {
    fetch(this.endpoints)
      .then((response) => {
      return response.json();
    }).then((data) => {
        data.sources.forEach((item) => {
        createDomStructure.createLiTags(item);
        categories.add(item.category);
        dataStore.push(item);
    })
      return categories
    }).then((categories) => {
        let arr = [...categories]
        arr.forEach((category) => {
            createDomStructure.createButtonTags(category);
        })
    }).then(() => {
        this.attachEventToButtons()
    })
  }
}

let newsData = new getNewsApiData(sources);
newsData.getSources;