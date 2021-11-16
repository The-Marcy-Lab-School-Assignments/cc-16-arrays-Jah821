//write your code here
const replacewithYerr = (arr, start = 0, num = arr.length - 1) => {
    const replaced = []
    for (let i = 0; i < arr.length; i++) {
        if (i >= start && i <= start + num - 1) {
           replaced.push('Yerr')
        }else{
            replaced.push(arr[i])
        }

    }
    return replaced
}

console.log(replacewithYerr(['logogogog','lgogoggolgog','gjdkjfdfdivijmv','giidfnvfn','fkjmvt'], 0, ))