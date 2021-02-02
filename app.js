// const getDataJokes = async () => {
//     const res = await axios.get('https://icanhazdadjoke.com', {
//         headers: { 'Accept': 'application/json' }
//     });
//     // console.log(res.data);
// };

// getDataJokes();

const getDataJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });
    // console.log(res.data);
    const main = document.querySelector('ul');
    const btn = document.querySelector('button');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        getDataJokes().then(()=>{
            const list = document.createElement('li');
            list.innerHTML = `<span>${res.data.joke}</span>`;
            main.appendChild(list);
        });        
    });
};

getDataJokes();






