import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {IRepoDto} from "../../../classDTO/userDto/userDto";

@Component({
    selector: "app-card-item",
    templateUrl: "./card-item.component.html",
    styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent implements OnInit {
    @Input() public card: IRepoDto;
    @Input() public detailsView: boolean;
    @Output() showDetails: EventEmitter<IRepoDto> = new EventEmitter<IRepoDto>();

    public ngOnInit(): void {

    }

}
