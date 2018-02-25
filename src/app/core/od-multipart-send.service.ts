import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {empty} from 'rxjs/observable/empty';

export class MultipartItem {
  name: string;
  value: (string | Blob);
  fileName?: string;
}

@Injectable()
export class ODMultipartSendService {

  constructor(private http: Http) {
  }

  public sendMultipart<T>(path: string, object: MultipartItem[], method: RequestMethod = RequestMethod.Post): Observable<T> {
    const formData = new FormData();

    object.forEach(value => formData.append(value.name, value.value));

    let $result: Observable<Response>;
    switch (method) {
      case RequestMethod.Post:
        $result = this.http.post(environment.host + path, formData, this.getRequestOptions());
        break;
      case RequestMethod.Put:
        $result = this.http.put(environment.host + path, formData, this.getRequestOptions());
        break;
      default:
        return empty();
    }

    return $result.map(value => <T>value.json());
  }

  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('enctype', 'multipart/form-data');
    return headers;
  }

  private getRequestOptions(): RequestOptions {
    return new RequestOptions({headers: this.getHeaders(), withCredentials: true});
  }
}
