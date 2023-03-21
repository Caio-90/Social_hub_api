import express from "express"
import easterRoutes from "./easter.routes"
import userRoutes from "./user.routes"
import athleteRoutes from "./athlete.routes"
import commentRoutes from "./comment.routes"
import reactionRoutes from "./reaction.routes"
import replyRoutes from "./reply.routes"
import modalityRoutes from "./modality.routes"
import postRoutes from "./post.routes"
import metricRoutes from "./metric.routes"
import metricParticipationRoutes from "./metricParticipation.routes"
import competitionRoutes from "./competition.routes"
import participationRoutes from "./participation.routes"
import eventRoutes from "./event.routes"

export default express.Router()
    .get("/", (req, res) => res.json("estamos todos vivos aqui!"))
    .use("/easter", easterRoutes)
    .use("/user", userRoutes)
    .use("/athlete", athleteRoutes)
    .use("/comments", commentRoutes)
    .use("/reaction", reactionRoutes)
    .use("/replies", replyRoutes)
    .use("/modality", modalityRoutes)
    .use("/post", postRoutes)
    .use("/metricParticipation", metricParticipationRoutes)
    .use("/metric", metricRoutes)
    .use("/competition", competitionRoutes)
    .use("/participation", participationRoutes)
    .use("/event", eventRoutes)
    
