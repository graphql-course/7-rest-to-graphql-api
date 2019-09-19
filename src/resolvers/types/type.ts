import { IResolvers } from "graphql-tools";
import seasons from './season';
import race from './race';
import driver from "./driver";
import circuit from "./circuit";
import constr from './constructor';
import result from './result';
// Los resolvers de las operaciones de consulta para devolver información
const type: IResolvers = {
    ...seasons,
    ...race,
    ...driver,
    ...circuit,
    ...constr,
    ...result
};

export default type;