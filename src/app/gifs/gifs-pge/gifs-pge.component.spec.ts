import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsPgeComponent } from './gifs-pge.component';

describe('GifsPgeComponent', () => {
  let component: GifsPgeComponent;
  let fixture: ComponentFixture<GifsPgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsPgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
