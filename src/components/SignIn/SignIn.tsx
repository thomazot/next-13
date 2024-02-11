import { FieldPassword } from "@/forms/FieldPassword/FieldPassword";
import { FieldText } from "../../forms/FieldText";
import React from "react";
import { Button } from "@/forms/Button";
import { Card } from "@/common/Card";
import { Logo } from "../Logo/Logo";


type SignInProps = React.HTMLAttributes<HTMLFormElement>

export const SignIn: React.FC<SignInProps> = (props) => (
    <Card className="gap-8 p-8 items-center w-96" >
        <Logo />
  
        <form {...props} className="flex flex-col gap-8 w-full">
            <FieldText label="Username" name="username" aria-label="username" />
            <FieldPassword label="Password" name="password" aria-label="password" />
            <Button type="submit">Login</Button>
        </form>
    </Card>
)