import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {

  private currentUrlSubject = new BehaviorSubject<string>('');
  public currentUrl$: Observable<string> = this.currentUrlSubject.asObservable();

  constructor() { }

  setCurrentRoute(route: string){
    this.currentUrlSubject.next(route);
    console.log('setCurrentRoute: ', route)
  }

  getCurrentRoute():string{
    return this.currentUrlSubject.getValue();
  }
}
