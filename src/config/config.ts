export const config = {
  dev: {
    username: 'udagrammike',
    password: 'udagrammike',
    database: 'udagrammike',
    host: 'udagrammike.c5k8grnwrirm.sa-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    aws_region: 'sa-east-1',
    aws_profile: 'mike-udacity',
    aws_media_bucket: 'udagram-mike12-dev',
  },
  prod: {
    username: '',
    password: '',
    database: 'udagram_prod',
    host: '',
    dialect: 'postgres',
  },
};
