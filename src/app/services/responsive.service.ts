import { BreakpointObserver } from '@angular/cdk/layout'
import { Injectable,computed,inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private readonly small = '(max-width:600px)';
  private readonly medium = '(min-width:601px) and (max-width:1000px)';
  private readonly large = '(min-width:1001px)';

  breakpointObserver = inject(BreakpointObserver);

  // screenWidth$ = this.breakpointObserver.observe([this.small, this.medium, this.large]);

  screenWidth = toSignal(this.breakpointObserver.observe([this.small, this.medium, this.large]));

  smallWidth = computed(() => this.screenWidth()?.breakpoints[this.small]);
  mediumWidth = computed(() => this.screenWidth()?.breakpoints[this.medium]);
  largeWidth = computed(() => this.screenWidth()?.breakpoints[this.large]);
}
