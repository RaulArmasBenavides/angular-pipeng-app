import { Component } from '@angular/core';
import { from, interval, pluck, timer } from 'rxjs';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'fErNAndo hErReRa';

  public customDate: Date = new Date();

  ngOnInit(){

    const observer ={
      next: (val:any) =>console.log('next:', val),
      complete : () =>console.log('complete')
      
    }
    const interval$ = interval(1000);
    const timer$ = timer(2000,3000);
    console.log('Inicio cs')
    timer$.subscribe( observer)
    console.log('Fin')

    const users = from([
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Bob', age: 35 }
    ]);
    
    users.pipe(
      pluck('name')
    ).subscribe(console.log);
  }

}
