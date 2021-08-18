import { Module } from '@nestjs/common';
import { ClientProxySmartRanking } from './client-proxy'

@Module({
    providers: [ClientProxy],
    exports: [ClientProxy]
})
export class ProxyRMQModule {}
