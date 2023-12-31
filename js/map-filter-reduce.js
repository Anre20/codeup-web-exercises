const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }]

//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const languagesArray = users.filter(user => user.languages.length >= 3);
console.log(languagesArray);

//     Use .map to create an array of strings where each element is a user's email address

const userEmails = users.map(user => user.email);
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((accumulator, user)=>{
    return accumulator + user.yearsOfExperience;
    }, 0);
const averageYears = totalYears / users.length;
console.log("Total years are", totalYears);
console.log("Average of years is", averageYears);

const sumWithInitial = users.reduce(
    (user => user.yearsOfExperience, array[0]));

console.log(sumWithInitial);

//     Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((accumulator, user)=>{
    if (accumulator.length < users.email.length) {
        return user.email;
    } else {
        return accumulator;
    }
}, users[0].email);
console.log("Longest email is", longestEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const usersString = users.reduce((accumulator, user, index) => {
    console.log(accumulator);
    if (index === 0) {
        return `${user.name}`;
    }
    if (index === users.length - 1) {
        return `Your instructors are: ${accumulator} and ${user.name}.`;
    }
    return `${accumulator}, ${user.name}`;
}, "");
console.log("Users as a string => ", usersString)

