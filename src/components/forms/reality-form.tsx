import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { firstNameSchema, emailSchema } from "@/lib/schemas";

import { useRouter } from "next/navigation";
import Input from "@/components/ui/input";
import LottieAnimation from "@/components/shared/lottie-animation";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { Previous } from "@/icons";
import Button from "../ui/button";

import styles from "@/styles/realitycheck.module.css";

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
        <div className={styles.multiform_step}>
          <LottieAnimation wrapperClassName="lottie-wrapper-sm" />
          <p>Let&apos;s start with the basics. Type in your first name.</p>

          <div className="bottom-wrapper">
            {errors.firstName && (
              <p className="error-text">{errors.firstName.message}</p>
            )}
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
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
        <div className={styles.multiform_step}>
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
              render={({ field: { onChange, onBlur, value } }) => (
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
