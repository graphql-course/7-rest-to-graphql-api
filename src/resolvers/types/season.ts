import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../../lib/utils";

const seasons: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
};
export default seasons;