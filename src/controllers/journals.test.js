const app = require("../app")()
const request = require('supertest')

describe("journals",()=>{

    it("should display the journals", ()=>{
       return request(app).get(app.router.render('journals')).expect(200)
    })

})