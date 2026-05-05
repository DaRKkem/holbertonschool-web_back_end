// Returns an array of ids from a list of objects
export default function getListStudentsIds(arr) {
    if (!Array.isArray(arr))
        return [];
    return arr.map(element => element.id);
}
