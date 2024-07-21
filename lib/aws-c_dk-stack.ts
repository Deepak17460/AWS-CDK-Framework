import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket
    new s3.Bucket(this, 'MyBucket', {
      bucketName: 'dpcode72',
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // This will allow the bucket to be deleted when the stack is deleted
      autoDeleteObjects: true, // This will delete all objects in the bucket when the bucket is deleted
    });
  }
}