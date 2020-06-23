-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p."ProductName", c."CategoryName"
FROM "Product" AS p
JOIN "Category" AS c ON p."CategoryId" = c."Id";


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o."Id" as OrderId, 
s."CompanyName" AS "Shipper", 
o."OrderDate"
FROM "Order" AS o
LEFT JOIN "Shipper" AS s ON o."ShipVia" = s."Id"
WHERE o."OrderDate" < "2012-08-09"
ORDER BY "OrderDate";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT o."OrderId", p.ProductName,  SUM(o."Quantity") AS totalProducts 
FROM "OrderDetail" AS o
JOIN "Product" AS p ON p.id = o.ProductId
WHERE o."OrderId" = 10251
GROUP BY p.ProductName;


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o."Id" AS "OrderId", c."CompanyName" AS CustomerCompanyName, e."LastName" AS EmployeeLastName
FROM "Order" AS o
JOIN "Customer" AS c ON o."CustomerId" = c."Id"
LEFT JOIN "Employee" AS e ON o."EmployeeId" = e."Id";