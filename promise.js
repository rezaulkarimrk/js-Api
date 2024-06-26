const display = document.getElementById('display');

const  getData = () => {
    fetch('http://127.0.0.1:5500/API/data.txt')
        .then(res => res.json())
        .then(res => {
            console.log(res[116].name.common)
            display.innerText = res[116].name.common;
        })
}