import {ICard} from "../../interfaces/card-interface/card";

export class Card implements ICard {
    title: string;
    cardBody: string;
    linkOne: string;
    linkTwo: string;
}
