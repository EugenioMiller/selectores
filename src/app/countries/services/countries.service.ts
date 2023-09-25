import { Injectable, inject } from '@angular/core';

import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, combineLatest, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';
  private _regions: Region[] = [ Region.Afirca, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ];
  private readonly http = inject(HttpClient);

  constructor() { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegions( region : Region ): Observable<SmallCountry[]>{
    if( !region ) return of([]);

    const url : string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.map( country => ({ //El segundo map es de arreglos, no rxjs
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []    //Si borders llega vacío, devuelvo un arreglo vacío
        }))),
      )
  }

  getCountryByAlphaCode( alphaCode:string ): Observable<SmallCountry>{

    const url = `${ this.baseUrl }/alpha/${ alphaCode }?fields=cca3,name,borders`;
    return this.http.get<Country>( url )
      .pipe(
        map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      )

  }

  getCountryBordersByCodes( borders: string[] ): Observable<SmallCountry[]> {
    if ( !borders || borders.length === 0 ) return of([]);

    const countriesRequests:Observable<SmallCountry>[]  = [];

    borders.forEach( code => {
      const request = this.getCountryByAlphaCode( code );
      countriesRequests.push( request );
    });


    return combineLatest( countriesRequests );
  }

}
