import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarWarsListPage } from './star-wars-list.page';

describe('StarWarsListPage', () => {
  let component: StarWarsListPage;
  let fixture: ComponentFixture<StarWarsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarWarsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
