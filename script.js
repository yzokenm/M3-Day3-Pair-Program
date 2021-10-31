const loadUser = () =>{
  fetch("https://api.pexels.com/v1/search?query=Ocean", {
  "method": "GET",
  "headers": {
      Authorization: "563492ad6f91700001000001c5e5fe28a8174b6f8963eb819ccabd92"
  }
})
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    console.log(data.photos);
    // ${element.src.small}
    let getBody = document.querySelector(".album .row")
    const allImage = data.photos.map(element =>
      `

        <div class="card col-12 col-md-4 col-lg-3 my-3 mx-3 shadow-sm">
        <img src="${element.src.small}" class="card-img-top img-fluid w-100">
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="hide-btn btn btn-sm btn-outline-success"
                >
                  Hide
                </button>
                <button
                  type="button"
                  class="btn-select btn btn-sm btn-outline-success"
                >
                  Select
                </button>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </div>
              <small class="text-muted">${element.id}</small>
            </div>


          </div>
        </div>




      `)

      getBody.innerHTML = allImage
      const getBtns = getBody.querySelectorAll(".hide-btn")
      for(let i = 0; i < getBtns.length; i++){
        const currentBtn1 = getBtns[i]
        currentBtn1.onclick = function (event) {
          event.currentTarget.closest(".card").remove();

        };
      }
      const getSelectedBtn = getBody.querySelectorAll(".btn-select")
      for(let i = 0; i < getSelectedBtn.length; i++){
        const currentBtn2 = getSelectedBtn[i]
        currentBtn2.onclick = function (event) {
          event.currentTarget.closest(".card").classList.add("bg-secondary");

        };
      }
    console.log(allImage);
  })
}
