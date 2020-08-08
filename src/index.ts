import { Student } from './Student';
import Mission from './Missions';
import FullTimeMission from './FullTimeMission';
import NightMission from './NightMission';

import { Teacher, TEACHER_SPECIALTY } from './Teacher';
import { FileManager } from './FileManager';

const fm = new FileManager('students.json');
const fileStudents: any[] = [];
const fileTeachers: any[] = [];

const student: Student = new Student(
  '1',
  'Amanda Oliveira',
  'amand@gmail.com',
  '20/02/1995',
  ['Cantar', 'Escrever'],
);
fm.readFile();
fileStudents.push(student);
fm.writeFile(fileStudents);

const student2: Student = new Student(
  '2',
  'Danilo Oliveira',
  'danilo@gmail.com',
  '12/08/1990',
  ['Futebol', 'Video-game'],
);
fm.readFile();
fileStudents.push(student2);
fm.writeFile(fileStudents);

const teacher: Teacher = new Teacher('1', 'Soter', 'sot@gmail.com', [
  TEACHER_SPECIALTY.REACT,
  TEACHER_SPECIALTY.CSS,
  TEACHER_SPECIALTY.REDUX,
]);
fm.setFilePath('teachers.json');
fm.readFile();
fileTeachers.push(teacher);
fm.writeFile(fileTeachers);

const teacher2: Teacher = new Teacher('2', 'Mateus', 'mateus@gmail.com', [
  TEACHER_SPECIALTY.OOP,
  TEACHER_SPECIALTY.TYPESCRIPT,
  TEACHER_SPECIALTY.BACKEND,
]);
fm.readFile();
fileTeachers.push(teacher2);
fm.writeFile(fileTeachers);

const newMission: Mission = new FullTimeMission(
  0,
  '02/03/2020',
  '12/10/2020',
  fileStudents,
  fileTeachers,
  2,
);

newMission.setName('New World');

let nightTeachers: Teacher[] = [];
let nightStudents: Student[] = [];

export const newNightMission: Mission = new NightMission(
  1,
  '20/04/2020',
  '22/10/2020',
  nightTeachers,
  nightStudents,
  2,
);

newNightMission.setName('class-na-night');

console.log(student.getAge(1));
console.log(student.getAge(2));
