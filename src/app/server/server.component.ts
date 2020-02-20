import { Component, Input} from '@angular/core'
@Component({
	selector:'app-server',
	templateUrl:'./server.component.html'

})
export class ServerComponent{
	// @Input() element:{type:string,name:string,content:string};
	@Input () msg:string;

}