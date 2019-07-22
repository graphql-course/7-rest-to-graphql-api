import { F1 } from './data-source';
import { yearCheck, roundCheck } from '../lib/utils';

export class RacesData extends F1 {
    constructor() {
        super();
    }

    async getRacesByYear(year: string) {
        year = yearCheck(year);

        return await this.get(String(year).concat('.json'), {
            cacheOptions: { ttl: 60 }
        });
    }

    async getRaceSelect(year: string, round: number) {
        year = yearCheck(year);
        round = roundCheck(round);
        return await this.get(String(year).concat(`/${round}`).concat('.json'), {
            cacheOptions: { ttl: 60 }
        })
    }
}