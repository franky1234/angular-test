import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { UsersService } from '../shared/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'at-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  newPost: Post;
  constructor( private createPostService: UsersService, private router: Router) {
    this.newPost = {
      title: '',
      smallImage: '',
      largeImage: '',
      defaultImage: ''
    };
   }


  ngOnInit() {
  }
  onSavePost() {
    this.createPostService.saveNewPost(this.newPost)
      .subscribe( response => {
        console.log(response);
        alert(`Post created: ${ response.title }`);
        this.router.navigate(['/posts']);
      }, error => {
        alert('Something happend');
      });
  }
  redirectToList() {
    this.router.navigate(['/posts']);
  }
}
