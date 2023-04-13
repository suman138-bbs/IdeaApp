
/**
 * Define route for the calls like
 * 
 * GET 127.0.0:8080/
 * 
 */

const ideaController=require("../controllers/idea.controller")
module.exports = (app) => {
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllidea)
    app.post("/ideaApp/v1/ideas",ideaController.createIdea)
    app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea)
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea)
}


