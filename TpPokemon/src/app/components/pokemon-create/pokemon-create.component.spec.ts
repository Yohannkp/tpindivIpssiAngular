import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCreateComponent } from './pokemon-create.component';

describe('PokemonCreateComponent', () => {
  let component: PokemonCreateComponent;
  let fixture: ComponentFixture<PokemonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
