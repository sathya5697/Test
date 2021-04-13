import { Component, OnInit } from "@angular/core";
import { registerElement } from "@nativescript/angular";
/*import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);*/



registerElement("exoplayer", () => require("nativescript-exoplayer").Video);
@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})


export class HomeComponent implements OnInit {
    public urlSource = '<iframe src="https://www.youtube.com/embed/ZwO3PG-c5Cs?playsinline=1&autoplay=1&fs=0&controls=1&enablejsapi=1"></iframe>'
    public urlSourceliked = '<iframe src="https://www.youtube.com/embed/0eWrpsCLMJQ?playsinline=1&autoplay=1&fs=0&controls=1&enablejsapi=1"></iframe>'


    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {


        // Init your component properties here.
    }

    onSelectedIndexchanged(args) {

        if (args.newIndex == 0)  
        {

        }
        else if (args.newIndex == 1)  
        {

        }
    }
}
