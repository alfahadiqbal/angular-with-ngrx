import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {


  ngOnInit(): void {
  }


  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment() {
    this.store.dispatch(increment());
    // TODO: Dispatch an increment action
  }

  decrement() {
    this.store.dispatch(decrement());
    // TODO: Dispatch a decrement action
  }

  reset() {
    this.store.dispatch(reset());
    // TODO: Dispatch a reset action
  }

}
