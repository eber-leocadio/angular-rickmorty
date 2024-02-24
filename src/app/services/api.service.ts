import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    debugger
    return this.http.get<any>(url).pipe(map((res: any) => {
      res.results.map((x: {
        iconStatus: any;
        status: string; origin: { name: any; };
}) => {
        x.origin = x.origin.name;
        x.iconStatus = x.status == 'unknown' ? `fa-solid fa-question` :
        x.status == 'Alive' ? `fa-solid fa-heart` :
        x.status == 'Dead'  ? `fa-solid fa-skull` : ''
      })
      return res;
    }))
  }
}
