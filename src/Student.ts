import moment from "moment"

import { FileManager } from "./FileManager"
import { User } from "./User"

export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: string,
    public hobbies: string[]
  ) {
    this.birthDate = moment(birthDate, "DD/MM/YYYY").format("DD/MM/YYYY")
    this.hobbies = hobbies
  }
  
  public getAge(id: number): number {
    const fm = new FileManager("students.json")
    const files: any[] = fm.readFile()
    const file: any[] = []
    
    const student: any[] =  files.find((file: any) => Number(file.id) === id)
    file.push(student)

    let date
    const response = file.forEach(element => date = element.birthDate)

    const age = moment().diff(moment(date, "DD/MM/YYYY"), "years")
    
    return age
  }
}

