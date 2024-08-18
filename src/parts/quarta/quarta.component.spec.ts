import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartaComponent } from './quarta.component';

describe('QuartaComponent', () => {
  let component: QuartaComponent;
  let fixture: ComponentFixture<QuartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
