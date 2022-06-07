function getData(uId) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Fetched the data!");
        // return "skc@gmail.com";
        resolve("skc@gmail.com");
       }, 4000);
    });
}

async function fun2(){
console.log("start");
const email = await getData("skc");
console.log("Email id of the user id is: " + email);
console.log("end");
}
fun2();