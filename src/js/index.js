const lowers = ["alex", "george", "bonnie", "maria", "ellie"];
const uppers = lowers.map(name => name.toUpperCase());
uppers.forEach(name => console.log(`Hello, ${name}`));


const ages = [555, 30, 749, 989, 3, 44];
const addOne = ages.sort().map(age => age);
ages.forEach(age => console.log(`${age + 1}`));
