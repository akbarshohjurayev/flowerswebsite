let http = new XMLHttpRequest();

http.open('get','products.json', true);

http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = '';
        for(let item of products){
            output +=
            `<div class="product">
            <img src="${item.image}" alt="">
            <p class="title">${item.title}</p>
            <p class="price">
                <span>${item.price}</span>
                <span>$</span>
            </p>
            <p class="cart">Add to cart</p>
        </div>`
        }
        document.querySelector('#products').innerHTML = output;
    }
}

let a;

let products=document.getElementById("products")

fetch('./products.json')
    .then((response) => response.json())
    .then((json) => json.forEach(element => {

products.innerHTML+=`<div class="product">
<img src="${element.image}" alt="">
<p class="title">${element.title}</p>
<p class="description">${element.description}</p>
<p class="price">
    <span>${element.price}</span>
    <span>$</span>
</p>
<p class="cart">Add to cart</p>
</div>>`
      element.image
    }));


// let list = document.getElementById('list');
// let filter = document.querySelector('.filter');
// let count = document.getElementById('count');
// let listProducts = [
//     {
//         id: 1,
//         name: 'лучший день',
//         price: 50,
//         buttonText: "В корзину",
//         image: './ImagesOfFin/F1.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Альстромерия'],
//         }
//     },
//     {
//         id: 2,
//         name: 'лучший день',
//         price: 150,
//         buttonText: "В корзину",
//         image: './ImagesOfFin/F2.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Антуриум'],
//         }
//     },
//     {
//         id: 3,
//         name: 'лучший день',
//         price: 120,
//         buttonText: "В корзину",
//         image: './ImagesOfFin/F3.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Аспарагус'],
//         }
//     },
//     {
//         id: 4,
//         name: 'лучший день',
//         price: 330,
//         buttonText: "В корзину",
//         priceAdditive: "187.000 ₽",
//         image: './ImagesOfFin/F4.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Астильба'],
//         }
//     },
//     {
//         id: 5,
//         name: 'лучший день',
//         price: 370,
//         buttonText: "В корзину",
//         image: './ImagesOfFin/F5.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Астранция'],
//         }
//     },
//     {
//         id: 6,
//         name: 'лучший день',
//         price: 350,
//         buttonText: "В корзину",
//         priceAdditive: "187.000 ₽",
//         image: './ImagesOfFin/F6.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Альстромерия'],
//         }
//     },
//     {
//         id: 7,
//         name: 'лучший день',
//         price: 400,
//         buttonText: "В корзину",
//         image: './ImagesOfFin/F7.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Антуриум'],
//         }
//     },
//     {
//         id: 8,
//         price: 190,
//         buttonText: "В корзину",
//         name: 'лучший день',
//         image: './ImagesOfFin/F8.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Аспарагус'],
//         }
//     },
//     {
//         id: 9,
//         price: 170,
//         buttonText: "В корзину",
//         priceAdditive: "187.000 ₽",
//         name: 'лучший день',
//         image: './ImagesOfFin/F9.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Астильба'],
//         }
//     },
//     {
//         id: 10,
//         name: 'лучший день',
//         price: 200,
//         buttonText: "В корзину",
//         image: './ImagesOfFin/F10.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Астранция'],
//         }
//     },
//     {
//         id: 11,
//         name: 'лучший день',
//         price: 250,
//         buttonText: "В корзину",
//         priceAdditive: "187.000 ₽",
//         image: './ImagesOfFin/F11.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Альстромерия'],
//         }
//     },
//     {
//         id: 12,
//         name: 'лучший день',
//         price: 300,
//         buttonText: "В корзину",
//         image: './ImagesOfFin/F12.PNG',
//         nature: {
//             tsvet: ['желтый'],
//             tsveta: ['Антуриум'],
//         }
//     },
// ];
// let productFilter = listProducts;
// showProduct(productFilter);
// function showProduct(productFilter) {
//     // count.innerText = productFilter.length;
//     list.innerHTML = '';
//     productFilter.forEach(item => {
//         let newItem = document.createElement('div');
//         newItem.classList.add('items');


//         //create image
//         let newImage = new Image();
//         newImage.src = item.image;
//         newItem.appendChild(newImage);

//         ///create name product
//         let newTitle = document.createElement('div');
//         newTitle.classList.add('title');
//         newTitle.innerText = item.name;
//         newItem.appendChild(newTitle);

//         //create price
//         let newPrice = document.createElement('div');
//         newPrice.classList.add('price')
//         newPrice.innerText = item.price.toLocaleString() + "$";
//         newItem.appendChild(newPrice);

//         let newButton = document.createElement('button');
//         newButton.classList.add('buttonText')
//         newButton.innerText = item.buttonText;
//         newItem.appendChild(newButton)



//         list.appendChild(newItem);
//     });
// };


// filter.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let valueFilter = event.target.elements;
//     productFilter = listProducts.filter(item => {


//         //check color
//         if (valueFilter.tsvet.value != '') {
//             if (!item.nature.tsvet.includes(valueFilter.tsvet.value)) {
//                 return false;
//             }
//         }

//         ///check tsvetko
//         if (valueFilter.tsvetko.value != '') {
//             if (!item.nature.tsveta.includes(valueFilter.tsvetko.value)) {
//                 return false;
//             }
//         }

//         // check min price
//         if (valueFilter.minPrice.value != '') {
//             if (item.price < valueFilter.minPrice.value) {
//                 return false;
//             }
//         }
//         return true;
//     })

//     showProduct(productFilter);
// })

// //// ////

// // Le Color thief ici commence
// function getAverageColor(imageElement, ratio) {
//     const canvas = document.createElement("canvas")

//     let height = canvas.height = imageElement.naturalHeight
//     let width = canvas.width = imageElement.naturalWidth

//     const context = canvas.getContext("2d")
//     context.drawImage(imageElement, 0, 0)

//     let data, length
//     let i = -4, count = 0

//     try {
//         data = context.getImageData(0, 0, width, height)
//         length = data.data.length
//     } catch (err) {
//         console.log(err);
//         return {
//             R: 0,
//             G: 0,
//             B: 0
//         }
//     }

//     let R, G, B
//     R = G = B = 0

//     while ((i += ratio * 4) < length) {
//         ++count

//         R += data.data[i]
//         G += data.data[i + 1]
//         B += data.data[i + 2]
//     }

//     R = (R / count)
//     G = (G / count)
//     B = (B / count)

//     return {
//         R,
//         G,
//         B
//     }
// }

// const image = document.querySelector("img")
// image.onload = () => {
//     const { R, G, B } = getAverageColor(image, 4)

//     document.body.style.background = `rgb(${R}, ${G}, ${B})`
// }

// ///Le Color thief ici est fini

// ///Getting the value of checked or selected checkboxes.

// let button = document.getElementsByClassName("F1");
// let checkbox = document.getElementsByClassName("checkbox_value")

// // button.addEventListener("click", () => {

// // })


// console.log(button);
// filter.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let valueFilter = event.target.elements;
//     productFilter = listProducts.filter(item => {


//         //check color
//         if (valueFilter.tsvet.value != '') {
//             if (!item.nature.tsvet.includes(valueFilter.tsvet.value)) {
//                 return false;
//             }
//         }

//         ///check tsvetko
//         if (valueFilter.tsvetko.value != '') {
//             if (!item.nature.tsveta.includes(valueFilter.tsvetko.value)) {
//                 return false;
//             }
//         }

//         // check min price
//         if (valueFilter.minPrice.value != '') {
//             if (item.price < valueFilter.minPrice.value) {
//                 return false;
//             }
//         }
//         return true;
//     })

//     showProduct(productFilter);
// })
// let div = document.createElement('div')
// div.className = "item"
// let inp = document.createElement('input')
// inp.setAttribute('type', 'range')
// let div2 = document.createElement('div')
// div2.className = 'item_com'
// div2.append(inp)
// div.append(div2)
// filter.append(div)