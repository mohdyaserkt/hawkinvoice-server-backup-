import {
  userRepository,
  tenantRepository,
  organizationRepository,
} from "../libs/app/repository/mongo";
import {
  signupUser_UseCase,
  createTenant_UseCase,
  verifyUser_UseCase,
  findMyTenants_UseCase,
  createOrganization_UseCase,
} from "../libs/usecases";

const useCases = {
  signupUser_UseCase,
  createTenant_UseCase,

  verifyUser_UseCase,

  findMyTenants_UseCase,
  createOrganization_UseCase,
};

const repository = {
  userRepository,
  tenantRepository,
  organizationRepository,
};

export = {
  useCases,
  repository,
};
