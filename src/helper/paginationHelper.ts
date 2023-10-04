import { IPagination } from "../types/pagination.type";

const calculation = (options: Partial<IPagination>) => {
  const page = Number(options.page || 1);
  const size = Number(options.size || 10);
  const skip = (page - 1) * 10;

  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";

  return {
    page,
    size,
    skip,
    sortBy,
    sortOrder,
  };
};

export const PaginationHelper = {
  calculation,
};
