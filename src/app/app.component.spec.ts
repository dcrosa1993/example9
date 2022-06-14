import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatDialogModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'example9'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('example9');
  });
  
  it('should render >Filter By<', () => {
    console.log(window.innerWidth)
    spyOnProperty(window, 'innerWidth').and.returnValue(1024);
    window.dispatchEvent(new Event('resize'));
    const fixture = TestBed.createComponent(AppComponent);
    console.log(window.innerWidth)
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3.__filter-title-es')).nativeElement;
    expect(getComputedStyle(h3).display).toEqual(
      'block'
    );
  });

  it('bg-color >Button< is primary color', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button.__btn-es'));
    expect(getComputedStyle(btn.nativeElement).backgroundColor).toEqual('rgb(37, 99, 235)');
  });
});
