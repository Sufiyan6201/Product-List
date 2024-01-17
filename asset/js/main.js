$(document).ready(function () {
  $("p").hover(function () {
    $(this).siblings('h4').toggle('strike');
    $(this).siblings("span").toggle();
  });
});
var products = [

  { img: "asset/images/1.avif", name: "Formal-Shirt", dise: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dignissimos?", price: "$234", offer: "$200", Limited: "Limited Time Offer" },
  { img: "asset/images/2.avif", name: "Blazer-Gray", dise: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dignissimos?", price: "$290", offer: "$250", Limited: "Limited Time Offer" },
  { img: "asset/images/3.jpg", name: "Formal", dise: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dignissimos?", price: "$304", offer: "$260", Limited: "Limited Time Offer" },
  { img: "asset/images/4.avif", name: "Texito-Blazer", dise: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dignissimos?", price: "$400", offer: "$290", Limited: "Limited Time Offer" },
  { img: "asset/images/5.avif", name: "Casual-Blazer", dise: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dignissimos?", price: "$240", offer: "$150", Limited: "Limited Time Offer" },
  { img: "asset/images/6.avif", name: "Checks-Blazer", dise: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dignissimos?", price: "$240", offer: "$150", Limited: "Limited Time Offer" }
]

var productHtml = "";
products.forEach((products) => {
  productHtml += ` <div class="col-md-2 text-center ">
                <div class="card">
                <div class="cards">
                    <div class="overflow-hidden">
                        <img src="${products.img}" class="pr object-fit-cover" height="300px"alt="">
                    </div>
                    <h3>${products.name} </h3>
                    <p class="text-secondary fs-5">${products.dise}</p>
                    <h4 class="text-success   ">${products.price}</h4>
                     <span class="text-danger fs-4 fw-bold  ">${products.offer}}</span><span class="offer text-bg-danger ">${products.Limited}</span>
                </div>
            </div>
        </div>`
});

document.getElementById('cadr-list').innerHTML = productHtml;