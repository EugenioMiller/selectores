export enum Region {
  Afirca   = 'Africa',
  Americas = 'Americas',
  Asia     = 'Asia',
  Europe   = 'Europe',
  Oceania  = 'Oceania',
}

export interface SmallCountry {
  name: string,
  cca3: string,
  borders: string[],
}

export interface Country {
  name:         Name;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  borders?:     string[];
  gini?:        { [key: string]: number };
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  side:   Side;
  signs?: string[];
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currency {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  nld?: string;
  pap?: string;
  spa?: SPA;
  bjz?: string;
  eng?: EngEnum;
  fra?: string;
  grn?: string;
  aym?: string;
  que?: string;
  kal?: string;
  jam?: string;
  hat?: string;
  por?: string;
}

export enum EngEnum {
  English = "English",
}

export enum SPA {
  Spanish = "Spanish",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
  Caribbean = "Caribbean",
  CentralAmerica = "Central America",
  NorthAmerica = "North America",
  SouthAmerica = "South America",
}
