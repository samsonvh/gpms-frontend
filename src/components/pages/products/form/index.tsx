import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  code: z.string(),
  name: z.string(),
  category: z.string(),
  size: z.string(),
  color: z.string(),
  images: z
    .instanceof(File, { message: "Please upload a file." })
    .refine((f) => f.size < 100_000, "Max 100Kb upload size.")
    .array(),
  description: z.string().optional(),
  specifications: z.array(
    z.object({
      size: z.string(),
      color: z.string(),
      measurements: z.array(
        z.object({
          name: z.string(),
          measurement: z.number(),
          unit: z.string(),
        })
      ),
      billOfMaterials: z.array(
        z.object({
          materialCode: z.string(),
          sizeWidth: z.number(),
          consumption: z.number(),
          description: z.string().nullable(),
        })
      ),
      qualityStandards: z.array(
        z.object({
          materialCode: z.string(),
          name: z.string(),
          color: z.string().nullable(),
          image: z
            .instanceof(File, { message: "Please upload a file." })
            .refine((f) => f.size < 100_000, "Max 100Kb upload size.")
            .array(),
          sizeWidth: z.number().nullable(),
          description: z.string().nullable(),
          type: z.number(),
        })
      ),
    })
  ),
  semiFinishedProducts: z.array(
    z.object({
      code: z.string(),
      name: z.string(),
      quantity: z.coerce.number(),
      description: z.string(),
    })
  ),
  stages: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      group: z.string(),
      processes: z.array(
        z.object({
          code: z.string(),
          name: z.string(),
          description: z.string(),
          order: z.number(),
          steps: z.array(
            z.object({
              code: z.string(),
              name: z.string(),
              description: z.string(),
              order: z.number(),
              standardTime: z.number(),
              outputPerHour: z.number(),
            })
          ),
          inputsOutputs: z.array(
            z.object({
              materialCode: z.string().nullable(),
              semiFinishedProductCode: z.string().nullable(),
              quantity: z.number(),
              isProduct: z.boolean(),
              type: z.boolean(),
            })
          ),
        })
      ),
    })
  ),
});

const DefineProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return <div></div>;
};

export default DefineProductForm;
