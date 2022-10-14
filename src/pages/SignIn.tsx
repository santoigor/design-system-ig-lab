import { Envelope, Lock } from "phosphor-react";
import axios from "axios";

import { Logo } from "../Logo";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Checkbox } from "../components/Checkbox";
import { TextInput } from "../components/TextInput";
import { FormEvent, useState } from "react";

export const SignIn = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();

    await axios.post("/sessions", {
      email: "igor@email.com",
      password: "senha123",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center ">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="remember"
          className="flex items-center gap-2 cursor-pointer"
        >
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>

        <footer className="flex flex-col gap-4 items-center mt-8">
          <Text size="sm" asChild>
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Esqueceu sua senha?
            </a>
          </Text>
          <Text size="sm" asChild>
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Não possiui conta? Crie uma agora
            </a>
          </Text>
        </footer>
      </form>
    </div>
  );
};
