import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDonacionComponent } from './compra-donacion.component';

describe('CompraDonacionComponent', () => {
  let component: CompraDonacionComponent;
  let fixture: ComponentFixture<CompraDonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraDonacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
