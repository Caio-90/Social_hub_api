import express from "express"

export default express.Router()

    /**
   * GET /easter
   * @summary This is the summary of the endpoint
   * @security BearerAuth
   * @tags testes
   * @return {array<User>} 200 - success response - application/json
   * @return {object} 400 - Bad request response
   */
    .get("/", (req, res) => res.json({"msg": "Easter egg test", ...req.headers}))