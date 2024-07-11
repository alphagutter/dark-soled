import { Gender } from "./gender";
import { Role } from "./roles";

export interface Character {
    id?: number;
    name: string;
    gender: string;
    role: string;
    power: number;
}
