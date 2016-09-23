const mainCtrl = require("./mainCtrl")
const middleware = require("./middleware")
module.exports = app => {

    app.get("/api/name", mainCtrl.getName);
    app.get("/api/location", mainCtrl.getLocation)
    app.get("/api/occupations", mainCtrl.getOccupations)
    app.get("/api/occupations/order", mainCtrl.getOrderedOccupations)
    app.get("/api/occupations/latest", mainCtrl.getLatestOccupations);
    app.get("/api/hobbies", mainCtrl.getHobbies)
    app.get("/api/hobbies/:type", mainCtrl.getHobbyType)
    app.put("/api/name", mainCtrl.putName)
    app.put("/api/location", mainCtrl.putLocation)
    app.post("/api/hobbies", mainCtrl.postHobby)
    app.post("/api/occupations", mainCtrl.postOccupation)
    app.get("/api/skills", mainCtrl.getSkills)
    app.get("/api/skills/experience", mainCtrl.getSkillsByExperience)
    app.post('/api/skills', middleware.generateId, mainCtrl.postSkillz);
    app.get("/secrets/:userName/:pin", middleware.verifyUser, mainCtrl.getName)
}
