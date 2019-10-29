import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import swaggerOptions from './document';

async function build() {
    const app = await NestFactory.create(AppModule);
    const document = SwaggerModule.createDocument(app, swaggerOptions);

    fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
    SwaggerModule.setup('api', app, document);

    await app.close();
}

build();