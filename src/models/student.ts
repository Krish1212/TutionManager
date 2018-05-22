export interface Student{
    id:string,
    centre:string,
    name:string,
    age:number,
    gender:string,
    dob?:Date,
    doa:Date,
    parentName:string,
    parentMobile:string,
    parentWork?:string,
    deleted:boolean,
}