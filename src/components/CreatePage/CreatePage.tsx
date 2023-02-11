import MealForm from "../MealForm/MealForm";

const CreatePage = (): JSX.Element => {
  return (
    <>
      <h1 aria-label="Create a new meal" className="meal-form__title">
        Create a new meal
      </h1>
      <MealForm />
    </>
  );
};

export default CreatePage;
