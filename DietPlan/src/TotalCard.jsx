import PropTypes from 'prop-types';

const TotalCard = ({ totals }) => {
  return (
    <div className="total-card">
      <h3>Daily Totals</h3>
      <div className="totals">
        <p>Carbs: {totals.carbs} g</p>
        <p>Protein: {totals.protein} g</p>
        <p>Fiber: {totals.fiber} g</p>
        <p>Fat: {totals.fat} g</p>
        <p>Calories: {totals.calories} kcal</p>
      </div>
    </div>
  );
};

TotalCard.propTypes = {
  totals: PropTypes.shape({
    carbs: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    fiber: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};

export default TotalCard;
