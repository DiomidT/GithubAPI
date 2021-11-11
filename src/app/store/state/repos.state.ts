import {IRepoDto} from "../../classDTO/userDto/userDto";

export interface IReposState {
    reposGit: IRepoDto[];
    selectedRepo: IRepoDto;
}

export const initializeReposState: IReposState = {
    reposGit: [],
    selectedRepo: null,
};
