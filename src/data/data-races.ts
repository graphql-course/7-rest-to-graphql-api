import { F1 } from './data-source';
import { checkYear, roundCheck } from '../lib/utils';

export class RacesData extends F1 {
    constructor() {
        super();
    }

    async getYear(year: string) {
        year = checkYear(year);
        return await this.get(`${ year }.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getYearRound(year: string, round: number, result: boolean = false) {
        year = checkYear(year);
        round = roundCheck(round);
        if (result) {
            return await this.get(`${ year }/${ round }/results.json`, {
                cacheOptions: { ttl: 60 }
            });
        }
        return await this.get(`${ year }/${ round }.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
}