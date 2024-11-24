import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TempConverterPipe } from './temp-converter.pipe';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterLink,CommonModule,TempConverterPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  temperature: number = 25;
  scale: string = 'C'; 


  toggleScale(): void {
    this.scale = this.scale === 'C' ? 'F' : 'C';
  }
}
