import {Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RoutingStateService {

    constructor(private activeRoute: ActivatedRoute) {
    }


    getActivePath() {
        const children = this.activeRoute.children;
        console.log(children);
        return children;
    }
}
