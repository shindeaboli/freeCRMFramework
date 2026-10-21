import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';

dotenv.config({path: `./env/${envName}.env`,override: true});

export default
 {
  BASEURL : process.env.BASE_URL,
  USERNAME : process.env.USERNAME,
  PASSWORD : process.env.PASSWORD

}