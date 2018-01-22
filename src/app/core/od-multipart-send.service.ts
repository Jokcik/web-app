import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {empty} from 'rxjs/observable/empty';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResourceRequestMethod} from '@ngx-resource/core';

export class MultipartItem {
  name: string;
  value: (string | Blob);
  fileName?: string;
}

@Injectable()
export class ODMultipartSendService {

  constructor(private http: HttpClient) {
  }

  public sendMultipart<T>(path: string, object: MultipartItem[], method: ResourceRequestMethod = ResourceRequestMethod.Post): Promise<T> {
    let formData = new FormData();

    object.forEach(value => formData.append(value.name, value.value));

    let $result: Promise<T>;
    switch (method) {
      case ResourceRequestMethod.Post:
        $result = this.http.post<T>(environment.host + path, formData, this.getRequestOptions()).toPromise();
        break;
      case ResourceRequestMethod.Put:
        $result = this.http.put<T>(environment.host + path, formData, this.getRequestOptions()).toPromise();
        break;
      default:
        return Promise.resolve<T>(<any>false);
    }

    return $result;
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('enctype', 'multipart/form-data');
    return headers;
  }

  private getRequestOptions() {
    return {headers: this.getHeaders()};
  }
}
