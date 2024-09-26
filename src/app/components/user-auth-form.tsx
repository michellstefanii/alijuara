"use client";

import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./icons";
import { createUser } from "@/api/createUser";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: Yup.string()
    .matches(
      /^(\+55)?\d{10,11}$/,
      "Telefone inválido. Deve ter 10 ou 11 dígitos, com ou sem o código do país."
    )
    .required("WhatsApp é obrigatório"),
});

export function UserAuthForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(values: {
    phone: string;
    email: string;
    name: string;
  }) {
    setIsLoading(true);
    try {
      await createUser({
        name: values.name,
        email: values.email,
        phone: values.phone,
      }).finally(() => {
        router.push(String(process.env.NEXT_PUBLIC_SITE_REDIRECT));
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <Label htmlFor="name">Nome</Label>
                <Field
                  name="name"
                  id="name"
                  as={Input}
                  placeholder="Seu nome"
                  disabled={isLoading}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="email">Email</Label>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  as={Input}
                  placeholder="name@example.com"
                  disabled={isLoading}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="phone">Whatsapp</Label>
                <Field
                  name="phone"
                  id="phone"
                  as={Input}
                  placeholder="+ 55 XX XXXXX XXXX"
                  disabled={isLoading}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <Button
                type="submit"
                className="h-12 mt-4"
                disabled={isLoading || isSubmitting}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Ir para o grupo
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
