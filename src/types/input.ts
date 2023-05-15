import { IHistory } from ".";

export interface ISearchInputProbs {
    onType: (text: string) => void,
    onSubmit?: (text: IHistory) => void
}