// Returns the sum of all the student ids
export default function getStudentIdsSum(arr) {
    if (!Array.isArray(arr))
        return [];
    return arr.reduce((acc, element) => acc + element.id, 0);
}
