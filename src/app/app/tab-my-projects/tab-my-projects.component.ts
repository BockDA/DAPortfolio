import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab-my-projects',
  imports: [TranslateModule, NgIf, NgFor],
  templateUrl: './tab-my-projects.component.html',
  styleUrl: './tab-my-projects.component.scss',
})
export class TabMyProjectsComponent implements OnInit {
  @Input() activeTab!: number;
  cards: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>('assets/projectData/data.json').subscribe((data) => {
      this.cards = data;
      //console.log(this.cards); // hier ist es gefüllt
      //console.log(this.cards[1].test); // hier geht es
    });
  }
}
