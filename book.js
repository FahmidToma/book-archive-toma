
//getting search text using arrow function
const searchBook = () =>{
    const searchBoi = document.getElementById('search-field');
    const searchText = searchBoi.value;
    console.log(searchText);

    searchBoi.value = '';

    //making the search url dynamic
    const searchUrl = `https://openlibrary.org/search.json?q=${searchText}`;
    //getting search result
    fetch(searchUrl)
    .then(response => response.json())
    .then(books => displayBookResult(books.docs));
}

//function to display the searched books result
const displayBookResult = books => {

    // using loop with triple equal for bonus

    if(books.length === 0){

      //creating div for NO Result Found

      const countSearchResult = document.getElementById('count-search');
      countSearchResult.textContent = '';
    const divForCount = document.createElement('div');
    divForCount.classList.add('text-center');
    divForCount.innerHTML= `<p class="text-center"><strong>No result found !!!</p>`
    countSearchResult.appendChild(divForCount);

    }

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

        // creating div to display result
        const divForBook = document.createElement('div');
        divForBook.classList.add('col');
        divForBook.innerHTML = `<div class="col">
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${book.subject}</h5>
            <p class="card-text"><strong>Author name: </strong>${book.author_name}</p>
            <p class="card-text"><strong>First published: </strong>${book.publish_date}</p>
            <p class="card-text"><strong>Publisher: </strong>${book.publisher}</p>
          </div>
        </div>
      </div>
        `;
        searchedResult.appendChild(divForBook);
       
    })
    }
    
}
