/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return 'hello world';
    }
}