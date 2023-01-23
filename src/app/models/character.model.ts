import Info from "./info.model";

export interface Character {
  name: string;
  species: string;
  status: string;
  origin: {
    name: string;
  }
}


export interface CharacterFilter {
  name: string;
  type: string;
}
