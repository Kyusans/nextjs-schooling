"use client"
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
function ProductTable({products}) {
  return (
    <div>
      <Table >
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">
              Price
            </TableHead>
            <TableHead className="text-end">
              Created at
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.prod_name}</TableCell>
              <TableCell className="hidden md:table-cell">{product.prod_price}</TableCell>
              <TableCell className="text-end">{product.prod_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProductTable



{/* <TableRow>
<TableCell className="font-medium">
  Laser Lemonade Machine
</TableCell>
<TableCell className="hidden md:table-cell">
  25
</TableCell>
<TableCell className="text-end">
  2023-07-12 10:42 AM
</TableCell>
{/* <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-haspopup="true"
                  size="icon"
                  variant="ghost"
                >
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell> */}
// </TableRow> */}