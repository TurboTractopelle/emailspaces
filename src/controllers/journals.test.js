const journals = require("./journals")
const app = require("../app")

describe("journals",()=>{

    it("should display the journals", ()=>{
       return request(app).get(app.router.render('journals')).expect(200)
    })

})