// const mongoKey = process.env.Mongo_key;
// const firestorePrivateKeyId = process.env.Firebase_private_key_id;
// const firebasePrivateKey = process.env.Firebase_private_key;
// const firebaseProjectId = process.env.Firebase_proyect_id;
// const firebaseClientEmail = process.env.Firebase_client_email;

config = {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: `mongodb+srv://normalizacion:normalizacion@cluster0normalizacion.l082dsy.mongodb.net/?retryWrites=true&w=majority`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "normalizacion-fd701",
    private_key_id: "83062765ba1d58c7530f7d905b35927fcf829b38",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5uNzdU/Oytzcq\n3ISqbzB8R3C+lMdKG5sk4qH8xs6/aldU/oH0I8FFXwjSiYp5vo9t5JMlDAFI+lG7\n7b/G18HnVMmqfIR81s/3VoFh0SDwdRqnRfBBBXoqUXOJDE5r/zNdFOT8bJ2rGQqe\np8yPGi+nhGVLBSsMPxSFv9YXvCQV/Mvdo7CI3oC26of2Sx3g9RzkgMX132SAuhqW\nLwxaBFfzYm5HIrwNPdbU/ba25uQyXAgeFoLYdPXMH/VR7Mq8HIXQGgdvteK+NIqy\nB562cA8xIdQ07yUSCh+8eJN1ltIvVDA94FMNV0+e1JmddhUIwcQNxTBRIC9C9wjv\nboNFhxTBAgMBAAECggEADxVK5rS7PX/wvIvlQFxAYU+CAhBeMRAV5QR86GUTBGu0\nBQSYdEX1G9ewhTzDYMjPqDqgkqkrb4xY1/zijtkV994kdLKhJexiPnGpl1KfLLgt\n/njJHta9ibNMwUwdEFtNBhm80R1XHr6tZJ43GEYlqaKwgUu9p8R1u7kNP6c5fQmD\niNyEsAvGatYnRSJXZKK9BN9SY02jW/tj+aC2J385GfsmeywwlqnlGgUAqWGcQayp\nz64oRMrPi3OLx5pDrrIpVJ96MsYAFAJrzVeBGkobqjrVwFJ1B/tbwoI4M+LdowJM\nHItWjSUnwZcwRN/V5Ys9GncZPTCPX7wJ4NTznkdpswKBgQD9i6/KtMUqasUje/pL\noXG/uh8nPNBxanL7kMz6KhPccS0S6ngcGmayIVpAYkSuk6NinIay83ANjR1dPLle\nA2Beoxj2XorDjTylRGbEZDD43xsnkwkNywThgMsTOQ925O66GqJi6CEzfQ6MbtMp\nMNZHp94aRaTFNbi4W9Fww2HKSwKBgQC7hRoiEVpqQKveV/HNj0bfpjdtAgV3bAxM\nvKyoMacazGMTWBzwwoDFbJ4EurthyLbkQc9NslIEAowFqpDv3KW8/IfqyxSeh4tT\nIF5ibHMVPvq5FQjfZA2BGGYpcGYYj6LaNmlLJaJh7xTRd0JHqvEnhRWWNhs3PxOr\ntDU7VQ11owKBgDlA5NZiUa+NYqzrnw6bC0OfNM+4dN1Xi1VxUkgfXlLGH8aIucym\nzY/l5ippxlahsiBfdi9Mt33n4ryeLMGlA4r7S3S+zpjv+MTdGFO6yDA6uTgLhNzf\nfl+ppLHXjb1sXtgZkZfCEVU+JR3jHL3NcGXH62iFV3rM8cR3v2i2RgvXAoGAXW3y\n2FiHEPuJ5m0w9/dUG6iIYxKnwJmgAzfaWq7qkGqXTpMPUFHIsRTuInMbW5wSq+Wy\nMQcQ4BiYxVX3gtsP5Pp5id2HN3lXTKKLBET+je5kI4U8d3k1VUXf2PO8mq4uOMT1\nb1Cf+GWTnM3rwyODpeokGER7COqvlVRjVV2KKDsCgYEAtm+GCDKIKc+FiFuCZDT+\n95lfHusKAwr0kYqnOEqzEkVVdEk4LB1NCfulVDz1J+rw2hYPlNOYVKcDMVdcNkyV\nIkNwHI37rIOelykpBBGkSajr8DzumjH8moAzHxfoLcs3FoOrxJzAO1+wk8DfF472\nIXtmii7CW0EU6OKdabuinFA=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-lt4nx@normalizacion-fd701.iam.gserviceaccount.com",
    client_id: "115896818767487126899",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lt4nx%40normalizacion-fd701.iam.gserviceaccount.com",
  },
};

module.exports = config;
