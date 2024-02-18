/*
const fetch = () => {

//axios is already a promise itself only need .then to get the response of api
const result = axios({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
}).then((fromResolve) => {
    return fromResolve
}).catch((fromReject) => {
    return fromReject
})

return result
}

fetch().then((data) => {
    console.log(data)
})

//ASYNC 
//syntax
//const fetchedData = await fetch()


//first example
let fetch = () => {
    return new Promise((resolve, reject) => {
        let data = false;
        setTimeout(() => {
            data = true;
            resolve(data);
        }, 1000); // Add a time parameter for setTimeout
    });
};

let display = (data) => {
    console.log(`Display: ${data}`);
};

(async () => {
    try {
        let fetchedData = await fetch(); // Use await within an async function
        display(fetchedData);
    } catch (error) {
        console.error(error); // Handle potential errors
    }
})();
*/
//another example of async await

let displayName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ladin")
        },4000)
    })
}

let displayAge = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(22)
        },3000)
    })
}

let displayAddress = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Buenavista")
        },2000)
    })
}

async function displayInfo() {
    console.log("Name: ", await displayName());
    console.log("Age: ", await displayAge());
    console.log("Address: ", await displayAddress());
}

displayInfo();