"use client"
import { CircleFadingPlus, CirclePlus, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import axios from "axios";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // add product modal
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const openAddProductModal = () => { setShowAddProductModal(true) };
  const closeAddProductModal = async () => { 
    //await get products
    setShowAddProductModal(false) 
  };

  const getProduct = async () =>{
    setIsLoading(true);
    try {
      const url = localStorage.getItem("url") + "get_product.php";
      console.log("url: ", url);
      const res = await axios.get(url);
      setProducts(res.data);
      console.log("res nako: ", res.data);
    } catch (error) {
      alert("There was an error occured");
      console.log("error: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProduct();
  },[])

  return (
    <div className="flex min-h-screen w-full flex-col bg-background ">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="xl:mx-80 sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <ModeToggle />
          <Button onClick={openAddProductModal}><CirclePlus className="h-5 w-5 mr-1" /> Add Products </Button>
        </header>
        <main>
          <div className="flex justify-center sm:px-6 sm:py-0 md:gap-8">
            <Card className="lg:w-2/3 md:w-full ">
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage and view your products here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProductTable/>
              </CardContent>
              {/* <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter> */}
            </Card>
          </div>


        </main>
      </div>
    </div>
  )
}
