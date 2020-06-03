import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MypageService } from "./mypage.service";
import { User } from "../model/user.interface";

@Component({
  selector: "app-mypage",
  templateUrl: "./mypage.component.html",
  styleUrls: ["./mypage.component.css"],
})
export class MypageComponent implements OnInit {
  user: User;
  errorMessage: string;

  constructor(private http: HttpClient, private mypageService: MypageService) {
    this.user = {
      _id: null,
      Videos: null,
      Translations: null,
      Votes: null,
      Name: null,
      UserId: null,
      Password: null,
      Nickname: null,
      ProfileImage: null,
      ContributedTime: null,
    };
    this.getUser();
  }

  ngOnInit() {}

  getUser() {
    this.mypageService.getUser().subscribe(
      (user) => (this.user = user),
      (error) => (this.errorMessage = error)
    );
    //exception 처리는? 매개변수는?
  }
}
