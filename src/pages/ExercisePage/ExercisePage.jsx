import { Box } from "@mui/material";
import { useState } from "react";

import Exercises from "../../components/Exercises/Exercises";
import SearchExercises from "../../components/SearchExercises/SearchExercises";

export default function ExercisePage() {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}