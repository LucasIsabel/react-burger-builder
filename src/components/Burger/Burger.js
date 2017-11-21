import React from 'react';
import classes from "./Burger.css";
import BurgerEngredients from "./BurgerIngredients/BurgerEngredients";

const Burger = props => {

    const arrayOfIngredientsKeys = Object.keys(props.ingredients).map(igKeys => [...Array(props.ingredients[igKeys])].map((_, i) => <BurgerEngredients key={igKeys + i} type={igKeys}/>));

    return (
        <div className={classes.Burger}>
            <BurgerEngredients type="bread-top" />
            {arrayOfIngredientsKeys}
            <BurgerEngredients type="bread-bottom" />
        </div>
    );
};

export default Burger;