
//getting search text using arrow function
const searchBook = () =>{
    const searchBoi = document.getElementById('search-field');
    const searchText = searchBoi.value;

    searchBoi.value = '';

    //making the search url dynamic
    const searchUrl = `https://openlibrary.org/search.json?q=${searchText}`;
    
    //getting search result
    fetch(searchUrl)
    .then(response => response.json())
    .then(books => displaySearchedBookResult(books.docs));
}

//function to display the searched books result
const displaySearchedBookResult = books => {

    // using loop with triple equal for bonus
    if(books.length === 0){

      //creating div for NO Result Found
      const countSearchResult = document.getElementById('count-search');
      countSearchResult.textContent = '';
    const divForCount = document.createElement('div');
    divForCount.classList.add('text-center');
    divForCount.innerHTML= `<p class="text-center text-danger"><strong>No result found !!!</strong></p>`
    countSearchResult.appendChild(divForCount);

    }
    // if any result is found
    else
    {
      const countSearchResult = document.getElementById('count-search');
      countSearchResult.textContent = '';

      //creating div to show count of the result
    const divForCount = document.createElement('div');
    divForCount.classList.add('text-center');
    divForCount.innerHTML= `<p class="text-center"><strong>Total result found: </strong>${books.length}</p>`
    countSearchResult.appendChild(divForCount);

     const searchedResult=document.getElementById('search-result');
     searchedResult.textContent = '';

     //arrow function and forEach function for bonus
     
    books.forEach(book => {

    const firstPublish = book.publish_date;
    const firstPublisher = book.publisher;
      // condition for undefined First publised & publisher
    if(firstPublish === undefined && firstPublisher !== undefined){
    
      const divForBook = document.createElement('div');
        divForBook.classList.add('col');
        divForBook.innerHTML = `<div class="col">
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top book-cover" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>Name: </strong>${book.title}</h5>
            <p class="card-text"><strong>Author name: </strong>${book.author_name}</p>
            <p class="card-text"><strong>First published: </strong>${book.publish_date}</p>
            <p class="card-text"><strong>Publisher: </strong>${book.publisher[0]}</p>
          </div>
        </div>
      </div>
        `;
        searchedResult.appendChild(divForBook);
      }

    else if(firstPublisher !== undefined && firstPublisher === undefined){

      const divForBook = document.createElement('div');
        divForBook.classList.add('col');
        divForBook.innerHTML = `<div class="col">
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>Name: </strong>${book.title}</h5>
            <p class="card-text"><strong>Author name: </strong>${book.author_name}</p>
            <p class="card-text"><strong>First published: </strong>${book.publish_date[0]}</p>
            <p class="card-text"><strong>Publisher: </strong>${book.publisher}</p>
          </div>
        </div>
      </div>
        `;
        searchedResult.appendChild(divForBook);
    }
    else if(firstPublisher === undefined && firstPublisher === undefined){
      const divForBook = document.createElement('div');
        divForBook.classList.add('col');
        divForBook.innerHTML = `<div class="col">
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>Name: </strong>${book.title}</h5>
            <p class="card-text"><strong>Author name: </strong>${book.author_name}</p>
            <p class="card-text"><strong>First published: </strong>${book.publish_date}</p>
            <p class="card-text"><strong>Publisher: </strong>${book.publisher}</p>
          </div>
        </div>
      </div>
        `;
        searchedResult.appendChild(divForBook);
    }
    else if(firstPublisher !== undefined && firstPublisher !== undefined){
      const divForBook = document.createElement('div');
        divForBook.classList.add('col');
        divForBook.innerHTML = `<div class="col">
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>Name: </strong>${book.title}</h5>
            <p class="card-text"><strong>Author name: </strong>${book.author_name}</p>
            <p class="card-text"><strong>First published: </strong>${book.publish_date[0]}</p>
            <p class="card-text"><strong>Publisher: </strong>${book.publisher[0]}</p>
          </div>
        </div>
      </div>
        `;
        searchedResult.appendChild(divForBook);
    }

    })
    }  
}
