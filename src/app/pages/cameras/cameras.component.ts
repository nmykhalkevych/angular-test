import { Component, OnDestroy, OnInit } from '@angular/core';
import { Camera } from 'src/app/models/cameta';
import { CameraService } from 'src/app/services/camera/camera.service';
import { Store } from 'src/app/store/store';
import { generateCameras } from 'src/app/utils/generateCameras';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
})
export class CamerasComponent implements OnInit, OnDestroy {
  public cameras: Camera[] = [];
  private interval;
  constructor(private cameraService: CameraService, private store: Store) {}

  ngOnInit(): void {
    this.store.select('cameras').subscribe((res: Camera[]) => {
      this.cameras = res;
    });
    this.cameraService.getCameras().subscribe((res) => {
      this.store.set('cameras', res.cameras);
    });
    this.interval = setInterval(() => {
      this.store.set('cameras', generateCameras());
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
