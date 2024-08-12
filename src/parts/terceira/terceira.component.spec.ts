import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraComponent } from './terceira.component';

describe('TerceiraComponent', () => {
  let component: TerceiraComponent;
  let fixture: ComponentFixture<TerceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerceiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
