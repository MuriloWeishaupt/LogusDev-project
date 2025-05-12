import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: '34.39.140.200',
  port: 9000,
  useSSL: false,
  accessKey: '9eXLpnhdDXOhMjciW8mv',
  secretKey: 'c737fi12BLzZ4EVkRiufwegsoa0Uy0hNYz5KlXg6'
});



export default minioClient;