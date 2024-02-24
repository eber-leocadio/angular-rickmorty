import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public character = [];
  public next = null;
  public prev = null;
  public url = 'https://rickandmortyapi.com/api/character';

  constructor(private api: ApiService) {

  }
  ngOnInit(): void { this.get(this.url) }

  get = async (url:string) => {

    await this.api.get(url).subscribe(res => {
      debugger
      this.character = res?.results;
      this.next = res?.info?.next;
      this.prev = res?.info?.prev;
    })
  }
}
