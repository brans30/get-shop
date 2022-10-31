//api

async function fetchData() {
  let cont = document.querySelector('.cont')

  // جرب دي الصح
  fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then((products) => {
      products.forEach((pro) => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let p1 = document.createElement('p')
        p.textContent = pro.title
        p1.textContent = 'price:' + pro.price
        img.src = pro.image
        div.append(img)
        div.append(p)
        div.append(p1)
        cont.append(div)
      })
    })

  // ارمي دي في الزبالة
  //   let data = await fetch('https://fakestoreapi.com/products')
  //   let data1 = await data.json()
  //   console.log(data1)
  //   for (let i = 0; i <= data1.length; i++) {
  //     let div = document.createElement('div')
  //     let img = document.createElement('img')
  //     img.setAttribute('src', data1[i].image)
  //     let p = document.createElement('p')
  //     let p1 = document.createElement('p')
  //     p.textContent = data1[i].title
  //     p1.textContent = 'price:' + data1[i].price

  //     div.append(img)
  //     div.append(p)
  //     div.append(p1)
  //     cont.append(div)
  //   }
}

// هنا بتقوله لما الموقع يحمل ابدأ الفنكشن
window.addEventListener('load', () => {
  fetchData()
})

// ارمي في الزبالة
// let navbottom = document.querySelector('.nav-section-botom')
// let ul = document.querySelectorAll('.menu ul ')
// let menu = document.querySelectorAll('.menu li')
// let sheet = document.querySelector('.sheet')

// menu.forEach(function (ele) {
//   ele.onmouseover = function () {
//     ul.forEach(function (ele) {
//       ele.classList.remove('active')
//     })

//     if (this.children[0].classList.contains('sheet') === true) {
//       this.children[0].classList.add('active')
//     }
//   }
// })
