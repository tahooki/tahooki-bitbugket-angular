import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'app-demo-cdk-accessibility',
  templateUrl: './demo-cdk-accessibility.component.html',
  styleUrls: ['./demo-cdk-accessibility.component.scss']
})
export class DemoCdkAccessibilityComponent implements OnInit {

  @ViewChild('element') element: ElementRef<HTMLElement>;
  @ViewChild('subtree') subtree: ElementRef<HTMLElement>;

  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  constructor(private focusMonitor: FocusMonitor,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone) {}

  ngOnInit() {
    this.focusMonitor.monitor(this.element);
        // .subscribe(origin => this.ngZone.run(() => {
        //   this.elementOrigin = this.formatOrigin(origin);
        //   this.cdr.markForCheck();
        // }));
    this.focusMonitor.monitor(this.subtree, true).subscribe();
        // .subscribe(origin => this.ngZone.run(() => {
          // this.subtreeOrigin = this.formatOrigin(origin);
          // this.cdr.markForCheck();
        // }));
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.element);
    this.focusMonitor.stopMonitoring(this.subtree);
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
  markForCheck() {
    this.ngZone.run(() => this.cdr.markForCheck());
  }
}
