import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <p key={workout._id}>
              <WorkoutDetails key={workout._id} workout={workout} />
            </p>
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
