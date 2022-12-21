import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {GithubService} from "../../services/github.service";
import {SetttingsService} from "../../services/setttings.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ GithubService, SetttingsService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the userComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a variable called "variableInterna" with value "[]" as default`, () => {
    expect(component.variableInterna).toBeTruthy();
    expect(component.variableInterna).toEqual([]);
  });

  it ('should render a message with value "Julio"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("span").textContent).toContain('Julio');
  });

  it ('should add two numbers, suma(num1: number, num2: number)', () => {
    const mockedData = {num1: 4, num2: 3};
    const expectedResult = 7;
    const result = component.suma(mockedData.num1, mockedData.num2);
    expect(result).toEqual(expectedResult);
  });
});
