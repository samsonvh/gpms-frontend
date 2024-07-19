"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import ProductFormDefinition from "./sections/definition";
import ProductFormHeader from "./sections/Header";
import ProductFormProductionProcess from "./sections/ProductionProcess";
import ProductFormSpecification from "./sections/Specification";
import { useEffect } from "react";

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

const DefineProductForm = () => {
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ProductFormHeader />
        <ProductFormDefinition form={form} />
        <ProductFormSpecification />
        <ProductFormProductionProcess />
      </form>
    </Form>
  );
};

export default DefineProductForm;
