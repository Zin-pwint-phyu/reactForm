import { categories } from ".";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});
type ExpeneseFormData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: ExpeneseFormData) => void;
}
const ExpeneseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpeneseFormData>({ resolver: zodResolver(schema) });
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description" className="label-form">
          Description
        </label>
        <input
          type="text"
          {...register("description")}
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
        <label htmlFor="amount" className="label-form">
          Amount
        </label>
        <input
          type="number"
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}

        <div className="mt-3">
          <label htmlFor="category" className="label-form">
            Categories
          </label>
          <select
            className="form-select"
            id="category"
            {...register("category")}>
            <option>All Categories</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </>
  );
};

export default ExpeneseForm;
