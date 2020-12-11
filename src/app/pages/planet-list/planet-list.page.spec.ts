import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanetListPage } from './planet-list.page';

describe('PlanetListPage', () => {
  let component: PlanetListPage;
  let fixture: ComponentFixture<PlanetListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
