// const fetchdata = () => {
//     console.log('fetch started');
//     let url = `https://jsonplaceholder.typicode.com/posts`;
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log('Second time fetch');
//         console.log(data)
//     })
// }

// fetchdata()
let datalist = document.getElementById('datalist');
let html = ""
async function data() {
    console.log('inside data');
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    console.log('before response here');
    const users = await response.json();
    console.log('user here!');
    return users;
}

const check = data();

check.then((data) => {
    console.log(data)
    data.forEach((elm, index) => {
        html += `
    <li>${index + 1}  ${elm.title}</li>
    `
    })
    datalist.innerHTML = html
}).catch((error) => {
    console.log(error)
})

// let name = 'hammad';

// try {
//     if (name != undefined) {
//         throw new Error('this data is not undefined')
//     } else {
//         console.log('this is undefined');
//     }
// } catch (error) {
//     console.log(error)
// }

// const data = new Promise(function (resolve, reject) {
//     let name1 = 'hammad';
//     if (name1) {
//         resolve('Your data is here')
//     } else {
//         reject('Some data is Rejected')
//     }
// })

// data.then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })