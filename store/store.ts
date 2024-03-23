import { defineStore } from "pinia";

const x = () => ({
  units: "kg",
  weight: 400,
  reps: 15,
  datetime: new Date(),
  exercise: 1,
});

const series = [x(), x(), x(), x(), x(), x(), x(), x()];

export const useStore = defineStore("exercises", {
  state() {
    return {
      muscles: [
        {
          id: 1,
          muscleGroup: "Brazo",
          muscle: "Bicep Largo",
        },
        {
          id: 2,
          muscleGroup: "Brazo",
          muscle: "Bicep Corto",
        },
        {
          id: 3,
          muscleGroup: "Brazo",
          muscle: "Tricep Corto",
        },
      ],

      muscleGroups: ["Pecho", "Piernas", "Brazo", "Otros"],

      exercises: [
        {
          id: 1,
          name: "Pec Dec",
          muscle: "Tricep Corto",
        },
        {
          id: 1,
          name: "Bench Press",
          muscle: "Tricep Corto",
        },
        {
          id: 1,
          name: "Leg Press",
          muscle: "Bicep Corto",
        },
        {
          id: 1,
          name: "Pec Dec",
          muscle: "Bicep Corto",
        },
        {
          id: 1,
          name: "Bench Press",
          muscle: "Bicep Corto",
        },
        {
          id: 1,
          name: "Leg Press",
          muscle: "Bicep Corto",
        },
      ],

      series: series,
    };
  },

  getters: {
    getMuscleGroups: (state) => state.muscleGroups,
    getMusclesOfGroup: (state) => (group: string) =>
      state.muscles.filter((muscle) => muscle.muscleGroup == group),
    getExercisesOfMuscle: (state) => (muscle: string) =>
      state.exercises.filter((ex) => ex.muscle == muscle),
    getExercise: (state) => (name: string) => {
      const ex = state.exercises.find((ex) => ex.name == name);
      if (!ex) return undefined;
      return {
        ...ex,
        muscleGroup: state.muscles.find((muscle) => muscle.muscle == ex.muscle)
          ?.muscleGroup,
        series: state.series.filter((serie) => serie.exercise == ex.id),
      };
    },
  },

  actions: {
    fetchExercises() {},
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
