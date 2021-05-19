let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);

auth="Authorization"
raw={"email":"hassansiddiqi0@gmail.com","password":"123123"}
raw1= {"email":"muhammadaamir.aj1@gmail.com","password":"123123"}

token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjIxMzc1ODYzLCJleHAiOjE2MjE1NDg2NjN9.zCjyyRdIrAJCEorQP7RlhL3n0NlMOIjYsxRIqRA3gUE"
token1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDg2ZjZiYTBkOTAwODAwMTdkNzBkNzEiLCJlbWFpbCI6Im11aGFtbWFkQGdtYWlsLmNvbSIsIm5hbWUiOiJNdWhhbW1hZCIsInJvbGVzIjpbIklzc3VlciJdLCJvcmdfaWQiOiI2MDYwNmQwYTk1NDVhZjM0NTg5ZDY1MDUiLCJpYXQiOjE2MjEzNzYwNDMsImV4cCI6MTYyMTU0ODg0M30.JYXEm6kJgPhg5XLG-Q27VgmDKkk7L4ZjrnWFSNPTq20"

describe("Testing GET api Organization for Unauthorized Access", ()=> {
    describe("When admin user access the data", ()=> {
        it("(Admin)To check the response of the request", (done)=>{
            chai.request(data.item[16].name)
            .get("")
            .set(auth, token1)
            .end((err,resp)=> {
                expect(resp).to.have.status(403);
                expect(resp).to.not.have.status(200);
                expect(resp.body).to.be.empty;
                if(err != null){
                    console.log(err)
                }
            })
            done();
        })
        it("(Issuer)To check the response of the request", (done)=>{
            chai.request(data.item[16].name)
            .get("")
            .set(auth, token)
            .end((err,resp)=> {
                expect(resp).to.have.status(403);
                expect(resp).to.not.have.status(200);
                expect(resp.body).to.be.empty;
                if(err != null){
                    console.log(err)
                }
            })
            done();
        })
    })
})