const html = require('yo-yo')

module.exports = Foods

function Foods(foods, dispatch) {
  return html`
    <div class="foods">
      ${foods.map((food)=>{
        return html`
          <div class="food">
            <h2>${food.name}</h2>
            <h3>${food.flavour}</h3>
            <p>${food.rating}</p>
            <button type="button" class="btn btn-danger" onclick="${voteActionMaker()}">

            </button>
          </div>
        `
      })}
    </div>`
}
