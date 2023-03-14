const whitelist = ["http://localhost:3000", "http://localhost:3001/"];

const corsOptions = {
  //   origin: (origin, callback) => {
  //     if (whitelist.indexOf(origin) !== -1) callback(null, true);
  //     else callback(new Error("Not Allowed Origin"));
  //   },
  origin: "*",
};

module.exports = corsOptions;
