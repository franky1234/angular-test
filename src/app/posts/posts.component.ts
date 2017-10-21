import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { Post } from '../shared/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'at-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  aPost: Post;
  listPosts: Post[];
  constructor(
    private postService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.aPost = {
      id: 0,
      title: '',
      smallImage: '',
      largeImage: '',
      defaultImage: ''
    };

    this.postService.getAllPosts()
      .subscribe(allPosts => {
        this.listPosts = allPosts;
        console.log('this Pos', this.listPosts);
        this.listPosts.forEach( singlePost => {
          this.postService.getPictureURL(singlePost.id)
          .subscribe( infoImage => {
            singlePost.smallImage = infoImage.thumbnailUrl;
            singlePost.largeImage = infoImage.url;
            singlePost.shortDescription = infoImage.title;
          });
        });
      });
  }
  goToEditArticle( idPost: number) {
    console.log('idPost:', idPost);
    this.router.navigate(['/edit', idPost]);
  }
  createNewPost(): void {
    this.router.navigate(['/new']);
  }
}
