import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CardItemComponent } from "./card-item.component";

describe("CardItemComponent", () => {
    let component: CardItemComponent;
    let fixture: ComponentFixture<CardItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardItemComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
    it("should creaet", () => {
        expect(component.card).toBeTruthy();
    });

    it('should bee fack', () => {
        expect(component.getResult()).toBeGreaterThan(1);
    })
});
