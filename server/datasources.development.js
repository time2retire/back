'use strict';

module.exports = {
  mongo: {
    connector: 'mongodb',
    url: process.env.DATABASE_URL || 'mongodb://wayne-retire:retired@ds014648.mlab.com:14648/ionic-db',
  },
};
