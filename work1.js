const x = [1,2,3]


function multiply(arrayNumbers)
{
   const result = [ ]
    for(fIndex = 0; fIndex < arrayNumbers; fIndex++)
        {
            result.push(arrayNumbers[fIndex] * 2)
        }
        return result
}
console.table(multiply(x))