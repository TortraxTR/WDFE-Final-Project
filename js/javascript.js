const rand_pics = [
    "https://i.imgur.com/w739u3O.jpg",
    "https://i.imgur.com/RNQHJIu.jpg",
    "https://i.imgur.com/GuATJqk.jpg",
    "https://i.imgur.com/L2tWNeW.jpg",
    "https://i.imgur.com/oUe3eDJ.jpg"];
let a = Math.floor(rand_pics.length * Math.random());

function randomPic() {
    while (rand_pics[a] == document.querySelector("a[data-lightbox]").getAttribute("href")) {
        a = Math.floor(rand_pics.length * Math.random());
    }
    let thumb_pic = rand_pics[a].replace(".jpg", "l.jpg");
    document.querySelector("a[data-lightbox]").setAttribute("href", rand_pics[a]);
    document.querySelector("img[src]").setAttribute("src", thumb_pic);
}

