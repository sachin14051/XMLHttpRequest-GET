let cl = console.log;
const info = document.getElementById("info")

let baseUrl = `https://jsonplaceholder.typicode.com/photos`


function makeApiCall(method, url) {
  let xhr = new XMLHttpRequest();

  xhr.open(method, url, true);

  xhr.onload = function album() {
    if (xhr.status === 200 || xhr.status === 201) {
      //cl(xhr.response)
      let data = JSON.parse(xhr.response);
      templating(data)
    } else if (xhr.status === 404) {
      alert(`URL not Found`)
    }

  }

  xhr.send()
}

makeApiCall("GET", baseUrl)


const templating = (arr) => {
  let result = ' ';
  arr.forEach(e => {
    result += `  <div class="col-md-4 mt-4" >
                    <div class="card" >
                    <div class="card-header bg-primary text-white">
                        <p>${e.title}</p>
                    </div>
                    <div class="card-body">
                    <img  class="img-fluid" src="${e.url}" alt="${e.title}">
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <span>
                          id : ${e.id}
                        </span>
                        <span>
                         user id : ${e.albumId}
                        </span>
                    </div>
                    </div>
                    </div>
    
    
    `
  })
  info.innerHTML = result;
}