import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = []
  submitPost : object = {};
  constructor(private postservice: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.postservice.getPosts().subscribe( 
      res => this.posts = res,
      err => console.log(err)
      )
  }

  sendPost(){
    this.postservice.sendPost(this.submitPost).subscribe( 
      res => console.log("post sent!"),
      err => console.log("post failed")
    )
    location.reload();

  }




}
