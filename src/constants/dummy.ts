import { textContent } from "./texts"

export interface Location {
    id: number,
    location: string
}

export const LocationArray : Location[] = [
    {id: 1, location: textContent.dummySGN},
    {id: 2, location: textContent.dummyHAN},
    {id: 3, location: textContent.dummyDAD},
    {id: 4, location: textContent.dummyCXR},
    {id: 5, location: textContent.dummyBMV},
    {id: 6, location: textContent.dummyCAH},
    {id: 7, location: textContent.dummyDIN},
    {id: 8, location: textContent.dummyDLI},
    {id: 9, location: textContent.dummyHPH},
    {id: 10, location: textContent.dummyHUI},
    {id: 11, location: textContent.dummyPOC}
] 