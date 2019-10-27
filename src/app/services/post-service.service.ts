import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataServiceInterface } from '../Interfaces/data-service.interface';

@Injectable({
  providedIn: 'root' 
})
 
export class PostServiceService extends dataServiceInterface {
  private url = 'http://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) {
    super();
  }
  
    
    public getAll() {
      return this.http.get(this.url);
    }

    public post(posted) {
      return this.http.post(this.url,posted);
    }

    public put(posted) {
      return this.http.put(this.url,posted);
    }

    public delete(id: number) {
      return this.http.delete(this.url+'/:'+id);
    }

}
