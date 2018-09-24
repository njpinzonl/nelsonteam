
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TimerService {

  private countdownTimerRef: any = null;
  private init = 0;
  private countdownSource = new BehaviorSubject<number>(5);
  private countdownEndSource = new Subject<void>();
  public countdown$ = this.countdownSource.asObservable();
  public countdownEnd$ = this.countdownEndSource.asObservable();

  constructor() { }

  destroy(): void {
    this.clearTimeout();
  }

  restartCountdown(init?) {
    if (init) {
      this.init = init;
    }
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.countdownSource.next(this.init);
      this.doCountdown();
    }
  }

  private doCountdown() {
    if (this.countdownSource.getValue() > 0) {
      this.countdownTimerRef = setTimeout(() => {
        this.countdownSource.next(this.countdownSource.getValue() - 1);
        this.processCountdown();
      }, 1000);
    }
  }

  private processCountdown() {
    if (this.countdownSource.getValue() <= 0) {
      this.countdownEndSource.next();
    } else {
      this.doCountdown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

}
