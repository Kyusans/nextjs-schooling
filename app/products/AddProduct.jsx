"use client";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import axios from 'axios';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(1, { message: 'This field is required' }),

  price: z
    .string()
    .refine(value => !isNaN(Number(value)), {
      message: "Please enter a valid number for the price.",
    })
    .transform(value => Number(value))
    .refine(value => value > 0, {
      message: 'Price must be greater than 0',
    })
});

function AddProduct({ show, onHide }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
    },
  });

  const handleClose = () => {
    onHide(false);
    form.reset();
  };

  const onSubmit = async (values) => {
    try {
      console.log(values);
      const url = localStorage.getItem("url") + "add_product.php";
      const formData = new FormData();
      formData.append("json", JSON.stringify(values));
      const res = axios.post(url, formData);
      console.log(res);
      if (res.data === 1) {
        toast.success("Product added successfully");
        form.reset();
        onHide(true);
      }
    } catch (error) {
      toast.error("Network Error");
      console.log("AddProduct.jsx => onSubmit()", error);
    }

  }

  return (
    <div>
      <Dialog open={show} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>
              Add a new product
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product name" {...field} autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='text-end'>
                <Button type="button" className="mr-2" onClick={handleClose} variant="destructive">Cancel</Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddProduct;
