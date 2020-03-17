import {Mytodo} from './mytodo.model';
export class MytodoService {
  private mytodoList: Mytodo[] = [
    {taskname: 'firstTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'Active', details: 'NO DETAILS'},
    {taskname: 'secondTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'InActive', details: 'NO DETAILS'},
    {taskname: 'thirdTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'Active', details: 'NO DETAILS'},
    {taskname: 'forthTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'Active', details: 'NO DETAILS'},
    {taskname: 'fifthTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'Active', details: 'NO DETAILS'},
    {taskname: 'sixthTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'InActive', details: 'NO DETAILS'},
    {taskname: 'seventhTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'Active', details: 'NO DETAILS'},
    {taskname: 'eightTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'Active', details: 'NO DETAILS'},
    {taskname: 'ninethTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'InActive', details: 'NO DETAILS'},
    {taskname: 'tenthTask', createdate: '12-12-2020', duedate: '12-12-2020', status: 'Active', details: 'NO DETAILS'}
  ];
  // private showTodoList: Mytodo[]=[];
  getAllTodoList() {
    return this.mytodoList;
  }
  getTodoList(id: number) {
    return this.mytodoList[id];
  }

  // showTodoListData(){
  //   return this.showTodoList[0];
  // }

  addTodoList(mytodo: Mytodo) {
    this.mytodoList.push(mytodo);
  }
  deleteTodoList(id: number) {
    this.mytodoList.splice(id, 1);
  }

  updateTodoList(updateddata: Mytodo) {
    this.mytodoList.forEach((element, index) => {
      if (element.taskname === updateddata.taskname) {
        this.mytodoList[index] = updateddata;
      }
    });
  }



  constructor() { }
}
