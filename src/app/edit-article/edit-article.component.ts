import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'at-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  singlePost: Post;

  constructor(
    private singlePostService: UsersService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.singlePost = {
      id: 0,
      title: '',
      smallImage: '',
      largeImage: '',
      defaultImage: ''
    };
    this.activateRouter.params
      .subscribe( param => {
        this.singlePostService.getSinglePost(+param.id)
        .subscribe(aPost => {
          this.singlePost = aPost;
          this.singlePost.body = aPost.body;
          this.singlePost['noBindingText'] = aPost.title;
            this.singlePostService.getPictureURL(this.singlePost.id)
              .subscribe( picture => {
                this.singlePost.smallImage = picture.thumbnailUrl;
                this.singlePost.largeImage = picture.url;
                this.singlePost.shortDescription = picture.title;
              });
          });
      });
  }
  onUpdatePost(): void {
    this.singlePostService.updatePostInfo(this.singlePost.id, this.singlePost)
    .subscribe( newPost => {
      alert('Updated successful');
      this.router.navigate(['/posts']);
    }, error => {
      alert('error');
    });
  }
  redirectToList(): void {
    this.router.navigate(['/posts']);
  }
}
