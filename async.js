const display = document.getElementById('display');

const  getData = async () => {
    const res = await fetch('http://127.0.0.1:5500/API/data.txt')
    const data = await res.json()
    console.log(data);
    
    display.innerText =data[116].name.common
}