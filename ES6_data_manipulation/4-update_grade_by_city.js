// Returns an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(arr, city, newGrades) {
    if (!Array.isArray(arr))
        return [];
    return arr.filter(element => element.location === city).map(element => { 
        const found = newGrades.find(g => g.studentId === element.id);
        return { ...element, grade: found ? found.grade : 'N/A' };
     })
}
