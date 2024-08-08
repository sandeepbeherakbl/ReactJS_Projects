import PropTypes from 'prop-types';

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <h3>{meal.time}</h3>
      <p>{meal.plan}</p>
      <div className="nutrients">
        <span>Carbs: {meal.carbs} g</span>
        <span>Protein: {meal.protein} g</span>
        <span>Fiber: {meal.fiber} g</span>
        <span>Fat: {meal.fat} g</span>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    time: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    carbs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    protein: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    fiber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    fat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default MealCard;
