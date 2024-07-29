"use client";
import React, { useEffect } from "react";
import FormDefinitionSection from "./sections/definition";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getCategoriesAsync } from "@/lib/redux/features/categorySlice";
import { setForm } from "@/lib/redux/features/productFormSlice";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
  definition: z.object({
    code: z.string(),
    name: z.string(),
    category: z.string(),
    sizes: z.string(),
    colors: z.string(),
    images: z
      .instanceof(File, { message: "Please upload a file." })
      .refine((f) => f.size < 100_000, "Max 100Kb upload size.")
      .array(),
    description: z.string().optional(),
    semiFinishedProducts: z.array(
      z.object({
        code: z.string(),
        name: z.string(),
        quantity: z.number(),
        description: z.string().optional(),
      })
    ),
    materials: z.array(
      z.object({
        code: z.string(),
        name: z.string().optional(),
        consumptionUnit: z.string().optional(),
        sizeWidthUnit: z.string().optional(),
        colorCode: z.string().optional(),
        colorName: z.string().optional(),
        description: z.string().optional(),
        isNew: z.boolean(),
      })
    ),
  }),
});

const ProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      definition: {
        code: "",
        name: "",
        category: "",
        sizes: "",
        colors: "",
        description: "",
        images: [],
        semiFinishedProducts: [
          {
            code: "a",
            name: "abcdefg",
            quantity: 1,
            description: "",
          },
        ],
        materials: [
          {
            code: "a",
            name: "",
            consumptionUnit: "",
            sizeWidthUnit: "",
            description: "",
            colorCode: "",
            colorName: "",
            isNew: true,
          },
        ],
      },
    },
  });

  return (
    <Form {...form}>
      <FormDefinitionSection form={form} />
    </Form>
  );
};

export default ProductForm;
