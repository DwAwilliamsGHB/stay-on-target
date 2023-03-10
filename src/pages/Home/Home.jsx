import { Box } from "@mui/material";
import { useState } from "react";

import Exercises from "../../components/Exercises/Exercises";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

export default function Home() {

    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    )
}