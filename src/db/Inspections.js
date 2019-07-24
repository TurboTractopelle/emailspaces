const login = require("../../.env").login;
const pass = require("../../.env").pass;
const connection = require("../db/connection")(login, pass);
const mongoose = require("mongoose");

const inspectionsSchema = new mongoose.Schema({
  id: String,
  certificate_number: Number,
  business_name: String,
  date: String,
  result: String,
  sector: String,
  address: {
    city: String,
    zip: Number,
    street: String,
    number: Number
  }
});

inspectionsSchema.statics.search = search;
inspectionsSchema.statics.getAllCities = getAllCities;
inspectionsSchema.statics.getAllSectors = getAllSectors;

async function search(filters) {
  console.log(filters);

  if (filters.sector && filters.city) {
    return this.find({
      business_name: { $ne: "" },
      "address.city": filters.city.toUpperCase(),
      sector: filters.sector
    })
      .limit(10)
      .sort({ business_name: 1 });
  }

  if (filters.city) {
    return this.find({
      business_name: { $ne: "" },
      "address.city": filters.city.toUpperCase()
    })
      .limit(10)
      .sort({ business_name: 1 });
  }

  return this.find({})
    .limit(10)
    .sort({ business_name: 1 });
}

async function getAllCities() {
  //const data = await this.find({}, { "address.city": 1 });
  /*const allCities = [
    ...new Set([...data.map(o => o.address.city.toUpperCase())])
  ].sort((a, b) => a.localeCompare(b));*/

  const data = await this.aggregate([
    {
      $group: {
        _id: "$address.city"
      }
    },
    {
      $sort: {
        _id: 1
      }
    },
    {
      $group: {
        _id: "cities",
        citiesList: {
          $push: "$_id"
        },
        nbTotal: {
          $sum: 1
        }
      }
    }
  ]);

  return data[0];
}

async function getAllSectors() {
  const data = await Inspections.aggregate([
    {
      $group: {
        _id: "$sector",
        nb: { $sum: 1 }
      }
    },
    {
      $sort: {
        _id: 1
      }
    }
  ]);
  return data;
}

const Inspections = connection.model("Inspections", inspectionsSchema);

module.exports = Inspections;
