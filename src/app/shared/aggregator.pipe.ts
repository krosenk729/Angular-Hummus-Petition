import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aggregator',
  pure: false
})
export class AggregatorPipe implements PipeTransform {
  transform(votes: object): number {
  	let totalVotes = 0;
  	for(let i in votes){
  		totalVotes += votes[i];
  	}
    return totalVotes;
  }
}
