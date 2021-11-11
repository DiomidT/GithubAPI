export interface IRepoDto {
    name: string;
    full_name: string;
    description: string;
    private: boolean;
    git_url: string;
    id: number;
}

export class RepoDto implements IRepoDto {
    name: string;
    age: number;
    id: number;
    private: boolean;
    full_name: string;
    description: string;
    git_url: string;
}
