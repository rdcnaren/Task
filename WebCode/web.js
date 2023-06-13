let book = async ()=>{
    try{
        let url = "https://www.anapioficeandfire.com/api/books";
        let res = await fetch(
            url,
            { method: "GET" }
        )
        let data = await res.json();
        let characters = []; 
    
        for (let i of data) {
            let bkname = i.name;
            let bkisbn = i.isbn;
            let bknop = i.numberOfPages;
            let bkAuthor = i.authors[0];
            let bkPublisher = i.publisher;
            let bkReleaseDate = i.released;

            let j = 0
            let k = 5
            while (j<k) {
            let charurl = i.characters[j];
            j++

            let res1 = await fetch(
                charurl,
                { method: "GET" }
            )
            let data1 = await res1.json();
            let result = data1.name;
            if (result !== ""){ characters.push(result) }
            else (k++);
            }

            let resultEl = document.getElementById('books')
            let result = `<div class="card mb-3" id='card'>
                            <div class="row g-0" id='cardBox'>
                                <div class="col-md-4" id='cardImage'>
                                    <div class="imageSpace"> </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body" id='cardBody'>
                                        <h5 class="card-title" id="bookTitle"><span class='cBHeading'>Book Title : <span class='cBContent'>${bkname}.</h5>
                                        <p class="card-text"> <span class='cBHeading'>isbn :</span> <span class='cBContent'>${bkisbn}.</span></p>
                                        <p class="card-text"> <span class='cBHeading'>Author Name : </span> <span class='cBContent'>${bkAuthor}.</p>
                                        <p class="card-text"> <span class='cBHeading'>Publisher Name : </span> <span class='cBContent'>${bkPublisher}.</p>
                                        <p class="card-text"> <span class='cBHeading'>Release Date : </span> <span class='cBContent'>${bkReleaseDate}.</p>
                                        <p class="card-text"> <span class='cBHeading'>Characters : </span> <span class='cBContent'>${characters}.</p>
                                        <p class="card-text"> <span class='cBHeading'><small class="text-muted"> Number of Pages : </span> <span class='cBContent'>${bknop}.</small></p>
                                    </div>  
                                </div>
                                <div id=buttonSpace>
                                <button type="button" class="btn btn-warning" id ="btn">Add to Cart</button>
                                <button type="button" class="btn btn-danger" id ="btn">Buy Now</button>
                                </div>
                            </div>
                        </div>`

            resultEl.innerHTML += result
            characters = [];
        }
    }
    catch(err){
        console.log(err);
    }
}

book();

let navBarEl = document.getElementById('navbar');
let menuListEl = document.getElementById('menuList');

navBarEl.style.maxHeight = "3em"

    function togglemenu () {
        if (navBarEl.style.maxHeight == "3em") {
            navBarEl.style.maxHeight = "16.5em";
        }
        else { 
            navBarEl.style.maxHeight = "3em"
            menuListEl = "";
        }}