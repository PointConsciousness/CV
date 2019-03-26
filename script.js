const box = document.querySelectorAll('.flexbox');


// function toggleOpen(){
//     this.classList.toggle('open');
// }

function toggleActive(){
        this.classList.toggle('open-active');
        
}

// box.forEach(flexbox => flexbox.addEventListener('click', toggleOpen));
box.forEach(flexbox => flexbox.addEventListener('click',toggleActive));
