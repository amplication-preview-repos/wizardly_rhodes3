/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VouchService } from "../vouch.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VouchCreateInput } from "./VouchCreateInput";
import { Vouch } from "./Vouch";
import { VouchFindManyArgs } from "./VouchFindManyArgs";
import { VouchWhereUniqueInput } from "./VouchWhereUniqueInput";
import { VouchUpdateInput } from "./VouchUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VouchControllerBase {
  constructor(
    protected readonly service: VouchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vouch })
  @nestAccessControl.UseRoles({
    resource: "Vouch",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVouch(@common.Body() data: VouchCreateInput): Promise<Vouch> {
    return await this.service.createVouch({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        badge: true,
        category: true,
        challenge: true,
        createdAt: true,
        date: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        vouchText: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Vouch] })
  @ApiNestedQuery(VouchFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vouch",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vouches(@common.Req() request: Request): Promise<Vouch[]> {
    const args = plainToClass(VouchFindManyArgs, request.query);
    return this.service.vouches({
      ...args,
      select: {
        badge: true,
        category: true,
        challenge: true,
        createdAt: true,
        date: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        vouchText: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vouch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vouch",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vouch(
    @common.Param() params: VouchWhereUniqueInput
  ): Promise<Vouch | null> {
    const result = await this.service.vouch({
      where: params,
      select: {
        badge: true,
        category: true,
        challenge: true,
        createdAt: true,
        date: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        vouchText: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vouch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vouch",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVouch(
    @common.Param() params: VouchWhereUniqueInput,
    @common.Body() data: VouchUpdateInput
  ): Promise<Vouch | null> {
    try {
      return await this.service.updateVouch({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          badge: true,
          category: true,
          challenge: true,
          createdAt: true,
          date: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          vouchText: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vouch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vouch",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVouch(
    @common.Param() params: VouchWhereUniqueInput
  ): Promise<Vouch | null> {
    try {
      return await this.service.deleteVouch({
        where: params,
        select: {
          badge: true,
          category: true,
          challenge: true,
          createdAt: true,
          date: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          vouchText: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
