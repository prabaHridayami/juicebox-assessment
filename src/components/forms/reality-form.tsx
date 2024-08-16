import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/GlobalContext";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { firstNameSchema, emailSchema } from "@/libs/schemas";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import LottieAnimation from "@/components/shared/lottie-animation";
import { Previous } from "@/icons";

interface FormValues {
  firstName: string;
  email: string;
}

const RealityForm = () => {
  const [step, setStep] = useState<number>(1);
  const router = useRouter();
  const { setUser } = useGlobalContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      email: "",
    },
    resolver: zodResolver(step === 1 ? firstNameSchema : emailSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    if (step === 1) {
      setValue("email", "");
      setStep(2);
    } else {
      setUser(getValues("firstName"));
      router.push("/result");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <div className="multiform-step">
          <LottieAnimation wrapperClassName="lottie-wrapper-sm" />
          <p>Let&apos;s start with the basics. Type in your first name.</p>

          <div className="bottom-wrapper">
            {errors.firstName && (
              <p className="error-text">{errors.firstName.message}</p>
            )}
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }: any) => (
                <Input
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  placeholder="First name"
                  append={
                    <Button
                      type="submit"
                      disabled={errors.firstName ? true : false}
                      className="btn btn-ghost"
                    >
                      <Previous />
                    </Button>
                  }
                />
              )}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="multiform-step">
          <div>
            <LottieAnimation wrapperClassName="lottie-wrapper-sm" />
            <p>How should we contact you? Type in your email address.</p>
          </div>
          <div className="bottom-wrapper">
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }: any) => (
                <Input
                  placeholder="Email address"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  className={errors.email ? "input-error" : ""}
                  append={
                    <Button
                      type="submit"
                      disabled={errors.email ? true : false}
                      className="btn btn-ghost"
                    >
                      <Previous />
                    </Button>
                  }
                />
              )}
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default RealityForm;
