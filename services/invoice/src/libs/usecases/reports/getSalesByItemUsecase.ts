
import { DepenteniciesData } from "../../entities/interfaces";

export const getSalesByItem_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { tenantRepository,invoiceRepository },
  } = dependencies;

  if (!invoiceRepository||!tenantRepository)
    throw new Error("The invoiceRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Invoices")
    return invoiceRepository.getSalesByItem(model);
  };
  return {
    execute,
  };
};
