import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  post: object = {};

  comments = [];

  comment : object = {};

  constructor(private route:ActivatedRoute,
     private postservice : PostsService) { 
     this.route.params.subscribe(params => this.post = params.id);
  }

  ngOnInit() {
    this.postservice.getPost(this.post).subscribe(
      res => this.post = res,
      err => console.log(err),
    ),
    this.postservice.getComments(this.post).subscribe(
      res => this.comments = res,
      err => console.log(err),
    )
  }

  sendComment() {
    this.postservice.sendComment(this.post["postId"], this.comment)
    .subscribe(
      res => console.log("post sent!"),
      err => console.log("post failed")
    )
    location.reload();

  }



}
