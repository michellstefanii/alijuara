import { Metadata } from "next";

import { UserAuthForm } from "@/app/components/user-auth-form";

export const metadata: Metadata = {
  title: "Aline J. de Araujo",
  description: "- Faça parte desse jornada",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden h-full">
        {/* <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        /> */}
      </div>
      <div className="container relative h-screen flex-col items-center justify-center  grid md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-cyan-500" />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Aline J. de Araujo</footer>
            </blockquote>
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 ">
              <h1 className="text-3xl font-semibold tracking-tight">
                Para participar cadastre seus dados abaixo
              </h1>
              <p className="text-md text-muted-foreground">
                Ao final você vai ser redirecionad@ para o nosso grupo
                exclusivo!
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
