import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	 appStatus=new Promise((resolve,reject)=>{
		setInterval(()=>{
			resolve('Online');
		},2000);
	});

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filterstatus:string='';
  onAddServer(){
  	this.servers.push({
  		instanceType:'big',
  		name:'new Server',
  		status:'online',
  		started:new Date(8,8,2018)
  	});
  }
/*  onInput()
  {
  	let variable:boolean;
  	for(const server of this.servers)
  	{
  		if(server.status===this.filterstatus)
  			{
  				this.numberOfServer++;
  				variable=true;
  			}
  	}
  	if(variable)
  	console.log(this.numberOfServer);
  variable=false;
  	this.numberOfServer=0;
  }*/
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
