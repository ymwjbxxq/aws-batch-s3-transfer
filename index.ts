import { CLIExecution } from "./cliExecution";

export const startExecution = async (): Promise<any> => {
  const cli = new CLIExecution();
  const command = "aws s3 cp s3://myBucket/myFolder/ s3://myOtherBucket/myOtherFolder/ --recursive --region eu-central-1";
  await cli.execute(command);
};