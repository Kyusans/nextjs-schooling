"use client"
import { CircleFadingPlus, CirclePlus, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import axios from "axios";
import Spinner from "@/components/ui/spinner";
import AddProduct from "./AddProduct";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // add product modal
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const openAddProductModal = () => {
    setShowAddProductModal(true)
  };
  const closeAddProductModal = async (status) => {
    setShowAddProductModal(false)
    if(status === true){
      getProduct();
    }
  };

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const url = localStorage.getItem("url") + "get_product.php";
      const res = await axios.get(url);
      setProducts(res.data);
      console.log("res nako: ", res.data);
    } catch (error) {
      alert("There was an error occured");
      console.log("error: ", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, [500])
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-background ">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="xl:mx-80 sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <ModeToggle />
            <Button onClick={openAddProductModal}><CirclePlus className="h-5 w-5 mr-1" /> Add Products </Button>
          </header>
          <main>
            <div className="flex justify-center sm:px-6 sm:py-0 md:gap-8">
              {isLoading ? <Spinner /> :
                <>
                  <Card className="lg:w-2/3 md:w-full ">
                    <CardHeader>
                      <CardTitle>Products</CardTitle>
                      <CardDescription>
                        Manage and view your products here
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ProductTable products={products} />
                    </CardContent>
                    {/* <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                      products
                    </div>
                  </CardFooter> */}
                  </Card>
                </>
              }
            </div>
          </main>
        </div>
      </div>
      <AddProduct show={showAddProductModal} onHide={closeAddProductModal} />
    </>
  )
}

export function formatDates(inputDate) {
  const date = new Date(inputDate);
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

export function formatTime(inputDate) {
  const date = new Date(inputDate);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  return `${formattedTime}`;
}
