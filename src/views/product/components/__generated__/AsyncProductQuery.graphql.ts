

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type AsyncProductQueryQueryVariables = Exact<{
  slug: Scalars['String'];
  regionId: Maybe<Scalars['String']>;
}>;


export type AsyncProductQueryQuery = { vtex: { product: { productName: Maybe<string>, productReference: Maybe<string>, description: Maybe<string>, linkText: Maybe<string>, brand: Maybe<string>, id: Maybe<string>, categoryTree: Maybe<Array<Maybe<{ name: Maybe<string> }>>>, specificationGroups: Maybe<Array<Maybe<{ name: Maybe<string>, specifications: Maybe<Array<Maybe<{ name: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>> }>>>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, name: Maybe<string>, variations: Maybe<Array<Maybe<{ name: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>>, referenceId: Maybe<Array<Maybe<{ value: Maybe<string> }>>>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commercialOffer: Maybe<{ spotPrice: Maybe<number>, availableQuantity: Maybe<number>, price: Maybe<number>, listPrice: Maybe<number>, installments: Maybe<Array<Maybe<{ value: Maybe<number>, numberOfInstallments: Maybe<number>, interestRate: Maybe<number> }>>>, gifts: Maybe<Array<Maybe<{ skuName: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string> }>>> }>>>, teasers: Array<Maybe<{ name: Maybe<string> }>> }> }>>> }>>> } } };


// Query Related Code

export const AsyncProductQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query AsyncProductQuery($slug: String!, $regionId: String) {\n  vtex {\n    product(slug: $slug, regionId: $regionId) {\n      id: productId\n      productName\n      productReference\n      description\n      linkText\n      brand\n      categoryTree {\n        name\n      }\n      specificationGroups {\n        name\n        specifications {\n          name\n          values\n        }\n      }\n      items {\n        variations {\n          name\n          values\n        }\n        itemId\n        name\n        referenceId {\n          value: Value\n        }\n        images {\n          imageUrl\n          imageText\n        }\n        sellers {\n          sellerId\n          commercialOffer: commertialOffer {\n            installments: Installments {\n              value: Value\n              numberOfInstallments: NumberOfInstallments\n              interestRate: InterestRate\n            }\n            availableQuantity: AvailableQuantity\n            price: Price\n            listPrice: ListPrice\n            gifts {\n              skuName\n              images {\n                imageUrl\n              }\n            }\n            spotPrice\n            teasers {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "dccaeb0b6a355d0a2f40bf9f3307c40cc169db5a6aa7aa1c9f7f1ae92870b3a1",
  operationName: "AsyncProductQuery",
}

