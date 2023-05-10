import { textContent } from "./texts"

export interface Location {
    id: number,
    location: string
}

export const LocationArray : Location[] = [
    {id: 0, location: textContent.dummySGN},
    {id: 1, location: textContent.dummyHAN},
    {id: 2, location: textContent.dummyDAD},
    {id: 3, location: textContent.dummyCXR},
    {id: 4, location: textContent.dummyBMV},
    {id: 5, location: textContent.dummyCAH},
    {id: 6, location: textContent.dummyDIN},
    {id: 7, location: textContent.dummyDLI},
    {id: 8, location: textContent.dummyHPH},
    {id: 9, location: textContent.dummyHUI},
    {id: 10, location: textContent.dummyPOC}
] 