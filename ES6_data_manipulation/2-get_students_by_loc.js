// Returns an array of objects who are located in a specific city
export default function getStudentsByLocation(arr, city) {
    if (!Array.isArray(arr))
        return [];
    return arr.filter(element => element.location === city);
}
