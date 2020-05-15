import { exec } from "child_process";

export class CLIExecution {
  public async execute(command: string): Promise<void> {
    return new Promise((resolve: any, reject: any) => {
      exec(command, { maxBuffer: 50 * 1024 * 1024 }, (error: any) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }
}