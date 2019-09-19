import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../../lib/utils";


const circuit: IResolvers = {
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lng: parent => parent.long
    }
}

export default circuit;