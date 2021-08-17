import { Module } from '@nestjs/common'; 
import { ClientProxySmartRanking } from './proxyrmq/client-proxy'
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import { AwsModule } from './aws/aws.module';
import { ConfigModule } from '@nestjs/config'  
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProxyRMQModule, 
    AwsModule,
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule
  ],
  controllers: [],
  providers: [ClientProxySmartRanking],
})
export class AppModule {}
