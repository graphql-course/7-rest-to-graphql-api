import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../../lib/utils";


const constructor: IResolvers = {
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
}

export default constructor;