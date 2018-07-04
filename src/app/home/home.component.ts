import { Component, OnInit,OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
	mySubscriptionForNumber:Subscription;
	mySubscriptionForCustom:Subscription;
  constructor() { }
  number:Number;

  ngOnInit() {
  	const mynumber=Observable.interval(1000)
  	.map(
  		(data:number)=>{
  			return data*2;
  		}
  		);
  	this.mySubscriptionForNumber = mynumber.subscribe(
  		(number:Number) => {
  			this.number=number;
  			console.log(number);
  		}
  		);
  		const myObservable=Observable.create((observer:Observer<string>)=>{
  			setInterval(()=>{
  				observer.next('hello');
  			},1000);
  			setInterval(()=>{
  				observer.next('mr');
  			},2000);
  			setInterval(()=>{
  				observer.complete();
  			},3000);

  			setInterval(()=>{
  				observer.error('manish');
  			},4000);

  		});
  		this.mySubscriptionForCustom=myObservable.subscribe(
  			(data:string)=>{ 
  				console.log(data);
  			},
  			(data1:string)=>{
  				console.log(data1);
  			},
  			()=>{
  				console.log("complete");
  			}
  			,
  			(error:string)=>{
  				console.log(error);
  			}
  			);
  		}
  		ngOnDestroy(){
  			this.mySubscriptionForCustom.unsubscribe();
  			this.mySubscriptionForNumber.unsubscribe();
  		}
  }

