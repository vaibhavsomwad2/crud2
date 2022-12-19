import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../_services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{
  postForm!:FormGroup;
  constructor(
              private fb:FormBuilder, 
              private postServices:PostService,
              private router:Router
    ){}
  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.postForm = this.fb.group({
      title : [null, [Validators.required]],
      body : [null, [Validators.required]]
    })
  }
  onSubmit(){
    console.log(this.postForm.value);
    let obj = {
      ...this.postForm.value
    }
    this.postServices.getCreatePost(obj).subscribe(res =>{
      console.log(res);
      this.router.navigate(['dashboard'])
    })
  }
}
