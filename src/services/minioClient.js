import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: '34.39.140.200',
  port: 9000,
  useSSL: false,
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_KEY,
});



export default minioClient;