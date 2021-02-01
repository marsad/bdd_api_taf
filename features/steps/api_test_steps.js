"use strict";
var chai = require('chai');
chai.use(require('chai-http'));
var expect = require('chai').expect;
var assert = require('assert');
var _a = require('@cucumber/cucumber'), Given = _a.Given, When = _a.When, Then = _a.Then;
//##########################################################
//### Main scenario - doesn't run properly :(            ###
//##########################################################
var agent = chai.request.agent('https://postman-echo.com');
When('I set cookies in Postman Echo service', function () {
    agent
        .get('/cookies/set?mycookie1=ABC&mycookie2=DEF&mycookie3=GHI')
        .then(function (res) {
        expect(res).to.have.cookie('mycookie1', 'ABC');
        expect(res).to.have.cookie('mycookie2', 'DEF');
        expect(res).to.have.cookie('mycookie3', 'GHI');
        return agent;
    });
});
Then('I expect to see provided cookies in the response body', function () {
    /*
    expect(res).to.have.cookie('mycookie1', 'ABC');
    expect(res).to.have.cookie('mycookie2', 'DEF');
    expect(res).to.have.cookie('mycookie3', 'GHI');
    */
    return 'pending';
});
When('I send GET request again', function () {
    /*
    agent
    .get('/cookies')
    .then(function (res: any) {
        expect(res).to.have.cookie('mycookie1', 'ABC');
        expect(res).to.have.cookie('mycookie2', 'DEF');
        expect(res).to.have.cookie('mycookie3', 'GHI');
     return agent
     });
     */
    return 'pending';
});
Then('I expect to see cookies which were previously set', function () {
    /*
    expect(res).to.have.cookie('mycookie1', 'ABC');
    expect(res).to.have.cookie('mycookie2', 'DEF');
    expect(res).to.have.cookie('mycookie3', 'GHI');
    */
    return 'pending';
});
When('I delete one cookie', function () {
    /*
    agent
    .get('/cookies/delete?mycookie1')
    .then(function (res) {
      expect(res).to.not.have.cookie('mycookie1', 'ABC');
      expect(res).to.have.cookie('mycookie2', 'DEF');
      expect(res).to.have.cookie('mycookie3', 'GHI');
      return agent
     });
     */
    return 'pending';
});
Then('I expect not to see deleted cookie only those remained', function () {
    /*
    expect(res).to.not.have.cookie('mycookie1', 'ABC');
    expect(res).to.have.cookie('mycookie2', 'DEF');
    expect(res).to.have.cookie('mycookie3', 'GHI');
    */
    return 'pending';
});
//##########################################################
//### Additional scenario to check the TAF is functional ###
//##########################################################
When('I make a simple GET request I expect OK status code', function () {
    chai.request('https://postman-echo.com')
        .get('/')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
    });
});
