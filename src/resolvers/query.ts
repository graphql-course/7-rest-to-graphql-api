import { IResolvers } from "graphql-tools";
import { makeTraceDetails } from "apollo-engine-reporting/dist/extension";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
    Query: {
        async seasonsList(_: void, __: any, { dataSources } ) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, { year }, { dataSources } ) {
            return await dataSources.races.getRacesByYear(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        },
        async raceSelect(_: void, { year, round }, { dataSources }) {
            return await dataSources.races.getRaceSelect(year, round).then(
                (data: any) => data.MRData.RaceTable.Races[0]
            );
        },
        async allHistoryDrivers(_: void, { pageElements, page }, { dataSources }) {
            return await dataSources.drivers.getDrivers(pageElements, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYear(_: void, { year }, { dataSources } ) {
            return await dataSources.drivers.getDriversByYear(year).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYearRound(_: void, { year, round }, { dataSources } ) {
            return await dataSources.drivers.getDriversByYearAndRound(year, round).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driverSelect(_: void, { id }, { dataSources }) {
            return await dataSources.drivers.getDriver(id).then(
                (data: any) => data.MRData.DriverTable.Drivers[0]
            )
        },
        async seasonPilotRanking(_: void, { year }, { dataSources }) {
            return await dataSources.drivers.getDriversSeasonRanking(year).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            )
        }
    }
};

export default resolvers;