import { Component } from '@angular/core';
import { emitType } from './server-element/server-element.component';

type T = {
  type: string;
  name: string;
  content: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: Array<T> = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  modifyObjTitle(data: emitType) {
    this.serverElements[data.index].name = data.name;
  }
  test2() {
    this.serverElements[0].name = 'aaaa';
  }
}
