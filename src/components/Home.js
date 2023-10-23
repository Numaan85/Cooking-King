import Recipe from "./Recipe";
import { ImSpinner9 } from "react-icons/im";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className='home container mx-auto py-8 flex flex-wrap gap-10 justify-center'>
      {/* If there is no loading or error or if there is no recipe  */}
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className='text-2xl font-semibold lg:text-4xl text-center leading-normal'>
            Please Search Some Recipe &#x1F468;&#x200D;&#x1F373; 
          </p>
          
        </div>
      ) : null}

      {/* If there is loading or error */}
      {loading && (
        <p>
          {error ? (
            <span className='text-2xl font-semibold  text-rose-300 lg:text-4xl text-center leading-normal'>
              {error} &#128373;&#127997;
            </span>
          ) : (
            <ImSpinner9 className='animate-spin' />
          )}
        </p>
      )}

      {/* If there is recipes here */}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;