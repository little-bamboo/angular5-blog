import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PostService} from '../core/';
import {Post} from '../core/';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements AfterViewInit {

  postsList: Post[];

  postUrl = `${environment.api_url}`;

  // Material columns
  displayedColumns = ['title', 'author', 'createdAt', 'image', 'buttons'];
  dataSource = new MatTableDataSource(this.postsList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    private postService: PostService,
    private router: Router
  ) {

    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => {
        this.postsList = posts;
        this.dataSource.data = this.postsList;
      });
  }

  newPost() {
    this.router.navigateByUrl('/new');
  }


  deletePost(post) {
    this.postService.deletePost(post._id)
      .subscribe(res => {
        this.getPosts();
      });
  }

  duplicatePost(post) {
    console.log('duplicate post-list: ' + JSON.stringify(post));
  }

  editPost(post) {
    this.router.navigateByUrl('/edit/' + post.slug);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

