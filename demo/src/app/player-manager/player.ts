export interface Player {
    firstname: string;
    lastname: string;
    teamid: number;
    position: string;
    age: number;
    id?: number;
}

export interface Team {
    id: number;
    name: string;
}

export const POSITIONS: string[] = ["gardien", "défenseur", "milieu", "attaquant"];

export const TEAMS: Team[] = [
    { id: 1, name: "FC Juventus" },
    { id: 2, name: "Atalanta Bergame"},
    { id: 3, name: "Real Madrid"}
];