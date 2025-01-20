
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; 
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function truncateString(str, maxLength) {
    if (str.length <= maxLength) return str;

    
    let truncated = str.slice(0, maxLength);

    const lastSpaceIndex = truncated.lastIndexOf(' ');
    const lastPunctuationIndex = Math.max(
        truncated.lastIndexOf(','), 
        truncated.lastIndexOf('.'), 
        truncated.lastIndexOf('!'), 
        truncated.lastIndexOf('?'),
        truncated.lastIndexOf(':'),
        truncated.lastIndexOf(';')
    );

    const cutIndex = Math.max(lastSpaceIndex, lastPunctuationIndex);

    
    if (cutIndex !== -1) {
        truncated = truncated.slice(0, cutIndex);
    }

    return truncated + '...';
}


function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}



// Пример 1: Заглавная первая буква
console.log(capitalizeFirstLetter("hello world")); // "Hello world"

// Пример 2: Обрезание строки с троеточием
console.log(truncateString("This is a long sentence that might get cut off.", 30)); 
// "This is a long sentence..."

console.log(truncateString("Short string.", 30)); // "Short string." (не обрезаем)

console.log(truncateString("Hello world! This is an example.", 25));
// "Hello world! This..."

// Пример 3: Проверка подстрок
console.log(isSubstring("hello world", "world")); // true
console.log(isSubstring("hello world", "planet")); // false
