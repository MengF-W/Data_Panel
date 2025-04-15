import { Component } from '@angular/core';
import { Device } from '../model/device';
import { CommonModule, NgFor } from '@angular/common';
import { DataService } from '../services/data.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-data-list',
  imports: [CommonModule, NgFor, NgxPaginationModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {
  constructor(private dataService: DataService) { }
  
  page = 1;
  count = 0;
  pageSize = 10;
  
  devices: Device[] = [];

  ngOnInit(){

    this.dataService.getAllData().subscribe(response => {
      this.devices = response.map((item:any) => 
        {
          return new Device( 
              item.id,
              item.name,
              item.deviceType,
              item.messageContent,
              item.timeStamp
          );  
        });
    });
  }

  handlePageChange(event: number): void {
    this.page = event;
  
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;

  }
}
