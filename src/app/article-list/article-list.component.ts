import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleComponent implements OnInit {

 
  ngOnInit() {};


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    
    const getArticleInfo = () => {
      return (fetch(`${apiUrl}/query`, {
        method: 'POST',
        headers: {
          'x-key': apiKey
        },
        body: JSON.stringify({
          query: 'Luxury',
          attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
          page: 1,
          hitsPerPage: 14,
          filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
        })
      })
    )};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;

            console.log(news)

            var nbArticlesEl = document.getElementById('nbArticles');
          
            for (let article of news.hits) {
              if (i<news.hits.length) {

              var articleEl = document.createElement('li');
              var articleLink = document.createElement('a');
          
              articleLink.setAttribute('href', article.url);
          
              if (article.excerpt && article.excerpt.length) {
                articleLink.setAttribute('title', article.excerpt);
              }
          
              
              
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              
              
              console.log(i)
              i++
            }

        }}
        catch (error) {
            console.error(error);
        }
      
      };
      for(let i=1;i<100;i++){
        this.collection.push(`angular`)
      }
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  

  
  showModal = true;

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'app-article-list1',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleComponent1 implements OnInit {

 
  ngOnInit() {};


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      return (fetch(`${apiUrl}/query`, {
        method: 'POST',
        headers: {
          'x-key': apiKey
        },
        body: JSON.stringify({
          query: 'Luxury',
          attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
          page: 2,
          hitsPerPage: 14,
          filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
        })
      })
    )};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 1
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;

            console.log(news)

            var nbArticlesEl = document.getElementById('nbArticles');
            
            for (let article of news.hits) {

              var articleEl = document.createElement('li');
              var articleLink = document.createElement('a');
          
              articleLink.setAttribute('href', article.url);
          
              if (article.excerpt && article.excerpt.length) {
                articleLink.setAttribute('title', article.excerpt);
              }
          

              
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
          

            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      for(let i=1;i<100;i++){
        this.collection.push(`angular`)
      }
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  

  
  showModal = true;

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'app-article-list2',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleComponent2 implements OnInit {

 
  ngOnInit() {};


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      return (fetch(`${apiUrl}/query`, {
        method: 'POST',
        headers: {
          'x-key': apiKey
        },
        body: JSON.stringify({
          query: 'Luxury',
          attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
          page: 3,
          hitsPerPage: 14,
          filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
        })
      })
    )};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 1
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;

            console.log(news)

            var nbArticlesEl = document.getElementById('nbArticles');
            
            for (let article of news.hits) {

              var articleEl = document.createElement('li');
              var articleLink = document.createElement('a');
          
              articleLink.setAttribute('href', article.url);
          
              if (article.excerpt && article.excerpt.length) {
                articleLink.setAttribute('title', article.excerpt);
              }
          

              
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
          

            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      for(let i=1;i<100;i++){
        this.collection.push(`angular`)
      }
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  

  
  showModal = true;

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'app-article-list3',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleComponent3 implements OnInit {

 
  ngOnInit() {};


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      return (fetch(`${apiUrl}/query`, {
        method: 'POST',
        headers: {
          'x-key': apiKey
        },
        body: JSON.stringify({
          query: 'Luxury',
          attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
          page: 4,
          hitsPerPage: 14,
          filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
        })
      })
    )};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 1
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;

            console.log(news)

            var nbArticlesEl = document.getElementById('nbArticles');
            
            for (let article of news.hits) {

              var articleEl = document.createElement('li');
              var articleLink = document.createElement('a');
          
              articleLink.setAttribute('href', article.url);
          
              if (article.excerpt && article.excerpt.length) {
                articleLink.setAttribute('title', article.excerpt);
              }
          

              
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
          

            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      for(let i=1;i<100;i++){
        this.collection.push(`angular`)
      }
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  

  
  showModal = true;

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'app-article-list4',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleComponent4 implements OnInit {

 
  ngOnInit() {};


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      return (fetch(`${apiUrl}/query`, {
        method: 'POST',
        headers: {
          'x-key': apiKey
        },
        body: JSON.stringify({
          query: 'Luxury',
          attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
          page: 5,
          hitsPerPage: 14,
          filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
        })
      })
    )};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 1
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;

            console.log(news)

            var nbArticlesEl = document.getElementById('nbArticles');
            
            for (let article of news.hits) {

              var articleEl = document.createElement('li');
              var articleLink = document.createElement('a');
          
              articleLink.setAttribute('href', article.url);
          
              if (article.excerpt && article.excerpt.length) {
                articleLink.setAttribute('title', article.excerpt);
              }
          

              
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
          

            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      for(let i=1;i<100;i++){
        this.collection.push(`angular`)
      }
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  

  
  showModal = true;

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'app-article-list5',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleComponent5 implements OnInit {

 
  ngOnInit() {};


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      return (fetch(`${apiUrl}/query`, {
        method: 'POST',
        headers: {
          'x-key': apiKey
        },
        body: JSON.stringify({
          query: 'Luxury',
          attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
          page: 6,
          hitsPerPage: 14,
          filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
        })
      })
    )};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 1
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;

            console.log(news)

            var nbArticlesEl = document.getElementById('nbArticles');
            
            for (let article of news.hits) {

              var articleEl = document.createElement('li');
              var articleLink = document.createElement('a');
          
              articleLink.setAttribute('href', article.url);
          
              if (article.excerpt && article.excerpt.length) {
                articleLink.setAttribute('title', article.excerpt);
              }
          

              
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
          

            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      for(let i=1;i<100;i++){
        this.collection.push(`angular`)
      }
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  

  
  showModal = true;

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleComponent6 implements OnInit {

 
  ngOnInit() {};


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      return (fetch(`${apiUrl}/query`, {
        method: 'POST',
        headers: {
          'x-key': apiKey
        },
        body: JSON.stringify({
          query: 'Luxury',
          attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
          page: 7,
          hitsPerPage: 14,
          filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
        })
      })
    )};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 1
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;

            console.log(news)

            var nbArticlesEl = document.getElementById('nbArticles');
            
            for (let article of news.hits) {

              var articleEl = document.createElement('li');
              var articleLink = document.createElement('a');
          
              articleLink.setAttribute('href', article.url);
          
              if (article.excerpt && article.excerpt.length) {
                articleLink.setAttribute('title', article.excerpt);
              }
          

              
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
          

            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      for(let i=1;i<100;i++){
        this.collection.push(`angular`)
      }
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  

  
  showModal = true;

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}