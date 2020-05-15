# Use AWS Batch to copy file from S3 to S3 #

This example show how to setup aws batch to run a container that will move files between two S3 buckets.

### Assumptions? ###

* You should already have [Fsx](https://aws.amazon.com/fsx/) or [EFS](https://aws.amazon.com/efs/)
* You should already have the VPC in place
* You should already have the AMI with the scripts

### Why? ###

Because lambda timeout after 15 minutes, imagine that you want to move files from A to B and this process takes more than 15 minutes.
The [child_process](https://nodejs.org/api/child_process.html) allow you to call external programs in this case aws-cli but it could be anything. 

