// Returns a resolved promise with the user's first and last name
export default function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        resolve({ firstName, lastName });
    });
}
