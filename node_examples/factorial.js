const factorial = (num)=>{
    if(num == 0){
        return 1
    }

    return num * factorial(num - 1)
}

// exports.factorial = factorial

module.exports = factorial

/*module.exports = {
    factorial: factorial
}*/
