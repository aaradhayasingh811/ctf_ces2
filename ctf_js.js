var slider_img =document.querySelector('.img1');
var images =['images\2016.jpg','images\6460.jpg','images\26243.jpg','images\38629.jpg','images\2150898492.jpg'];
var i=0;//current page

function prevImg(){
    if(i <=0) i= images.length;
    i--;
    return setImg();
}
function nextImg(){
    if(i >= images.length -1) i= -1;
    i++;
    return setImg();
}
function setImg(){
    return slider_img.setAttribute('src','images/'+images[i]);
}