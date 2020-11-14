const Template = require("./template");
const ZIP = require("../modules/us-zip");
const Joi = require("joi");

const validZIP = ZIP.map.keys();

// TODO: define template types in globals.d.ts and object schema
/** @type {Joi.ObjectSchema<any>} */
const schema = Joi.object({
    zip: Joi.string()
        .valid(...validZIP)
        .required()
        .error(() => new Error("Invalid US zip code"))
});

/**
 * TODO: define template types in globals.d.ts
 * @extends {Template<any, any>}
 */
class Organizations extends Template {

    /**
     * Events schema
     * @param {import("../server/index")} app
     */
    constructor(app) {
        super(app, "organizations", schema);
    }

    /** 
     * TODO: define template types in globals.d.ts
     * @param {}
     * @returns {}
     */
    create(form) {
        // TODO: transform the form (add location etc)
        return form;
    }

    /**
     * @param {IndividualDocument} indi 
     * @param {number} radius 
     * @return {Promise<FirebaseFirestore.QuerySnapshot<D>>}
     */
    getOrgsWithin(indi, radius) {
        // TODO: write the query
    }
}

module.exports = Organizations;