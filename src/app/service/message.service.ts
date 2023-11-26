// message.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSubject = new BehaviorSubject<string | null>(null);

  getMessage(): Observable<string | null> {
    return this.messageSubject.asObservable();
  }

  setMessage(message: string): void {
    this.messageSubject.next(message);
  }
}
