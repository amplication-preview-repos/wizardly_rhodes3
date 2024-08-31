import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlotModuleBase } from "./base/slot.module.base";
import { SlotService } from "./slot.service";
import { SlotController } from "./slot.controller";
import { SlotResolver } from "./slot.resolver";

@Module({
  imports: [SlotModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlotController],
  providers: [SlotService, SlotResolver],
  exports: [SlotService],
})
export class SlotModule {}
