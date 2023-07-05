import { useForm } from "react-hook-form";

export default function IndexPage() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset
  } = useForm({
    mode: "onChange"
  });

  const onValid = (data) => {
    console.log("성공", data);
    reset();
  };
  const onInValid = () => {};
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          {...register("name", { required: "Please Write down your name" })}
          id="name"
          type="text"
        />
        <span>{errors.name?.message}</span>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", {
            required: "Please Write down your email",
            validate: {
              onlyNaver: (value) =>
                value.includes("@naver.com") || "Only @naver emails allowed"
            }
          })}
          id="email"
          type="email"
          placeholder="Only @naver.com"
        />

        <span>{errors.email?.message}</span>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          {...register("password", {
            required: "Please Write down your password",
            minLength: { value: 10, message: "Min 10 characters" }
          })}
          id="password"
          type="password"
          placeholder="Min 10 characters"
        />
        <span>{errors.password?.message}</span>
      </div>
      <button type="submit">Log in</button>
      <div>{isSubmitSuccessful ? "Trank you" : null}</div>
    </form>
  );
}
