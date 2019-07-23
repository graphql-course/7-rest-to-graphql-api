import { F1 } from './data-source';
import { paginationFilters } from '../lib/utils';

export class CircuitsData extends F1 {
    constructor() {
        super();
    }

    async getCircuits(elementsPerPage: number = -1, page: number = -1) {
        if (elementsPerPage === -1) {
            return await this.get('circuits.json?limit=1000', {
                cacheOptions: { ttl: 60 }
            });
        }
        return await this.get(`circuits.json?${ paginationFilters(elementsPerPage, page) }`, {
            cacheOptions: { ttl: 60 }
        });  
    }
}