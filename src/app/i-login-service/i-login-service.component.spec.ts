import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILoginServiceComponent } from './i-login-service.component';

describe('ILoginServiceComponent', () => {
  let component: ILoginServiceComponent;
  let fixture: ComponentFixture<ILoginServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ILoginServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ILoginServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
