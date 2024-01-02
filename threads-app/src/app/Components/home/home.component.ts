import { Component, OnInit, inject, signal } from "@angular/core";
import { CommentComponent } from "../comment/comment.component";
import { CommonModule } from "@angular/common";
import { CommentService } from "../../Services/comment.service";
import { Comment } from "../../interfaces/comment.interface";
import { CommentFormComponent } from "../comment-form/comment-form.component";
import { UserService } from "../../Services/user.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommentComponent, CommonModule, CommentFormComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  commentService = inject(CommentService);
  comments = signal<Comment[]>([]);
  userService = inject(UserService);

  ngOnInit(): void {
    this.getComments();
  }
  getComments() {
    this.commentService.getComments().subscribe((comments) => {
      this.comments.set(comments);
    });
  }

  createComment(formValues: { text: string }) {
    const { text } = formValues;
    const user = this.userService.getUserFromStorage();
    if (!user) {
      return;
    }
    this.commentService
      .createComment({
        text,
        userId: user._id,
      })
      .subscribe((createdComment) => {
        this.comments.set([createdComment, ...this.comments()]);
      });
  }

  commentTrackBy(_index: number, comment: Comment) {
    return comment._id;
  }
}
