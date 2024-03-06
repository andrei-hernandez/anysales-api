export const CompanyCategory: { [x: string]: "FOOD" | "SERVICE" } = {
  FOOD: "FOOD",
  SERVICE: "SERVICE"
}

// eslint-disable-next-line no-redeclare
export type CompanyCategory =
  (typeof CompanyCategory)[keyof typeof CompanyCategory]

export const ProductCategory: { [x: string]: "FOOD" | "SERVICE" } = {
  FOOD: "FOOD",
  SERVICE: "SERVICE"
}

// eslint-disable-next-line no-redeclare
export type ProductCategory =
  (typeof ProductCategory)[keyof typeof ProductCategory]
