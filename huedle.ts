type Student = {
    name: string,
    gpa: number
}

const JACK: Student = {name: "Jack", gpa: 3.8}

function getGpa(student: Student): number {
    return student.gpa
}

type Color = {
    red: number,
    green: number,
    blue: number
}

const PURPLE: Color = {red: 150, green: 0, blue: 150}
const RED: Color = {red: 255, green: 0, blue: 0}