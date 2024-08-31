/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SecurityListRelationFilter } from "../../security/base/SecurityListRelationFilter";
import { SlotListRelationFilter } from "../../slot/base/SlotListRelationFilter";
import { TicketListRelationFilter } from "../../ticket/base/TicketListRelationFilter";
import { VouchListRelationFilter } from "../../vouch/base/VouchListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  discordId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  reputation?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SecurityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SecurityListRelationFilter)
  @IsOptional()
  @Field(() => SecurityListRelationFilter, {
    nullable: true,
  })
  securities?: SecurityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SlotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SlotListRelationFilter)
  @IsOptional()
  @Field(() => SlotListRelationFilter, {
    nullable: true,
  })
  slots?: SlotListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TicketListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TicketListRelationFilter)
  @IsOptional()
  @Field(() => TicketListRelationFilter, {
    nullable: true,
  })
  tickets?: TicketListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => VouchListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VouchListRelationFilter)
  @IsOptional()
  @Field(() => VouchListRelationFilter, {
    nullable: true,
  })
  vouches?: VouchListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
