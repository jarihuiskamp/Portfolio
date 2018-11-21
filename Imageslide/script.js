const myImage = document.getElementById('myImage');
const thumbnailHolder = document.getElementById('thumbnailHolder');

var image_names = ["image_1.jpg",
  "image_2.jpg",
  "image_3.jpg",
  "image_4.jpg",
  "image_5.jpg",
  "image_6.jpg",
  "image_7.jpg",
  "image_8.jpg",
  "image_9.jpg"
];

myImage.src = "images/image_1.jpg";
  for(let teller=0; teller<image_names.length; teller++){
    let thumb = new Image();
    thumb.src = "thumbnails/" + image_names[teller];
    thumbnailHolder.appendChild(thumb);
    thumb.className = "thumb";
    thumb.teller = teller;
    thumb.addEventListener('click',()=>{
      myImage.src = "images/" + image_names[thumb.teller];
    })
  }
