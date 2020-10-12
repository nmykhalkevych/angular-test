import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera } from 'src/app/models/cameta';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  constructor(private apiService: ApiService) {}
  getCameras(): Observable<any> {
    return this.apiService.get('cameras');
  }
}
