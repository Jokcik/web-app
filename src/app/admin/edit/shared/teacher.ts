class TeacherFile {
  name?: string;
  url?: string;
}

export class Teacher {
  _id: string;
  name: string;
  suname: string;
  middleName: string;
  file: TeacherFile = {};
}
