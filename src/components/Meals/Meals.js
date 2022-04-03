import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import "./Meals.css"

const Meals = (props) => {
    const { meals, addCart, loading } = props;

     const searchedMeals = meals?.map((meal) => {
    return (
      <div  key={meal.idMeal} className="col-12 col-lg-4">
            <div className="meal-card p-2  mt-5">
                <div className="d-flex justify-content-center">
                    <img className="img-fluid rounded" src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
               <div className="p-3 d-flex flex-column justify-content-center mb-4">
                    <h5 className="my-3">{meal.strMeal}</h5>
                    <p>{meal.strInstructions.slice(0, 60)}...</p>
               </div>
               <button onClick={() => addCart(props)} className="btn btn-primary w-100 py-3 px-5 add-cart-btn">Add to Cart <i className="ms-2 fa-solid fa-burger"></i> </button>
            </div>
        </div>
    )
  }
  )



    return (
        <div>
            { loading ? 
            <div className="d-flex justify-content-center align-items-center spinner">
                   <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button>

            </div>
            :
            <div className="row container mx-auto">
            {searchedMeals}
            </div>
            }
        </div>
    );
};

export default Meals;