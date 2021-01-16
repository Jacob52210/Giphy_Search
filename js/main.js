const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl_pg_13 = document.getElementById('results-pg-13');
const resultsEl_g = document.getElementById('results-g');


searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const q = searchInput.value;
    search(q)
})

function search(q) {
    const apiKey = "9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO"
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=20`

 //--------------- Fetching and Converting Data ----------------------//
    fetch(path).then(function(res) {  
       return res.json()
    }).then(function(json) {
        //console.log(json.data[0].images.fixed_width.url)
        let resultsHTML = '';
        let resultsHTML_pg_13 = '';
        
        json.data.forEach(function(obj) {
            //console.log(obj);
            const rating = obj.rating;
            const imgsrc =  obj.images.fixed_width.url;
            const alt = obj.title;
            const url = obj.source_post_url

            if (rating === "g"){
                resultsEl_g.innerHTML = resultsHTML;
                resultsHTML += `<div class="gif-container">
                              <a href="${url}"><img src="${imgsrc}"  
                               alt="${alt}"
                               width="auto"
                               height="100px"
                             ></a>
                             <figcaption>${rating}</figcaption>
                             </div>`
                //console.log(rating);
            } if (rating === "pg-13"){
                resultsEl_pg_13.innerHTML = resultsHTML_pg_13;
                resultsHTML_pg_13 += `<div class="gif-container">
                              <a href="${url}"><img src="${imgsrc}"  
                               alt="${alt}"
                               width="auto"
                               height="100px"
                             ></a>
                             <figcaption>${rating}</figcaption>
                             </div>`
                console.log(rating);
            }

            
        })
        
    }).catch(function(err) {
        console.log(err.message) 
    });
}