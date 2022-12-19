import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { __param } from 'tslib';
import { PostService } from '../../_services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit{
  postForm :FormGroup = {} as FormGroup
 
  constructor(
    private postServices:PostService, 
    private route:ActivatedRoute, 
    private fb:FormBuilder,
    private router:Router
    ){}
  ngOnInit(): void {
    this.createpost();
    this.editPost()
  }
  createpost(){
this.postForm = this.fb.group({
  title:['',Validators.required],
  body:['', Validators.required],
})
  }
 editPost(){
    this.route.params.subscribe((params:Params)=>{
      let id = +params['id']
      localStorage.setItem('postId',""+id);
      console.log(id);  
      this.postServices.getSingalePost(id).subscribe(res =>{
        this.postForm.setValue({
            title : res.title,
            body :res.body
        })
      })
    })
   
 }
 onUpdatePost(){
  let updateId = +localStorage.getItem('postId')!;
  let obj ={
    ...this.postForm.value
  }
  this.postServices.getUpdate(updateId,obj).subscribe(res=>{
  console.log(res);
  this.router.navigate(['/'])
  })
 }
}
