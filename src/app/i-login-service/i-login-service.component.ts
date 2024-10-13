import { Component, OnInit } from '@angular/core';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-i-login-service',
  templateUrl: './i-login-service.component.html',
  styleUrls: ['./i-login-service.component.css']
})
export class ILoginServiceComponent implements OnInit {
  services = [
    { title: 'Service 1', description: 'Description 1' },
    { title: 'Service 2', description: 'Description 2' },
    { title: 'Service 3', description: 'Description 3' },
    { title: 'Service 4', description: 'Description 4' },
    // Add more services as needed
  ];
  itemsPerPageOptions = [5, 10, 15, 20];
  itemsPerPage = 5;
  currentPage = 1;
  pagedServices: Service[] = [];
  totalPages = 1;
  currentBanner: number = 1;
  bannerInterval: any;

  ngOnInit() {
    this.updatePage();
  }

  updatePage() {
    this.totalPages = Math.ceil(this.services.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedServices = this.services.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  startBannerRotation() {
    this.bannerInterval = setInterval(() => {
      this.currentBanner = this.currentBanner === 1 ? 2 : 1;
    }, 5000); // Change banner every 5 seconds
  }
}
