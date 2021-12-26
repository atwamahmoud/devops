import * as AWS from "./aws";


AWS.getPutSignedUrl("me.jpg").then(console.log)
