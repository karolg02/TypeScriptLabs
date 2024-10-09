import {Employee} from "./types";

const employees: Employee[] = [
    {
        firstName: "Karol",
        lastName: "Glanowski",
        age: 22,
        position: "Developer",
        programmingLanguage: ["C#", "JavaScript", "TypeScript"]
    },
]

const getDevelopers = (employees: Employee[]) => {
    return employees.filter(e => e.position === "Developer");
}

const findEmployee = (employees: Employee[], name: string) => {
    return employees.find(e => e.firstName.includes(name) || e.lastName.includes(name))
}

function addExperience(employee: Employee, lang: string) {
    employee.programmingLanguage.push(lang);
}

function addExperiences(employee: Employee[], lang: string) {
    return employee.map(e => e.programmingLanguage.push(lang));
}

console.log(employees);
const developers: Employee[] = getDevelopers(employees);
console.log("developers", developers);
const karol = findEmployee(employees, "Karol");
if (karol)
    addExperience(karol, "C++");

console.log("Karol tu byl");
console.log(karol);

addExperiences(developers, "C++");
console.log(karol);