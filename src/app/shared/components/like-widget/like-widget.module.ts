import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueIdService } from '../../services/unique-id/unique-id.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetComponent } from './like-widget.component';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [UniqueIdService],
  exports: [LikeWidgetComponent]
})
export class LikeWidgetModule {}
