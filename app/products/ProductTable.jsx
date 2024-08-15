"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDates, formatTime } from './page';
import { Separator } from '@/components/ui/separator';
function ProductTable({ data }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Array.isArray(data) ? data : []);
  }, [data]);
  return (
    <>
      {products.length > 0 ?
        (<Table>
          <TableHeader>
            {products &&
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="text-end">Price</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-end">Time</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            }
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.prod_name}</TableCell>
                <TableCell className="text-end">{product.prod_price}</TableCell>
                <TableCell className="text-center">{formatDates(product.prod_date)}</TableCell>
                <TableCell className="text-end">{formatTime(product.prod_date)}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>) :
        (
          <>
            <Separator className="mb-3" />
            <p className="text-center">No products yet</p>
          </>
        )
      }
    </>
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