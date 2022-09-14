let url = "https://zoo-animal-api.herokuapp.com/animals/rand";
let wild = document.getElementById("wild");

fetch(url)
  .then((res) => res.json())
  //Method:GET
  .then((data) => {
    let wt = data.weight_max * 0.454;
    let weight = wt.toFixed(2);
    let input = `<div class="wild-header">Online Zoo</div>
    <div class="wild-img">
        <img src="${data.image_link}" alt="" id="img" />
      </div>
      <div class="wild-info">
        <div class="wild-title">
          <h2>${data.name}</h2>
        </div>
        <div class="wild-date">
          <span>Habitat => <b>${data.habitat}</b></span><br>
          <span>Geo-Range => <b>${data.geo_range}</b></span>
        </div>
        <div class="wild-desc">
          <p class="wild-text">
            this <b>${data.animal_type}</b> can grow upto <b>${data.length_max} feet</b> and weigh around <b>${weight} kg</b>,
            usually lives around <b>${data.lifespan} years.</b>
            Eats for living <b>=> ${data.diet}.</b>
          </p>
        </div>
        <div class="wild-more"><button id="btn" onClick="window.location.reload();">Safari</button></div>
      </div>`;
    wild.innerHTML = input;
  })
  .catch((err) => console.log(err));//return error if something wrong with getting data
  
    
