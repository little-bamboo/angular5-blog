import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../core/models';
import { LoaderService, PostService } from '../core/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postsList: Post[];
  postUrl = `${environment.api_url}`;

  constructor(
    private loaderService: LoaderService,
    private postService: PostService) {

  }

  ngOnInit(): void {
    // http call starts
    this.loaderService.display(false);
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(data => {
        console.log(data);
        this.postsList = data;
      });

  }

}
