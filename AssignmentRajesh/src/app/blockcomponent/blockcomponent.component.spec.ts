import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockcomponentComponent } from './blockcomponent.component';

describe('BlockcomponentComponent', () => {
  let component: BlockcomponentComponent;
  let fixture: ComponentFixture<BlockcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
