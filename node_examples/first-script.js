console.log('n-factorial')

/*console.log(`Executing script from directory ${process.cwd()}`)

process.on('exit', ()=>{
    console.log('script is ready to end')
})*/

const factorial = (num)=>{
    if(num == 0){
        return 1
    }

    return num * factorial(num - 1)
}

const num = parseInt(process.argv[2])

console.log(`The factorial of ${num} is ${factorial(num)}`)
