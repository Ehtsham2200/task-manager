const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0) {
                return reject('Numbers must be positive!')
            }
            resolve(a + b)
        }, 2000)
    })
} 

const doWork = async () => {
    const sum1 = await add(1, -2)
    const sum2 = await add(sum1, 2)
    const sum3 = await add(sum2, 2)
    return sum3
}

doWork().then((result) => {
    console.log('Result:',result)
}).catch((e) => {
    console.log(e)
})