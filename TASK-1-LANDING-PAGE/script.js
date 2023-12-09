const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
	bar.addEventListener('click',()=>{
		nav.classList.add('active');
	})
}

if(close){
	close.addEventListener('click',()=>{
		nav.classList.remove('active');
	})
}
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
});
