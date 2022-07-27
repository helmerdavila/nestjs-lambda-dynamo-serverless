import { HttpStatus } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Handler } from "aws-lambda";
import { AppModule } from "./app.module";
import { AppService } from "./app.service";
// import AWS from "aws-sdk";

export const handler: Handler = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);
  // const dynamoDB = new AWS.DynamoDB.DocumentClient();

  return {
    body: JSON.stringify({ message: appService.getHello() }),
    statusCode: HttpStatus.OK,
  };
};

export const handlerPost: Handler = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);

  return {
    body: JSON.stringify({
      message: `Hello from post ${appService.getHello()}`,
    }),
    statusCode: HttpStatus.OK,
  };
};
