const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


const CompressionPlugin = require('compression-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');

const dotenv = require('dotenv');
dotenv.config();

const accesskeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css)$/,
      filename: '[path]bundlegz.js[query]',
      algorithm: 'gzip',
      deleteOriginalAssets: true
    }),
    new S3Plugin({
      s3Options: {
        accessKeyId: accesskeyId, // Your AWS access key
        secretAccessKey: secretAccessKey, // Your AWS secret key
        region: 'us-west-1' // The region of your S3 bucket
      },
      s3UploadOptions: {
        Bucket: 'product.and.author.files', // Your bucket name
        // Here we set the Content-Encoding header for all the gzipped files to 'gzip'
        ContentEncoding(fileName) {
          if (/bundlegz\.js/.test(fileName)) {
            return 'gzip'
          }
        },
        // Here we set the Content-Type header for the gzipped files to their appropriate values, so the browser can interpret them properly
        ContentType(fileName) {
          if (/\.css/.test(fileName)) {
            return 'text/css'
          }
          if (/\.js/.test(fileName)) {
            return 'text/javascript'
          }
        }
      },
      basePath: 'dist', // This is the name the uploaded directory will be given
      directory: 'client/dist' // This is the directory you want to upload
    })
  ]
});



/* plugins: [
    new CompressionPlugin({
      filename: '[path]bundle.js.gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/i,
    })
  ]*/