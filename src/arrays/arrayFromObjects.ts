import { identicalArrays } from "./identicalArrays";

function arrayFromObjects(data:any[], single:boolean = false) {
    return data.reduce((prev:any[], current) => {
        let row = []
        for (const key in current) {   
           row.push(current[key])
        }
        if (single) {
            const existences = prev.filter((e) => identicalArrays(e, row))
            if (existences.length == 0) prev.push(row)
        } else {
            prev.push(row)
        }
        return prev
    }, [])
}

export { arrayFromObjects }