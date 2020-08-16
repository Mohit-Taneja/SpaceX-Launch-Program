import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title = 'Spacex';
 constructor(private titleService: Title, private metaService: Meta) {}

 ngOnInit() {
  this.titleService.setTitle(this.title);
  this.metaService.addTags([

    { name: 'description', content: 'Spacex Launch Program' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'UTF-8' }
  ]);
}
  developer_name='Mohit';
 

}