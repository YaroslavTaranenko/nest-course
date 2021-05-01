import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


async function start(){
  const port = process.env.PORT || 3500
  const app = await NestFactory.create(AppModule)
  
  await app.listen(port, ()=>{ console.log('Application started at port', port)})
}

start()