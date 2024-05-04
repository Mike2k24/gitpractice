// let num1 = 4
// let num2 = 9


// if (num1 > num2){
//     console.log("FIZZ")
// }else{
//     console.log("BUZZ")
// }
let userNm = document.getElementById("name")
let userLoc = document.getElementById("location")
let userGender = document.getElementById("gender")
let userImage = document.getElementById("user-image")
async function randonUser()
{
    const response = await fetch("https://randomuser.me/api/")
    let userRnd = await response.json()
    console.log(userRnd)
    userImg = (`${userRnd.results[0].picture.medium}`)
    userNm.innerHTML = (`${userRnd.results[0].name.first} ${userRnd.results[0].name.last}`)
    userGender.innerHTML = (`${userRnd.results[0].gender}`)
    userLoc.innerHTML = (`${userRnd.results[0].location.city}`)
    userImage.src = userImg
}
randonUser()