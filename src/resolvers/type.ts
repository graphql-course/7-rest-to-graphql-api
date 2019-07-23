import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../lib/utils";

// Los resolvers de las operaciones de consulta para devolver información
const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        circuit: parent => parent.Circuit
    },
    Circuit: {
        id: parent => parent.circuitId,
        location: parent => parent.Location,
        name: parent => parent.circuitName,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => (parent.givenName).concat(' ').concat(parent.familyName),
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    DriverStanding: {
        driver: parent => parent.Driver
    }
};

export default type;