import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch blog posts for the last 7 days
    for (let i = 0; i < 150; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formattedDate = date.toISOString().split('T')[0];
      this.fetchBlogPost(formattedDate);
    }
  }

  fetchBlogPost(date: string) {
    this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=UaY5Gofdm7HYtzmOaehnSoqaSVGiirMD5B8CjtBg&date=${date}`)
      .subscribe(response => {
        this.blogs.push(response);
      });
  }
}
