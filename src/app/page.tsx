import Image from "next/image";
import { Metadata } from "next";

import { UserAuthForm } from "@/app/components/user-auth-form";

export const metadata: Metadata = {
  title: "Aline J. de Araujo",
  description: "Aula Magna sobre Autoexpressão Vocal",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col justify-center  grid md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative pt-20 hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex gap-16">
          <div className="flex justify-center">
            <Image
              className="z-20"
              src="https://i.ibb.co/ZcPrW3J/photo-2024-09-26-21-08-44.jpg"
              width={600}
              height={720}
              alt={""}
            />
          </div>
          <div className="relative z-20">
            <p className="text-3xl text-center">
              Aula Magna sobre Autoexpressão Vocal
            </p>
          </div>
          <div className="absolute inset-0 bg-rose-800" />
          <div className="relative z-20 mt-8">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &#34;Através da Tua Autoexpressão Vocal, ou seja, aquilo que
                pensas, sentes e falas, determinamos o futuro e assim, vivemos
                na escassez ou na abundância...&#34;
              </p>
              <footer className="text-sm">Aline J. de Araujo</footer>
            </blockquote>
          </div>
        </div>
        <div className="p-8  pt-20">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 gap-8 ">
              <h1 className="text-4xl uppercase font-medium tracking-tight text-rose-800">
                &#34;Aula Magna Aberta e Gratuita dia 03/10 às 19h pelo Google
                Meet&#34;
              </h1>
              <h2 className="text-5xl text-center font-medium tracking-tight text-gray-700">
                Autoexpressão e Prosperidade
              </h2>
              <p className="text-xl text-muted-foreground">
                Como a Autoexpressão Vocal te levará a evoluir e a prosperar em
                todas as áreas de sua Vida? Venha conosco e saiba como.
                INSCREVA-SE:
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
