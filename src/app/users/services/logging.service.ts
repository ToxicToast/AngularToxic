import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

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
      log_level: level
    };
    //
    const endpoint = '/log';
    const url = `${this.baseUrl}${endpoint}`;
    this.http.post(url, newPayload).subscribe();
  }

}
