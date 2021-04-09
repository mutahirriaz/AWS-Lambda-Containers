import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";

export class LambdaContainerEithLocalImageStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const lambdaFn = new lambda.DockerImageFunction(this, "lambdaFunction", {
      //make sure the lambdaImage folder must container Dockerfile
      code: lambda.DockerImageCode.fromImageAsset("lambdaImage")
    });

  }
}
