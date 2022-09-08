import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement')
  element: { type: string; name: string; content: string };

  @Input()
  nr: number;

  @Output()
  modifyObjTitle = new EventEmitter<emitType>();
  @Input()
  name: string;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'fck');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }
  btnChangeTitle() {
    this.modifyObjTitle.emit({ name: `${this.nr}`, index: this.nr });
  }
}

export type emitType = {
  name: string;
  index: number;
};
