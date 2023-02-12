import MealForm from "../MealForm/MealForm";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <CreatePageStyled>
      <h1 aria-label="Create a new meal" className="create-page__title">
        Create a new meal
      </h1>
      <MealForm />
    </CreatePageStyled>
  );
};

export default CreatePage;
