import {Component, SecurityContext} from '@angular/core';
import { Device } from '../model/device';
import { CommonModule, NgFor } from '@angular/common';
import {DataService} from '../services/data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-data-list',
  imports: [CommonModule, NgFor, NgxPaginationModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {

  constructor(private dataService: DataService,private domSanitizer: DomSanitizer) { }

  pageNumber = 1;
  pageItemsTotalCount = 0;
  pageSize = 10;
  pageTotal = 0;
  imageFeed = "waiting.png";
  showWaiting = true;
  showTable = false;

  devices: Device[] = [];

  ngOnInit(){
      this.getDevices(this.pageNumber,this.pageSize);
  }

  getDevices(pageNumber : number, pageSize : number): void {
    this.dataService.getAllData(pageNumber,pageSize).subscribe(response => {
      this.pageItemsTotalCount = response.totalElements
      this.pageNumber = response.pageable.pageNumber + 1
      this.pageTotal = response.totalPages;
      this.devices = response.content.map((item:any) =>
        {
          return new Device(
              item.id,
              item.name,
              item.deviceType,
              item.messageContent,
              this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, ' + item.mediaContent),
              item.timeStamp
          );
        })
    }).add(() => {
              this.showWaiting = false;
              this.showTable = true;
        });
  }

  handlePageChange(event: number): void {

    this.getDevices(event,this.pageSize);

  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.pageNumber = 1;

  }

  enlarge(event:any): void {

    const image = new Image();
    image.src = event.target.currentSrc;

    let newTab = window.open();

    // @ts-ignore
    newTab.document.write(image.outerHTML);
  }
}
