/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SlotWhereUniqueInput } from "../../slot/base/SlotWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SlotUpdateManyWithoutUsersInput {
  @Field(() => [SlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SlotWhereUniqueInput],
  })
  connect?: Array<SlotWhereUniqueInput>;

  @Field(() => [SlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SlotWhereUniqueInput],
  })
  disconnect?: Array<SlotWhereUniqueInput>;

  @Field(() => [SlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SlotWhereUniqueInput],
  })
  set?: Array<SlotWhereUniqueInput>;
}

export { SlotUpdateManyWithoutUsersInput as SlotUpdateManyWithoutUsersInput };
