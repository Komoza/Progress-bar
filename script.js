let progressCircle = document.querySelector(".progress_bar");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".input_percent");
let value = document.querySelector(".percert");
let start = 0;

btn.addEventListener('click', bar)

function bar() {
    let progress = setInterval(() => {
        if (start == 100){
            start = 99;
        }
        if (start == 0){
            start = 1;
        }
        if(start < inp.value) {
           start++;
           progressEND();
        } else {
            start--;
            progressEND();
        }
        function progressEND() {
            value.textContent = `${start}%`;
            progressCircle.style.background = `conic-gradient(#2ec4ff ${start * 3.6}deg, #ededed 0deg)`;
            if(start == inp.value || start <= 0 || start >= 100){
                clearInterval(progress);
                inp.value = '';
            }
        }
    }, 50);
}

    inp.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btn.click();
    }
});

