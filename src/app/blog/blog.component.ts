import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogIndex!: number;
  blog: any;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogIndex = +params['id'];

      this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=UaY5Gofdm7HYtzmOaehnSoqaSVGiirMD5B8CjtBg')
        .subscribe({
          next: (response: any) => {
            this.blog = response;
            this.loading = false;
          },
          error: (err: any) => {
            console.error('Error fetching NASA data:', err);
            this.error = 'Failed to fetch NASA data.';
            this.loading = false;
          }
        });
    });
  }
}
