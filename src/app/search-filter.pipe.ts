import { Pipe, PipeTransform } from '@angular/core'; //library
import { FoodService } from './services/food.service';
import { Food } from './shared/model/Food';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
      transform(foods: Food[], searchTerm: string) {
        if (!foods) {
          return [];
        }
        if (!searchTerm) {
          return foods;
        }
    
        searchTerm = searchTerm.toLowerCase();
        return foods.filter(item => {
          return item.name.toLowerCase().includes(searchTerm);
        });
        };
        // if (foods.length ===0 || searchTerm ==="") return foods;
        // else {
        //   return foods.filter((food: { name: string; }) => {return food.name.toLowerCase() === searchTerm.toLowerCase()})
        // }

        
      }
  // transform(foods: Food[], searchTerm: string)  {
    // if (foods.length ===0 || searchTerm === ""){
    //   return foods;
    // } else {
    //   return foods.filter((food) => {return food.name.toLowerCase() === searchTerm.toLowerCase()})
    // }
  // }
