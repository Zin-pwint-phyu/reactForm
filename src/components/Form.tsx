import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "The name must be at least 3 character" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "Age must be greater than 18" }),
});
type FormData = z.infer<typeof schema>;
const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   const person = { name: "", age: 0 };
  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current !== null) {
  //       person.name = nameRef.current.value;
  //       if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //       console.log(person);
  //     }
  //   };
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}

          {/* ref={nameRef} */}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            type="number"
            className="form-control"
            {...register("age")}
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
