import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-translation",
  templateUrl: "./translation.component.html",
  styleUrls: ["./translation.component.css"],
})
export class TranslationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  videoId: string;
  player: any;
  scriptIndex: Number;

  //rawScript 컴포넌트에서 값 받아 scriptIndex에 저장

  ngOnInit() {
    this.videoId = this.route.snapshot.paramMap.get("id");
    this.initPlayer();
  }

  initPlayer() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  changeScriptIndex(scriptInfo) {
    this.scriptIndex = scriptInfo.scriptIndex;
  }
}
