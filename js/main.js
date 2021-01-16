const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
let resultsHTML = '';

searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const q = searchInput.value;
    search(q)
})

function search(q) {
    const apiKey = "9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO"
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=10`

 //---------------------Error Handling------------------------------//
   

 //---------------Fetching and Converting Data----------------------//
    fetch(path).then(function(res) {  
       return res.json()
    }).then(function(json) {
       // console.log(json.data[0].images.fixed_width.url)
        
        

        json.data.forEach(function(obj) {
            //console.log(obj);

            const url =  obj.images.fixed_width.url;
            const alt = obj.title;

            resultsHTML += `<img src="${url}"  
                             alt="${alt}"
                             width="auto"
                             height="100px"
                             >`
        })

        resultsEl.innerHTML = resultsHTML
    }).catch(function(err) {
        console.log(err.message)
        
    });
}