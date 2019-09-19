import { IResolvers } from "graphql-tools";


const result: IResolvers = {
    Result: {
        driver: parent => parent.Driver,
        points: parent => +parent.points,
        team: parent => parent.Constructor,
        time: parent => parent.Time,
        fastestLap: parent => parent.FastestLap
    },
    FastestLap: {
        time: parent => parent.Time.time,
        averageSpeed: parent => parent.AverageSpeed
    }
}

export default result;