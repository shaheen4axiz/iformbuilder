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

	constructor(private http: HttpClient) {
		console.log('Hello RestServiceProvider Provider');
	}

	getAccessToken = function(){
		this.http.get('http://fouraxiz.com/iformbuilder/index.php').subscribe(result => {
			this.access_token = result.token;
		});
	}

	saveData = function(ev){
		var formData = new FormData();
		console.log(formData);
	//	this.http.get('http://fouraxiz.com/iformbuilder/index.php').subscribe(result => {
		//	this.access_token = result.token;
	//	});
	}
}


