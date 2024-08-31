import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SecurityModuleBase } from "./base/security.module.base";
import { SecurityService } from "./security.service";
import { SecurityController } from "./security.controller";
import { SecurityResolver } from "./security.resolver";

@Module({
  imports: [SecurityModuleBase, forwardRef(() => AuthModule)],
  controllers: [SecurityController],
  providers: [SecurityService, SecurityResolver],
  exports: [SecurityService],
})
export class SecurityModule {}
