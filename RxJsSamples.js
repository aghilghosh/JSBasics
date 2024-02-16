import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

function AsyncStream(obs) {
    var t1 = setInterval(() => {
        obs.next(Math.random() * 10);
    }, 200);
}

var mainObservable = Observable.create(AsyncStream);

// Operators are logics that can be applied on an observable to produce another with applied logic
// Pipe function is used to apply operators to observable

// Map operator: Transform the data ina observable to another format
var mappedObservable = mainObservable.pipe(map(x => Math.round(x)));

// Filter filters the data in an onservable
var filteredObservable = mappedObservable.pipe(filter(x => x > 5));

filteredObservable.subscribe(res => console.log(res));

// Main observable => filtered observable => filtered obserdable => Final observable