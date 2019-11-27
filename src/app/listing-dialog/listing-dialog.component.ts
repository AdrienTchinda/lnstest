import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// Component de la modale du premier article de la page actuelle
@Component({
    selector: 'listing-dialog',
    // Code HTML de la modale
    template: `
<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
    <div class="modal d-block fade" 
      [ngClass]="{ show: showModal }"
      (click)="onClose()"
      id="listing-dialog12" 
      tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
        <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
            <div class="modal-content">
                <div class="modal-header">
                <h5 id="name0"></h5>
                    <button type="button"
                        class="close"
                        (click)="onClose()"
                        aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <br />
                  <div id="text0"></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent implements OnInit{
  
  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    // Fonction de requête API de type POST
    const getArticleInfo = () => {
      // j prend comme valeur les numéros des pages de 1 à 7..
      for(var j=1;j<8; j++) {
        // si l'url de la page contient "list/j" alors, faire une requête POST de la page numéro j de la base de données
        if (window.location.href.indexOf(`list/${j}`) > -1) {
          return (fetch(`${apiUrl}/query`, {
            method: 'POST',
            headers: {
              'x-key': apiKey
            },
            body: JSON.stringify({
              query: 'Luxury',
              attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
              page: j,
              hitsPerPage: 14,
              filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
            })
          })
          )
      }}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            // Pour chaque article de l'array d'objets news.hits, attribuer ces valeurs aux attributs
            for (let article of news.hits) {
  
              document.getElementById(`name0`).innerText = article.name;
              document.getElementById(`preview0`).setAttribute('src', article.previewImage);
              document.getElementById(`domain0`).innerText = article.domain;
              document.getElementById(`text0`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    // n va prendre comme valeur les numéros des pages 1 à 7 et..
    for(var n=1;n<8; n++) {
      //.. si l'url de la page actuelle continent au moins "list/n" alors se rediriger vers le segment parent lors de la fermeture de la modale
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

// Le code suivant est le même que le précédent et concerne les autres modales d'une page

@Component({
  selector: 'listing-dialog1',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog1"
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <br />
                <input type ="hidden" id="text0">
                <div id="text1"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent1 implements OnInit{


  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1

            console.log(i)
      
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
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog2',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog2" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <br />
                <input type ="hidden" id="text0">
                <input type ="hidden" id="text1">
                <input type ="hidden" id="text2">
                <div id="text3"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent2 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 1
            var k = 1
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }


}

@Component({
  selector: 'listing-dialog3',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog3" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <br />
                <input type ="hidden" id="text0">
                <input type ="hidden" id="text1">
                <input type ="hidden" id="text2">
                <div id="text3"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent3 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog4',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog4" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <div id="text4"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent4 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };

      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog5',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog5" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <div id="text5"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent5 implements OnInit{

  collection =[];

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }


}

@Component({
  selector: 'listing-dialog6',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog6" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <div id="text6"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent6 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog7',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog7" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <br />
                <input type ="hidden" id="text0">
                <input type ="hidden" id="text1">
                <input type ="hidden" id="text2">
                <input type ="hidden" id="text3">
                <input type ="hidden" id="text4">
                <input type ="hidden" id="text5">
                <input type ="hidden" id="text6">
                <div id="text7"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent7 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };

      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog8',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog8" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <input type ="hidden" id="text6">
              <input type ="hidden" id="text7">
              <div id="text8"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent8 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog9',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog9" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <input type ="hidden" id="text6">
              <input type ="hidden" id="text7">
              <input type ="hidden" id="text8">
              <div id="text9"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent9 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog10',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog10" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <input type ="hidden" id="text6">
              <input type ="hidden" id="text7">
              <input type ="hidden" id="text8">
              <input type ="hidden" id="text9">
              <div id="text10"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],  
})

export class ListingDialogComponent10 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog11',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog11" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <input type ="hidden" id="text6">
              <input type ="hidden" id="text7">
              <input type ="hidden" id="text8">
              <input type ="hidden" id="text9">
              <input type ="hidden" id="text10">
              <div id="text11"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent11 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };

      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog12',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog12" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <input type ="hidden" id="text6">
              <input type ="hidden" id="text7">
              <input type ="hidden" id="text8">
              <input type ="hidden" id="text9">
              <input type ="hidden" id="text10">
              <input type ="hidden" id="text11">
              <div id="text12"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent12 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }
}

@Component({
  selector: 'listing-dialog13',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog13" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <input type ="hidden" id="text6">
              <input type ="hidden" id="text7">
              <input type ="hidden" id="text8">
              <input type ="hidden" id="text9">
              <input type ="hidden" id="text10">
              <input type ="hidden" id="text11">
              <input type ="hidden" id="text12">
              <div id="text13"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent13 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };
      
      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}

@Component({
  selector: 'listing-dialog14',
  template: `<div class="modal-body">
  <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
  <div class="modal d-block fade" 
    [ngClass]="{ show: showModal }"
    (click)="onClose()"
    id="listing-dialog14" 
    tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
      <div class="modal-dialog modal-lg" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button"
                      class="close"
                      (click)="onClose()"
                      aria-label="Close"><span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
              <br />
              <input type ="hidden" id="text0">
              <input type ="hidden" id="text1">
              <input type ="hidden" id="text2">
              <input type ="hidden" id="text3">
              <input type ="hidden" id="text4">
              <input type ="hidden" id="text5">
              <input type ="hidden" id="text6">
              <input type ="hidden" id="text7">
              <input type ="hidden" id="text8">
              <input type ="hidden" id="text9">
              <input type ="hidden" id="text10">
              <input type ="hidden" id="text11">
              <input type ="hidden" id="text12">
              <input type ="hidden" id="text13">
              <div id="text14"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="onClose()">Close</button>
              </div>
          </div>
        </div>
      </div>
  </div>
  <router-outlet></router-outlet>
`,
  styleUrls: [ './listing-dialog.component.css' ],
})

export class ListingDialogComponent14 implements OnInit{

  constructor(private router: Router) {
    var apiUrl = 'https://butler.luxurynsight.net/1/indexes/news';
    var apiKey = '5dca84fc75a4dbe295d75470';
    var k = 0;
    
    const getArticleInfo = () => {
      for(var j=1;j<8; j++) {
        if (window.location.href.indexOf(`list/${j}`) > -1) {
        return (fetch(`${apiUrl}/query`, {
          method: 'POST',
          headers: {
            'x-key': apiKey
          },
          body: JSON.stringify({
            query: 'Luxury',
            attributesToRetrieve: ['name', 'url', 'domain', 'excerpt', 'text', 'previewImage', 'releasedAt', '_tags'],
            page: j,
            hitsPerPage: 14,
            filters: '_tags.name:"Uniqlo" AND domain:"wwd.com"'
          })
        })
      )}}};
    
      const main = async () => {
      
        try {
            var i = 0
            var k = 0
            var request = await getArticleInfo();
            var nbArticlesEl = document.getElementById('nbArticles');
            var news = await request.json();
            nbArticlesEl.innerText = `Page ${news.page} of ${news.nbPages} — ${news.nbHits} articles.`;
  
            console.log(news)
  
            
            for (let article of news.hits) {
  
              document.getElementById(`name${i}`).innerText = article.name;
              document.getElementById(`preview${i}`).setAttribute('src', article.previewImage);
              document.getElementById(`domain${i}`).innerText = article.domain;
              document.getElementById(`text${i}`).innerHTML = article.text;
  
            i = i + 1
            k = k + 1
      
        }}
        catch (error) {
            console.error(error);
        }
      
      };

      main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));
    
  }  
  
  showModal = true;
  ngOnInit() {
    this.showModal = true;
  }
  // Fonction de cloture de la modale
  onClose() {
    this.showModal = false;
    for(var n=1;n<8; n++) {
      if (window.location.href.indexOf(`list/${n}`) > -1) {
        console.log(n)
        this.router.navigate([`list/${n}`])
    }}}
  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }

}