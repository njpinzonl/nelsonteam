import { Component, OnInit, Output, Input, OnDestroy, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CounterComponent implements OnInit, OnDestroy {
  @Output() complete = new EventEmitter();
  @Input() init = 5;
  nameButton = 'Start';
  private countdownEndRef: Subscription = null;

  constructor(public timer: TimerService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.timer.destroy();
    this.countdownEndRef.unsubscribe();
  }

  start() {
    this.timer.restartCountdown(this.init);
    this.countdownEndRef = this.timer.countdownEnd$.subscribe(() => {
       this.complete.emit('zero');
       this.nameButton = 'Start';
    });
    this.nameButton = 'Restart';
  }

}
