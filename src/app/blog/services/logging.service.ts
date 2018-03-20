import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { SessionStorage } from '@app/core/helpers/sessionStorage';

@Injectable()
export class LoggingService {
  private baseUrl;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.api.blog;
   }

  sendLog(payload) {
    const { action, level } = payload;
    const newPayload = {
      text: action,
      log_level: level,
      user_id: this.getUserId()
    };
    //
    const endpoint = '/log';
    const url = `${this.baseUrl}${endpoint}`;
    this.http.post(url, newPayload).subscribe();
  }

  private getUserId() {
    const storage = new SessionStorage('userId');
    if (storage.hasItem()) {
      return storage.getItem();
    } else {
      return 0;
    }
  }

}
