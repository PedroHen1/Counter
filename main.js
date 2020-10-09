let count = 0

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        if(styles.contains('reset')){
            count = 0;
        }
        if(styles.contains('increase')){
            count++;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = '#008000'
        }
        else if (count < 0) {
            value.style.color = 'red'
        }
        else {
            value.style.color = 'whitesmoke'
        }
    })
})