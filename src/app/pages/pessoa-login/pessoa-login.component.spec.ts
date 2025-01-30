import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaLoginComponent } from './pessoa-login.component';

describe('PessoaLoginComponent', () => {
  let component: PessoaLoginComponent;
  let fixture: ComponentFixture<PessoaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
