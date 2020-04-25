
import { Component } from '@angular/core';
import { Order } from './order';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ' New Organization Information '; 
  showMyContainer: boolean = false;
  goback() {
    window.location.href='http://localhost/CS4640-ztm4qv-kk6ev-project/templates/callangular.php';
  }
constructor(private http: HttpClient) {   }  
responsedata= new Order('', '','', null, '', '', '');
  drinks = ['Academic/Honor Society', 'Greek Life', 'Sport','CIO','Other'];
  orderModel = new Order('', '','', null, '', '', '');
  confirm_msg = '';
  confirm_msg2 = '';
  type_msg=  "";
  dues_msg=  "";
  about_msg=  "";
  location_msg = "";
  data_submitted = '';
  test_msg = '';

  confirmOrder(data) {
     console.log(data);
     if((data.name).length > 0){
     this.confirm_msg =  (data.name) +" has been submitted successfully.  " ;
     this.confirm_msg2 = 'Days and Times: ' + (data.days);
     this.location_msg = 'Location: ' + (data.locations);
     this.type_msg = 'Type: ' + (data.type);
     this.dues_msg = 'Dues: ' + (data.dues);
     this.about_msg = 'About: ' + (data.about);}
    else{
      this.test_msg = "Error: Please put in the Organization name";
    }
  }
  onSubmit(form: any): void {
    console.log('You submitted value: ', form);
    this.data_submitted = form;
    
    // Convert the form data to json format
    let params = JSON.stringify(form);
    console.log('params',params );

  
    this.http.post<Order>('http://localhost/CS4640-ztm4qv-kk6ev-project/ngphp-post.php', params).subscribe((data) => {
         this.responsedata = data;     // assign response to responsedata property to bind to screen later
         console.log("data",data);
        }, (error) => {
         console.log('Error ', error);
    })
 }


}


 