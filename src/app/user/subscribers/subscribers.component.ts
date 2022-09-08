import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscribersService } from 'src/app/service/subscribers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
})
export class SubscribersComponent implements OnInit {
  constructor(private subscribeService:SubscribersService,private formbuilder:FormBuilder) {}
  subscribeForm!:FormGroup;
  ngOnInit(): void {
    this.subscribeForm = this.formbuilder.group({
      'email' : new FormControl('',[Validators.required,Validators.email])
    });
  }

  store(){
    this.subscribeService.store(this.subscribeForm.getRawValue()).subscribe();
    this.subscribeForm.reset({});
    this.success();
  }

  success() {
    Swal.fire({
      title: 'Success!',
      text: 'Thank You! ',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  }


}
