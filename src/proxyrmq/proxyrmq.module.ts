import { Module } from '@nestjs/common';
import { ClientProxy } from './client-proxy'

@Module({
    providers: [ClientProxy],
    exports: [ClientProxy]
})
export class ProxyRMQModule {}
