// let num1 = 4
// let num2 = 9


// if (num1 > num2){
//     console.log("FIZZ")
// }else{
//     console.log("BUZZ")
// }
let userNm = document.getElementById("name")

async function randonUser()
{
    const response = await fetch("https://randomuser.me/api/")
    let userRnd = await response.json()
    console.log(userRnd)
    alert (`${userRnd.results[0].location.city}`)
}



randonUser()