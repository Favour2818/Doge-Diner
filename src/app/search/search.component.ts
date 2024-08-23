import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//activated routes reads from the route while router is useful for writing into the route
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = ''
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
  }

  Search():void{
    this.searchChange.emit(this.searchTerm)
  }

}
