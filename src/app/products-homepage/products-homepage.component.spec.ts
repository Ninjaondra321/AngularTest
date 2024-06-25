import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHomepageComponent } from './products-homepage.component';

describe('ProductsHomepageComponent', () => {
  let component: ProductsHomepageComponent;
  let fixture: ComponentFixture<ProductsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
