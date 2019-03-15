import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  allouter:any=[];
  oneouter:any=[];
  oneinner:any=[];
  

  constructor(private _allHero: HttpService){};

  ngOnInit(){
    this.getTasksFromService();
  };

  getTasksFromService(){
    let allouter=this._allHero.getAllOuter();
    allouter.subscribe(data=>{
      console.log(data);
      this.allouter=data;
    });
  }

  showsubcategory(id:any){
    let oneouter=this._allHero.getOneOuter(id);
    oneouter.subscribe(data=>{
      console.log("one outer data:",data);
      this.oneouter=data[0].category;
    });
  }

  showwise(id:any){
    let wise=this._allHero.getOneInner(id);
    wise.subscribe(data=>{
      console.log("one inner data:",data);
      this.oneinner=data;
    });
  }
}
