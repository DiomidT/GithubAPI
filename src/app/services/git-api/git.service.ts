import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class GitService {
    url = "https://api.github.com/search/repositories?q=";

    constructor(private http: HttpClient) {
    }

    getGithubUsers(repoName): Observable<any> {
        return this.http.get(this.url + repoName);
    }

    async getGithubUsersToPromise(repoName): Promise<any> {
        const response = await this.http.get(this.url + repoName).toPromise();
        return response;
    }
}
