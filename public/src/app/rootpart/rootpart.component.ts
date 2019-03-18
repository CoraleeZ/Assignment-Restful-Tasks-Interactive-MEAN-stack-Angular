import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rootpart',
  templateUrl: './rootpart.component.html',
  styleUrls: ['./rootpart.component.css']
})
export class RootpartComponent implements OnInit {
  @Input() subcate:any;
  oneinner:any=[];

  constructor(private _allHero: HttpService){};

  ngOnInit() {
  }

  showwise(id:any){
    let wise=this._allHero.getOneInner(id);
    wise.subscribe(data=>{
      console.log("one inner data:",data);
      this.oneinner=data;
    });
  }
  
}
