

export const filterProducts = (products:any, searchTerm:any )=> {
  return products.filter((product:any) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
};
