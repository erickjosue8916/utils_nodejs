function identicalArrays(arr1:any[], arr2:any[]) {
    if (arr1.length != arr2.length) return false
    return arr1.every((e, i) => e == arr2[i] )
}

export { identicalArrays }