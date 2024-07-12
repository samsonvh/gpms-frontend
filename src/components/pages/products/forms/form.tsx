"use client";
import { Button } from "@Components/ui/button";
import { Form } from "@Components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormDefinitionSection from "./sections/definition";
import ProductFormHeader from "./sections/header";
import FormProcessesSection from "./sections/processes";
import FormSpecificationSection from "./sections/specification";

const ProductForm = () => {
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

  const [currentSectionPos, setCurrentSectionPos] = useState(0);

  const changePos = (isNext: boolean) => {
    if (isNext) {
      if (currentSectionPos < 2) {
        setCurrentSectionPos(currentSectionPos + 1);
      }
    } else {
      if (currentSectionPos > 0) {
        setCurrentSectionPos(currentSectionPos - 1);
      }
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "a",
      name: "b",
      category: "",
      size: "",
      color: "",
      images: [],
      description: "",
      specifications: [
        {
          size: "",
          color: "",
          measurements: [
            {
              name: "",
              measurement: 1,
              unit: "",
            },
          ],
          billOfMaterials: [
            {
              materialCode: "",
              sizeWidth: 1,
              consumption: 1,
              description: "",
            },
          ],
          qualityStandards: [
            {
              materialCode: "",
              name: "",
              color: "",
              image: [],
              sizeWidth: 1,
              description: "",
              type: 1,
            },
          ],
        },
      ],
      semiFinishedProducts: [
        {
          code: "",
          name: "",
          quantity: 1,
          description: "",
        },
      ],
      stages: [
        {
          name: "",
          description: "",
          group: "",
          processes: [
            {
              code: "",
              name: "",
              description: "",
              order: 1,
              steps: [
                {
                  code: "",
                  name: "",
                  description: "",
                  order: 1,
                  standardTime: 1,
                  outputPerHour: 1,
                },
              ],
              inputsOutputs: [
                {
                  materialCode: "",
                  semiFinishedProductCode: "",
                  quantity: 1,
                  isProduct: true,
                  type: true,
                },
              ],
            },
          ],
        },
      ],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div id="form-container">
      <ProductFormHeader
        currentSectionPos={currentSectionPos}
        changePos={changePos}
      />
      <div id="form-body">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormDefinitionSection form={form} />
            <FormSpecificationSection />
            <FormProcessesSection />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
