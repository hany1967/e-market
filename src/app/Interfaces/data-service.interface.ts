
import { Observable } from 'rxjs';
export abstract class dataServiceInterface {

    abstract getAll(): Observable<any>;
    abstract post(any): Observable<any>;
    abstract put(any): Observable<any>;
    abstract delete(any) : Observable<any>;
}