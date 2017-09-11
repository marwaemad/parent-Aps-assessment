import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { userLogin } from './login.model';
import { LoginComponent } from './login.component';
import { authService } from "./login.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [authService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form valid when have value', () => {
    let email=component.userlogin.email;
    this.email.setvalue('marwa');
    let password=component.userlogin.password;
    this.password.setvalue('zxcvbbnm');
    expect(component.userlogin).toBeTruthy();
  });
});
