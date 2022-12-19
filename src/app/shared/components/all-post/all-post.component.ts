import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/post';
import { PostService } from '../../_services/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {
allPost: Ipost[] = [];

constructor(private postService:PostService){}
ngOnInit(): void {
this.getAllpost()
}
getAllpost(){
this.postService.getPostAll().subscribe(res=>{
    this.allPost = res
})
}
onDelete(id:number){
  this.postService.getDeletePost(id).subscribe(res=>{
  this.allPost = this.allPost.filter(p => p.id !== id)
  })
}
}
