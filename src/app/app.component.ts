import { Component ,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupPage:FormGroup;
  forbiddenUsername=['manu' ,'tanu' ,'sanu'];

  ngOnInit(){
  	this.signupPage=new FormGroup({
  		'userData': new FormGroup({
  		'username':new FormControl(null,[Validators.required, this.forbiddenName.bind(this)]),
  		'email': new FormControl(null,[Validators.required , Validators.email] ,this.forbiddenEmail.bind(this))
  		}),  		
  		'gender': new FormControl('male'),
  		'hobbies':new FormArray([])
  	});
  	this.signupPage.valueChanges.subscribe(
  		(value)=>{
  				console.log(value);
  		}
  		);
  	this.signupPage.statusChanges.subscribe(
  		(status)=>{
  			console.log(status);
  		}
  		);
  	this.signupPage.setValue({
  		'userData':{
  			'username':'manish',
  			'email':'manukmr746@gmail.com'
  		},
  		'gender':'male',
  		'hobbies':[]
  	});
  	this.signupPage.patchValue({
  		'userData':{
  			'username':'kumar'
  		}
  	});
  }
  onSubmit(){
  	console.log(this.signupPage);
  	this.signupPage.reset();
  }
  onAddHobby(){
  	const control=new FormControl(null,Validators.required);
  	(<FormArray>this.signupPage.get('hobbies')).push(control);
  }
  forbiddenName(control:FormControl):{[s:string]:boolean}{
  	if(this.forbiddenUsername.indexOf(control.value) != -1){
  		console.log(this.forbiddenUsername.indexOf(control.value));
  		return {'nameIsForbidden':true}
  	}
  	return null;
  }
  // this is asynchronous validator for email
  forbiddenEmail(control:FormControl): Promise<any>|Observable<any>{
  	const promis= new Promise<any>((resolve,reject)=>{
  		setTimeout(()=>{
  			if(control.value === 'mnshkmr746@gmail.com')
  			{
  				resolve({'forbiddenEmail':true});
  			}else
  			{
  				resolve(null);
  			}
  		},1500);
  	});
  	return promis;
  }
}
