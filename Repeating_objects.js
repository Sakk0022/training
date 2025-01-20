
function sumObjectFields(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}


function sortedFieldNames(obj) {
    let numericFields = [];
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            numericFields.push(key);
        }
    }

    return numericFields.sort((a, b) => obj[b] - obj[a]);
}


const obj = {
    name: 'Sasha',
    friends: 5,
    likes: 19,
    projects: 7,
    age: 30
};


console.log(sumObjectFields(obj)); // 61 (5 + 19 + 7 + 30)


console.log(sortedFieldNames(obj)); // ['likes', 'projects', 'age', 'friends']
