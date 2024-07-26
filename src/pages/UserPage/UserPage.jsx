import { useState } from 'react';
import './UserPage.css'

export default function UserPage() {
  const [exerciseName, setExerciseName] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [reps, setReps] = useState('');
  const [goals, setGoals] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGoal = { exerciseName, targetWeight };
    if (reps !== '') {
      newGoal.reps = reps;
    }
    setGoals([...goals, newGoal]);
    setExerciseName('');
    setTargetWeight('');
    setReps('');
  };

  const handleEdit = (index) => {
    const selectedGoal = goals[index];
    setExerciseName(selectedGoal.exerciseName);
    setTargetWeight(selectedGoal.targetWeight);
    setReps(selectedGoal.reps || '');
    setGoals(goals.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container-about" >
        <label>
          <span>Target&nbsp;Exercise:</span>
          <input type="text" value={exerciseName} onChange={(event) => setExerciseName(event.target.value)} />
        </label>
        <label>
          <span>Target&nbsp;Weight:</span>
          <input type="text" value={targetWeight} onChange={(event) => setTargetWeight(event.target.value)} />
        </label>
        <label>
          <span>Target&nbsp;Reps:</span>
          <input type="text" value={reps} onChange={(event) => setReps(event.target.value)} />
        </label>
        <div className="btn">
          <button type="submit">Add&nbsp;Goal</button>
        </div>
      </form>
      <div className="goals">
        <h2>My Goals</h2>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>
              {goal.exerciseName} - {goal.targetWeight} {goal.reps && `- ${goal.reps} reps`}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}