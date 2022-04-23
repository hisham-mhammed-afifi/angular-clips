import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { TabComponent } from './tab/tab.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
// import { ModalService } from '../services/modal.service';

import { NgxMaskModule } from 'ngx-mask';
import { EventBlockerDirective } from './directives/event-blocker.directive';

@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockerDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockerDirective,
  ],
  // providers: [ModalService],
})
export class SharedModule {}
