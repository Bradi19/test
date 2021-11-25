/* eslint-disable global-require,import/no-unresolved */
const path = require('path');

let local;
try {
  local = require('./local');
} catch (err) {
  local = {};
}

const ENV = process.env.NODE_ENV || 'development';
const baseDir = path.join(__dirname, '..');

const CLIENT_API_URL = {
  development: 'http://0.0.0.0:8088',
};

const CLIENT_URL = {
  development: 'http://front:8080',
};

const common = {
  baseDir,
  port: 8088,
  env: ENV,
  salt: 'INTShop',
  youtubeAPIKey: 'AIzaSyDikG7IkUj-vKlM4PhOpbFvDq6rUBWM7Vo',
  uploadBaseURL: 'uploads',
  uploadDir: path.join(baseDir, 'uploads'),
  events: {
    upload: 'events',
    maxSize: {
      thumbnail: 10194304,
      gallery: 50971520,
    },
  },
  employee: {
    upload: 'employee_foto',
    maxSize: {
      foto: 500000000,
    },
  },
  vacancies: {
    maxSize: {
      resume: 10485760,
    },
  },
};

const environments = {
  development: {
    fbPixelId: null,
    clientApiUrl: CLIENT_API_URL.development,
    clientUrl: CLIENT_URL.development,
    db: 'mongodb://192.168.1.109:20000/landing-production',
    email: {
      sender: 'mukasbok@gmail.com',
      recievers: [
        'mukasbok@gmail.com',
      ],
      transport: {
        host: 'mail.ossystem.ua',
        auth: {
          user: 'a.sashko@ossystem.ua',
          pass: 'xx40ZaYOQiS2DUn5',
        },
        port: 465,
        secure: true,
        tls: {
          rejectUnauthorized: false,
        },
      },
    },
  },

  production: {
    fbPixelId: 361721147983263,
    gtmId: '',
    sentryUrl: 'http://90e4dd90aeb641ea9a5bc997471c405d@sentry.ossystem.ua/4',
    releaseVersion: '1.0.0',
    clientApiUrl: CLIENT_API_URL.production,
    clientUrl: CLIENT_URL.production,
    db: 'mongodb://localhost:27017/landing-production',
    uploadDir: '/var/www/uploads',
    errorsFilePath: path.join(baseDir, 'errors.log'),
    email: {
      sender: 'noreply@ossystem.com.ua',
      recievers: [
          "mukasbok@gmai.com"
      ],
      transport: {
        service: 'gmail',
        auth: {
          user: 'some.example.mailer@gmail.com',
          pass: 'Cnhf,bxjdj.',
        },
      },
    },
  },

  test: {
    db: 'mongodb://localhost:27017/landing-test',
    email: {
      sender: 'noreply@ossystem.com.ua',
      recievers: [
        'alekseybilous@gmail.com',
      ],
      transport: {
        jsonTransport: true,
      },
    },
  },
};
module.exports = Object.assign(common, environments[ENV], local);
