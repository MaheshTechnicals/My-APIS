let ad1 = document.querySelector("#ad1")
let ad2 = document.querySelector("#ad2")
let city = document.querySelector("#city")
let state = document.querySelector("#state")
let phone = document.querySelector("#phone")
let zip = document.querySelector("#zip")
let btn = document.querySelector("#btn")
let data = document.querySelectorAll(".data")
let copy1 = document.querySelector(".copy1")
let name = document.querySelector("#name")


/* USA Adress gen*/
let generate = () => {
  fetch("USA.json")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      let all = data[Math.floor(Math.random() * 20)]
      ad1.innerHTML = all.Address1.toString().toLowerCase()
      ad2.innerHTML = all.Address2.toString().toLowerCase()
      city.innerHTML = all.City.toString().toLowerCase()
      state.innerHTML = all.State.toString().toLowerCase() + " " + "(" + all.Short + ")"
      phone.innerHTML = all.Phone
      zip.innerHTML = all.Zip

    })
}
nameGen()
generate()


/* Gebrate button on click */
btn.addEventListener("click", () => {
  nameGen()
  generate()
})


/*Adress Data insert*/
Array.from(data).forEach((one) => {
  one.addEventListener("click", (e) => {
    let copy = e.currentTarget.innerHTML
    let cdata = navigator.clipboard.writeText(copy)
    e.target.style.background = "#38CC77"
    copy1.style.display = "block"
    setTimeout(() => {
      copy1.style.display = "none"
      e.target.style.background = "#207398"
    }, 1500)
  })
})


/* USA name gen*/
function nameGen() {
  fetch("https://raw.githubusercontent.com/thm/uinames/master/names.json")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const m = data[57].male[Math.floor(Math.random() * 100)]
      const f = data[57].female[Math.floor(Math.random() * 100)]
      const s = data[57].surnames[Math.floor(Math.random() * 300)]
      const mx = m + " " + s;
      const fx = f + " " + s;
      const arr = [mx, fx]
      const fullName = arr[Math.floor(Math.random() * 2)]
      name.innerHTML = fullName;
    })
}