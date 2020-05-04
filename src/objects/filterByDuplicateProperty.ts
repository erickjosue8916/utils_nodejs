function filterByDuplicateProperty(data:any[], prop:string) {
    return data.reduce((prev, current) => {
        const exist = prev.filter(e => e[prop] == current[prop])
        if (exist.length == 0) prev.push(current)
        return prev 
    }, [])
}

export { filterByDuplicateProperty  }