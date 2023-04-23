const SampleData = require("../models/SampleData");
const { StatusCodes } = require("http-status-codes");

const route1 = async (req, res) => {
  const queryObject = {
    income: { $lt: 5 },
    car: { $in: [/^BMW/, /^Mercedes/] },
  };

  const data = await SampleData.find(queryObject);

  res.status(StatusCodes.OK).json({ data });
};

const route2 = async (req, res) => {
  const queryObject = { gender: "Male", phone_price: { $gt: 10000 } };

  const data = await SampleData.find(queryObject);

  res.status(StatusCodes.OK).json({ data });
};

const route3 = async (req, res) => {
  const data = await SampleData.aggregate([
    {
      $addFields: {
        matched: {
          $regexMatch: {
            input: "$email",
            regex: "$last_name",
            options: "i",
          },
        },
      },
    },
    {
      $match: { last_name: { $regex: /^M/ } },
    },
    {
      $match: { $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
    },
    {
      $match: {
        matched: true,
      },
    },
    {
      $project: {
        matched: 0,
      },
    },
  ]);

  res.status(StatusCodes.OK).json({ data });
};

const route4 = async (req, res) => {
  const queryObject = {
    email: { $not: { $regex: /([0-9]+)/ } },
    car: { $in: [/^BMW/, /^Mercedes/, /^Audi/] },
  };

  const data = await SampleData.find(queryObject);

  res.status(StatusCodes.OK).json({ data });
};

const route5 = async (req, res) => {
  const data = await SampleData.aggregate([
    {
      $group: {
        _id: "$city",
        count: { $count: {} },
        averageIncome: { $avg: "$income" },
      },
    },
    {
      $sort: { count: -1, averageIncome: -1 },
    },
    {
      $limit: 10,
    },
  ]);

  res.status(StatusCodes.OK).json({ data });
};

module.exports = {
  route1,
  route2,
  route3,
  route4,
  route5,
};
