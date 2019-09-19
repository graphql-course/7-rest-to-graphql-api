import { IResolvers } from 'graphql-tools';
import query from './query';
import type from './types/type';
const resolversMap: IResolvers = {
    ...query,
    ...type
};
export default resolversMap;