document.querySelector('.banner-btn').addEventListener('click', () =>{
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.visibility = 'visible';
    document.querySelector('.form-container').style.opacity = '1';
});

document.querySelector('.x-btn').addEventListener('click', () =>{
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.visibility = 'hidden';
    document.querySelector('.form-container').style.opacity = '0';
});
const heading = 'Subscribe here';
let i = 0;

const typing = () => {
    if (i < heading.length) {
        document.querySelector('.banner-heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing, 250);
    }
}
typing();