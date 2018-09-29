import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Iformbuilder APP';
	access_token = '';
	user:object = {};
	constructor(private http: HttpClient) {
		console.log('Hello RestServiceProvider Provider');
	}

	getAccessToken = function(){
		this.http.get('http://fouraxiz.com/iformbuilder/index.php').subscribe(result => {
			this.access_token = result.token;
		});
	}

	saveData = function(user){
		//console.log(user);
		this.http.post('http://fouraxiz.com/iformbuilder/index.php',user,{
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }).subscribe(result => {
		if(result.id){
			alert('Data Saved Successfully');
		}
		},error=>{
			console.log('Error : '+error);
		});
	}
}


