import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../../lib/utils";


const race: IResolvers = {
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        results: parent => parent.Results
    }, 
}

export default race;