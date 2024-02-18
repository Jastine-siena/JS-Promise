/* PROMISE IN JS
"I Promise a Result!"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code

-W3schools*/ 

/*Example without promise
const fetch = () => {
    let data = false
    
    setTimeout(() => {
        data = true
    },3000)
    return data
}

const display = (data) => {
    console.log('Display', data)
}

const fetchedData = fetch()
display(fetchedData)



//returning promise
let fetch = () => {
    return new Promise((resolve, reject) => {
        let data = false
        
        setTimeout(() => {
            data = true
            resolve(data)
        },3000)
    })
}

let display = (data) =>{
    console.log(`Display ${data}`)
}

//.then means once na natapos na yong resolve function (which is matatapos in 3 seconds) ibig sabihin gagawin na nya yong resolve function
fetch().then((fromResolve) => {
    display(fromResolve)
})

console.log(fetch())
*/

//Error handling
let fetch = () => {
    return new Promise((resolve, reject) => {
        let a = 1
        if (a == 2){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

//.then is for resolve
fetch().then((fromResolve) => {
    console.log(`Sucess: ${fromResolve}`)
    //catch is for reject
}).catch((fromReject) => {
    console.log(`Failed: ${fromReject}`)
})

console.log(fetch())