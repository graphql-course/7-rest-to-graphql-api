import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../../lib/utils";


const driver: IResolvers = {
    Driver: {
        id: parent => parent.driverId,
        name: parent => parent.givenName.concat(' ').concat(parent.familyName),
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        teams: parent => parent.Constructors
    },
}

export default driver;