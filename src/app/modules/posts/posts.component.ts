import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from 'src/app/core/services/core.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts$?: Observable<any[]>;

  constructor(private coreService: CoreService) {
    this.posts$ = coreService.getPosts();
  }

  getImage(post: any) {
    return `https://picsum.photos/id/${post.id + 100}/800/400`;
  }

  getDefaultImage(element: any) {
    element.target.onerror = null;
    element.target.src = 'https://picsum.photos/id/684/800/400';
  }

  get randomDate() {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
