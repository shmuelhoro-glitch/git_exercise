const x = 1


let y = 10
const userName = "shmuel horovitz"


const logger = "logging"

function counter(){
    let count = 0
    return () => count++
}

const n = counter()
console.log(n());
console.log(n());
console.log(n());
