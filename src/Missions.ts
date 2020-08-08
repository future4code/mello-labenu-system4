import {
  studentsList,
  newStudentsList,
  teachersList,
  newTeachersList,
} from './DataManager';
import moment from 'moment';
import { Teacher, TEACHER_SPECIALTY } from './Teacher';
import { Student } from './Student';

export default abstract class Mission {
  private name: string = '';

  constructor(
    private id: number,
    private startDate: string,
    private endDate: string,
    private teachers: Teacher[] = [],
    private students: Student[] = [],
    private currentModule?: number,
  ) {}

  public getId(): number {
    return this.id;
  }

  public getName(name: string): string {
    return this.name;
  }

  public getStartDate(): string {
    return this.startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }

  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  public addTeacher(
    id: string,
    name: string,
    email: string,
    specialties: TEACHER_SPECIALTY[],
  ) {
    const newTeacher: Teacher = new Teacher(id, name, email, specialties);

    const checkTeacherId = (): boolean => {
      for (let teacher of teachersList) {
        if (teacher.id === newTeacher.id) {
          return false;
        }
      }
      return true;
    };

    if (checkTeacherId() === false) {
      throw 'O ID inserido para novo(a) professor(a) é inválido. Tente novamente com outro ID.';
    } else {
      console.log('Professor(a) adicionado(a) com sucesso!');
      this.teachers.push(newTeacher);
      teachersList.push(newTeacher);
      newTeachersList.writeFile(teachersList);
      return 'ok';
    }
  }

  public addStudent(
    id: string,
    name: string,
    email: string,
    birthDate: string,
    hobbies: string[],
  ) {
    const newStudent: Student = new Student(
      id,
      name,
      email,
      birthDate,
      hobbies,
    );

    const checkStudentId = (): boolean => {
      for (let student of studentsList) {
        if (student.id === newStudent.id) {
          return false;
        }
      }
      return true;
    };

    if (checkStudentId() === false) {
      throw 'O ID inserido para novo(a) estudante é inválido. Tente novamente com outro ID.';
    } else {
      console.log('Estudante adicionado(a) com sucesso!');
      this.students.push(newStudent);
      studentsList.push(newStudent);
      newStudentsList.writeFile(studentsList);
      return 'ok';
    }
  }

  public setName(name: string) {
    this.name = name;
  }

  public getAgeById(id: number): number {
    let age: number = 0;

    studentsList.find((student: any) => {
      if (student.id === id) {
        age = moment().diff(student.birthDate, 'years');
      }
    });
    return age;
  }
}
