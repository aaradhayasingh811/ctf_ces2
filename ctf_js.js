var slider_img =document.querySelector('.img1');
var images =['https://github.com/Ashishranjs/ctf_ces2/blob/main/2016.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces2/blob/main/2150898492.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces2/blob/main/26243.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces2/blob/main/38629.jpg?raw=true','https://github.com/Ashishranjs/ctf_ces2/blob/main/6460.jpg?raw=true'];
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
