export interface AssistanceRoleManagment{
    classRoomName: ClassRoom,
    students: Student[],
    week: weekManagment
};

export interface weekManagment {
    number: number,
    availableStudents: Student[],
    assistanceList: string[],
};

export interface Student{
    name: string
    homeStudyingTimes: number
}

export interface ClassRoomVM {
    institute: string,
    grade: string,
    classroomId:string
}

export class ClassRoom implements ClassRoomVM{
    institute!: string;
    grade!: string;
    classroomId!:string;

    get classroom(){
        return this.institute || this.grade || this.classroomId;
    }
}